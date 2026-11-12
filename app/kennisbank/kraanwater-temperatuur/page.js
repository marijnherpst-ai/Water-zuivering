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
  alternates: { canonical: '/kennisbank/kraanwater-temperatuur' },
  title: 'Kraanwater temperatuur: hoe koud is water uit de kraan?',
  description:
    'De temperatuur van kraanwater ligt meestal tussen 10 en 15 graden. Waarom het in de zomer warmer is, wat de wettelijke grens is en hoe je het kouder krijgt.',
  openGraph: {
    title: 'Kraanwater temperatuur: hoe koud is water uit de kraan?',
    description: 'Hoe koud of warm kraanwater is in de winter en zomer, waarom het verschilt en wat de grens van 25 graden betekent.',
    url: 'https://www.water-zuivering.nl/kennisbank/kraanwater-temperatuur',
    images: ['/assets/img/een-kraan.jpg'],
  },
};

const SEIZOEN = [
  ['Winter', 'Het koudst, vaak onder de 10 °C', 'De bodem rond de leidingen is afgekoeld. Water uit rivieren en meren is in de winter ook koud.'],
  ['Voorjaar en najaar', 'Rond 10 tot 15 °C', 'De bodem volgt de buitenlucht met een paar weken vertraging.'],
  ['Zomer', 'Vaak 15 tot 20 °C', 'De bodem is opgewarmd, vooral onder straten en pleinen in de stad.'],
  ['Hittegolf', 'Soms tot rond de 25 °C', 'Dit komt nu af en toe voor op warme plekken in het leidingnet. 25 °C is de wettelijke grens.'],
];

const OORZAKEN = [
  ['De bron', 'Grondwater komt van diep en heeft het hele jaar ongeveer dezelfde temperatuur. Water uit rivieren en meren is in de winter koud en in de zomer warm.'],
  ['De bodem rond de leiding', 'Waterleidingen liggen ongeveer 1 meter diep. Onderweg neemt het water de temperatuur van de bodem aan. Dat is de belangrijkste factor.'],
  ['Stad of groen', 'Onder asfalt en tegels wordt de bodem veel warmer dan onder gras en struiken. In een groene wijk is het kraanwater in de zomer koeler dan in het stadscentrum.'],
  ['Hoe ver je van de bron woont', 'Dicht bij het pompstation zijn de leidingen dik en stroomt het water snel. Verder weg worden de leidingen smaller, staat het water langer stil en warmt het meer op.'],
  ['De leidingen in je huis', 'Het laatste stukje telt ook mee. Water dat een nacht in de leidingen in huis heeft gestaan, is op kamertemperatuur. Daarom is het eerste water uit de kraan lauw.'],
];

const FAQ = [
  ['Hoe koud is kraanwater?', 'Koud kraanwater is in Nederland meestal tussen de 10 en 15 graden. In de winter is het kouder, in de zomer warmer. De temperatuur hangt vooral af van de bodem waar de waterleiding doorheen loopt.'],
  ['Hoe warm mag kraanwater maximaal zijn?', 'Koud drinkwater mag aan de kraan volgens de wet niet warmer zijn dan 25 graden. Boven die temperatuur neemt de kans op groei van bacteriën zoals legionella toe.'],
  ['Waarom is kraanwater in de zomer warmer?', 'Omdat de bodem opwarmt. Waterleidingen liggen ongeveer een meter diep, en het water neemt onderweg de temperatuur van de grond aan. Onder asfalt en in de volle zon wordt de bodem het warmst.'],
  ['Waarom is het eerste water uit de kraan lauw?', 'Dat water heeft een tijd stilgestaan in de leidingen in je huis en is daar op kamertemperatuur gekomen. Laat de kraan een paar tellen lopen tot het water koud aanvoelt. Dan komt het vers uit de leiding onder de straat.'],
  ['Hoe warm is warm water uit de kraan?', 'Dat hangt af van je boiler of combiketel. Het advies is om die op minstens 60 graden te zetten, zodat legionella geen kans krijgt. Uit de kraan komt het water dan iets koeler, omdat het onderweg afkoelt.'],
  ['Waarom voelt water van 20 graden koud aan?', 'Water voert warmte veel sneller af dan lucht. Je huid is ongeveer 32 graden. Lucht van 20 graden neemt maar langzaam warmte op, water van 20 graden doet dat veel sneller. Daardoor voelt het water kouder, terwijl de temperatuur gelijk is.'],
  ['Is lauw kraanwater in de zomer nog veilig om te drinken?', 'Ja. Zolang het water onder de 25 graden blijft, voldoet het aan de wet, en waterbedrijven controleren daarop. Laat de kraan na een warme dag even lopen. Dan krijg je vers en koeler water.'],
  ['Hoe krijg ik koud water uit de kraan in de zomer?', 'Laat de kraan even lopen en vang het eerste water op voor de planten. Zet een afgedekte kan water in de koelkast. Wil je altijd gekoeld water uit de kraan, dan heb je een koelunit nodig. Een gewoon waterfilter koelt niet.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Kraanwater temperatuur: hoe koud is water uit de kraan?"
        description="Hoe koud of warm kraanwater is per seizoen, waarom dat verschilt, wat de wettelijke grens van 25 graden betekent en hoe je het kouder krijgt."
        image="https://www.water-zuivering.nl/assets/img/een-kraan.jpg"
        url="https://www.water-zuivering.nl/kennisbank/kraanwater-temperatuur"
        datePublished="2026-11-12"
        dateModified="2026-11-12"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Kraanwater temperatuur', url: 'https://www.water-zuivering.nl/kennisbank/kraanwater-temperatuur' },
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
              Kraanwater temperatuur: hoe koud is water uit de kraan?
            </h1>
            <p className="mt-5 text-dim text-lg">
              In januari krijg je er koude handen van, in augustus is het bijna lauw. De <strong className="text-ink">temperatuur van kraanwater</strong> verandert met de seizoenen, en dat heeft een simpele reden: de grond waar de waterleiding doorheen loopt. In dit artikel lees je hoe koud kraanwater is, hoe warm het mag worden en wat je doet als je het kouder wilt.
            </p>
            <KortAntwoord bron={{ naam: 'KWR: drinkwater en temperatuur', url: 'https://www.kwrwater.nl/projecten/drinkwater-klimaatbestendig/' }}>
              Koud kraanwater is in Nederland meestal 10 tot 15 graden. In de winter is het kouder, in de zomer warmer, omdat het water de temperatuur aanneemt van de bodem rond de leiding. Volgens de wet mag drinkwater aan de kraan niet warmer zijn dan 25 graden.
            </KortAntwoord>
            <AuteurRegel bijgewerkt="12 november 2026" />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Per seizoen</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe koud is kraanwater in de winter en de zomer?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Drinkwaterbedrijf Vitens houdt 10 à 15 graden aan als gewone temperatuur van koud kraanwater. Dat is een gemiddelde. Door het jaar heen schommelt het:
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-surface text-ink">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Periode</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Temperatuur kraanwater</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Waarom</th>
                  </tr>
                </thead>
                <tbody>
                  {SEIZOEN.map((rij) => (
                    <tr key={rij[0]} className="border-t border-edge">
                      {rij.map((cel, i) => (
                        <td key={i} className={`px-4 py-3 align-top ${i === 0 ? 'font-semibold text-ink' : i === 1 ? 'font-semibold text-amber-dark' : 'text-dim'}`}>{cel}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-dim leading-relaxed">
              De getallen zijn een indicatie en verschillen per regio en zelfs per straat. Wil je het precies weten? Laat de kraan een halve minuut lopen en houd er een keukenthermometer onder.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat bepaalt de temperatuur van kraanwater?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Waterbedrijven koelen of verwarmen het water niet. Ze hebben er ook weinig invloed op, schrijft wateronderzoeksinstituut KWR. De temperatuur waarmee het water bij jou uit de kraan komt, is het resultaat van de hele reis van bron tot kraan:
            </p>
            <div className="mt-6 space-y-3">
              {OORZAKEN.map(([titel, tekst], i) => (
                <div key={titel} className="reveal rounded-2xl card p-5 flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-amber text-ink font-display font-bold flex items-center justify-center">{i + 1}</span>
                  <div>
                    <h3 className="font-display font-bold text-ink">{titel}</h3>
                    <p className="mt-2 text-sm text-dim leading-relaxed">{tekst}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 relative rounded-3xl overflow-hidden border border-edge aspect-[16/9]">
              <Image src="/assets/img/een-kraan.jpg" alt="Keukenkraan: de temperatuur van kraanwater hangt af van de bodem rond de waterleiding" fill sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">De wet</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe warm mag kraanwater worden? De grens van 25 graden</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Voor koud drinkwater geldt in Nederland een wettelijke grens: aan de kraan mag het <strong className="text-ink">niet warmer zijn dan 25 °C</strong>. Die grens is er niet voor de smaak, maar voor de veiligheid. Boven de 25 graden neemt de kans toe dat bacteriën zoals legionella gaan groeien. Hoe dat werkt en wat je er thuis aan doet, lees je in <Link href="/kennisbank/legionella-voorkomen" className="underline hover:text-ink">legionella voorkomen</Link>.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Op dit moment komt het water alleen af en toe in de buurt van die grens, tijdens een hittegolf en op warme plekken in het leidingnet. KWR noemt die plekken hotspots: leidingen die in de volle zon liggen, onder asfalt of vlak bij een warmtebron zoals een warmtenet.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold">Wordt kraanwater warmer door het klimaat?</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Ja, en waterbedrijven houden daar rekening mee. Warmere zomers betekenen een warmere bodem. Daar komt bij dat de ondergrond steeds voller raakt met stroomkabels en warmtenetten, die ook warmte afgeven. Volgens KWR is te warm drinkwater nu hooguit een incident, maar kan dat rond 2050 een aantal weken per jaar worden als er niets gebeurt.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Drinkwaterbedrijf PWN heeft dat voor Noord-Holland doorgerekend. Zonder maatregelen wordt daar in de toekomst in 12 procent van de leidingen de 25 graden overschreden. Oplossingen zijn er ook: leidingen dieper leggen, meer groen boven de leidingen, afstand houden tot warmtenetten of de warmte uit het water halen en opnieuw gebruiken. Opvallend genoeg helpt een groene straat dus ook voor je drinkwater.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom is het eerste water uit de kraan lauw?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Het water dat als eerste uit de kraan komt, heeft in de leidingen in je huis gestaan. Die lopen door verwarmde ruimtes, soms vlak langs de cv-leiding of de vloerverwarming. Na een nacht of een werkdag is dat water op kamertemperatuur. Laat de kraan lopen tot het water duidelijk kouder aanvoelt. Dan heb je vers water uit de leiding onder de straat.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Dat even laten lopen is ook om een andere reden verstandig. Water dat lang in de leiding heeft gestaan, kan wat metaal uit kranen en leidingen hebben opgenomen. Vooral in oude huizen is dat iets om op te letten. Meer daarover lees je in <Link href="/kennisbank/loden-leidingen" className="underline hover:text-ink">loden leidingen</Link>. Het eerste water kun je opvangen voor de planten.
            </p>

            <h2 className="mt-12 font-display text-2xl md:text-3xl font-extrabold tracking-tight">En warm water: hoe heet komt het uit de kraan?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Warm water is een ander verhaal. Dat komt uit je boiler of combiketel. Het RIVM adviseert om die op minstens 60 graden te zetten, omdat legionella boven die temperatuur doodgaat. Warm water is bedoeld om mee te wassen en te douchen. Om te drinken en te koken gebruik je koud water uit de kraan en verwarm je dat zelf. Waarom dat zo is, staat in <Link href="/kennisbank/is-kraanwater-veilig" className="underline hover:text-ink">is kraanwater veilig?</Link>
            </p>

            <h2 className="mt-12 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom voelt water van 20 graden zo koud?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              In een kamer van 20 graden zit je prima, maar water van 20 graden voelt fris tot koud. Het verschil zit in hoe snel warmte wegstroomt. Je huid is ongeveer 32 graden. Water voert warmte ruim twintig keer sneller af dan lucht. Je hand verliest in water dus veel sneller warmte, en dat voelt als kou. Daarom voelt kraanwater van 12 graden in de winter ijskoud, terwijl het ruim boven het vriespunt is.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Praktisch</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Kouder kraanwater in de zomer: wat werkt?</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                ['Laat de kraan even lopen', 'Een paar tellen is meestal genoeg om het lauwe water uit de leidingen in huis kwijt te raken. Vang het op in een gieter.'],
                ['Kan in de koelkast', 'Een afgedekte kan kraanwater blijft in de koelkast 3 dagen tot een week goed en is altijd koud.'],
                ['IJsblokjes of een bevroren fles', 'Vul een fles voor driekwart, vries hem in en vul hem bij met kraanwater. Zo heb je de hele dag koud water mee.'],
                ['Een koelunit of waterkoeler', 'Wil je echt gekoeld water uit een kraan, dan heb je een toestel met koeling nodig. Dat is een aparte aanschaf.'],
              ].map(([titel, tekst]) => (
                <div key={titel} className="reveal rounded-2xl card p-5">
                  <h3 className="font-display font-bold text-ink">{titel}</h3>
                  <p className="mt-2 text-sm text-dim leading-relaxed">{tekst}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-dim leading-relaxed">
              Hoe lang je water in de koelkast kunt laten staan, lees je in <Link href="/kennisbank/kraanwater-bewaren" className="underline hover:text-ink">kraanwater bewaren</Link>. De verschillende manieren om thuis gekoeld water te tappen staan naast elkaar in <Link href="/kennisbank/waterkoeler-thuis" className="underline hover:text-ink">waterkoeler thuis</Link>.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold">Koelt een waterfilter het water?</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Nee. Een waterfilter verandert de temperatuur niet. Ook ons osmosesysteem levert gefilterd water op de temperatuur waarmee het uit de leiding komt. Het is geen koeler en het maakt ook geen warm of kokend water. Wat het wel doet: kalk, PFAS, medicijnresten en microplastics tegenhouden in het water dat je drinkt.
            </p>
            <TussenCta titel="Koud en gefilterd water uit je eigen kraan">
              Ons osmosesysteem filtert koud kraanwater direct terwijl je tapt, zonder opslagtank. Je krijgt het dus altijd vers, op kraantemperatuur.
            </TussenCta>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over de temperatuur van kraanwater</h2>
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
                <li><a href="https://www.kwrwater.nl/projecten/drinkwater-klimaatbestendig/" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">KWR: drinkwater en temperatuur, niet te koud, niet te warm, maar precies goed</a></li>
                <li><a href="https://www.pwn.nl/onderzoek/opwarming-drinkwater" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">PWN: onderzoek naar opwarming van het drinkwater</a></li>
                <li><a href="https://www.rivm.nl/legionella" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">RIVM: legionella (boiler op minstens 60 graden)</a></li>
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
