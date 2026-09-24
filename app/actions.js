'use server';

import { createClient } from '@/lib/supabase/server';
import { stuurWelkomstMail } from '@/lib/email';

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

  await stuurWelkomstMail({ naam, email });

  return { success: true };
}

const LEAD_TYPES = ['aanmelden', 'contact', 'besparing', 'giveaway', 'pfas_check'];

function kort(waarde) {
  return typeof waarde === 'string' && waarde ? waarde.slice(0, 200) : null;
}

export async function logLeadEvent(data) {
  if (!data || !LEAD_TYPES.includes(data.type)) return { success: false };

  const supabase = await createClient();
  const { error } = await supabase.from('lead_events').insert({
    lead_type: data.type,
    page_path: kort(data.page),
    landing_page: kort(data.landing_page),
    referrer_host: kort(data.referrer_host),
    utm_source: kort(data.utm_source),
    utm_medium: kort(data.utm_medium),
    utm_campaign: kort(data.utm_campaign),
    utm_term: kort(data.utm_term),
    utm_content: kort(data.utm_content),
    gclid: kort(data.gclid),
    fbclid: kort(data.fbclid),
    journey: kort(data.journey),
    journey_days: Number.isFinite(Number(data.journey_days)) && Number(data.journey_days) >= 0 ? Math.min(Number(data.journey_days), 365) : null,
    journey_detail: typeof data.journey_detail === 'string' && data.journey_detail ? data.journey_detail.slice(0, 700) : null,
    consent: data.consent === true,
  });

  return { success: !error };
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

  await stuurWelkomstMail({ naam, email });

  return { success: true };
}

export async function submitBesparingLead(data) {
  const { naam, email, telefoon, postcode, huisnummer, watermerk, personen, glazen, besparing } = data;

  if (!naam || !email || !telefoon || !postcode || !huisnummer || !watermerk || !personen || !glazen || besparing == null) {
    return { success: false, error: 'Vul alle verplichte velden in.' };
  }

  const supabase = await createClient();
  const { error } = await supabase.from('besparing_leads').insert({
    naam,
    email,
    telefoon,
    postcode,
    huisnummer,
    watermerk,
    personen,
    glazen,
    besparing_per_jaar: besparing,
  });

  if (error) {
    return { success: false, error: 'Er ging iets mis bij het versturen. Probeer het opnieuw.' };
  }

  await stuurWelkomstMail({ naam, email });

  return { success: true };
}

export async function submitGiveawayEntry(formData) {
  const voornaam = formData.get('voornaam')?.toString().trim();
  const achternaam = formData.get('achternaam')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const postcode = formData.get('postcode')?.toString().trim();
  const huisnummer = formData.get('huisnummer')?.toString().trim();
  const telefoon = formData.get('telefoon')?.toString().trim();

  if (!voornaam || !achternaam || !email || !postcode || !huisnummer || !telefoon) {
    return { success: false, error: 'Vul alle velden in.' };
  }

  const supabase = await createClient();
  const { error } = await supabase.from('giveaway_entries').insert({
    voornaam,
    achternaam,
    email,
    postcode,
    huisnummer,
    telefoon,
  });

  if (error) {
    return { success: false, error: 'Er ging iets mis bij het versturen. Probeer het opnieuw.' };
  }

  return { success: true };
}
