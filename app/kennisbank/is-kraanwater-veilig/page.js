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
  alternates: { canonical: '/kennisbank/is-kraanwater-veilig' },
  title: 'Is kraanwater veilig? Zo zit het in Nederland — Water-zuivering',
  description:
    'Is kraanwater veilig om te drinken? In Nederland wel, met een paar kanttekeningen. Wat erin kan zitten en hoe je het eruit filtert.',
};

const FAQ = [
  ['Is kraanwater in Nederland veilig om te drinken?', 'Ja. Nederlandse drinkwaterbedrijven controleren continu op honderden stoffen en houden zich aan strenge Europese en nationale normen. Je wordt er niet acuut ziek van.'],
  ['Welke stoffen vallen nog niet volledig onder de norm?', 'Vooral stoffen die pas sinds kort goed meetbaar zijn: PFAS, resten van medicijnen die via het riool in het oppervlaktewater komen, en microplastics. De normen worden hier geleidelijk op aangepast.'],
  ['Betekent "voldoet aan de norm" dat er niets in het water zit?', 'Nee. Het betekent dat de gemeten hoeveelheden onder de wettelijke grens blijven. Die grens is vastgesteld met de huidige kennis en kan met nieuwe inzichten verschuiven, zoals bij PFAS al gebeurt.'],
  ['Waarom zou je kraanwater dan nog filteren?', 'Als extra zekerheid, niet uit wantrouwen richting het drinkwaterbedrijf. Een omgekeerde-osmosesysteem onder de gootsteen filtert chloor, PFAS, medicijnresten, microplastics en lood uit je kraanwater.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Is Nederlands kraanwater veilig om te drinken?"
        description="Is kraanwater in Nederland veilig? Ja, maar met kanttekeningen. Wat erin kan zitten en hoe je dat er eenvoudig uit filtert."
        image="https://www.water-zuivering.nl/assets/img/kennisbank/is-kraanwater-veilig.png"
        url="https://www.water-zuivering.nl/kennisbank/is-kraanwater-veilig"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Is Nederlands kraanwater veilig om te drinken?', url: 'https://www.water-zuivering.nl/kennisbank/is-kraanwater-veilig' },
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
              Is kraanwater veilig om te drinken in Nederland?
            </h1>
            <p className="mt-5 text-dim text-lg">
              <strong className="text-ink">Is kraanwater veilig</strong>? Nederland heeft een van de best gecontroleerde drinkwaternetten ter wereld. Betekent dat ook dat er niks te verbeteren valt?
            </p>
            <KortAntwoord>
              Ja, Nederlands <strong className="text-ink">kraanwater</strong> is veilig om te drinken. Drinkwaterbedrijven controleren continu op honderden stoffen volgens strenge Europese en nationale normen. Wel worden steeds vaker sporen gevonden van stoffen die de norm nog niet volledig dekt, zoals PFAS, medicijnresten en microplastics. Wie die ook kwijt wil, filtert thuis met omgekeerde osmose.
            </KortAntwoord>
            <AuteurRegel />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Het korte antwoord: ja, maar</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Nederlandse drinkwaterbedrijven controleren continu op honderden stoffen en houden zich aan strenge Europese en nationale normen. In die zin is kraanwater in Nederland veilig — je wordt er niet acuut ziek van.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Toch worden er de laatste jaren steeds vaker sporen aangetroffen van stoffen die pas sinds kort goed meetbaar zijn, en die de norm nog niet volledig dekt — met name PFAS ("forever chemicals"), resten van medicijnen die via het riool in het oppervlaktewater terechtkomen, en microplastics. De normen worden hier geleidelijk op aangepast, maar lopen achter op wat er inmiddels meetbaar is.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom filteren dan alsnog zinvol is</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Kraanwater "voldoet aan de norm" betekent niet hetzelfde als "bevat helemaal niets". Het betekent dat de gemeten hoeveelheden onder de wettelijke grens blijven — een grens die met de huidige kennis is vastgesteld, en die met nieuwe inzichten kan verschuiven (zoals bij PFAS al gebeurt).
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Een extra filterstap onder je eigen kraan is dan ook geen wantrouwen richting het Nederlandse drinkwaterbedrijf — het is simpelweg een extra zekerheid, zonder dat je hoeft te wachten tot regelgeving een keer wordt bijgesteld.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image loading="eager" src="/assets/img/kennisbank/is-kraanwater-veilig.png" alt="Een glas wordt gevuld: is kraanwater veilig om te drinken?" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">De oplossing</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zuiverder water, zonder erover na te hoeven denken</h2>
              <p className="mt-4 text-dim">Een Water-zuivering systeem filtert met 3 trappen chloor, PFAS, medicijnresten, microplastics en lood uit je kraanwater — direct beschikbaar, zonder dat je er verder aan hoeft te denken.</p>
              <p className="mt-4 text-dim">Benieuwd naar de specifieke stoffen? Lees ook onze uitleg over <Link href="/kennisbank/pfas-in-kraanwater" className="underline hover:text-ink">PFAS in kraanwater</Link>. Overweeg je een filter, kijk dan welk <Link href="/drinkwater-filter" className="underline hover:text-ink">drinkwater filter bij welk probleem past</Link>.</p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe wordt kraanwater gecontroleerd?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              De regels staan in de Drinkwaterwet. Drinkwaterbedrijven testen het water op honderden stoffen, op meerdere plekken in het leidingnet, en de Inspectie Leefomgeving en Transport houdt toezicht. Welke grenswaarden er gelden en wat er (nog) buiten valt, lees je in <Link href="/kennisbank/drinkwaternormen-nederland" className="underline hover:text-ink">drinkwaternormen in Nederland</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wanneer is kraanwater tijdelijk niet veilig?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Heel af en toe gaat er iets mis, bijvoorbeeld bij een leidingbreuk of een verontreiniging. Het waterbedrijf geeft dan een kookadvies voor het getroffen gebied: water eerst koken voordat je het drinkt. Dat wordt altijd gecommuniceerd en duurt meestal kort.
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Kookadvies of storing?</strong> Check het met je postcode in onze <Link href="/storingen" className="underline hover:text-ink">storingen-check</Link>.</li>
              <li><strong className="text-ink">Bruin water?</strong> Dat is meestal niet gevaarlijk. Lees ons <Link href="/kennisbank/bruin-water-uit-de-kraan" className="underline hover:text-ink">stappenplan bij bruin water uit de kraan</Link>.</li>
            </ul>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Oude leidingen in huis</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Het waterbedrijf is verantwoordelijk tot aan de watermeter. Daarna zijn de leidingen van de woning zelf. In zeer oude woningen kunnen nog loden leidingen zitten, en lood kan dan in kleine hoeveelheden in het kraanwater komen. Twijfel je, laat een installateur je leidingen bekijken. Laat bij twijfel in elk geval de kraan even lopen als het water lang heeft stilgestaan, bijvoorbeeld na een vakantie.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Is kraanwater veilig als het warm uit de kraan komt?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Drink en kook bij voorkeur met koud kraanwater. Warm water komt uit je boiler, geiser of cv-ketel en heeft daar soms lang gestaan. Het is bedoeld om mee te wassen en te douchen, niet om te drinken. Wil je warm water voor thee of om te koken, verwarm dan koud kraanwater in de waterkoker of pan.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Heeft het koude water lang stilgestaan, bijvoorbeeld na een vakantie of als je een paar dagen weg was? Laat de koude kraan dan eerst even lopen tot het water fris en koel is.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe weet je wat er in jouw kraanwater zit?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Je waterbedrijf publiceert de kwaliteit van het drinkwater in jouw regio, vaak met een zoekfunctie op postcode. Daar vind je onder meer de hardheid en de gemeten stoffen. Voor PFAS kun je ook onze <Link href="/pfas-check" className="underline hover:text-ink">PFAS-check</Link> gebruiken: die laat per regio zien hoe het water zich verhoudt tot de RIVM-advieswaarde.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Twijfel je over je eigen leidingen, dan kan een laboratorium je kraanwater testen. Voor de meeste huishoudens is dat niet nodig; de gegevens van het waterbedrijf geven een goed beeld. Is kraanwater veilig in jouw huis, maar wil je toch zekerheid over PFAS en medicijnresten, dan is een <Link href="/osmosesysteem" className="underline hover:text-ink">osmosesysteem</Link> de grondigste stap.
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zekerheid over wat er uit jouw kraan komt?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan en ontdek wat een Water-zuivering systeem voor jouw huishouden betekent.</p>
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
