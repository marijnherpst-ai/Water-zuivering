'use client';

import { useState } from 'react';

const MINERALEN = [
  {
    key: 'calcium',
    naam: 'Calcium',
    symbool: 'Ca²⁺',
    kleur: '#C6890F',
    rol: 'Een bekende bouwsteen voor sterke botten en tanden, en nodig voor een goede werking van je spieren.',
    waarom: 'Osmosewater is extreem zuiver — het mineraalfilter brengt calcium terug voor een voller, natuurlijker smaakprofiel.',
    icoon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>
    ),
  },
  {
    key: 'magnesium',
    naam: 'Magnesium',
    symbool: 'Mg²⁺',
    kleur: '#EDA71B',
    rol: 'Draagt bij aan een goede werking van zenuwen en spieren, en speelt een rol in je energiestofwisseling.',
    waarom: 'Van nature aanwezig in kraanwater, maar door de fijne RO-filtratie er grotendeels uit gehaald — het mineraalfilter voegt het weer toe.',
    icoon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
    ),
  },
  {
    key: 'kalium',
    naam: 'Kalium',
    symbool: 'K⁺',
    kleur: '#0B0D10',
    rol: 'Helpt mee aan een goede vochtbalans in je lichaam.',
    waarom: 'Een klein beetje kalium zorgt voor een rondere smaak, in plaats van het "platte" gevoel van volledig gedemineraliseerd water.',
    icoon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C12 2 5 10.5 5 15a7 7 0 0014 0c0-4.5-7-13-7-13z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
    ),
  },
  {
    key: 'bicarbonaat',
    naam: 'Bicarbonaat',
    symbool: 'HCO₃⁻',
    kleur: '#C6890F',
    rol: 'Zorgt voor een evenwichtige, neutrale pH-waarde van het water.',
    waarom: 'Voorkomt dat het water na de omgekeerde-osmose filtratie te "plat" of zurig aanvoelt in de smaak.',
    icoon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" /><path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
    ),
  },
];

export default function MineraalUitleg() {
  const [actief, setActief] = useState(0);
  const mineraal = MINERALEN[actief];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {MINERALEN.map((m, i) => (
          <button
            key={m.key}
            type="button"
            onClick={() => setActief(i)}
            className={`cursor-pointer flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition-all ${
              i === actief ? 'bg-ink text-white shadow-lg' : 'bg-white border border-edge text-dim hover:border-ink/30'
            }`}
          >
            <span className="font-display">{m.symbool}</span>
            {m.naam}
          </button>
        ))}
      </div>

      <div className="rounded-[2rem] card p-7 sm:p-10 max-w-3xl mx-auto">
        <div className="flex items-start gap-4">
          <span className="shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl" style={{ background: `${mineraal.kleur}1F`, color: mineraal.kleur }}>
            {mineraal.icoon}
          </span>
          <div>
            <div className="flex items-baseline gap-2">
              <p className="font-display font-extrabold text-xl">{mineraal.naam}</p>
              <span className="text-sm font-bold text-dim">{mineraal.symbool}</span>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-amber-dark mt-0.5">Toegevoegd door het mineraalfilter</p>
          </div>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 gap-5">
          <div className="rounded-2xl bg-bg p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-dim">Rol in je lichaam</p>
            <p className="mt-2 text-sm text-ink leading-relaxed">{mineraal.rol}</p>
          </div>
          <div className="rounded-2xl bg-bg p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-dim">Waarom het filter dit toevoegt</p>
            <p className="mt-2 text-sm text-ink leading-relaxed">{mineraal.waarom}</p>
          </div>
        </div>
      </div>

      <p className="mt-6 text-xs text-dim/80 italic text-center max-w-2xl mx-auto">
        Dit zijn algemeen bekende functies van deze mineralen in het lichaam. De hoeveelheid die het mineraalfilter toevoegt is klein en vooral bedoeld om smaak en mineraalbalans van het water te verbeteren.
      </p>
    </div>
  );
}
