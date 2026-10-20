'use client';

import { useState } from 'react';
import Image from 'next/image';

// Hotspots on filters-closeup.png (positions in % of the square image).
const PUNTEN = [
  {
    x: 62.5, y: 25,
    tag: '01', titel: 'PPC-voorfilter',
    tekst: 'De eerste stap in je osmosesysteem. Een filter van PP-katoen met een koolstofblok vangt zand, roest en slib op en haalt restchloor weg, zodat het membraan erna schoon blijft.',
    meta: 'Ieder jaar vervangen · €49,99',
  },
  {
    x: 62.5, y: 42.5,
    tag: '02', titel: 'RO-membraan',
    tekst: 'Het hart van het osmosesysteem. Poriën van 0,0001 micron houden PFAS, medicijnresten, microplastics, kalk en lood tegen. Wat achterblijft, spoelt automatisch weg naar de afvoer.',
    meta: 'Elke 2 jaar vervangen · €69,99',
  },
  {
    x: 62.5, y: 60,
    tag: '03', titel: 'CTO-nafilter',
    tekst: 'Actieve koolstof poetst de laatste smaakjes weg. In de uitvoering met mineralen voegt dit nafilter calcium en magnesium toe voor een voller glas water.',
    meta: 'Ieder jaar vervangen · €49,99 of €64,99 met mineralen',
  },
  {
    x: 63.5, y: 77,
    tag: '04', titel: 'Display',
    tekst: 'Laat per filter zien hoeveel levensduur er nog over is. Bij E1 heeft het apparaat 30 minuten onafgebroken gedraaid, E2 meldt een lekkage en E3 een te lage waterdruk.',
    meta: 'Je hoeft niets zelf bij te houden',
  },
  {
    x: 42, y: 50,
    tag: '05', titel: 'Behuizing',
    tekst: 'Slechts 10,5 cm breed en minder dan 48 dB. Het osmosesysteem kan staand of liggend in je keukenkastje; het bedieningspaneel draait gewoon mee.',
    meta: '10,5 × 42 × 43 cm · staand of liggend',
  },
];

export default function Binnenkant({ monoClass = '' }) {
  const [actief, setActief] = useState(1);
  const punt = PUNTEN[actief];

  return (
    <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
      <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/50 aspect-square">
        <Image
          src="/assets/img/filters-closeup.png"
          alt="Binnenkant van het osmosesysteem met de drie filterhouders en het display"
          fill
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover"
        />
        {PUNTEN.map((p, i) => (
          <button
            key={p.tag}
            type="button"
            onClick={() => setActief(i)}
            aria-label={`Toon ${p.titel}`}
            aria-pressed={actief === i}
            className="cursor-pointer group absolute -translate-x-1/2 -translate-y-1/2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded-full"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            <span className={`absolute inset-0 rounded-full bg-amber/40 ${actief === i ? 'animate-ping' : ''}`} />
            <span className={`${monoClass} relative flex items-center justify-center w-9 h-9 rounded-full text-[11px] font-semibold transition-colors ${actief === i ? 'bg-amber text-ink' : 'bg-ink/80 text-amber border border-amber/60 group-hover:bg-amber group-hover:text-ink'}`}>
              {p.tag}
            </span>
          </button>
        ))}
      </div>

      <div aria-live="polite">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 md:p-8">
          <p className={`${monoClass} text-[11px] uppercase tracking-[0.2em] text-amber`}>Onderdeel {punt.tag} van 05</p>
          <p className="mt-3 font-display text-2xl md:text-3xl font-extrabold text-white">{punt.titel}</p>
          <p className="mt-4 text-white/65 leading-relaxed">{punt.tekst}</p>
          <p className={`${monoClass} mt-6 border-t border-white/10 pt-5 text-xs text-white/70`}>{punt.meta}</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {PUNTEN.map((p, i) => (
            <button
              key={p.tag}
              type="button"
              onClick={() => setActief(i)}
              className={`cursor-pointer rounded-full px-4 py-2 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber ${actief === i ? 'bg-amber text-ink' : 'border border-white/15 text-white/70 hover:text-white hover:border-white/40'}`}
            >
              {p.titel}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
