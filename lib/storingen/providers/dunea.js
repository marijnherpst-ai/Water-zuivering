import { withCache } from '../cache';

const TYPE_MAP = {
  Storing: 'storing',
  Piln: 'werkzaamheden',
  Biln: 'onderhoud',
};

function normalizeer(adresEntry, detail) {
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
  };
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

  return interventies
    .filter((iv) => (iv.GeimpacteerdeAdressen || []).some((a) => (a.Woonplaats || '').toLowerCase() === naald))
    .map((iv) => normalizeer(iv, detailsById.get(iv.InterventieID)));
}

export async function fetchDuneaStoringen({ postcode, huisnummer }) {
  const { interventies, detailsById } = await withCache('dunea', fetchDataset);
  const schoon = postcode.replace(/\s+/g, '').toUpperCase();

  const resultaten = [];
  for (const iv of interventies) {
    const adressen = (iv.GeimpacteerdeAdressen || []).filter((a) => {
      const ivPostcode = (a.Postcode || '').replace(/\s+/g, '').toUpperCase();
      if (ivPostcode !== schoon) return false;
      if (!huisnummer) return true;
      return String(a.Huisnummer) === String(huisnummer);
    });
    if (adressen.length > 0) {
      resultaten.push(normalizeer(iv, detailsById.get(iv.InterventieID)));
    }
  }
  return resultaten;
}
