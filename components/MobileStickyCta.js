'use client';

import { useEffect, useState } from 'react';

export default function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 inset-x-0 z-40 glass px-4 py-3 transition-transform duration-300 ${visible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <a href="/aanmelden" className="cursor-pointer flex items-center justify-center gap-2 rounded-full bg-amber px-5 py-3 text-sm font-bold text-ink shadow-lg">
        Offerte aanvragen
      </a>
    </div>
  );
}
