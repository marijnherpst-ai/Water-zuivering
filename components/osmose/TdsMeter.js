'use client';

import { useEffect, useRef, useState } from 'react';

const MODES = {
  kraan: { label: 'Kraanwater', ppm: 320, hint: 'Gemiddeld Nederlands leidingwater' },
  gefilterd: { label: 'Na filtratie', ppm: 18, hint: 'Water-zuivering osmosewatersysteem' },
};

const MAX_PPM = 500;

function angleForPpm(ppm) {
  const clamped = Math.min(Math.max(ppm, 0), MAX_PPM);
  return -90 + (clamped / MAX_PPM) * 180;
}

export default function TdsMeter() {
  const [mode, setMode] = useState('kraan');
  const [displayPpm, setDisplayPpm] = useState(MODES.kraan.ppm);
  const frameRef = useRef(null);

  useEffect(() => {
    const target = MODES[mode].ppm;
    const start = displayPpm;
    const startTime = performance.now();
    const duration = 700;

    cancelAnimationFrame(frameRef.current);
    function tick(now) {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplayPpm(Math.round(start + (target - start) * eased));
      if (t < 1) frameRef.current = requestAnimationFrame(tick);
    }
    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const angle = angleForPpm(displayPpm);
  const accent = mode === 'kraan' ? '#dc2626' : '#16a34a';
  const accentClass = mode === 'kraan' ? 'text-red-600' : 'text-green-600';

  return (
    <div className="rounded-[2rem] card p-7 sm:p-10">
      <div className="grid lg:grid-cols-[1fr,1.1fr] gap-10 items-center">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[280px]">
            <svg viewBox="0 0 200 104" className="w-full h-auto">
              <defs>
                <linearGradient id="tds-gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#22c55e" />
                  <stop offset="45%" stopColor="#EDA71B" />
                  <stop offset="100%" stopColor="#dc2626" />
                </linearGradient>
              </defs>
              <path d="M12 100 A88 88 0 0 1 188 100" fill="none" stroke="#F7F8FA" strokeWidth="16" strokeLinecap="round" />
              <path d="M12 100 A88 88 0 0 1 188 100" fill="none" stroke="url(#tds-gradient)" strokeWidth="16" strokeLinecap="round" opacity="0.9" />
              <g style={{ transform: `rotate(${angle}deg)`, transformOrigin: '100px 100px', transition: 'transform 700ms cubic-bezier(0.22,1,0.36,1)' }}>
                <line x1="100" y1="100" x2="100" y2="28" stroke={accent} strokeWidth="3.5" strokeLinecap="round" style={{ transition: 'stroke 500ms ease' }} />
              </g>
              <circle cx="100" cy="100" r="7" fill={accent} style={{ transition: 'fill 500ms ease' }} />
            </svg>
          </div>

          <div className="-mt-1 text-center">
            <p className={`font-display text-4xl sm:text-5xl font-black tracking-tight tabular-nums transition-colors duration-500 ${accentClass}`}>{displayPpm}</p>
            <p className="text-xs font-bold uppercase tracking-widest text-dim">ppm TDS</p>
          </div>

          <div className="mt-6 inline-flex items-center rounded-full bg-bg p-1 border border-edge">
            {Object.entries(MODES).map(([key, m]) => (
              <button
                key={key}
                type="button"
                onClick={() => setMode(key)}
                className={`cursor-pointer rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-colors ${
                  mode === key ? 'bg-ink text-white shadow' : 'text-dim hover:text-ink'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-dim text-center">{MODES[mode].hint}</p>
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Wat is TDS?</span>
          <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight">Meet zelf het verschil</h3>
          <p className="mt-4 text-dim leading-relaxed">
            TDS staat voor <em>Total Dissolved Solids</em> — het geeft aan hoeveel opgeloste deeltjes (zoals mineralen, metalen en verontreinigingen) er in het water zitten. Hoe lager de waarde, hoe minder opgeloste deeltjes er nog in het water aanwezig zijn.
          </p>
          <p className="mt-3 text-dim leading-relaxed">
            Klik hierboven op <strong className="text-ink">"Na filtratie"</strong> en zie het verschil dat het osmosewatersysteem maakt — precies zoals je het met een eigen TDS-meter thuis zou kunnen nameten.
          </p>
          <p className="mt-4 text-xs text-dim/80 italic">
            Bovenstaande waarden zijn indicatief. De exacte TDS-waarde van jouw kraanwater hangt af van je regio en het lokale leidingnet.
          </p>
        </div>
      </div>
    </div>
  );
}
