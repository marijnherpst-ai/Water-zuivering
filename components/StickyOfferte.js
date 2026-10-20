'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// Quote bar that slides in once the hero is out of view and hides again when
// the closing call-to-action (#offerte-einde) is on screen.
export default function StickyOfferte({ ratingTekst, reviewCount, monoClass = '' }) {
  const [heroWeg, setHeroWeg] = useState(false);
  const [eindeZichtbaar, setEindeZichtbaar] = useState(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const hero = document.getElementById('hero');
    const einde = document.getElementById('offerte-einde');
    const observers = [];
    if (hero) {
      const io = new IntersectionObserver(([e]) => setHeroWeg(!e.isIntersecting), { threshold: 0 });
      io.observe(hero);
      observers.push(io);
    }
    if (einde) {
      const io = new IntersectionObserver(([e]) => setEindeZichtbaar(e.isIntersecting), { threshold: 0 });
      io.observe(einde);
      observers.push(io);
    }
    return () => observers.forEach((io) => io.disconnect());
  }, []);

  const zichtbaar = heroWeg && !eindeZichtbaar;

  return (
    <>
      {/* mobiel */}
      <div
        aria-hidden={!zichtbaar}
        className={`md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-white/10 bg-ink/95 backdrop-blur px-4 py-3 transition-transform duration-300 ${zichtbaar ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-white leading-tight">Offerte in 1 minuut</p>
            <p className={`${monoClass} text-[10px] uppercase tracking-[0.12em] text-white/50 truncate`}>Gratis · vrijblijvend{ratingTekst ? ` · ${ratingTekst} ★` : ''}</p>
          </div>
          <Link href="/aanmelden" tabIndex={zichtbaar ? 0 : -1} className="cursor-pointer shrink-0 rounded-full bg-amber px-5 py-3 text-sm font-bold text-ink shadow-lg shadow-amber/30">
            Aanvragen
          </Link>
        </div>
      </div>

      {/* tablet en desktop */}
      <div
        aria-hidden={!zichtbaar}
        className={`hidden md:flex fixed bottom-6 left-6 z-40 items-center gap-5 rounded-full border border-white/10 bg-ink/95 backdrop-blur py-2 pl-6 pr-2 shadow-2xl shadow-black/30 transition-all duration-300 ${zichtbaar ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}`}
      >
        <div>
          <p className="text-sm font-bold text-white leading-tight">Zuiver water uit je eigen kraan</p>
          <p className={`${monoClass} text-[10px] uppercase tracking-[0.14em] text-white/50`}>
            Gratis en vrijblijvend · klaar in 1 minuut{ratingTekst ? ` · ${ratingTekst} uit 5 (${reviewCount})` : ''}
          </p>
        </div>
        <Link href="/aanmelden" tabIndex={zichtbaar ? 0 : -1} className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-bold text-ink hover:bg-white transition-colors shadow-lg shadow-amber/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber">
          Offerte aanvragen
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </Link>
      </div>
    </>
  );
}
