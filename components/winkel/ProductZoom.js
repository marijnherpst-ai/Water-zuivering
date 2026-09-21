'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function ProductZoom({ src, alt, className = '' }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const vorigeOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = vorigeOverflow;
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Vergroot foto: ${alt}`}
        className={`group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-edge bg-gradient-to-b from-white to-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber ${className}`}
      >
        <div aria-hidden="true" className="absolute left-1/2 bottom-[6.5%] h-3 w-[38%] -translate-x-1/2 rounded-full bg-ink/25 blur-md" />
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 40vw, 90vw"
          priority
          className="object-contain px-8 pt-8 pb-10 transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <span className="pointer-events-none absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-ink shadow-sm border border-edge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" /><path d="M16 16l4.5 4.5M11 8.5v5M8.5 11h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          Vergroten
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 p-4 cursor-zoom-out"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Sluiten"
            className="absolute right-4 top-4 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white text-ink shadow-lg hover:bg-amber focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative h-[90vh] w-[min(92vw,460px)] cursor-default overflow-hidden rounded-2xl bg-white"
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 768px) 460px, 92vw"
              quality={90}
              className="object-contain p-6"
            />
          </div>
        </div>
      )}
    </>
  );
}
