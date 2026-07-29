'use client';

import { useMemo, useState } from 'react';

const WATER_BRANDS = [
  { name: 'Spa Blauw', pricePerLiter: 0.79 },
  { name: 'Spa Reine', pricePerLiter: 0.72 },
  { name: 'Chaudfontaine', pricePerLiter: 0.79 },
  { name: 'Sourcy', pricePerLiter: 0.67 },
  { name: 'Bar-le-Duc', pricePerLiter: 0.52 },
  { name: 'Evian', pricePerLiter: 0.85 },
  { name: 'Supermarkt huismerk (bijv. AH, Jumbo, Lidl)', pricePerLiter: 0.30 },
];

export default function Calculator() {
  const [personen, setPersonen] = useState(3);
  const [glazen, setGlazen] = useState(6);
  const [brand, setBrand] = useState(WATER_BRANDS[0]);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

  const filteredBrands = useMemo(
    () => WATER_BRANDS.filter((b) => b.name.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  const litersPerJaar = personen * glazen * 0.25 * 365;
  const besparing = Math.round(litersPerJaar * (brand.pricePerLiter - 0.05));

  function selectBrand(b) {
    setBrand(b);
    setQuery('');
    setOpen(false);
  }

  return (
    <div className="mt-12 rounded-3xl card p-8 sm:p-10 grid md:grid-cols-2 gap-10 items-center">
      <div className="space-y-8">
        <div className="relative">
          <label htmlFor="watermerk" className="block text-sm font-semibold mb-2">Welk flessenwater drink je?</label>
          <input
            id="watermerk"
            type="text"
            value={open ? query : brand.name}
            onFocus={() => { setOpen(true); setQuery(''); }}
            onChange={(e) => setQuery(e.target.value)}
            onBlur={() => setTimeout(() => setOpen(false), 150)}
            placeholder="Zoek een merk..."
            autoComplete="off"
            className="w-full rounded-lg border border-edge bg-bg px-4 py-3 text-sm text-ink placeholder:text-dim/60 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
          />
          {open && (
            <div className="absolute z-10 mt-1 w-full max-h-56 overflow-y-auto rounded-lg border border-edge bg-surface shadow-xl">
              {filteredBrands.length === 0 ? (
                <p className="px-4 py-3 text-sm text-dim">Geen merk gevonden.</p>
              ) : (
                filteredBrands.map((b) => (
                  <button
                    key={b.name}
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => selectBrand(b)}
                    className={`cursor-pointer flex items-center justify-between w-full text-left px-4 py-2.5 text-sm hover:bg-bg transition-colors ${b.name === brand.name ? 'font-bold text-amber-dark' : 'text-ink'}`}
                  >
                    {b.name}
                    <span className="text-xs text-dim">€ {b.pricePerLiter.toFixed(2)}/L</span>
                  </button>
                ))
              )}
            </div>
          )}
        </div>
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
        <p className="text-xs text-dim/70">Uitgangspunten: 250 ml per glas, € {brand.pricePerLiter.toFixed(2)} per liter {brand.name}, circa €0,05 per liter gefilterd kraanwater (incl. filters). Indicatief — werkelijke besparing verschilt per huishouden.</p>
      </div>
      <div className="rounded-2xl bg-ink text-white p-8 text-center">
        <p className="text-sm font-semibold text-white/60">Geschatte besparing per jaar</p>
        <p className="mt-2 font-display text-5xl font-extrabold text-amber">€ {besparing.toLocaleString('nl-NL')}</p>
        <p className="mt-3 text-sm text-white/60">ten opzichte van {brand.name}</p>
        <a href="/aanmelden" className="cursor-pointer mt-6 inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors">
          Start met besparen
        </a>
      </div>
    </div>
  );
}
