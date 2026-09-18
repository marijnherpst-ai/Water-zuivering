import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import FaqSchema from '@/components/FaqSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  alternates: { canonical: '/waterzuiveringsinstallatie' },
  title: 'Waterzuiveringsinstallatie drinkwater — Water-zuivering',
  description: 'Waterzuiveringsinstallatie drinkwater vakkundig laten aansluiten: het proces, de kosten en de garantie, stap voor stap uitgelegd.',
};

const PROCES = [
  ['Adviesgesprek en opmeten', 'We bespreken je keuken, waterdruk en wensen, en bepalen samen de beste plek voor de installatie.'],
  ['Offerte op maat', 'Een heldere prijsopgave, zonder verborgen kosten — je weet vooraf precies waar je aan toe bent.'],
  ['Vakkundige aansluiting', 'Een monteur sluit de zuiveringsinstallatie aan op de waterleiding, meestal binnen een paar uur, inclusief een eventuele aparte kraan.'],
  ['Testen en overdracht', 'We testen doorstroming en waterkwaliteit, en je krijgt een concreet onderhoudsschema mee voor de filters.'],
];

const REDENEN_VAKMAN = [
  ['Geen lekkages achteraf', 'Een verkeerd aangesloten installatie is de meest voorkomende oorzaak van waterschade bij zelfmontage — een vakkundige aansluiting voorkomt dat risico.'],
  ['Correcte waterdruk', 'Een monteur controleert of de druk in je leidingnet geschikt is voor de installatie, en past waar nodig de aansluiting aan.'],
  ['Garantie blijft intact', 'Bij veel systemen vervalt de fabrieksgarantie bij zelf-installatie — bij een vakkundige aansluiting blijft die volledig van kracht.'],
];

const FAQ = [
  ['Wat kost een waterzuiveringsinstallatie?', 'De prijs hangt af van het gekozen systeem en de complexiteit van je leidingwerk. Vraag een vrijblijvende offerte aan voor een prijs op maat.'],
  ['Hoe lang duurt het installeren van een zuiveringsinstallatie?', 'De meeste installaties zijn binnen een paar uur voltooid door een vakkundige monteur, inclusief testen en instellen.'],
  ['Kan ik een waterzuiveringsinstallatie ook zelf plaatsen?', 'Technisch kan dat bij sommige systemen, maar een verkeerde aansluiting kan lekkage veroorzaken en de fabrieksgarantie laten vervallen — vakkundige installatie is daarom aan te raden.'],
  ['Welke garantie krijg ik op een waterzuiveringsinstallatie?', 'Bij Water-zuivering krijg je 10 jaar garantie op het systeem, mits vakkundig geïnstalleerd en onderhouden volgens het meegegeven schema.'],
  ['Is er onderhoud nodig na de installatie?', 'Ja, de voor- en nafilters worden elke 6-12 maanden vervangen, het membraan elke 2-3 jaar — dit kun je zelf doen of laten uitvoeren.'],
  ['Werkt een waterzuiveringsinstallatie in elke keuken?', 'In de meeste standaardkeukens is voldoende ruimte onder de spoelbak. Tijdens het adviesgesprek kijken we naar jouw specifieke situatie.'],
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Waterzuiveringsinstallatie', url: 'https://www.water-zuivering.nl/waterzuiveringsinstallatie' },
        ]}
      />
      <FaqSchema items={FAQ} />
      <RevealObserver />
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="glow drift2 w-[360px] h-[360px] bg-amber/10 top-10 -right-24" />
          <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Waterzuiveringsinstallatie</span>
              <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
                Een waterzuiveringsinstallatie die in één dag goed staat — en zo blijft
              </h1>
              <p className="mt-5 text-dim text-lg">
                Van adviesgesprek tot werkende <strong className="text-ink">waterzuiveringsinstallatie drinkwater</strong>: bij ons is het geen losse aankoop die je zelf moet uitzoeken, maar een compleet, vakkundig geregeld traject.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-lg shadow-amber/25">
                  Vraag vrijblijvend een offerte aan
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <Link href="/kennisbank/waterzuiveraar-installeren" className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 text-sm font-bold text-ink hover:bg-bg transition-colors">
                  Lees hoe installeren werkt
                </Link>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-dim">
                <li className="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Vakkundige monteur</li>
                <li className="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>10 jaar garantie</li>
              </ul>
            </div>
            <div className="relative">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-[2rem] overflow-hidden border border-edge aspect-[4/5]">
                <Image src="/assets/img/cabinet-install.png" alt="Waterzuiveringsinstallatie vakkundig aangesloten onder de gootsteen" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        {/* INTRO NARRATIEF */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <p className="text-dim leading-relaxed">
              Een <strong className="text-ink">waterzuiveringsinstallatie</strong> is, in tegenstelling tot een filterkan, geen product dat je even uitpakt en op tafel zet. Het is een technische aansluiting op je waterleiding — en dat betekent dat de kwaliteit van de installatie minstens zo belangrijk is als de kwaliteit van het filter zelf. Een topsysteem, verkeerd aangesloten, levert alsnog problemen op: een sijpelend koppelstuk, een verkeerd ingestelde druk, of erger.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Daarom pakken we dit bij Water-zuivering aan als een traject, niet als een verkoop. Van het eerste adviesgesprek tot de laatste test na aansluiting — alles is erop gericht dat je installatie in één keer goed staat, en dat ook blijft.
            </p>
          </div>
        </section>

        {/* HET PROCES */}
        <section className="relative">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-center">Het traject in vier stappen</h2>
            <p className="mt-3 text-dim text-center max-w-xl mx-auto">Van eerste gesprek tot werkende drinkwaterinstallatie.</p>
            <div className="mt-10 space-y-5">
              {PROCES.map(([titel, uitleg], i) => (
                <div key={titel} className="reveal flex items-start gap-4 rounded-2xl card p-6">
                  <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-amber text-ink text-sm font-bold">{i + 1}</span>
                  <div>
                    <p className="font-display font-bold text-ink">{titel}</p>
                    <p className="mt-1.5 text-sm text-dim leading-relaxed">{uitleg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WAAROM VAKMAN */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
              <Image src="/assets/img/klantenservice.jpg" alt="Vakkundige monteur bij een waterzuiveringsinstallatie" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Waarom vakwerk telt</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Drie redenen om een installatie niet zelf te doen</h2>
              <div className="mt-6 space-y-5">
                {REDENEN_VAKMAN.map(([titel, uitleg]) => (
                  <div key={titel}>
                    <p className="font-semibold text-ink text-sm">{titel}</p>
                    <p className="mt-1 text-sm text-dim leading-relaxed">{uitleg}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DIEPGANG: KOSTEN */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat kost een zuiveringsinstallatie eigenlijk?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              De prijs van een waterzuiveringsinstallatie hangt af van het gekozen systeem en de complexiteit van je leidingwerk — een keuken met een eenvoudige aansluiting is sneller (en dus goedkoper) te installeren dan een situatie waarbij leidingen verlegd moeten worden. Wat de meeste mensen zich pas later realiseren: die eenmalige investering staat tegenover een doorlopende uitgave die stopt zodra de installatie werkt — namelijk wat je nu al kwijt bent aan flessenwater.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Reken het voor jezelf door met onze <Link href="/besparing" className="underline hover:text-ink">besparingscalculator</Link>, of lees meer over <Link href="/kennisbank/wat-kost-een-waterzuiveringssysteem" className="underline hover:text-ink">wat een waterzuiveringssysteem kost</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen</h2>
            </div>
            <div className="mt-10 space-y-3">
              {FAQ.map(([vraag, antwoord]) => (
                <details key={vraag} className="reveal group rounded-2xl card p-5">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-display font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded">
                    {vraag}
                    <svg className="shrink-0 transition-transform group-open:rotate-45 text-amber-dark" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  </summary>
                  <p className="mt-3 text-sm text-dim leading-relaxed">{antwoord}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Klaar voor een vakkundig geregelde installatie?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan — we plannen graag een adviesgesprek in.</p>
            <Link href="/aanmelden" className="cursor-pointer mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25">
              Vraag vrijblijvend een offerte aan
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
