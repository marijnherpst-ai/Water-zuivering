import { createClient } from '@/lib/supabase/server';
import { haalDashboardData, haalMetaData, haalSamenData, vandaagInAmsterdam } from '@/lib/dashboard/data';
import { demoBron, demoSamen } from '@/lib/dashboard/demo';
import LoginForm from '@/components/dashboard/LoginForm';
import DashboardView from '@/components/dashboard/DashboardView';
import SamenView from '@/components/dashboard/SamenView';
import AdviesView from '@/components/dashboard/AdviesView';
import { uitloggen } from './actions';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const LOKAAL_VOORBEELD = process.env.NODE_ENV !== 'production' && process.env.DASHBOARD_PREVIEW === '1';

export default async function DashboardPage({ searchParams }) {
  const sp = await searchParams;
  const bron = sp?.bron === 'facebook' ? 'facebook' : sp?.bron === 'samen' ? 'samen' : sp?.bron === 'advies' ? 'advies' : 'google';
  const wilDemo = sp?.demo === '1';
  const metaGekoppeld = Boolean(process.env.META_ACCESS_TOKEN);

  if (LOKAAL_VOORBEELD && bron === 'advies') {
    return <AdviesView data={demoSamen(vandaagInAmsterdam())} email="lokaal" metaGekoppeld={metaGekoppeld} />;
  }

  if (LOKAAL_VOORBEELD && bron === 'samen') {
    return <SamenView data={demoSamen(vandaagInAmsterdam())} email="lokaal" />;
  }

  if (LOKAAL_VOORBEELD) {
    return <DashboardView data={demoBron(vandaagInAmsterdam(), bron)} email="lokaal" geenEchteCijfers metaGekoppeld={metaGekoppeld} />;
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return <LoginForm />;

  const { data: isAdmin } = await supabase.rpc('is_admin');
  if (!isAdmin) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-sm text-center">
          <p className="font-display text-xl text-white">Geen toegang</p>
          <p className="mt-2 text-sm text-[#8A93A3]">Dit account ({user.email}) heeft geen toegang tot het overzicht.</p>
          <form action={uitloggen} className="mt-6">
            <button className="rounded-full border border-white/15 px-5 py-2 text-sm text-white hover:bg-white/5">Uitloggen</button>
          </form>
        </div>
      </main>
    );
  }

  if (bron === 'advies') {
    const samen = await haalSamenData(supabase);
    const geenCijfers = samen.google.campagnes.length === 0 && samen.facebook.campagnes.length === 0;
    const demo = wilDemo || (sp?.demo !== '0' && geenCijfers);
    const gegevens = demo ? { ...demoSamen(vandaagInAmsterdam()), aanvragen: samen.aanvragen } : samen;
    return <AdviesView data={gegevens} email={user.email} metaGekoppeld={metaGekoppeld} />;
  }

  if (bron === 'samen') {
    const samen = await haalSamenData(supabase);
    const geenRoutes = !samen.leads.some((l) => l.type !== 'giveaway' && l.journey);
    const demo = wilDemo || (sp?.demo !== '0' && geenRoutes);
    const gegevens = demo ? { ...demoSamen(vandaagInAmsterdam()), aanvragen: samen.aanvragen } : samen;
    return <SamenView data={gegevens} email={user.email} />;
  }

  const echt = bron === 'facebook' ? await haalMetaData(supabase) : await haalDashboardData(supabase);
  const geenEchteCijfers = echt.campagnes.length === 0;
  const toonDemo = wilDemo || (sp?.demo !== '0' && geenEchteCijfers);
  const data = toonDemo ? { ...demoBron(vandaagInAmsterdam(), bron), aanvragen: echt.aanvragen, syncStatus: echt.syncStatus } : echt;
  return <DashboardView data={data} email={user.email} geenEchteCijfers={geenEchteCijfers} metaGekoppeld={metaGekoppeld} />;
}
