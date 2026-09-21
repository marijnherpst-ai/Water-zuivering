import { createClient } from '@/lib/supabase/server';
import { haalDashboardData, haalMetaData, vandaagInAmsterdam } from '@/lib/dashboard/data';
import { demoBron } from '@/lib/dashboard/demo';
import LoginForm from '@/components/dashboard/LoginForm';
import DashboardView from '@/components/dashboard/DashboardView';
import { uitloggen } from './actions';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const LOKAAL_VOORBEELD = process.env.NODE_ENV !== 'production' && process.env.DASHBOARD_PREVIEW === '1';

export default async function DashboardPage({ searchParams }) {
  const sp = await searchParams;
  const bron = sp?.bron === 'facebook' ? 'facebook' : 'google';
  const wilDemo = sp?.demo === '1';
  const metaGekoppeld = Boolean(process.env.META_ACCESS_TOKEN);

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

  const echt = bron === 'facebook' ? await haalMetaData(supabase) : await haalDashboardData(supabase);
  const geenEchteCijfers = echt.campagnes.length === 0;
  const toonDemo = wilDemo || (sp?.demo !== '0' && geenEchteCijfers);
  const data = toonDemo ? { ...demoBron(vandaagInAmsterdam(), bron), aanvragen: echt.aanvragen, syncStatus: echt.syncStatus } : echt;
  return <DashboardView data={data} email={user.email} geenEchteCijfers={geenEchteCijfers} metaGekoppeld={metaGekoppeld} />;
}
