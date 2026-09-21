'use client';

// First-party lead attribution. Nothing is written to the visitor's device until
// they have accepted statistics or marketing cookies in Cookiebot. Before that the
// landing details only live in memory for the current page session.
const KEY = 'wz-attr';
const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;
const PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
const MAX_TOUCHES = 8;
const TOUCH_GAP_MS = 30 * 60 * 1000;
const GOOGLE = ['google', 'adwords', 'googleads'];
const FACEBOOK = ['facebook', 'fb', 'instagram', 'ig', 'meta'];

function kanaalVan(betaald) {
  if (betaald.gclid) return 'google';
  if (betaald.fbclid) return 'facebook';
  const bron = (betaald.utm_source || '').toLowerCase();
  if (GOOGLE.includes(bron)) return 'google';
  if (FACEBOOK.includes(bron)) return 'facebook';
  return betaald.utm_medium ? 'overig' : null;
}

const kortTekst = (v) => (typeof v === 'string' && v ? v.slice(0, 40) : undefined);

function voegTouchToe(touches, kanaal, ts, c, a) {
  if (!kanaal) return touches;
  const laatste = touches[touches.length - 1];
  if (laatste && laatste.k === kanaal && ts - laatste.t < TOUCH_GAP_MS) return touches;
  return [...touches, { k: kanaal, t: ts, c: kortTekst(c), a: kortTekst(a) }].slice(-MAX_TOUCHES);
}

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
  const heeftBetaald = Object.keys(nu.betaald).length > 0;
  if (!memory) memory = { first: nu, paid: heeftBetaald ? nu : null, touches: [] };
  else if (heeftBetaald) memory.paid = nu;
  if (heeftBetaald) memory.touches = voegTouchToe(memory.touches || [], kanaalVan(nu.betaald), nu.ts, nu.betaald.utm_campaign, nu.betaald.utm_content);
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

function samenvoegen(oud, nieuw) {
  let uit = [];
  [...oud, ...nieuw].sort((a, b) => a.t - b.t).forEach((x) => { uit = voegTouchToe(uit, x.k, x.t, x.c, x.a); });
  return uit;
}

export function bewaarAlsToegestaan() {
  if (typeof window === 'undefined' || !memory || !heeftToestemming()) return;
  try {
    const bestaand = lees() || {};
    const data = {
      opgeslagen: bestaand.opgeslagen || Date.now(),
      first: bestaand.first || memory.first,
      paid: memory.paid || bestaand.paid || null,
      touches: samenvoegen(bestaand.touches || [], memory.touches || []),
    };
    window.localStorage.setItem(KEY, JSON.stringify(data));
  } catch {}
}

function routeDetails(touches) {
  if (!touches.length) return {};
  const eerste = touches[0].t;
  let detail = touches.map((x) => ({ k: x.k, m: Math.round((x.t - eerste) / 60000), c: x.c, a: x.a }));
  let tekst = JSON.stringify(detail);
  while (tekst.length > 700 && detail.length > 1) {
    detail = detail.slice(1);
    tekst = JSON.stringify(detail);
  }
  return { journey_days: Math.round(((Date.now() - eerste) / 86400000) * 10) / 10, journey_detail: tekst };
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
    fbclid: paid.fbclid,
    journey: (data.touches || []).map((x) => x.k).join('>') || undefined,
    ...routeDetails(data.touches || []),
  };
}
