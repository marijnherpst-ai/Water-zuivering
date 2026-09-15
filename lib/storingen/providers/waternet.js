import { withCache } from '../cache';

// Waternet's eigen storingenwidget roept, zonder robots.txt-restrictie, deze
// JSON-API aan met alleen een postcode (geen geocoding aan onze kant nodig).
// De API geeft een lijst gesorteerd op afstand (km) t.o.v. de postcode terug
// i.p.v. een exacte adres-match — vandaar de afstandsgrens hieronder.
const AFSTAND_GRENS_KM = 1;

const TYPE_MAP = {
  Disruption: 'storing',
  PlannedMaintenance: 'werkzaamheden',
};

async function fetchVoorPostcode(schoon) {
  const res = await fetch(`https://www.waternet.nl/nl/api/v1/storingen?zipcode=${encodeURIComponent(schoon)}`, {
    headers: { Accept: 'application/json' },
  });
  if (!res.ok) throw new Error(`Waternet API gaf status ${res.status}`);
  const data = await res.json();
  return data?.result || [];
}

export async function fetchWaternetStoringen({ postcode }) {
  const schoon = postcode.replace(/\s+/g, '').toUpperCase();
  const resultaten = await withCache(`waternet:${schoon}`, () => fetchVoorPostcode(schoon));

  return resultaten
    .filter((item) => typeof item.distance === 'number' && item.distance <= AFSTAND_GRENS_KM && !item.isSolved)
    .map((item) => ({
      id: item.id,
      bron: 'Waternet',
      type: TYPE_MAP[item.type] || 'werkzaamheden',
      titel: item.title,
      omschrijving: item.description,
      status: item.isSolved ? 'Opgelost' : 'Actief',
      start: item.dateTimeReported || null,
      periode: item.timeReported && item.timeFixed ? `${item.timeReported} – ${item.timeFixed}` : null,
      lat: item.position?.lat ?? null,
      lon: item.position?.lng ?? null,
    }));
}
