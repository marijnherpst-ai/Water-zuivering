import Image from 'next/image';
import Link from 'next/link';
import AuteurRegel from '@/components/AuteurRegel';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import FaqSchema from '@/components/FaqSchema';

export const metadata = {
  alternates: { canonical: '/kennisbank/waterfilter-onder-de-gootsteen' },
  title: 'Waterfilter onder de gootsteen — Water-zuivering',
  description:
    'Een waterfilter onder de gootsteen: hoe het werkt, wat het kost en waar je op moet letten voor je een keuze maakt.',
};

const FAQ = [
  ['Waarom een waterfilter onder de gootsteen?', 'Het systeem staat direct bij de plek waar je het water gebruikt, blijft uit het zicht en neemt geen aanrechtruimte in, anders dan een filterkan of tafelfilter.'],
  ['Hoeveel ruimte heeft een waterfilter onder de gootsteen nodig?', 'De meeste systemen zijn compact, vaak rond de 10 à 15 cm breed. Het systeem van Water-zuivering meet 10,5 × 42 × 43 cm en past staand of liggend in het kastje.'],
  ['Wat moet er onder het aanrecht aanwezig zijn?', 'Een koudwateraansluiting, de afvoer van de gootsteen en een stopcontact.'],
  ['Waar let je op bij het kiezen?', 'Kijk naar de ruimte in je kastje, het aantal filtertrappen, vakkundige installatie en de garantie. Een goed systeem combineert grove, fijne en smaakfiltratie.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Waterfilter onder de gootsteen: alles wat je moet weten"
        description="Een waterfilter onder de gootsteen: hoe het werkt, wat het kost en waar je op moet letten voor je een keuze maakt."
        image="https://www.water-zuivering.nl/assets/img/kennisbank/waterfilter-onder-de-gootsteen.png"
        url="https://www.water-zuivering.nl/kennisbank/waterfilter-onder-de-gootsteen"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Waterfilter onder de gootsteen: alles wat je moet weten', url: 'https://www.water-zuivering.nl/kennisbank/waterfilter-onder-de-gootsteen' },
        ]}
      />
      <FaqSchema items={FAQ} />
      <RevealObserver />
      <Header />

      <main>
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Kennisbank</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Waterfilter onder de gootsteen: alles wat je moet weten
            </h1>
            <p className="mt-5 text-dim text-lg">
              Een <strong className="text-ink">waterfilter onder de gootsteen</strong> is de populairste keuze in huis. Waarom eigenlijk, en waar moet je op letten?
            </p>
            <AuteurRegel />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom onder de gootsteen?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een systeem onder je aanrecht staat direct bij de plek waar je het water gebruikt, blijft volledig uit het zicht, en neemt geen aanrechtruimte in — in tegenstelling tot een losse tafelfilter of kan. De meeste moderne systemen zijn bovendien compact genoeg om naast je andere spullen in het kastje te passen.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waar moet je op letten?</h2>
            <ol className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-amber text-ink text-sm font-bold">1</span>
                <span className="text-dim"><strong className="text-ink">Ruimte in het kastje.</strong> De meeste systemen zijn compact (vaak rond de 10-15 cm breed), maar check even hoeveel vrije ruimte je hebt.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-amber text-ink text-sm font-bold">2</span>
                <span className="text-dim"><strong className="text-ink">Aantal filtertrappen.</strong> Meer trappen filteren grondiger — een goed systeem combineert grof, fijn en smaakfiltratie.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-amber text-ink text-sm font-bold">3</span>
                <span className="text-dim"><strong className="text-ink">Installatie.</strong> Laat het vakkundig aansluiten — dat voorkomt lekkages en zorgt dat de druk goed blijft.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-amber text-ink text-sm font-bold">4</span>
                <span className="text-dim"><strong className="text-ink">Garantie.</strong> Kijk niet alleen naar de aanschafprijs, maar ook naar hoe lang je gedekt bent als er iets misgaat.</span>
              </li>
            </ol>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image loading="eager" src="/assets/img/kennisbank/waterfilter-onder-de-gootsteen.png" alt="Waterfiltersysteem geïnstalleerd in een keukenkastje" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Water-zuivering</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Slechts 10,5 cm breed</h2>
              <p className="mt-4 text-dim">Ons systeem is smaller dan de meeste keukenladen en past staand of liggend — zo goed als altijd geregeld, ongeacht hoe je kastje is ingedeeld.</p>
              <p className="mt-4 text-dim">Alle technische details vind je op onze <Link href="/uitleg" className="underline hover:text-ink">specificatiepagina</Link>. Twijfel je nog tussen dit type en een waterfilterkan of kraanfilter? Bekijk onze <Link href="/kennisbank/beste-waterfilter-voor-thuis" className="underline hover:text-ink">vergelijking van de beste waterfilter voor thuis</Link>.</p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Soorten waterfilters onder de gootsteen</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Onder de gootsteen kom je grofweg twee soorten tegen:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Een koolstoffilter</strong>. Eén of twee filterpatronen die chloor, geur en smaak verbeteren. Eenvoudig en goedkoop, maar PFAS en medicijnresten gaan er grotendeels doorheen.</li>
              <li><strong className="text-ink">Een omgekeerde-osmosesysteem</strong>. Meerdere filtertrappen met een membraan van 0,0001 micron dat ook PFAS, medicijnresten, microplastics en kalk tegenhoudt.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Bij osmosesystemen is er nog een verschil: met of zonder opslagtank. Een tank neemt veel ruimte in het kastje in. Een direct-flow systeem zuivert het water op het moment dat je tapt en past daardoor in een kleiner kastje.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat moet er in je kastje aanwezig zijn?</h2>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Koudwateraansluiting</strong> voor de aftakking.</li>
              <li><strong className="text-ink">Afvoer</strong> van de gootsteen, voor een osmosesysteem.</li>
              <li><strong className="text-ink">Stopcontact</strong> voor een systeem met pomp en display.</li>
              <li><strong className="text-ink">Ruimte</strong>: het systeem van Water-zuivering meet 10,5 × 42 × 43 cm en kan staand of liggend.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Twijfel je of het past? Met onze <Link href="/maatcheck" className="underline hover:text-ink">maatcheck</Link> zie je het in je eigen kastje.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Onderhoud van een waterfilter onder de gootsteen</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een filter onder de gootsteen vraagt weinig aandacht. Je vervangt de filters volgens schema: bij een osmosesysteem het voor- en nafilter elk jaar en het membraan elke twee jaar. Meer daarover in <Link href="/kennisbank/waterfilter-vervangen-hoe-vaak" className="underline hover:text-ink">hoe vaak moet je een waterfilter vervangen</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat kost een waterfilter onder de gootsteen?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een simpel koolstoffilter onder de gootsteen is goedkoper in aanschaf, maar houdt ook minder tegen. Een osmosesysteem kost meer, maar daarna betaal je alleen de filters: bij Water-zuivering gemiddeld ongeveer € 135 per jaar. Een overzicht van alle kosten vind je in <Link href="/kennisbank/wat-kost-een-waterzuiveringssysteem" className="underline hover:text-ink">wat kost een waterzuiveringssysteem?</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
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

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Past het bij jouw keuken?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan — we kijken graag met je mee naar wat past.</p>
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
