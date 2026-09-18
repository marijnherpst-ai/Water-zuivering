import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import FaqSchema from '@/components/FaqSchema';

export const metadata = {
  alternates: { canonical: '/kennisbank/omgekeerde-osmose-filter' },
  title: 'Omgekeerde osmose filter — Water-zuivering',
  description: 'Een omgekeerde osmose filter werkt met een membraan van 0,0001 micron. Uitleg hoe het membraan werkt en wat het tegenhoudt.',
};

const SIGNALEN = [
  ['Water smaakt weer anders', 'Als de smaak terugkeert naar hoe het kraanwater normaal smaakt, is het membraan waarschijnlijk verzadigd en aan vervanging toe.'],
  ['Duidelijk tragere doorstroming', 'Een verstopt of versleten membraan laat minder water door — check eerst het voorfilter, dat verstopt meestal als eerste.'],
  ['Ongewoon veel afvalwater', 'Een sterk gestegen afvalwaterratio kan wijzen op een membraan dat aan het einde van zijn levensduur zit.'],
];

const ONDERDELEN = [
  ['Voorfilter (PPC)', 'Vangt zand, roest en grof vuil op, zodat het membraan zelf niet snel verstopt raakt. Vervanging: elke 6-12 maanden.'],
  ['RO-membraan', 'Het hart van het systeem — het fijne filtermateriaal zelf. Vervanging: elke 2-3 jaar.'],
  ['Nafilter (CTO)', 'Actieve koolstof die de laatste smaakjes en geurtjes wegpolijst. Vervanging: elke 6-12 maanden.'],
];

const FAQ = [
  ['Hoe fijn is een omgekeerde osmose filter precies?', 'Het membraan heeft poriën van ongeveer 0,0001 micron — ter vergelijking, dat is ongeveer 500.000 keer fijner dan een mensenhaar.'],
  ['Wat houdt een omgekeerde osmose filter tegen?', 'Bacteriën, virussen, zware metalen zoals lood, en sporen van PFAS, medicijnresten en microplastics — grotendeels alles behalve de watermoleculen zelf.'],
  ['Hoe lang gaat het membraan mee?', 'Afhankelijk van gebruik en waterkwaliteit meestal 2 tot 3 jaar, terwijl de voor- en nafilters vaker (6-12 maanden) aan vervanging toe zijn.'],
  ['Kost een omgekeerde osmose filter veel water?', 'Er ontstaat wat afvalwater tijdens het filtratieproces, maar moderne systemen zijn hier steeds zuiniger in dan oudere generaties.'],
  ['Waarom ontstaat er afvalwater bij een omgekeerde osmose filter?', 'Het membraan houdt stoffen tegen die ergens moeten blijven — een deel van het water spoelt die stoffen weg in plaats van dat ze zich ophopen op het membraan zelf, wat de levensduur ten goede komt.'],
  ['Kan ik het membraan zelf vervangen?', 'Bij de meeste systemen is dit een kwestie van los- en vastdraaien, vaak met een instructievideo van de fabrikant. Twijfel je, dan kan een monteur het ook voor je doen.'],
  ['Werkt een omgekeerde osmose filter zonder stroom?', 'Ja, het proces werkt op waterdruk, niet op elektriciteit — wel is een minimale waterdruk nodig voor een goede doorstroming.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Omgekeerde osmose filter: hoe werkt het membraan?"
        description="Een omgekeerde osmose filter werkt met een membraan van 0,0001 micron. Uitleg over hoe dat membraan werkt en wat het wel en niet tegenhoudt."
        image="https://www.water-zuivering.nl/assets/img/mineraalfilter.jpg"
        url="https://www.water-zuivering.nl/kennisbank/omgekeerde-osmose-filter"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Omgekeerde osmose filter: hoe werkt het membraan?', url: 'https://www.water-zuivering.nl/kennisbank/omgekeerde-osmose-filter' },
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
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">Omgekeerde osmose filter: hoe werkt het membraan?</h1>
            <p className="mt-5 text-dim text-lg">Het hart van elke <strong className="text-ink">omgekeerde osmose filter</strong> is één simpel maar krachtig onderdeel: een membraan met microscopisch kleine poriën.</p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
              <Image src="/assets/img/mineraalfilter.jpg" alt="Close-up van een omgekeerde osmose filter membraan" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe het membraan werkt</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Bij een <strong className="text-ink">omgekeerde osmose filter</strong> wordt water onder lichte druk door een semi-permeabel membraan geperst — een laag met poriën van slechts 0,0001 micron. Watermoleculen passeren, maar vrijwel alles wat groter is blijft achter: bacteriën, virussen, zware metalen, en sporen van PFAS, medicijnresten en microplastics.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Het membraan werkt zelden alleen. In een compleet systeem zit er meestal een voorfilter vóór (om grof vuil eruit te houden, zodat het membraan niet snel verstopt) en een koolstoffilter erna (voor de laatste smaakcorrectie).
              </p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom niet gewoon een normaal filter?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een standaard koolstoffilter (zoals in een filterkan) is prima tegen chloorsmaak, maar de poriën zijn simpelweg te groot om kleinere moleculen zoals PFAS of medicijnresten tegen te houden. Een omgekeerde osmose filter is een andere orde van grootte fijner — en dat is precies waarom het de grondigste optie is als volledige filtratie je doel is.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Benieuwd hoe dit in een compleet systeem samenkomt? Lees onze uitleg over <Link href="/kennisbank/wat-is-ro-water" className="underline hover:text-ink">RO-water</Link>, of bekijk de <Link href="/uitleg" className="underline hover:text-ink">specificaties van ons systeem</Link>.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Het prijsverschil met een simpel filter zit hem dan ook niet in willekeur — een omgekeerde osmose filter kost meer om te bouwen en installeren juist omdát het membraan zoveel fijner filtert. Voor wie alleen de smaak wil verbeteren is een koolstoffilter genoeg; voor wie ook PFAS, medicijnresten en microplastics kwijt wil, is dit tot nu toe de enige betrouwbare techniek voor thuisgebruik.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">De drie onderdelen en hun vervangingsschema</h2>
            <p className="mt-4 text-dim leading-relaxed">Een omgekeerde osmose filter werkt zelden alleen — het membraan wordt meestal gecombineerd met een voor- en nafilter. Elk onderdeel heeft een eigen vervangingsritme:</p>
            <div className="mt-6 space-y-4">
              {ONDERDELEN.map(([titel, uitleg]) => (
                <div key={titel} className="reveal flex items-start gap-3">
                  <svg className="shrink-0 mt-1" width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#EDA71B" strokeWidth="1.7" /><path d="M12 7v5l3 3" stroke="#EDA71B" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <div>
                    <p className="font-semibold text-ink text-sm">{titel}</p>
                    <p className="mt-1 text-sm text-dim leading-relaxed">{uitleg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wanneer is je omgekeerde osmose filter aan vervanging toe?</h2>
            <p className="mt-4 text-dim leading-relaxed">Naast het vaste vervangingsschema zijn er ook praktische signalen dat je omgekeerde osmose filter aandacht nodig heeft:</p>
            <div className="mt-6 space-y-4">
              {SIGNALEN.map(([titel, uitleg]) => (
                <div key={titel} className="reveal flex items-start gap-3">
                  <svg className="shrink-0 mt-1" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 8v5M12 16h.01" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="12" r="9" stroke="#B91C1C" strokeWidth="1.7" /></svg>
                  <div>
                    <p className="font-semibold text-ink text-sm">{titel}</p>
                    <p className="mt-1 text-sm text-dim leading-relaxed">{uitleg}</p>
                  </div>
                </div>
              ))}
            </div>
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Benieuwd wat het voor jouw kraan betekent?</h2>
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
