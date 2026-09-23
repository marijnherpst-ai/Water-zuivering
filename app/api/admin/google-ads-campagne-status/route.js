import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { zetCampagneStatus } from '@/lib/dashboard/googleAdsCampaign2';

export async function POST(request) {
  const supabase = await createClient();
  const { data: isAdmin } = await supabase.rpc('is_admin');
  if (!isAdmin) return NextResponse.json({ ok: false, reden: 'Geen toegang.' }, { status: 403 });

  const campaignId = request.nextUrl.searchParams.get('campaignId');
  const status = request.nextUrl.searchParams.get('status');
  if (!campaignId || !['ENABLED', 'PAUSED'].includes(status)) {
    return NextResponse.json({ ok: false, reden: 'campaignId en status (ENABLED of PAUSED) zijn verplicht.' }, { status: 400 });
  }

  try {
    const result = await zetCampagneStatus(campaignId, status);
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ ok: false, reden: e.message, ruw: e.ruw }, { status: 500 });
  }
}
