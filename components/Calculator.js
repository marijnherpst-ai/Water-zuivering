'use client';

import { useState } from 'react';

export default function Calculator() {
  const [personen, setPersonen] = useState(3);
  const [glazen, setGlazen] = useState(6);

  const litersPerJaar = personen * glazen * 0.25 * 365;
  const besparing = Math.round(litersPerJaar * (0.79 - 0.05));

  return (
    <div className="mt-12 rounded-3xl card p-8 sm:p-10 grid md:grid-cols-2 gap-10 items-center">
      <div className="space-y-8">
        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="personen" className="text-sm font-semibold">Aantal personen</label>
            <span className="text-sm font-bold text-amber-dark">{personen}</span>
          </div>
          <input
            id="personen"
            type="range"
            min="1"
            max="8"
            value={personen}
            onChange={(e) => setPersonen(Number(e.target.value))}
            className="w-full accent-amber"
          />
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="glazen" className="text-sm font-semibold">Glazen water per dag (per persoon)</label>
            <span className="text-sm font-bold text-amber-dark">{glazen}</span>
          </div>
          <input
            id="glazen"
            type="range"
            min="2"
            max="12"
            value={glazen}
            onChange={(e) => setGlazen(Number(e.target.value))}
            className="w-full accent-amber"
          />
        </div>
        <p className="text-xs text-dim/70">Uitgangspunten: 250 ml per glas, €0,79 per liter flessenwater (o.b.v. 1,5L Spa Blauw à €1,19), circa €0,05 per liter gefilterd kraanwater (incl. filters). Indicatief — werkelijke besparing verschilt per huishouden.</p>
      </div>
      <div className="rounded-2xl bg-ink text-white p-8 text-center">
        <p className="text-sm font-semibold text-white/60">Geschatte besparing per jaar</p>
        <p className="mt-2 font-display text-5xl font-extrabold text-amber">€ {besparing.toLocaleString('nl-NL')}</p>
        <p className="mt-3 text-sm text-white/60">ten opzichte van flessenwater</p>
        <a href="/aanmelden" className="cursor-pointer mt-6 inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors">
          Start met besparen
        </a>
      </div>
    </div>
  );
}
