import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { genereerZoekwoordIdeeen } from '@/lib/dashboard/googleAdsApi';

export async function GET(request) {
  const supabase = await createClient();
  const { data: isAdmin } = await supabase.rpc('is_admin');
  if (!isAdmin) return NextResponse.json({ ok: false, reden: 'Geen toegang.' }, { status: 403 });

  const woorden = request.nextUrl.searchParams.get('woorden');
  if (!woorden) return NextResponse.json({ ok: false, reden: 'woorden (komma-gescheiden) is verplicht.' }, { status: 400 });

  try {
    const rows = await genereerZoekwoordIdeeen(woorden.split(',').map((w) => w.trim()).filter(Boolean));
    return NextResponse.json({ ok: true, rows });
  } catch (e) {
    return NextResponse.json({ ok: false, reden: e.message }, { status: 500 });
  }
}
