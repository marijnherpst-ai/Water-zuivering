import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { testMinimaleCampagne, verwijderCampagne } from '@/lib/dashboard/googleAdsCampaign2';
import { CUSTOMER_ID } from '@/lib/dashboard/googleAdsApi';

async function run(request) {
  const supabase = await createClient();
  const { data: isAdmin } = await supabase.rpc('is_admin');
  if (!isAdmin) return NextResponse.json({ ok: false, reden: 'Geen toegang.' }, { status: 403 });

  const verwijderId = request.nextUrl.searchParams.get('verwijder');

  try {
    if (verwijderId) {
      const rn = `customers/${CUSTOMER_ID}/campaigns/${verwijderId}`;
      const result = await verwijderCampagne(rn);
      return NextResponse.json(result);
    }
    const result = await testMinimaleCampagne();
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ ok: false, reden: e.message, ruw: e.ruw }, { status: 500 });
  }
}

export async function POST(request) {
  return run(request);
}
