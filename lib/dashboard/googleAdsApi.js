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
  if (!res.ok) throw new Error(json.error_description || json.error || 'Google-token ophalen mislukt');

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
  const details = json.error?.details?.find((d) => Array.isArray(d.errors))?.errors?.map((e) => e.message).join('; ');
  return new Error(details || json.error?.message || `Google Ads gaf fout ${res.status}`);
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

export async function gaqlMutate(mutateOperations, { customerId = CUSTOMER_ID, loginCustomerId } = {}) {
  const res = await fetch(`https://googleads.googleapis.com/${API_VERSION}/customers/${customerId}/googleAds:mutate`, {
    method: 'POST',
    headers: await authHeaders(loginCustomerId),
    body: JSON.stringify({ mutateOperations }),
    cache: 'no-store',
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw fout(json, res);
  return (json.mutateOperationResponses || []).map((r) => {
    const key = Object.keys(r)[0];
    return { ...r[key], resultType: key };
  });
}
