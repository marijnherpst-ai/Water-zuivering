import { geocodeAdres, geocodePlaats, reverseGeocodePostcode } from './pdok';
import { resolveProvider } from './gemeenten';
import { fetchDuneaStoringen, fetchDuneaStoringenVoorPlaats } from './providers/dunea';
import { fetchPwnStoringen, fetchPwnStoringenVoorPlaats } from './providers/pwn';
import { fetchGroningenStoringen, fetchGroningenStoringenVoorPlaats } from './providers/groningen';
import { fetchWaternetStoringen } from './providers/waternet';

export async function checkStoringenOpAdres(postcode, huisnummer) {
  const adres = await geocodeAdres(postcode, huisnummer);
  if (!adres) {
    return { status: 'niet-gevonden' };
  }

  const provider = resolveProvider({ gemeente: adres.gemeente, provincie: adres.provincie });
  if (!provider) {
    return { status: 'onbekend', adres };
  }
  if (!provider.live) {
    return { status: 'linkout', adres, provider };
  }

  try {
    let storingen = [];
    if (provider.key === 'dunea') {
      storingen = await fetchDuneaStoringen({ postcode: adres.postcode, huisnummer: adres.huisnummer });
    } else if (provider.key === 'pwn') {
      storingen = await fetchPwnStoringen({ postcode: adres.postcode });
    } else if (provider.key === 'groningen') {
      storingen = await fetchGroningenStoringen({ straatnaam: adres.straatnaam });
    } else if (provider.key === 'waternet') {
      storingen = await fetchWaternetStoringen({ postcode: adres.postcode });
    }
    return { status: 'ok', adres, provider, storingen };
  } catch (err) {
    return { status: 'fout', adres, provider, error: err.message };
  }
}

export async function checkStoringenOpPlaats(plaats) {
  const locatie = await geocodePlaats(plaats);
  if (!locatie) {
    return { status: 'niet-gevonden' };
  }

  const provider = resolveProvider({ gemeente: locatie.gemeente, provincie: locatie.provincie });
  if (!provider) {
    return { status: 'onbekend', adres: locatie };
  }
  if (!provider.live) {
    return { status: 'linkout', adres: locatie, provider };
  }

  try {
    let storingen = [];
    if (provider.key === 'dunea') {
      storingen = await fetchDuneaStoringenVoorPlaats({ woonplaats: locatie.woonplaats });
    } else if (provider.key === 'pwn') {
      storingen = await fetchPwnStoringenVoorPlaats({ woonplaats: locatie.woonplaats });
    } else if (provider.key === 'groningen') {
      storingen = await fetchGroningenStoringenVoorPlaats({ woonplaats: locatie.woonplaats });
    } else if (provider.key === 'waternet') {
      const postcode = await reverseGeocodePostcode(locatie.lat, locatie.lon);
      storingen = postcode ? await fetchWaternetStoringen({ postcode }) : [];
    }
    return { status: 'ok', adres: locatie, provider, storingen };
  } catch (err) {
    return { status: 'fout', adres: locatie, provider, error: err.message };
  }
}
