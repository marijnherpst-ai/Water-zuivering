import Link from 'next/link';
import AuteurRegel from '@/components/AuteurRegel';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import KortAntwoord from '@/components/KortAntwoord';
import FaqSchema from '@/components/FaqSchema';
import TussenCta from '@/components/TussenCta';

export const metadata = {
  alternates: { canonical: '/kennisbank/waterhardheid-testen' },
  title: "Waterhardheid testen: 4 manieren om het zelf te doen",
  description:
    "Waterhardheid testen kan met teststrips, een druppeltest, een zeeptest of via je waterbedrijf. Zo meet je het thuis en zo lees je de uitslag.",
  openGraph: {
    title: "Waterhardheid testen: 4 manieren om het zelf te doen",
    description: "Vier manieren om de hardheid van je kraanwater te testen, en wat de uitslag in °dH, °fH en mmol/l betekent.",
    url: 'https://www.water-zuivering.nl/kennisbank/waterhardheid-testen',
    images: ['/assets/img/een-kraan.jpg'],
  },
};

const FAQ = [
  ['Hoe test je waterhardheid thuis?', 'Met een teststrip of een druppeltest uit de bouwmarkt of drogist. Je houdt de strip in het water of voegt druppels testvloeistof toe tot de kleur omslaat. Een zeeptest geeft een grove indicatie, en bij je waterbedrijf zoek je de waarde voor je postcode op.'],
  ['Kun je de waterhardheid gratis testen?', 'Ja. Op de waterhardheidcheck van deze site en bij je waterbedrijf zoek je de hardheid voor je postcode gratis op. Een teststrip kost een paar euro en soms zit er een bij een nieuwe vaatwasser.'],
  ['Wat is een normale waterhardheid in Nederland?', 'Het meeste Nederlandse kraanwater is zacht of net daarboven, ruwweg 4 tot 10 °dH. Dat verschilt per regio en waterbedrijf.'],
  ['Hoeveel druppels is hoeveel °dH?', 'Bij veel druppeltests komt één druppel overeen met één °dH. Sets verschillen echter, dus volg altijd de handleiding van jouw set voor de omrekening.'],
  ['Wat is het verschil tussen °dH en °fH?', 'Het zijn twee schalen voor dezelfde meting. °dH zijn Duitse graden, die in Nederland gebruikelijk zijn. °fH zijn Franse graden, vaker gebruikt in België en Frankrijk. 1 °dH is ongeveer 1,8 °fH.'],
  ['Is een teststrip betrouwbaar?', 'Een teststrip geeft een goede indicatie, genoeg voor het instellen van een vaatwasser of een ontkalkschema. Wil je het precies weten, gebruik dan een druppeltest of kijk de waarde voor je postcode op.'],
  ['Verandert de waterhardheid in de loop van het jaar?', 'Ja, een beetje. Waterbedrijven mengen water uit verschillende bronnen en dat kan per periode verschillen. Je waterbedrijf geeft de actuele waarde en soms een gemiddelde per jaar.'],
  ['Meet een TDS-meter de waterhardheid?', 'Nee. Een TDS-meter meet alle opgeloste stoffen samen, zoals kalk, zouten en mineralen. Het is een indicatie voor de zuiverheid van het water, geen hardheidstest.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Waterhardheid testen: 4 manieren om het zelf te doen"
        description="Vier manieren om de hardheid van je kraanwater te testen, en wat de uitslag in °dH, °fH en mmol/l betekent."
        image="https://www.water-zuivering.nl/assets/img/een-kraan.jpg"
        url="https://www.water-zuivering.nl/kennisbank/waterhardheid-testen"
        datePublished="2026-11-23"
        dateModified="2026-11-23"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: "Waterhardheid testen", url: 'https://www.water-zuivering.nl/kennisbank/waterhardheid-testen' },
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
              Waterhardheid testen: zo meet je de hardheid van je kraanwater
            </h1>
            <p className="mt-5 text-dim text-lg">
              Witte aanslag op je kraan, een waterkoker die snel verkalkt of vlekken op je glazen uit de vaatwasser: het ligt vaak aan de <strong className="text-ink">waterhardheid</strong>. Je kunt die zelf testen, in een paar minuten en voor weinig geld. Hier lees je vier manieren, hoe je de uitslag leest en wat je er daarna mee doet.
            </p>
            <KortAntwoord bron={{ naam: "Waterbedrijf Groningen: hardheid van drinkwater", url: "https://waterbedrijfgroningen.nl/over-drinkwater/hardheid-van-drinkwater/" }}>
              Je test de waterhardheid met een teststrip of druppeltest uit de bouwmarkt, met een zeeptest als grove indicatie, of je zoekt de waarde van je postcode op bij je waterbedrijf. Een strip geeft in een minuut een schatting, een druppeltest is nauwkeuriger. De uitslag lees je in °dH: tot 8 is zacht, vanaf 12 vrij hard.
            </KortAntwoord>
            <AuteurRegel bijgewerkt="23 november 2026" />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Overzicht</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">De vier manieren om waterhardheid te testen</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Welke methode past, hangt af van hoe precies je het wilt weten. Een teststrip is het snelst, een druppeltest het nauwkeurigst. Wil je de officiële waarde voor je adres, dan kijk je bij je waterbedrijf.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-surface text-ink"><tr><th scope="col" className="px-4 py-3 font-semibold">Methode</th><th scope="col" className="px-4 py-3 font-semibold">Wat heb je nodig?</th><th scope="col" className="px-4 py-3 font-semibold">Hoe nauwkeurig?</th><th scope="col" className="px-4 py-3 font-semibold">Hoe lang?</th></tr></thead>
                <tbody>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">Teststrip</td><td className="px-4 py-3 align-top text-dim">Een pakje teststrips uit de bouwmarkt of drogist</td><td className="px-4 py-3 align-top text-dim">Een indicatie, in stappen</td><td className="px-4 py-3 align-top text-dim">Ongeveer 1 minuut</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">Druppeltest</td><td className="px-4 py-3 align-top text-dim">Een testset met buisje en testvloeistof, ongeveer €15</td><td className="px-4 py-3 align-top text-dim">Goed, je telt de druppels</td><td className="px-4 py-3 align-top text-dim">2 tot 5 minuten</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">Zeeptest</td><td className="px-4 py-3 align-top text-dim">Een schone fles, water en zeep of afwasmiddel</td><td className="px-4 py-3 align-top text-dim">Alleen een grove indicatie</td><td className="px-4 py-3 align-top text-dim">1 minuut</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">Waterbedrijf of postcode</td><td className="px-4 py-3 align-top text-dim">Je postcode</td><td className="px-4 py-3 align-top text-dim">Gemiddelde van je leveringsgebied</td><td className="px-4 py-3 align-top text-dim">Direct</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-dim leading-relaxed">
              Meet je twijfelachtige waarden, doe dan altijd twee methodes. Een strip en een druppeltest naast elkaar geven meer vertrouwen dan één uitslag.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Methode 1</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waterhardheid testen met een teststrip</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Dit is de makkelijkste manier. Een teststrip heeft een paar vakjes die van kleur veranderen als er kalk in het water zit. Soms zit er een strip bij een nieuwe vaatwasser.
            </p>
            <ol className="mt-4 space-y-2 text-dim leading-relaxed list-decimal pl-5">
              <li>Laat de koude kraan een halve minuut lopen, zodat je vers water uit de leiding meet en geen water dat in je huis heeft gestaan.</li>
              <li>Houd de strip de aangegeven tijd in een glas of onder de kraan. Meestal is dat een paar seconden.</li>
              <li>Schud het water er voorzichtig af en wacht de tijd op de verpakking, vaak 30 tot 60 seconden.</li>
              <li>Vergelijk het aantal gekleurde vakjes met de kleurenschaal op de verpakking. Zo lees je de hardheid in °dH af.</li>
            </ol>
            <p className="mt-4 text-dim leading-relaxed">
              Een strip geeft een indicatie in stappen, geen exact getal. Voor de vaatwasser of een ontkalkschema is dat vaak genoeg.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Methode 2</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waterhardheid meten met een druppeltest</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een druppeltest is nauwkeuriger. Je telt hoeveel druppels testvloeistof nodig zijn voordat het water van kleur verandert. Bij veel sets is dat aantal gelijk aan het aantal °dH, maar sets verschillen, dus volg altijd de handleiding van jouw set.
            </p>
            <ol className="mt-4 space-y-2 text-dim leading-relaxed list-decimal pl-5">
              <li>Spoel het testbuisje om met kraanwater.</li>
              <li>Vul het buisje tot de streep met koud kraanwater uit de keuken.</li>
              <li>Voeg één druppel testvloeistof toe, schud het buisje en kijk naar de kleur. Bij de meeste sets is het water eerst rood.</li>
              <li>Herhaal dit druppel voor druppel tot de kleur omslaat, bij veel sets naar groen.</li>
              <li>Tel de druppels. Dat aantal is de uitslag, of reken het om met de tabel in de handleiding.</li>
            </ol>
            <p className="mt-4 text-dim leading-relaxed">
              Twijfel je tussen twee kleuren? Dan zit je op de grens. Doe de test dan nog een keer en neem het gemiddelde.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Methode 3 en 4</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">De zeeptest en de postcodecheck</h2>
            <h3 className="mt-8 font-display text-xl font-bold text-ink">De zeeptest: gratis, maar grof</h3>
            <p className="mt-4 text-dim leading-relaxed">
              Doe een bodempje kraanwater in een schone fles, voeg een paar druppels afwasmiddel of vloeibare zeep toe en schud. Veel schuim en helder water wijzen op zacht water. Weinig schuim en troebel water wijzen op harder water. Het is een snelle indicatie, geen meting. Moderne afwasmiddelen schuimen ook in hard water goed, dus vertrouw er niet blind op.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold text-ink">De postcodecheck: de officiële waarde</h3>
            <p className="mt-4 text-dim leading-relaxed">
              Waterbedrijven publiceren de hardheid per leveringsgebied. Met je postcode zie je welke waarde bij jouw adres hoort. Gebruik daarvoor onze <Link href="/waterhardheid" className="underline hover:text-ink">waterhardheid check</Link>, of kijk bij je eigen waterbedrijf, zoals <Link href="https://www.vitens.nl/over-water/hardheid-water" className="underline hover:text-ink">Vitens</Link>. Dat is een gemiddelde voor jouw gebied. Je eigen kraan kan er een beetje van afwijken.
            </p>
            <TussenCta titel="Weten wat het water op jouw adres doet?">
              Vul je postcode en huisnummer in en zie direct de hardheid van het water in jouw gebied, in °dH, °fH en mmol/l.
            </TussenCta>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">De uitslag</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zo lees je de uitslag: zacht, gemiddeld of hard?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              In Nederland meten we in Duitse graden (°dH). Op sommige verpakkingen staan Franse graden (°fH) of millimol per liter. De omrekening is eenvoudig: 1 mmol/l is 5,6 °dH en 10 °fH. Onderstaande indeling is die van Waterbedrijf Groningen.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-surface text-ink"><tr><th scope="col" className="px-4 py-3 font-semibold">Klasse</th><th scope="col" className="px-4 py-3 font-semibold">°dH</th><th scope="col" className="px-4 py-3 font-semibold">°fH</th><th scope="col" className="px-4 py-3 font-semibold">mmol/l</th><th scope="col" className="px-4 py-3 font-semibold">Wat merk je?</th></tr></thead>
                <tbody>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">Zeer zacht</td><td className="px-4 py-3 align-top text-dim">0 tot 4</td><td className="px-4 py-3 align-top text-dim">0 tot 7</td><td className="px-4 py-3 align-top text-dim">0 tot 0,7</td><td className="px-4 py-3 align-top text-dim">Zeldzaam in Nederlands kraanwater.</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">Zacht</td><td className="px-4 py-3 align-top text-dim">4 tot 8</td><td className="px-4 py-3 align-top text-dim">7 tot 14</td><td className="px-4 py-3 align-top text-dim">0,7 tot 1,4</td><td className="px-4 py-3 align-top text-dim">Het meeste Nederlandse kraanwater valt hier of net daarboven.</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">Gemiddeld</td><td className="px-4 py-3 align-top text-dim">8 tot 12</td><td className="px-4 py-3 align-top text-dim">14 tot 21</td><td className="px-4 py-3 align-top text-dim">1,4 tot 2,1</td><td className="px-4 py-3 align-top text-dim">Kalk in waterkoker en douche zie je regelmatig.</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">Vrij hard</td><td className="px-4 py-3 align-top text-dim">12 tot 18</td><td className="px-4 py-3 align-top text-dim">21 tot 32</td><td className="px-4 py-3 align-top text-dim">2,1 tot 3,2</td><td className="px-4 py-3 align-top text-dim">Apparaten verkalken snel.</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">Hard</td><td className="px-4 py-3 align-top text-dim">18 en hoger</td><td className="px-4 py-3 align-top text-dim">32 en hoger</td><td className="px-4 py-3 align-top text-dim">3,2 en hoger</td><td className="px-4 py-3 align-top text-dim">Komt volgens Waterbedrijf Groningen in Nederland niet voor.</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-dim leading-relaxed">
              Meet je thuis meer dan 18 °dH, dan klopt de test waarschijnlijk niet, of je water komt niet van het openbare net. Herhaal de meting en vraag het je waterbedrijf.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Betrouwbaar meten</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zo voorkom je een foute uitslag</h2>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Meet koud water.</strong> Warm water uit de boiler of cv-ketel geeft een andere uitslag, omdat kalk bij verwarmen neerslaat.</li>
              <li><strong className="text-ink">Laat de kraan lopen.</strong> Water dat een nacht in de leidingen stond, kan afwijken. Een halve minuut is genoeg.</li>
              <li><strong className="text-ink">Gebruik een schoon buisje of glas.</strong> Zeepresten of kalk in het glas vervalsen de kleur.</li>
              <li><strong className="text-ink">Controleer de houdbaarheid.</strong> Testvloeistof en strips verlopen. Een oude set geeft vage kleuren.</li>
              <li><strong className="text-ink">Meet bij de keukenkraan.</strong> Heb je een waterfilter of osmosesysteem onder het aanrecht, test dan ook het water uit de gewone kraan. Dat is wat je apparaten en je douche krijgen.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Heb je een TDS-meter? Die meet alle opgeloste stoffen samen, niet alleen kalk. Het is dus geen hardheidstest, maar het is handig om te zien of een filter werkt. Meer daarover lees je bij <Link href="/kennisbank/wat-is-ro-water" className="underline hover:text-ink">wat is RO-water</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">En nu?</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat betekent je uitslag in de praktijk?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Weet je de hardheid, dan kun je er direct iets mee:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Vaatwasser instellen.</strong> Bijna elke vaatwasser heeft een hardheidsinstelling. Zet die op de waarde die je gemeten hebt, zodat hij niet te veel of te weinig regenereerzout gebruikt.</li>
              <li><strong className="text-ink">Wasmiddel doseren.</strong> Op de verpakking staat een dosering per hardheid. Bij zacht water heb je minder nodig.</li>
              <li><strong className="text-ink">Ontkalkschema bepalen.</strong> Hoe harder het water, hoe vaker de waterkoker en het koffiezetapparaat aan de beurt zijn. Zie <Link href="/kennisbank/waterkoker-ontkalken" className="underline hover:text-ink">waterkoker ontkalken</Link> en <Link href="/kennisbank/kalkaanslag-in-huis" className="underline hover:text-ink">kalkaanslag in huis</Link>.</li>
              <li><strong className="text-ink">Kalk uit je drinkwater houden.</strong> Wil je geen kalk in koffie, thee en soep, dan haalt een <Link href="/osmose-waterfilter" className="underline hover:text-ink">osmose waterfilter</Link> onder het aanrecht de kalk uit het water dat je drinkt en gebruikt voor koken.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Wil je ook weten wat er verder in je water zit, zoals lood, PFAS of bacteriën? Dan is een hardheidstest niet genoeg. Lees dan <Link href="/kennisbank/drinkwater-laten-testen" className="underline hover:text-ink">drinkwater laten testen</Link>.
            </p>
          </div>
        </section>


        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over waterhardheid testen</h2>
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
            <div className="mt-12">
              <p className="font-display font-bold text-ink">Bronnen</p>
              <ul className="mt-3 space-y-1 text-sm text-dim list-disc pl-5">
                <li><a href="https://waterbedrijfgroningen.nl/over-drinkwater/hardheid-van-drinkwater/" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Waterbedrijf Groningen: hardheid van drinkwater</a></li>
                <li><a href="https://www.vitens.nl/over-water/hardheid-water" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Vitens: hardheid van water</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Weet je ook hoe hard jouw kraanwater is?</h2>
            <p className="mt-4 text-white/70">Vul je postcode en huisnummer in en zie direct de waterhardheid op jouw adres.</p>
            <Link href="/waterhardheid" className="cursor-pointer mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25">
              Doe de waterhardheid check
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
