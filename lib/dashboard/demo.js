import { addDagen, norm, slug } from './analyse';

function rng(seed) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const CAMPAGNES = [
  { id: 111, naam: 'Zoeken - Waterzuivering (koop)', budget: 1 },
  { id: 222, naam: 'Zoeken - Osmose en installatie', budget: 0.8 },
  { id: 333, naam: 'Merk - Water-zuivering', budget: 0.5 },
];

const GROEPEN = [
  { id: 1, camp: 111, naam: 'Waterzuivering thuis', slug: 'waterzuivering-thuis' },
  { id: 2, camp: 111, naam: 'Waterfilter kraan', slug: 'waterfilter-kraan' },
  { id: 3, camp: 111, naam: 'Waterzuiveraar keuken', slug: 'waterzuiveraar-keuken' },
  { id: 4, camp: 222, naam: 'Osmosesysteem', slug: 'osmosesysteem' },
  { id: 5, camp: 222, naam: 'Installatie en kopen', slug: 'installatie-kopen' },
  { id: 6, camp: 222, naam: 'Waterfilter monteur', slug: 'waterfilter-monteur' },
  { id: 7, camp: 333, naam: 'Merknaam', slug: 'merknaam' },
  { id: 8, camp: 333, naam: 'Merknaam plus product', slug: 'merknaam-product' },
];

// [groep, zoekwoord, klikken per dag, kosten per klik, kans op lead per klik]
const ZOEKWOORDEN = [
  [1, 'waterzuivering thuis', 3.4, 0.92, 0.075],
  [1, 'waterzuivering kopen', 2.3, 1.05, 0.11],
  [1, 'waterzuiveringssysteem thuis', 1.4, 1.02, 0.09],
  [1, 'waterzuivering prijs', 1.7, 0.94, 0.035],
  [1, 'beste waterzuivering', 1.5, 1.24, 0.0],
  [1, 'waterzuivering voor het hele huis', 0.9, 1.4, 0.0],
  [2, 'waterfilter kraan', 4.1, 0.71, 0.008],
  [2, 'waterfilter onder aanrecht', 2.6, 0.96, 0.085],
  [2, 'waterfilter aanrecht kopen', 1.6, 1.1, 0.07],
  [2, 'waterfilter keuken', 3.0, 0.68, 0.01],
  [2, 'waterfilter kraan installeren', 0.9, 1.05, 0.12],
  [3, 'waterzuiveraar keuken', 1.8, 0.88, 0.06],
  [3, 'waterzuiveraar kopen', 1.5, 1.08, 0.1],
  [3, 'waterzuiveraar onder de kraan', 1.2, 0.93, 0.13],
  [3, 'waterzuiveraar pfas', 0.9, 0.85, 0.03],
  [3, 'waterzuiveraar prijzen', 1.0, 0.99, 0.0],
  [4, 'osmosesysteem thuis', 2.1, 1.18, 0.02],
  [4, 'omgekeerde osmose systeem', 1.6, 1.05, 0.0],
  [4, 'osmose waterfilter kopen', 1.3, 1.12, 0.075],
  [4, 'osmose filter onder aanrecht', 1.1, 1.04, 0.09],
  [4, 'osmosesysteem keuken', 0.9, 1.15, 0.11],
  [5, 'waterzuivering installeren', 1.2, 1.22, 0.115],
  [5, 'waterzuivering laten plaatsen', 0.9, 1.15, 0.14],
  [5, 'waterzuivering installatie prijs', 0.8, 1.3, 0.06],
  [5, 'waterzuivering offerte', 0.6, 1.4, 0.18],
  [6, 'waterfilter monteur', 0.8, 0.98, 0.0],
  [6, 'waterfilter installatiebedrijf', 0.5, 1.2, 0.0],
  [6, 'waterzuivering monteur in de buurt', 0.4, 1.35, 0.07],
  [7, 'water-zuivering', 1.0, 0.34, 0.15],
  [7, 'water zuivering nl', 0.7, 0.31, 0.12],
  [7, 'water-zuivering.nl', 0.5, 0.28, 0.16],
  [8, 'water-zuivering waterfilter', 0.5, 0.42, 0.14],
  [8, 'water-zuivering osmose', 0.35, 0.45, 0.1],
  [8, 'water-zuivering reviews', 0.4, 0.38, 0.02],
];

// zoektermen waar mensen op typten die niet bij het aanbod passen: [groep, term, klikken per dag, kosten per klik]
const EXTRA_ZOEKTERMEN = [
  [1, 'waterfilter vervangen', 0.9, 0.62],
  [2, 'gratis waterfilter', 0.7, 0.55],
  [2, 'brita filter kan', 0.6, 0.48],
  [2, 'waterfilter kraan vervangen', 0.5, 0.58],
  [2, 'waterfilter cartridge', 0.6, 0.5],
  [3, 'wat is een waterzuiveraar', 0.4, 0.66],
  [4, 'wat is omgekeerde osmose', 0.5, 0.7],
  [4, 'osmose membraan vervangen', 0.4, 0.65],
  [5, 'vacature monteur waterbehandeling', 0.3, 0.6],
  [5, 'cursus waterzuivering', 0.2, 0.72],
  [6, 'waterfilter monteur vacature', 0.3, 0.6],
  [6, 'diy waterfilter maken', 0.3, 0.52],
  [1, 'waterzuivering zwembad', 0.3, 0.74],
  [3, 'waterontharder kopen', 0.5, 0.9],
];

// hoe goed de dag uitpakt (maandag t/m zondag)
const WEEKDAG_FACTOR = [1.0, 1.15, 1.2, 1.1, 0.95, 0.6, 0.55];

const KLIK_UUR = [1, 1, 1, 1, 1, 2, 4, 7, 9, 10, 10, 9, 8, 8, 8, 8, 8, 8, 9, 10, 9, 7, 4, 2];
// hoe goed een groep converteert per dagdeel: [nacht, ochtend, middag, avond]
const CONV_DAGDEEL = {
  1: [0.2, 1.3, 1.1, 0.7],
  2: [0.05, 0.7, 0.8, 0.8],
  3: [0.2, 1.0, 1.2, 1.0],
  4: [0.1, 0.8, 1.0, 1.5],
  5: [0.05, 1.5, 1.4, 0.5],
  6: [0.0, 0.9, 1.0, 0.2],
  7: [0.5, 1.0, 1.0, 1.4],
  8: [0.5, 1.0, 1.0, 1.2],
};

function convGewichten(gid) {
  const m = CONV_DAGDEEL[gid] || [1, 1, 1, 1];
  return KLIK_UUR.map((w, h) => w * m[Math.floor(h / 6)]);
}

const pulse = (n) => 1 + 0.5 * Math.sin(n / 3.2);

function demoRoute(r, eind, laatsteA, laatsteC) {
  const x = r();
  let stappen;
  if (eind === 'google') stappen = x < 0.52 ? ['google'] : x < 0.72 ? ['facebook', 'google'] : x < 0.86 ? ['google', 'facebook', 'google'] : ['facebook', 'google', 'facebook', 'google'];
  else stappen = x < 0.42 ? ['facebook'] : x < 0.75 ? ['google', 'facebook'] : x < 0.9 ? ['facebook', 'google', 'facebook'] : ['google', 'facebook', 'google', 'facebook'];
  const dagen = stappen.length === 1 ? Math.round(r() * 15) / 10 : Math.round((1 + r() * r() * 14) * 10) / 10;
  const detail = stappen.map((k, i) => {
    const laatste = i === stappen.length - 1;
    const c = laatste ? laatsteC : slug(k === 'google' ? CAMPAGNES[Math.floor(r() * CAMPAGNES.length)].naam : FB_CAMPAGNES[Math.floor(r() * FB_CAMPAGNES.length)].naam);
    const a = laatste ? laatsteA : (k === 'google' ? GROEPEN[Math.floor(r() * GROEPEN.length)].slug : FB_ADS[Math.floor(r() * FB_ADS.length)][1]);
    return { k, m: Math.round((dagen * 1440 * i) / Math.max(1, stappen.length - 1)), c, a };
  });
  return { journey: stappen.join('>'), dagen, detail, consent: true };
}

function kies(gewichten, r) {
  const totaal = gewichten.reduce((a, b) => a + b, 0);
  let x = r() * totaal;
  for (let h = 0; h < gewichten.length; h++) {
    x -= gewichten[h];
    if (x <= 0) return h;
  }
  return gewichten.length - 1;
}

export function demoData(vandaag) {
  const r = rng(7);
  const campagnes = [];
  const zoekwoorden = [];
  const zoektermen = [];
  const leads = [];
  const uurKaart = new Map();
  const voegUur = (day, uur, camp, groep, klik, kosten, imp, conv) => {
    const k = `${day}|${uur}|${groep.id}`;
    let x = uurKaart.get(k);
    if (!x) {
      x = { day, hour: uur, campaign_id: camp.id, ad_group_id: groep.id, campaign: camp.naam, ad_group: groep.naam, impressions: 0, clicks: 0, cost: 0, conversions: 0 };
      uurKaart.set(k, x);
    }
    x.clicks += klik; x.cost += kosten; x.impressions += imp; x.conversions += conv;
  };

  for (let i = 59; i >= 0; i--) {
    const day = addDagen(vandaag, -i);
    const weekdag = (new Date(`${day}T12:00:00Z`).getUTCDay() + 6) % 7;
    const groei = 0.5 + ((59 - i) / 59) * 0.7;
    const totalen = new Map(CAMPAGNES.map((c) => [c.id, { imp: 0, klik: 0, kosten: 0, conv: 0 }]));

    ZOEKWOORDEN.forEach(([gid, naam, kd, cpc, kans], idx) => {
      const groep = GROEPEN.find((g) => g.id === gid);
      const camp = CAMPAGNES.find((c) => c.id === groep.camp);
      const klikken = Math.max(0, Math.round(kd * groei * (0.5 + r() * 0.9) * (0.8 + WEEKDAG_FACTOR[weekdag] * 0.2) * (gid >= 7 ? 2.4 * pulse(58 - i) : 1)));
      const kosten = Math.round(klikken * cpc * (0.9 + r() * 0.2) * 100) / 100;
      let conv = 0;
      for (let k = 0; k < klikken; k++) if (r() < kans * 0.7 * WEEKDAG_FACTOR[weekdag]) conv++;
      const imp = klikken * Math.round(16 + r() * 14);
      const perKlik = klikken ? kosten / klikken : 0;
      for (let k = 0; k < klikken; k++) voegUur(day, kies(KLIK_UUR, r), camp, groep, 1, perKlik, Math.round(imp / klikken), 0);
      zoekwoorden.push({
        day, campaign_id: camp.id, campaign: camp.naam, ad_group_id: gid, ad_group: groep.naam,
        criterion_id: idx + 1, keyword: naam, impressions: imp, clicks: klikken, cost: kosten, conversions: conv,
      });
      zoektermen.push({
        day, campaign_id: camp.id, ad_group_id: gid, campaign: camp.naam, ad_group: groep.naam,
        search_term: naam, impressions: imp, clicks: klikken, cost: kosten, conversions: conv,
      });
      const t = totalen.get(camp.id);
      t.imp += imp; t.klik += klikken; t.kosten += kosten; t.conv += conv;
      for (let c = 0; c < conv; c++) {
        const uurNr = kies(convGewichten(gid), r);
        voegUur(day, uurNr, camp, groep, 0, 0, 0, 1);
        const uur = String(uurNr).padStart(2, '0');
        leads.push({
          id: `${day}-${idx}-${c}`, day, uur: uurNr, tijd: `${day}T${uur}:${String(Math.floor(r() * 60)).padStart(2, '0')}:00.000Z`,
          type: ['contact', 'contact', 'besparing', 'aanmelden'][Math.floor(r() * 4)],
          pagina: ['/', '/besparing', '/waterzuivering-voor-thuis', '/waterfilter-kraan', '/osmosesysteem'][Math.floor(r() * 5)],
          isAds: true, kanaal: 'google', ...demoRoute(r, 'google', groep.slug, slug(camp.naam)), term: norm(naam), groep: groep.slug, camp: slug(camp.naam),
        });
      }
    });

    EXTRA_ZOEKTERMEN.forEach(([gid, naam, kd, cpc]) => {
      const groep = GROEPEN.find((g) => g.id === gid);
      const camp = CAMPAGNES.find((c) => c.id === groep.camp);
      const klikken = Math.round(kd * groei * (0.4 + r() * 1.1));
      const kosten = Math.round(klikken * cpc * 100) / 100;
      for (let k = 0; k < klikken; k++) voegUur(day, kies(KLIK_UUR, r), camp, groep, 1, klikken ? kosten / klikken : 0, 24, 0);
      zoektermen.push({
        day, campaign_id: camp.id, ad_group_id: gid, campaign: camp.naam, ad_group: groep.naam,
        search_term: naam, impressions: klikken * 24, clicks: klikken, cost: kosten, conversions: 0,
      });
      const t = totalen.get(camp.id);
      t.imp += klikken * 24; t.klik += klikken; t.kosten += kosten;
    });

    CAMPAGNES.forEach((c) => {
      const t = totalen.get(c.id);
      campagnes.push({
        day, campaign_id: c.id, campaign: c.naam, status: 'ENABLED', impressions: t.imp, clicks: t.klik,
        cost: Math.round(t.kosten * 100) / 100, conversions: t.conv, conv_value: 0,
      });
    });
  }

  const organisch = [
    ['giveaway', '/actie/win-een-waterzuiveraar'], ['contact', '/'], ['besparing', '/besparing'], ['aanmelden', '/aanmelden'],
    ['giveaway', '/actie/win-een-waterzuiveraar'], ['contact', '/waterzuivering-voor-thuis'], ['besparing', '/besparing'],
  ];
  organisch.forEach(([type, pagina], i) => {
    const day = addDagen(vandaag, -Math.floor(r() * 25));
    leads.push({
      id: `org-${i}`, day, uur: 9 + i, tijd: `${day}T1${i}:20:00.000Z`, type, pagina, isAds: false, kanaal: null, journey: '', dagen: null, detail: [], consent: true, term: '', groep: '', camp: '',
    });
  });

  const grens = addDagen(vandaag, -29);
  const uren = [...uurKaart.values()]
    .filter((x) => x.day >= grens)
    .map((x) => ({ ...x, cost: Math.round(x.cost * 100) / 100 }));

  return {
    vandaag, campagnes, zoekwoorden, zoektermen, leads, uren, aanvragen: [], bijgewerkt: new Date().toISOString(), demo: true,
  };
}


// ---------- Facebook ----------

const FB_CAMPAGNES = [
  { id: '502', naam: 'Verkoop water-zuivering' },
  { id: '503', naam: 'Sittard regio' },
];

const FB_ADSETS = [
  { id: '603', camp: '502', naam: 'Huiseigenaren 35 tot 65' },
  { id: '604', camp: '502', naam: 'Interesse: gezond leven' },
  { id: '605', camp: '502', naam: 'Retargeting website' },
  { id: '606', camp: '503', naam: 'Sittard en omgeving' },
];

// [adset, advertentie, weergaven per dag, klikpercentage, kosten per klik, kans op lead per klik]
const FB_ADS = [
  ['603', 'Video: gezin drinkt water', 1700, 0.012, 0.62, 0.05],
  ['603', 'Afbeelding: PFAS waarschuwing', 1400, 0.009, 0.71, 0.02],
  ['603', 'Carrousel: voor en na', 1200, 0.011, 0.66, 0.035],
  ['604', 'Reel: kraan open, zuiver water', 2100, 0.008, 0.52, 0.004],
  ['604', 'Afbeelding: filter close-up', 1600, 0.006, 0.58, 0.0],
  ['605', 'Video: installatie in 1 uur', 700, 0.024, 0.48, 0.09],
  ['605', 'Afbeelding: gratis offerte', 650, 0.02, 0.44, 0.11],
  ['606', 'Afbeelding: monteur uit Sittard', 900, 0.014, 0.4, 0.075],
  ['606', 'Video: installatie in 1 uur', 800, 0.016, 0.38, 0.06],
];

const FB_UUR = [2, 1, 1, 1, 1, 2, 4, 6, 7, 7, 7, 8, 9, 8, 7, 7, 8, 9, 11, 13, 13, 11, 7, 4];
const FB_LEEFTIJD = [['18-24', 0.8, 0.5], ['25-34', 1.2, 0.8], ['35-44', 1.3, 1.1], ['45-54', 1.2, 1.5], ['55-64', 1.0, 1.7], ['65+', 0.7, 1.2]];
const FB_GESLACHT = [['female', 1.15, 1.2], ['male', 0.85, 0.8]];
const FB_PLAATSING = [
  ['facebook: feed', 1.3, 1.1], ['instagram: feed', 1.2, 1.0], ['instagram: story', 0.9, 0.7], ['instagram: reels', 1.0, 0.8],
  ['facebook: facebook_reels', 0.7, 0.6], ['audience_network: classic', 0.6, 0.15],
];

function fbConvUur(uur) {
  return FB_UUR[uur] * (uur >= 6 && uur < 12 ? 1.4 : uur >= 18 ? 0.9 : uur < 6 ? 0.2 : 1.0);
}

const DEMO_KWALITEIT = [
  { ad: 'Video: gezin drinkt water', adset: 'Huiseigenaren 35 tot 65', campaign: 'Verkoop water-zuivering', quality: 'ABOVE_AVERAGE', engagement: 'AVERAGE', conversion: 'ABOVE_AVERAGE' },
  { ad: 'Afbeelding: PFAS waarschuwing', adset: 'Huiseigenaren 35 tot 65', campaign: 'Verkoop water-zuivering', quality: 'AVERAGE', engagement: 'BELOW_AVERAGE_20', conversion: 'BELOW_AVERAGE_35' },
  { ad: 'Carrousel: voor en na', adset: 'Huiseigenaren 35 tot 65', campaign: 'Verkoop water-zuivering', quality: 'AVERAGE', engagement: 'AVERAGE', conversion: 'AVERAGE' },
  { ad: 'Reel: kraan open, zuiver water', adset: 'Interesse: gezond leven', campaign: 'Verkoop water-zuivering', quality: 'BELOW_AVERAGE_10', engagement: 'BELOW_AVERAGE_20', conversion: 'BELOW_AVERAGE_35' },
  { ad: 'Afbeelding: filter close-up', adset: 'Interesse: gezond leven', campaign: 'Verkoop water-zuivering', quality: 'BELOW_AVERAGE_35', engagement: 'BELOW_AVERAGE_35', conversion: 'UNKNOWN' },
  { ad: 'Video: installatie in 1 uur', adset: 'Retargeting website', campaign: 'Verkoop water-zuivering', quality: 'ABOVE_AVERAGE', engagement: 'ABOVE_AVERAGE', conversion: 'ABOVE_AVERAGE' },
  { ad: 'Afbeelding: gratis offerte', adset: 'Retargeting website', campaign: 'Verkoop water-zuivering', quality: 'AVERAGE', engagement: 'ABOVE_AVERAGE', conversion: 'AVERAGE' },
  { ad: 'Afbeelding: monteur uit Sittard', adset: 'Sittard en omgeving', campaign: 'Sittard regio', quality: 'AVERAGE', engagement: 'AVERAGE', conversion: 'ABOVE_AVERAGE' },
].map((x, i) => ({ ad_id: String(900 + i), ...x }));

export function demoMeta(vandaag) {
  const r = rng(21);
  const campagnes = [];
  const zoekwoorden = [];
  const leads = [];
  const uren = [];
  const doelgroep = [];
  const perCampagnePeriode = new Map();
  const grens30 = addDagen(vandaag, -29);

  for (let i = 59; i >= 0; i--) {
    const day = addDagen(vandaag, -i);
    const weekdag = (new Date(`${day}T12:00:00Z`).getUTCDay() + 6) % 7;
    const groei = 0.6 + ((59 - i) / 59) * 0.5;
    const totaal = new Map(FB_CAMPAGNES.map((c) => [c.id, { imp: 0, klik: 0, kosten: 0, conv: 0 }]));

    FB_ADS.forEach(([adsetId, ad, weergaven, ctr, cpc, kans], idx) => {
      const adset = FB_ADSETS.find((a) => a.id === adsetId);
      const camp = FB_CAMPAGNES.find((c) => c.id === adset.camp);
      const imp = Math.round(weergaven * 0.4 * groei * (0.7 + r() * 0.6) * pulse(59 - i));
      const klikken = Math.max(0, Math.round(imp * ctr * (0.8 + r() * 0.4)));
      const kosten = Math.round(klikken * cpc * (0.9 + r() * 0.2) * 100) / 100;
      let conv = 0;
      for (let k = 0; k < klikken; k++) if (r() < kans * 0.55 * WEEKDAG_FACTOR[weekdag] * 0.9) conv++;
      const landing = Math.round(klikken * (ad.startsWith('Reel') ? 0.55 : 0.78 + r() * 0.12));
      zoekwoorden.push({
        day, campaign_id: camp.id, ad_group_id: adset.id, criterion_id: idx + 1, campaign: camp.naam, ad_group: adset.naam, keyword: ad,
        impressions: imp, clicks: klikken, cost: kosten, conversions: conv, landing_views: landing,
      });
      const t = totaal.get(camp.id);
      t.imp += imp; t.klik += klikken; t.kosten += kosten; t.conv += conv;

      for (let c = 0; c < conv; c++) {
        if (r() > 0.7) continue;
        const uurNr = kies(FB_UUR.map((_, h) => fbConvUur(h)), r);
        leads.push({
          id: `fb-${day}-${idx}-${c}`, day, uur: uurNr, tijd: `${day}T${String(uurNr).padStart(2, '0')}:${String(Math.floor(r() * 60)).padStart(2, '0')}:00.000Z`,
          type: ['contact', 'besparing', 'contact'][Math.floor(r() * 3)],
          pagina: ['/', '/besparing', '/waterzuivering-voor-thuis'][Math.floor(r() * 3)],
          isAds: true, kanaal: 'facebook', ...demoRoute(r, 'facebook', ad, slug(camp.naam)),
          term: norm(adset.naam), groep: ad, camp: slug(camp.naam),
        });
      }
    });

    FB_CAMPAGNES.forEach((c) => {
      const t = totaal.get(c.id);
      campagnes.push({ day, campaign_id: c.id, campaign: c.naam, status: c.id === '503' ? 'WITH_ISSUES' : 'ACTIVE', impressions: t.imp, clicks: t.klik, cost: Math.round(t.kosten * 100) / 100, conversions: t.conv, conv_value: 0, landing_views: Math.round(t.klik * 0.74) });
      const sleutel = (d) => `${d}|${c.id}`;
      [1, 7, 14, 30].forEach((d) => {
        if (i < d) {
          const k = sleutel(d);
          const x = perCampagnePeriode.get(k) || { dagen: d, campaign_id: c.id, campaign: c.naam, impressions: 0 };
          x.impressions += t.imp;
          perCampagnePeriode.set(k, x);
        }
      });

      if (i < 30) {
        FB_UUR.forEach((w, h) => {
          const aandeel = w / FB_UUR.reduce((a, b) => a + b, 0);
          const convAandeel = fbConvUur(h) / FB_UUR.reduce((a, _, x) => a + fbConvUur(x), 0);
          uren.push({
            day, hour: h, campaign_id: c.id, ad_group_id: c.id, campaign: c.naam, ad_group: c.naam,
            impressions: Math.round(t.imp * aandeel), clicks: Math.round(t.klik * aandeel), cost: Math.round(t.kosten * aandeel * 100) / 100,
            conversions: Math.round(t.conv * convAandeel * 10) / 10,
          });
        });
        FB_LEEFTIJD.forEach(([leeftijd, kw, cw]) => FB_GESLACHT.forEach(([geslacht, gk, gc]) => {
          const aandeel = (kw * gk) / (FB_LEEFTIJD.reduce((a, x) => a + x[1], 0) * 2);
          const convAandeel = (cw * gc) / (FB_LEEFTIJD.reduce((a, x) => a + x[2], 0) * 2);
          doelgroep.push({ day, kind: 'age_gender', bucket: `${leeftijd} · ${geslacht}`, cost: Math.round(t.kosten * aandeel * 100) / 100, clicks: Math.round(t.klik * aandeel), impressions: Math.round(t.imp * aandeel), conversions: Math.round(t.conv * convAandeel * 10) / 10 });
        }));
        const kSom = FB_PLAATSING.reduce((a, x) => a + x[1], 0);
        const cSom = FB_PLAATSING.reduce((a, x) => a + x[2], 0);
        FB_PLAATSING.forEach(([plek, kw, cw]) => {
          doelgroep.push({ day, kind: 'placement', bucket: plek, cost: Math.round((t.kosten * kw / kSom) * 100) / 100, clicks: Math.round(t.klik * kw / kSom), impressions: Math.round(t.imp * kw / kSom), conversions: Math.round((t.conv * cw / cSom) * 10) / 10 });
        });
      }
    });
  }

  const bereik = [];
  const accountPeriode = new Map();
  perCampagnePeriode.forEach((x) => {
    const freq = Math.round((1.15 + 0.28 * Math.log(x.dagen) + 0.1) * 100) / 100;
    bereik.push({ days: x.dagen, campaign_id: x.campaign_id, campaign: x.campaign, reach: Math.round(x.impressions / freq), impressions: x.impressions, frequency: freq });
    accountPeriode.set(x.dagen, (accountPeriode.get(x.dagen) || 0) + x.impressions);
  });
  accountPeriode.forEach((imp, dagen) => {
    const freq = Math.round((1.25 + 0.3 * Math.log(dagen) + 0.1) * 100) / 100;
    bereik.push({ days: dagen, campaign_id: '__account__', campaign: 'Totaal', reach: Math.round(imp / (freq * 0.93)), impressions: imp, frequency: Math.round(freq * 0.93 * 100) / 100 });
  });

  return {
    bron: 'facebook', vandaag, campagnes, zoekwoorden, zoektermen: [], leads, uren: uren.filter((x) => x.day >= grens30), doelgroep, bereik, kwaliteit: DEMO_KWALITEIT,
    account: { account_status: 3, disable_reason: 0, balance: 42.5, amount_spent: 1171, currency: 'EUR' },
    aanvragen: [], bijgewerkt: new Date().toISOString(), syncStatus: { ok: true }, demo: true,
  };
}

export function demoBron(vandaag, bron) {
  const g = demoData(vandaag);
  const m = demoMeta(vandaag);
  const alle = [...g.leads, ...m.leads];
  const basis = bron === 'facebook' ? m : g;
  return { ...basis, leads: alle.map((l) => ({ ...l, isAds: l.kanaal === bron })), alleLeads: alle, aanvragen: g.aanvragen };
}

export function demoSamen(vandaag) {
  const g = demoBron(vandaag, 'google');
  const f = demoBron(vandaag, 'facebook');
  const leads = g.alleLeads.map((l, i) => (l.kanaal && i % 6 === 0 ? { ...l, kanaal: null, journey: '', dagen: null, detail: [], consent: false } : l));
  return { bron: 'samen', vandaag, google: g, facebook: f, leads, aanvragen: [], demo: true };
}
