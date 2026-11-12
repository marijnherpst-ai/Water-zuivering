import Image from 'next/image';
import Link from 'next/link';
import AuteurRegel from '@/components/AuteurRegel';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import KortAntwoord from '@/components/KortAntwoord';
import FaqSchema from '@/components/FaqSchema';

export const metadata = {
  alternates: { canonical: '/kennisbank/drinkwaternormen-nederland' },
  title: 'Drinkwaternormen Nederland — Water-zuivering',
  description: 'Nederlandse drinkwaternormen zijn wettelijk vastgelegd in de Drinkwaterwet. Wat wordt er precies gecontroleerd, en wat valt daar niet onder?',
};

const BETROKKENEN = [
  ['Drinkwaterbedrijven', 'Voeren de wettelijk verplichte testen uit, op meerdere plekken in het leidingnet, en rapporteren de resultaten.'],
  ['Inspectie Leefomgeving en Transport (ILT)', 'Houdt toezicht op naleving van de Drinkwaterwet en kan ingrijpen bij overtredingen.'],
  ['RIVM', 'Doet onderzoek naar drinkwaterkwaliteit en adviseert over nieuwe of aangepaste normen, bijvoorbeeld voor PFAS.'],
  ['Vewin', 'De brancheorganisatie van de Nederlandse drinkwaterbedrijven, die ook meedenkt over toekomstige regelgeving.'],
];

const NORMEN = [
  ['Microbiologisch', 'Grenswaarden voor bacteriën zoals E. coli en enterokokken — kraanwater mag hier vrijwel geheel vrij van zijn.'],
  ['Chemisch', 'Grenswaarden voor onder meer lood, nitraat, pesticiden en een deel van de PFAS-varianten.'],
  ['Esthetisch', 'Normen voor smaak, geur, kleur en troebelheid — niet gevaarlijk, maar wel merkbaar voor gebruikers.'],
  ['Radioactiviteit', 'Beperkte, zeer lage grenswaarden voor van nature voorkomende radioactieve stoffen in grondwater.'],
];

const WETTEN = [
  ['Drinkwaterwet', 'De wet zelf, aangenomen door het parlement', 'De grote lijnen: wie drinkwater mag leveren, dat het deugdelijk moet zijn en wie toezicht houdt.'],
  ['Drinkwaterbesluit', 'Een besluit van de regering bij de wet', 'De kwaliteitseisen zelf: de lijst met stoffen en bacteriën en hun grenswaarden, zoals maximaal 25 °C aan de kraan.'],
  ['Drinkwaterregeling', 'Een regeling van de minister', 'De uitvoering: hoe vaak en hoe er gemeten wordt, regels voor materialen die met drinkwater in contact komen en voor legionellapreventie.'],
];

const FAQ = [
  ['Wat is het verschil tussen de Drinkwaterwet en het Drinkwaterbesluit?', 'De Drinkwaterwet legt de grote lijnen vast: wie drinkwater mag leveren en wie toezicht houdt. In het Drinkwaterbesluit staan de concrete kwaliteitseisen, zoals de grenswaarden per stof. De Drinkwaterregeling werkt de uitvoering uit, bijvoorbeeld hoe vaak er gemeten wordt. Alle drie gelden sinds 2011.'],
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
        datePublished="2026-09-18"
        dateModified="2026-10-21"
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
            <p className="mt-5 text-dim text-lg">De <strong className="text-ink">drinkwaternormen</strong> die <strong className="text-ink">Nederland</strong> hanteert, behoren tot de strengste ter wereld. Maar wat houden die normen precies in, en wat controleren ze? In dit artikel zetten we de Nederlandse drinkwaternormen stap voor stap voor je uiteen.</p>
            <KortAntwoord>
              De drinkwaternormen in Nederland staan in de Drinkwaterwet en het Drinkwaterbesluit, met grenswaarden voor honderden stoffen: van bacteriën en zware metalen tot nitraat en een deel van de PFAS. Drinkwaterbedrijven testen, de Inspectie Leefomgeving en Transport (ILT) houdt toezicht. Voor veel medicijnresten en microplastics bestaan nog geen wettelijke grenswaarden.
            </KortAntwoord>
            <AuteurRegel bijgewerkt="21 oktober 2026" />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
              <Image loading="eager" src="/assets/img/kennisbank/is-kraanwater-veilig.png" alt="Controle van Nederlandse drinkwaternormen op kraanwater" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
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
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Drinkwaterwet, Drinkwaterbesluit en Drinkwaterregeling: wat is het verschil?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              De regels voor drinkwater staan niet in één document, maar in drie lagen. Ze gelden alle drie sinds 2011 en horen bij elkaar. Hoe lager de laag, hoe gedetailleerder de regels en hoe makkelijker ze aan te passen zijn als er nieuwe kennis is:
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-surface text-ink">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Naam</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Wat is het?</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Wat staat erin?</th>
                  </tr>
                </thead>
                <tbody>
                  {WETTEN.map((rij) => (
                    <tr key={rij[0]} className="border-t border-edge">
                      {rij.map((cel, i) => (
                        <td key={i} className={`px-4 py-3 align-top ${i === 0 ? 'font-semibold text-ink' : 'text-dim'}`}>{cel}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-dim leading-relaxed">
              Boven deze drie staat nog de Europese Drinkwaterrichtlijn, die voor alle landen van de EU een ondergrens vastlegt. Wordt die richtlijn aangepast, dan past Nederland het Drinkwaterbesluit en de Drinkwaterregeling aan. De actuele teksten staan op <a href="https://wetten.overheid.nl/BWBR0030111" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">wetten.overheid.nl</a>, en het RIVM legt de <a href="https://www.rivm.nl/drinkwater/drinkwater-en-regelgeving" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">regelgeving voor drinkwater</a> uit. Hoe drinkwaterbedrijven het water zuiveren om aan die eisen te voldoen, lees je in <Link href="/kennisbank/waterzuivering-nederland" className="underline hover:text-ink">waterzuivering in Nederland</Link>.
            </p>
            <h2 className="mt-12 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat valt er buiten de normen?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Niet alles wordt (nog) even streng gereguleerd. Voor sommige PFAS-varianten, veel medicijnresten en microplastics bestaan geen of nog geen wettelijke grenswaarden, ook al worden ze soms wel in sporen aangetroffen. Dat betekent niet dat het water onveilig is — het betekent dat de wetgeving nog niet overal is bijgebeend met opkomende stoffen.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Wie liever een extra stap zet, doet dat met een filtersysteem thuis. Lees meer over <Link href="/kennisbank/pfas-in-kraanwater" className="underline hover:text-ink">PFAS in kraanwater</Link> of over <Link href="/waterzuivering-voor-thuis" className="underline hover:text-ink">waterzuivering voor thuis</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat als een norm toch overschreden wordt?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Overschrijdt een meting een grenswaarde uit de drinkwaternormen, dan is het drinkwaterbedrijf verplicht direct te reageren: extra bemonstering, opsporen van de oorzaak, en indien nodig een tijdelijke maatregel zoals een kookadvies voor het getroffen gebied. Zulke situaties zijn zeldzaam en worden altijd gecommuniceerd naar de bewoners in kwestie.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Wil je weten of er op dit moment iets speelt in jouw regio? Gebruik onze <Link href="/storingen" className="underline hover:text-ink">storingen-check</Link> voor actuele meldingen, los van deze algemene uitleg over de drinkwaternormen.
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
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Vier categorieën drinkwaternormen</h2>
            <p className="mt-4 text-dim leading-relaxed">De <strong className="text-ink">drinkwaternormen in Nederland</strong> zijn onderverdeeld in categorieën, elk met hun eigen doel:</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {NORMEN.map(([titel, uitleg]) => (
                <div key={titel} className="reveal rounded-2xl card p-5">
                  <p className="font-display font-bold text-ink text-sm">{titel}</p>
                  <p className="mt-1.5 text-sm text-dim leading-relaxed">{uitleg}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe verhoudt Nederland zich tot andere EU-landen?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              De Nederlandse <strong className="text-ink">drinkwaternormen</strong> zijn gebaseerd op de Europese Drinkwaterrichtlijn, die voor alle EU-lidstaten een gezamenlijke ondergrens vastlegt. Nederland behoort binnen die richtlijn tot de strengere landen: de nationale grenswaarden liggen op meerdere punten (waaronder bepaalde PFAS-varianten) lager dan het Europese minimum, en de controlefrequentie ligt hoger dan wettelijk verplicht.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Dat betekent niet dat Nederlands kraanwater vrij is van elk spoor van elke stof — het betekent dat wat wél wordt getest, streng wordt bewaakt. Voor stoffen die nog buiten de norm vallen, zoals veel medicijnresten, is eigen filtratie de enige manier om ook die sporen te verwijderen.
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
