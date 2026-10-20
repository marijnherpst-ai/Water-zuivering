// Technical cut-away of the 3-stage system. Particles fan out from the inlet and
// get caught in the layer that stops them; only water reaches the glass.
// All positions are fixed (no Math.random) so server and client markup match.

// [eindX, eindY, straal, kleur, vertraging in s]
const DEELTJES = [
  // zand en roest -> voorfilter
  [78, 96, 3.2, '#C8925A', 0], [150, 108, 2.8, '#D0703A', 1.5], [168, 84, 3.4, '#C8925A', 3.0], [100, 122, 2.6, '#D0703A', 4.4],
  // PFAS, medicijnresten, kalk, lood -> membraan
  [74, 247, 1.9, '#FF5C8A', 0.7], [98, 247, 1.8, '#A98BFF', 2.2], [142, 247, 2.0, '#F2F2F2', 3.5], [164, 247, 1.9, '#8FB3CC', 4.9], [118, 247, 1.8, '#FF5C8A', 5.8], [86, 247, 2.0, '#F2F2F2', 1.2],
  // bijsmaak -> koolfilter
  [96, 338, 2.1, '#9BA3AE', 2.6], [150, 342, 2.1, '#9BA3AE', 5.1],
];

const DRUPPELS = [0.2, 1.6, 3.0, 4.4, 5.8];

// mineralen komen vrij in het nafilter en gaan mee het glas in: [startX, vertraging]
const MINERALEN = [[96, 0.9], [146, 2.4], [110, 3.9], [136, 5.4]];

// al eerder opgevangen deeltjes: geven de lagen een "gebruikte" textuur
const OPGEVANGEN = [
  [70, 247, '#FF5C8A'], [108, 247, '#A98BFF'], [132, 247, '#F2F2F2'], [156, 247, '#8FB3CC'], [176, 247, '#A98BFF'],
  [90, 78, '#C8925A'], [128, 92, '#D0703A'], [160, 128, '#C8925A'], [70, 140, '#D0703A'],
];

const LABELS = [
  { top: '4.2%', tag: 'In', titel: 'Kraanwater', tekst: null },
  { top: '23.7%', tag: '01', titel: 'PPC-voorfilter', tekst: 'Vangt zand, roest en slib' },
  { top: '48.7%', tag: '02', titel: 'RO-membraan', tekst: 'Houdt PFAS, medicijnresten, kalk en lood tegen' },
  { top: '71.7%', tag: '03', titel: 'CTO-nafilter', tekst: 'Polijst de smaak en voegt mineralen toe' },
  { top: '94.6%', tag: 'Uit', titel: 'Zuiver water', tekst: null },
];

const LEGENDA = [
  ['#C8925A', 'Zand en roest'],
  ['#FF5C8A', 'PFAS'],
  ['#A98BFF', 'Medicijnresten'],
  ['#F2F2F2', 'Kalk'],
  ['#8FB3CC', 'Lood'],
  ['#9BA3AE', 'Bijsmaak'],
  ['#5FD3A8', 'Mineralen'],
  ['#7FD3FF', 'Water'],
];

const LEADERS = [[22, 128], [123, 188], [253, 188], [373, 188], [492, 148]];

export default function WaterReis({ monoClass = '' }) {
  return (
    <figure
      className="waterreis relative overflow-hidden rounded-[2rem] bg-ink p-6 md:p-8 shadow-2xl shadow-ink/25"
      style={{
        backgroundImage:
          'radial-gradient(circle at 85% 0%, rgba(237,167,27,0.16), transparent 55%), radial-gradient(circle at 10% 100%, rgba(127,211,255,0.08), transparent 50%), linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
        backgroundSize: 'auto, auto, 24px 24px, 24px 24px',
      }}
    >
      <style>{`
        .waterreis .wr-p { animation: wr-val 7s cubic-bezier(.4,0,.2,1) infinite both; }
        .waterreis .wr-d { animation: wr-door 7s cubic-bezier(.45,0,.55,1) infinite both; }
        .waterreis .wr-min { animation: wr-min 7s ease-in-out infinite both; }
        .waterreis .wr-flow { animation: wr-flow .9s linear infinite; }
        .waterreis .wr-pulse { animation: wr-pulse 3.2s ease-in-out infinite; }
        @keyframes wr-val {
          0% { transform: translate(0,0); opacity: 0; }
          6% { opacity: 1; }
          34% { transform: translate(var(--dx), var(--dy)); }
          86% { transform: translate(var(--dx), var(--dy)); opacity: 1; }
          100% { transform: translate(var(--dx), var(--dy)); opacity: 0; }
        }
        @keyframes wr-door {
          0% { transform: translateY(0); opacity: 0; }
          6% { opacity: 1; }
          64% { transform: translateY(456px); opacity: 1; }
          72%, 100% { transform: translateY(456px); opacity: 0; }
        }
        @keyframes wr-min {
          0%, 40% { transform: translate(0,0); opacity: 0; }
          50% { opacity: 1; }
          78% { transform: translate(var(--dx), 128px); opacity: 1; }
          86%, 100% { transform: translate(var(--dx), 128px); opacity: 0; }
        }
        @keyframes wr-flow { to { stroke-dashoffset: -24; } }
        @keyframes wr-pulse { 0%, 100% { opacity: .55; } 50% { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) {
          .waterreis .wr-p { animation: none; transform: translate(var(--dx), var(--dy)); }
          .waterreis .wr-d, .waterreis .wr-flow, .waterreis .wr-pulse, .waterreis .wr-min { animation: none; }
          .waterreis .wr-min { opacity: 0; }
          .waterreis .wr-d { opacity: 0; }
        }
      `}</style>

      <figcaption className={`${monoClass} text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-amber`}>
        Doorsnede · 3-traps omgekeerde osmose
      </figcaption>

      <div className="relative mt-6 max-w-[440px] mx-auto">
        <svg viewBox="0 0 240 520" className="block w-[52%] h-auto" role="img" aria-labelledby="wr-titel">
          <title id="wr-titel">Doorsnede van een osmose waterfilter met drie lagen. Het PPC-voorfilter vangt zand en roest, het RO-membraan houdt PFAS, medicijnresten, kalk en lood tegen, en het CTO-nafilter haalt bijsmaak weg en voegt mineralen toe. Alleen zuiver water komt in het glas.</title>
          <defs>
            <linearGradient id="wr-metal" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="#2B2F35" />
              <stop offset=".28" stopColor="#9097A0" />
              <stop offset=".55" stopColor="#5A6069" />
              <stop offset="1" stopColor="#24272C" />
            </linearGradient>
            <linearGradient id="wr-glass" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="#FFFFFF" stopOpacity=".14" />
              <stop offset=".35" stopColor="#FFFFFF" stopOpacity=".03" />
              <stop offset=".7" stopColor="#FFFFFF" stopOpacity=".02" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity=".12" />
            </linearGradient>
            <linearGradient id="wr-ppc" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#DCC08C" />
              <stop offset="1" stopColor="#A9844B" />
            </linearGradient>
            <linearGradient id="wr-ro" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#1C2027" />
              <stop offset=".5" stopColor="#262B33" />
              <stop offset="1" stopColor="#1A1D23" />
            </linearGradient>
            <radialGradient id="wr-korrel" cx=".35" cy=".3" r=".8">
              <stop offset="0" stopColor="#5C626C" />
              <stop offset="1" stopColor="#1E2126" />
            </radialGradient>
            <linearGradient id="wr-water" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#A9E3FF" />
              <stop offset="1" stopColor="#3BA7E0" />
            </linearGradient>
            <clipPath id="wr-binnen">
              <rect x="58" y="66" width="124" height="354" rx="3" />
            </clipPath>
            <filter id="wr-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.2" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* inlaat */}
          <rect x="113" y="0" width="14" height="46" fill="url(#wr-metal)" />
          <rect x="104" y="36" width="32" height="9" rx="2" fill="url(#wr-metal)" />

          {/* behuizing */}
          <rect x="52" y="62" width="136" height="362" rx="6" fill="#0F1115" />
          <g clipPath="url(#wr-binnen)">
            {/* 01 voorfilter: vezels */}
            <rect x="58" y="66" width="124" height="114" fill="url(#wr-ppc)" />
            {Array.from({ length: 13 }, (_, i) => (
              <path key={`v${i}`} d={`M56 ${74 + i * 8.5} q8 -3 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0`} stroke="#FFFFFF" strokeOpacity=".22" strokeWidth=".7" fill="none" />
            ))}
            <rect x="58" y="180" width="124" height="5" fill="#0B0D10" />

            {/* 02 membraan: gewikkelde lagen */}
            <rect x="58" y="185" width="124" height="136" fill="url(#wr-ro)" />
            {Array.from({ length: 11 }, (_, i) => (
              <path key={`m${i}`} d={`M56 ${193 + i * 12} q7 -2.5 14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0`} stroke="#EDA71B" strokeOpacity=".16" strokeWidth=".8" fill="none" />
            ))}
            <path className="wr-pulse" d="M56 253 q7 -3 14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0" stroke="#EDA71B" strokeWidth="2" fill="none" filter="url(#wr-glow)" />
            <rect x="58" y="321" width="124" height="5" fill="#0B0D10" />

            {/* 03 koolfilter: korrels */}
            <rect x="58" y="326" width="124" height="94" fill="#121418" />
            {Array.from({ length: 5 }, (_, r) => Array.from({ length: 8 }, (_, c) => (
              <rect
                key={`k${r}-${c}`}
                x={60 + c * 15.5 + (r % 2) * 7}
                y={332 + r * 17.5}
                width={9 + ((r + c) % 3)}
                height={6 + ((r * 2 + c) % 3)}
                rx="2.5"
                transform={`rotate(${((r * 7 + c * 13) % 40) - 20} ${64 + c * 15.5 + (r % 2) * 7} ${335 + r * 17.5})`}
                fill="url(#wr-korrel)"
              />
            )))}

            {/* stroming door het filter */}
            <path className="wr-flow" d="M120 66 V420" stroke="#7FD3FF" strokeOpacity=".75" strokeWidth="1.6" strokeDasharray="3 9" strokeLinecap="round" filter="url(#wr-glow)" />

            {/* eerder opgevangen deeltjes */}
            {OPGEVANGEN.map(([x, y, kleur], i) => (
              <circle key={`o${i}`} cx={x} cy={y} r="1.6" fill={kleur} opacity=".45" />
            ))}
          </g>

          {/* glas van de behuizing */}
          <rect x="52" y="62" width="136" height="362" rx="6" fill="url(#wr-glass)" stroke="#FFFFFF" strokeOpacity=".18" />
          <rect x="60" y="70" width="4" height="346" rx="2" fill="#FFFFFF" opacity=".12" />
          <rect x="178" y="70" width="1.5" height="346" rx=".75" fill="#FFFFFF" opacity=".08" />

          {/* kappen */}
          <rect x="46" y="44" width="148" height="22" rx="7" fill="url(#wr-metal)" />
          <rect x="46" y="420" width="148" height="22" rx="7" fill="url(#wr-metal)" />
          <rect x="46" y="62" width="148" height="1.5" fill="#000000" opacity=".4" />
          <rect x="46" y="420" width="148" height="1.5" fill="#FFFFFF" opacity=".12" />

          {/* uitlaat en glas */}
          <rect x="114" y="442" width="12" height="20" fill="url(#wr-metal)" />
          <path d="M95 481 h50 l-3.2 32 h-43.6 z" fill="url(#wr-water)" opacity=".9" />
          <path d="M95 481 h50" stroke="#FFFFFF" strokeOpacity=".6" strokeWidth="1" />
          <path d="M91 466 h58 l-5.5 51 h-47 z" fill="#FFFFFF" fillOpacity=".04" stroke="#FFFFFF" strokeOpacity=".4" strokeWidth="1.2" />
          <path d="M95 470 l3.6 42" stroke="#FFFFFF" strokeOpacity=".25" strokeWidth="1.5" strokeLinecap="round" />

          {/* aanwijslijnen */}
          {LEADERS.map(([y, x]) => (
            <g key={`l${y}`}>
              <path d={`M${x} ${y} H238`} stroke="#EDA71B" strokeOpacity=".55" strokeWidth="1" />
              <circle cx={x} cy={y} r="2.2" fill="#EDA71B" />
            </g>
          ))}

          {/* bewegende deeltjes en druppels */}
          {DEELTJES.map(([x, y, r, kleur, delay], i) => (
            <circle
              key={`p${i}`}
              className="wr-p"
              cx="120"
              cy="30"
              r={r}
              fill={kleur}
              filter="url(#wr-glow)"
              style={{ '--dx': `${x - 120}px`, '--dy': `${y - 30}px`, animationDelay: `${delay}s` }}
            />
          ))}
          {MINERALEN.map(([x, delay], i) => (
            <circle key={`min${i}`} className="wr-min" cx={x} cy="366" r="2" fill="#5FD3A8" filter="url(#wr-glow)" style={{ '--dx': `${120 - x}px`, animationDelay: `${delay}s` }} />
          ))}
          {DRUPPELS.map((delay, i) => (
            <path key={`d${i}`} className="wr-d" d="M120 24c2 2.8 3.6 4.8 3.6 6.6a3.6 3.6 0 01-7.2 0c0-1.8 1.6-3.8 3.6-6.6z" fill="#7FD3FF" filter="url(#wr-glow)" style={{ animationDelay: `${delay}s` }} />
          ))}
        </svg>

        {LABELS.map((l) => (
          <div key={l.titel} className="absolute left-[55%] right-0 -translate-y-1/2" style={{ top: l.top }}>
            <p className={`${monoClass} text-[10px] uppercase tracking-[0.18em] text-amber`}>{l.tag}</p>
            <p className="font-display text-sm md:text-base font-bold text-white leading-tight">{l.titel}</p>
            {l.tekst && <p className="mt-0.5 text-[11px] md:text-xs text-white/55 leading-snug">{l.tekst}</p>}
          </div>
        ))}
      </div>

      <ul className={`${monoClass} mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-x-4 gap-y-2 text-[10px] uppercase tracking-[0.12em] text-white/60`}>
        {LEGENDA.map(([kleur, naam]) => (
          <li key={naam} className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: kleur, boxShadow: `0 0 6px ${kleur}` }} />
            {naam}
          </li>
        ))}
      </ul>
    </figure>
  );
}
