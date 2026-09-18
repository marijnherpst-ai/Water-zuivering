import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import FaqSchema from '@/components/FaqSchema';

export const metadata = {
  alternates: { canonical: '/kennisbank/drinkwaternormen-nederland' },
  title: 'Drinkwaternormen in Nederland: wat wordt er gecontroleerd? — Water-zuivering',
  description: 'Nederlandse drinkwaternormen zijn wettelijk vastgelegd in de Drinkwaterwet. Wat wordt er precies gecontroleerd, en wat valt daar niet onder?',
};

const BETROKKENEN = [
  ['Drinkwaterbedrijven', 'Voeren de wettelijk verplichte testen uit, op meerdere plekken in het leidingnet, en rapporteren de resultaten.'],
  ['Inspectie Leefomgeving en Transport (ILT)', 'Houdt toezicht op naleving van de Drinkwaterwet en kan ingrijpen bij overtredingen.'],
  ['RIVM', 'Doet onderzoek naar drinkwaterkwaliteit en adviseert over nieuwe of aangepaste normen, bijvoorbeeld voor PFAS.'],
  ['Vewin', 'De brancheorganisatie van de Nederlandse drinkwaterbedrijven, die ook meedenkt over toekomstige regelgeving.'],
];

const FAQ = [
  ['Wie controleert de drinkwaternormen in Nederland?', 'Drinkwaterbedrijven zijn wettelijk verplicht regelmatig te testen op honderden parameters, onder toezicht van de Inspectie Leefomgeving en Transport (ILT).'],
  ['Vallen PFAS onder de drinkwaternormen?', 'Er gelden voor een deel van de PFAS-stoffen inmiddels grenswaarden, maar niet voor alle varianten — en de norm ligt hoger dan wat sommige mensen wenselijk vinden voor langdurige blootstelling.'],
  ['Zijn medicijnresten opgenomen in de normen?', 'Nee, voor de meeste medicijnresten en microplastics bestaan (nog) geen wettelijke grenswaarden in drinkwater, ook al worden ze soms wel in sporen aangetroffen.'],
  ['Betekent voldoen aan de norm dat water perfect zuiver is?', 'Het betekent dat het water veilig is volgens de huidige wetenschappelijke inzichten — niet dat er helemaal geen sporen van stoffen meer in zitten.'],
  ['Hoe vaak wordt kraanwater in Nederland getest?', 'Drinkwaterbedrijven testen doorlopend, met een frequentie die afhangt van het type parameter — sommige stoffen worden dagelijks gecontroleerd, andere periodiek.'],
  ['Worden de testresultaten openbaar gemaakt?', 'Ja, drinkwaterbedrijven publiceren jaarlijkse kwaliteitsrapportages, vaak ook regionaal uitgesplitst.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Drinkwaternormen in Nederland: wat wordt er gecontroleerd?"
        description="Nederlandse drinkwaternormen zijn wettelijk vastgelegd in de Drinkwaterwet. Wat wordt er precies gecontroleerd, en wat valt daar niet onder?"
        image="https://www.water-zuivering.nl/assets/img/kennisbank/is-kraanwater-veilig.png"
        url="https://www.water-zuivering.nl/kennisbank/drinkwaternormen-nederland"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Drinkwaternormen in Nederland: wat wordt er gecontroleerd?', url: 'https://www.water-zuivering.nl/kennisbank/drinkwaternormen-nederland' },
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
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">Drinkwaternormen in Nederland: wat wordt er gecontroleerd?</h1>
            <p className="mt-5 text-dim text-lg">Nederlands kraanwater behoort tot het best gecontroleerde ter wereld. Maar wat houdt die controle precies in?</p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
              <Image src="/assets/img/kennisbank/is-kraanwater-veilig.png" alt="Controle van Nederlandse drinkwaternormen op kraanwater" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">De Drinkwaterwet als basis</h2>
              <p className="mt-4 text-dim leading-relaxed">
                De <strong className="text-ink">drinkwaternormen in Nederland</strong> zijn wettelijk vastgelegd in de Drinkwaterwet en het bijbehorende Drinkwaterbesluit. Daarin staan grenswaarden voor honderden stoffen: van bacteriën en zware metalen tot chloor, nitraat en een deel van de PFAS-varianten.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Drinkwaterbedrijven zijn verplicht om regelmatig, op meerdere plekken in het leidingnet, te testen — en de resultaten worden gerapporteerd aan de toezichthouder (ILT).
              </p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat valt er buiten de normen?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Niet alles wordt (nog) even streng gereguleerd. Voor sommige PFAS-varianten, veel medicijnresten en microplastics bestaan geen of nog geen wettelijke grenswaarden, ook al worden ze soms wel in sporen aangetroffen. Dat betekent niet dat het water onveilig is — het betekent dat de wetgeving nog niet overal is bijgebeend met opkomende stoffen.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Wie liever een extra stap zet, doet dat met een filtersysteem thuis. Lees meer over <Link href="/kennisbank/pfas-in-kraanwater" className="underline hover:text-ink">PFAS in kraanwater</Link> of over <Link href="/waterzuivering-voor-thuis" className="underline hover:text-ink">waterzuivering voor thuis</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wie is er verantwoordelijk?</h2>
            <p className="mt-4 text-dim leading-relaxed">Meerdere partijen zijn betrokken bij het bewaken van de drinkwaterkwaliteit in Nederland:</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {BETROKKENEN.map(([titel, uitleg]) => (
                <div key={titel} className="reveal rounded-2xl card p-5">
                  <p className="font-display font-bold text-ink text-sm">{titel}</p>
                  <p className="mt-1.5 text-sm text-dim leading-relaxed">{uitleg}</p>
                </div>
              ))}
            </div>
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Nog een stap verder dan de norm?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan voor een waterzuiveraar die ook PFAS, medicijnresten en microplastics filtert.</p>
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
