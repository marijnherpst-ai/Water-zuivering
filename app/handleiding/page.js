import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';

export const metadata = {
  title: 'Handleiding — Water-zuivering',
  description: 'De handleiding van je waterzuiveraar in gewone taal: installatie, gebruik, filters vervangen en storingen oplossen.',
};

const PAKKETLIJST = [
  ['Waterzuiveraar (met filters erin)', '1'],
  ['Handleiding', '1'],
  ['3-weg kraanaansluiting', '1'],
  ['Teflontape (voor lekvrije koppelingen)', '1'],
  ['Stroomadapter', '1'],
  ['Rechte snelkoppelingen', '2'],
  ['Kraan voor gefilterd water', '1'],
  ['L-vormige snelkoppelingen (1/4")', '3'],
  ['L-vormige snelkoppeling (3/8")', '1'],
  ['Waterslangetjes (zwart, wit, blauw)', '1,5 m per stuk'],
  ['Blauwe klemmetjes', '15'],
  ['Afvalwaterklem', '1'],
];

const FILTERS = [
  ['PPC-filter (voorfilter)', 'Haalt grof vuil eruit: zand, roest, chloor en vieze geurtjes', '± 12 maanden'],
  ['RO-filter (het hart van het systeem)', 'Haalt bacteriën, zware metalen en verontreinigingen eruit', '± 24 maanden'],
  ['CTO-filter (nafilter)', 'Zorgt voor een frisse, lekkere smaak', '± 12 maanden'],
];

const TECHNISCH = [
  ['Type', 'Omgekeerde-osmose waterzuiveraar'],
  ['Voeding', '100–240V, 50/60Hz'],
  ['Vermogen', '96 W'],
  ['Benodigde waterdruk', '0,1 – 0,4 MPa'],
  ['Hoeveelheid gefilterd water', '1,58 liter per minuut'],
  ['Totale levensduur', '4.000 liter'],
  ['Werktemperatuur', '4°C – 40°C, binnenshuis'],
  ['Geschikt watertype', 'Gewoon Nederlands kraanwater'],
  ['Afmetingen', '10,5 x 42 x 43 cm (b × d × h)'],
];

const STORINGEN = [
  ['Apparaat start niet op', 'Geen stroom, te lage waterdruk, of een kapot onderdeel', 'Check de stekker en de waterdruk. Lost dit het niet op? Neem contact op.'],
  ['Apparaat draait, maar maakt geen water', 'Verstopt voorfilter, geen instromend water, of een verstopt RO-filter', 'Neem contact met ons op'],
  ['Apparaat stopt niet met afvalwater lozen', 'Een klepje sluit niet goed af', 'Neem contact met ons op'],
  ['Apparaat start steeds opnieuw op', 'Druk in het systeem, of een kapot onderdeel', 'Neem contact met ons op'],
  ['Water smaakt of ruikt raar', 'RO-filter of CTO-filter is versleten', 'Filters vervangen (zie hierboven)'],
  ['Apparaat stopt niet met draaien', 'Een filter lekt, of een schakelaar is kapot', 'Vervang het CTO-filter; lost dit het niet op, neem dan contact op'],
];

export default function HandleidingPage() {
  return (
    <>
      <RevealObserver />
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Handleiding</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Je waterzuiveraar, in gewone taal uitgelegd
            </h1>
            <p className="mt-5 text-dim text-lg">
              Installatie, dagelijks gebruik, filters vervangen en storingen oplossen — zonder moeilijke woorden.
            </p>
          </div>
        </section>

        {/* BELANGRIJK OM TE WETEN */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Even dit lezen voor je begint</h2>
            <ul className="mt-6 space-y-3">
              {[
                'Bewaar deze handleiding — je kan hem later nog eens nodig hebben.',
                'Ben je een tijdje op vakantie? Draai dan de watertoevoer dicht, zodat er geen lekkage kan ontstaan.',
                'Water lang niet gebruikt? Laat de kraan eerst een paar minuten lopen voor je het water weer drinkt.',
                'Gebruik alleen originele filters en onderdelen — anders vervalt de garantie.',
                'Zet het apparaat nooit in de volle zon of buiten, en niet op een plek kouder dan 0°C.',
                'Is er iets kapot? Zet dan meteen het water én de stroom uit en neem contact met ons op — probeer niet zelf te repareren.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span className="text-dim">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PAKKETLIJST */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat zit er in de doos</h2>
            <div className="mt-6 rounded-2xl card overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {PAKKETLIJST.map(([naam, aantal], i) => (
                    <tr key={naam} className={i % 2 === 0 ? 'bg-bg/50' : ''}>
                      <td className="px-5 py-3 text-ink">{naam}</td>
                      <td className="px-5 py-3 text-dim text-right">{aantal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* INSTALLATIE */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-14 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe wordt het geïnstalleerd</h2>
              <p className="mt-4 text-dim">
                Bij Water-zuivering installeert onze eigen monteur het apparaat normaal gesproken voor je — je hoeft dit zelf dus niet te doen. Kies je voor zelf installeren (daarvoor krijg je €250 korting), volg dan deze stappen zorgvuldig:
              </p>
              <ol className="mt-5 space-y-3">
                {[
                  'Draai de koudwaterkraan dicht en koppel de koudwaterslang los.',
                  'Installeer de 3-weg kraanaansluiting op de koudwaterkraan (laat het rubberen ringetje erop zitten).',
                  'Sluit de koudwaterslang weer aan op de nieuwe 3-weg aansluiting.',
                  'Plaats de kraan voor gefilterd water op je aanrecht (boor zo nodig een gat van ± 25mm).',
                  'Zet de waterzuiveraar op een vlakke plek, meestal in het keukenkastje.',
                  'Sluit de slangen aan: waterinlaat → 3-weg aansluiting, "gefilterd water" → nieuwe kraan, "afvalwater" → afvoer.',
                  'Controleer alle aansluitingen voordat je het water en de stroom weer aanzet.',
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-amber text-ink text-xs font-bold">{i + 1}</span>
                    <span className="text-dim text-sm">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="relative">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-[2rem] overflow-hidden border border-edge aspect-[4/5]">
                <Image src="/assets/img/cabinet-install.png" alt="Waterzuiveraar geïnstalleerd in het keukenkastje" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* OPSTARTEN */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Het apparaat opstarten</h2>
            <ol className="mt-5 space-y-3">
              {[
                'Zet de watertoevoer en de 3-weg kraan open, en steek de stekker in het stopcontact.',
                'Wacht tot alle filters vanzelf vol water zijn gelopen en er gefilterd water uit de kraan komt.',
                'Draai de kraan weer dicht en controleer alle slangen op lekkage.',
                'Wacht 3-5 seconden, draai de kraan weer open — komt er niks uit? Dan is de waterdruk mogelijk te laag.',
                'Werkt alles goed? Dan is het apparaat klaar voor gebruik.',
              ].map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-amber text-ink text-xs font-bold">{i + 1}</span>
                  <span className="text-dim text-sm">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* DISPLAY EN KNOPPEN */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe werkt het display en de knoppen</h2>
            <p className="mt-4 text-dim">Het apparaat heeft een klein display met twee knoppen.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl card p-6">
                <p className="font-display font-bold">Spoelknop</p>
                <p className="mt-2 text-sm text-dim">Spoelt het systeem extra door. Gebeurt automatisch 45 sec. na inschakelen, elke 30 min. tijdens gebruik, en na 12 uur stilstand — of gewoon als je erop drukt.</p>
              </div>
              <div className="rounded-2xl card p-6">
                <p className="font-display font-bold">Resetknop</p>
                <p className="mt-2 text-sm text-dim">Gebruik je na het vervangen van een filter, zodat het apparaat weet dat het filter weer nieuw is.</p>
              </div>
            </div>
            <p className="mt-8 font-display font-bold">Wat betekenen de foutmeldingen?</p>
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl card p-5">
                <p className="text-sm"><strong className="text-ink">E1</strong> <span className="text-dim">— het apparaat heeft 30 minuten onafgebroken water gemaakt zonder pauze. Zet het even uit en weer aan.</span></p>
              </div>
              <div className="rounded-2xl card p-5">
                <p className="text-sm"><strong className="text-ink">E2</strong> <span className="text-dim">— er is een lekkage gedetecteerd. Zet water en stroom uit en controleer alle aansluitingen.</span></p>
              </div>
              <div className="rounded-2xl card p-5">
                <p className="text-sm"><strong className="text-ink">E3</strong> <span className="text-dim">— er komt te weinig water binnen (te lage waterdruk).</span></p>
              </div>
            </div>
            <p className="mt-4 text-sm text-dim">De 3 balkjes op het display laten per filter zien hoeveel levensduur er nog over is. Is een balkje leeg? Dan is het tijd om dat filter te vervangen.</p>
          </div>
        </section>

        {/* FILTERS VERVANGEN */}
        <section className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-14 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-[2rem] overflow-hidden border border-edge">
                <Image src="/assets/img/filter-vervangen.png" alt="Filter vervangen zonder gereedschap" width={1200} height={611} className="w-full h-auto" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Filters vervangen</h2>
              <p className="mt-4 text-dim text-sm">Je apparaat heeft 3 filters, elk met een eigen levensduur (richtlijn — bij veel gebruik kan een filter sneller vol raken):</p>
              <div className="mt-5 space-y-3">
                {FILTERS.map(([naam, functie, levensduur]) => (
                  <div key={naam} className="rounded-2xl card p-5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-display font-bold text-sm">{naam}</p>
                      <span className="shrink-0 text-xs font-bold text-amber-dark uppercase tracking-wide">{levensduur}</span>
                    </div>
                    <p className="mt-1.5 text-sm text-dim">{functie}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-6 pb-14 md:pb-20">
            <p className="font-display font-bold">Zo vervang je een filter:</p>
            <ol className="mt-4 space-y-3">
              {[
                'Draai de 3-weg kraan dicht en haal de stekker eruit.',
                'Verwijder het voorpaneel van het apparaat.',
                'Trek het oude filter eruit en veeg achtergebleven water weg met een schone doek.',
                'Duw het nieuwe filter erin tot je een "klik" hoort.',
                'Zet het voorpaneel er weer op, en zet water en stroom weer aan.',
                'Druk kort op de resetknop, nogmaals om het juiste filter te kiezen (lampje knippert), en houd 3 seconden ingedrukt om te bevestigen (piepje).',
                'Druk kort op de spoelknop en laat de kraan 10 minuten doorlopen voor je het water weer drinkt. Check ondertussen op lekkage.',
              ].map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-amber text-ink text-xs font-bold">{i + 1}</span>
                  <span className="text-dim text-sm">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* TECHNISCHE GEGEVENS */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Technische gegevens</h2>
            <div className="mt-6 rounded-2xl card overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {TECHNISCH.map(([naam, waarde], i) => (
                    <tr key={naam} className={i % 2 === 0 ? 'bg-bg/50' : ''}>
                      <td className="px-5 py-3 text-ink font-semibold">{naam}</td>
                      <td className="px-5 py-3 text-dim text-right">{waarde}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* STORINGEN */}
        <section className="relative">
          <div className="max-w-5xl mx-auto px-6 py-14 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Iets werkt niet? Dit kan je proberen</h2>
            <div className="mt-6 space-y-3">
              {STORINGEN.map(([probleem, oorzaak, actie]) => (
                <div key={probleem} className="rounded-2xl card p-5">
                  <p className="font-display font-bold text-sm">{probleem}</p>
                  <p className="mt-1.5 text-sm text-dim"><strong className="text-ink">Mogelijke oorzaak:</strong> {oorzaak}</p>
                  <p className="mt-1 text-sm text-dim"><strong className="text-ink">Wat te doen:</strong> {actie}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-dim">Bij twijfel: probeer nooit zelf aan de binnenkant van het apparaat te sleutelen — dat kan de garantie laten vervallen.</p>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Hulp nodig?</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Kom je er niet uit?</h2>
            <p className="mt-4 text-white/70">Neem gerust contact met ons op — we helpen je graag verder.</p>
            <Link href="/contact" className="cursor-pointer mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25">
              Neem contact op
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
