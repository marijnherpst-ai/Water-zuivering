'use client';

import { useState } from 'react';

const SUBSTANCES = [
  {
    title: 'PFAS',
    subtitle: 'Poly- en perfluoralkylstoffen',
    description:
      'Synthetische stoffen die van nature niet afbreken en steeds vaker worden aangetroffen in Nederlands drinkwater. Ze worden ook wel "forever chemicals" genoemd.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="6" cy="6" r="2.4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="18" cy="6" r="2.4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="14" r="2.4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="6" cy="20" r="2.4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7.7 7.7L10.3 12.3M16.3 7.7L13.7 12.3M11.3 16L7.4 18.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Microplastics',
    subtitle: 'Piepkleine plastic deeltjes',
    description:
      'Afkomstig van verpakkingen, textiel en ander plastic afval. Deze deeltjes zijn zo klein dat ze via het leidingnet in drinkwater terecht kunnen komen.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.6" />
        <rect x="16" y="6" width="3" height="3" rx="0.8" stroke="currentColor" strokeWidth="1.6" />
        <rect x="10" y="10" width="3.5" height="3.5" rx="1" stroke="currentColor" strokeWidth="1.6" />
        <rect x="5" y="16" width="3" height="3" rx="0.8" stroke="currentColor" strokeWidth="1.6" />
        <rect x="15" y="15" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: 'Chloor',
    subtitle: 'Toegevoegd voor waterzuivering',
    description:
      'Waterbedrijven voegen chloor toe om bacteriën te doden en het water veilig te houden. Dat is nodig, maar zorgt ook voor een merkbare geur en smaak uit de kraan.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 3h6M10 3v5.5L5.5 17a2 2 0 001.7 3h9.6a2 2 0 001.7-3L14 8.5V3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M7.5 14h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Medicijnresten',
    subtitle: 'Sporen van medicatie',
    description:
      'Via afvalwater komen sporen van medicijnen in het oppervlaktewater terecht, en uiteindelijk soms in de bron van ons drinkwater.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="5" y="9" width="14" height="8" rx="4" stroke="currentColor" strokeWidth="1.6" transform="rotate(-30 12 13)" />
        <path d="M9.5 13.8l3-5.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" transform="rotate(-30 12 13)" />
      </svg>
    ),
  },
  {
    title: 'Lood',
    subtitle: 'Uit oudere leidingen',
    description:
      'In woningen met oudere leidingen kan lood vrijkomen in het drinkwater — vaak onzichtbaar en zonder smaak, maar wel ongewenst.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 4v9a5 5 0 005 5h1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
];

export default function SubstanceSlideshow() {
  const [index, setIndex] = useState(0);
  const total = SUBSTANCES.length;
  const active = SUBSTANCES[index];

  function goTo(i) {
    setIndex(((i % total) + total) % total);
  }

  return (
    <div className="rounded-3xl card p-8 sm:p-10">
      <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
        <span className="mx-auto md:mx-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-amber/12 text-amber-dark shrink-0">
          {active.icon}
        </span>
        <div className="text-center md:text-left">
          <p className="font-display font-extrabold text-2xl tracking-tight">{active.title}</p>
          <p className="mt-1 text-sm font-semibold text-amber-dark">{active.subtitle}</p>
          <p className="mt-3 text-dim">{active.description}</p>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Vorige stof"
          className="arrow-btn cursor-pointer !w-11 !h-11"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>

        <div className="flex items-center gap-2">
          {SUBSTANCES.map((s, i) => (
            <button
              key={s.title}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ga naar ${s.title}`}
              aria-current={i === index}
              className={`cursor-pointer h-2.5 rounded-full transition-all ${i === index ? 'w-7 bg-amber' : 'w-2.5 bg-edge hover:bg-amber/40'}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Volgende stof"
          className="arrow-btn cursor-pointer !w-11 !h-11"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
    </div>
  );
}
