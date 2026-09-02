'use client';

import { useEffect, useRef } from 'react';

// Scène 8: de Seedance 2.0-video, maar alleen het slotdeel — de vrouw die het
// glas vult en drinkt (seconde 9 t/m 15). Speelt geluidloos als lus zodra hij
// in beeld komt, en pauzeert weer daarbuiten.
const START = 9.0;
const END = 14.9;

export default function DrinkScene() {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return undefined;

    const toStart = () => {
      v.currentTime = START;
    };
    const onTime = () => {
      if (v.currentTime >= END || v.currentTime < START - 0.5) toStart();
    };
    v.addEventListener('loadedmetadata', toStart);
    v.addEventListener('timeupdate', onTime);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.35 }
    );
    io.observe(v);

    return () => {
      v.removeEventListener('loadedmetadata', toStart);
      v.removeEventListener('timeupdate', onTime);
      io.disconnect();
    };
  }, []);

  return (
    <section className="relative bg-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-dark">Het eindresultaat</p>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.05]">Heerlijk, zuiver drinkwater.<br />Uit je eigen kraan.</h2>
          <p className="mt-5 text-dim text-lg">Geen flessen, geen filterkannen, geen gedoe. Gewoon de kraan opendraaien.</p>
        </div>
        <div className="mt-12 reveal rounded-[2rem] overflow-hidden shadow-2xl shadow-ink/15 border border-edge bg-ink">
          <video
            ref={videoRef}
            className="block w-full aspect-video object-cover"
            src="/assets/video/campagne-hero.mp4#t=9"
            poster="/assets/img/hero-vrouw-water.webp"
            muted
            playsInline
            preload="metadata"
            aria-label="Een vrouw vult een glas met zuiver water uit de kraan en drinkt het"
          />
        </div>
      </div>
    </section>
  );
}
