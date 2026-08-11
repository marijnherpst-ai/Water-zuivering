'use client';

import { useEffect, useState } from 'react';

function getTimeLeft() {
  const now = new Date();
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
  const diff = Math.max(0, endOfMonth.getTime() - now.getTime());

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n) {
  return String(n).padStart(2, '0');
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;

  return (
    <span className="ml-1.5 whitespace-nowrap">
      — actie eindigt over{' '}
      <span className="font-mono tabular-nums">
        {timeLeft.days}d {pad(timeLeft.hours)}u {pad(timeLeft.minutes)}m {pad(timeLeft.seconds)}s
      </span>
    </span>
  );
}
