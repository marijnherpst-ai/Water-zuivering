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
  alternates: { canonical: '/kennisbank/chloor-in-kraanwater' },
  title: 'Chloor in kraanwater: zit het erin in Nederland?',
  description:
    'Chloor in kraanwater: waarom Nederland drinkwater zonder chloor levert, wanneer het toch tijdelijk wordt gebruikt en wat je doet als je chloor ruikt.',
  openGraph: {
    title: 'Chloor in kraanwater: zit het erin in Nederland?',
    description: 'Hoe Nederland drinkwater veilig maakt zonder chloor, wanneer chloor toch wordt ingezet en wat je doet bij een chloorlucht.',
    url: 'https://www.water-zuivering.nl/kennisbank/chloor-in-kraanwater',
    images: ['/assets/img/een-kraan.jpg'],
  },
};

const MANIEREN = [
  ['Meerdere zuiveringsstappen', 'Bezinken, filtreren over zand en actieve kool, en bij rivierwater vaak infiltratie in de duinen. Elke stap haalt een deel van de bacteriën en voedingsstoffen weg.'],
  ['Desinfectie met uv-licht', 'Uv-licht maakt bacteriën en virussen onschadelijk, zonder iets aan het water toe te voegen. In Nederland wordt dit al sinds eind jaren zeventig gebruikt.'],
  ['Weinig voeding voor bacteriën', 'Drinkwaterbedrijven halen de stoffen weg waarop bacteriën in de leiding zouden kunnen groeien. Zo hoeft er geen chloor in de leiding te blijven om groei tegen te gaan.'],
  ['Een goed onderhouden leidingnet', 'Een lekvrij leidingnet voorkomt dat er vuil of bacteriën van buiten naar binnen komen.'],
];

const FAQ = [
  ['Zit er chloor in Nederlands kraanwater?', 'Normaal gesproken niet. Nederlandse drinkwaterbedrijven gebruiken voor de desinfectie geen chloor, in tegenstelling tot de meeste andere landen. Ze maken het water veilig met meerdere zuiveringsstappen en uv-licht.'],
  ['Wanneer wordt er toch chloor gebruikt?', 'Alleen tijdelijk, bijvoorbeeld bij een besmetting, na een leidingbreuk of bij werkzaamheden aan het leidingnet. Dan kan het waterbedrijf een leiding desinfecteren of een tijdje chloor toevoegen. Daarna wordt dat weer gestopt.'],
  ['Waarom gebruikt Nederland geen chloor?', 'Chloor kan met natuurlijke stoffen in water bijproducten vormen die je liever niet binnenkrijgt, en het geeft een smaak en geur die veel mensen niet lekker vinden. Omdat het Nederlandse water op andere manieren goed gezuiverd wordt, is chloor niet nodig.'],
  ['Mijn kraanwater ruikt naar chloor, wat nu?', 'Kijk of er in je buurt werkzaamheden of een storing zijn, bijvoorbeeld met onze storingen-check, of bel je drinkwaterbedrijf. Ruikt het water lang naar chloor zonder duidelijke reden, laat het dan weten aan je waterbedrijf.'],
  ['Is chloor in drinkwater schadelijk?', 'In de lage hoeveelheden die in veel landen in drinkwater zitten, niet direct. Chloor wordt juist gebruikt om ziekteverwekkers te doden. Het nadeel zit vooral in de smaak en geur, en in bijproducten die kunnen ontstaan.'],
  ['Hoe haal je chloor uit water?', 'Actieve kool neemt chloor goed op. Een filterkan, kraanfilter of het koolstofvoorfilter van een osmosesysteem haalt chloor er dus uit. Ook water een tijdje laten staan in een open kan helpt, omdat chloor dan langzaam verdampt.'],
  ['Zit er chloor in kraanwater in het buitenland?', 'In de meeste andere landen wel. Daar blijft er een kleine hoeveelheid chloor in het water om bacteriegroei in de leidingen tegen te gaan. Daarom proef je op vakantie vaak een chloorsmaak die je thuis niet kent.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Chloor in kraanwater: zit het in Nederland in je water?"
        description="Waarom Nederland drinkwater zonder chloor levert, hoe het water dan veilig blijft, wanneer chloor toch tijdelijk wordt gebruikt en wat je doet bij een chloorlucht."
        image="https://www.water-zuivering.nl/assets/img/een-kraan.jpg"
        url="https://www.water-zuivering.nl/kennisbank/chloor-in-kraanwater"
        datePublished="2026-10-27"
        about={{ '@type': 'Thing', name: 'Chloor', sameAs: 'https://nl.wikipedia.org/wiki/Chloor' }}
        mentions={[{ '@type': 'Organization', name: 'KWR Water Research Institute', url: 'https://www.kwrwater.nl' }]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Chloor in kraanwater', url: 'https://www.water-zuivering.nl/kennisbank/chloor-in-kraanwater' },
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
              Chloor in kraanwater: zit het in Nederland in je water?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Op vakantie proef je het meteen: <strong className="text-ink">chloor in kraanwater</strong>. Thuis meestal niet, en dat is geen toeval. Nederland is een van de weinige landen die drinkwater leveren zonder chloor. Hier lees je hoe dat kan, wanneer er toch chloor wordt gebruikt en wat je doet als je kraanwater ineens naar chloor ruikt.
            </p>
            <KortAntwoord bron={{ naam: 'KWR / H2O: Desinfectie van drinkwater met uv-C (2013)', url: 'https://api2.kwrwater.nl/uploads/Hofman-Caris-Baken-Harmsen-Beerendonk-Nugteren-%20Desinfectie%20van%20drinkwater%20met%20behulp%20van%20UV-C-%20een%20veilige%20methode-%20H2O-Online%20(2013)%2013%20december.pdf' }}>
              Normaal gesproken zit er geen chloor in Nederlands kraanwater. Drinkwaterbedrijven maken het water veilig met meerdere zuiveringsstappen, uv-licht en een goed leidingnet, in plaats van met chloor. Alleen bij een besmetting, een leidingbreuk of werkzaamheden wordt soms tijdelijk chloor gebruikt. Ruik je chloor, check dan of er in je buurt iets speelt.
            </KortAntwoord>
            <AuteurRegel />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Zonder chloor</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe blijft kraanwater veilig zonder chloor?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              In de meeste landen blijft er een klein beetje chloor in het drinkwater achter. Dat doodt bacteriën die onderweg in de leiding zouden kunnen groeien. Nederland kiest een andere aanpak. Volgens KWR, het onderzoeksinstituut van de drinkwaterbedrijven, lukt het om zonder chloor veilig water te leveren door een combinatie van vier dingen:
            </p>
            <ol className="mt-8 space-y-4">
              {MANIEREN.map(([titel, uitleg], i) => (
                <li key={titel} className="reveal card rounded-2xl p-5 flex gap-4">
                  <span className="shrink-0 w-9 h-9 rounded-full bg-amber text-ink font-display font-extrabold flex items-center justify-center">{i + 1}</span>
                  <div>
                    <h3 className="font-display font-bold text-ink">{titel}</h3>
                    <p className="mt-1 text-sm text-dim leading-relaxed">{uitleg}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-dim leading-relaxed">
              Ook Vewin, de koepel van de drinkwaterbedrijven, benadrukt dat Nederlands kraanwater geen chloor bevat. Het water wordt bovendien strenger gecontroleerd dan voedsel. Meer daarover lees je in <Link href="/kennisbank/drinkwaternormen-nederland" className="underline hover:text-ink">drinkwaternormen in Nederland</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom gebruikt Nederland geen chloor?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Chloor doet zijn werk goed: het doodt ziekteverwekkers. Maar het heeft twee nadelen. Ten eerste kan chloor reageren met natuurlijke stoffen in het water. Daarbij ontstaan <strong className="text-ink">gechloreerde bijproducten</strong>, stoffen die je liever niet binnenkrijgt. Ten tweede geeft chloor een smaak en geur die veel mensen niet prettig vinden.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Uv-licht heeft die nadelen niet. Het voegt niets toe aan het water. Onderzoek van KWR vond bij de uv-doses die voor drinkwater gebruikt worden geen schadelijke bijproducten. Daarom is uv-desinfectie in Nederland de standaard geworden.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Uitzonderingen</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wanneer zit er toch chloor in kraanwater?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Chloor wordt in Nederland alleen nog ingezet in bijzondere situaties:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Bij een besmetting</strong> van het leidingnet, bijvoorbeeld met darmbacteriën. Vaak geeft het waterbedrijf dan eerst een kookadvies.</li>
              <li><strong className="text-ink">Na een leidingbreuk of reparatie</strong>, om een nieuw of geopend stuk leiding te desinfecteren voordat het weer in gebruik gaat.</li>
              <li><strong className="text-ink">Bij werkzaamheden</strong> aan het leidingnet, zoals Waternet in Amsterdam aangeeft.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Het gaat dan om een tijdelijke maatregel. Zodra de situatie voorbij is, stopt het waterbedrijf weer met chloor. Of er in jouw buurt iets speelt, zie je in onze <Link href="/storingen" className="underline hover:text-ink">storingen-check</Link>. Hoe het in een bepaalde stad zit, lees je bijvoorbeeld in <Link href="/kennisbank/drinkwater-amsterdam" className="underline hover:text-ink">drinkwater Amsterdam</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Je kraanwater ruikt naar chloor: wat nu?</h2>
            <ol className="mt-6 space-y-3 text-dim leading-relaxed list-decimal pl-5">
              <li><strong className="text-ink">Check of er werkzaamheden of een storing zijn</strong> bij jou in de buurt. Dat is de meest voorkomende reden.</li>
              <li><strong className="text-ink">Laat de koude kraan even lopen.</strong> Ruikt het daarna nog steeds, dan zit het waarschijnlijk in het water uit het net.</li>
              <li><strong className="text-ink">Bel je drinkwaterbedrijf</strong> als de lucht blijft hangen zonder dat je een reden kunt vinden. Zij weten of er chloor is toegevoegd en waarom.</li>
              <li><strong className="text-ink">Ruikt het water muf of anders?</strong> Dat kan ook aan je eigen leidingen liggen, bijvoorbeeld na lang stilstaan. Lees meer in <Link href="/kennisbank/slechtste-kraanwater-nederland" className="underline hover:text-ink">het slechtste kraanwater van Nederland</Link>.</li>
            </ol>
            <TussenCta titel="Altijd water zonder chloorsmaak, ook bij werkzaamheden?">
              Het koolstofvoorfilter van een osmosesysteem haalt chloor uit je drinkwater, en het membraan daarna ook PFAS, medicijnresten en kalk. Vraag vrijblijvend een offerte aan.
            </TussenCta>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/een-kraan.jpg" alt="Kraan met kraanwater zonder chloor in een Nederlandse keuken" fill loading="eager" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Filteren</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Chloor uit water halen</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Chloor hecht zich goed aan <strong className="text-ink">actieve kool</strong>. Daarom halen bijna alle waterfilters het eruit: een filterkan, een kraanfilter en ook het koolstofvoorfilter van een osmosesysteem. Het <Link href="/winkel/ppc-filter" className="underline hover:text-ink">PPC-voorfilter</Link> van Water-zuivering combineert katoen met een koolstofblok en haalt restchloor weg voordat het water het membraan bereikt.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Heb je geen filter? Laat water dan een tijdje in een open kan staan. Chloor verdampt langzaam, en de smaak wordt minder. In Nederland heb je dat meestal niet nodig; op vakantie kan het helpen. Welk filter bij jou past, lees je in <Link href="/kennisbank/kraanwater-filteren" className="underline hover:text-ink">kraanwater filteren</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over chloor in kraanwater</h2>
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
                <li><a href="https://api2.kwrwater.nl/uploads/Hofman-Caris-Baken-Harmsen-Beerendonk-Nugteren-%20Desinfectie%20van%20drinkwater%20met%20behulp%20van%20UV-C-%20een%20veilige%20methode-%20H2O-Online%20(2013)%2013%20december.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">KWR / H2O: Desinfectie van drinkwater met behulp van uv-C, een veilige methode (2013)</a></li>
                <li><a href="https://nos.nl/artikel/2301365-drinkwaterbronnen-nederland-steeds-meer-vervuild" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">NOS: Drinkwaterbronnen in Nederland steeds meer vervuild (met Vewin)</a></li>
                <li>KWR: Validatie uv-installaties in Nederland (BTO 2007.018)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zuiver drinkwater, ook als er iets speelt in het leidingnet</h2>
            <p className="mt-4 text-white/70">Een osmosesysteem onder het aanrecht filtert chloor, PFAS, medicijnresten en microplastics uit je kraanwater. Vraag vrijblijvend een offerte aan.</p>
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
