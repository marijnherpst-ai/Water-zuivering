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
  alternates: { canonical: '/kennisbank/waterfilter-zelf-maken' },
  title: "Waterfilter zelf maken: stappenplan en wat het niet kan",
  description:
    "Een waterfilter zelf maken met een petfles, zand en actieve kool? Zo doe je het, wat het wel en niet verwijdert en waarom je het water daarna moet koken.",
  openGraph: {
    title: "Waterfilter zelf maken: stappenplan en wat het niet kan",
    description: "Een waterfilter zelf maken van een petfles, grind, zand en actieve kool. Wat het filtert, wat niet, en hoe je daarna wel veilig drinkwater krijgt.",
    url: 'https://www.water-zuivering.nl/kennisbank/waterfilter-zelf-maken',
    images: ['/assets/img/een-kraan.jpg'],
  },
};

const FAQ = [
  ['Kun je een waterfilter zelf maken?', 'Ja, met een petfles, grind, zand, actieve kool en een koffiefilter. Het filter haalt grof vuil weg. Het maakt het water niet vanzelf veilig om te drinken.'],
  ['Is water uit een zelfgemaakt filter veilig om te drinken?', 'Niet zonder het te koken. Een zelfgemaakt filter houdt geen bacteriën, virussen of parasieten tegen. Kook het water daarom altijd nog voordat je het drinkt.'],
  ['Hoe maak je een waterfilter met een petfles?', 'Knip de fles doormidden, draai de bovenste helft om als trechter, leg onderin een koffiefilter, daarna actieve kool, zand en grind. Giet langzaam water door en gooi het eerste water weg.'],
  ['Wat doet actieve kool in een waterfilter?', 'Actieve kool houdt chloor en stoffen die smaak en geur geven vast. Het haalt geen bacteriën of kalk uit het water.'],
  ['Haalt een zelfgemaakt filter PFAS of medicijnresten uit het water?', 'Nauwelijks. Daarvoor is een fijner filter nodig, zoals een omgekeerde-osmosemembraan. Een zelfgemaakt filter pakt vooral grof vuil aan.'],
  ['Hoe lang kun je een zelfgemaakt waterfilter gebruiken?', 'Gebruik het één keer en gooi de lagen daarna weg. Een nat filter kan kiemen laten groeien, dus bewaar het niet.'],
  ['Wat is beter: een zelfgemaakt filter of een gekocht filter?', 'Een gekocht filter, met een gecontroleerde werking. Een zelfgemaakt filter is geschikt als experiment of als voorfilter, niet voor dagelijks drinkwater.'],
  ['Hoe zuiver ik water in een noodsituatie?', 'Haal eerst het grove vuil eruit, bijvoorbeeld met een doek of een zelfgemaakt filter. Kook het water daarna goed door, of gebruik een noodfilter of zuiveringstabletten.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Waterfilter zelf maken: stappenplan en wat het niet kan"
        description="Een waterfilter zelf maken van een petfles, grind, zand en actieve kool. Wat het filtert, wat niet, en hoe je daarna wel veilig drinkwater krijgt."
        image="https://www.water-zuivering.nl/assets/img/een-kraan.jpg"
        url="https://www.water-zuivering.nl/kennisbank/waterfilter-zelf-maken"
        datePublished="2026-11-23"
        dateModified="2026-11-23"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: "Waterfilter zelf maken", url: 'https://www.water-zuivering.nl/kennisbank/waterfilter-zelf-maken' },
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
              Waterfilter zelf maken: stappenplan en wat het niet kan
            </h1>
            <p className="mt-5 text-dim text-lg">
              Met een petfles, wat zand en actieve kool maak je in een kwartier een <strong className="text-ink">waterfilter</strong>. Het is een leuk experiment en handig om vuil uit water te halen. Maar het maakt water niet vanzelf veilig om te drinken. Hier lees je hoe je het filter maakt, wat het wel en niet doet en wat je ermee kunt.
            </p>
            <KortAntwoord bron={{ naam: "Waterbedrijf Groningen: drinkwater in het noodpakket", url: "https://waterbedrijfgroningen.nl/over-drinkwater/drinkwater-in-het-noodpakket" }}>
              Een zelfgemaakt waterfilter van een petfles, grind, zand en actieve kool haalt grof vuil en troebelheid weg. Het verwijdert geen bacteriën, virussen, PFAS of medicijnresten en haalt geen kalk uit het water. Water uit zo’n filter moet je dus altijd nog koken voordat je het drinkt.
            </KortAntwoord>
            <AuteurRegel bijgewerkt="23 november 2026" />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Spullen</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat heb je nodig om een waterfilter te maken?</h2>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li>Een lege plastic fles van 1,5 liter</li>
              <li>Een schaar of stanleymes</li>
              <li>Een koffiefilter, een schone doek of watten</li>
              <li>Actieve kool, bijvoorbeeld uit een dierenwinkel of tuincentrum</li>
              <li>Schoon, gewassen zand</li>
              <li>Fijn en grof grind</li>
              <li>Een glas of kan om het water in op te vangen</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Gebruik geen zand en grind uit de tuin zonder het eerst goed te wassen. Er zit vuil, mest en kiemen in, en dat komt anders in je water.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Stappenplan</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zo maak je het filter in zes stappen</h2>
            <ol className="mt-4 space-y-2 text-dim leading-relaxed list-decimal pl-5">
              <li><strong className="text-ink">Knip de fles doormidden.</strong> Draai de bovenste helft om, zodat de hals naar beneden wijst en het een trechter wordt.</li>
              <li><strong className="text-ink">Maak de onderste laag.</strong> Stop een koffiefilter of een laagje watten in de hals. Dat houdt de rest tegen.</li>
              <li><strong className="text-ink">Voeg de actieve kool toe.</strong> Een laag van enkele centimeters. Spoel de kool vooraf met schoon water om stof weg te halen.</li>
              <li><strong className="text-ink">Leg het zand erop.</strong> Weer enkele centimeters, het fijnste zand eerst.</li>
              <li><strong className="text-ink">Maak de bovenste laag.</strong> Eerst fijn grind, dan grof grind. Dat vangt de grootste stukken vuil.</li>
              <li><strong className="text-ink">Giet langzaam water erdoor.</strong> Het eerste water dat eruit komt, is troebel door de kool. Gooi dat weg en vang daarna het water op.</li>
            </ol>
            <p className="mt-4 text-dim leading-relaxed">
              Het filter werkt van boven naar beneden: eerst het grove vuil, dan het fijne, dan de actieve kool. Hoe langzamer het water erdoor gaat, hoe beter het resultaat.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">De waarheid</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat verwijdert een zelfgemaakt waterfilter wel en niet?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Dit is waar de meeste handleidingen te vrolijk over doen. Zo zie je het naast een filter dat je koopt en een osmose waterfilter:
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-surface text-ink"><tr><th scope="col" className="px-4 py-3 font-semibold">Wat zit er in het water?</th><th scope="col" className="px-4 py-3 font-semibold">Zelfgemaakt filter</th><th scope="col" className="px-4 py-3 font-semibold">Gekocht koolfilter</th><th scope="col" className="px-4 py-3 font-semibold">Osmose waterfilter</th></tr></thead>
                <tbody>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">Grof vuil, zand, bladeren</td><td className="px-4 py-3 align-top text-dim">Ja</td><td className="px-4 py-3 align-top text-dim">Ja</td><td className="px-4 py-3 align-top text-dim">Ja</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">Troebel water</td><td className="px-4 py-3 align-top text-dim">Deels</td><td className="px-4 py-3 align-top text-dim">Deels</td><td className="px-4 py-3 align-top text-dim">Ja</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">Chloor, smaak en geur</td><td className="px-4 py-3 align-top text-dim">Deels, met veel kool</td><td className="px-4 py-3 align-top text-dim">Ja</td><td className="px-4 py-3 align-top text-dim">Ja</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">Kalk</td><td className="px-4 py-3 align-top text-dim">Nee</td><td className="px-4 py-3 align-top text-dim">Nauwelijks</td><td className="px-4 py-3 align-top text-dim">Ja</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">Bacteriën en virussen</td><td className="px-4 py-3 align-top text-dim">Nee</td><td className="px-4 py-3 align-top text-dim">Nee</td><td className="px-4 py-3 align-top text-dim">Niet bedoeld daarvoor</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">PFAS en medicijnresten</td><td className="px-4 py-3 align-top text-dim">Nauwelijks</td><td className="px-4 py-3 align-top text-dim">Deels</td><td className="px-4 py-3 align-top text-dim">Ja, tot 99%</td></tr>
                  <tr className="border-t border-edge"><td className="px-4 py-3 align-top font-semibold text-ink">Microplastics</td><td className="px-4 py-3 align-top text-dim">Alleen grove deeltjes</td><td className="px-4 py-3 align-top text-dim">Nauwelijks</td><td className="px-4 py-3 align-top text-dim">Ja</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-dim leading-relaxed">
              Het belangrijkste: een zelfgemaakt filter houdt geen bacteriën, virussen en parasieten tegen. Actieve kool kan er zelfs bacteriën laten groeien als het filter nat blijft staan. Wat eruit komt, is dus niet veilig om te drinken.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Veilig drinken</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe maak je het water daarna wel veilig?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Kook het gefilterde water. Koken pakt bacteriën, virussen en parasieten allemaal aan. Bij een kookadvies in Nederland adviseert waterbedrijf Vitens het water drie minuten te laten koken. Volg altijd de tijd die je eigen waterbedrijf noemt. Meer methodes, zoals zuiveringstabletten en een noodfilter, vergelijk je bij <Link href="/kennisbank/water-zuiveren-noodsituatie" className="underline hover:text-ink">water zuiveren in een noodsituatie</Link>.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Kook je niet, dan is het filter alleen bedoeld om het water voor te zuiveren. Heb je kraanwater in huis, dan is dat al veilig om te drinken. Waarom dat zo is, lees je bij <Link href="/kennisbank/is-kraanwater-veilig" className="underline hover:text-ink">is kraanwater veilig</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Waar is het goed voor?</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarvoor is een zelfgemaakt waterfilter wel handig?</h2>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Een experiment voor kinderen.</strong> Een goede manier om te laten zien hoe zand en kool vuil tegenhouden.</li>
              <li><strong className="text-ink">Voorfilter voor modderig water.</strong> Haalt grof vuil weg voordat je het water kookt of door een noodfilter haalt.</li>
              <li><strong className="text-ink">Regenwater voor de tuin.</strong> Een grof filter houdt bladeren en slib uit je gieter of regenton.</li>
              <li><strong className="text-ink">Een voorfilter voor je eigen systeem.</strong> Alleen om vuil te weren, niet om water drinkbaar te maken.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Voor dagelijks drinkwater is het geen goed idee om te vertrouwen op iets dat je zelf maakt. Wil je kraanwater filteren op PFAS, medicijnresten of kalk, dan heb je een echt systeem nodig. Lees dan <Link href="/kennisbank/kraanwater-filteren" className="underline hover:text-ink">kraanwater filteren</Link> of bekijk welk <Link href="/drinkwater-filter" className="underline hover:text-ink">drinkwater filter</Link> bij welk probleem past.
            </p>
            <TussenCta titel="Zuiver drinkwater zonder gedoe">
              Een osmosesysteem onder je aanrecht filtert je kraanwater direct terwijl je tapt, zonder opslagtank en zonder dat je zelf iets hoeft te bouwen.
            </TussenCta>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Veelgemaakte fouten</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zo gaat het vaak mis met een zelfgemaakt filter</h2>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Het water drinken zonder koken.</strong> Dit is de grootste fout. Je ziet helder water, maar de bacteriën zie je niet.</li>
              <li><strong className="text-ink">Het filter laten staan.</strong> Een nat filter is een broedplaats voor kiemen. Gebruik het meteen en gooi de lagen daarna weg.</li>
              <li><strong className="text-ink">Onbehandeld zand of kool gebruiken.</strong> Wasbaar zand en schone kool voorkomen dat je er zelf vuil in doet.</li>
              <li><strong className="text-ink">Te snel gieten.</strong> Het water moet de tijd krijgen om door de lagen te zakken.</li>
            </ul>
          </div>
        </section>


        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over een waterfilter zelf maken</h2>
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
                <li><a href="https://waterbedrijfgroningen.nl/over-drinkwater/drinkwater-in-het-noodpakket" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Waterbedrijf Groningen: drinkwater in het noodpakket</a></li>
                <li><a href="https://www.voedingscentrum.nl/encyclopedie/water.aspx" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Voedingscentrum: water</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zuiver drinkwater uit je eigen kraan</h2>
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
