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
  alternates: { canonical: '/osmose-apparaat-kopen' },
  title: 'Osmose apparaat kopen? 7 checkpunten — Water-zuivering',
  description: 'Osmose apparaat kopen voor thuis? Zeven punten om vooraf te checken, met een rekenvoorbeeld van de filterkosten over 5 en 10 jaar.',
};

const CHECKS = [
  ['Is het apparaat bedoeld voor drinkwater?', 'Zoek je een osmose apparaat, dan kom je ook veel modellen tegen voor aquaria en glazenwassers. Die zijn voor een ander doel gemaakt. Controleer dus altijd dat een apparaat bedoeld is voor drinkwater voordat je het aansluit op je keukenkraan.'],
  ['Welke filtertrappen zitten erin?', 'Een goed drinkwatersysteem filtert in meerdere stappen. Het systeem van Water-zuivering heeft drie: een PPC-voorfilter (grof vuil, zand en roest), een RO-filter (het osmosemembraan, het hart van het systeem) en een CTO-nafilter (voor een frisse smaak).'],
  ['Hoeveel water levert het per minuut?', 'Dat bepaalt of je op je gemak een pan of fles kunt vullen. Ons systeem levert 1,58 liter gefilterd water per minuut en heeft een totale capaciteit van 4.000 liter.'],
  ['Past je waterdruk bij het apparaat?', 'Elk systeem heeft een werkbereik voor de waterdruk. Het onze is ontworpen voor 0,1 tot 0,4 MPa en beïnvloedt de druk op je bestaande kraan niet merkbaar.'],
  ['Past het in je kastje?', 'Meet de ruimte onder je spoelbak. Ons systeem is 10,5 cm breed, 42 cm diep en 43 cm hoog, en kan staand of liggend. Met de maatcheck kun je dat met een foto van je eigen kastje zien.'],
  ['Wat zit er in de prijs?', 'Vraag bij elke aanbieder of installatie, de kraan voor het gefilterde water en de eerste filters erbij zitten, en hoeveel garantie je krijgt. Bij Water-zuivering is vakkundige installatie inbegrepen en geldt 10 jaar garantie.'],
  ['Wat kosten de filters per jaar?', 'Dit is de kostenpost die je bij het kopen het snelst vergeet, en die over tien jaar het zwaarst weegt. Onderaan deze pagina rekenen we het voor je door.'],
];

const SPECS = [
  ['Type', 'Omgekeerde-osmose waterzuiveraar'],
  ['Filtertrappen', '3 (PPC, RO, CTO)'],
  ['Gefilterd water', '1,58 liter per minuut'],
  ['Totale capaciteit', '4.000 liter'],
  ['Benodigde waterdruk', '0,1 – 0,4 MPa'],
  ['Voeding en vermogen', '100–240V, 96 W'],
  ['Afmetingen (b × d × h)', '10,5 × 42 × 43 cm'],
  ['Geluid', 'minder dan 48 dB'],
  ['Garantie', '10 jaar'],
];

const FAQ = [
  ['Wat kost een osmose apparaat?', 'Het osmose apparaat van Water-zuivering kost vanaf €999, exclusief montage. Laat je het door onze eigen monteur installeren, dan staat de montage apart in je vrijblijvende offerte. Daarnaast reken je op gemiddeld ongeveer €135 per jaar aan filters.'],
  ['Is een osmose apparaat voor een aquarium geschikt voor drinkwater?', 'Niet zonder meer. Die apparaten zijn voor een ander doel gemaakt. Controleer bij de fabrikant of een apparaat nadrukkelijk voor drinkwater bedoeld is voor je het gebruikt.'],
  ['Haalt een osmose apparaat PFAS uit het water?', 'Volgens de productinformatie van ons systeem zuivert het tot 99% van onzuiverheden, waaronder PFAS, medicijnresten en microplastics. Het RO-membraan is daarvoor het belangrijkste onderdeel. Meer over de werking lees je in onze uitleg over de omgekeerde osmose filter.'],
  ['Haalt osmose ook de goede mineralen eruit?', 'Ja, omgekeerde osmose is zo grondig dat ook mineralen worden meegefilterd. Wil je die terug, dan kun je een mineraalfilter laten toevoegen, dat na het RO-filter in het systeem klikt.'],
  ['Hoe vaak moet ik de filters vervangen?', 'Het PPC- en CTO-filter gaan ongeveer 12 maanden mee, het RO-filter 24 maanden. Het display laat zien wanneer het tijd is.'],
  ['Hoe lang gaat een osmose apparaat mee?', 'Op elk systeem van Water-zuivering zit 10 jaar garantie. De filters vervang je daarbinnen volgens het schema hierboven.'],
  ['Kan ik een osmose apparaat zelf installeren?', 'Ja, dan krijg je €250 korting. Laat je het door onze monteur doen, dan is het binnen 1 tot 2 uur geregeld. Alles daarover lees je op onze pagina over de osmose installatie.'],
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Osmose apparaat kopen', url: 'https://www.water-zuivering.nl/osmose-apparaat-kopen' },
        ]}
      />
      <ProductSchema
        name="Water-zuivering osmosesysteem"
        description="Osmosesysteem voor thuis met 3-traps filtratie (PPC, RO, CTO) en direct flow zonder tank. Verwijdert chloor, PFAS, medicijnresten en microplastics uit kraanwater. 10 jaar garantie, vanaf €999 exclusief montage."
        image="https://www.water-zuivering.nl/assets/img/countertop.png"
        url="https://www.water-zuivering.nl/osmose-apparaat-kopen"
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
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Koopgids</span>
              <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
                Osmose apparaat kopen: zeven punten om vooraf te checken
              </h1>
              <p className="mt-5 text-dim text-lg">
                Wil je een <strong className="text-ink">osmose apparaat kopen</strong> voor in je keuken? Dan koop je iets waar je jaren mee leeft. Deze gids helpt je de juiste vragen te stellen, en laat zien wat de filters over 5 en 10 jaar kosten, zodat je niet pas achteraf tegen de kosten aanloopt.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-lg shadow-amber/25">
                  Vraag vrijblijvend een offerte aan
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <Link href="/osmosesysteem" className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 text-sm font-bold text-ink hover:bg-bg transition-colors">
                  Bekijk ons systeem
                </Link>
              </div>
              <PrijsVanaf className="mt-5" />
            </div>
            <div className="relative">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-[2rem] overflow-hidden border border-edge aspect-[4/5]">
                <Image src="/assets/img/countertop.png" alt="Osmose apparaat kopen: een systeem voor thuis, hier op een keukenblad" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <p className="text-dim leading-relaxed">
              Zoek je een osmose apparaat, dan krijg je een rommelig resultaat. Tussen de systemen voor thuis staan apparaten voor aquaria, voor glazenwassers en voor de industrie. Ze heten allemaal hetzelfde, maar ze zijn voor een ander doel gemaakt.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Deze gids gaat over één ding: een omgekeerde-osmosesysteem dat onder je aanrecht staat en je kraanwater tot drinkwater zuivert. Eerst de zeven punten waar je op let, daarna een rekenvoorbeeld van de kosten.
            </p>
          </div>
        </section>

        {/* VEELGEMAAKTE FOUTEN */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Drie fouten die kopers van een osmose apparaat vaak maken</h2>
            <div className="mt-6 space-y-5">
              <div>
                <p className="font-semibold text-ink text-sm">1. Alleen naar de aanschafprijs kijken</p>
                <p className="mt-1 text-sm text-dim leading-relaxed">Een apparaat dat goedkoop is in de winkel, kan jaren duurder uitpakken als de filters vaak vervangen moeten worden. Zet de filterkosten per jaar altijd naast de aanschafprijs, zoals we hieronder doen.</p>
              </div>
              <div>
                <p className="font-semibold text-ink text-sm">2. Een model voor een andere toepassing kiezen</p>
                <p className="mt-1 text-sm text-dim leading-relaxed">Een osmose apparaat voor je aquarium of voor het wassen van ramen zuivert water voor een heel ander doel dan drinken. Voor je keukenkraan wil je een systeem dat daarvoor is gemaakt.</p>
              </div>
              <div>
                <p className="font-semibold text-ink text-sm">3. Pas na aankoop meten of het past</p>
                <p className="mt-1 text-sm text-dim leading-relaxed">Onder de spoelbak zit je met leidingen, een afvalbak en soms een boiler. Meet de ruimte voor je bestelt, of maak een foto van je kastje en laat de <Link href="/maatcheck" className="underline hover:text-ink">maatcheck</Link> het voor je uitzoeken.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CHECKLIST */}
        <section className="relative">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-center">Zeven punten voor je een osmose apparaat koopt</h2>
            <p className="mt-3 text-dim text-center max-w-xl mx-auto">Loop ze af met elke aanbieder die je overweegt, ons inbegrepen.</p>
            <div className="mt-10 space-y-5">
              {CHECKS.map(([titel, uitleg], i) => (
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

        {/* KOSTEN OVER JAREN */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Rekenvoorbeeld</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat kosten de filters over 5 en 10 jaar?</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Het PPC- en CTO-filter vervang je elk jaar (beide €49,99), het RO-filter elke twee jaar (€69,99, dus €35 per jaar). Samen is dat ongeveer €135 per jaar.
              </p>
              <div className="mt-6 rounded-2xl card overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ['Per jaar', 'ca. €135'],
                      ['Over 5 jaar', 'ca. €675'],
                      ['Over 10 jaar', 'ca. €1.350'],
                    ].map(([periode, bedrag], i) => (
                      <tr key={periode} className={i % 2 === 0 ? 'bg-bg/50' : ''}>
                        <td className="px-5 py-3 text-ink font-semibold">{periode}</td>
                        <td className="px-5 py-3 text-ink text-right font-semibold">{bedrag}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-dim leading-relaxed">
                Dit zijn alleen de filters, zonder de aanschaf van het systeem. Reken het zelf door met je eigen verbruik in onze <Link href="/besparing" className="underline hover:text-ink">besparingscalculator</Link>, of lees meer in <Link href="/kennisbank/wat-kost-een-waterzuiveringssysteem" className="underline hover:text-ink">wat kost een waterzuiveringssysteem</Link>.
              </p>
            </div>
            <div className="relative">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/filters-closeup.png" alt="Osmose apparaat kopen: de drie filters van het systeem, PPC, RO en CTO" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* SPECS */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zo scoort ons systeem op die punten</h2>
            <p className="mt-4 text-dim leading-relaxed">Zo kun je de gegevens van een andere aanbieder er direct naast leggen.</p>
            <div className="mt-6 rounded-2xl card overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {SPECS.map(([naam, waarde], i) => (
                    <tr key={naam} className={i % 2 === 0 ? 'bg-bg/50' : ''}>
                      <td className="px-5 py-3 text-ink font-semibold">{naam}</td>
                      <td className="px-5 py-3 text-dim text-right">{waarde}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-dim leading-relaxed">
              Een kleine kanttekening die bij elk osmose apparaat hoort: omgekeerde osmose is zo grondig dat ook goede mineralen worden meegefilterd. Wil je die terug, dan kan een <Link href="/winkel/cto-filter-met-mineralen" className="underline hover:text-ink">mineraalfilter</Link> worden toegevoegd. En wil je weten hoe de filtering precies werkt, lees dan onze uitleg over de <Link href="/kennisbank/omgekeerde-osmose-filter" className="underline hover:text-ink">omgekeerde osmose filter</Link>.
            </p>
          </div>
        </section>

        <ReviewsSectie />

        {/* FAQ */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen</h2>
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
            <p className="mt-6 text-sm text-dim text-center">
              Meer weten over de installatie? Bekijk <Link href="/osmose-installatie" className="underline hover:text-ink">hoe een osmose installatie verloopt</Link>.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Weten wat een osmose apparaat voor jouw keuken kost?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan, inclusief installatie. We bellen je meestal binnen één werkdag.</p>
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
