import { createClient } from '@/lib/supabase/server';
import { haalDashboardData, vandaagInAmsterdam } from '@/lib/dashboard/data';
import { demoData } from '@/lib/dashboard/demo';
import LoginForm from '@/components/dashboard/LoginForm';
import DashboardView from '@/components/dashboard/DashboardView';
import { uitloggen } from './actions';

export const dynamic = 'force-dynamic';

const LOKAAL_VOORBEELD = process.env.NODE_ENV !== 'production' && process.env.DASHBOARD_PREVIEW === '1';

export default async function DashboardPage({ searchParams }) {
  const sp = await searchParams;
  const wilDemo = sp?.demo === '1';

  if (LOKAAL_VOORBEELD) {
    return <DashboardView data={demoData(vandaagInAmsterdam())} />;
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

  const data = wilDemo ? demoData(vandaagInAmsterdam()) : await haalDashboardData(supabase);
  return <DashboardView data={data} email={user.email} />;
}
