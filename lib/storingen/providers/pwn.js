import { withCache } from '../cache';
import { geocodeCoordinaten } from '../pdok';

// PWN rendert de "Storingen"-tab als platte HTML-kaartjes in de initiële
// serverrespons (geen aparte API nodig, en /api staat sowieso disallowed in
// hun robots.txt). De "Werkzaamheden"-tab zit verstopt in een React-Flight
// payload die pas na een tab-klik client-side wordt opgebouwd — die laten we
// bewust links liggen; te fragiel om betrouwbaar te parsen, en storingen
// (i.p.v. gepland onderhoud) zijn het relevantste voor deze pagina.
const CARD_RE = /aria-label="Selecteer ([^"]+)"[\s\S]{0,1500}?__title[^"]*">[^<]+<\/span><span>([^<]+)<\/span>[\s\S]{0,300}?__date[^"]*">([^<]*)</g;

async function fetchDataset() {
  const res = await fetch('https://www.pwn.nl/storingen-en-onderhoud', {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; water-zuivering.nl-storingencheck/1.0)' },
  });
  if (!res.ok) throw new Error(`PWN pagina gaf status ${res.status}`);
  const html = await res.text();

  const items = [];
  let match;
  while ((match = CARD_RE.exec(html)) !== null) {
    const [, titel, status, periode] = match;
    const postcodeMatch = titel.match(/(\d{4}\s?[A-Z]{2})/);
    if (!postcodeMatch) continue;
    items.push({
      titel: titel.trim(),
      status: status.trim(),
      periode: periode.trim(),
      postcode: postcodeMatch[1].replace(/\s+/g, '').toUpperCase(),
    });
  }
  return items;
}

async function metCoordinaten(item) {
  const coords = await geocodeCoordinaten(item.postcode, 'postcode');
  return {
    id: item.titel,
    bron: 'PWN',
    type: 'storing',
    titel: item.titel,
    status: item.status,
    periode: item.periode,
    lat: coords?.lat ?? null,
    lon: coords?.lon ?? null,
  };
}

export async function fetchPwnStoringenVoorPlaats({ woonplaats }) {
  const items = await withCache('pwn', fetchDataset);
  const naald = woonplaats.toLowerCase();

  return Promise.all(items.filter((item) => item.titel.toLowerCase().includes(naald)).map(metCoordinaten));
}

export async function fetchPwnStoringen({ postcode }) {
  const items = await withCache('pwn', fetchDataset);
  const schoon = postcode.replace(/\s+/g, '').toUpperCase();

  return Promise.all(items.filter((item) => item.postcode === schoon).map(metCoordinaten));
}
