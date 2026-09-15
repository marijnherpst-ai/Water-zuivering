import { withCache } from '../cache';
import { geocodeCoordinaten } from '../pdok';

const TYPE_MAP = {
  Storing: 'storing',
  Piln: 'werkzaamheden',
  Biln: 'onderhoud',
};

function normalizeer(adresEntry, detail, adressen) {
  const kookadvies = (detail?.Kookadvies_Interventie ?? adresEntry.Kookadvies_Interventie) === 'Ja';
  const type = kookadvies
    ? 'kookadvies'
    : (TYPE_MAP[detail?.Normalized_Type] || 'werkzaamheden');

  return {
    id: adresEntry.InterventieID,
    bron: 'Dunea',
    type,
    titel: adresEntry.Type_Interventie,
    status: detail?.Status_interventie || adresEntry.Status_Interventie,
    start: adresEntry.Start_werkzaamheden_Interventie || null,
    eind: adresEntry.Einde_werkzaamheden_Interventie || null,
    kookadviesStart: adresEntry.Start_kookadvies_Interventie || null,
    kookadviesEind: adresEntry.Einde_kookadvies_Interventie || null,
    aantalAdressen: adressen.length,
  };
}

async function metCoordinaten(resultaat, adressen) {
  const postcode = adressen[0]?.Postcode?.replace(/\s+/g, '');
  if (!postcode) return resultaat;
  const coords = await geocodeCoordinaten(postcode, 'postcode');
  return { ...resultaat, lat: coords?.lat ?? null, lon: coords?.lon ?? null };
}

async function fetchDataset() {
  const [adressenRes, interventiesRes] = await Promise.all([
    fetch('https://www.dunea.nl/api/outages/addresses', { headers: { Accept: 'application/json' } }),
    fetch('https://www.dunea.nl/api/outages/interventions', { headers: { Accept: 'application/json' } }),
  ]);
  if (!adressenRes.ok) throw new Error(`Dunea API gaf status ${adressenRes.status}`);

  const adressenData = await adressenRes.json();
  const detailsById = new Map();
  if (interventiesRes.ok) {
    const interventiesData = await interventiesRes.json();
    for (const iv of interventiesData?.interventies || []) {
      detailsById.set(iv.InterventieID, iv);
    }
  }

  return { interventies: adressenData?.interventies || [], detailsById };
}

export async function fetchDuneaStoringenVoorPlaats({ woonplaats }) {
  const { interventies, detailsById } = await withCache('dunea', fetchDataset);
  const naald = woonplaats.toLowerCase();

  const treffers = interventies
    .map((iv) => ({ iv, adressen: (iv.GeimpacteerdeAdressen || []).filter((a) => (a.Woonplaats || '').toLowerCase() === naald) }))
    .filter((t) => t.adressen.length > 0);

  return Promise.all(
    treffers.map(({ iv, adressen }) => metCoordinaten(normalizeer(iv, detailsById.get(iv.InterventieID), adressen), adressen))
  );
}

export async function fetchDuneaStoringen({ postcode, huisnummer }) {
  const { interventies, detailsById } = await withCache('dunea', fetchDataset);
  const schoon = postcode.replace(/\s+/g, '').toUpperCase();

  const treffers = [];
  for (const iv of interventies) {
    const adressen = (iv.GeimpacteerdeAdressen || []).filter((a) => {
      const ivPostcode = (a.Postcode || '').replace(/\s+/g, '').toUpperCase();
      if (ivPostcode !== schoon) return false;
      if (!huisnummer) return true;
      return String(a.Huisnummer) === String(huisnummer);
    });
    if (adressen.length > 0) {
      treffers.push({ iv, adressen });
    }
  }

  return Promise.all(
    treffers.map(({ iv, adressen }) => metCoordinaten(normalizeer(iv, detailsById.get(iv.InterventieID), adressen), adressen))
  );
}
