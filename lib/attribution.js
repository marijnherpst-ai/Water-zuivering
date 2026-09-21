'use client';

// First-party lead attribution. Nothing is written to the visitor's device until
// they have accepted statistics or marketing cookies in Cookiebot. Before that the
// landing details only live in memory for the current page session.
const KEY = 'wz-attr';
const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;
const PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'];

let memory = null;

function heeftToestemming() {
  if (typeof window === 'undefined') return false;
  const host = window.location.hostname;
  if (host === 'localhost' || host === '127.0.0.1') return true;
  const c = window.Cookiebot && window.Cookiebot.consent;
  return !!(c && (c.statistics || c.marketing));
}

function schoon(waarde) {
  return typeof waarde === 'string' ? waarde.slice(0, 200) : undefined;
}

function leesUrl() {
  const url = new URL(window.location.href);
  const betaald = {};
  PARAMS.forEach((p) => {
    const v = url.searchParams.get(p);
    if (v) betaald[p] = schoon(v);
  });
  let referrerHost;
  try {
    referrerHost = document.referrer ? new URL(document.referrer).hostname : undefined;
    if (referrerHost && referrerHost.endsWith('water-zuivering.nl')) referrerHost = undefined;
  } catch {}
  return { landing_page: url.pathname, referrer_host: schoon(referrerHost), betaald, ts: Date.now() };
}

export function onthoudLanding() {
  if (typeof window === 'undefined') return;
  const nu = leesUrl();
  if (!memory) memory = { first: nu, paid: Object.keys(nu.betaald).length ? nu : null };
  else if (Object.keys(nu.betaald).length) memory.paid = nu;
}

function lees() {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data || Date.now() - data.opgeslagen > MAX_AGE_MS) return null;
    return data;
  } catch {
    return null;
  }
}

export function bewaarAlsToegestaan() {
  if (typeof window === 'undefined' || !memory || !heeftToestemming()) return;
  try {
    const bestaand = lees() || {};
    const data = {
      opgeslagen: bestaand.opgeslagen || Date.now(),
      first: bestaand.first || memory.first,
      paid: memory.paid || bestaand.paid || null,
    };
    window.localStorage.setItem(KEY, JSON.stringify(data));
  } catch {}
}

export function getAttribution() {
  if (typeof window === 'undefined') return { consent: false };
  if (!heeftToestemming()) return { consent: false };
  bewaarAlsToegestaan();
  const data = lees() || memory;
  if (!data) return { consent: true };
  const first = data.first || {};
  const paid = (data.paid && data.paid.betaald) || {};
  return {
    consent: true,
    landing_page: first.landing_page,
    referrer_host: first.referrer_host,
    utm_source: paid.utm_source,
    utm_medium: paid.utm_medium,
    utm_campaign: paid.utm_campaign,
    utm_term: paid.utm_term,
    utm_content: paid.utm_content,
    gclid: paid.gclid,
  };
}
