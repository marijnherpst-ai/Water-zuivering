import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { pauzeerAdGroepen } from '@/lib/dashboard/googleAdsCampaign2';

export async function POST(request) {
  const supabase = await createClient();
  const { data: isAdmin } = await supabase.rpc('is_admin');
  if (!isAdmin) return NextResponse.json({ ok: false, reden: 'Geen toegang.' }, { status: 403 });

  const ids = request.nextUrl.searchParams.get('ids')?.split(',') || [];
  if (!ids.length) return NextResponse.json({ ok: false, reden: 'Geen ids opgegeven.' }, { status: 400 });

  try {
    const result = await pauzeerAdGroepen(ids);
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ ok: false, reden: e.message, ruw: e.ruw }, { status: 500 });
  }
}
