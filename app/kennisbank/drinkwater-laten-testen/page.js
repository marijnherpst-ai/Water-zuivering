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
  alternates: { canonical: '/kennisbank/drinkwater-laten-testen' },
  title: 'Drinkwater laten testen: waar, hoe en wat kost het?',
  description:
    'Drinkwater laten testen als particulier: wat je gratis kunt opzoeken, wat een test op lood of PFAS kost en wanneer een watertest echt zin heeft.',
  openGraph: {
    title: 'Drinkwater laten testen: waar, hoe en wat kost het?',
    description: 'Gratis gegevens van je waterbedrijf, een loodtest van ongeveer 50 euro of een PFAS-test: wat past bij jouw vraag?',
    url: 'https://www.water-zuivering.nl/kennisbank/drinkwater-laten-testen',
    images: ['/assets/img/cabinet-install.png'],
  },
};

const TESTEN = [
  ['Gegevens van je drinkwaterbedrijf', 'Tientallen stoffen per leveringsgebied: hardheid, pH, lood, nitraat, bacteriën en meer', 'Gratis', 'Website van je drinkwaterbedrijf'],
  ['Loodtest', 'Hoeveel lood er uit je eigen leidingen in het water komt', 'Ongeveer € 50', 'Bijvoorbeeld loodinwatertesten.nl of een gecertificeerd lab'],
  ['PFAS-test', 'Een reeks PFAS-stoffen in je kraanwater', 'Rond € 270', 'Commerciële labs, bijvoorbeeld testenoppfas.nl'],
  ['Teststrips hardheid of pH', 'Een indicatie van kalk of zuurgraad', 'Een paar euro tot tientjes', 'Bouwmarkt of webwinkel'],
  ['Uitgebreid pakket', 'Metalen, bacteriën en andere stoffen naar keuze', 'Op offerte', 'Gecertificeerd lab, zoals Het Waterlaboratorium, Water-Lab of Aquador'],
];

const WANNEER = [
  ['Je huis is gebouwd vóór 1960', 'Er kunnen loden leidingen in zitten. Een loodtest is dan zinvol, zeker als er een baby, jonge kinderen of een zwangere in huis zijn.'],
  ['Je gebruikt water uit een eigen bron of put', 'Dat water valt niet onder de controle van een drinkwaterbedrijf. Laat het regelmatig testen voordat je het drinkt.'],
  ['Het water ruikt, smaakt of ziet er ineens anders uit', 'Neem eerst contact op met je drinkwaterbedrijf. Ligt het aan je eigen leidingen, dan kan een test helpen de oorzaak te vinden.'],
  ['Je wilt weten hoe het met PFAS zit', 'Begin met de gratis gegevens en de PFAS-kaart. Een eigen PFAS-test is pas nodig als je het voor jouw adres precies wilt weten.'],
];

const FAQ = [
  ['Waar kan ik mijn kraanwater laten testen?', 'Bij een gecertificeerd laboratorium. Voor lood is er loodinwatertesten.nl, een initiatief van Het Waterlaboratorium met Dunea, PWN en Waternet. De gemeente Utrecht noemt daarnaast Water-Lab en Aquador. Voor PFAS zijn er commerciële aanbieders met een thuistestpakket.'],
  ['Wat kost het om water te laten testen?', 'Een test op lood kost volgens de Rijksoverheid ongeveer 50 euro. Een PFAS-test kost rond de 270 euro; testenoppfas.nl rekent bijvoorbeeld € 269,50. Een uitgebreid pakket met meerdere stoffen gaat op offerte.'],
  ['Kan ik mijn drinkwater gratis laten testen?', 'Een gratis test voor particulieren is er meestal niet. Wel kun je gratis de meetgegevens van je drinkwaterbedrijf opzoeken. Die meten het water in jouw leveringsgebied meerdere keren per jaar in een geaccrediteerd lab.'],
  ['Hoe neem ik een watermonster voor een loodtest?', 'Laat het water minstens zes uur stilstaan, bijvoorbeeld &rsquo;s nachts. Vang &rsquo;s ochtends het eerste water op in de monsterflesjes van het lab en stuur ze zo snel mogelijk terug. Volg altijd de instructie van het lab zelf.'],
  ['Hoe lang duurt het voor ik de uitslag heb?', 'Dat verschilt per lab en per test. Voor een PFAS-test noemen aanbieders ongeveer tien werkdagen. De uitslag van een loodtest via loodinwatertesten.nl krijg je per mail.'],
  ['Zijn thuistests met teststrips betrouwbaar?', 'Teststrips voor hardheid of pH geven een indicatie, geen exacte meting. Voor lood, PFAS of bacteriën heb je een laboratorium nodig; die stoffen kun je niet betrouwbaar met een strip meten.'],
  ['Wat doe ik als er te veel lood in mijn water zit?', 'Laat de loden leidingen vervangen. Tot die tijd drinken zwangeren en kinderen tot en met 7 jaar flessenwater. In een huurwoning moet de verhuurder de leidingen vervangen.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Drinkwater laten testen: waar, hoe en wanneer het zin heeft"
        description="Wat je gratis over je drinkwater kunt opzoeken, wat een test op lood of PFAS kost, hoe je een monster neemt en wanneer een watertest echt zin heeft."
        image="https://www.water-zuivering.nl/assets/img/cabinet-install.png"
        url="https://www.water-zuivering.nl/kennisbank/drinkwater-laten-testen"
        datePublished="2026-10-27"
        about={{ '@type': 'Thing', name: 'Drinkwateranalyse', sameAs: 'https://nl.wikipedia.org/wiki/Drinkwater' }}
        mentions={[
          { '@type': 'Organization', name: 'Het Waterlaboratorium', url: 'https://www.hetwaterlaboratorium.nl' },
          { '@type': 'Organization', name: 'Rijksoverheid', url: 'https://www.rijksoverheid.nl' },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Drinkwater laten testen', url: 'https://www.water-zuivering.nl/kennisbank/drinkwater-laten-testen' },
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
              Drinkwater laten testen: waar, hoe en wanneer het zin heeft
            </h1>
            <p className="mt-5 text-dim text-lg">
              Wil je weten wat er precies uit jouw kraan komt? Je kunt je <strong className="text-ink">drinkwater laten testen</strong> door een laboratorium, maar vaak is dat niet eens nodig. Hier lees je wat je gratis kunt opzoeken, wat een test op lood of PFAS kost, hoe je een monster neemt en wanneer een eigen test echt iets toevoegt.
            </p>
            <KortAntwoord bron={{ naam: 'Rijksoverheid: loden leidingen opsporen en vervangen', url: 'https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/gezonde-en-veilige-leefomgeving/hoe-kan-ik-loden-leidingen-in-mijn-huis-opsporen-en-laten-vervangen' }}>
              Je drinkwaterbedrijf meet het water in jouw gebied zelf en publiceert de uitslagen gratis. Een eigen test is vooral zinvol bij een huis van vóór 1960 (lood, ongeveer 50 euro), bij water uit een eigen put, of als je de PFAS voor jouw adres precies wilt weten (rond 270 euro). Kies altijd een gecertificeerd laboratorium.
            </KortAntwoord>
            <AuteurRegel />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Gratis</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Begin bij de gegevens van je drinkwaterbedrijf</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Voordat je geld uitgeeft aan een test: je water wordt al getest. Drinkwaterbedrijven zijn wettelijk verplicht het water continu te controleren. Ze publiceren de uitslagen per leveringsgebied, en die kun je <strong className="text-ink">gratis</strong> opzoeken op hun website.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Een voorbeeld: het rapport van Dunea voor Scheveningen over het eerste kwartaal van 2024, gemeten door Het Waterlaboratorium, bevat ruim veertig stoffen en eigenschappen. Van hardheid en pH tot lood, nitraat, legionella en E. coli, steeds met de wettelijke norm erbij. Lood was er niet meetbaar (minder dan 0,2 microgram per liter) en er werden geen ziekmakende bacteriën gevonden.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Wat zo&apos;n rapport niet laat zien, is wat er in jouw huis gebeurt. Het water wordt gemeten voordat het jouw leidingen in gaat. Problemen die in huis ontstaan, zoals lood uit oude leidingen, zie je er dus niet in terug. Daar is een eigen test voor.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Overzicht</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Welke watertests zijn er en wat kosten ze?</h2>
            <p className="mt-4 text-dim leading-relaxed max-w-3xl">
              Prijzen zoals bekend in oktober 2026. Ze verschillen per lab, dus vraag altijd vooraf naar de actuele prijs en welke stoffen er precies worden gemeten.
            </p>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-amber/10 text-ink">
                  <tr>
                    <th scope="col" className="p-4 font-display font-bold">Test</th>
                    <th scope="col" className="p-4 font-display font-bold">Wat meet het?</th>
                    <th scope="col" className="p-4 font-display font-bold">Kosten</th>
                    <th scope="col" className="p-4 font-display font-bold">Waar?</th>
                  </tr>
                </thead>
                <tbody>
                  {TESTEN.map(([test, wat, kosten, waar]) => (
                    <tr key={test} className="border-t border-edge align-top">
                      <th scope="row" className="p-4 font-semibold text-ink">{test}</th>
                      <td className="p-4 text-dim">{wat}</td>
                      <td className="p-4 text-dim">{kosten}</td>
                      <td className="p-4 text-dim">{waar}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wanneer heeft drinkwater laten testen zin?</h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {WANNEER.map(([titel, uitleg]) => (
                <div key={titel} className="reveal card rounded-2xl p-5">
                  <h3 className="font-display font-bold text-ink">{titel}</h3>
                  <p className="mt-2 text-sm text-dim leading-relaxed">{uitleg}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-dim leading-relaxed">
              Gaat het je alleen om de algemene kwaliteit van het kraanwater in je regio, dan zijn de gegevens van je drinkwaterbedrijf meestal betrouwbaarder dan één losse meting. Een lab meet één moment; het waterbedrijf meet het hele jaar door.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Lood</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Kraanwater laten testen op lood</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Dit is de test die voor de meeste particulieren het meest oplevert. Lood komt namelijk niet van het waterbedrijf, maar uit loden leidingen in oudere huizen. De Rijksoverheid noemt een prijs van <strong className="text-ink">ongeveer 50 euro</strong>.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Via loodinwatertesten.nl, een initiatief van Het Waterlaboratorium met Dunea, PWN en Waternet, bestel je tot zes monsters tegelijk. Je krijgt monsterflesjes, een instructie en een gratis retourlabel. Het monster neem je zo:
            </p>
            <ol className="mt-4 space-y-2 text-dim leading-relaxed list-decimal pl-5">
              <li>Laat het water minstens zes uur stilstaan, bijvoorbeeld &rsquo;s nachts.</li>
              <li>Vang &rsquo;s ochtends het eerste water uit de kraan op in de flesjes.</li>
              <li>Stuur de flesjes met het retourlabel naar het lab. De uitslag krijg je per mail.</li>
            </ol>
            <p className="mt-4 text-dim leading-relaxed">
              De norm is maximaal 5 microgram lood per liter. Ligt je uitslag daarboven, of weet je zeker dat je loden leidingen hebt, lees dan wat je moet doen in <Link href="/kennisbank/loden-leidingen" className="underline hover:text-ink">loden leidingen: zo herken je ze</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">PFAS</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Drinkwater laten testen op PFAS</h2>
            <p className="mt-4 text-dim leading-relaxed">
              PFAS meten is lastiger en duurder. Het gaat om een groep van duizenden stoffen in zeer kleine hoeveelheden, en een lab meet er altijd maar een deel van. Commerciële aanbieders rekenen rond de <strong className="text-ink">270 euro</strong>; testenoppfas.nl vraagt bijvoorbeeld € 269,50 en noemt een uitslag binnen ongeveer tien werkdagen. Vraag vooraf welke PFAS-stoffen er gemeten worden.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Voor de meeste mensen is een eigen PFAS-test niet de eerste stap. Je drinkwaterbedrijf meet PFAS zelf, en Greenpeace heeft de uitslagen per postcode in kaart gebracht. Hoe je die leest, staat in <Link href="/kennisbank/pfas-kaart-nederland" className="underline hover:text-ink">de PFAS-kaart van Nederland</Link>. Wil je weten wat PFAS zijn en wat de normen zijn, lees dan <Link href="/kennisbank/pfas-in-kraanwater" className="underline hover:text-ink">PFAS in kraanwater</Link>.
            </p>
            <TussenCta titel="Eerst snel weten hoe het met PFAS bij jou zit?" pfasEerst>
              Met de PFAS-check zie je in een paar seconden in welke categorie jouw regio valt, zonder testpakket of wachttijd. Wil je daarna zelf filteren, vraag dan vrijblijvend een offerte aan.
            </TussenCta>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/cabinet-install.png" alt="Na het drinkwater laten testen een osmosesysteem onder het aanrecht installeren" fill loading="eager" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Thuistests</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zelf meten met teststrips of een meter</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Voor hardheid en zuurgraad kun je goedkoop zelf meten met teststrips of een digitale meter. Handig om te weten hoeveel kalk er in je water zit of om te checken of je filter werkt. Het blijft een indicatie: water dat even in een glas staat, verandert al iets van samenstelling. Meer daarover lees je in <Link href="/kennisbank/ph-kraanwater" className="underline hover:text-ink">pH van kraanwater</Link>.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Stoffen als lood, PFAS, medicijnresten en bacteriën kun je niet betrouwbaar thuis meten. Een apparaatje dat belooft &lsquo;alles&rsquo; te meten, meet meestal alleen het totaal aan opgeloste zouten. Dat zegt iets over mineralen, niet over schadelijke stoffen.
              </p>
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Uitslag binnen: hoe lees je die?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een goed lab zet de wettelijke norm naast de gemeten waarde. Die normen staan in het Drinkwaterbesluit. Een paar ijkpunten:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Lood:</strong> maximaal 5 microgram per liter.</li>
              <li><strong className="text-ink">Zuurgraad:</strong> een pH tussen 7,0 en 9,5.</li>
              <li><strong className="text-ink">Nitraat:</strong> maximaal 50 milligram per liter.</li>
              <li><strong className="text-ink">E. coli:</strong> nul in 100 milliliter.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Een waarde onder de norm betekent dat het water voldoet aan de wet. Wie verder wil gaan dan de norm, bijvoorbeeld voor PFAS of medicijnresten, kan zelf filteren. Lees welk <Link href="/waterfilter" className="underline hover:text-ink">waterfilter</Link> welke stoffen tegenhoudt, of bekijk de normen in <Link href="/kennisbank/drinkwaternormen-nederland" className="underline hover:text-ink">drinkwaternormen in Nederland</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over drinkwater laten testen</h2>
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
                <li><a href="https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/gezonde-en-veilige-leefomgeving/hoe-kan-ik-loden-leidingen-in-mijn-huis-opsporen-en-laten-vervangen" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Rijksoverheid: loden leidingen opsporen en laten vervangen</a></li>
                <li><a href="https://loodinwatertesten.nl/" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Loodinwatertesten.nl (Het Waterlaboratorium, Dunea, PWN, Waternet)</a></li>
                <li><a href="https://www.dunea.nl/-/media/bestanden/home/drinkwater/waterkwaliteitsrapportages/2024-rapportages/scheveningen-1e-kw-2024-verzendfile.ashx" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Dunea / Het Waterlaboratorium: waterkwaliteit Scheveningen, 1e kwartaal 2024</a></li>
                <li><a href="https://www.utrecht.nl/wonen-en-leven/gezonde-leefomgeving/water/loden-drinkwaterleidingen" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Gemeente Utrecht: Loden drinkwaterleidingen</a></li>
                <li><a href="https://testenoppfas.nl/nl/testkit-voor-water" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Testenoppfas.nl: PFAS-testkit voor water</a></li>
                <li><a href="https://wetten.overheid.nl/BWBR0030111/2026-08-15" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Drinkwaterbesluit, bijlage A</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Weet je wat er in je water zit? Haal het eruit</h2>
            <p className="mt-4 text-white/70">Een osmosesysteem onder het aanrecht filtert PFAS, medicijnresten, microplastics en opgeloste metalen uit je drinkwater. Vraag vrijblijvend een offerte aan.</p>
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
