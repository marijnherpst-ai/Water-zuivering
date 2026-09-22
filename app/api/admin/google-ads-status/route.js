import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { gaqlQuery } from '@/lib/dashboard/googleAdsApi';

export async function GET() {
  const supabase = await createClient();
  const { data: isAdmin } = await supabase.rpc('is_admin');
  if (!isAdmin) return NextResponse.json({ ok: false, reden: 'Geen toegang.' }, { status: 403 });

  try {
    const rows = await gaqlQuery('SELECT campaign.id, campaign.name, campaign.status FROM campaign ORDER BY campaign.id');
    return NextResponse.json({ ok: true, campagnes: rows.map((r) => r.campaign) });
  } catch (e) {
    return NextResponse.json({ ok: false, reden: e.message }, { status: 500 });
  }
}
