import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { stuurWelkomstMail, stuurLeadMelding } from '@/lib/email';

export async function GET(request) {
  const supabase = await createClient();
  const { data: isAdmin } = await supabase.rpc('is_admin');
  if (!isAdmin) return NextResponse.json({ ok: false, reden: 'Geen toegang.' }, { status: 403 });

  // ?type=lead sends a sample lead alert to LEAD_MELDING_EMAIL without touching the database.
  if (request.nextUrl.searchParams.get('type') === 'lead') {
    const resultaat = await stuurLeadMelding({
      formulier: 'aanmelden', naam: 'Test Lead', telefoon: '0612345678', email: 'test@example.com', postcode: '1234 AB',
      velden: [['Huisnummer', '1'], ['Keukenblad', 'Test'], ['Kastje leeg', 'Ja'], ['Quooker', 'Nee'], ['Gevonden via', 'Test']],
    });
    return NextResponse.json({ heeftKey: !!process.env.RESEND_API_KEY, heeftOntvanger: !!process.env.LEAD_MELDING_EMAIL, resultaat });
  }

  const email = request.nextUrl.searchParams.get('email');
  if (!email) return NextResponse.json({ ok: false, reden: 'email (?email=) is verplicht.' }, { status: 400 });

  const heeftKey = !!process.env.RESEND_API_KEY;
  const resultaat = await stuurWelkomstMail({ naam: 'Test', email });

  return NextResponse.json({ heeftKey, resultaat });
}
