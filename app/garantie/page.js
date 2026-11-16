import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReviewsSectie from '@/components/ReviewsSectie';
import FaqSchema from '@/components/FaqSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import RevealObserver from '@/components/RevealObserver';

export const dynamic = 'force-dynamic';

export const metadata = {
  alternates: { canonical: '/garantie' },
  title: '10 jaar garantie op je waterzuiveraar — Water-zuivering',
  description: '10 jaar garantie op de onderdelen van je Water-zuivering systeem. Lees wat gedekt is, wat niet, en hoe je je garantie geldig houdt.',
};

const BASIS = 'https://www.water-zuivering.nl';

const FAQ = [
  ['Hoe lang is de garantie?', 'Tien jaar op de onderdelen van je waterzuiveraar, tenzij in je offerte schriftelijk iets anders is afgesproken.'],
  ['Wat kost een reparatie binnen de garantie?', 'Een defect onderdeel vervangen we kosteloos. Voorrijkosten en arbeidsuren vallen niet onder de garantie en berekenen we apart. Dat staat ook in artikel 12 van onze algemene voorwaarden.'],
  ['Vallen de filters onder de garantie?', 'Nee, filters zijn verbruiksartikelen. Je vervangt ze periodiek. Het systeem geeft zelf een signaal en we sturen je een herinnering per e-mail.'],
  ['Wat gebeurt er als ik de filters te laat vervang?', 'Dan vervalt de garantie. Daarom geeft het systeem een signaal, en sturen we je een herinnering. Bestel je filters tijdig bij ons, dan blijft je garantie gewoon van kracht.'],
  ['Kan ik mijn systeem zelf verplaatsen of laten verplaatsen?', 'Laat het verplaatsen of herplaatsen door ons of door een partij die wij erkennen. Gebeurt dat zonder onze goedkeuring, dan vervalt de garantie.'],
  ['Ik installeer het systeem zelf. Heb ik dan ook garantie?', 'Ja, je krijgt dan € 250 korting op de offerteprijs. Je bent zelf verantwoordelijk voor een juiste installatie volgens onze instructies. Een onjuiste installatie kan gevolgen hebben voor de garantie.'],
  ['Wat als ik ga verhuizen en het systeem verkoop?', 'Laat ons schriftelijk weten wie de nieuwe eigenaar is en hoe we die bereiken. Dan kan de garantie zo nodig worden voortgezet.'],
  ['Hoe meld ik een probleem?', 'Stuur een WhatsApp-bericht, bel ons, of gebruik het contactformulier. We denken met je mee en kijken wat de snelste oplossing is.'],
];

function Vink() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Kruis() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>;
}

export default function GarantiePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: `${BASIS}/` }, { name: 'Garantie', url: `${BASIS}/garantie` }]} />
      <FaqSchema items={FAQ} />
      <RevealObserver />
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="glow w-[520px] h-[520px] bg-amber/20 -top-40 -left-40" />
          <div className="glow w-[360px] h-[360px] bg-amber/10 -bottom-32 -right-24" />
          <div className="relative max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
            <span className="mx-auto flex items-center justify-center w-20 h-20 rounded-3xl bg-ink text-amber mb-6 shadow-xl shadow-amber/20 rotate-3">
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Garantie</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">10 jaar garantie op je waterzuiveraar</h1>
            <p className="mt-5 text-dim text-lg">Een waterzuiveraar koop je voor jaren. Daarom krijg je bij elk Water-zuivering systeem tien jaar garantie op de onderdelen, en kun je tien jaar bij ons terecht met vragen.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold">
              <span className="rounded-full border border-amber/50 bg-amber/10 px-4 py-2">10 jaar op de onderdelen</span>
              <span className="rounded-full border border-amber/50 bg-amber/10 px-4 py-2">Defecte onderdelen kosteloos vervangen</span>
              <span className="rounded-full border border-amber/50 bg-amber/10 px-4 py-2">Persoonlijk contact</span>
            </div>
          </div>
        </section>

        {/* IN CIJFERS */}
        <section className="relative">
          <div className="max-w-5xl mx-auto px-6 pb-4">
            <div className="grid sm:grid-cols-3 gap-5">
              <div className="reveal rounded-2xl card p-6 text-center">
                <p className="font-display text-5xl font-extrabold text-amber-dark">10</p>
                <p className="mt-1 font-display font-bold">jaar garantie</p>
                <p className="mt-2 text-sm text-dim">Op de onderdelen van je systeem.</p>
              </div>
              <div className="reveal rounded-2xl card p-6 text-center">
                <p className="font-display text-5xl font-extrabold text-amber-dark">€ 0</p>
                <p className="mt-1 font-display font-bold">voor het onderdeel</p>
                <p className="mt-2 text-sm text-dim">Een defect onderdeel vervangen we kosteloos.</p>
              </div>
              <div className="reveal rounded-2xl card p-6 text-center">
                <p className="font-display text-5xl font-extrabold text-amber-dark">1</p>
                <p className="mt-1 font-display font-bold">aanspreekpunt</p>
                <p className="mt-2 text-sm text-dim">Je belt of appt gewoon met ons, niet met een callcenter.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WAT VALT ERONDER */}
        <section className="relative bg-surface border-y border-edge mt-12">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Dekking</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat valt eronder?</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                ['Defecte onderdelen', 'Gaat er een onderdeel van je waterzuiveraar stuk? Dan vervangen wij dat onderdeel kosteloos.'],
                ['Techniek die niet werkt zoals het hoort', 'Werkt een technisch onderdeel van het systeem niet naar behoren? Dan kijken we ernaar en lossen we het op.'],
                ['Tien jaar persoonlijke ondersteuning', 'Vragen over je systeem, een melding op het scherm of twijfel over onderhoud? Je kunt tien jaar bij ons terecht.'],
                ['Een zorgeloos systeem', 'Het systeem geeft zelf een signaal wanneer de filters aan vervanging toe zijn. Wij sturen je daarnaast een herinnering per e-mail.'],
              ].map(([titel, tekst]) => (
                <div key={titel} className="reveal rounded-2xl card p-6 flex items-start gap-4">
                  <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-amber/15 text-amber-dark"><Vink /></span>
                  <div>
                    <p className="font-display font-bold">{titel}</p>
                    <p className="mt-1 text-sm text-dim">{tekst}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EERLIJK OVER KOSTEN */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="rounded-2xl border-2 border-amber/60 bg-amber/10 p-6 md:p-8">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Eerlijk vooraf</span>
              <h2 className="mt-2 font-display text-xl md:text-2xl font-extrabold tracking-tight">Wat betekent kosteloos precies?</h2>
              <p className="mt-3 text-dim leading-relaxed">Het <strong className="text-ink">onderdeel</strong> vervangen wij kosteloos als het defect is. <strong className="text-ink">Voorrijkosten en arbeidsuren</strong> vallen niet onder de garantie en berekenen we apart. Zo weet je vooraf waar je aan toe bent. De volledige tekst staat in artikel 12 van de <Link href="/algemene-voorwaarden" className="underline hover:text-ink">algemene voorwaarden</Link>.</p>
            </div>
          </div>
        </section>

        {/* GARANTIE GELDIG HOUDEN */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Zo blijft je garantie geldig</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Drie dingen om te onthouden</h2>
            </div>
            <div className="mt-12 grid sm:grid-cols-3 gap-5">
              <div className="reveal rounded-2xl card p-6">
                <span className="font-display text-4xl font-extrabold text-amber/40">1</span>
                <p className="mt-2 font-display font-bold text-lg">Vervang je filters op tijd</p>
                <p className="mt-2 text-sm text-dim">Het systeem geeft een signaal als het zover is. Bestel je nieuwe filters dan bij ons. Zie de <Link href="/handleiding" className="underline hover:text-ink">handleiding</Link> voor het hoe en wanneer.</p>
              </div>
              <div className="reveal rounded-2xl card p-6">
                <span className="font-display text-4xl font-extrabold text-amber/40">2</span>
                <p className="mt-2 font-display font-bold text-lg">Gebruik originele onderdelen</p>
                <p className="mt-2 text-sm text-dim">Met originele filters en onderdelen werkt je systeem zoals bedoeld. Niet-originele onderdelen vallen buiten de garantie.</p>
              </div>
              <div className="reveal rounded-2xl card p-6">
                <span className="font-display text-4xl font-extrabold text-amber/40">3</span>
                <p className="mt-2 font-display font-bold text-lg">Laat verplaatsen door ons</p>
                <p className="mt-2 text-sm text-dim">Ga je verbouwen of verhuizen? Laat het systeem dan door ons of een erkende partij losmaken en terugplaatsen.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WAT VALT ER NIET ONDER */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Goed om te weten</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat valt er niet onder?</h2>
              <p className="mt-4 text-dim">Geen verrassingen achteraf. Dit valt buiten de garantie:</p>
            </div>
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                'Filters en andere verbruiksartikelen',
                'Onjuist gebruik van het systeem',
                'Schade door derden',
                'Vorst, blikseminslag, overstroming of andere externe invloeden',
                'Niet-originele onderdelen',
                'Afwijkingen in de waterkwaliteit die het systeem niet filtert',
                'Voorrijkosten en arbeidsuren',
              ].map((t) => (
                <li key={t} className="rounded-2xl card p-5 flex items-start gap-3">
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-ink/5 text-dim"><Kruis /></span>
                  <span className="text-sm text-dim leading-relaxed pt-1">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* HOE HET WERKT */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Zo werkt het</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Een beroep doen op je garantie</h2>
            </div>
            <div className="mt-14 grid sm:grid-cols-3 gap-x-6 gap-y-10">
              <div className="relative">
                <span className="font-display text-5xl font-extrabold text-amber/30">01</span>
                <p className="mt-2 font-display font-bold text-lg">Neem contact op</p>
                <p className="mt-2 text-sm text-dim">Stuur een WhatsApp-bericht, bel ons of gebruik <Link href="/contact" className="underline hover:text-ink">het contactformulier</Link>. Een foto van het probleem of van het scherm helpt.</p>
              </div>
              <div className="relative sm:border-x sm:border-edge sm:px-6">
                <span className="font-display text-5xl font-extrabold text-amber/30">02</span>
                <p className="mt-2 font-display font-bold text-lg">Wij beoordelen het</p>
                <p className="mt-2 text-sm text-dim">We denken met je mee en bepalen de snelste oplossing. Soms lossen we het al tijdens het eerste gesprek op.</p>
              </div>
              <div className="relative">
                <span className="font-display text-5xl font-extrabold text-amber/30">03</span>
                <p className="mt-2 font-display font-bold text-lg">Onderdeel vervangen</p>
                <p className="mt-2 text-sm text-dim">Valt het onder de garantie? Dan vervangen we het defecte onderdeel kosteloos.</p>
              </div>
            </div>
            <p className="mt-12 text-center text-sm text-dim">Liever eerst even iets vragen? <a href="https://api.whatsapp.com/send/?phone=31626944877&text=Hoi%2C%20ik%20heb%20een%20vraag%20over%20mijn%20garantie" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-ink">Stuur ons een WhatsApp</a> of bel 06 26 94 48 77.</p>
          </div>
        </section>

        {/* REVIEWS */}
        <ReviewsSectie />

        {/* FAQ */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over de garantie</h2>
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
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Zekerheid inbegrepen</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">10 jaar zorgeloos zuiver water</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan en profiteer direct van onze 10 jaar garantie. Meer over het systeem lees je bij <Link href="/osmosesysteem" className="underline hover:text-white">het osmosesysteem</Link> of in de <Link href="/handleiding" className="underline hover:text-white">handleiding</Link>.</p>
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
