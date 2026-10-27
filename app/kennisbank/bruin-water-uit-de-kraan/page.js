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
  alternates: { canonical: '/kennisbank/bruin-water-uit-de-kraan' },
  title: 'Bruin water uit de kraan? Oorzaak en wat je nu doet',
  description:
    'Bruin water uit de kraan? Lees waardoor het komt, of je het kunt drinken en wat je nu doet: welke kraan open en wanneer je belt.',
  openGraph: {
    title: 'Bruin water uit de kraan: wat nu?',
    description: 'Waardoor bruin water uit de kraan komt, of het kwaad kan en wat je direct doet.',
    url: 'https://www.water-zuivering.nl/kennisbank/bruin-water-uit-de-kraan',
    images: ['/assets/img/een-kraan.jpg'],
  },
};

const STAPPEN = [
  ['Draai de kraan weer dicht', 'Blijf niet minutenlang tappen terwijl het water nog bruin is. Zolang de oorzaak in het leidingnet zit, trek je alleen meer roestdeeltjes je huis in.'],
  ['Check of er een storing of werkzaamheden zijn', 'Vaak weet je waterbedrijf al wat er speelt. Met onze storingen-check zie je met je postcode of er in jouw buurt werkzaamheden, een leidingbreuk of een kookwateradvies is.'],
  ['Wacht een paar uur', 'Geef de losgekomen deeltjes de tijd om te bezinken of uit het net te spoelen. Laat in de tussentijd alle kranen dicht.'],
  ['Spoel door via de kraan vlak bij de watermeter', 'Dat is in veel huizen de keukenkraan of het toilet. Laat daar koud water lopen tot het glashelder is, en spoel pas daarna de overige kranen kort door.'],
  ['Zet daarna pas wasmachine, vaatwasser en koffiemachine aan', 'Zo voorkom je bruine vlekken in je was en vuil in je apparaten. Blijft het water bruin, bel dan het storingsnummer van je waterbedrijf.'],
];

const SITUATIES = [
  ['De buren hebben het ook', 'Iets in het leidingnet van het waterbedrijf: werkzaamheden, een leidingbreuk of veel tegelijk verbruik.', 'Kranen dicht, een paar uur wachten, daarna doorspoelen. Check de storingen-check.'],
  ['Alleen jouw huis, alle kranen', 'Vaak de leiding tussen watermeter en kranen, bijvoorbeeld na werk aan je eigen installatie of bij oude metalen binnenleidingen.', 'Doorspoelen bij de kraan het dichtst bij de watermeter. Komt het steeds terug, laat een installateur kijken.'],
  ['Alleen het warme water', 'De bron zit dan meestal in je warmwatervoorziening, zoals een boiler of geiser, niet in het leidingnet.', 'Koud water is dan gewoon bruikbaar. Laat de boiler of geiser nakijken.'],
  ['Alleen het eerste water na de vakantie', 'Water dat dagen heeft stilgestaan in je leidingen.', 'Laat de koude kraan een paar minuten lopen tot het water fris en helder is.'],
  ['Eén kraan', 'Iets in of vlak bij die kraan, zoals een vuile perlator of een oud stuk leiding.', 'Draai de perlator (het zeefje) eraf en spoel hem schoon.'],
];

const FAQ = [
  ['Waarom komt er bruin water uit de kraan?', 'Bruin water uit de kraan ontstaat meestal doordat ijzer- en mangaandeeltjes in de waterleiding loskomen. Die stoffen zitten van nature in grondwater en zetten zich op den duur af in leidingen. Bij drukverschillen, zoals bij werkzaamheden, een leidingbreuk of heel veel verbruik tegelijk, komen ze weer los.'],
  ['Is bruin water uit de kraan gevaarlijk?', 'Nee, je wordt er niet ziek van, maar het smaakt vies. Geef baby\'s en ouderen voor de zekerheid iets anders en wacht zelf ook met drinken tot het water weer helder is.'],
  ['Hoe lang moet ik de kraan laten lopen?', 'Er is geen vaste tijd. Houd de kranen eerst een paar uur dicht en laat daarna de kraan die het dichtst bij de watermeter zit lopen tot het water helemaal helder is. Is het na lang doorspoelen nog steeds bruin, neem dan contact op met je waterbedrijf.'],
  ['Kan ik wassen met bruin water?', 'Liever niet, zeker geen witte of lichte was. Zitten er toch roestvlekken in, laat de kleding dan niet drogen maar was hem direct opnieuw met een vlekkenmiddel.'],
  ['Wat als alleen het warme water bruin is?', 'Dan zit de oorzaak meestal in je boiler, geiser of andere warmwatervoorziening, niet in het leidingnet van het waterbedrijf. Laat die nakijken door een installateur.'],
  ['Wie moet ik bellen bij bruin water uit de kraan?', 'Je eigen waterbedrijf. Het storingsnummer staat op hun website. Vitens heeft bijvoorbeeld een gratis storingsnummer dat dag en nacht bereikbaar is: 0800 0359.'],
  ['Houdt een waterfilter bruin water tegen?', 'Een goed voorfilter vangt roest, zand en slib. Het PPC-voorfilter van een Water-zuivering osmosesysteem houdt deeltjes tot 1 micron tegen, zodat die niet in je drinkwater komen. Bij veel roest raakt zo\'n voorfilter wel sneller vol.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Bruin water uit de kraan: oorzaak, risico's en wat je eraan doet"
        description="Waardoor bruin water uit de kraan komt, of je het kunt drinken en wat je direct doet."
        image="https://www.water-zuivering.nl/assets/img/een-kraan.jpg"
        url="https://www.water-zuivering.nl/kennisbank/bruin-water-uit-de-kraan"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Bruin water uit de kraan', url: 'https://www.water-zuivering.nl/kennisbank/bruin-water-uit-de-kraan' },
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
              Bruin water uit de kraan: oorzaak, risico&apos;s en wat je eraan doet
            </h1>
            <p className="mt-5 text-dim text-lg">
              Je draait de kraan open en er komt <strong className="text-ink">bruin water uit de kraan</strong>. Schrikken, maar meestal niet erg. Hier lees je waar het vandaan komt, of je het kunt drinken en wat je nu direct doet.
            </p>
            <KortAntwoord bron={{ naam: 'Vitens via AVROTROS Radar', url: 'https://radar.avrotros.nl/artikel/lage-waterdruk-en-bruin-water-uit-de-kraan-22189' }}>
              Bruin water uit de kraan komt meestal door ijzer- en mangaandeeltjes die in de waterleiding loskomen, bijvoorbeeld bij werkzaamheden, een leidingbreuk of veel verbruik tegelijk. Het is niet schadelijk, wel onsmakelijk. Draai de kranen dicht, wacht een paar uur en laat dan de kraan bij de watermeter lopen tot het water helder is.
            </KortAntwoord>
            <AuteurRegel />
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Direct doen</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Stappenplan bij bruin water uit de kraan</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Loopt er nu bruin water uit de kraan? Doe dit, in deze volgorde. Het voorkomt dat je onnodig lang water laat lopen of je witte was verpest.
            </p>
            <ol className="mt-8 space-y-4">
              {STAPPEN.map(([titel, uitleg], i) => (
                <li key={titel} className="reveal card rounded-2xl p-5 flex gap-4">
                  <span className="shrink-0 w-9 h-9 rounded-full bg-amber text-ink font-display font-extrabold flex items-center justify-center">{i + 1}</span>
                  <div>
                    <h3 className="font-display font-bold text-ink">{titel}</h3>
                    <p className="mt-1 text-sm text-dim leading-relaxed">
                      {uitleg}
                      {i === 1 && (
                        <> <Link href="/storingen" className="underline hover:text-ink">Doe de storingen-check</Link>.</>
                      )}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waar komt bruin water uit de kraan vandaan?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Nederlands drinkwater wordt voor een groot deel uit grondwater gemaakt. Daarin zitten van nature <strong className="text-ink">ijzer en mangaan</strong>. Het waterbedrijf haalt het grootste deel eruit, maar kleine restjes zetten zich in de loop van jaren af als een dun laagje aan de binnenkant van de leidingen.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Zolang het water rustig stroomt, blijft dat laagje zitten. Verandert de druk of de stroomrichting plotseling, dan komen de deeltjes los en kleurt het water geelbruin tot roestbruin. Dat gebeurt onder meer bij:
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">werkzaamheden aan het leidingnet</strong>, zoals het vervangen of doorspoelen van leidingen;</li>
              <li><strong className="text-ink">een leidingbreuk</strong> in de straat of wijk;</li>
              <li><strong className="text-ink">heel veel verbruik tegelijk</strong>, bijvoorbeeld op hete dagen. Vitens noemt een lagere waterdruk door piekgebruik als mogelijke oorzaak;</li>
              <li><strong className="text-ink">werk aan je eigen leidingen</strong>, of oude metalen binnenleidingen in je woning.</li>
            </ul>
            <p className="mt-4 text-dim leading-relaxed">
              Bruin water uit de kraan zegt dus vooral iets over beweging in de leidingen, niet over de kwaliteit van het drinkwater zelf. Wil je weten hoe streng dat water gecontroleerd wordt, lees dan onze uitleg over de <Link href="/kennisbank/drinkwaternormen-nederland" className="underline hover:text-ink">drinkwaternormen in Nederland</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Zelf de oorzaak vinden</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Welke situatie herken je?</h2>
            <p className="mt-4 text-dim leading-relaxed max-w-3xl">
              Waar het bruine water vandaan komt, kun je vaak zelf achterhalen. Kijk wie er last van heeft en uit welke kraan het komt.
            </p>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-edge bg-white">
              <table className="w-full text-sm text-left">
                <thead className="bg-amber/10 text-ink">
                  <tr>
                    <th scope="col" className="p-4 font-display font-bold">Wat zie je?</th>
                    <th scope="col" className="p-4 font-display font-bold">Waarschijnlijke oorzaak</th>
                    <th scope="col" className="p-4 font-display font-bold">Wat doe je?</th>
                  </tr>
                </thead>
                <tbody>
                  {SITUATIES.map(([wat, oorzaak, actie]) => (
                    <tr key={wat} className="border-t border-edge align-top">
                      <th scope="row" className="p-4 font-semibold text-ink">{wat}</th>
                      <td className="p-4 text-dim">{oorzaak}</td>
                      <td className="p-4 text-dim">{actie}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Is bruin water uit de kraan gevaarlijk?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Meestal niet. Vitens geeft aan dat je er niet ziek van wordt; het smaakt vooral vies. De kleine hoeveelheden ijzer en mangaan die loskomen, vormen geen gezondheidsrisico. Wel raadt het waterbedrijf aan om <strong className="text-ink">baby&apos;s en ouderen</strong> voor de zekerheid iets anders te geven tot het water weer helder is.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Ons advies: drink het niet zolang je het kunt zien. Wacht tot het water weer helder is, ook voor de fles van de baby en voor koffie en thee. Hoe je de fles verder veilig klaarmaakt, lees je in <Link href="/kennisbank/kraanwater-babyvoeding" className="underline hover:text-ink">kraanwater voor babyvoeding</Link>. Ruikt of smaakt het water ook daarna nog vreemd, of blijft het troebel, neem dan contact op met je waterbedrijf. Meer over de veiligheid van ons drinkwater lees je in <Link href="/kennisbank/is-kraanwater-veilig" className="underline hover:text-ink">is kraanwater veilig?</Link>
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Bruin water en je wasgoed, boiler en apparaten</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Het grootste risico van bruin water uit de kraan is niet je gezondheid, maar je was. IJzerdeeltjes geven bruine vlekken, vooral in witte en lichte kleding.
            </p>
            <ul className="mt-4 space-y-2 text-dim leading-relaxed list-disc pl-5">
              <li><strong className="text-ink">Witte was uitstellen</strong> tot het water weer helder is.</li>
              <li><strong className="text-ink">Toch vlekken?</strong> Laat de kleding niet opdrogen, maar gooi hem meteen nog een keer in de machine, met een schepje vlekkenmiddel zoals Biotex.</li>
              <li><strong className="text-ink">Vaatwasser en koffiemachine</strong> pas weer gebruiken na het doorspoelen, zodat er geen vuil in de apparaten komt.</li>
              <li><strong className="text-ink">Zuinig aan doen bij piekgebruik.</strong> Op tropische dagen helpt elke minuut minder douchen, en draai de wasmachine en vaatwasser liever 's avonds laat en alleen als ze vol zitten.</li>
            </ul>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/filters-closeup.png" alt="Voorfilter van een osmosesysteem dat roest uit bruin water uit de kraan opvangt" fill loading="eager" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Waterfilter</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat doet bruin water met je waterfilter?</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Heb je een <Link href="/osmosesysteem" className="underline hover:text-ink">osmosesysteem</Link> onder het aanrecht, dan vangt het voorfilter de roestdeeltjes op voordat ze bij je drinkwater komen. Het <Link href="/winkel/ppc-filter" className="underline hover:text-ink">PPC-voorfilter</Link> van Water-zuivering houdt deeltjes tot 1 micron tegen: zand, roest en slib. Daarna filtert het membraan de rest.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Eén kanttekening: een voorfilter dat veel roest opvangt, raakt sneller vol. Komt er vaak bruin water uit de kraan in jouw wijk, dan kan het voorfilter eerder aan vervanging toe zijn dan na het gebruikelijke jaar. Hoe vaak je filters vervangt, lees je in <Link href="/kennisbank/waterfilter-vervangen-hoe-vaak" className="underline hover:text-ink">hoe vaak moet je een waterfilter vervangen</Link>. Heb je nog geen filter en wil je weten welk type bij jouw situatie past, bekijk dan de <Link href="/waterfilter" className="underline hover:text-ink">soorten waterfilters</Link> naast elkaar.
              </p>
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe lang duurt bruin water uit de kraan?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Meestal is het binnen een paar uur voorbij, zodra de deeltjes uit het net zijn gespoeld. Een vaste tijd is er niet: het hangt af van de oorzaak en van hoe groot het getroffen gebied is. Bij grote werkzaamheden kan het waterbedrijf zelf de leidingen doorspoelen.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Is het water na een paar uur wachten en goed doorspoelen nog steeds bruin? Of komt het steeds terug terwijl je buren nergens last van hebben? Bel dan het storingsnummer van je waterbedrijf. Dat staat op hun website. Vitens heeft bijvoorbeeld een gratis storingsnummer dat dag en nacht bereikbaar is.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Benieuwd of de smaak van je kraanwater per regio echt verschilt? Lees ook <Link href="/kennisbank/slechtste-kraanwater-nederland" className="underline hover:text-ink">het slechtste kraanwater van Nederland: de feiten</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over bruin water uit de kraan</h2>
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
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Altijd helder drinkwater uit je eigen kraan</h2>
            <p className="mt-4 text-white/70">Een osmosesysteem onder het aanrecht filtert roest, zand en slib eruit, en ook chloor, PFAS en microplastics. Vraag vrijblijvend een offerte aan.</p>
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
