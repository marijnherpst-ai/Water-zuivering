import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import FaqSchema from '@/components/FaqSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import ReviewsSectie from '@/components/ReviewsSectie';
import PrijsVanaf, { PRIJS_VANAF } from '@/components/PrijsVanaf';
import ProductSchema from '@/components/ProductSchema';

export const dynamic = 'force-dynamic';

export const metadata = {
  alternates: { canonical: '/osmose-installatie' },
  title: 'Osmose installatie thuis: zo verloopt het — Water-zuivering',
  description: 'Osmose installatie thuis: wat er op de installatiedag gebeurt, wat je nodig hebt, hoe lang het duurt en wanneer zelf installeren €250 scheelt.',
};

const STAPPEN = [
  ['Afspraak en korte check', 'Na je aanvraag bellen we je, meestal binnen één werkdag. We bespreken je keuken en je kastje onder de spoelbak, en plannen samen een moment dat de monteur kan komen.'],
  ['De aansluiting op de waterleiding', 'De koudwaterkraan gaat kort dicht en er komt een 3-weg aansluiting op. Zo krijgt het systeem zijn watertoevoer, en blijft je gewone kraan gewoon werken.'],
  ['De kraan voor het gefilterde water', 'Het gefilterde water komt uit een eigen kraan op je aanrecht, of uit een 3-weg kraan die gewoon en gefilterd water combineert. De monteur plaatst die kraan.'],
  ['Het systeem krijgt zijn plek', 'Het systeem komt op een vlakke plek in het kastje onder je aanrecht, staand of liggend. Het bedieningspaneel draait mee, dus liggend plaatsen kan zonder gedoe. Er komt geen apart waterreservoir bij: het systeem maakt het water op het moment dat je de kraan opendraait.'],
  ['Slangen aansluiten en controleren', 'Alle slangen worden aangesloten: de watertoevoer, het gefilterde water en de afvoer voor afvalwater. Elke aansluiting wordt gecontroleerd voordat het water en de stroom weer aangaan. Daarna gaat de stekker in het stopcontact, lopen de filters vanzelf vol en is het systeem binnen enkele minuten klaar voor gebruik.'],
];

const BENODIGD = [
  ['Ruimte onder de spoelbak', 'Ruim 10,5 cm in de breedte, 42 cm in de diepte en 43 cm in de hoogte. Past het niet rechtop, dan kan het systeem ook op zijn kant.'],
  ['Een stopcontact in de buurt', 'Het systeem werkt op 100 tot 240 volt en gebruikt 96 watt, dus een gewoon stopcontact volstaat.'],
  ['Voldoende waterdruk', 'Het systeem is ontworpen voor een waterdruk van 0,1 tot 0,4 MPa, wat normale leidingdruk in een huis is.'],
  ['Een binnenruimte', 'Het systeem werkt tussen 4 en 40 graden en is bedoeld voor gebruik binnenshuis, zoals in een keukenkast.'],
];

const FAQ = [
  ['Hoe lang duurt een osmose installatie?', 'Bij ons duurt de installatie meestal 1 tot 2 uur, door een vakkundige monteur van Water-zuivering.'],
  ['Wat kost een osmose installatie?', 'Het systeem kost vanaf €999, exclusief montage. Laat je het door onze eigen monteur installeren, dan staat de montage apart in je offerte; installeer je zelf, dan betaal je alleen het systeem. Laat je offertes van andere partijen vergelijken, controleer dan altijd of installatie, de kraan en de eerste filters in de prijs zitten.'],
  ['Kan ik een osmose systeem zelf installeren?', 'Ja, dat kan. Je krijgt dan €250 korting. Het vraagt wel om het aansluiten op de waterleiding en het plaatsen van een extra kraan, dus alleen aan te raden als je daar handig in bent. Laat je het door onze monteur doen, dan valt de installatie ook onder je garantie.'],
  ['Is er een afvoer nodig?', 'Ja. Bij omgekeerde osmose hoort een afvoer voor afvalwater. Die slang wordt door de monteur aangesloten, samen met de watertoevoer en de slang voor het gefilterde water.'],
  ['Valt de installatie onder de garantie?', 'Ja. Problemen die voortkomen uit de montage door onze eigen monteurs lossen we gratis op, binnen de 10 jaar garantie die op elk systeem zit.'],
  ['Past het systeem in mijn keukenkast?', 'In de meeste standaardkeukens wel. Met onze maatcheck kun je met een foto van je eigen kastje zien of het past.'],
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Osmose installatie', url: 'https://www.water-zuivering.nl/osmose-installatie' },
        ]}
      />
      <ProductSchema
        name="Water-zuivering osmosesysteem"
        description="Osmosesysteem voor thuis met 3-traps filtratie (PPC, RO, CTO) en direct flow zonder tank. Verwijdert chloor, PFAS, medicijnresten en microplastics uit kraanwater. 10 jaar garantie, vanaf €999 exclusief montage."
        image="https://www.water-zuivering.nl/assets/img/countertop.png"
        url="https://www.water-zuivering.nl/osmose-installatie"
        prijsVanaf={PRIJS_VANAF}
      />
      <FaqSchema items={FAQ} />
      <RevealObserver />
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="glow drift2 w-[360px] h-[360px] bg-amber/10 top-10 -right-24" />
          <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Osmose installatie</span>
              <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
                Osmose installatie thuis: dit gebeurt er op de installatiedag
              </h1>
              <p className="mt-5 text-dim text-lg">
                Een <strong className="text-ink">osmose installatie</strong> klinkt als een klus. In de praktijk is het systeem in een of twee uur geplaatst, aangesloten en uitgelegd. Hier lees je stap voor stap wat er gebeurt en wat je vooraf moet weten.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-lg shadow-amber/25">
                  Vraag vrijblijvend een offerte aan
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <Link href="/maatcheck" className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 text-sm font-bold text-ink hover:bg-bg transition-colors">
                  Past het in mijn kastje?
                </Link>
              </div>
              <PrijsVanaf className="mt-5" />
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-dim">
                <span className="inline-flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Installatie in 1 tot 2 uur</span>
                <span className="inline-flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Installatie inbegrepen</span>
                <span className="inline-flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>10 jaar garantie</span>
              </div>
            </div>
            <div className="relative">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-[2rem] overflow-hidden border border-edge aspect-[4/5]">
                <Image src="/assets/img/cabinet-install.png" alt="Osmose installatie: het systeem geplaatst in een keukenkastje onder het aanrecht" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <p className="text-dim leading-relaxed">
              De meeste mensen die een osmosesysteem overwegen, haken niet af op het filteren zelf, maar op de vraag: <em>wat komt er eigenlijk bij kijken?</em> Moet er iets gesloopt worden? Is er een afvoer of een elektricien nodig? Hoe lang is de keuken onbruikbaar?
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Die onzekerheid is begrijpelijk, want bij de meeste aanbieders staat nergens beschreven hoe een installatiedag er echt uitziet. Op deze pagina doen we dat wel: wat je vooraf nodig hebt, wat de monteur doet, en wat je zelf kunt doen als je liever zelf aan de slag gaat. Wil je eerst weten hoe het systeem zelf werkt? Lees dan onze uitleg over het <Link href="/osmosesysteem" className="underline hover:text-ink">osmosesysteem</Link>.
            </p>
          </div>
        </section>

        {/* STAPPEN */}
        <section className="relative">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-center">De installatie in 5 stappen</h2>
            <p className="mt-3 text-dim text-center max-w-xl mx-auto">Van eerste telefoontje tot je eerste glas gefilterd water.</p>
            <div className="mt-10 space-y-5">
              {STAPPEN.map(([titel, uitleg], i) => (
                <div key={titel} className="reveal rounded-2xl card p-6 flex gap-4">
                  <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-amber text-ink text-sm font-bold">{i + 1}</span>
                  <div>
                    <p className="font-display font-bold text-ink">{titel}</p>
                    <p className="mt-1.5 text-sm text-dim leading-relaxed">{uitleg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WAT HEB JE NODIG */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Voorbereiding</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat heb je nodig voor een osmose installatie?</h2>
              <p className="mt-4 text-dim leading-relaxed">Minder dan je denkt. Dit zijn de vier dingen waar het om draait, en ze staan allemaal in de technische gegevens van het systeem.</p>
              <div className="mt-6 space-y-5">
                {BENODIGD.map(([titel, uitleg]) => (
                  <div key={titel}>
                    <p className="font-semibold text-ink text-sm">{titel}</p>
                    <p className="mt-1 text-sm text-dim leading-relaxed">{uitleg}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/systeem-slim-105mm.png" alt="Het osmosesysteem is slechts 10,5 cm breed en past in de meeste keukenkasten" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-6 bg-white" />
              </div>
            </div>
          </div>
        </section>

        {/* VOORBEREIDEN */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Je keuken voorbereiden in drie handelingen</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Een goede voorbereiding scheelt tijd op de dag zelf. Dit kun je vooraf al regelen:
            </p>
            <ol className="mt-5 space-y-3 text-dim leading-relaxed list-decimal pl-5">
              <li><strong className="text-ink">Haal het kastje onder je spoelbak leeg</strong>, zodat de monteur bij de koudwaterleiding en op een vlakke plek voor het systeem kan.</li>
              <li><strong className="text-ink">Controleer de maat</strong> met een foto van je kastje in de <Link href="/maatcheck" className="underline hover:text-ink">maatcheck</Link>, voor het geval je twijfelt tussen staand of liggend plaatsen.</li>
              <li><strong className="text-ink">Kies de afwerking van je kraan</strong>. Voor de 3-weg kraan is er keuze uit chroom, geborsteld staal, goud en zwart.</li>
            </ol>
            <p className="mt-5 text-dim leading-relaxed">
              Meer over de kraan zelf lees je in onze uitleg over de <Link href="/3-weg-kraan" className="underline hover:text-ink">3-weg kraan</Link>.
            </p>
          </div>
        </section>

        {/* MONTEUR OF ZELF */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Door de monteur of zelf doen?</h2>
            <p className="mt-4 text-dim leading-relaxed">Allebei kan. Het verschil zit in gemak, kosten en wat er onder je garantie valt.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              <div className="rounded-2xl card p-6">
                <p className="font-display font-bold text-ink">Onze monteur</p>
                <ul className="mt-3 space-y-2 text-sm text-dim leading-relaxed">
                  <li>Klaar in 1 tot 2 uur</li>
                  <li>Installatie is inbegrepen</li>
                  <li>Montageproblemen vallen onder je 10 jaar garantie</li>
                  <li>Uitleg bij het display en de filters</li>
                </ul>
              </div>
              <div className="rounded-2xl card p-6">
                <p className="font-display font-bold text-ink">Zelf installeren</p>
                <ul className="mt-3 space-y-2 text-sm text-dim leading-relaxed">
                  <li>€250 korting op je systeem</li>
                  <li>Je sluit zelf de waterleiding, de kraan en de slangen aan</li>
                  <li>Aan te raden als je handig bent met leidingwerk</li>                </ul>
              </div>
            </div>
            <p className="mt-6 text-dim leading-relaxed">
              Twijfel je? Dan is de monteur de rustigste keuze: het aansluiten op de waterleiding en het plaatsen van een kraan kan lekkages geven als het niet goed gebeurt. Wil je eerst weten wat er in het dagelijks gebruik van je verwacht wordt, bekijk dan de <Link href="/handleiding" className="underline hover:text-ink">handleiding</Link>.
            </p>
          </div>
        </section>

        {/* NA DE INSTALLATIE */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Na de installatie: wat kost het onderhoud?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Installatie is eenmalig, onderhoud komt terug. Het systeem heeft drie filters, en elk heeft zijn eigen vervangmoment. Dit zijn de actuele filterprijzen:
            </p>
            <div className="mt-6 rounded-2xl card overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['PPC-filter (voorfilter)', 'ieder jaar', '€49,99'],
                    ['RO-filter (membraan)', 'elke 2 jaar', '€69,99'],
                    ['CTO-filter (nafilter)', 'ieder jaar', '€49,99'],
                  ].map(([naam, wanneer, prijs], i) => (
                    <tr key={naam} className={i % 2 === 0 ? 'bg-bg/50' : ''}>
                      <td className="px-5 py-3 text-ink font-semibold">{naam}</td>
                      <td className="px-5 py-3 text-dim">{wanneer}</td>
                      <td className="px-5 py-3 text-ink text-right font-semibold">{prijs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-dim leading-relaxed">
              Gemiddeld komt dat neer op zo'n €135 per jaar. Je vervangt de filters zelf, zonder gereedschap, en het display laat zien wanneer het zover is. Alle filters bestel je in de <Link href="/winkel" className="underline hover:text-ink">winkel</Link>. Een totaalbeeld van de kosten vind je in <Link href="/kennisbank/wat-kost-een-waterzuiveringssysteem" className="underline hover:text-ink">wat kost een waterzuiveringssysteem</Link>.
            </p>
          </div>
        </section>

        <ReviewsSectie />

        {/* FAQ */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over de installatie</h2>
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

        {/* CTA */}
        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Laat je osmosesysteem vakkundig installeren</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan. We bellen je meestal binnen één werkdag.</p>
            <Link href="/aanmelden" className="cursor-pointer mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25">
              Vraag vrijblijvend een offerte aan
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <PrijsVanaf donker className="mt-5" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
