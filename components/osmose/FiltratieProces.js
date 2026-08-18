'use client';

import { useState } from 'react';

const STAGES = [
  {
    key: 'ppc',
    naam: 'PPC-filter',
    ondertitel: 'Voorfilter',
    poriegrootte: '1 micron',
    poriegrootteVergelijk: '± 70x fijner dan een haar',
    purity: 60,
    kleur: '#C6890F',
    verwijdert: ['Zand en roestdeeltjes', 'Slib en grof vuil', 'Zwevende deeltjes en troebelheid'],
    uitleg: 'Het kraanwater komt hier voor het eerst binnen. Dit filter vangt alles op wat met het blote oog al bijna zichtbaar is — zand, roest, slib — zodat de fijnere filters daarna niet verstopt raken.',
    icoon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
  },
  {
    key: 'ro',
    naam: 'RO-filter',
    ondertitel: 'Het hart van het systeem',
    poriegrootte: '0,0001 micron',
    poriegrootteVergelijk: '± 500.000x fijner dan een haar',
    purity: 99,
    kleur: '#EDA71B',
    verwijdert: ['Bacteriën en virussen', 'Zware metalen zoals lood', 'PFAS, medicijnresten en microplastics'],
    uitleg: 'Onder lichte druk wordt het water door een membraan met microscopisch kleine poriën geperst. Bijna niets komt hier nog doorheen behalve de watermoleculen zelf — dit is waar het echte zuiveringswerk gebeurt.',
    icoon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" /><path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
  },
  {
    key: 'cto',
    naam: 'CTO-filter',
    ondertitel: 'Nafilter',
    poriegrootte: 'Actieve koolstof',
    poriegrootteVergelijk: 'polijst de laatste smaakjes weg',
    purity: 100,
    kleur: '#0B0D10',
    verwijdert: ['Organische sporenstoffen', 'Onfrisse bijsmaakjes', 'Geurtjes'],
    uitleg: 'De laatste stap. Dit koolstoffilter haalt de allerlaatste, nauwelijks meetbare sporen weg die de smaak zouden kunnen beïnvloeden — zodat er alleen fris, helder water overblijft.',
    icoon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l2.9 6.2 6.8.8-5 4.6 1.4 6.7L12 16.9 5.9 20.3l1.4-6.7-5-4.6 6.8-.8L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
    ),
  },
];

export default function FiltratieProces() {
  const [active, setActive] = useState(0);
  const stage = STAGES[active];

  return (
    <div>
      {/* Waterreis-indicator */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 mb-10">
        <span className="hidden sm:inline text-xs font-semibold text-dim shrink-0">Kraanwater</span>
        {STAGES.map((s, i) => (
          <div key={s.key} className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setActive(i)}
              className={`cursor-pointer flex items-center gap-2 rounded-full px-4 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                i === active ? 'bg-ink text-white shadow-lg' : 'bg-white border border-edge text-dim hover:border-ink/30'
              }`}
            >
              <span
                className="flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold shrink-0"
                style={{ background: i === active ? '#EDA71B' : '#F7F8FA', color: i === active ? '#0B0D10' : '#5B6472' }}
              >
                {i + 1}
              </span>
              {s.naam}
            </button>
            {i < STAGES.length - 1 && <span className="hidden sm:block w-6 h-px bg-edge" />}
          </div>
        ))}
        <span className="hidden sm:inline text-xs font-semibold text-amber-dark shrink-0">Glas water</span>
      </div>

      {/* Detailpaneel */}
      <div className="grid lg:grid-cols-[1.1fr,1fr] gap-8 lg:gap-14 items-center rounded-[2rem] card p-7 sm:p-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0" style={{ background: `${stage.kleur}1F`, color: stage.kleur }}>
              {stage.icoon}
            </span>
            <div>
              <p className="font-display font-extrabold text-xl leading-tight">{stage.naam}</p>
              <p className="text-xs font-bold uppercase tracking-wide text-dim">{stage.ondertitel}</p>
            </div>
          </div>
          <p className="mt-5 text-dim leading-relaxed">{stage.uitleg}</p>

          <div className="mt-5 flex items-center gap-2 text-sm">
            <span className="font-bold text-ink">{stage.poriegrootte}</span>
            <span className="text-dim">— {stage.poriegrootteVergelijk}</span>
          </div>

          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-dim">Verwijdert onder andere</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {stage.verwijdert.map((item) => (
              <li key={item} className="rounded-full bg-bg border border-edge px-3.5 py-1.5 text-xs font-semibold text-ink">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-end justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-dim">Zuiverheid na deze stap</span>
            <span className="font-display text-2xl font-extrabold text-amber-dark">{stage.purity}%</span>
          </div>
          <div className="h-3 rounded-full bg-bg overflow-hidden">
            <div
              className="h-full rounded-full transition-[width] duration-700 ease-out"
              style={{ width: `${stage.purity}%`, background: 'linear-gradient(90deg, #EDA71B, #C6890F)' }}
            />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-2">
            {STAGES.map((s, i) => (
              <div key={s.key} className={`rounded-xl p-3 text-center transition-colors ${i === active ? 'bg-ink text-white' : 'bg-bg text-dim'}`}>
                <p className="text-[10px] font-bold uppercase tracking-wide opacity-70">Stap {i + 1}</p>
                <p className="mt-1 text-sm font-bold">{s.purity}%</p>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setActive((active + 1) % STAGES.length)}
            className="cursor-pointer mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-bold text-ink hover:bg-bg transition-colors"
          >
            {active === STAGES.length - 1 ? 'Terug naar begin' : 'Volgende filter bekijken'}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
