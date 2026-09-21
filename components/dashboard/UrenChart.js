'use client';

import { useState } from 'react';
import { eur, getal } from '@/lib/dashboard/analyse';

const W = 820;
const H = 240;
const L = 46;
const R = 40;
const T = 16;
const B = 28;

function mooi(max) {
  if (max <= 0) return 10;
  const stap = Math.pow(10, Math.floor(Math.log10(max)));
  const f = max / stap;
  return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10) * stap;
}

export default function UrenChart({ uren, beste, slechtste }) {
  const [actief, setActief] = useState(null);
  const plotW = W - L - R;
  const plotH = H - T - B;
  const maxK = mooi(Math.max(...uren.map((u) => u.kosten), 1));
  const maxL = Math.max(4, Math.ceil(Math.max(...uren.map((u) => u.leads), 1)));
  const stapX = plotW / 24;
  const balk = Math.min(20, stapX * 0.62);
  const x = (i) => L + stapX * i + stapX / 2;
  const yK = (v) => T + plotH - (v / maxK) * plotH;
  const yL = (v) => T + plotH - (v / maxL) * plotH;
  const lijn = uren.map((u, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${yL(u.leads).toFixed(1)}`).join(' ');
  const a = actief != null ? uren[actief] : null;
  const inVenster = (v, i) => v && i >= v.van && i < v.tot;

  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full select-none" role="img" aria-label="Uitgegeven bedrag en leads per uur van de dag">
        <defs>
          <linearGradient id="uurBalk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#F3B93A" />
            <stop offset="1" stopColor="#B97E0C" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {[0, 0.5, 1].map((f) => {
          const y = T + plotH - f * plotH;
          return (
            <g key={f}>
              <line x1={L} x2={W - R} y1={y} y2={y} stroke="rgba(255,255,255,0.06)" />
              <text x={L - 8} y={y + 4} textAnchor="end" fontSize="11" fill="#8A93A3">{eur(maxK * f, 0)}</text>
              <text x={W - R + 8} y={y + 4} fontSize="11" fill="#3DDC97" opacity="0.8">{getal(maxL * f, 0)}</text>
            </g>
          );
        })}

        {beste && <rect x={L + stapX * beste.van} y={T} width={stapX * 3} height={plotH} rx="8" fill="#3DDC97" opacity="0.1" />}
        {slechtste && <rect x={L + stapX * slechtste.van} y={T} width={stapX * 3} height={plotH} rx="8" fill="#FF5C6C" opacity="0.1" />}

        {uren.map((u, i) => (
          <rect key={u.uur} x={x(i) - balk / 2} y={yK(u.kosten)} width={balk} height={Math.max(0, T + plotH - yK(u.kosten))} rx="4" fill="url(#uurBalk)" opacity={actief == null || actief === i ? 1 : 0.45} />
        ))}
        <path d={lijn} fill="none" stroke="#3DDC97" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
        {uren.map((u, i) => u.leads > 0 && <circle key={u.uur} cx={x(i)} cy={yL(u.leads)} r={actief === i ? 5.5 : 3.5} fill="#0B0D10" stroke="#3DDC97" strokeWidth="2" />)}

        {uren.map((u, i) => i % 3 === 0 && (
          <text key={u.uur} x={x(i)} y={H - 8} textAnchor="middle" fontSize="11" fill={inVenster(beste, i) ? '#3DDC97' : inVenster(slechtste, i) ? '#FF7A88' : '#8A93A3'}>{`${u.uur}u`}</text>
        ))}

        {uren.map((u, i) => (
          <rect key={u.uur} x={L + stapX * i} y={T} width={stapX} height={plotH} fill="transparent"
            onMouseEnter={() => setActief(i)} onMouseLeave={() => setActief(null)} onTouchStart={() => setActief(i)} />
        ))}
      </svg>

      {a && (
        <div className="pointer-events-none absolute top-1 rounded-xl border border-white/10 bg-[#12161C]/95 px-3.5 py-2.5 text-xs shadow-2xl backdrop-blur"
          style={{ left: `${Math.min(76, Math.max(2, ((x(actief) - 60) / W) * 100))}%` }}>
          <p className="font-semibold text-white">{String(a.uur).padStart(2, '0')}:00 tot {String((a.uur + 1) % 24).padStart(2, '0')}:00</p>
          <p className="mt-1 text-[#F3B93A]">Uitgegeven: {eur(a.kosten)}</p>
          <p className="text-[#3DDC97]">Leads: {getal(a.leads, a.leads % 1 ? 1 : 0)}{a.cpl != null ? ` (${eur(a.cpl)} per lead)` : ''}</p>
        </div>
      )}

      <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-[#8A93A3]">
        <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm bg-[#F3B93A]" />Uitgegeven per uur</span>
        <span className="inline-flex items-center gap-2"><span className="h-0.5 w-4 rounded bg-[#3DDC97]" />Leads per uur</span>
        {beste && <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm bg-[#3DDC97]/30" />Beste tijd</span>}
        {slechtste && <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm bg-[#FF5C6C]/30" />Slechtste tijd</span>}
      </div>
    </div>
  );
}
