import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { gaqlQuery } from '@/lib/dashboard/googleAdsApi';

export async function GET(request) {
  const supabase = await createClient();
  const { data: isAdmin } = await supabase.rpc('is_admin');
  if (!isAdmin) return NextResponse.json({ ok: false, reden: 'Geen toegang.' }, { status: 403 });

  const query = request.nextUrl.searchParams.get('q');
  if (!query) return NextResponse.json({ ok: false, reden: 'Geen query (?q=) opgegeven.' }, { status: 400 });

  try {
    const rows = await gaqlQuery(query);
    return NextResponse.json({ ok: true, rows });
  } catch (e) {
    return NextResponse.json({ ok: false, reden: e.message }, { status: 500 });
  }
}
