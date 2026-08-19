'use client';

import { useState } from 'react';

// Zelfde rekenlogica als de reguliere besparingscalculator: jaarlijkse
// onderhoudskosten van het systeem (PPC + CTO ieder jaar, RO om de 2 jaar).
const FILTER_KOSTEN_PER_JAAR = 49.99 + 49.99 + 69.99 / 2;

const WATER_BRANDS = [
  { name: 'Spa Blauw', pricePerLiter: 0.79 },
  { name: 'Spa Reine', pricePerLiter: 0.72 },
  { name: 'Chaudfontaine', pricePerLiter: 0.79 },
  { name: 'Sourcy', pricePerLiter: 0.67 },
  { name: 'Bar-le-Duc', pricePerLiter: 0.52 },
  { name: 'Evian', pricePerLiter: 0.85 },
  { name: 'Supermarkt huismerk (bijv. AH, Jumbo, Lidl)', pricePerLiter: 0.30 },
];

export default function GiveawayCalculator() {
  const [step, setStep] = useState(1);
  const [personen, setPersonen] = useState(3);
  const [glazen, setGlazen] = useState(6);
  const [brand, setBrand] = useState(null);

  const activeBrand = brand || WATER_BRANDS[0];
  const litersPerJaar = personen * glazen * 0.25 * 365;
  const flessenwaterKosten = litersPerJaar * activeBrand.pricePerLiter;
  const besparing = Math.max(0, Math.round(flessenwaterKosten - FILTER_KOSTEN_PER_JAAR));

  if (step === 4) {
    return (
      <div className="rounded-3xl card p-10 sm:p-14 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Jouw resultaat</span>
        <p className="mt-3 text-dim">Op basis van {personen} {personen === 1 ? 'persoon' : 'personen'}, {glazen} glazen per dag en {activeBrand.name}:</p>
        <p className="mt-4 font-display text-6xl sm:text-7xl font-extrabold text-emerald-500">€ {besparing.toLocaleString('nl-NL')}</p>
        <p className="mt-2 text-dim">geschatte besparing per jaar, na aftrek van filteronderhoud</p>

        <div className="mt-8 max-w-xs mx-auto rounded-2xl bg-bg p-5 text-left text-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-dim">Kosten flessenwater</span>
            <span className="font-semibold text-ink">€ {Math.round(flessenwaterKosten).toLocaleString('nl-NL')}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-dim">Onderhoud filters</span>
            <span className="font-semibold text-ink">− € {Math.round(FILTER_KOSTEN_PER_JAAR).toLocaleString('nl-NL')}</span>
          </div>
          <div className="pt-2 border-t border-edge flex items-center justify-between">
            <span className="font-bold text-ink">Jouw besparing</span>
            <span className="font-bold text-emerald-600">€ {besparing.toLocaleString('nl-NL')}</span>
          </div>
        </div>

        <p className="mt-8 text-sm text-dim max-w-sm mx-auto">Dit systeem kan jou dus geld besparen — én je maakt kans om het helemaal gratis te winnen.</p>
        <a
          href="#meedoen"
          className="cursor-pointer mt-6 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25"
        >
          DOE MEE & MAAK KANS
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
        <p className="mt-4">
          <button type="button" onClick={() => setStep(3)} className="cursor-pointer text-sm font-semibold text-dim hover:text-ink transition-colors">← Terug aanpassen</button>
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl card p-8 sm:p-10">
      <div className="flex items-center gap-2 max-w-xs mx-auto mb-10">
        {[1, 2, 3].map((n) => (
          <span key={n} className={`flex-1 h-1.5 rounded-full ${n <= step ? 'bg-amber' : 'bg-edge'}`} />
        ))}
      </div>

      {step === 1 && (
        <div className="max-w-md mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-dark">Stap 1 van 3</p>
          <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight">Welk flessenwater drink je?</h3>
          <div className="mt-6 space-y-2 text-left">
            {WATER_BRANDS.map((b) => (
              <button
                key={b.name}
                type="button"
                onClick={() => setBrand(b)}
                className={`cursor-pointer flex items-center justify-between w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors ${b.name === activeBrand.name ? 'border-amber bg-amber/10 font-bold text-amber-dark' : 'border-edge hover:bg-bg text-ink'}`}
              >
                {b.name}
                <span className="text-xs text-dim">€ {b.pricePerLiter.toFixed(2)}/L</span>
              </button>
            ))}
          </div>
          <button type="button" onClick={() => setStep(2)} className="cursor-pointer mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors">
            Volgende
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="max-w-md mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-dark">Stap 2 van 3</p>
          <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight">Met hoeveel personen ben je thuis?</h3>
          <p className="mt-8 font-display text-5xl font-extrabold text-amber-dark">{personen}</p>
          <input
            type="range"
            min="1"
            max="8"
            value={personen}
            onChange={(e) => setPersonen(Number(e.target.value))}
            className="w-full accent-amber mt-6"
          />
          <div className="mt-8 flex items-center gap-3">
            <button type="button" onClick={() => setStep(1)} className="cursor-pointer inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-dim hover:text-ink transition-colors">
              Vorige
            </button>
            <button type="button" onClick={() => setStep(3)} className="cursor-pointer flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors">
              Volgende
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="max-w-md mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-dark">Stap 3 van 3</p>
          <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight">Hoeveel glazen water per dag, per persoon?</h3>
          <p className="mt-8 font-display text-5xl font-extrabold text-amber-dark">{glazen}</p>
          <input
            type="range"
            min="2"
            max="12"
            value={glazen}
            onChange={(e) => setGlazen(Number(e.target.value))}
            className="w-full accent-amber mt-6"
          />
          <div className="mt-8 flex items-center gap-3">
            <button type="button" onClick={() => setStep(2)} className="cursor-pointer inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-dim hover:text-ink transition-colors">
              Vorige
            </button>
            <button type="button" onClick={() => setStep(4)} className="cursor-pointer flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors">
              Bekijk mijn besparing
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
