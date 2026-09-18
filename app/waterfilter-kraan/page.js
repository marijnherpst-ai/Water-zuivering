import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import FaqSchema from '@/components/FaqSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  alternates: { canonical: '/waterfilter-kraan' },
  title: 'Waterfilter kraan — Water-zuivering',
  description: 'Een waterfilter kraan levert zuiver water direct uit je keukenkraan. Ontdek hoe een kraangemonteerd waterfiltersysteem werkt en wat het kost.',
};

const TYPES = [
  ['Opzetstuk op de kraan', 'Klikt letterlijk om je bestaande kraan heen. Snel gemonteerd, maar wel zichtbaar — en de filtratie is beperkter dan bij een ingebouwd systeem.'],
  ['3-weg kraan met los systeem eronder', 'Een aparte, elegante kraan naast je bestaande mengkraan, gevoed door een filtersysteem onder de gootsteen. Het beste van twee werelden: onzichtbaar systeem, herkenbare bediening.'],
  ['Geïntegreerd in de bestaande kraan', 'Sommige systemen sluiten aan op je huidige kraan, zodat je geen extra opening in het aanrecht nodig hebt.'],
];

const REDENEN = [
  ['Je proeft het verschil meteen', 'Geen chloorlucht meer bij het inschenken van een glas water — dat is vaak het eerste wat mensen opvalt na een waterfilter aan de kraan.'],
  ['Nooit meer flessen sjouwen', 'De kraanwaterfilter zit vast aangesloten, dus er is altijd voorraad zonder dat je eraan hoeft te denken.'],
  ['Compact en onopvallend', 'Het systeem achter de kraan verdwijnt in het kastje eronder — je ziet alleen het resultaat, niet het apparaat.'],
];

const FAQ = [
  ['Wat is een waterfilter kraan precies?', 'Een waterfilter kraan is een systeem dat water filtert op of vlak bij de plek waar het uit de kraan komt — via een opzetstuk, een aparte 3-weg kraan of een geïntegreerde aansluiting op de bestaande kraan.'],
  ['Wat is het verschil tussen een waterfilter kraan en een waterfilterkan?', 'Een filterkan filtert in kleine porties die je zelf bijvult. Een waterfilter kraan levert onbeperkt gefilterd water rechtstreeks uit de kraan, zonder wachten of bijvullen.'],
  ['Kan ik een waterfiltersysteem kraan zelf plaatsen?', 'Een eenvoudig opzetstuk kun je vaak zelf monteren. Een systeem met een aparte 3-weg kraan vraagt om een vakkundige aansluiting op de waterleiding — dat regelen wij binnen één dag.'],
  ['Verwijdert een waterfilter kraan ook PFAS?', 'Dat hangt volledig af van het type filter erachter. Een eenvoudig opzetstuk filtert vooral chloor; alleen een systeem met een omgekeerde-osmose-membraan verwijdert ook PFAS, medicijnresten en microplastics.'],
  ['Wat kost een waterfilter kraan?', 'Een los opzetstuk is al voor een paar tientjes te koop. Een compleet systeem met eigen 3-weg kraan en osmosefiltratie is een grotere investering, maar betaalt zich terug doordat je nooit meer flessenwater koopt.'],
  ['Hoe vaak moet ik het filter van mijn kraanwatersysteem vervangen?', 'Bij een eenvoudig opzetstuk meestal elke 2-3 maanden. Bij een compleet systeem onder de gootsteen gaan de voor- en nafilters 6 tot 12 maanden mee, het membraan zelf 2 tot 3 jaar.'],
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Waterfilter kraan', url: 'https://www.water-zuivering.nl/waterfilter-kraan' },
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
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Waterfilter kraan</span>
              <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
                Een waterfilter kraan die je elke dag gebruikt zonder erover na te denken
              </h1>
              <p className="mt-5 text-dim text-lg">
                Er zijn ochtenden dat je gewoon een glas water wilt, geen gedoe met filterkannen of flessen. Een <strong className="text-ink">waterfilter kraan</strong> — een kraangemonteerd waterfiltersysteem dat vast op je keukenkraan is aangesloten — levert precies dat: zuiver water, direct, onbeperkt.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-lg shadow-amber/25">
                  Vraag vrijblijvend een offerte aan
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <Link href="/3-weg-kraan" className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 text-sm font-bold text-ink hover:bg-bg transition-colors">
                  Bekijk de 3-weg kraan
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-[2rem] overflow-hidden border border-edge aspect-[4/5]">
                <Image src="/assets/img/twee-kranen.jpg" alt="Waterfilter kraan: zuiver water direct uit de keukenkraan" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        {/* INTRO / NARRATIEF */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <p className="text-dim leading-relaxed">
              Denk terug aan de laatste keer dat je een fles water uit de supermarkt sleepte, alleen omdat het kraanwater bij jou thuis net een tikkeltje te veel naar het zwembad smaakte. Herkenbaar? Die kleine ergernis is precies waar een <strong className="text-ink">kraanwaterfilter</strong> voor is bedacht. Geen dure oplossing voor een groot probleem, maar een simpele voor een klein, dagelijks ongemak — die zich, eenmaal geïnstalleerd, nooit meer aankondigt.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Het mooie aan een <strong className="text-ink">waterfilter voor de keukenkraan</strong> is dat je 'm meteen vergeet. Geen kan die je moet bijvullen, geen herinnering op je telefoon om filters te bestellen, geen krat water dat je de trap op moet sjouwen. Je draait gewoon de kraan open, zoals je altijd al deed — het enige verschil is wat eruit komt.
            </p>
          </div>
        </section>

        {/* WELKE TYPES */}
        <section className="relative">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-center">Drie soorten kraanwaterfilters, van simpel tot compleet</h2>
            <p className="mt-3 text-dim text-center max-w-xl mx-auto">Niet elk waterfiltersysteem aan de kraan is hetzelfde. De uitvoering bepaalt vooral het gemak — de filtratie zit 'm in wat eronder hangt.</p>
            <div className="mt-10 space-y-5">
              {TYPES.map(([titel, uitleg], i) => (
                <div key={titel} className="reveal rounded-2xl card p-6 flex gap-4">
                  <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-amber text-ink text-sm font-bold">{i + 1}</span>
                  <div>
                    <p className="font-display font-bold text-ink">{titel}</p>
                    <p className="mt-1.5 text-sm text-dim leading-relaxed">{uitleg}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-dim leading-relaxed max-w-3xl mx-auto text-center">
              Bij Water-zuivering kiezen de meeste klanten voor de tweede variant: een aparte <Link href="/3-weg-kraan" className="underline hover:text-ink">3-weg kraan</Link> naast hun eigen mengkraan, gevoed door een compact osmosesysteem onder het aanrecht. Zo blijft je eigen kraan gewoon je eigen kraan, en heb je daarnaast één druk op de knop voor zuiver water.
            </p>
          </div>
        </section>

        {/* WAAROM */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
              <Image src="/assets/img/een-kraan.jpg" alt="Waterfiltersysteem kraan naast een gewone keukenkraan" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Waarom mensen overstappen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Drie redenen die je pas ná installatie echt gaat waarderen</h2>
              <div className="mt-6 space-y-5">
                {REDENEN.map(([titel, uitleg]) => (
                  <div key={titel}>
                    <p className="font-semibold text-ink text-sm">{titel}</p>
                    <p className="mt-1 text-sm text-dim leading-relaxed">{uitleg}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DIEPGANG: FILTRATIE */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Niet elke kraanwaterfilter filtert even grondig</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Hier wringt vaak de schoen bij goedkope opzetstukken: ze pakken de chloorsmaak aan, maar laten stoffen als PFAS, medicijnresten en microplastics gewoon door. Dat komt doordat een simpel koolstoffilter poriën heeft die eigenlijk best grof zijn — prima tegen smaak, machteloos tegen moleculen die duizenden keren kleiner zijn.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Ons systeem werkt anders. Achter de kraan zit een compleet <Link href="/uitleg" className="underline hover:text-ink">drietraps filtersysteem</Link>: een voorfilter die grof vuil wegvangt, een omgekeerde-osmose-membraan van 0,0001 micron dat vrijwel alles tegenhoudt, en een nafilter dat de laatste smaakjes wegpolijst. Het resultaat is niet zomaar "wat minder chloor" — het is water dat tot 99% is gezuiverd van stoffen die je liever niet drinkt.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Benieuwd hoe dat membraan precies werkt? Lees onze uitleg over <Link href="/kennisbank/omgekeerde-osmose-filter" className="underline hover:text-ink">het omgekeerde-osmose-membraan</Link>, of vergelijk alle opties in ons artikel <Link href="/kennisbank/beste-waterfilter-voor-thuis" className="underline hover:text-ink">beste waterfilter voor thuis</Link>.
            </p>
          </div>
        </section>

        {/* PRODUCT TIE-IN */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Ons systeem</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Slechts 10,5 cm breed onder de gootsteen</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Het filtersysteem achter jouw waterfilter kraan hoeft geen ruimte te kosten. Ons systeem is smaller dan de meeste keukenladen en past staand of liggend naast je andere spullen — zo goed als altijd geregeld, ongeacht hoe je kastje is ingedeeld.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Installatie duurt meestal een paar uur, inclusief het monteren van de aparte kraan, en je krijgt er 10 jaar garantie bij.
              </p>
            </div>
            <div className="relative">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/systeem-slim-105mm.png" alt="Compact waterfiltersysteem kraan onder het aanrecht, 10,5 cm breed" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-6 bg-white" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative">
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Klaar voor een kraan die altijd zuiver water geeft?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan — we kijken graag met je mee naar wat past bij jouw keuken.</p>
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
