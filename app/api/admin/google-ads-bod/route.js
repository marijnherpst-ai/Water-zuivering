import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { pasBodAan } from '@/lib/dashboard/googleAdsCampaign2';

export async function POST(request) {
  const supabase = await createClient();
  const { data: isAdmin } = await supabase.rpc('is_admin');
  if (!isAdmin) return NextResponse.json({ ok: false, reden: 'Geen toegang.' }, { status: 403 });

  const adGroupId = request.nextUrl.searchParams.get('adGroupId');
  const micros = request.nextUrl.searchParams.get('micros');
  if (!adGroupId || !micros) return NextResponse.json({ ok: false, reden: 'adGroupId en micros zijn verplicht.' }, { status: 400 });

  try {
    const result = await pasBodAan(adGroupId, micros);
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ ok: false, reden: e.message, ruw: e.ruw }, { status: 500 });
  }
}
