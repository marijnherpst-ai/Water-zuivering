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

// --- Live values for suppliers that only publish hardness per postcode ---
// Vitens, Evides and WML show the hardness for one address in their own public
// postcode checks. We ask them for exactly that one address when someone uses
// our check (cached for a week), and fall back to a link if they don't answer.
const LIVE_BRON = {
  vitens: (pc) => ({ titel: `Vitens: waterhardheid voor postcode ${pc}`, url: `https://www.vitens.nl/over-water/waterhardheid?Postcode=${pc}` }),
  evides: (pc) => ({ titel: `Evides: mijn waterhardheid voor postcode ${pc}`, url: `https://www.evides.nl/uw-drinkwater/waterhardheid?postcode=${pc}` }),
  wml: () => ({ titel: 'WML: waterhardheid op postcode en huisnummer', url: 'https://www.wml.nl/alles-over-water/waterdruk-en-hardheid' }),
};

const getal = (s) => Number(String(s).replace(',', '.'));

async function haal(url, soort) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; water-zuivering.nl waterhardheid-check)', Accept: soort === 'json' ? 'application/json' : 'text/html' },
    signal: AbortSignal.timeout(5000),
    next: { revalidate: 60 * 60 * 24 * 7 },
  });
  if (!res.ok) throw new Error(String(res.status));
  return soort === 'json' ? res.json() : res.text();
}

async function liveWaarden(bedrijfId, postcode, huisnummer) {
  if (bedrijfId === 'vitens') {
    const html = await haal(`https://www.vitens.nl/over-water/waterhardheid?Postcode=${postcode}`, 'html');
    const m = html.match(/water-hardness__value">\s*([\d.,]+)\s*°dH/);
    // Vitens shows "0 °dH" when it has no data for a postcode.
    return m && getal(m[1]) > 0 ? { waarden: [getal(m[1])] } : null;
  }
  if (bedrijfId === 'evides') {
    const json = await haal(`https://www.evides.nl/api/data/water-hardness?zipcode=${postcode}`, 'json');
    const rijen = (json?.data || []).filter((r) => Number(r.Hardheid) > 0);
    return rijen.length ? { waarden: rijen.map((r) => Number(r.Hardheid)), locatie: rijen.map((r) => r.Productielocatie).filter(Boolean).join(', ') } : null;
  }
  if (bedrijfId === 'wml') {
    const tekst = await haal(`https://api.wml.nl/waterhardheid?postal_code=${postcode}&house_number=${encodeURIComponent(huisnummer)}`, 'html');
    const json = JSON.parse(tekst.replace(/^\)\]\}',?\s*/, ''));
    const rijen = Array.isArray(json) ? json.filter((r) => getal(r?.hardness) > 0) : [];
    return rijen.length ? { waarden: rijen.map((r) => getal(r.hardness)) } : null;
  }
  return null;
}

// Adds the supplier's own value for this address to a result without a number.
export async function vulLiveAan(res, postcode, huisnummer) {
  if (!res || res.min != null || !LIVE_BRON[res.bedrijfId]) return res;
  try {
    const live = await liveWaarden(res.bedrijfId, postcode, huisnummer);
    if (!live || !live.waarden.length) return res;
    const min = Math.min(...live.waarden);
    const max = Math.max(...live.waarden);
    return {
      ...resultaat(res.bedrijfId, { min, max }),
      bron: LIVE_BRON[res.bedrijfId](postcode),
      live: true,
      productielocatie: live.locatie || null,
    };
  } catch {
    return res;
  }
}

// When the supplier has no value for this postcode (Vitens skips some city
// centres), use the nearest other postcode in the same place that does have one.
export async function vulLiveAanInBuurt(res, lon, lat, woonplaats, eigenPostcode = '') {
  if (!res || res.min != null || !LIVE_BRON[res.bedrijfId] || !lon) return res;
  // Sample addresses in rings of ~0.7, 1.5 and 2.5 km around the point, nearest first.
  const geprobeerd = new Set([eigenPostcode.slice(0, 4)]);
  for (const km of [0.7, 1.5, 2.5]) {
    for (let hoek = 0; hoek < 360; hoek += 45) {
      const pLat = lat + (km / 111) * Math.cos((hoek * Math.PI) / 180);
      const pLon = lon + (km / 68) * Math.sin((hoek * Math.PI) / 180);
      try {
        const adres = await fetch(
          `https://api.pdok.nl/bzk/locatieserver/search/v3_1/reverse?lat=${pLat.toFixed(5)}&lon=${pLon.toFixed(5)}&type=adres&rows=1&fl=postcode,huisnummer,woonplaatsnaam`,
          { next: { revalidate: 60 * 60 * 24 * 30 } }
        ).then((x) => x.json());
        const doc = adres?.response?.docs?.[0];
        if (!doc?.postcode || doc.woonplaatsnaam !== woonplaats || geprobeerd.has(doc.postcode.slice(0, 4))) continue;
        geprobeerd.add(doc.postcode.slice(0, 4));
        const live = await vulLiveAan(res, doc.postcode, String(doc.huisnummer));
        if (live.live) return { ...live, naburigePostcode: doc.postcode };
      } catch {}
    }
  }
  return res;
}

// City table with live values for Vitens, Evides and WML cities, measured at the
// addresses closest to the city centre (PDOK reverse geocoding).
export async function hardheidPerStadLive() {
  return Promise.all(
    hardheidPerStad().map(async (r) => {
      if (r.min != null || !LIVE_BRON[r.bedrijfId]) return r;
      try {
        const plaats = await fetch(
          `https://api.pdok.nl/bzk/locatieserver/search/v3_1/free?q=${encodeURIComponent(`woonplaatsnaam:"${r.stad}"`)}&fq=type:woonplaats&rows=1&fl=centroide_ll`,
          { next: { revalidate: 60 * 60 * 24 * 30 } }
        ).then((x) => x.json());
        const [lon, lat] = (plaats?.response?.docs?.[0]?.centroide_ll?.match(/-?[\d.]+/g) || []).map(Number);
        const live = await vulLiveAanInBuurt(r, lon, lat, r.stad);
        return live.live ? { ...r, ...live, stad: r.stad, gemeente: r.gemeente, provincie: r.provincie } : r;
      } catch {
        return r;
      }
    })
  );
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
