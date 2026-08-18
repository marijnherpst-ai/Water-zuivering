'use client';

import { useState } from 'react';

const OBJECTEN = [
  { label: 'Pak melk', cm: 7 },
  { label: 'A4-mapje', cm: 21 },
  { label: 'Standaard keukenla', cm: 50 },
];

const SCHAAL_MAX = 55; // cm, bepaalt breedte van de balk als 100%
const SYSTEEM_CM = 10.5;

export default function MaatVergelijker() {
  const [actief, setActief] = useState(2);
  const object = OBJECTEN[actief];

  return (
    <div className="rounded-[2rem] card p-7 sm:p-10">
      <p className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vergelijk zelf</p>
      <h3 className="mt-2 font-display text-xl font-extrabold tracking-tight">Hoe breed is 10,5 cm nou eigenlijk?</h3>

      <div className="mt-6 flex flex-wrap gap-2">
        {OBJECTEN.map((o, i) => (
          <button
            key={o.label}
            type="button"
            onClick={() => setActief(i)}
            className={`cursor-pointer rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-colors ${
              i === actief ? 'bg-ink text-white' : 'bg-bg border border-edge text-dim hover:border-ink/30'
            }`}
          >
            {o.label} ({o.cm} cm)
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-5">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-sm font-bold text-ink">Osmosewatersysteem</span>
            <span className="text-sm font-bold text-amber-dark">{SYSTEEM_CM} cm</span>
          </div>
          <div className="h-8 rounded-lg bg-bg overflow-hidden">
            <div
              className="h-full rounded-lg transition-[width] duration-500 ease-out"
              style={{ width: `${(SYSTEEM_CM / SCHAAL_MAX) * 100}%`, background: 'linear-gradient(90deg, #EDA71B, #C6890F)' }}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-sm font-bold text-ink">{object.label}</span>
            <span className="text-sm font-bold text-dim">{object.cm} cm</span>
          </div>
          <div className="h-8 rounded-lg bg-bg overflow-hidden">
            <div
              className="h-full rounded-lg bg-edge transition-[width] duration-500 ease-out"
              style={{ width: `${(object.cm / SCHAAL_MAX) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-dim">
        {object.cm > SYSTEEM_CM
          ? `Het systeem is smaller dan ${object.label.toLowerCase()} — het past dus vrijwel altijd moeiteloos onder je aanrecht.`
          : `Het systeem is net iets breder dan ${object.label.toLowerCase()}, maar nog steeds compact genoeg voor vrijwel elk keukenkastje.`}
      </p>
    </div>
  );
}
