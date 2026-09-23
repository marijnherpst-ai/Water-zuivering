import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { pasBudgetAan } from '@/lib/dashboard/googleAdsCampaign2';

export async function POST(request) {
  const supabase = await createClient();
  const { data: isAdmin } = await supabase.rpc('is_admin');
  if (!isAdmin) return NextResponse.json({ ok: false, reden: 'Geen toegang.' }, { status: 403 });

  const budgetId = request.nextUrl.searchParams.get('budgetId');
  const bedragMicros = request.nextUrl.searchParams.get('bedragMicros');
  if (!budgetId || !bedragMicros) {
    return NextResponse.json({ ok: false, reden: 'budgetId en bedragMicros zijn verplicht.' }, { status: 400 });
  }

  try {
    const result = await pasBudgetAan(budgetId, bedragMicros);
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ ok: false, reden: e.message, ruw: e.ruw }, { status: 500 });
  }
}
