import 'server-only';
import gebieden from './gebieden.json';
import { BEDRIJVEN, OASEN, BRABANT_WATER, WATERNET_PLAATSEN, klasse, naarMmol, naarFrans } from './data';

// Normalises a place name so "'s-Hertogenbosch", "Sint-Oedenrode" and
// "Sint Oedenrode" compare equal.
const norm = (s) =>
  String(s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/['’]/g, '')
    .replace(/[-\s]+/g, ' ')
    .trim();

// "Bodegraven (noord van spoor)" -> base "bodegraven", detail "noord van spoor"
function splitNaam(naam) {
  const m = naam.match(/^(.*?)\s*\((.*)\)\s*$/);
  return m ? { basis: norm(m[1]), detail: m[2] } : { basis: norm(naam), detail: null };
}

const OASEN_RIJEN = OASEN.split('\n').map((r) => {
  const [naam, gemeente, dh] = r.split('|');
  return { ...splitNaam(naam), naam, gemeente: norm(gemeente), dh: Number(dh) };
});

const BW_RIJEN = BRABANT_WATER.split('\n').map((r) => {
  const [naam, min, max] = r.split('|');
  return { ...splitNaam(naam), naam, min: Number(min), max: Number(max) };
});

const WATERNET = new Set(WATERNET_PLAATSEN.map(norm));

function inRing(x, y, ring) {
  let binnen = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) binnen = !binnen;
  }
  return binnen;
}

// Supply area from the RIVM map. Falls back to the nearest area when a point
// lands just outside every polygon (simplified borders, water bodies).
export function bedrijfOpKaart(lon, lat) {
  for (const b of gebieden) {
    for (const poly of b.p) {
      if (inRing(lon, lat, poly[0]) && !poly.slice(1).some((gat) => inRing(lon, lat, gat))) return b.id;
    }
  }
  let beste = null;
  let afstand = Infinity;
  for (const b of gebieden) {
    for (const poly of b.p) {
      for (const [x, y] of poly[0]) {
        const d = (x - lon) ** 2 + (y - lat) ** 2;
        if (d < afstand) {
          afstand = d;
          beste = b.id;
        }
      }
    }
  }
  return afstand < 0.0004 ? beste : null; // ~2 km
}

// Works out supplier and hardness for one address.
export function bepaalHardheid({ lon, lat, woonplaats, gemeente, provincie, bedrijfId }) {
  const wp = norm(woonplaats);
  const gm = norm(gemeente);
  const opKaart = bedrijfId || bedrijfOpKaart(lon, lat);

  // 1. Waternet: one value for the whole area.
  if (WATERNET.has(wp) || opKaart === 'waternet') return resultaat('waternet');

  // 2. Oasen publishes per place; match on place and municipality (or the map).
  const oasen = OASEN_RIJEN.filter((r) => r.basis === wp && (r.gemeente === gm || opKaart === 'oasen'));
  if (oasen.length) {
    const waarden = oasen.map((r) => r.dh);
    return resultaat('oasen', {
      min: Math.min(...waarden),
      max: Math.max(...waarden),
      plaatsdetail: oasen.length > 1 ? oasen.map((r) => `${r.detail || woonplaats}: ${String(r.dh).replace('.', ',')} °dH`) : null,
    });
  }

  // 3. Brabant Water publishes per place. Several place names also exist
  //    elsewhere (Katwijk, Rijswijk, Haren, Velp), so only accept a match inside
  //    Noord-Brabant or the Brabant Water area.
  const inBrabant = provincie === 'Noord-Brabant' || opKaart === 'brabant-water' || ['nederweert', 'ospel'].includes(wp);
  if (inBrabant) {
    const specifiek = BW_RIJEN.find((r) => r.basis === wp && r.detail && norm(r.detail) === gm);
    const bw = specifiek || BW_RIJEN.find((r) => r.basis === wp && !r.detail);
    if (bw) return resultaat('brabant-water', { min: bw.min, max: bw.max });
  }

  if (!opKaart) return null;
  return resultaat(opKaart);
}

// Grote steden met hun waterbedrijf (centrum van de woonplaats volgens PDOK,
// getoetst aan de RIVM-kaart). Voor de tabel op /waterhardheid.
const STEDEN = [
  ['Amsterdam', 'Amsterdam', 'Noord-Holland', 'waternet'],
  ['Rotterdam', 'Rotterdam', 'Zuid-Holland', 'evides'],
  ['Den Haag', "'s-Gravenhage", 'Zuid-Holland', 'dunea'],
  ['Utrecht', 'Utrecht', 'Utrecht', 'vitens'],
  ['Eindhoven', 'Eindhoven', 'Noord-Brabant', 'brabant-water'],
  ['Groningen', 'Groningen', 'Groningen', 'waterbedrijf-groningen'],
  ['Tilburg', 'Tilburg', 'Noord-Brabant', 'brabant-water'],
  ['Almere', 'Almere', 'Flevoland', 'vitens'],
  ['Breda', 'Breda', 'Noord-Brabant', 'brabant-water'],
  ['Nijmegen', 'Nijmegen', 'Gelderland', 'vitens'],
  ['Apeldoorn', 'Apeldoorn', 'Gelderland', 'vitens'],
  ['Haarlem', 'Haarlem', 'Noord-Holland', 'pwn'],
  ['Arnhem', 'Arnhem', 'Gelderland', 'vitens'],
  ['Enschede', 'Enschede', 'Overijssel', 'vitens'],
  ['Amersfoort', 'Amersfoort', 'Utrecht', 'vitens'],
  ['Zaandam', 'Zaanstad', 'Noord-Holland', 'pwn'],
  ["'s-Hertogenbosch", "'s-Hertogenbosch", 'Noord-Brabant', 'brabant-water'],
  ['Hoofddorp', 'Haarlemmermeer', 'Noord-Holland', 'pwn'],
  ['Zwolle', 'Zwolle', 'Overijssel', 'vitens'],
  ['Leiden', 'Leiden', 'Zuid-Holland', 'dunea'],
  ['Zoetermeer', 'Zoetermeer', 'Zuid-Holland', 'dunea'],
  ['Leeuwarden', 'Leeuwarden', 'Fryslân', 'vitens'],
  ['Maastricht', 'Maastricht', 'Limburg', 'wml'],
  ['Dordrecht', 'Dordrecht', 'Zuid-Holland', 'evides'],
  ['Ede', 'Ede', 'Gelderland', 'vitens'],
  ['Alphen aan den Rijn', 'Alphen aan den Rijn', 'Zuid-Holland', 'oasen'],
  ['Alkmaar', 'Alkmaar', 'Noord-Holland', 'pwn'],
  ['Emmen', 'Emmen', 'Drenthe', 'wmd'],
  ['Delft', 'Delft', 'Zuid-Holland', 'evides'],
  ['Venlo', 'Venlo', 'Limburg', 'wml'],
  ['Deventer', 'Deventer', 'Overijssel', 'vitens'],
  ['Helmond', 'Helmond', 'Noord-Brabant', 'brabant-water'],
  ['Oss', 'Oss', 'Noord-Brabant', 'brabant-water'],
  ['Hilversum', 'Hilversum', 'Noord-Holland', 'vitens'],
  ['Amstelveen', 'Amstelveen', 'Noord-Holland', 'waternet'],
  ['Purmerend', 'Purmerend', 'Noord-Holland', 'pwn'],
  ['Roosendaal', 'Roosendaal', 'Noord-Brabant', 'brabant-water'],
  ['Gouda', 'Gouda', 'Zuid-Holland', 'oasen'],
  ['Assen', 'Assen', 'Drenthe', 'wmd'],
  ['Heerlen', 'Heerlen', 'Limburg', 'wml'],
  ['Lelystad', 'Lelystad', 'Flevoland', 'vitens'],
  ['Schiedam', 'Schiedam', 'Zuid-Holland', 'evides'],
  ['Bergen op Zoom', 'Bergen op Zoom', 'Noord-Brabant', 'brabant-water'],
  ['Middelburg', 'Middelburg', 'Zeeland', 'evides'],
  ['Hoorn', 'Hoorn', 'Noord-Holland', 'pwn'],
  ['Woerden', 'Woerden', 'Utrecht', 'vitens'],
];

export function hardheidPerStad() {
  return STEDEN.map(([stad, gemeente, provincie, bedrijfId]) => ({
    stad,
    gemeente,
    provincie,
    ...bepaalHardheid({ woonplaats: stad, gemeente, provincie, bedrijfId }),
  }));
}

function resultaat(id, extra = {}) {
  const b = BEDRIJVEN[id];
  const min = extra.min ?? b.min ?? null;
  const max = extra.max ?? b.max ?? null;
  const heeftWaarde = min != null && max != null;
  const midden = heeftWaarde ? (min + max) / 2 : null;
  return {
    bedrijfId: id,
    bedrijf: b.naam,
    type: b.type,
    min,
    max,
    klasse: heeftWaarde ? klasse(midden) : null,
    klasseMin: heeftWaarde ? klasse(min) : null,
    klasseMax: heeftWaarde ? klasse(max) : null,
    mmol: heeftWaarde ? [naarMmol(min), naarMmol(max)] : null,
    frans: heeftWaarde ? [naarFrans(min), naarFrans(max)] : null,
    toelichting: b.toelichting,
    bron: b.bron,
    checkUrl: b.checkUrl,
    plaatsdetail: extra.plaatsdetail || null,
  };
}
