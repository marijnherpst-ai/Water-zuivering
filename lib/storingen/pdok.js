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

// Voor een zoekopdracht op alleen plaatsnaam (geen postcode/huisnummer).
export async function geocodePlaats(plaats) {
  const url = `https://api.pdok.nl/bzk/locatieserver/search/v3_1/free?${new URLSearchParams({
    q: plaats,
    fq: 'type:woonplaats',
    rows: '1',
  })}`;

  const res = await fetch(url, { headers: { Accept: 'application/json' } });
  if (!res.ok) return null;

  const data = await res.json();
  const doc = data?.response?.docs?.[0];
  if (!doc) return null;

  const [lon, lat] = doc.centroide_ll?.match(/[\d.]+/g)?.map(Number) || [];

  return {
    woonplaats: doc.woonplaatsnaam,
    gemeente: doc.gemeentenaam,
    provincie: doc.provincienaam,
    weergavenaam: doc.woonplaatsnaam,
    lat,
    lon,
  };
}

// Geeft een representatieve postcode terug voor een punt (centrum van een
// plaats) — nodig voor bronnen die alleen op postcode filteren (Waternet).
export async function reverseGeocodePostcode(lat, lon) {
  const url = `https://api.pdok.nl/bzk/locatieserver/search/v3_1/reverse?${new URLSearchParams({
    lat: String(lat),
    lon: String(lon),
    type: 'adres',
    rows: '1',
  })}`;

  const res = await fetch(url, { headers: { Accept: 'application/json' } });
  if (!res.ok) return null;

  const data = await res.json();
  const doc = data?.response?.docs?.[0];
  return doc?.weergavenaam?.match(/\d{4}[A-Z]{2}/)?.[0] || null;
}
