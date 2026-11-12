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
import TussenCta from '@/components/TussenCta';

export const metadata = {
  alternates: { canonical: '/kennisbank/waterfles-met-filter' },
  title: 'Waterfles met filter: wat haalt hij uit je water?',
  description:
    'Wat doet een waterfles met filter echt? Koolfilter of membraan, wat ze tegenhouden (en wat niet), hoe lang een filter meegaat en wanneer je er iets aan hebt.',
  openGraph: {
    title: 'Waterfles met filter: wat haalt hij uit je water?',
    description: 'Koolfilter of membraan: wat een filterfles wel en niet uit je water haalt, hoe lang hij meegaat en wanneer hij zin heeft.',
    url: 'https://www.water-zuivering.nl/kennisbank/waterfles-met-filter',
    images: ['/assets/img/filters-closeup.png'],
  },
};

const SOORTEN = [
  ['Actieve-koolfilter', 'Een staafje of schijfje met actieve kool in de dop of het rietje.', 'Smaak, geur en chloor. Volgens sommige fabrikanten ook een deel van lood en bepaalde PFAS.', 'Bacteriën en virussen, de kleinste PFAS (zoals TFA), kalk'],
  ['Membraanfilter (holle vezel, ultrafiltratie)', 'Een bundel holle vezels met hele kleine poriën. Bedoeld voor water uit beken en meren.', 'Bacteriën, parasieten en troebelheid', 'Opgeloste stoffen zoals PFAS, medicijnresten en kalk'],
  ['Combinatiefilter', 'Een membraan plus actieve kool, soms met een extra laag.', 'Een combinatie van beide, afhankelijk van het merk', 'Meestal opgeloste stoffen zoals kalk en de kleinste PFAS'],
];

const FAQ = [
  ['Wat doet een waterfles met filter?', 'Dat hangt af van het filter. Een fles met actieve kool verbetert vooral de smaak en geur en haalt chloor weg. Een fles met een membraanfilter houdt bacteriën en parasieten tegen, voor water uit de natuur. Geen van beide maakt van water zonder meer puur water: opgeloste stoffen als kalk en de kleinste PFAS gaan er grotendeels doorheen.'],
  ['Heb je een waterfles met filter nodig in Nederland?', 'Voor kraanwater niet. Nederlands kraanwater is veilig en wordt streng gecontroleerd. Het Voedingscentrum noemt een waterfilter zonde van het geld en waarschuwt dat een filter het water zelfs onveilig kan maken als je het niet op tijd vervangt. Een filterfles is vooral handig op reis of in de natuur.'],
  ['Haalt een filterfles PFAS uit water?', 'Hooguit een deel. Actieve kool houdt sommige PFAS vast, maar niet de kleinste zoals TFA, en dat werkt maar een beperkte tijd. Volgens experts die de Consumentenbond sprak, kan een filter dat te lang wordt gebruikt eerder opgenomen PFAS zelfs weer afgeven.'],
  ['Hoe lang gaat het filter in een waterfles mee?', 'Dat verschilt per merk. Water-to-Go geeft bijvoorbeeld ongeveer 200 liter op; bij 2 liter per dag is dat zo’n 100 dagen. Berkey adviseert het filter van de Sport Berkey te vervangen na 640 vullingen met leidingwater. Houd de opgave van de fabrikant aan, en vervang eerder als het water anders gaat smaken.'],
  ['Kun je met een filterfles water uit een sloot of beek drinken?', 'Alleen met een fles die daarvoor gemaakt is: met een membraanfilter dat bacteriën en parasieten tegenhoudt. Een fles met alleen actieve kool is daar niet voor bedoeld. Chemische vervuiling, zoals van landbouw of industrie, filtert ook een membraanfles er niet uit.'],
  ['Kun je een waterfles met filter in de vaatwasser doen?', 'De fles vaak wel, het filter meestal niet. Haal het filter er altijd uit voordat je de fles wast, en gebruik geen heet water op het filter. Kijk in de handleiding van jouw fles.'],
  ['Wat is beter: een filterfles of een filter thuis?', 'Thuis drink je het meeste water. Wil je daar minder kalk, PFAS of medicijnresten in, dan is een systeem aan de kraan grondiger dan een flesje. Een filterfles is een handige aanvulling voor onderweg, vooral in landen waar je het kraanwater niet kunt drinken.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Waterfles met filter: wat haalt hij uit je water?"
        description="Koolfilter of membraan: wat een waterfles met filter wel en niet uit je water haalt, hoe lang het filter meegaat en wanneer het zin heeft."
        image="https://www.water-zuivering.nl/assets/img/filters-closeup.png"
        url="https://www.water-zuivering.nl/kennisbank/waterfles-met-filter"
        datePublished="2026-11-12"
        dateModified="2026-11-12"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Waterfles met filter', url: 'https://www.water-zuivering.nl/kennisbank/waterfles-met-filter' },
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
              Waterfles met filter: wat haalt hij uit je water?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Een <strong className="text-ink">waterfles met filter</strong> belooft schoon water, waar je ook bent. Maar een filterfles uit de sportwinkel doet iets heel anders dan een fles voor een trektocht. We leggen uit welke soorten er zijn, wat ze tegenhouden, hoe lang een filter meegaat en wanneer je er in Nederland echt iets aan hebt.
            </p>
            <KortAntwoord bron={{ naam: 'Voedingscentrum: water', url: 'https://www.voedingscentrum.nl/encyclopedie/water.aspx' }}>
              Een waterfles met koolfilter verbetert vooral smaak en geur. Een fles met membraanfilter houdt bacteriën en parasieten tegen, voor water uit de natuur. Kalk en de kleinste PFAS gaan er grotendeels doorheen. Voor Nederlands kraanwater is een filterfles niet nodig; op reis of buiten kan hij handig zijn.
            </KortAntwoord>
            <AuteurRegel bijgewerkt="12 november 2026" />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Soorten</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Welke filterflessen zijn er?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Bijna elke waterfles met filter valt in een van deze drie groepen. Kijk dus eerst wat voor filter erin zit, want daar hangt alles van af.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-surface text-ink">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Soort</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Hoe het werkt</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Houdt tegen</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Houdt niet tegen</th>
                  </tr>
                </thead>
                <tbody>
                  {SOORTEN.map((rij) => (
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
              Het grootste misverstand: een fles voor het sporten (actieve kool) is niet geschikt om water uit een beek te drinken, en een fles voor buiten (membraan) maakt je kraanwater thuis niet schoner. Lees dus altijd waar de fles voor bedoeld is.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat haalt een waterfles met filter wel en niet weg?</h2>
            <ul className="mt-5 space-y-3 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Smaak en geur:</strong> ja, bij een koolfilter. Dat is voor de meeste mensen de belangrijkste reden.</li>
              <li><strong className="text-ink">Chloor:</strong> ja, bij een koolfilter. Maar Nederlands kraanwater bevat geen chloor, dus thuis merk je daar weinig van. Lees meer in <Link href="/kennisbank/chloor-in-kraanwater" className="underline hover:text-ink">chloor in kraanwater</Link>.</li>
              <li><strong className="text-ink">Bacteriën en parasieten:</strong> alleen bij een membraanfilter dat daarvoor gemaakt is.</li>
              <li><strong className="text-ink">PFAS:</strong> hooguit een deel. KWR-onderzoeker Roberta Hofman zegt dat actieve kool ongeschikt is voor TFA, een van de kleinste PFAS. Andere PFAS houdt kool wel vast, &quot;maar dat gaat niet lang goed&quot;. Een vol filter kan opgenomen PFAS zelfs weer afgeven.</li>
              <li><strong className="text-ink">Kalk:</strong> nauwelijks. Kalk is opgelost in het water en gaat door de meeste flesfilters gewoon heen.</li>
              <li><strong className="text-ink">Medicijnresten en microplastics:</strong> fabrikanten claimen soms een vermindering, maar onafhankelijke Nederlandse tests van filterflessen hebben we niet gevonden.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              De Consumentenbond waarschuwde in oktober 2026 voor misleidende beloftes over waterfilters. De bond heeft zelf geen filters getest, dus wees voorzichtig met labels als &quot;Beste Koop&quot; in advertenties.
            </p>
            <div className="mt-8 relative rounded-3xl overflow-hidden border border-edge aspect-[16/9]">
              <Image src="/assets/img/filters-closeup.png" alt="Filterpatronen van dichtbij: wat een waterfles met filter wel en niet tegenhoudt" fill sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Levensduur</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe lang gaat een filter in een waterfles mee?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een flesfilter is klein, dus het raakt sneller vol dan je denkt. Twee voorbeelden van fabrikanten:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Water-to-Go:</strong> ongeveer 200 liter per filter. Bij 2 liter per dag is dat zo&apos;n 100 dagen.</li>
              <li><strong className="text-ink">Sport Berkey:</strong> vervangen na 640 vullingen met leidingwater, en eerder als de waterkwaliteit slechter is.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Vervang het filter op tijd. Een te oud filter werkt niet meer goed, en <strong className="text-ink">op een filter dat te lang blijft zitten kunnen bacteriën groeien</strong>. Dat schrijft ook het Voedingscentrum. Spoel de fles na gebruik om, laat hem open drogen en laat er geen water dagenlang in staan.
            </p>
            <TussenCta titel="Thuis zonder flesjes en patronen?">
              Een osmosesysteem onder het aanrecht filtert direct als je de kraan opendraait, en houdt ook kalk en PFAS tegen. Vul daarna gewoon je eigen fles.
            </TussenCta>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wanneer heb je er wel iets aan?</h2>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[
                ['Op reis', 'In veel landen kun je het kraanwater niet drinken. Een fles met membraanfilter scheelt dan veel plastic flessen.', '/kennisbank/kraanwater-buitenland', 'In welke landen kun je kraanwater drinken?'],
                ['Buiten en in de natuur', 'Voor water uit een beek of meer heb je een membraanfilter nodig, geen koolfilter.', '/kennisbank/water-zuiveren-noodsituatie', 'Water zuiveren als het erop aankomt'],
                ['Voor de smaak', 'Vind je het water ergens anders niet lekker, dan kan een koolfilter de smaak verbeteren.', '/kennisbank/beste-waterfilter-voor-thuis', 'Het beste waterfilter voor thuis'],
              ].map(([titel, tekst, href, link]) => (
                <div key={titel} className="reveal rounded-2xl card p-5">
                  <p className="font-display font-bold text-ink">{titel}</p>
                  <p className="mt-2 text-sm text-dim leading-relaxed">{tekst}</p>
                  <Link href={href} className="mt-3 inline-block text-sm font-semibold text-ink underline decoration-amber decoration-2 underline-offset-2 hover:text-amber-dark">{link}</Link>
                </div>
              ))}
            </div>
            <h2 className="mt-14 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waar let je op bij het kopen?</h2>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Welke stoffen zijn getest?</strong> Vraag welke stof wordt verwijderd en volgens welke norm dat is getest. &quot;Filtert PFAS&quot; zegt weinig zonder te weten welke.</li>
              <li><strong className="text-ink">Hoeveel liter gaat het filter mee?</strong> En waarop is dat aantal gebaseerd?</li>
              <li><strong className="text-ink">Wat kost een nieuw filter?</strong> Reken uit wat je per jaar kwijt bent.</li>
              <li><strong className="text-ink">Waar is hij voor gemaakt?</strong> Sporten en kraanwater, of trektochten en natuurwater?</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Hoe filterkannen zich verhouden tot een filterfles, lees je in <Link href="/kennisbank/wat-filtert-brita" className="underline hover:text-ink">wat filtert Brita?</Link>
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over een waterfles met filter</h2>
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
                <li><a href="https://www.voedingscentrum.nl/encyclopedie/water.aspx" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Voedingscentrum: water</a></li>
                <li><a href="https://www.drinkwaterplatform.nl/waterfilters-de-zin-en-onzin/" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Drinkwaterplatform: waterfilters, de zin en onzin (15 oktober 2026)</a></li>
                <li><a href="https://www.welingelichtekringen.nl/samenleving/een-waterfilterkan-tegen-pfas-vervang-je-het-filter-te-laat-dan-kan-er-juist-meer-pfas-in-je-water-zitten" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Welingelichte Kringen: Consumentenbond over waterfilters en PFAS (11 november 2026)</a></li>
                <li><a href="https://www.decathlon.nl/sport-accessoires/waterflessen-met-filter" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Decathlon: waterflessen met filter (levensduur Water-to-Go)</a></li>
                <li><a href="https://support.berkeywater.com/wp-content/uploads/2025/04/Montagehandleiding-Sport-Berkey-NL-V1-2025-8x11-1.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Berkey: montagehandleiding Sport Berkey (pdf)</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Gefilterd water direct uit je eigen kraan</h2>
            <p className="mt-4 text-white/70">Een osmosesysteem onder je aanrecht houdt kalk, PFAS en medicijnresten tegen, zonder opslagtank. Vul daarna gewoon je eigen fles. Vraag vrijblijvend een offerte aan.</p>
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
