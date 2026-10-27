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
  alternates: { canonical: '/kennisbank/kraanwater-babyvoeding' },
  title: 'Kraanwater voor babyvoeding: koken of niet?',
  description:
    'Kraanwater voor babyvoeding: mag het koud uit de kraan, moet je het koken en wanneer kies je flessenwater? Met het advies van het Voedingscentrum.',
  openGraph: {
    title: 'Kraanwater voor babyvoeding: koken of niet?',
    description: 'Zo maak je flesvoeding veilig klaar met kraanwater, en in welke situaties je beter flessenwater gebruikt.',
    url: 'https://www.water-zuivering.nl/kennisbank/kraanwater-babyvoeding',
    images: ['/assets/img/glas-water.webp'],
  },
};

const STAPPEN = [
  ['Was je handen', 'En zorg dat fles en speen goed schoon zijn.'],
  ['Vul de fles met koud kraanwater', 'Gebruik de hoeveelheid die op de verpakking van de kunstvoeding staat. Koken is in Nederland niet nodig. Doe er nog geen poeder in.'],
  ['Verwarm het water tot 30 à 35 °C', 'Met een flessenwarmer, in een pannetje warm (niet kokend) water, of in de magnetron op maximaal 600 watt. Zwenk de fles tussendoor en aan het eind, zodat de warmte goed verdeeld is.'],
  ['Voeg het poeder toe', 'Gebruik het schepje uit de verpakking. Geen extra schepje en geen schepje met een kop erop.'],
  ['Schud en controleer de temperatuur', 'Schud rustig tot het poeder is opgelost. Drup een beetje op de binnenkant van je pols: ongeveer even warm als je huid is goed.'],
  ['Maximaal een half uur drinken', 'Laat je kindje niet langer dan een half uur doen over een fles. Wat over is, gooi je weg.'],
];

const MAGNETRON = [
  ['90 ml', '25 seconden'],
  ['120 ml', '35 seconden'],
  ['150 ml', '45 seconden'],
  ['180 ml', '55 seconden'],
];

const FAQ = [
  ['Kan je babyvoeding maken met kraanwater?', 'Ja. Volgens het Voedingscentrum is koud kraanwater in Nederland veilig voor flesvoeding, ook als je het niet kookt. De uitzondering is een huis met loden leidingen; gebruik dan flessenwater dat geschikt is voor babyvoeding.'],
  ['Moet je kraanwater koken voor flesvoeding?', 'Nee, in Nederland niet. Op de verpakking van kunstvoeding staat vaak dat je het water moet koken, maar dat advies is bedoeld voor landen waar kraanwater minder veilig is. Het Voedingscentrum zegt dat ongekookt koud kraanwater hier veilig is.'],
  ['Waarom geen warm water uit de kraan voor flesvoeding?', 'Warm water uit de kraan heeft vaak langer in een boiler of leidingen gestaan en kan meer metaal uit leidingen bevatten. Begin daarom altijd met koud kraanwater en verwarm het zelf tot 30 à 35 graden.'],
  ['Welk flessenwater is geschikt voor babyvoeding?', 'Kijk op het etiket. Daarop staat of het water geschikt is voor de bereiding van babyvoeding. Is dat niet vermeld, gebruik het dan niet voor de fles.'],
  ['Mag je flesvoeding van tevoren klaarmaken?', 'Ja, maximaal 2 flessen. Sla het verwarmen over, zet ze meteen achter in de koelkast op 4 °C en gebruik ze binnen 8 uur. Restjes gooi je weg.'],
  ['Wat als ik nieuwe leidingen of een nieuwe kraan heb?', 'Laat de kraan dan eerst doorstromen voordat je het water voor de fles gebruikt. Bij alleen een nieuwe kraan is ongeveer 10 seconden genoeg; bij nieuwe leidingen ongeveer 1 liter per 5 meter leiding. Dit geldt de eerste drie maanden.'],
  ['Kan ik osmosewater of gefilterd water gebruiken voor de fles?', 'Daar is geen officieel advies over. Het Voedingscentrum gaat uit van gewoon koud kraanwater. Gebruik je toch een filter, vervang de filters dan op tijd, want een filter dat te lang blijft zitten kan bacteriegroei geven. Overleg bij twijfel met het consultatiebureau.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Kraanwater voor babyvoeding: zo maak je de fles veilig klaar"
        description="Mag je kraanwater gebruiken voor flesvoeding, moet je het koken en wanneer kies je flessenwater? Het advies van het Voedingscentrum op een rij."
        image="https://www.water-zuivering.nl/assets/img/glas-water.webp"
        url="https://www.water-zuivering.nl/kennisbank/kraanwater-babyvoeding"
        datePublished="2026-10-27"
        about={{ '@type': 'Thing', name: 'Zuigelingenvoeding', sameAs: 'https://nl.wikipedia.org/wiki/Zuigelingenvoeding' }}
        mentions={[{ '@type': 'Organization', name: 'Voedingscentrum', url: 'https://www.voedingscentrum.nl' }]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Kraanwater voor babyvoeding', url: 'https://www.water-zuivering.nl/kennisbank/kraanwater-babyvoeding' },
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
              Kraanwater voor babyvoeding: zo maak je de fles veilig klaar
            </h1>
            <p className="mt-5 text-dim text-lg">
              Op het blik kunstvoeding staat dat je het water moet koken. Je kraamverzorgster zegt dat het niet hoeft. Wat klopt er? Hier lees je wat het Voedingscentrum adviseert over <strong className="text-ink">kraanwater voor babyvoeding</strong>, wanneer je beter flessenwater gebruikt en hoe je de fles stap voor stap klaarmaakt.
            </p>
            <KortAntwoord bron={{ naam: 'Voedingscentrum: Flesvoeding klaarmaken (2024)', url: 'https://www.voedingscentrum.nl/Assets/Uploads/voedingscentrum/Documents/Consumenten/Mijn%20kind%20en%20ik/Flesvoeding/Flesvoeding_2024.pdf' }}>
              In Nederland mag je flesvoeding maken met koud kraanwater, zonder het eerst te koken. Dat zegt het Voedingscentrum. Gebruik geen warm water uit de kraan. Heb je loden leidingen, neem dan flessenwater waarvan op het etiket staat dat het geschikt is voor babyvoeding. Bij nieuwe leidingen of kranen laat je de kraan eerst even doorstromen.
            </KortAntwoord>
            <AuteurRegel />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Mag je kraanwater gebruiken voor flesvoeding?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Ja. Nederlands kraanwater wordt streng gecontroleerd en is ook voor baby&apos;s veilig. Het Voedingscentrum schrijft letterlijk dat koud kraanwater <strong className="text-ink">ook ongekookt veilig</strong> is voor je kindje.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Waarom staat er dan op de verpakking dat je het water moet koken? Kunstvoeding wordt in veel landen verkocht, ook in landen waar kraanwater bacteriën kan bevatten. De tekst op het blik is vaak daarop afgestemd. In Nederland is koken niet nodig.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Wil je weten hoe streng ons drinkwater wordt gecontroleerd? Lees dan <Link href="/kennisbank/is-kraanwater-veilig" className="underline hover:text-ink">is kraanwater veilig?</Link> en onze uitleg over de <Link href="/kennisbank/drinkwaternormen-nederland" className="underline hover:text-ink">drinkwaternormen in Nederland</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Stap voor stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Flesvoeding klaarmaken met kraanwater</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Dit is het stappenplan van het Voedingscentrum voor kraanwater voor babyvoeding, in het kort.
            </p>
            <ol className="mt-8 space-y-4">
              {STAPPEN.map(([titel, uitleg], i) => (
                <li key={titel} className="reveal card rounded-2xl p-5 flex gap-4">
                  <span className="shrink-0 w-9 h-9 rounded-full bg-amber text-ink font-display font-extrabold flex items-center justify-center">{i + 1}</span>
                  <div>
                    <h3 className="font-display font-bold text-ink">{titel}</h3>
                    <p className="mt-1 text-sm text-dim leading-relaxed">{uitleg}</p>
                  </div>
                </li>
              ))}
            </ol>
            <h3 className="mt-10 font-display text-xl font-bold text-ink">Opwarmtijden in de magnetron (600 watt)</h3>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-edge bg-white max-w-md">
              <table className="w-full text-sm text-left">
                <thead className="bg-amber/10 text-ink">
                  <tr>
                    <th scope="col" className="p-4 font-display font-bold">Fles</th>
                    <th scope="col" className="p-4 font-display font-bold">Tijd</th>
                  </tr>
                </thead>
                <tbody>
                  {MAGNETRON.map(([fles, tijd]) => (
                    <tr key={fles} className="border-t border-edge">
                      <th scope="row" className="p-4 font-semibold text-ink">{fles}</th>
                      <td className="p-4 text-dim">{tijd}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-dim leading-relaxed">
              Zwenk de fles altijd tussendoor en aan het eind. In de magnetron kan een deel van de melk anders veel heter worden dan de rest.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Uitzonderingen</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wanneer gebruik je geen kraanwater voor babyvoeding?</h2>
            <h3 className="mt-8 font-display text-xl font-bold text-ink">1. Bij loden leidingen</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Dit is de belangrijkste uitzondering. Lood is extra schadelijk voor baby&apos;s en jonge kinderen. Woon je in een huis van vóór 1960 en weet je niet zeker of de leidingen vervangen zijn, gebruik dan <strong className="text-ink">flessenwater dat geschikt is voor babyvoeding</strong>. Koken helpt niet: daarmee haal je geen lood uit het water. Hoe je loden leidingen herkent, lees je in <Link href="/kennisbank/loden-leidingen" className="underline hover:text-ink">loden leidingen: zo herken je ze</Link>.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold text-ink">2. Warm water uit de kraan</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Gebruik altijd koud kraanwater en warm het zelf op. Warm water uit de kraan heeft vaak langer in een boiler of in de leidingen gestaan en kan meer metaal uit de leidingen bevatten.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold text-ink">3. Na een storing, bruin water of een kookadvies</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Is het water troebel of bruin, of heeft je drinkwaterbedrijf een kookadvies gegeven, volg dan het advies van het waterbedrijf. Gebruik bij twijfel flessenwater voor de fles tot alles weer normaal is. Met onze <Link href="/storingen" className="underline hover:text-ink">storingen-check</Link> zie je of er in jouw buurt iets speelt. Meer over bruin water lees je in <Link href="/kennisbank/bruin-water-uit-de-kraan" className="underline hover:text-ink">bruin water uit de kraan</Link>.
            </p>
            <h3 className="mt-8 font-display text-xl font-bold text-ink">4. Nieuwe leidingen of een nieuwe kraan</h3>
            <p className="mt-3 text-dim leading-relaxed">
              De eerste drie maanden kunnen nieuwe leidingen en kranen wat metaal afgeven. Laat de kraan daarom eerst doorstromen: bij een nieuwe kraan ongeveer 10 seconden, bij nieuwe leidingen ongeveer 1 liter per 5 meter leiding. Daarna kun je het water gewoon gebruiken voor de fles.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Flessenwater voor babyvoeding: waar let je op?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Moet je flessenwater gebruiken, kijk dan altijd op het etiket. Daarop staat of het water <strong className="text-ink">geschikt is voor de bereiding van zuigelingenvoeding</strong>. Niet elk bron- of mineraalwater is dat. Staat het er niet op, gebruik het dan niet voor de fles.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Flessenwater is geen gezondere keuze dan kraanwater; het is een oplossing voor situaties waarin je kraanwater even niet kunt gebruiken. Benieuwd naar de verschillen? Lees <Link href="/kennisbank/kraanwater-vs-flessenwater" className="underline hover:text-ink">kraanwater vs. flessenwater</Link>.
            </p>
            <TussenCta titel="Maak je je zorgen over PFAS in het kraanwater bij jou?" pfasEerst>
              Kraanwater voldoet aan de wettelijke normen, maar het PFAS-gehalte verschilt per regio. Met de PFAS-check zie je in een paar seconden hoe het in jouw regio zit.
            </TussenCta>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/glas-water.webp" alt="Glas koud kraanwater voor babyvoeding" fill loading="eager" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Gefilterd water</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">En gefilterd water of osmosewater?</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Daar is geen officieel advies over. Het Voedingscentrum gaat uit van gewoon koud kraanwater, en kunstvoeding is daarop afgestemd. Je hoeft je water dus niet te filteren om veilig flesvoeding te maken.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Gebruik je thuis wel een filter, let dan op de hygiëne. Een filterkan of kraanfilter die te lang niet vervangen wordt, kan bacteriegroei geven. Bij een <Link href="/osmosesysteem" className="underline hover:text-ink">osmosesysteem</Link> geldt hetzelfde: vervang de filters op tijd. Twijfel je wat het beste is voor jouw baby, overleg dan met het consultatiebureau.
              </p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Flessen van tevoren maken en meenemen</h2>
            <ul className="mt-6 space-y-3 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Van tevoren:</strong> maak maximaal 2 flessen klaar en sla het opwarmen over. Zet ze meteen achter in de koelkast, op 4 °C, en gebruik ze binnen 8 uur.</li>
              <li><strong className="text-ink">Onderweg:</strong> neem geen klaargemaakte fles mee. Neem het poeder apart mee, bijvoorbeeld in een doseerdoosje, en gekookt water in een thermosfles. Dat koelt in een paar uur af tot warm water.</li>
              <li><strong className="text-ink">Te heet?</strong> Neem een flesje koud water mee om het hete water mee te mengen.</li>
              <li><strong className="text-ink">Schoonmaken:</strong> spoel fles en speen direct na het voeden om met koud water en was ze daarna in de vaatwasser op minimaal 55 °C of in heet sop.</li>
            </ul>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over kraanwater voor babyvoeding</h2>
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
                <li><a href="https://www.voedingscentrum.nl/Assets/Uploads/voedingscentrum/Documents/Consumenten/Mijn%20kind%20en%20ik/Flesvoeding/Flesvoeding_2024.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Voedingscentrum: Flesvoeding klaarmaken? Zo doe je dat (juni 2024)</a></li>
                <li><a href="https://www.voedingscentrum.nl/lood" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Voedingscentrum: Kun je via kraanwater te veel lood binnenkrijgen?</a></li>
                <li><a href="https://www.rivm.nl/drinkwater/loden-leidingen" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">RIVM: Loden leidingen</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Benieuwd wat er in jouw kraanwater zit?</h2>
            <p className="mt-4 text-white/70">Check eerst hoeveel PFAS er in jouw regio in het kraanwater zit. Wil je daarna zelf filteren, vraag dan vrijblijvend een offerte aan voor een osmosesysteem onder het aanrecht.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/pfas-check" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25">
                Doe de PFAS-check
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white hover:bg-white/10 transition-colors">
                Vraag een offerte aan
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
