'use client';

import { useState } from 'react';
import { voegToe } from '@/lib/winkel/mand';

export default function ToevoegenKnop({ slug, bestelbaar }) {
  const [gedaan, setGedaan] = useState(false);

  if (!bestelbaar) {
    return (
      <button
        type="button"
        disabled
        className="inline-flex items-center justify-center rounded-full bg-edge px-7 py-3.5 text-sm font-bold text-dim cursor-not-allowed"
      >
        Prijs volgt
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        voegToe(slug);
        setGedaan(true);
        setTimeout(() => setGedaan(false), 1800);
      }}
      className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-lg shadow-amber/25"
    >
      {gedaan ? 'Toegevoegd aan winkelmand' : 'In winkelmand'}
    </button>
  );
}
