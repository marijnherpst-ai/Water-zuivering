'use client';

import { useState } from 'react';
import { eur, getal } from '@/lib/dashboard/analyse';

const W = 820;
const H = 280;
const L = 46;
const R = 40;
const T = 18;
const B = 30;

function mooi(max) {
  if (max <= 0) return 10;
  const stap = Math.pow(10, Math.floor(Math.log10(max)));
  const f = max / stap;
  return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10) * stap;
}

const dagLabel = (d) => `${Number(d.slice(8, 10))}/${Number(d.slice(5, 7))}`;

export default function Chart({ reeks }) {
  const [actief, setActief] = useState(null);
  const n = reeks.length;
  const plotW = W - L - R;
  const plotH = H - T - B;
  const maxK = mooi(Math.max(...reeks.map((r) => r.kosten), 1));
  const maxL = Math.max(4, Math.ceil(Math.max(...reeks.map((r) => r.leads), 1)));
  const stapX = plotW / n;
  const balk = Math.min(28, stapX * 0.58);
  const x = (i) => L + stapX * i + stapX / 2;
  const yK = (v) => T + plotH - (v / maxK) * plotH;
  const yL = (v) => T + plotH - (v / maxL) * plotH;

  const lijn = reeks.map((r, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${yL(r.leads).toFixed(1)}`).join(' ');
  const gebied = `${lijn} L${x(n - 1).toFixed(1)},${T + plotH} L${x(0).toFixed(1)},${T + plotH} Z`;
  const rasters = [0, 0.25, 0.5, 0.75, 1];
  const labelEvery = n > 20 ? 5 : n > 10 ? 2 : 1;
  const a = actief != null ? reeks[actief] : null;

  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto select-none" role="img" aria-label="Uitgegeven bedrag en aantal leads per dag">
        <defs>
          <linearGradient id="balk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#F3B93A" />
            <stop offset="1" stopColor="#B97E0C" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="vlak" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3DDC97" stopOpacity="0.28" />
            <stop offset="1" stopColor="#3DDC97" stopOpacity="0" />
          </linearGradient>
          <filter id="gloed" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {rasters.map((f) => {
          const y = T + plotH - f * plotH;
          return (
            <g key={f}>
              <line x1={L} x2={W - R} y1={y} y2={y} stroke="rgba(255,255,255,0.06)" />
              <text x={L - 8} y={y + 4} textAnchor="end" fontSize="11" fill="#8A93A3">{eur(maxK * f, 0)}</text>
              <text x={W - R + 8} y={y + 4} fontSize="11" fill="#3DDC97" opacity="0.8">{getal(maxL * f, 0)}</text>
            </g>
          );
        })}

        {reeks.map((r, i) => (
          <rect key={r.day} x={x(i) - balk / 2} y={yK(r.kosten)} width={balk} height={Math.max(0, T + plotH - yK(r.kosten))} rx="5" fill="url(#balk)" opacity={actief == null || actief === i ? 1 : 0.45} />
        ))}

        <path d={gebied} fill="url(#vlak)" />
        <path d={lijn} fill="none" stroke="#3DDC97" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" filter="url(#gloed)" />
        {reeks.map((r, i) => r.leads > 0 && <circle key={r.day} cx={x(i)} cy={yL(r.leads)} r={actief === i ? 6 : 4} fill="#0B0D10" stroke="#3DDC97" strokeWidth="2.5" />)}

        {reeks.map((r, i) => (i % labelEvery === 0 || i === n - 1) && (
          <text key={r.day} x={x(i)} y={H - 8} textAnchor="middle" fontSize="11" fill="#8A93A3">{dagLabel(r.day)}</text>
        ))}

        {reeks.map((r, i) => (
          <rect key={r.day} x={L + stapX * i} y={T} width={stapX} height={plotH} fill="transparent"
            onMouseEnter={() => setActief(i)} onMouseLeave={() => setActief(null)} onTouchStart={() => setActief(i)} />
        ))}
      </svg>

      {a && (
        <div className="pointer-events-none absolute top-1 rounded-xl border border-white/10 bg-[#12161C]/95 px-3.5 py-2.5 text-xs shadow-2xl backdrop-blur"
          style={{ left: `${Math.min(80, Math.max(2, ((x(actief) - 60) / W) * 100))}%` }}>
          <p className="font-semibold text-white">{new Date(`${a.day}T12:00:00Z`).toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
          <p className="mt-1 text-[#F3B93A]">Uitgegeven: {eur(a.kosten)}</p>
          <p className="text-[#3DDC97]">Leads: {getal(a.leads, a.leads % 1 ? 1 : 0)}</p>
        </div>
      )}

      <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-[#8A93A3]">
        <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm bg-[#F3B93A]" />Uitgegeven per dag</span>
        <span className="inline-flex items-center gap-2"><span className="h-0.5 w-4 rounded bg-[#3DDC97]" />Leads per dag</span>
      </div>
    </div>
  );
}
