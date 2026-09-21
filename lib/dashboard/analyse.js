export const PERIODES = [
  { id: 'vandaag', label: 'Vandaag', dagen: 1 },
  { id: '7', label: '7 dagen', dagen: 7 },
  { id: '14', label: '2 weken', dagen: 14 },
  { id: '30', label: '1 maand', dagen: 30 },
];

export const STANDAARD_INSTELLINGEN = { doelCpl: 35, verspildVanaf: 30, minKlikken: 10 };

const MAPPING = {
  campagnes: { 'waterzuivering-koop': 'Zoeken - Waterzuivering (koop)' },
  groepen: {
    'waterzuivering-thuis': 'Waterzuivering thuis',
    'waterfilter-kraan': 'Waterfilter kraan',
    osmosesysteem: 'Osmosesysteem',
    'installatie-kopen': 'Installatie en kopen',
    merknaam: 'Merknaam',
  },
};

const UITSLUIT_WOORDEN = [
  'gratis', 'diy', 'zelf maken', 'zelfbouw', 'wat is', 'betekenis', 'hoe werkt', 'werking', 'uitleg', 'forum', 'pdf',
  'wikipedia', 'test', 'vacature', 'cursus', 'opleiding', 'tweedehands', 'vervangen', 'vervanging', 'vervangfilter',
  'vervangfilters', 'cartridge', 'cartridges', 'patroon', 'patronen', 'membraan', 'sedimentfilter', 'onderdelen',
  'reserveonderdelen', 'kan', 'kannen', 'filterkan', 'brita', 'douchekop', 'drinkfles', 'fles', 'waterontharder',
  'ontharder', 'koffiemachine', 'espresso', 'ijsblokjes', 'koelkast', 'glazenwasser', 'outdoor', 'survival', 'camping',
  'caravan', 'boot', 'tuin', 'vijver', 'aquarium', 'zwembad', 'regenwater', 'putwater', 'rioolwater', 'afvalwater',
  'rwzi', 'industrieel', 'bedrijven',
];

export function norm(s) {
  return String(s || '').toLowerCase().replace(/[[\]"+]/g, '').replace(/\s+/g, ' ').trim();
}

export function slug(s) {
  return norm(s).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function eur(n, decimalen) {
  const v = Number(n) || 0;
  const d = decimalen ?? (Math.abs(v) >= 100 ? 0 : 2);
  return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR', minimumFractionDigits: d, maximumFractionDigits: d }).format(v);
}

export function getal(n, decimalen = 0) {
  return new Intl.NumberFormat('nl-NL', { minimumFractionDigits: decimalen, maximumFractionDigits: decimalen }).format(Number(n) || 0);
}

export function addDagen(iso, n) {
  const d = new Date(`${iso}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

export function bereik(vandaag, dagen) {
  return { van: addDagen(vandaag, -(dagen - 1)), tot: vandaag };
}

export function vorigBereik(vandaag, dagen) {
  const eind = addDagen(vandaag, -dagen);
  return { van: addDagen(eind, -(dagen - 1)), tot: eind };
}

function inBereik(dag, b) {
  return dag >= b.van && dag <= b.tot;
}

export function uitsluitWoord(term) {
  const t = ` ${norm(term).replace(/[^a-z0-9à-ÿ ]+/g, ' ').replace(/\s+/g, ' ')} `;
  return UITSLUIT_WOORDEN.find((w) => t.includes(` ${w} `)) || null;
}

function leegTotaal() {
  return { kosten: 0, klikken: 0, vertoningen: 0, conversies: 0 };
}

function tel(t, r) {
  t.kosten += Number(r.cost) || 0;
  t.klikken += Number(r.clicks) || 0;
  t.vertoningen += Number(r.impressions) || 0;
  t.conversies += Number(r.conversions) || 0;
}

function groepeer(rijen, sleutel, meta) {
  const kaart = new Map();
  for (const r of rijen) {
    const k = sleutel(r);
    let x = kaart.get(k);
    if (!x) {
      x = { key: k, ...meta(r), ...leegTotaal() };
      kaart.set(k, x);
    }
    tel(x, r);
  }
  return [...kaart.values()];
}

function siteLeadsVoor(leads, pred) {
  return leads.filter((l) => l.isAds && pred(l)).length;
}

function afronden(n) {
  return Math.round(n * 10) / 10;
}

function metOordeel(rij, leads, inst) {
  const l = Math.max(afronden(rij.conversies), leads);
  const r = { ...rij, leads: l, cpl: l > 0 ? rij.kosten / l : null };
  return { ...r, oordeel: beoordeel(r, inst) };
}

export function beoordeel(r, inst) {
  const { kosten, klikken, leads } = r;
  if (leads > 0) {
    const cpl = kosten / leads;
    if (cpl <= inst.doelCpl) return { status: 'goed', tekst: `Levert leads op voor ${eur(cpl)} per lead` };
    if (cpl <= inst.doelCpl * 1.5) return { status: 'let-op', tekst: `Wat duur: ${eur(cpl)} per lead` };
    return { status: 'slecht', tekst: `Te duur: ${eur(cpl)} per lead` };
  }
  if (kosten >= inst.verspildVanaf) return { status: 'slecht', tekst: `${eur(kosten)} uitgegeven, nog geen lead` };
  if (kosten >= inst.verspildVanaf / 2 && klikken >= inst.minKlikken) return { status: 'let-op', tekst: 'Nog geen lead, houd het in de gaten' };
  return { status: 'wacht', tekst: klikken > 0 ? 'Nog te weinig gegevens' : 'Nog geen klikken' };
}

const VOLGORDE = { slecht: 0, 'let-op': 1, goed: 2, wacht: 3 };

function sorteer(rijen) {
  return [...rijen].sort((a, b) => {
    const v = VOLGORDE[a.oordeel.status] - VOLGORDE[b.oordeel.status];
    return v !== 0 ? v : b.kosten - a.kosten;
  });
}

function maakAdvies({ zoekwoorden, zoektermen, campagnes, inst }) {
  const advies = [];
  const gebruiktWoord = new Set();

  for (const t of zoektermen) {
    if (t.kosten <= 0 && t.klikken <= 0) continue;
    const w = uitsluitWoord(t.naam);
    if (w) {
      advies.push({
        id: `uit-${t.key}`, soort: 'uitsluiten', niveau: 'slecht', kosten: t.kosten,
        titel: `Sluit de zoekopdracht "${t.naam}" uit`,
        uitleg: `Mensen die dit typen willen niets kopen (het woord "${w}"). Hier is al ${eur(t.kosten)} aan uitgegeven.`,
        ref: { niveau: 'zoekterm', naam: t.naam, campagne: t.campagne, reden: `bevat "${w}"`, kosten: t.kosten },
      });
      gebruiktWoord.add(t.key);
    } else if (t.oordeel.status === 'slecht' && t.leads === 0 && !zoekwoorden.some((z) => norm(z.naam) === norm(t.naam))) {
      advies.push({
        id: `uit-${t.key}`, soort: 'uitsluiten', niveau: 'slecht', kosten: t.kosten,
        titel: `Sluit de zoekopdracht "${t.naam}" uit`,
        uitleg: `Kostte ${eur(t.kosten)} en leverde geen enkele lead op.`,
        ref: { niveau: 'zoekterm', naam: t.naam, campagne: t.campagne, reden: 'geld uitgegeven zonder lead', kosten: t.kosten },
      });
    }
  }

  const heeftWoorden = zoekwoorden.length > 0;
  for (const z of zoekwoorden) {
    if (z.oordeel.status === 'slecht') {
      advies.push({
        id: `pauze-${z.key}`, soort: 'pauzeer', niveau: 'slecht', kosten: z.kosten,
        titel: `Zet het zoekwoord "${z.naam}" op pauze`,
        uitleg: z.leads > 0 ? `${z.oordeel.tekst}. Dat is te veel voor wat het oplevert.` : `${eur(z.kosten)} uitgegeven en er kwam geen enkele lead uit.`,
        ref: { niveau: 'zoekwoord', naam: z.naam, groep: z.groep, campagne: z.campagne, kosten: z.kosten, leads: z.leads },
      });
    } else if (z.oordeel.status === 'goed' && z.leads >= 1) {
      advies.push({
        id: `meer-${z.key}`, soort: 'meer', niveau: 'goed', kosten: z.kosten,
        titel: `Geef "${z.naam}" meer ruimte`,
        uitleg: `${z.oordeel.tekst}. Dit werkt, dus hier mag meer geld naartoe.`,
        ref: { niveau: 'zoekwoord', naam: z.naam, groep: z.groep, campagne: z.campagne, kosten: z.kosten, leads: z.leads },
      });
    }
  }

  if (!heeftWoorden) {
    for (const c of campagnes) {
      if (c.oordeel.status === 'slecht') {
        advies.push({
          id: `camp-${c.key}`, soort: 'campagne', niveau: 'slecht', kosten: c.kosten,
          titel: `Bekijk de campagne "${c.naam}"`,
          uitleg: `${c.oordeel.tekst}. Deze campagne laat geen zoekwoorden zien, dus Claude moet de advertenties of het bod aanpassen.`,
          ref: { niveau: 'campagne', naam: c.naam, kosten: c.kosten, leads: c.leads },
        });
      }
    }
  }

  const orde = { slecht: 0, goed: 1 };
  return advies.sort((a, b) => (orde[a.niveau] - orde[b.niveau]) || b.kosten - a.kosten);
}

export function bouwOverzicht(data, periodeId, inst = STANDAARD_INSTELLINGEN) {
  const periode = PERIODES.find((p) => p.id === periodeId) || PERIODES[1];
  const nu = bereik(data.vandaag, periode.dagen);
  const eerder = vorigBereik(data.vandaag, periode.dagen);
  const leadsNu = data.leads.filter((l) => inBereik(l.day, nu));
  const leadsEerder = data.leads.filter((l) => inBereik(l.day, eerder));

  const kNu = data.campagnes.filter((r) => inBereik(r.day, nu));
  const kEerder = data.campagnes.filter((r) => inBereik(r.day, eerder));

  function totaalVoor(rijen, leads, b) {
    const t = leegTotaal();
    rijen.forEach((r) => tel(t, r));
    const perDag = new Map();
    rijen.forEach((r) => perDag.set(r.day, (perDag.get(r.day) || 0) + (Number(r.conversions) || 0)));
    const siteDag = new Map();
    leads.filter((l) => l.isAds).forEach((l) => siteDag.set(l.day, (siteDag.get(l.day) || 0) + 1));
    let l = 0;
    for (let d = b.van; d <= b.tot; d = addDagen(d, 1)) l += Math.max(afronden(perDag.get(d) || 0), siteDag.get(d) || 0);
    const leadsTotaal = afronden(l);
    return { ...t, leads: leadsTotaal, cpl: leadsTotaal > 0 ? t.kosten / leadsTotaal : null };
  }

  const totaal = totaalVoor(kNu, leadsNu, nu);
  const vorig = totaalVoor(kEerder, leadsEerder, eerder);

  const reeksDagen = Math.max(periode.dagen, 7);
  const reeksBereik = bereik(data.vandaag, reeksDagen);
  const reeks = [];
  for (let d = reeksBereik.van; d <= reeksBereik.tot; d = addDagen(d, 1)) {
    const rijen = data.campagnes.filter((r) => r.day === d);
    const kosten = rijen.reduce((s, r) => s + (Number(r.cost) || 0), 0);
    const conv = rijen.reduce((s, r) => s + (Number(r.conversions) || 0), 0);
    const site = data.leads.filter((l) => l.isAds && l.day === d).length;
    reeks.push({ day: d, kosten, leads: Math.max(afronden(conv), site) });
  }

  const campagneRijen = groepeer(kNu, (r) => String(r.campaign_id), (r) => ({ naam: r.campaign, status: r.status }));
  const campagnes = sorteer(
    campagneRijen.map((c) => {
      const slugNaam = slug(c.naam);
      const leads = siteLeadsVoor(leadsNu, (l) => {
        const gekoppeld = MAPPING.campagnes[l.camp];
        return (gekoppeld && norm(gekoppeld) === norm(c.naam)) || (l.camp && slug(l.camp) === slugNaam);
      });
      return metOordeel(c, leads, inst);
    }),
  );

  const kwNu = data.zoekwoorden.filter((r) => inBereik(r.day, nu));
  const kwRijen = groepeer(
    kwNu,
    (r) => `${r.ad_group_id}|${norm(r.keyword)}`,
    (r) => ({ naam: r.keyword, groep: r.ad_group, campagne: r.campaign }),
  );
  const zoekwoorden = sorteer(kwRijen.map((z) => metOordeel(z, siteLeadsVoor(leadsNu, (l) => l.term && l.term === norm(z.naam)), inst)));

  const groepRijen = groepeer(kwNu, (r) => String(r.ad_group_id), (r) => ({ naam: r.ad_group, campagne: r.campaign }));
  const groepen = sorteer(
    groepRijen.map((g) => {
      const leads = siteLeadsVoor(leadsNu, (l) => {
        const gekoppeld = MAPPING.groepen[l.groep];
        return gekoppeld && norm(gekoppeld) === norm(g.naam);
      });
      return metOordeel(g, leads, inst);
    }),
  );

  const stNu = data.zoektermen.filter((r) => inBereik(r.day, nu));
  const zoektermen = sorteer(
    groepeer(stNu, (r) => norm(r.search_term), (r) => ({ naam: r.search_term, groep: r.ad_group, campagne: r.campaign })).map((t) => metOordeel(t, 0, inst)),
  );

  const advies = maakAdvies({ zoekwoorden, zoektermen, campagnes, inst });

  const basis = zoekwoorden.length > 0 ? zoekwoorden : campagnes;
  const verspild = basis.filter((r) => r.oordeel.status === 'slecht' && r.leads === 0).reduce((s, r) => s + r.kosten, 0);
  const uitsluitKosten = zoektermen.filter((t) => uitsluitWoord(t.naam)).reduce((s, t) => s + t.kosten, 0);

  const heeftData = data.campagnes.length > 0;
  const alleLeads = leadsNu.slice().sort((a, b) => (a.tijd < b.tijd ? 1 : -1));

  return {
    periode, nu, eerder, totaal, vorig, reeks, campagnes, groepen, zoekwoorden, zoektermen, advies,
    verspild, uitsluitKosten, heeftData, leads: alleLeads,
    leadsViaAds: leadsNu.filter((l) => l.isAds).length,
  };
}

export function verandering(nu, vorig) {
  if (!vorig && !nu) return null;
  if (!vorig) return { pct: null, nieuw: true };
  return { pct: Math.round(((nu - vorig) / vorig) * 100) };
}
