// Animated cross-section of the 3-stage system: particles fall in from the tap
// and get stuck in the layer that stops them; only clear water reaches the glass.
// Positions are fixed (no Math.random) so server and client markup match.

const LAGEN = [
  { y: 70, h: 100, naam: 'PPC-voorfilter', regels: ['vangt zand,', 'roest en slib'], fill: '#F6E7C4' },
  { y: 170, h: 110, naam: 'RO-membraan', regels: ['houdt PFAS,', 'medicijnresten,', 'kalk en lood tegen'], fill: '#FBF1DA' },
  { y: 280, h: 70, naam: 'CTO-nafilter', regels: ['haalt bijsmaak', 'en geur weg'], fill: '#2A2D33' },
];

// [x, stopY, r, kleur, vertraging in s]
const DEELTJES = [
  // zand en roest: blijven in het voorfilter
  [132, 92, 5, '#9A6B3C', 0], [198, 104, 4.5, '#B5652B', 1.4], [226, 88, 5.5, '#9A6B3C', 2.8], [160, 112, 4, '#B5652B', 4.1],
  // PFAS, medicijnresten, kalk: blijven op het membraan
  [142, 182, 2.6, '#D9467A', 0.6], [176, 182, 2.4, '#7B5CD6', 2.0], [212, 182, 2.8, '#D9467A', 3.3], [124, 182, 2.4, '#3E8E7E', 4.6], [232, 182, 2.4, '#7B5CD6', 5.4], [190, 182, 2.2, '#3E8E7E', 1.1],
  // bijsmaak: blijft in het koolfilter
  [150, 296, 3, '#8A8F98', 1.8], [206, 300, 3, '#8A8F98', 3.9],
];

// waterdruppels gaan helemaal door tot in het glas
const DRUPPELS = [[170, 0.3], [190, 1.6], [180, 2.9], [175, 4.2], [185, 5.5]];

export default function WaterReis() {
  return (
    <figure className="waterreis relative">
      <style>{`
        .waterreis .wr-p { animation: wr-val 6.5s cubic-bezier(.45,.05,.55,.95) infinite both; }
        .waterreis .wr-d { animation: wr-door 6.5s cubic-bezier(.45,.05,.55,.95) infinite both; }
        @keyframes wr-val {
          0% { transform: translateY(0); opacity: 0; }
          8% { opacity: 1; }
          35% { transform: translateY(var(--stop)); }
          85% { transform: translateY(var(--stop)); opacity: 1; }
          100% { transform: translateY(var(--stop)); opacity: 0; }
        }
        @keyframes wr-door {
          0% { transform: translateY(0); opacity: 0; }
          8% { opacity: .95; }
          70% { transform: translateY(390px); opacity: .95; }
          80%, 100% { transform: translateY(390px); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .waterreis .wr-p { animation: none; transform: translateY(var(--stop)); }
          .waterreis .wr-d { animation: none; opacity: 0; }
        }
      `}</style>
      <svg viewBox="0 0 400 470" className="w-full h-auto" role="img" aria-labelledby="wr-titel">
        <title id="wr-titel">Doorsnede van een waterfilter met drie lagen: het voorfilter vangt zand en roest, het RO-membraan houdt PFAS, medicijnresten en kalk tegen, het nafilter haalt bijsmaak weg. Alleen schoon water komt in het glas.</title>

        {/* kraan */}
        <path d="M150 8h60v14h-22v12h-16V22h-22z" fill="#0B0D10" />
        <text x="222" y="20" fontSize="11" fill="#5B6472" fontWeight="600">kraanwater</text>

        {/* kolom */}
        <rect x="108" y="56" width="144" height="306" rx="22" fill="#FFFFFF" stroke="#E4E7EC" strokeWidth="2" />
        {LAGEN.map((l, i) => (
          <g key={l.naam}>
            <rect x="114" y={l.y} width="132" height={l.h} rx={i === 0 ? 16 : i === 2 ? 16 : 0} fill={l.fill} />
          </g>
        ))}
        {/* textuur voorfilter */}
        {[0, 1, 2, 3, 4, 5].map((r) => [0, 1, 2, 3, 4, 5, 6].map((c) => (
          <circle key={`${r}-${c}`} cx={124 + c * 19 + (r % 2) * 9} cy={84 + r * 15} r="1.6" fill="#E3C98C" />
        )))}
        {/* membraan */}
        <path d="M114 190 q11 -6 22 0 t22 0 t22 0 t22 0 t22 0 t22 0" stroke="#EDA71B" strokeWidth="3" fill="none" />
        <path d="M114 196 q11 -6 22 0 t22 0 t22 0 t22 0 t22 0 t22 0" stroke="#EDA71B" strokeWidth="1.2" fill="none" opacity=".5" />
        {/* koolkorrels */}
        {[0, 1, 2].map((r) => [0, 1, 2, 3, 4, 5].map((c) => (
          <rect key={`k${r}-${c}`} x={122 + c * 21 + (r % 2) * 8} y={292 + r * 18} width="7" height="5" rx="1.5" fill="#43474F" />
        )))}

        {/* labels */}
        {LAGEN.map((l, i) => (
          <g key={`lbl-${l.naam}`}>
            <line x1="252" x2="268" y1={l.y + l.h / 2} y2={l.y + l.h / 2} stroke="#C6890F" strokeWidth="1.5" />
            <text x="274" y={l.y + l.h / 2 - 3} fontSize="12.5" fontWeight="800" fill="#0B0D10">{l.naam}</text>
            {l.regels.map((r, j) => (
              <text key={r} x="274" y={l.y + l.h / 2 + 13 + j * 13} fontSize="10.5" fill="#5B6472">{r}</text>
            ))}
            <text x="96" y={l.y + 16} fontSize="10" fontWeight="700" fill="#C6890F" textAnchor="end">{i + 1}</text>
          </g>
        ))}

        {/* afvoer naar glas */}
        <path d="M180 362v34" stroke="#BFE0F3" strokeWidth="4" strokeLinecap="round" />
        {/* glas */}
        <path d="M146 400h68l-7 62h-54z" fill="#FFFFFF" stroke="#C9CDD1" strokeWidth="2" />
        <path d="M150 420h60l-4.6 40h-50.8z" fill="#BFE0F3" />
        <text x="222" y="440" fontSize="11" fill="#0B0D10" fontWeight="700">zuiver water</text>

        {/* deeltjes */}
        {DEELTJES.map(([x, stop, r, kleur, delay], i) => (
          <circle key={`p${i}`} className="wr-p" cx={x} cy="30" r={r} fill={kleur} style={{ '--stop': `${stop - 30}px`, animationDelay: `${delay}s` }} />
        ))}
        {DRUPPELS.map(([x, delay], i) => (
          <path key={`d${i}`} className="wr-d" d={`M${x} 26c2.2 3 4 5.2 4 7.2a4 4 0 01-8 0c0-2 1.8-4.2 4-7.2z`} fill="#6DB6E0" style={{ animationDelay: `${delay}s` }} />
        ))}
      </svg>
    </figure>
  );
}
