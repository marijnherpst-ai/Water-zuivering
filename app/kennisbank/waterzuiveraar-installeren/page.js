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
  alternates: { canonical: '/kennisbank/waterzuiveraar-installeren' },
  title: 'Waterzuiveraar laten installeren — Water-zuivering',
  description:
    'Hoe de installatie van een waterzuiveraar in zijn werk gaat: van afspraak tot zuiver water, stap voor stap.',
};

const FAQ = [
  ['Hoe lang duurt het installeren van een waterzuiveraar?', 'De installatie zelf duurt ongeveer 1 à 2 uur. Daarna test de monteur de waterdruk, de aansluitingen en elke filtertrap, wat ongeveer 15 minuten kost.'],
  ['Moet ik zelf iets voorbereiden?', 'Nee. De monteur brengt alles mee. Zorg alleen dat het kastje onder je spoelbak toegankelijk is.'],
  ['Wat moet er onder het aanrecht aanwezig zijn?', 'Een koudwateraansluiting, de afvoer van de gootsteen en een stopcontact.'],
  ['Welke garantie krijg je?', 'Je krijgt 10 jaar garantie. Onze eigen monteurs installeren elk systeem persoonlijk en testen alles voordat ze vertrekken.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Waterzuiveraar laten installeren: hoe gaat dat?"
        description="Hoe de installatie van een waterzuiveraar in zijn werk gaat: van afspraak tot zuiver water, stap voor stap."
        image="https://www.water-zuivering.nl/assets/img/kennisbank/waterzuiveraar-installeren.png"
        url="https://www.water-zuivering.nl/kennisbank/waterzuiveraar-installeren"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Waterzuiveraar laten installeren: hoe gaat dat?', url: 'https://www.water-zuivering.nl/kennisbank/waterzuiveraar-installeren' },
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
              Waterzuiveraar laten installeren: hoe gaat dat?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Veel mensen stellen een <strong className="text-ink">waterzuiveraar</strong> uit omdat ze denken dat installeren een hele klus is. In werkelijkheid valt dat erg mee.
            </p>
            <AuteurRegel />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-center">Vier stappen, meestal binnen één dag</h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-3xl card p-6 text-center">
                <p className="mt-2 font-display font-bold text-lg">1. Afspraak</p>
                <p className="mt-2 text-sm text-dim">Plan telefonisch of online een moment dat jou uitkomt.</p>
                <p className="mt-4 text-xs font-bold text-amber-dark uppercase tracking-wide">± 5 minuten</p>
              </div>
              <div className="rounded-3xl card p-6 text-center">
                <p className="mt-2 font-display font-bold text-lg">2. Installatie</p>
                <p className="mt-2 text-sm text-dim">Een monteur sluit het systeem aan op je bestaande kraan.</p>
                <p className="mt-4 text-xs font-bold text-amber-dark uppercase tracking-wide">± 1-2 uur</p>
              </div>
              <div className="rounded-3xl card p-6 text-center">
                <p className="mt-2 font-display font-bold text-lg">3. Controle</p>
                <p className="mt-2 text-sm text-dim">Waterdruk, aansluitingen en elke filtertrap worden getest.</p>
                <p className="mt-4 text-xs font-bold text-amber-dark uppercase tracking-wide">± 15 minuten</p>
              </div>
              <div className="rounded-3xl bg-ink text-white p-6 text-center">
                <p className="mt-2 font-display font-bold text-lg">4. Genieten</p>
                <p className="mt-2 text-sm text-white/60">Direct zuiver water uit je kraan, zonder verdere moeite.</p>
                <p className="mt-4 text-xs font-bold text-amber uppercase tracking-wide">Vanaf nu</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Moet ik zelf iets regelen?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Nee. De monteur brengt alles mee en sluit het systeem netjes aan op je bestaande waterleiding — er is geen voorbereiding van jouw kant nodig, behalve dat het kastje onder je spoelbak toegankelijk is. Heb je al een Quooker of een andere extra kraan? Geef dat aan bij je aanvraag, dan houdt de monteur er bij de aansluiting rekening mee.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image loading="eager" src="/assets/img/kennisbank/waterzuiveraar-installeren.png" alt="Monteur installeert een waterzuiveraar onder de gootsteen" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Zekerheid</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Vakkundig geïnstalleerd, met 10 jaar garantie</h2>
              <p className="mt-4 text-dim">Onze eigen monteurs installeren elk systeem persoonlijk en testen alles voordat ze vertrekken. Meer over de garantie lees je op onze <Link href="/garantie" className="underline hover:text-ink">garantiepagina</Link>. Wil je precies weten wat er op de installatiedag gebeurt en wat je vooraf nodig hebt? Lees dan onze pagina over de <Link href="/osmose-installatie" className="underline hover:text-ink">osmose installatie</Link>.</p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat heb je nodig om een waterzuiveraar te installeren?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Voor een omgekeerde-osmosesysteem onder het aanrecht zijn drie dingen nodig. Die zijn in vrijwel elke keuken al aanwezig:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Een koudwateraansluiting</strong> onder de gootsteen, waarop de monteur een aftakking maakt.</li>
              <li><strong className="text-ink">De afvoer van de gootsteen</strong>. Daar loopt het spoelwater naartoe waarmee het membraan de tegengehouden stoffen wegspoelt.</li>
              <li><strong className="text-ink">Een stopcontact</strong> in of vlak bij het kastje, voor de pomp en het display.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Daarnaast moet het systeem in je kastje passen. De waterzuiveraar van Water-zuivering is 10,5 cm breed, 42 cm diep en 43 cm hoog, en kan staand of liggend worden geplaatst. De waterdruk in huis moet tussen 0,1 en 0,4 MPa liggen; dat is in Nederlandse woningen normaal.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zo verloopt het installeren van een waterzuiveraar</h2>
            <p className="mt-4 text-dim leading-relaxed">
              De monteur werkt meestal in deze volgorde:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Aftakking maken</strong> op de koude waterleiding onder de gootsteen.</li>
              <li><strong className="text-ink">Afvoer aansluiten</strong> met een klein koppelstuk op de afvoerbuis.</li>
              <li><strong className="text-ink">Systeem plaatsen</strong> in het kastje, staand of liggend, afhankelijk van de ruimte.</li>
              <li><strong className="text-ink">Kraan plaatsen</strong>: een apart tappunt of een <Link href="/kennisbank/3-weg-kraan-uitleg" className="underline hover:text-ink">3-weg kraan</Link>. Daarvoor is soms een extra gat in het aanrecht nodig.</li>
              <li><strong className="text-ink">Doorspoelen en testen</strong>: alle aansluitingen, de waterdruk en elke filtertrap worden gecontroleerd.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Wil je weten wat er precies op de installatiedag gebeurt? Lees ook onze pagina over de <Link href="/osmose-installatie" className="underline hover:text-ink">osmose installatie</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Na de installatie: wat merk je ervan?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Vanaf het eerste glas komt er gefilterd water uit je kraan. Het systeem werkt direct flow, dus zonder opslagtank: het water wordt gezuiverd op het moment dat je de kraan opendraait, met 1,58 liter per minuut.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Een display op het apparaat laat de filterstatus zien en geeft een melding als er iets is: E1 als het systeem 30 minuten onafgebroken heeft gedraaid, E2 bij lekkage en E3 bij te lage waterdruk. De filters vervang je later zelf, zonder gereedschap. Hoe vaak, lees je in <Link href="/kennisbank/waterfilter-vervangen-hoe-vaak" className="underline hover:text-ink">hoe vaak moet je een waterfilter vervangen</Link>.
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Plan vandaag nog je afspraak</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan — binnen één werkdag hoor je van ons.</p>
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
