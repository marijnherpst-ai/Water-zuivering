import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { verwijderAssetGroupAssets } from '@/lib/dashboard/googleAdsCampaign2';

export async function POST(request) {
  const supabase = await createClient();
  const { data: isAdmin } = await supabase.rpc('is_admin');
  if (!isAdmin) return NextResponse.json({ ok: false, reden: 'Geen toegang.' }, { status: 403 });

  const { resourceNames } = await request.json().catch(() => ({}));
  if (!Array.isArray(resourceNames) || !resourceNames.length) {
    return NextResponse.json({ ok: false, reden: 'resourceNames array is verplicht.' }, { status: 400 });
  }

  try {
    const result = await verwijderAssetGroupAssets(resourceNames);
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ ok: false, reden: e.message, ruw: e.ruw }, { status: 500 });
  }
}
