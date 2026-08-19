'use client';

import { useEffect, useState } from 'react';

// Trekking: 5 dagen vanaf lancering van de actie, 20:00 uur (Europe/Amsterdam).
export const DRAW_DATE = new Date('2026-08-24T20:00:00+02:00');

function getTimeLeft() {
  const diff = Math.max(0, DRAW_DATE.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: diff <= 0,
  };
}

function pad(n) {
  return String(n).padStart(2, '0');
}

const UNITS = [
  ['days', 'DAGEN'],
  ['hours', 'UUR'],
  ['minutes', 'MIN'],
  ['seconds', 'SEC'],
];

export function useGiveawayCountdown() {
  const [timeLeft, setTimeLeft] = useState(null);
  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);
  return timeLeft;
}

export default function GiveawayCountdown({ variant = 'light' }) {
  const timeLeft = useGiveawayCountdown();

  const tileClass =
    variant === 'dark'
      ? 'bg-white/10 border border-white/15 text-white'
      : 'bg-white border border-edge text-ink shadow-lg shadow-ink/5';
  const labelClass = variant === 'dark' ? 'text-white/50' : 'text-dim';

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4" aria-live="polite">
      {UNITS.map(([key, label]) => (
        <div key={key} className={`flex flex-col items-center justify-center rounded-2xl w-16 sm:w-24 py-3 sm:py-5 ${tileClass}`}>
          <span className="font-display text-2xl sm:text-4xl font-extrabold tabular-nums leading-none">
            {timeLeft ? pad(timeLeft[key]) : '00'}
          </span>
          <span className={`mt-1.5 text-[10px] sm:text-xs font-bold tracking-widest ${labelClass}`}>{label}</span>
        </div>
      ))}
    </div>
  );
}
