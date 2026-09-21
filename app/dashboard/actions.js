'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { createClient } from '@/lib/supabase/server';
import { syncMeta } from '@/lib/dashboard/meta';

export async function inloggen(_vorige, formData) {
  const email = formData.get('email')?.toString().trim();
  const wachtwoord = formData.get('wachtwoord')?.toString();
  if (!email || !wachtwoord) return { fout: 'Vul je e-mailadres en wachtwoord in.' };

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password: wachtwoord });
  if (error) return { fout: 'Inloggen is niet gelukt. Controleer je gegevens.' };

  redirect('/dashboard');
}

export async function uitloggen() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/dashboard');
}

export async function synchroniseerMeta(force) {
  const supabase = await createClient();
  const { data: isAdmin } = await supabase.rpc('is_admin');
  if (!isAdmin) return { ok: false, reden: 'Geen toegang.' };
  const r = await syncMeta(supabase, { force: force === true });
  if (r.ok && !r.overgeslagen) revalidatePath('/dashboard');
  return r;
}

const kort = (v, n) => (v == null ? null : String(v).slice(0, n));

export async function stuurAanvraag({ periode, notitie, items }) {
  const supabase = await createClient();
  const { data: isAdmin } = await supabase.rpc('is_admin');
  if (!isAdmin) return { ok: false, fout: 'Geen toegang.' };

  const schoon = (Array.isArray(items) ? items : []).slice(0, 80).map((i) => ({
    soort: kort(i.soort, 20),
    titel: kort(i.titel, 200),
    uitleg: kort(i.uitleg, 400),
    kanaal: kort(i.kanaal, 20),
    actie: kort(i.actie, 400),
    zekerheid: kort(i.zekerheid, 20),
    door: kort(i.door, 20),
    ref: {
      niveau: kort(i.ref?.niveau, 20),
      naam: kort(i.ref?.naam, 200),
      groep: kort(i.ref?.groep, 120),
      campagne: kort(i.ref?.campagne, 200),
      reden: kort(i.ref?.reden, 200),
      kosten: Number(i.ref?.kosten) || 0,
      leads: Number(i.ref?.leads) || 0,
    },
  }));

  if (schoon.length === 0) return { ok: false, fout: 'Er is niets om te versturen.' };

  const { error } = await supabase.from('ads_review_requests').insert({
    period: kort(periode, 20),
    note: kort(notitie, 1000),
    items: schoon,
  });
  if (error) return { ok: false, fout: 'Versturen is niet gelukt. Probeer het opnieuw.' };

  revalidatePath('/dashboard');
  return { ok: true };
}
