'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function KleurenGallery({ kleuren }) {
  const [openIndex, setOpenIndex] = useState(null);
  const total = kleuren.length;

  function close() {
    setOpenIndex(null);
  }

  function goTo(i) {
    setOpenIndex(((i % total) + total) % total);
  }

  useEffect(() => {
    if (openIndex === null) return;
    function onKey(e) {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') goTo(openIndex + 1);
      if (e.key === 'ArrowLeft') goTo(openIndex - 1);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex]);

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kleuren.map((kleur, i) => (
          <button
            key={kleur.name}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`Bekijk 3-weg kraan in ${kleur.name.toLowerCase()} groter`}
            className="reveal cursor-pointer rounded-[2rem] card overflow-hidden flex flex-col text-left hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className={`relative aspect-square flex items-center justify-center p-8 ${kleur.bg}`}>
              <div className="glow w-32 h-32 bg-amber/10" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <Image src={kleur.image} alt={`3-weg kraan in ${kleur.name.toLowerCase()}`} fill sizes="(min-width: 1024px) 22vw, 45vw" className="object-contain" />
            </div>
            <p className="px-5 py-4 text-center font-display font-bold">{kleur.name}</p>
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 backdrop-blur-sm px-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Sluiten"
            className="cursor-pointer absolute top-6 right-6 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goTo(openIndex - 1); }}
            aria-label="Vorige kleur"
            className="arrow-btn cursor-pointer !bg-white/10 hover:!bg-amber shrink-0 mr-2 sm:mr-6"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>

          <div className="relative max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
            <div className={`relative aspect-square rounded-[2rem] overflow-hidden flex items-center justify-center p-12 ${kleuren[openIndex].bg}`}>
              <Image src={kleuren[openIndex].image} alt={`3-weg kraan in ${kleuren[openIndex].name.toLowerCase()}`} fill sizes="(min-width: 640px) 32rem, 90vw" className="object-contain" />
            </div>
            <p className="mt-5 text-center font-display font-bold text-xl text-white">{kleuren[openIndex].name}</p>
          </div>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goTo(openIndex + 1); }}
            aria-label="Volgende kleur"
            className="arrow-btn cursor-pointer !bg-white/10 hover:!bg-amber shrink-0 ml-2 sm:ml-6"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      )}
    </>
  );
}
