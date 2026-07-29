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

export async function submitReview(formData) {
  const name = formData.get('name')?.toString().trim();
  const city = formData.get('city')?.toString().trim() || null;
  const rating = Number(formData.get('rating'));
  const review_text = formData.get('review_text')?.toString().trim();

  if (!name || !review_text || !rating || rating < 1 || rating > 5) {
    return { success: false, error: 'Vul een naam, beoordeling en review in.' };
  }

  const supabase = await createClient();
  const { error } = await supabase.from('reviews').insert({
    name,
    city,
    rating,
    review_text,
    approved: true,
  });

  if (error) {
    return { success: false, error: 'Er ging iets mis bij het versturen. Probeer het opnieuw.' };
  }

  return { success: true };
}

export async function submitAanmeldenForm(data) {
  const { keukenblad, kastje_leeg, quooker, bron, naam, telefoon, email, postcode, huisnummer } = data;

  if (!keukenblad || !kastje_leeg || !quooker || !bron || !naam || !telefoon || !email || !postcode || !huisnummer) {
    return { success: false, error: 'Vul alle verplichte velden in.' };
  }

  const supabase = await createClient();
  const { error } = await supabase.from('aanmelden_submissions').insert({
    keukenblad,
    kastje_leeg,
    quooker,
    bron,
    naam,
    telefoon,
    email,
    postcode,
    huisnummer,
  });

  if (error) {
    return { success: false, error: 'Er ging iets mis bij het versturen. Probeer het opnieuw.' };
  }

  return { success: true };
}
