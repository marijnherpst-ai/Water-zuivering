import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { pasZoekwoordBodAan } from '@/lib/dashboard/googleAdsCampaign2';

export async function POST(request) {
  const supabase = await createClient();
  const { data: isAdmin } = await supabase.rpc('is_admin');
  if (!isAdmin) return NextResponse.json({ ok: false, reden: 'Geen toegang.' }, { status: 403 });

  const criterion = request.nextUrl.searchParams.get('criterion');
  const bodMicros = request.nextUrl.searchParams.get('bodMicros');
  if (!criterion || !bodMicros) {
    return NextResponse.json({ ok: false, reden: 'criterion en bodMicros zijn verplicht.' }, { status: 400 });
  }

  try {
    const result = await pasZoekwoordBodAan(criterion, bodMicros);
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ ok: false, reden: e.message, ruw: e.ruw }, { status: 500 });
  }
}
