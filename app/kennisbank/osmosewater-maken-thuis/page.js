import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import FaqSchema from '@/components/FaqSchema';

export const metadata = {
  alternates: { canonical: '/kennisbank/osmosewater-maken-thuis' },
  title: 'Osmosewater maken: kan dat gewoon thuis? — Water-zuivering',
  description: 'Osmosewater maken doe je met een omgekeerde-osmose-installatie. Hoe dat thuis werkt, wat je nodig hebt en of het de moeite waard is.',
};

const FAQ = [
  ['Kan ik zelf osmosewater maken zonder apparaat?', 'Nee. Osmose vereist druk en een membraan met microscopisch kleine poriën — dat proces gaat niet zonder een speciaal filtersysteem.'],
  ['Is zelfgemaakt osmosewater net zo zuiver als gekocht water?', 'Met een goed onderhouden systeem thuis is de zuiverheid vergelijkbaar met, en vaak beter dan, veel flessenwater — en je hoeft niets te vervoeren of op te slaan.'],
  ['Hoeveel osmosewater kan ik per dag maken?', 'Een systeem onder het aanrecht levert continu water zolang de kraan open staat — er is geen dagelijkse limiet zoals bij een filterkan.'],
  ['Kost het maken van osmosewater veel extra water?', 'Er ontstaat wat afvalwater tijdens het proces, dat de opgevangen stoffen wegspoelt. Moderne systemen zijn hier zuiniger in dan oudere generaties.'],
  ['Kan ik osmosewater maken gebruiken voor mijn aquarium of planten?', 'Ja, dat gebeurt vaak — voor aquaria omdat je dan volledige controle hebt over de waterwaarden, voor planten hangt het af van de plantensoort of dit wenselijk is.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Osmosewater maken: kan dat gewoon thuis?"
        description="Osmosewater maken doe je met een omgekeerde-osmose-installatie. Hoe dat thuis werkt, wat je nodig hebt en of het de moeite waard is."
        image="https://www.water-zuivering.nl/assets/img/glas-water.webp"
        url="https://www.water-zuivering.nl/kennisbank/osmosewater-maken-thuis"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Osmosewater maken: kan dat gewoon thuis?', url: 'https://www.water-zuivering.nl/kennisbank/osmosewater-maken-thuis' },
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
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">Osmosewater maken: kan dat gewoon thuis?</h1>
            <p className="mt-5 text-dim text-lg">Ja — met de juiste installatie is <strong className="text-ink">osmosewater maken</strong> net zo simpel als een kraan opendraaien.</p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
              <Image src="/assets/img/glas-water.webp" alt="Glas osmosewater, thuis gemaakt met een omgekeerde-osmose-systeem" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat is er eigenlijk voor nodig?</h2>
              <p className="mt-4 text-dim leading-relaxed">Osmosewater maak je met een omgekeerde-osmose-systeem: kraanwater wordt onder lichte druk door een membraan met poriën van 0,0001 micron geperst. Bacteriën, zware metalen, PFAS en microplastics blijven achter — er komt alleen zuiver water doorheen.</p>
              <p className="mt-4 text-dim leading-relaxed">Thuis betekent dat: een compact systeem onder je aanrecht, aangesloten op de waterleiding. Geen losse machine die je moet bedienen, geen wachten — gewoon de kraan opendraaien.</p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Is het de moeite waard?</h2>
            <p className="mt-4 text-dim leading-relaxed">Vergeleken met flessenwater of een reisfilter is thuis osmosewater maken op termijn goedkoper en gemakkelijker: geen sjouwen, geen plastic, en onbeperkt zuiver water zodra het systeem is aangesloten. De belangrijkste afweging is de eenmalige aanschaf- en installatiekost tegenover wat je nu al uitgeeft aan flessenwater.</p>
            <p className="mt-4 text-dim leading-relaxed">Meer weten over hoe zo'n systeem er precies uitziet? Bekijk onze <Link href="/osmosesysteem" className="underline hover:text-ink">osmosesysteem-pagina</Link> of lees over <Link href="/waterzuivering-voor-thuis" className="underline hover:text-ink">waterzuivering voor thuis</Link>.</p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zelf maken vs. flessenwater kopen</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Flessenwater kopen betekent elke keer opnieuw betalen, sjouwen en plastic weggooien. Osmosewater maken thuis is een eenmalige investering die zich terugbetaalt: geen wekelijkse boodschap meer, geen lege flessen in de kast, en altijd voorraad zonder eraan te hoeven denken. Reken zelf uit wat dat voor jouw huishouden betekent via onze <Link href="/besparing" className="underline hover:text-ink">besparingscalculator</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zelf osmosewater maken, zonder gedoe?</h2>
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
