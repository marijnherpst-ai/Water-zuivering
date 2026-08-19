'use client';

import { useEffect, useRef, useState } from 'react';

const SEGMENTS = [
  { label: 'GRATIS!', prize: true },
  { label: 'Succes', prize: false },
  { label: 'Bijna!', prize: false },
  { label: 'Puur water', prize: false },
  { label: 'Doe mee', prize: false },
  { label: 'Spannend', prize: false },
  { label: '5 dagen', prize: false },
  { label: 'Veel geluk', prize: false },
];

const SEGMENT_ANGLE = 360 / SEGMENTS.length;
const SPIN_DURATION_MS = 4200;

function computeTargetRotation(currentRotation, segmentIndex) {
  const targetMod = (360 - (segmentIndex * SEGMENT_ANGLE + SEGMENT_ANGLE / 2)) % 360;
  const currentMod = ((currentRotation % 360) + 360) % 360;
  let delta = targetMod - currentMod;
  if (delta < 0) delta += 360;
  const extraSpins = 6 * 360;
  return currentRotation + extraSpins + delta;
}

function polar(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
}

function playTone(ctx, freq, start, duration, gainValue = 0.05) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0, ctx.currentTime + start);
  gain.gain.linearRampToValueAtTime(gainValue, ctx.currentTime + start + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + start + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(ctx.currentTime + start);
  osc.stop(ctx.currentTime + start + duration + 0.02);
}

export default function PrizeWheel() {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const audioCtxRef = useRef(null);
  const timeoutsRef = useRef([]);

  useEffect(() => {
    return () => timeoutsRef.current.forEach(clearTimeout);
  }, []);

  const getAudioCtx = () => {
    if (!audioCtxRef.current) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (Ctx) audioCtxRef.current = new Ctx();
    }
    return audioCtxRef.current;
  };

  const scheduleTicks = (ctx) => {
    const tickCount = 26;
    for (let i = 1; i <= tickCount; i += 1) {
      const t = SPIN_DURATION_MS * Math.pow(i / tickCount, 1.8);
      const id = setTimeout(() => {
        try {
          playTone(ctx, 720, 0, 0.05, 0.035);
        } catch {
          // Audio kan geweigerd worden — geen probleem, de animatie werkt gewoon door.
        }
      }, t);
      timeoutsRef.current.push(id);
    }
  };

  const playWinChime = (ctx) => {
    try {
      playTone(ctx, 880, 0, 0.28, 0.06);
      playTone(ctx, 1318.5, 0.12, 0.4, 0.06);
    } catch {
      // Geen geluid beschikbaar — de visuele reveal blijft gewoon werken.
    }
  };

  const handleSpin = () => {
    if (spinning) return;
    setResult(null);
    setSpinning(true);

    const index = Math.floor(Math.random() * SEGMENTS.length);
    const target = computeTargetRotation(rotation, index);
    setRotation(target);

    const ctx = getAudioCtx();
    if (ctx) scheduleTicks(ctx);

    const id = setTimeout(() => {
      setSpinning(false);
      setResult(SEGMENTS[index]);
      if (ctx) playWinChime(ctx);
    }, SPIN_DURATION_MS + 60);
    timeoutsRef.current.push(id);
  };

  const cx = 150;
  const cy = 150;
  const outerR = 145;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-64 h-64 sm:w-80 sm:h-80">
        {/* Wijzer */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-20">
          <svg width="34" height="40" viewBox="0 0 34 40" aria-hidden="true">
            <path d="M17 40L2 8a15 15 0 0130 0L17 40z" fill="#EDA71B" stroke="#0B0D10" strokeWidth="2" />
            <circle cx="17" cy="15" r="5" fill="#0B0D10" />
          </svg>
        </div>

        <div className="absolute inset-0 rounded-full shadow-2xl" style={{ boxShadow: '0 0 0 8px #0B0D10, 0 20px 50px rgba(11,13,16,0.35)' }} />

        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: spinning ? `transform ${SPIN_DURATION_MS}ms cubic-bezier(0.12,0.67,0.14,1)` : 'none',
          }}
        >
          <svg viewBox="0 0 300 300" className="w-full h-full">
            {SEGMENTS.map((seg, i) => {
              const start = i * SEGMENT_ANGLE;
              const end = start + SEGMENT_ANGLE;
              const [x1, y1] = polar(cx, cy, outerR, start);
              const [x2, y2] = polar(cx, cy, outerR, end);
              const mid = start + SEGMENT_ANGLE / 2;
              const fill = seg.prize ? '#EDA71B' : i % 2 === 0 ? '#0B0D10' : '#F7F8FA';
              const textFill = seg.prize ? '#0B0D10' : i % 2 === 0 ? '#FFFFFF' : '#0B0D10';
              return (
                <g key={seg.label}>
                  <path d={`M${cx},${cy} L${x1},${y1} A${outerR},${outerR} 0 0,1 ${x2},${y2} Z`} fill={fill} stroke="#0B0D10" strokeWidth="1" />
                  <text
                    transform={`rotate(${mid} ${cx} ${cy})`}
                    x={cx}
                    y={cy - 108}
                    textAnchor="middle"
                    fontSize={seg.prize ? '15' : '11'}
                    fontWeight="800"
                    fill={textFill}
                    style={{ fontFamily: 'var(--font-outfit), sans-serif', letterSpacing: '0.02em' }}
                  >
                    {seg.label}
                  </text>
                </g>
              );
            })}
            <circle cx={cx} cy={cy} r="28" fill="#fff" stroke="#0B0D10" strokeWidth="2" />
          </svg>
        </div>

        <button
          type="button"
          onClick={handleSpin}
          disabled={spinning}
          className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-amber text-ink font-display font-extrabold text-xs shadow-xl shadow-amber/40 hover:bg-amber-dark hover:text-white transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {spinning ? '…' : 'DRAAI'}
        </button>
      </div>

      <div className="mt-6 h-14 flex items-center justify-center">
        {result && !spinning && (
          <p className="text-center font-display font-bold">
            {result.prize ? (
              <span className="text-amber-dark">🎉 Jij landde op "GRATIS!" — precies wat er te winnen valt.</span>
            ) : (
              <span className="text-dim">Dit vakje was het niet — probeer gerust nog eens.</span>
            )}
          </p>
        )}
      </div>

      <p className="mt-1 text-xs text-dim text-center max-w-xs">
        Dit is een voorproefje van de trekking. De echte, eerlijke loting gebeurt automatisch onder alle inschrijvingen zodra de teller op nul staat — de winnaar krijgt persoonlijk bericht per e-mail.
      </p>
    </div>
  );
}
