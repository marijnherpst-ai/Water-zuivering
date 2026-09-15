import { withCache } from '../cache';
import { geocodeCoordinaten } from '../pdok';

// Waterbedrijf Groningen toont storingen als statische HTML zonder postcode-
// veld — alleen straatnaam/plaats. We matchen daarom op straatnaam (die we
// via PDOK uit het opgegeven adres halen) i.p.v. postcode.
function extractTussen(chunk, label) {
  const idx = chunk.indexOf(label);
  if (idx === -1) return '';
  const rest = chunk.slice(idx);
  const match = rest.match(/<p>\s*([\s\S]*?)\s*<\/p>/);
  return match ? match[1].replace(/\s+/g, ' ').trim() : '';
}

async function fetchDataset() {
  const res = await fetch('https://www.waterbedrijfgroningen.nl/storingen-en-onderhoud/', {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; water-zuivering.nl-storingencheck/1.0)' },
  });
  if (!res.ok) throw new Error(`Waterbedrijf Groningen pagina gaf status ${res.status}`);
  const html = await res.text();

  const chunks = html.split('<base-maintenance-collapse').slice(1);
  return chunks.map((chunk) => {
    const titel = chunk.match(/title="([^"]*)"/)?.[1] || '';
    const status = chunk.match(/status-text="([^"]*)"/)?.[1] || '';
    const datum = chunk.match(/\sdate="([^"]*)"/)?.[1] || '';
    const gebied = extractTussen(chunk, 'Gebied');
    const omschrijving = extractTussen(chunk, 'Omschrijving');
    return { titel, status, datum, gebied, omschrijving };
  });
}

async function metCoordinaten(item) {
  const coords = item.gebied ? await geocodeCoordinaten(item.gebied) : null;
  return {
    id: item.titel,
    bron: 'Waterbedrijf Groningen',
    type: item.status.toLowerCase().includes('storing') ? 'storing' : 'werkzaamheden',
    titel: item.titel,
    status: item.status,
    periode: item.datum,
    omschrijving: item.omschrijving,
    gebied: item.gebied,
    lat: coords?.lat ?? null,
    lon: coords?.lon ?? null,
  };
}

export async function fetchGroningenStoringenVoorPlaats({ woonplaats }) {
  const items = await withCache('groningen', fetchDataset);
  const naald = woonplaats.toLowerCase();

  return Promise.all(
    items.filter((item) => (item.gebied + ' ' + item.titel).toLowerCase().includes(naald)).map(metCoordinaten)
  );
}

export async function fetchGroningenStoringen({ straatnaam }) {
  const items = await withCache('groningen', fetchDataset);
  if (!straatnaam) return [];
  const naaldNormaal = straatnaam.toLowerCase();

  return Promise.all(
    items.filter((item) => (item.gebied + ' ' + item.titel).toLowerCase().includes(naaldNormaal)).map(metCoordinaten)
  );
}
