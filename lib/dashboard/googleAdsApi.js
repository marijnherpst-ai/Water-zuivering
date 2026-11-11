import 'server-only';

const API_VERSION = 'v25';
export const CUSTOMER_ID = '1300062484';
export const LOGIN_CUSTOMER_ID = '4108543292';

let cachedToken = null;
let cachedExpiry = 0;

async function getAccessToken() {
  if (cachedToken && Date.now() < cachedExpiry - 60000) return cachedToken;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_ADS_CLIENT_ID,
      client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET,
      refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
    cache: 'no-store',
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    // Prefix with the step so a failing refresh token is distinguishable from a
    // Google Ads API error (both can otherwise surface as a bare "Bad Request").
    // Only Google's error code/description is included, never the credentials.
    throw new Error(`TOKEN ${res.status}: ${json.error || 'onbekend'}${json.error_description ? ` (${json.error_description})` : ''}`);
  }

  cachedToken = json.access_token;
  cachedExpiry = Date.now() + (json.expires_in || 3600) * 1000;
  return cachedToken;
}

async function authHeaders(loginCustomerId) {
  const token = await getAccessToken();
  return {
    Authorization: `Bearer ${token}`,
    'developer-token': process.env.GOOGLE_ADS_DEVELOPER_TOKEN,
    'login-customer-id': loginCustomerId || LOGIN_CUSTOMER_ID,
    'Content-Type': 'application/json',
  };
}

function fout(json, res) {
  const errs = json.error?.details?.find((d) => Array.isArray(d.errors))?.errors;
  const details = errs?.map((e) => {
    const pad = e.location?.fieldPathElements?.map((f) => f.fieldName + (f.index != null ? `[${f.index}]` : '')).join('.');
    return `${e.errorCode ? JSON.stringify(e.errorCode) : ''} ${e.message}${pad ? ` @ ${pad}` : ''}${e.trigger ? ` (trigger: ${JSON.stringify(e.trigger)})` : ''}`;
  }).join(' || ');
  const err = new Error(`ADS ${res.status}: ${details || json.error?.message || 'onbekende fout'}`);
  err.ruw = json;
  return err;
}

export async function gaqlQuery(query, { customerId = CUSTOMER_ID, loginCustomerId } = {}) {
  const res = await fetch(`https://googleads.googleapis.com/${API_VERSION}/customers/${customerId}/googleAds:search`, {
    method: 'POST',
    headers: await authHeaders(loginCustomerId),
    body: JSON.stringify({ query }),
    cache: 'no-store',
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw fout(json, res);
  return json.results || [];
}

export async function genereerZoekwoordIdeeen(seedKeywords, { customerId = CUSTOMER_ID, loginCustomerId } = {}) {
  const res = await fetch(`https://googleads.googleapis.com/${API_VERSION}/customers/${customerId}:generateKeywordIdeas`, {
    method: 'POST',
    headers: await authHeaders(loginCustomerId),
    body: JSON.stringify({
      geoTargetConstants: ['geoTargetConstants/2528'],
      language: 'languageConstants/1010',
      keywordPlanNetwork: 'GOOGLE_SEARCH',
      keywordSeed: { keywords: seedKeywords },
    }),
    cache: 'no-store',
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw fout(json, res);
  return json.results || [];
}

const NL_PLANNER = {
  geoTargetConstants: ['geoTargetConstants/2528'],
  language: 'languageConstants/1010',
  keywordPlanNetwork: 'GOOGLE_SEARCH',
};

// All keyword ideas for up to 20 seed keywords and/or a seed URL, following
// every result page. Used for the own SEO keyword database (seo_zoekwoorden).
export async function alleZoekwoordIdeeen({ seeds = [], url = null } = {}, { customerId = CUSTOMER_ID, loginCustomerId } = {}) {
  let seed;
  if (seeds.length && url) seed = { keywordAndUrlSeed: { keywords: seeds, url } };
  else if (url) seed = { urlSeed: { url } };
  else seed = { keywordSeed: { keywords: seeds } };

  const resultaten = [];
  let pageToken;
  for (let pagina = 0; pagina < 20; pagina++) {
    const res = await fetch(`https://googleads.googleapis.com/${API_VERSION}/customers/${customerId}:generateKeywordIdeas`, {
      method: 'POST',
      headers: await authHeaders(loginCustomerId),
      body: JSON.stringify({ ...NL_PLANNER, ...seed, includeAdultKeywords: false, pageSize: 1000, ...(pageToken ? { pageToken } : {}) }),
      cache: 'no-store',
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) throw fout(json, res);
    resultaten.push(...(json.results || []));
    pageToken = json.nextPageToken;
    if (!pageToken) break;
  }
  return resultaten;
}

// Current volume, trend, competition and bids for a known list of keywords
// (max 10,000 per call), so existing keywords can be refreshed.
export async function zoekwoordHistorie(keywords, { customerId = CUSTOMER_ID, loginCustomerId } = {}) {
  const res = await fetch(`https://googleads.googleapis.com/${API_VERSION}/customers/${customerId}:generateKeywordHistoricalMetrics`, {
    method: 'POST',
    headers: await authHeaders(loginCustomerId),
    body: JSON.stringify({ geoTargetConstants: NL_PLANNER.geoTargetConstants, language: NL_PLANNER.language, keywordPlanNetwork: NL_PLANNER.keywordPlanNetwork, keywords, includeAdultKeywords: false }),
    cache: 'no-store',
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw fout(json, res);
  return json.results || [];
}

export async function gaqlMutate(mutateOperations, { customerId = CUSTOMER_ID, loginCustomerId, validateOnly = false } = {}) {
  const res = await fetch(`https://googleads.googleapis.com/${API_VERSION}/customers/${customerId}/googleAds:mutate`, {
    method: 'POST',
    headers: await authHeaders(loginCustomerId),
    // validateOnly lets Google check the operations without applying them.
    body: JSON.stringify({ mutateOperations, validateOnly }),
    cache: 'no-store',
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw fout(json, res);
  return (json.mutateOperationResponses || []).map((r) => {
    const key = Object.keys(r)[0];
    return { ...r[key], resultType: key };
  });
}
