import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { alleZoekwoordIdeeen, zoekwoordHistorie } from '@/lib/dashboard/googleAdsApi';

// Admin-only endpoint for the own SEO keyword database (seo_zoekwoorden).
// Body.actie:
//   'import'    { rows: [{ zoekwoord, ... }] }        upsert rows as given
//   'ideeen'    { seeds?: string[], url?: string }     Keyword Planner ideas -> upsert
//   'verversen' { keywords?: string[] }                refresh volume/competition/bids
//                                                       (default: all keywords in the table)
// Planner data only updates the planner columns, so relevance, topic and
// target page that were set by hand are never overwritten.
export const maxDuration = 60;

const MAANDEN = ['', 'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
const euro = (micros) => (micros == null ? null : Math.round(Number(micros) / 10000) / 100);

function plannerRij(tekst, m, closeVariants) {
  const perMaand = (m?.monthlySearchVolumes || []).map((v) => ({
    maand: `${v.year}-${String(MAANDEN.indexOf(v.month)).padStart(2, '0')}`,
    volume: Number(v.monthlySearches || 0),
  }));
  return {
    zoekwoord: tekst.trim().toLowerCase(),
    volume: m?.avgMonthlySearches != null ? Number(m.avgMonthlySearches) : 0,
    volume_per_maand: perMaand,
    concurrentie: m?.competition || null,
    concurrentie_index: m?.competitionIndex != null ? Number(m.competitionIndex) : null,
    cpc_laag: euro(m?.lowTopOfPageBidMicros),
    cpc_hoog: euro(m?.highTopOfPageBidMicros),
    synoniemen: (closeVariants || []).map((s) => s.toLowerCase()).filter((s) => s !== tekst.toLowerCase()),
    volume_bijgewerkt: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
}

async function upsert(supabase, rows, { nieuwBron } = {}) {
  let opgeslagen = 0;
  for (let i = 0; i < rows.length; i += 500) {
    const deel = rows.slice(i, i + 500);
    if (nieuwBron) {
      // New keywords get a source label; existing ones keep theirs.
      const { data: bestaand } = await supabase.from('seo_zoekwoorden').select('zoekwoord').in('zoekwoord', deel.map((r) => r.zoekwoord));
      const bekend = new Set((bestaand || []).map((r) => r.zoekwoord));
      for (const r of deel) if (!bekend.has(r.zoekwoord)) r.bron = nieuwBron;
      const nieuw = deel.filter((r) => r.bron);
      const oud = deel.filter((r) => !r.bron);
      if (nieuw.length) {
        const { error } = await supabase.from('seo_zoekwoorden').insert(nieuw);
        if (error) throw new Error(error.message);
      }
      if (oud.length) {
        const { error } = await supabase.from('seo_zoekwoorden').upsert(oud, { onConflict: 'zoekwoord' });
        if (error) throw new Error(error.message);
      }
    } else {
      const { error } = await supabase.from('seo_zoekwoorden').upsert(deel, { onConflict: 'zoekwoord' });
      if (error) throw new Error(error.message);
    }
    opgeslagen += deel.length;
  }
  return opgeslagen;
}

export async function POST(request) {
  const supabase = await createClient();
  const { data: isAdmin } = await supabase.rpc('is_admin');
  if (!isAdmin) return NextResponse.json({ ok: false, reden: 'Geen toegang.' }, { status: 403 });

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, reden: 'Ongeldige JSON.' }, { status: 400 });
  }

  try {
    if (body.actie === 'import') {
      const rows = (body.rows || [])
        .filter((r) => r?.zoekwoord)
        .map((r) => ({ ...r, zoekwoord: String(r.zoekwoord).trim().toLowerCase(), updated_at: new Date().toISOString() }));
      const uniek = [...new Map(rows.map((r) => [r.zoekwoord, r])).values()];
      return NextResponse.json({ ok: true, opgeslagen: await upsert(supabase, uniek) });
    }

    if (body.actie === 'ideeen') {
      const seeds = (body.seeds || []).slice(0, 20);
      if (!seeds.length && !body.url) return NextResponse.json({ ok: false, reden: 'Geef seeds of een url.' }, { status: 400 });
      const ideeen = await alleZoekwoordIdeeen({ seeds, url: body.url || null });
      const rows = [...new Map(ideeen.map((r) => {
        const rij = plannerRij(r.text, r.keywordIdeaMetrics, r.closeVariants);
        return [rij.zoekwoord, rij];
      })).values()];
      const opgeslagen = await upsert(supabase, rows, { nieuwBron: 'zoekwoordplanner' });
      return NextResponse.json({ ok: true, gevonden: ideeen.length, opgeslagen });
    }

    if (body.actie === 'verversen') {
      let keywords = body.keywords;
      if (!keywords?.length) {
        keywords = [];
        for (let van = 0; ; van += 1000) {
          const { data, error } = await supabase.from('seo_zoekwoorden').select('zoekwoord').order('id').range(van, van + 999);
          if (error) throw new Error(error.message);
          keywords.push(...data.map((r) => r.zoekwoord));
          if (data.length < 1000) break;
        }
      }
      // Google rejects keywords longer than 80 characters or 10 words.
      keywords = keywords.filter((k) => k.length <= 80 && k.split(/\s+/).length <= 10);
      let opgeslagen = 0;
      for (let i = 0; i < keywords.length; i += 5000) {
        const resultaten = await zoekwoordHistorie(keywords.slice(i, i + 5000));
        const rows = resultaten.map((r) => plannerRij(r.text, r.keywordMetrics, r.closeVariants));
        opgeslagen += await upsert(supabase, [...new Map(rows.map((r) => [r.zoekwoord, r])).values()], { nieuwBron: 'zoekwoordplanner' });
      }
      return NextResponse.json({ ok: true, gevraagd: keywords.length, opgeslagen });
    }

    return NextResponse.json({ ok: false, reden: 'Onbekende actie.' }, { status: 400 });
  } catch (e) {
    return NextResponse.json({ ok: false, reden: e.message }, { status: 500 });
  }
}
