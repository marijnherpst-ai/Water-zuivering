import { addDagen, norm } from './analyse';

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

const CAMPAGNE = { id: 111, naam: 'Zoeken - Waterzuivering (koop)' };

const GROEPEN = [
  { id: 1, naam: 'Waterzuivering thuis', slug: 'waterzuivering-thuis' },
  { id: 2, naam: 'Waterfilter kraan', slug: 'waterfilter-kraan' },
  { id: 3, naam: 'Osmosesysteem', slug: 'osmosesysteem' },
  { id: 4, naam: 'Installatie en kopen', slug: 'installatie-kopen' },
  { id: 5, naam: 'Merknaam', slug: 'merknaam' },
];

// [groep, zoekwoord, klikken per dag, kosten per klik, kans op lead]
const ZOEKWOORDEN = [
  [1, 'waterzuivering thuis', 3.2, 0.92, 0.07],
  [1, 'waterzuivering kopen', 2.1, 1.05, 0.09],
  [1, 'waterzuiveraar keuken', 1.6, 0.88, 0.05],
  [2, 'waterfilter kraan', 3.6, 0.71, 0.012],
  [2, 'waterfilter onder aanrecht', 2.4, 0.96, 0.08],
  [2, 'waterfilter aanrecht kopen', 1.5, 1.1, 0.06],
  [3, 'osmosesysteem thuis', 1.9, 1.18, 0.1],
  [3, 'omgekeerde osmose systeem', 1.4, 1.05, 0.0],
  [3, 'osmose waterfilter kopen', 1.2, 1.12, 0.07],
  [4, 'waterzuivering installeren', 1.1, 1.22, 0.11],
  [4, 'waterzuivering laten plaatsen', 0.8, 1.15, 0.12],
  [4, 'waterfilter monteur', 0.7, 0.98, 0.0],
  [5, 'water-zuivering', 0.9, 0.34, 0.14],
  [5, 'water zuivering nl', 0.6, 0.31, 0.12],
];

const EXTRA_ZOEKTERMEN = [
  [1, 'waterfilter vervangen', 0.9, 0.62],
  [2, 'gratis waterfilter', 0.7, 0.55],
  [2, 'brita filter kan', 0.6, 0.48],
  [3, 'wat is omgekeerde osmose', 0.5, 0.7],
  [4, 'vacature monteur waterbehandeling', 0.3, 0.6],
];

export function demoData(vandaag) {
  const r = rng(42);
  const campagnes = [];
  const zoekwoorden = [];
  const zoektermen = [];
  const leads = [];

  for (let i = 59; i >= 0; i--) {
    const day = addDagen(vandaag, -i);
    const groei = 0.55 + (59 - i) / 59 * 0.6;
    const totaal = { imp: 0, klik: 0, kosten: 0, conv: 0 };

    ZOEKWOORDEN.forEach(([gid, naam, kd, cpc, kans], idx) => {
      const klikken = Math.max(0, Math.round(kd * groei * (0.6 + r() * 0.8)));
      const kosten = Math.round(klikken * cpc * (0.9 + r() * 0.2) * 100) / 100;
      let conv = 0;
      for (let k = 0; k < klikken; k++) if (r() < kans) conv++;
      const imp = klikken * Math.round(18 + r() * 12);
      const groep = GROEPEN.find((g) => g.id === gid);
      zoekwoorden.push({
        day, campaign_id: CAMPAGNE.id, campaign: CAMPAGNE.naam, ad_group_id: gid, ad_group: groep.naam,
        criterion_id: idx + 1, keyword: naam, impressions: imp, clicks: klikken, cost: kosten, conversions: conv,
      });
      zoektermen.push({
        day, campaign_id: CAMPAGNE.id, ad_group_id: gid, campaign: CAMPAGNE.naam, ad_group: groep.naam,
        search_term: naam, impressions: imp, clicks: klikken, cost: kosten, conversions: conv,
      });
      totaal.imp += imp; totaal.klik += klikken; totaal.kosten += kosten; totaal.conv += conv;
      for (let c = 0; c < conv; c++) {
        const uur = String(8 + Math.floor(r() * 12)).padStart(2, '0');
        leads.push({
          id: `${day}-${idx}-${c}`, day, tijd: `${day}T${uur}:${String(Math.floor(r() * 60)).padStart(2, '0')}:00.000Z`,
          type: ['contact', 'besparing', 'aanmelden'][Math.floor(r() * 3)], pagina: ['/', '/besparing', '/waterzuivering-voor-thuis'][Math.floor(r() * 3)],
          isAds: true, term: norm(naam), groep: groep.slug, camp: 'waterzuivering-koop',
        });
      }
    });

    EXTRA_ZOEKTERMEN.forEach(([gid, naam, kd, cpc]) => {
      const klikken = Math.round(kd * groei * (0.5 + r()));
      const kosten = Math.round(klikken * cpc * 100) / 100;
      const groep = GROEPEN.find((g) => g.id === gid);
      zoektermen.push({
        day, campaign_id: CAMPAGNE.id, ad_group_id: gid, campaign: CAMPAGNE.naam, ad_group: groep.naam,
        search_term: naam, impressions: klikken * 25, clicks: klikken, cost: kosten, conversions: 0,
      });
      totaal.imp += klikken * 25; totaal.klik += klikken; totaal.kosten += kosten;
    });

    campagnes.push({
      day, campaign_id: CAMPAGNE.id, campaign: CAMPAGNE.naam, status: 'ENABLED', impressions: totaal.imp, clicks: totaal.klik,
      cost: Math.round(totaal.kosten * 100) / 100, conversions: totaal.conv, conv_value: 0,
    });
  }

  for (let i = 0; i < 4; i++) {
    const day = addDagen(vandaag, -Math.floor(r() * 20));
    leads.push({
      id: `org-${i}`, day, tijd: `${day}T1${i}:20:00.000Z`, type: ['contact', 'besparing', 'giveaway', 'aanmelden'][i],
      pagina: ['/', '/besparing', '/actie/win-een-waterzuiveraar', '/aanmelden'][i], isAds: false, term: '', groep: '', camp: '',
    });
  }

  return {
    vandaag, campagnes, zoekwoorden, zoektermen, leads, aanvragen: [], bijgewerkt: new Date().toISOString(), demo: true,
  };
}
