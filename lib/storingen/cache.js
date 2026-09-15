// Simpele in-memory cache per serverless-instance. Voorkomt dat elke
// paginabezoeker direct 1-op-1 een verzoek bij het waterbedrijf veroorzaakt —
// binnen een warme instance wordt de dataset van een bron maximaal 1x per
// TTL_MS opnieuw opgehaald.
const TTL_MS = 10 * 60 * 1000;
const store = new Map();

export async function withCache(key, fetcher) {
  const cached = store.get(key);
  if (cached && Date.now() - cached.at < TTL_MS) {
    return cached.data;
  }
  const data = await fetcher();
  store.set(key, { data, at: Date.now() });
  return data;
}
