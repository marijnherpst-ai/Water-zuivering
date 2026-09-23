import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { herstructureerSearch1NaarStags } from '@/lib/dashboard/googleAdsCampaign2';

export async function POST() {
  const supabase = await createClient();
  const { data: isAdmin } = await supabase.rpc('is_admin');
  if (!isAdmin) return NextResponse.json({ ok: false, reden: 'Geen toegang.' }, { status: 403 });

  try {
    const result = await herstructureerSearch1NaarStags();
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ ok: false, reden: e.message, ruw: e.ruw }, { status: 500 });
  }
}
