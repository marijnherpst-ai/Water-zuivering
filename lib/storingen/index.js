import { geocodeAdres } from './pdok';
import { resolveProvider } from './gemeenten';
import { fetchDuneaStoringen } from './providers/dunea';
import { fetchPwnStoringen } from './providers/pwn';
import { fetchGroningenStoringen } from './providers/groningen';
import { fetchWaternetStoringen } from './providers/waternet';

export async function checkStoringen(postcode, huisnummer) {
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

  let storingen = [];
  try {
    if (provider.key === 'dunea') {
      storingen = await fetchDuneaStoringen({ postcode: adres.postcode, huisnummer: adres.huisnummer });
    } else if (provider.key === 'pwn') {
      storingen = await fetchPwnStoringen({ postcode: adres.postcode });
    } else if (provider.key === 'groningen') {
      storingen = await fetchGroningenStoringen({ straatnaam: adres.straatnaam });
    } else if (provider.key === 'waternet') {
      storingen = await fetchWaternetStoringen({ postcode: adres.postcode });
    }
  } catch (err) {
    return { status: 'fout', adres, provider, error: err.message };
  }

  return { status: 'ok', adres, provider, storingen };
}
