'use client';

import { useEffect, useState } from 'react';
import { BLACK_FRIDAY_EINDE } from '@/lib/actie';

function getTimeLeft() {
  const diff = Math.max(0, BLACK_FRIDAY_EINDE.getTime() - Date.now());
  return [
    ['dagen', Math.floor(diff / (1000 * 60 * 60 * 24))],
    ['uur', Math.floor((diff / (1000 * 60 * 60)) % 24)],
    ['min', Math.floor((diff / (1000 * 60)) % 60)],
    ['sec', Math.floor((diff / 1000) % 60)],
  ];
}

export default function BlackFridayCountdown() {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-2 sm:gap-3" aria-label="Tijd tot het einde van de Black Friday actie">
      {(timeLeft || getTimeLeft().map(([l]) => [l, null])).map(([label, waarde]) => (
        <div key={label} className="w-16 sm:w-[4.5rem] rounded-xl border border-white/15 bg-white/5 py-2.5 text-center backdrop-blur">
          <div className="font-display text-2xl sm:text-3xl font-extrabold tabular-nums text-white">
            {waarde === null ? '--' : String(waarde).padStart(2, '0')}
          </div>
          <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-white/50">{label}</div>
        </div>
      ))}
    </div>
  );
}
