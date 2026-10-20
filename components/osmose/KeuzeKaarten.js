'use client';

import { useState } from 'react';
import { DONKER } from '@/components/Ontwerp';

// Cards where the clicked one becomes the dark, highlighted card.
// variant "kenmerk": icon + label + title + text. variant "filter": interval + name + price.
export default function KeuzeKaarten({ items, variant = 'kenmerk', start = 0, monoClass = '' }) {
  const [actief, setActief] = useState(start);
  const isFilter = variant === 'filter';

  return (
    <div className={isFilter ? 'grid sm:grid-cols-3 gap-4 sm:items-center' : 'grid md:grid-cols-3 gap-5'}>
      {items.map((item, i) => {
        const aan = i === actief;
        return (
          <button
            key={item.titel || item.naam}
            type="button"
            onClick={() => setActief(i)}
            aria-pressed={aan}
            className={`group text-left flex flex-col rounded-3xl transition-all duration-500 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber ${isFilter ? 'p-6' : 'p-7'} ${
              aan
                ? `bg-ink text-white shadow-2xl shadow-ink/25 ${isFilter ? 'sm:scale-[1.05] z-10' : ''}`
                : 'cursor-pointer bg-white border border-edge shadow-[0_2px_14px_rgba(11,13,16,0.05)] hover:-translate-y-1 hover:border-amber/60 hover:shadow-xl'
            }`}
            style={aan ? DONKER : undefined}
          >
            {isFilter ? (
              <>
                <span className={`${monoClass} self-start rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] transition-colors duration-500 ${aan ? 'bg-white/10 text-amber' : 'bg-amber/12 text-amber-dark'}`}>{item.interval}</span>
                <span className="mt-4 font-display font-bold text-lg">{item.naam}</span>
                <span className={`text-xs transition-colors duration-500 ${aan ? 'text-white/50' : 'text-dim'}`}>{item.rol}</span>
                <span className={`mt-2 text-sm transition-colors duration-500 ${aan ? 'text-white/65' : 'text-dim'}`}>{item.tekst}</span>
                <span className={`mt-5 pt-5 border-t flex items-baseline gap-1 transition-colors duration-500 ${aan ? 'border-white/15' : 'border-edge'}`}>
                  <span className="font-display text-2xl font-extrabold">{item.prijs}</span>
                  <span className={`text-xs ${aan ? 'text-white/55' : 'text-dim'}`}>{item.per}</span>
                </span>
              </>
            ) : (
              <>
                <span className={`flex items-center justify-center w-11 h-11 rounded-2xl transition-colors duration-500 ${aan ? 'bg-amber/20 text-amber' : 'bg-amber/15 text-amber-dark group-hover:bg-amber group-hover:text-ink'}`}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={item.icoon} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <span className={`${monoClass} mt-5 text-[11px] uppercase tracking-[0.2em] transition-colors duration-500 ${aan ? 'text-amber' : 'text-amber-dark'}`}>{item.label}</span>
                <span className={`mt-2 font-display text-xl font-extrabold leading-snug transition-colors duration-500 ${aan ? 'text-white' : 'text-ink'}`}>{item.titel}</span>
                <span className={`mt-3 text-sm leading-relaxed transition-colors duration-500 ${aan ? 'text-white/70' : 'text-dim'}`}>{item.tekst}</span>
              </>
            )}
          </button>
        );
      })}
    </div>
  );
}
