'use client';

import { useState } from 'react';
import Link from 'next/link';

const VRAGEN = [
  {
    vraag: 'Wat wil je vooral uit je water halen?',
    opties: [
      ['smaak', 'Vooral de chloorsmaak'],
      ['stoffen', 'Ook PFAS, medicijnresten of kalk'],
      ['weetniet', 'Geen idee eigenlijk'],
    ],
  },
  {
    vraag: 'Hoeveel water gaat er bij jullie doorheen?',
    opties: [
      ['weinig', 'Weinig, ik woon alleen'],
      ['gemiddeld', 'Gemiddeld, met z’n tweeën'],
      ['veel', 'Veel, we zijn een gezin'],
    ],
  },
  {
    vraag: 'Mag er iets onder je aanrecht geplaatst worden?',
    opties: [
      ['ja', 'Ja, daar is ruimte voor'],
      ['nee', 'Liever niet'],
    ],
  },
];

function advies([doel, verbruik, plaatsing]) {
  if (doel === 'weetniet') {
    return {
      titel: 'Begin met de PFAS-check',
      tekst: 'Kijk eerst wat er bij jou uit de leiding komt. Vul je postcode in bij de PFAS-check hierboven of op de aparte pagina. Dan weet je of een simpel filter genoeg is, of dat je verder wilt gaan.',
      link: ['/pfas-check', 'Naar de PFAS-check'],
    };
  }
  if (doel === 'stoffen' && plaatsing === 'ja') {
    return {
      titel: 'Een osmosesysteem past bij jou',
      tekst: 'Alleen omgekeerde osmose haalt ook PFAS, medicijnresten en kalk uit je water. Het systeem staat onder je aanrecht, onze monteur plaatst het in 1 à 2 uur, en je tapt het gefilterde water uit je eigen kraan.',
      link: ['/aanmelden', 'Vraag een vrijblijvende offerte aan'],
      primair: true,
    };
  }
  if (doel === 'stoffen') {
    return {
      titel: 'Lastige combinatie, maar er is een weg',
      tekst: 'Een filterkan of opzetstuk houdt PFAS en medicijnresten nauwelijks tegen. Wil je die stoffen echt kwijt, dan is een osmosesysteem onder het aanrecht de enige optie. Het is maar 10,5 cm breed: met de maatcheck zie je of het in je kastje past.',
      link: ['/maatcheck', 'Doe de maatcheck'],
    };
  }
  if (plaatsing === 'ja' && verbruik === 'veel') {
    return {
      titel: 'Overweeg een vast systeem',
      tekst: 'Voor alleen de smaak volstaat een opzetstuk. Maar bij een gezin is een filterkan steeds leeg en tellen vervangpatronen flink op. Een vast systeem met eigen kraan geeft onbeperkt water en pakt meteen meer aan dan alleen chloor.',
      link: ['/osmosesysteem', 'Bekijk het osmosesysteem'],
    };
  }
  if (verbruik === 'weinig') {
    return {
      titel: 'Een filterkan is waarschijnlijk genoeg',
      tekst: 'Wil je alleen van de chloorsmaak af en drink je niet veel? Dan is een filterkan de goedkoopste oplossing. Eerlijk is eerlijk: daar heb je ons systeem niet voor nodig.',
      link: ['/kennisbank/beste-waterfilter-voor-thuis', 'Vergelijk de opties'],
    };
  }
  return {
    titel: 'Een opzetstuk op de kraan past bij jou',
    tekst: 'Een opzetstuk filtert continu zonder bijvullen en pakt de chloorsmaak goed aan. Merk je later dat je ook PFAS of kalk kwijt wilt, dan is een osmosesysteem de volgende stap.',
    link: ['/drinkwater-filter', 'Welk filter helpt tegen welke stof?'],
  };
}

export default function FilterKiezer() {
  const [antwoorden, setAntwoorden] = useState([]);
  const stap = antwoorden.length;
  const klaar = stap === VRAGEN.length;
  const resultaat = klaar ? advies(antwoorden) : null;

  return (
    <div className="rounded-3xl card p-6 md:p-8">
      <div className="flex items-center gap-2" aria-hidden="true">
        {VRAGEN.map((_, i) => (
          <span key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i < stap ? 'bg-amber' : 'bg-edge'}`} />
        ))}
      </div>

      {!klaar ? (
        <div className="mt-6">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vraag {stap + 1} van {VRAGEN.length}</p>
          <p className="mt-2 font-display text-xl md:text-2xl font-extrabold tracking-tight text-ink">{VRAGEN[stap].vraag}</p>
          <div className="mt-5 grid gap-3">
            {VRAGEN[stap].opties.map(([waarde, label]) => (
              <button
                key={waarde}
                type="button"
                onClick={() => setAntwoorden([...antwoorden, waarde])}
                className="cursor-pointer text-left rounded-2xl border-2 border-edge px-5 py-4 font-semibold text-ink hover:border-amber hover:bg-amber/5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber"
              >
                {label}
              </button>
            ))}
          </div>
          {stap > 0 && (
            <button type="button" onClick={() => setAntwoorden(antwoorden.slice(0, -1))} className="cursor-pointer mt-4 text-sm font-semibold text-dim underline hover:text-ink">
              Vorige vraag
            </button>
          )}
        </div>
      ) : (
        <div className="mt-6" aria-live="polite">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-dark">Ons advies</p>
          <p className="mt-2 font-display text-xl md:text-2xl font-extrabold tracking-tight text-ink">{resultaat.titel}</p>
          <p className="mt-3 text-dim leading-relaxed">{resultaat.tekst}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href={resultaat.link[0]}
              className={`cursor-pointer inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors ${resultaat.primair ? 'bg-amber text-ink hover:bg-amber-dark hover:text-white shadow-lg shadow-amber/25' : 'border-2 border-ink text-ink hover:bg-bg'}`}
            >
              {resultaat.link[1]}
            </Link>
            <button type="button" onClick={() => setAntwoorden([])} className="cursor-pointer text-sm font-semibold text-dim underline hover:text-ink">
              Opnieuw beginnen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
