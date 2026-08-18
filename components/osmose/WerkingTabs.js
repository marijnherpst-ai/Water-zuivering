'use client';

import { useState } from 'react';

const TABS = [
  {
    key: 'installatie',
    label: 'Installatie',
    intro: 'Onze eigen monteur sluit het systeem in 1 tot 2 uur vakkundig aan op je bestaande kraan — je hoeft er zelf niets voor te doen.',
    steps: [
      'De koudwaterkraan gaat kort dicht en er komt een 3-weg aansluiting op.',
      'De kraan voor gefilterd water wordt op je aanrecht geplaatst.',
      'De waterzuiveraar zelf komt op een vlakke plek in je keukenkastje te staan.',
      'Alle slangen worden aangesloten: watertoevoer, gefilterd water en de afvoer voor afvalwater.',
      'Elke aansluiting wordt gecontroleerd voordat het water en de stroom weer aangaan.',
    ],
    note: 'Liever zelf installeren? Dat kan — daar staat zelfs €250 korting tegenover.',
  },
  {
    key: 'opstarten',
    label: 'Opstarten',
    intro: 'Na de installatie is het systeem binnen enkele minuten klaar voor gebruik.',
    steps: [
      'De watertoevoer en de 3-weg kraan gaan open, de stekker gaat in het stopcontact.',
      'Alle filters lopen vanzelf vol water — je ziet het gefilterde water uit de kraan komen.',
      'De kraan gaat weer dicht, alle slangen worden nagekeken op lekkage.',
      'Na een paar seconden gaat de kraan weer open: er komt weer helder water uit.',
      'Klaar — het systeem is nu volledig operationeel.',
    ],
    note: null,
  },
  {
    key: 'dagelijks',
    label: 'Dagelijks gebruik',
    intro: 'Het systeem regelt zichzelf grotendeels — jij hoeft alleen de kraan open te draaien.',
    steps: null,
    display: true,
    note: null,
  },
  {
    key: 'onderhoud',
    label: 'Onderhoud & filters',
    intro: 'Een display houdt continu bij hoe "gezond" elk filter nog is, zodat je nooit hoeft te gokken wanneer het tijd is.',
    steps: [
      'De 3-weg kraan gaat dicht en de stekker gaat eruit.',
      'Het voorpaneel gaat eraf en het oude filter wordt eruit getrokken.',
      'Het nieuwe filter wordt erin geduwd tot je een "klik" hoort — geen gereedschap nodig.',
      'Het voorpaneel gaat terug, water en stroom gaan weer aan.',
      'De resetknop bevestigt welk filter is vervangen, en na een korte spoeling is het systeem weer klaar.',
    ],
    note: null,
  },
];

const FILTER_LEVENSDUUR = [
  ['PPC-filter', '± 12 maanden'],
  ['RO-filter', '± 24 maanden'],
  ['CTO-filter', '± 12 maanden'],
];

export default function WerkingTabs() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {TABS.map((t, i) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setActive(i)}
            className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
              i === active ? 'bg-ink text-white shadow-lg' : 'bg-white border border-edge text-dim hover:border-ink/30'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="rounded-[2rem] card p-7 sm:p-10 max-w-4xl mx-auto">
        <p className="text-dim">{tab.intro}</p>

        {tab.steps && (
          <ol className="mt-6 space-y-3">
            {tab.steps.map((step, i) => (
              <li key={step} className="flex items-start gap-3.5">
                <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-amber text-ink text-xs font-bold">{i + 1}</span>
                <span className="text-dim text-sm pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        )}

        {tab.note && (
          <div className="mt-6 rounded-2xl bg-bg px-5 py-4 text-sm text-ink font-semibold flex items-start gap-2.5">
            <svg className="shrink-0 mt-0.5 text-amber-dark" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 8v5M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" /></svg>
            {tab.note}
          </div>
        )}

        {tab.display && (
          <div className="mt-6 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-bg p-5">
                <p className="font-display font-bold">Spoelknop</p>
                <p className="mt-1.5 text-sm text-dim">Spoelt het systeem automatisch door — 45 sec. na inschakelen, elke 30 min. tijdens gebruik, en na 12 uur stilstand. Ook handmatig te gebruiken.</p>
              </div>
              <div className="rounded-2xl bg-bg p-5">
                <p className="font-display font-bold">Resetknop</p>
                <p className="mt-1.5 text-sm text-dim">Bevestigt na filtervervanging dat het apparaat weer met een vers filter werkt.</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-dim mb-3">Foutmeldingen op het display</p>
              <div className="grid sm:grid-cols-3 gap-3">
                <div className="rounded-xl border border-edge px-4 py-3.5">
                  <p className="text-sm"><strong className="text-ink">E1</strong></p>
                  <p className="mt-1 text-xs text-dim">30 min. onafgebroken gedraaid — even uit en weer aan.</p>
                </div>
                <div className="rounded-xl border border-edge px-4 py-3.5">
                  <p className="text-sm"><strong className="text-ink">E2</strong></p>
                  <p className="mt-1 text-xs text-dim">Lekkage gedetecteerd — water en stroom uitzetten.</p>
                </div>
                <div className="rounded-xl border border-edge px-4 py-3.5">
                  <p className="text-sm"><strong className="text-ink">E3</strong></p>
                  <p className="mt-1 text-xs text-dim">Waterdruk te laag voor goede werking.</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-dim">Drie balkjes op het display laten per filter precies zien hoeveel levensduur er nog over is — zo weet je altijd zeker wanneer het tijd is voor een nieuw filter.</p>
          </div>
        )}

        {tab.key === 'onderhoud' && (
          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            {FILTER_LEVENSDUUR.map(([naam, duur]) => (
              <div key={naam} className="rounded-xl bg-bg px-4 py-3.5 flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-ink">{naam}</span>
                <span className="text-xs font-bold text-amber-dark">{duur}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
