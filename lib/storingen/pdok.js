// Geocoding via PDOK Locatieserver — de vrij toegankelijke adres-zoekdienst
// van het Kadaster (overheids-open-data, geen key/rate-limit-issues).
export async function geocodeAdres(postcode, huisnummer) {
  const schoon = postcode.replace(/\s+/g, '').toUpperCase();
  const query = `${schoon} ${huisnummer}`;
  const url = `https://api.pdok.nl/bzk/locatieserver/search/v3_1/free?${new URLSearchParams({
    q: query,
    fq: 'type:adres',
    rows: '1',
  })}`;

  const res = await fetch(url, { headers: { Accept: 'application/json' } });
  if (!res.ok) return null;

  const data = await res.json();
  const doc = data?.response?.docs?.[0];
  if (!doc) return null;

  return {
    postcode: doc.postcode,
    huisnummer: doc.huisnummer,
    straatnaam: doc.straatnaam,
    woonplaats: doc.woonplaatsnaam,
    gemeente: doc.gemeentenaam,
    provincie: doc.provincienaam,
    weergavenaam: doc.weergavenaam,
  };
}
