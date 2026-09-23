'use client';

import { useState } from 'react';
import Image from 'next/image';

const KLEUREN = [
  { name: 'Chroom', image: '/assets/img/3-weg-kraan.png', dot: '#C9CDD1' },
  { name: 'Geborsteld staal', image: '/assets/img/3-weg-kraan-kleuren/geborsteld-staal.jpg', dot: '#9A9186' },
  { name: 'Goud', image: '/assets/img/3-weg-kraan-kleuren/goud.jpg', dot: '#C9A227' },
  { name: 'Zwart', image: '/assets/img/3-weg-kraan-kleuren/zwart.jpg', dot: '#1A1A1A' },
];

export default function KraanKleurSwitcher() {
  const [actief, setActief] = useState(0);
  const kleur = KLEUREN[actief];

  return (
    <div>
      <div className="relative rounded-xl overflow-hidden border border-edge aspect-square bg-white shadow-sm">
        <div className="glow w-24 h-24 bg-amber/10" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        <Image key={kleur.image} src={kleur.image} alt={`Water-zuivering 3-wegkraan in ${kleur.name.toLowerCase()}`} fill sizes="(min-width: 1024px) 30vw, 80vw" className="relative object-contain p-6" />
      </div>
      <div className="mt-4 flex items-center justify-center gap-3">
        {KLEUREN.map((k, i) => (
          <button
            key={k.name}
            type="button"
            onClick={() => setActief(i)}
            aria-label={`Bekijk in ${k.name.toLowerCase()}`}
            aria-pressed={actief === i}
            className={`cursor-pointer w-8 h-8 rounded-full ring-2 ring-offset-2 ring-offset-surface transition-all ${actief === i ? 'ring-ink scale-110 shadow-md' : 'ring-transparent hover:ring-edge'}`}
            style={{ backgroundColor: k.dot }}
          />
        ))}
      </div>
      <p className="mt-2.5 text-center text-sm font-bold text-ink">{kleur.name}</p>
    </div>
  );
}
