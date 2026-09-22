import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { maakSearchCampagne } from '@/lib/dashboard/googleAdsCampaign';

export async function GET() {
  const supabase = await createClient();
  const { data: isAdmin } = await supabase.rpc('is_admin');
  if (!isAdmin) return NextResponse.json({ ok: false, reden: 'Geen toegang.' }, { status: 403 });

  try {
    const r = await maakSearchCampagne();
    return NextResponse.json(r);
  } catch (e) {
    return NextResponse.json({ ok: false, reden: e.message }, { status: 500 });
  }
}
