'use client';

import { useEffect, useRef, useState } from 'react';

const LAGEN = [
  {
    tag: '01',
    rol: 'Voorfilter',
    naam: 'PPC-voorfilter',
    porie: '1 micron',
    vergelijk: 'ongeveer 70× fijner dan een haar',
    tekst: 'Het kraanwater komt hier als eerste binnen. Het voorfilter vangt alles op wat met het blote oog bijna zichtbaar is, zoals zand, roest en slib. Een koolstoflaag pakt daarnaast restchloor aan. Zo raken de fijnere filters erna niet verstopt.',
    vangt: [['Zand en roest', '#C8925A'], ['Slib en grof vuil', '#B08A4E'], ['Restchloor', '#9BA3AE']],
    vervangen: 'Ieder jaar',
    prijs: '€49,99',
  },
  {
    tag: '02',
    rol: 'Het hart van het systeem',
    naam: 'RO-membraan',
    porie: '0,0001 micron',
    vergelijk: 'ongeveer 500.000× fijner dan een haar',
    tekst: 'Onder lichte druk wordt het water door een membraan met microscopisch kleine poriën geperst. Vrijwel alleen watermoleculen komen erdoorheen. Wat achterblijft, spoelt het systeem automatisch af naar de afvoer onder je gootsteen.',
    vangt: [['PFAS', '#FF5C8A'], ['Medicijnresten', '#A98BFF'], ['Microplastics', '#FFB86B'], ['Kalk', '#F2F2F2'], ['Lood', '#8FB3CC'], ['Bacteriën en virussen', '#7FE0C0']],
    vervangen: 'Elke 2 jaar',
    prijs: '€69,99',
  },
  {
    tag: '03',
    rol: 'Nafilter',
    naam: 'CTO-nafilter',
    porie: 'Actieve koolstof',
    vergelijk: 'de laatste poetsbeurt voor de smaak',
    tekst: 'De laatste stap. Het koolstoffilter haalt de allerlaatste sporen weg die de smaak kunnen beïnvloeden. In de uitvoering met mineralen voegt het nafilter daarna calcium en magnesium toe, voor een voller en ronder glas water.',
    vangt: [['Bijsmaak', '#9BA3AE'], ['Geurtjes', '#9BA3AE']],
    voegtToe: [['Calcium', '#5FD3A8'], ['Magnesium', '#5FD3A8']],
    vervangen: 'Ieder jaar',
    prijs: '€49,99 · met mineralen €64,99',
  },
];

function Chip({ naam, kleur }) {
  return (
    <li className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/85">
      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: kleur, boxShadow: `0 0 8px ${kleur}` }} />
      {naam}
    </li>
  );
}

export default function FilterLagen({ monoClass = '' }) {
  const [actief, setActief] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActief(Number(e.target.dataset.index));
        });
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const laag = LAGEN[actief];

  return (
    <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16">
      {/* meetpaneel */}
      <div className="hidden lg:block">
        <div className="sticky top-32 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <p className={`${monoClass} text-[11px] uppercase tracking-[0.2em] text-amber`}>Laag {laag.tag} van 03</p>
          <p className="mt-3 font-display text-3xl font-extrabold text-white">{laag.naam}</p>
          <p className="mt-1 text-sm text-white/55">{laag.rol}</p>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className={`${monoClass} text-[10px] uppercase tracking-[0.18em] text-white/45`}>Poriegrootte</p>
            <p className={`${monoClass} mt-2 text-4xl font-semibold text-amber transition-all duration-500`}>{laag.porie}</p>
            <p className="mt-1 text-sm text-white/55">{laag.vergelijk}</p>
          </div>

          {/* rail */}
          <div className="mt-8 flex gap-2" aria-hidden="true">
            {LAGEN.map((l, i) => (
              <div key={l.tag} className="flex-1">
                <div className={`h-1.5 rounded-full transition-colors duration-500 ${i <= actief ? 'bg-amber' : 'bg-white/10'}`} />
                <p className={`${monoClass} mt-2 text-[10px] uppercase tracking-[0.14em] transition-colors duration-500 ${i === actief ? 'text-white' : 'text-white/35'}`}>{l.naam.split('-')[0]}</p>
              </div>
            ))}
          </div>

          <div className={`${monoClass} mt-8 flex items-center justify-between rounded-2xl bg-white/[0.04] px-4 py-3 text-xs text-white/70`}>
            <span>Vervangen: {laag.vervangen.toLowerCase()}</span>
            <span className="text-amber">{laag.prijs.split(' · ')[0]}</span>
          </div>
        </div>
      </div>

      {/* lagen */}
      <div className="space-y-6 lg:space-y-0">
        {LAGEN.map((l, i) => (
          <article
            key={l.tag}
            ref={(el) => { refs.current[i] = el; }}
            data-index={i}
            className="lg:min-h-[70vh] lg:flex lg:items-center"
          >
            <div className={`w-full rounded-3xl border p-7 md:p-9 transition-all duration-500 ${i === actief ? 'border-amber/50 bg-white/[0.06] shadow-[0_0_60px_-20px_rgba(237,167,27,0.45)]' : 'border-white/10 bg-white/[0.02]'}`}>
              <p className={`${monoClass} text-[11px] uppercase tracking-[0.2em] text-amber`}>{l.tag} · {l.rol}</p>
              <h3 className="mt-3 font-display text-2xl md:text-3xl font-extrabold text-white">{l.naam}</h3>
              <p className="mt-4 text-white/65 leading-relaxed">{l.tekst}</p>

              <div className="mt-6 lg:hidden">
                <p className={`${monoClass} text-[10px] uppercase tracking-[0.18em] text-white/45`}>Poriegrootte</p>
                <p className={`${monoClass} mt-1 text-2xl font-semibold text-amber`}>{l.porie}</p>
                <p className="text-sm text-white/55">{l.vergelijk}</p>
              </div>

              <p className={`${monoClass} mt-6 text-[10px] uppercase tracking-[0.18em] text-white/45`}>Houdt tegen</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {l.vangt.map(([naam, kleur]) => <Chip key={naam} naam={naam} kleur={kleur} />)}
              </ul>

              {l.voegtToe && (
                <>
                  <p className={`${monoClass} mt-5 text-[10px] uppercase tracking-[0.18em] text-[#5FD3A8]`}>Voegt toe</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {l.voegtToe.map(([naam, kleur]) => <Chip key={naam} naam={`+ ${naam}`} kleur={kleur} />)}
                  </ul>
                </>
              )}

              <div className={`${monoClass} mt-7 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-5 text-xs text-white/60`}>
                <span>Vervangen: {l.vervangen.toLowerCase()}</span>
                <span className="text-white/85">{l.prijs}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
