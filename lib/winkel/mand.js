'use client';

import { useEffect, useState } from 'react';

const KEY = 'wz-mand';
const EVENT = 'wz-mand-changed';

function lees() {
  try {
    const raw = window.localStorage.getItem(KEY);
    const data = raw ? JSON.parse(raw) : [];
    return Array.isArray(data) ? data.filter((r) => r && typeof r.slug === 'string' && r.aantal > 0) : [];
  } catch {
    return [];
  }
}

function schrijf(regels) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(regels));
  } catch {}
  window.dispatchEvent(new Event(EVENT));
}

export function voegToe(slug, aantal = 1) {
  const regels = lees();
  const bestaand = regels.find((r) => r.slug === slug);
  if (bestaand) bestaand.aantal = Math.min(bestaand.aantal + aantal, 20);
  else regels.push({ slug, aantal });
  schrijf(regels);
}

export function zetAantal(slug, aantal) {
  const regels = lees()
    .map((r) => (r.slug === slug ? { ...r, aantal: Math.min(aantal, 20) } : r))
    .filter((r) => r.aantal > 0);
  schrijf(regels);
}

export function verwijder(slug) {
  schrijf(lees().filter((r) => r.slug !== slug));
}

export function useMand() {
  const [regels, setRegels] = useState([]);
  const [klaar, setKlaar] = useState(false);

  useEffect(() => {
    const sync = () => setRegels(lees());
    sync();
    setKlaar(true);
    window.addEventListener(EVENT, sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  return { regels, klaar };
}
