'use client';

import { useState } from 'react';

// Scale drawing of the system inside an example 60 × 60 cm base cabinet.
// 1 cm = 5 px; cabinet interior runs from x 40–340 and y 30–330.
const CM = 5;
const KAST = { x: 40, y: 30, b: 60, h: 60 };
const SYS = { breed: 10.5, hoog: 43 };

export default function KastjeCheck({ monoClass = '' }) {
  const [liggend, setLiggend] = useState(false);

  const w = (liggend ? SYS.hoog : SYS.breed) * CM;
  const h = (liggend ? SYS.breed : SYS.hoog) * CM;
  const x = KAST.x + 3 * CM;
  const vloer = KAST.y + KAST.h * CM;
  const y = vloer - h;
  const vrij = liggend ? KAST.h - SYS.breed : KAST.b - 3 - SYS.breed;
  const box = { transition: 'all 600ms cubic-bezier(.4,0,.2,1)' };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className={`${monoClass} text-[11px] uppercase tracking-[0.2em] text-amber`}>Op schaal</p>
        <div className="inline-flex rounded-full border border-white/15 p-1" role="group" aria-label="Plaatsing">
          {[['Staand', false], ['Liggend', true]].map(([label, waarde]) => (
            <button
              key={label}
              type="button"
              onClick={() => setLiggend(waarde)}
              aria-pressed={liggend === waarde}
              className={`cursor-pointer rounded-full px-5 py-2 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber ${liggend === waarde ? 'bg-amber text-ink' : 'text-white/70 hover:text-white'}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <svg viewBox="0 0 380 370" className="mt-6 w-full h-auto" role="img" aria-label={`Het osmosesysteem ${liggend ? 'liggend' : 'staand'} in een voorbeeldkastje van 60 bij 60 cm`}>
        {/* kastje */}
        <rect x={KAST.x} y={KAST.y} width={KAST.b * CM} height={KAST.h * CM} rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
        {/* sifon en leidingen */}
        <path d="M230 30 v70 q0 22 22 22 h18 q16 0 16 -16 v-14" stroke="rgba(255,255,255,0.3)" strokeWidth="9" fill="none" strokeLinecap="round" />
        <path d="M300 30 v120 M316 30 v120" stroke="rgba(127,211,255,0.45)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="300" cy="152" r="5" fill="rgba(127,211,255,0.6)" />
        <circle cx="316" cy="152" r="5" fill="rgba(127,211,255,0.6)" />
        <text x="232" y="24" fontSize="10" fill="rgba(255,255,255,0.45)">afvoer</text>
        <text x="296" y="24" fontSize="10" fill="rgba(255,255,255,0.45)">water</text>

        {/* systeem */}
        <rect style={{ ...box, x, y, width: w, height: h }} rx="4" fill="#15171B" stroke="#EDA71B" strokeWidth="1.5" />
        <rect
          style={{
            ...box,
            x: liggend ? x + w - 46 : x + 8,
            y: liggend ? y + 10 : y + h - 46,
            width: liggend ? 38 : w - 16,
            height: liggend ? h - 20 : 38,
          }}
          rx="3"
          fill="#0B0D10"
          stroke="rgba(237,167,27,0.5)"
        />
        <text style={box} x={liggend ? x + w - 27 : x + w / 2} y={liggend ? y + h / 2 + 4 : y + h - 22} fontSize="11" fill="#EDA71B" textAnchor="middle" fontWeight="700">88</text>

        {/* maatlijn breedte */}
        <g style={box}>
          <path d={`M${x} ${y - 14} H${x + w}`} stroke="#EDA71B" strokeWidth="1" />
          <path d={`M${x} ${y - 19} v10 M${x + w} ${y - 19} v10`} stroke="#EDA71B" strokeWidth="1" />
        </g>
        <text x={x + w / 2} y={y - 20} fontSize="11" fill="#EDA71B" textAnchor="middle" className={monoClass}>
          {liggend ? '43 cm' : '10,5 cm'}
        </text>
        {/* maatlijn hoogte */}
        <path d={`M${KAST.x - 14} ${y} V${vloer} M${KAST.x - 19} ${y} h10 M${KAST.x - 19} ${vloer} h10`} stroke="#EDA71B" strokeWidth="1" />
        <text x={KAST.x - 18} y={y + h / 2} fontSize="11" fill="#EDA71B" textAnchor="middle" transform={`rotate(-90 ${KAST.x - 18} ${y + h / 2})`} className={monoClass}>
          {liggend ? '10,5 cm' : '43 cm'}
        </text>

        {/* vrije ruimte */}
        {liggend ? (
          <>
            <path d={`M${x + 30} ${KAST.y + 4} V${y - 30}`} stroke="rgba(255,255,255,0.35)" strokeDasharray="4 4" />
            <text x={x + 40} y={(KAST.y + y) / 2 - 4} fontSize="11" fill="rgba(255,255,255,0.7)" className={monoClass}>± {String(vrij).replace('.', ',')} cm</text>
            <text x={x + 40} y={(KAST.y + y) / 2 + 12} fontSize="11" fill="rgba(255,255,255,0.7)" className={monoClass}>vrij erboven</text>
          </>
        ) : (
          <>
            <path d={`M${x + w + 6} ${vloer - 70} H${KAST.x + KAST.b * CM - 4}`} stroke="rgba(255,255,255,0.35)" strokeDasharray="4 4" />
            <text x={(x + w + KAST.x + KAST.b * CM) / 2} y={vloer - 78} fontSize="11" fill="rgba(255,255,255,0.7)" textAnchor="middle" className={monoClass}>± {String(vrij).replace('.', ',')} cm vrij ernaast</text>
          </>
        )}

        <text x={KAST.x} y={vloer + 26} fontSize="10" fill="rgba(255,255,255,0.4)" className={monoClass}>VOORBEELD: KASTJE VAN 60 × 60 CM · DIEPTE SYSTEEM 42 CM</text>
      </svg>

      <p className="mt-4 text-sm text-white/60 leading-relaxed">
        {liggend
          ? 'Liggend is het systeem maar 10,5 cm hoog, handig als er een la of plank boven zit. Het bedieningspaneel draait gewoon mee.'
          : 'Staand neemt het systeem minder dan een vijfde van een standaard kastje van 60 cm in beslag. Je afvalbak of schoonmaakspullen passen er gewoon naast.'}
      </p>
    </div>
  );
}
