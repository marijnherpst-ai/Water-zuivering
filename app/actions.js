'use server';

import { createClient } from '@/lib/supabase/server';

export async function submitContactForm(formData) {
  const naam = formData.get('naam')?.toString().trim();
  const telefoon = formData.get('telefoon')?.toString().trim();
  const postcode = formData.get('postcode')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const bericht = formData.get('bericht')?.toString().trim() || null;

  if (!naam || !telefoon || !postcode || !email) {
    return { success: false, error: 'Vul alle verplichte velden in.' };
  }

  const supabase = await createClient();
  const { error } = await supabase.from('contact_submissions').insert({
    naam,
    telefoon,
    postcode,
    email,
    bericht,
  });

  if (error) {
    return { success: false, error: 'Er ging iets mis bij het versturen. Probeer het opnieuw.' };
  }

  return { success: true };
}

export async function submitAanmeldenForm(data) {
  const { keukenblad, kastje_leeg, quooker, bron, naam, email, postcode, huisnummer } = data;

  if (!keukenblad || !kastje_leeg || !quooker || !bron || !naam || !email || !postcode || !huisnummer) {
    return { success: false, error: 'Vul alle verplichte velden in.' };
  }

  const supabase = await createClient();
  const { error } = await supabase.from('aanmelden_submissions').insert({
    keukenblad,
    kastje_leeg,
    quooker,
    bron,
    naam,
    email,
    postcode,
    huisnummer,
  });

  if (error) {
    return { success: false, error: 'Er ging iets mis bij het versturen. Probeer het opnieuw.' };
  }

  return { success: true };
}
