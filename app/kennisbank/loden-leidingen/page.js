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
  alternates: { canonical: '/kennisbank/loden-leidingen' },
  title: "Loden leidingen: herkennen, risico's en vervangen",
  description:
    'Loden leidingen herkennen, wat lood in drinkwater met je gezondheid doet, wie het vervangen betaalt en wat je tot die tijd doet.',
  openGraph: {
    title: "Loden leidingen: herkennen, risico's en vervangen",
    description: 'Zo herken je loden leidingen in je huis, zo laat je je water testen en dit is het advies tot ze vervangen zijn.',
    url: 'https://www.water-zuivering.nl/kennisbank/loden-leidingen',
    images: ['/assets/img/een-kraan.jpg'],
  },
};

const HERKENNEN = [
  ['Check het bouwjaar', 'Is je huis gebouwd in 1960 of later, dan heb je vrijwel zeker geen loden leidingen. Het bouwjaar vind je in de Basisregistratie Adressen en Gebouwen (BAG) of op de kaart van de Atlas Leefomgeving.'],
  ['Zoek de watermeter', 'Die zit meestal in de meterkast, bij de cv-ketel of onder een luik bij de voor- of achterdeur. Bekijk de leiding aan beide kanten van de meter.'],
  ['Tik op de leiding', 'Tik er met een lepel of ander metalen voorwerp tegen. Een loden leiding klinkt dof. Koper en kunststof klinken heller.'],
  ['Kijk naar kleur en vorm', 'Lood is dof grijs, vaak dikker dan een gewone waterleiding en heeft een onregelmatige vorm met verdikkingen. Koper is groen of roodbruin.'],
  ['Kras er voorzichtig in', 'Schuur of kras een klein stukje op. Wordt het zilverkleurig en glimmend, dan is het waarschijnlijk lood.'],
];

const ADVIES = [
  ['Zwangeren, baby’s en kinderen tot en met 7 jaar', 'Drink geen water uit loden leidingen, ook niet in thee, koffie, flesvoeding, soep of pasta. Gebruik flessenwater of water uit niet-loden leidingen. Aardappels en groente koken en fruit wassen mag wel.'],
  ['Kinderen vanaf 8 jaar en volwassenen', 'Niet langdurig drinken. Tijdelijk mag het als je weet waar de loden leiding zit en hoe lang hij is: laat dan eerst ongeveer 1 liter per 5 meter leiding doorstromen. Weet je dat niet, volg dan het advies voor jonge kinderen.'],
  ['Iedereen', 'Koken haalt geen lood uit water. Gebruik voor drinken en koken alleen koud water uit de kraan.'],
];

const FAQ = [
  ['Tot welk jaar zijn loden leidingen gebruikt?', 'Sinds 1960 mogen loden drinkwaterleidingen niet meer worden aangelegd. Huizen die vóór 1960 zijn gebouwd, kunnen ze dus nog hebben, ook als een deel van de leidingen al is vervangen. Vooral leidingen onder de vloer en in muren worden vaak vergeten.'],
  ['Hoe weet ik of ik loden leidingen heb?', 'Kijk eerst naar het bouwjaar. Bekijk daarna de leiding bij de watermeter: lood is dof grijs, klinkt dof als je erop tikt, heeft vaak verdikkingen en wordt zilverkleurig als je er een krasje in maakt. Zekerheid krijg je met een watertest of een installateur.'],
  ['Is het verplicht om loden leidingen te vervangen?', 'Voor eigenaar-bewoners is er geen wettelijke plicht, wel het dringende advies van het RIVM en de overheid. Sinds 2022 zijn loden leidingen verboden in huurwoningen en kinderopvanglocaties. Een verhuurder moet ze dus vervangen.'],
  ['Wat kost een test op lood in drinkwater?', 'Volgens de Rijksoverheid ongeveer 50 euro. Bij loodinwatertesten.nl, een initiatief van Het Waterlaboratorium met Dunea, PWN en Waternet, bestel je monsterflesjes en stuur je ze gratis retour naar het lab.'],
  ['Wie betaalt het vervangen van loden leidingen?', 'De eigenaar van het huis betaalt de leidingen vanaf de watermeter het huis in. Het drinkwaterbedrijf is verantwoordelijk voor de leiding van de straat tot aan de watermeter. In een huurwoning moet de verhuurder de leidingen vervangen.'],
  ['Helpt koken tegen lood in drinkwater?', 'Nee. Het Voedingscentrum zegt dat koken geen lood uit water verwijdert. Gebruik bovendien geen warm water uit de kraan om mee te koken of te drinken.'],
  ['Haalt een waterfilter lood uit het water?', 'Dat verschilt sterk per filter. Het Voedingscentrum waarschuwt dat niet bekend is of filters die als loodverwijderend worden verkocht goed genoeg werken. Een omgekeerde-osmosemembraan houdt opgeloste metalen zoals lood grotendeels tegen, maar het vervangen van de leidingen blijft de echte oplossing.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Loden leidingen: zo herken je ze en dit doe je eraan"
        description="Hoe je loden leidingen herkent, wat lood in drinkwater met je gezondheid doet, wie het vervangen betaalt en wat het advies is tot ze vervangen zijn."
        image="https://www.water-zuivering.nl/assets/img/een-kraan.jpg"
        url="https://www.water-zuivering.nl/kennisbank/loden-leidingen"
        datePublished="2026-10-27"
        about={{ '@type': 'Thing', name: 'Loden waterleidingen', sameAs: 'https://nl.wikipedia.org/wiki/Lood_(element)' }}
        mentions={[
          { '@type': 'Organization', name: 'RIVM', url: 'https://www.rivm.nl' },
          { '@type': 'Organization', name: 'Voedingscentrum', url: 'https://www.voedingscentrum.nl' },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Loden leidingen', url: 'https://www.water-zuivering.nl/kennisbank/loden-leidingen' },
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
              Loden leidingen: zo herken je ze en dit doe je eraan
            </h1>
            <p className="mt-5 text-dim text-lg">
              Woon je in een huis van vóór 1960? Dan kunnen er nog <strong className="text-ink">loden leidingen</strong> in zitten. Lood kan in je kraanwater terechtkomen en is vooral schadelijk voor jonge kinderen en ongeboren baby&apos;s. Hier lees je hoe je ze herkent, hoe je je water laat testen en wat je doet tot ze vervangen zijn.
            </p>
            <KortAntwoord bron={{ naam: 'RIVM: Loden leidingen', url: 'https://www.rivm.nl/drinkwater/loden-leidingen' }}>
              Loden leidingen zitten alleen in huizen die vóór 1960 zijn gebouwd. Lood is dof grijs, klinkt dof als je erop tikt en wordt zilverkleurig als je erin krast. Het mag maximaal 5 microgram per liter in drinkwater zitten. Laat de leidingen vervangen; tot die tijd drinken zwangeren en kinderen tot en met 7 jaar beter flessenwater.
            </KortAntwoord>
            <AuteurRegel />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Herkennen</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Loden leidingen herkennen in 5 stappen</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Je hoeft geen installateur te zijn om een eerste check te doen. Deze stappen komen uit de adviezen van de gemeente Utrecht en de Rijksoverheid.
            </p>
            <ol className="mt-8 space-y-4">
              {HERKENNEN.map(([titel, uitleg], i) => (
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
              Let op: ook als de leiding bij de watermeter van koper is, kan er verderop nog lood zitten. Leidingen onder de vloer en in de muren zijn bij verbouwingen vaak blijven zitten, omdat ze lastig te bereiken zijn. Twijfel je, laat dan je water testen of een installateur kijken.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom is lood in drinkwater schadelijk?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Lood is een zwaar metaal dat zich in je lichaam ophoopt. Volgens het RIVM kan te veel lood bij jonge kinderen <strong className="text-ink">de intelligentie verlagen</strong>. Bij een hoge blootstelling kan het ook de nieren en de bloeddruk aantasten. Ongeboren kinderen zijn extra kwetsbaar, daarom gelden de strengste adviezen voor zwangeren.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              In het Drinkwaterbesluit staat dat drinkwater maximaal <strong className="text-ink">5 microgram lood per liter</strong> mag bevatten. Die norm was eerder 10 microgram en is op advies van de Gezondheidsraad gehalveerd. Het water dat het drinkwaterbedrijf levert, zit daar ruim onder. Het lood komt pas in je water als het door een loden leiding in je eigen huis stroomt, vooral als het daar lang heeft stilgestaan.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Water uit loden leidingen is daarom niet hetzelfde als slecht kraanwater. Het Nederlandse kraanwater zelf is goed; lees daarover meer in <Link href="/kennisbank/is-kraanwater-veilig" className="underline hover:text-ink">is kraanwater veilig?</Link> en in onze uitleg over de <Link href="/kennisbank/drinkwaternormen-nederland" className="underline hover:text-ink">drinkwaternormen in Nederland</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Tot ze vervangen zijn</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat doe je tot de loden leidingen weg zijn?</h2>
            <p className="mt-4 text-dim leading-relaxed max-w-3xl">
              Vervangen kost tijd. Het Voedingscentrum geeft per groep een duidelijk advies voor de periode ertussen.
            </p>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-amber/10 text-ink">
                  <tr>
                    <th scope="col" className="p-4 font-display font-bold">Voor wie</th>
                    <th scope="col" className="p-4 font-display font-bold">Advies</th>
                  </tr>
                </thead>
                <tbody>
                  {ADVIES.map(([wie, advies]) => (
                    <tr key={wie} className="border-t border-edge align-top">
                      <th scope="row" className="p-4 font-semibold text-ink">{wie}</th>
                      <td className="p-4 text-dim">{advies}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-dim leading-relaxed max-w-3xl">
              Maak je flesvoeding? Gebruik dan flessenwater waarvan op het etiket staat dat het geschikt is voor babyvoeding. Meer daarover lees je in <Link href="/kennisbank/kraanwater-babyvoeding" className="underline hover:text-ink">kraanwater voor babyvoeding</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Lood in je kraanwater laten testen</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Wil je zeker weten of er lood in je water zit, laat het dan testen. De Rijksoverheid noemt een prijs van <strong className="text-ink">ongeveer 50 euro</strong>. Zo gaat het meestal:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li>Je bestelt een testpakket, bijvoorbeeld via loodinwatertesten.nl. Dat is een initiatief van Het Waterlaboratorium met de drinkwaterbedrijven Dunea, PWN en Waternet.</li>
              <li>Je laat het water minstens zes uur stilstaan, bijvoorbeeld &rsquo;s nachts.</li>
              <li>&rsquo;s Ochtends vang je het eerste water op in de monsterflesjes en stuur je ze met het gratis retourlabel naar het lab.</li>
              <li>De uitslag krijg je per mail.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Een test zegt iets over het moment van meten. Ook een uitslag onder de norm betekent niet dat loden leidingen veilig zijn: hoeveel lood er in je water komt, wisselt. Wil je meer weten over wat je allemaal kunt laten onderzoeken, lees dan <Link href="/kennisbank/drinkwater-laten-testen" className="underline hover:text-ink">drinkwater laten testen</Link>.
            </p>
            <TussenCta titel="Ook na het vervangen extra zekerheid over je drinkwater?">
              Een osmosemembraan houdt opgeloste metalen zoals lood grotendeels tegen, en ook PFAS en medicijnresten. Het is geen vervanging voor nieuwe leidingen, wel een extra stap voor wie verder wil gaan dan de norm.
            </TussenCta>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vervangen</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Loden leidingen vervangen: wie doet en betaalt wat?</h2>
            <ul className="mt-6 space-y-3 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Het drinkwaterbedrijf</strong> is verantwoordelijk voor de leiding van de straat tot aan de watermeter. Zit daar nog lood, dan neemt het waterbedrijf contact met je op; je kunt ook zelf bellen.</li>
              <li><strong className="text-ink">De eigenaar van het huis</strong> is verantwoordelijk voor alle leidingen vanaf de watermeter het huis in. Laat het werk doen door een erkende installateur of loodgieter.</li>
              <li><strong className="text-ink">Huur je?</strong> Dan moet de verhuurder de loden leidingen vervangen. Sinds 2022 zijn ze in huurwoningen en kinderopvanglocaties verboden. Doet de verhuurder niets, dan kun je het als ernstig gebrek melden bij de Huurcommissie en mogelijk huurverlaging krijgen.</li>
            </ul>
            <h3 className="mt-10 font-display text-xl font-bold text-ink">Wat kost het en is er subsidie?</h3>
            <p className="mt-3 text-dim leading-relaxed">
              Een vaste prijs is er niet. De kosten hangen af van hoeveel meter leiding er vervangen moet worden, of die zichtbaar mag blijven of in de muur weggewerkt moet worden, en of er vloeren open moeten. Vraag daarom altijd een offerte bij een installateur.
            </p>
            <p className="mt-3 text-dim leading-relaxed">
              Van 1999 tot 2005 bestond er een landelijke subsidie om loden leidingen te vervangen. Een nieuwe landelijke regeling is er niet. De Rijksoverheid raadt aan bij je gemeente na te vragen of daar iets mogelijk is. Grote steden als Amsterdam en Rotterdam vervangen vooral de leidingen in hun eigen gebouwen, te beginnen bij plekken waar veel kinderen komen.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/een-kraan.jpg" alt="Keukenkraan in een oud huis met mogelijk loden leidingen" fill loading="eager" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Filteren</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Kun je lood uit je water filteren?</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Eerlijk antwoord: een filter is geen oplossing voor loden leidingen. Het Voedingscentrum waarschuwt dat niet bekend is of filters die als loodverwijderend worden verkocht goed genoeg werken, en dat sommige filters bacteriegroei kunnen veroorzaken als je ze niet op tijd vervangt.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Een <Link href="/kennisbank/omgekeerde-osmose-filter" className="underline hover:text-ink">omgekeerde-osmosefilter</Link> werkt anders dan een filterkan: het membraan met poriën van 0,0001 micron houdt opgeloste metalen zoals lood grotendeels tegen. Dat maakt het een goede aanvulling als je, ook na het vervangen van je leidingen, zo schoon mogelijk drinkwater wilt. Vervang eerst de loden leidingen, en kies daarna pas welk <Link href="/waterfilter" className="underline hover:text-ink">waterfilter</Link> bij je past.
              </p>
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Nieuwe leidingen of een nieuwe kraan?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Ook nieuwe leidingen en kranen kunnen de eerste tijd kleine hoeveelheden metaal afgeven. Het Voedingscentrum adviseert daarom de eerste drie maanden het water eerst te laten doorstromen: ongeveer 1 liter per 5 meter leiding. Heb je alleen een nieuwe kraan, dan is ongeveer 10 seconden doorspoelen genoeg. Het spoelwater kun je gebruiken voor de planten of de afwas. Na drie maanden vervalt dit advies.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Woon je in een stad met veel oude bebouwing, zoals Amsterdam? Lees dan ook wat we schreven over <Link href="/kennisbank/drinkwater-amsterdam" className="underline hover:text-ink">drinkwater in Amsterdam</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over loden leidingen</h2>
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
                <li><a href="https://www.rivm.nl/drinkwater/loden-leidingen" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">RIVM: Loden leidingen</a></li>
                <li><a href="https://www.voedingscentrum.nl/lood" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Voedingscentrum: Kun je via kraanwater te veel lood binnenkrijgen?</a></li>
                <li><a href="https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/gezonde-en-veilige-leefomgeving/hoe-kan-ik-loden-leidingen-in-mijn-huis-opsporen-en-laten-vervangen" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Rijksoverheid: Hoe kan ik loden leidingen in mijn huis opsporen en laten vervangen?</a></li>
                <li><a href="https://www.utrecht.nl/wonen-en-leven/gezonde-leefomgeving/water/loden-drinkwaterleidingen" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Gemeente Utrecht: Loden drinkwaterleidingen</a></li>
                <li><a href="https://wetten.overheid.nl/BWBR0030111/2026-08-15" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Drinkwaterbesluit, bijlage A, tabel II (lood: 5 µg/l)</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Leidingen vervangen? Maak het drinkwater meteen extra schoon</h2>
            <p className="mt-4 text-white/70">Een osmosesysteem onder het aanrecht filtert opgeloste metalen, PFAS, medicijnresten en microplastics uit je drinkwater. Vraag vrijblijvend een offerte aan.</p>
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
