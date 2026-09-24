import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { stuurWelkomstMail } from '@/lib/email';

export async function GET(request) {
  const supabase = await createClient();
  const { data: isAdmin } = await supabase.rpc('is_admin');
  if (!isAdmin) return NextResponse.json({ ok: false, reden: 'Geen toegang.' }, { status: 403 });

  const email = request.nextUrl.searchParams.get('email');
  if (!email) return NextResponse.json({ ok: false, reden: 'email (?email=) is verplicht.' }, { status: 400 });

  const heeftKey = !!process.env.RESEND_API_KEY;
  const resultaat = await stuurWelkomstMail({ naam: 'Test', email });

  return NextResponse.json({ heeftKey, resultaat });
}
