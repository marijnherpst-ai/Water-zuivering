import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  alternates: { canonical: '/over-ons' },
  title: 'Over ons — Water-zuivering',
  description:
    'Maak kennis met Water-zuivering en oprichter Tomas: 4 jaar ervaring met waterfilters en 100 geteste producten. Lees hoe wij werken en wat we voor je doen.',
};

const CIJFERS = [
  ['4 jaar', 'ervaring met waterzuivering en waterfilters'],
  ['100', 'producten getest'],
  ['10 jaar', 'garantie op je systeem'],
];

const REDENEN = [
  ['Minder flessen, minder gesjouw', 'Zuiver water uit je eigen kraan is makkelijker dan kratten water naar huis dragen, en het scheelt plastic afval. Wat je op termijn bespaart, reken je zelf uit met onze besparingscheck.', '/besparing', 'Bereken je besparing'],
  ['Weten wat er in je water zit', 'Veel mensen vragen zich af wat er in hun drinkwater zit. Daarom leggen we in de kennisbank in gewone taal uit hoe drinkwater en waterzuivering werken, en kun je met onze storingencheck zien of er in jouw buurt iets aan de hand is.', '/storingen', 'Check storingen in jouw buurt'],
  ['Een systeem zonder gedoe', 'Je vervangt de filters zelf zonder gereedschap en er zijn geen dure servicecontracten. Zuiver water hoort een gewoonte te zijn, geen project.', '/uitleg', 'Bekijk hoe het werkt'],
];

const OVER_DE_GRENS = [
  ['31%', 'van de Catalaanse huishoudens had een waterfiltersysteem in huis'],
  ['51%', 'koos flessenwater vooral om de smaak en geur van kraanwater'],
  ['Voldoet', 'Nederlands drinkwater voldoet aan de wettelijke eisen, maar de bronnen staan onder druk'],
];

const WERKWIJZE = [
  ['Eerst een goed gesprek', 'Je vraagt vrijblijvend een offerte aan en we kijken samen welk systeem bij jouw keuken en huishouden past.'],
  ['Vakkundige installatie', 'Onze eigen monteur plaatst het systeem onder je aanrecht en sluit alles netjes aan. Een installatie duurt meestal 1 tot 2 uur.'],
  ['Onderhoud dat je zelf kunt doen', 'De filters vervang je zonder gereedschap. Het display op het apparaat laat zien wanneer het tijd is, dus je hoeft niets bij te houden.'],
  ['Nederlandse service', 'Vragen na de installatie? Je belt, appt of mailt gewoon met ons. De contactgegevens staan onderaan deze pagina.'],
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Over ons', url: 'https://www.water-zuivering.nl/over-ons' },
        ]}
      />
      <RevealObserver />
      <Header />

      <main>
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Over ons</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Zuiver water, uitgezocht door iemand die het echt heeft getest
            </h1>
            <p className="mt-5 text-dim text-lg leading-relaxed">
              Water-zuivering is opgericht door Tomas. Hij houdt zich al 4 jaar bezig met <strong className="text-ink">waterzuivering</strong> en testte in die tijd 100 producten. Wat hij daarvan leerde, is de basis van alles wat wij aanbieden.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 grid sm:grid-cols-3 gap-6 text-center">
            {CIJFERS.map(([getal, uitleg]) => (
              <div key={getal} className="reveal rounded-2xl card p-6">
                <p className="font-display text-3xl font-extrabold text-amber-dark">{getal}</p>
                <p className="mt-2 text-sm text-dim">{uitleg}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative">
          <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wie zit er achter Water-zuivering?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Tomas is eigenaar van Water-zuivering. Vier jaar lang verdiepte hij zich in <strong className="text-ink">waterfilters</strong>: hoe ze werken, waar ze in de praktijk tegenvallen en waar ze het verschil maken. In die tijd testte hij 100 producten, van eenvoudige kraanfilters tot complete osmosesystemen.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Dat testen zie je terug in wat wij verkopen. Wij bieden geen breed assortiment waar je zelf doorheen moet zoeken, maar een systeem waar we achter staan: een <Link href="/osmosesysteem" className="underline hover:text-ink">osmosesysteem</Link> met drie filtertrappen dat je onder je aanrecht laat plaatsen.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Wat we je vertellen over ons systeem en over drinkwater, kun je terugvinden in onze <Link href="/kennisbank" className="underline hover:text-ink">kennisbank</Link>. Daar leggen we in gewone taal uit hoe waterzuivering werkt, wat het kost en wanneer een filter zinvol is.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-center">Waarom wij dit doen</h2>
            <p className="mt-4 text-dim text-center max-w-2xl mx-auto leading-relaxed">
              Wij vinden dat zuiver drinkwater uit je eigen kraan gewoon moet kunnen: zonder gedoe en zonder onnodig plastic. Dat is waar we elke dag aan werken.
            </p>
            <div className="mt-10 grid md:grid-cols-3 gap-5">
              {REDENEN.map(([titel, tekst, href, linktekst]) => (
                <div key={titel} className="reveal rounded-2xl card p-6 flex flex-col">
                  <p className="font-display font-bold text-ink">{titel}</p>
                  <p className="mt-2 text-sm text-dim leading-relaxed">{tekst}</p>
                  <Link href={href} className="mt-4 text-sm font-semibold text-amber-dark underline hover:text-ink">{linktekst}</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-center">Kijk eens over de grens: Spanje en Portugal</h2>
            <p className="mt-4 text-dim text-center max-w-2xl mx-auto leading-relaxed">
              In Zuid-Europa is het heel gewoon om je kraanwater te filteren of liever flessenwater te drinken. Niet omdat het water er onveilig is, maar omdat het niet altijd lekker smaakt.
            </p>
            <div className="mt-10 grid sm:grid-cols-3 gap-5 text-center">
              {OVER_DE_GRENS.map(([getal, uitleg]) => (
                <div key={getal} className="reveal rounded-2xl card p-6">
                  <p className="font-display text-3xl font-extrabold text-amber-dark">{getal}</p>
                  <p className="mt-2 text-sm text-dim">{uitleg}</p>
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-dim text-center">Spanje: onderzoek van de Universitat Oberta de Catalunya onder 581 huishoudens in Catalonië (2015).</p>
            <div className="mt-10 max-w-3xl mx-auto">
              <p className="text-dim leading-relaxed">
                In Spanje en Portugal is het leidingwater over het algemeen veilig. Toch klagen veel mensen over de smaak, door chloor en veel kalk en mineralen. In Portugal gebruiken veel huishoudens daarom een filterkan of koolstoffilter, en in de Catalaanse studie was smaak en geur voor ruim de helft de belangrijkste reden om flessenwater te kiezen. Een <strong className="text-ink">waterzuiveraar</strong> in de keuken is daar dus een logische manier om kraanwater lekkerder te maken.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                En Nederland? Ons drinkwater is van hoge kwaliteit en voldoet aan de wettelijke eisen. Toch staan de bronnen waar het uit wordt gemaakt onder druk. Vewin, de vereniging van drinkwaterbedrijven, schrijft dat medicijnresten in de bronnen toenemen, en het RIVM adviseert om de concentraties PFAS in het drinkwater in delen van Nederland de komende jaren te verlagen. Dat betekent niet dat je kraanwater onveilig is. Het betekent wel dat steeds meer mensen willen weten wat er in hun glas zit, en dat een extra filter een logische keuze kan zijn.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Lees er meer over in onze artikelen over <Link href="/kennisbank/pfas-in-kraanwater" className="underline hover:text-ink">PFAS in kraanwater</Link> en de <Link href="/kennisbank/drinkwaternormen-nederland" className="underline hover:text-ink">drinkwaternormen in Nederland</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-center">Zo werken wij</h2>
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {WERKWIJZE.map(([titel, tekst]) => (
                <div key={titel} className="reveal rounded-2xl card p-6">
                  <p className="font-display font-bold text-ink">{titel}</p>
                  <p className="mt-2 text-sm text-dim leading-relaxed">{tekst}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-dim">
              Meer over onze voorwaarden lees je bij de <Link href="/garantie" className="underline hover:text-ink">garantie</Link>. Ervaringen van klanten vind je bij de <Link href="/reviews" className="underline hover:text-ink">reviews</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Bedrijfsgegevens</h2>
            <div className="mt-6 rounded-2xl card overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['Bedrijfsnaam', 'Water-zuivering'],
                    ['Oprichter', 'Tomas'],
                    ['Adres', 'Industrieweg 110, 2651 BD Berkel en Rodenrijs'],
                    ['KVK-nummer', '88718301'],
                    ['Telefoon', '06 26 94 48 77'],
                    ['E-mail', 'info@water-zuivering.nl'],
                  ].map(([naam, waarde], i) => (
                    <tr key={naam} className={i % 2 === 0 ? 'bg-bg/50' : ''}>
                      <th scope="row" className="text-left font-semibold px-5 py-3 w-2/5 align-top">{naam}</th>
                      <td className="px-5 py-3 text-dim">{waarde}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-dim">
              Meer over hoe je ons bereikt, staat op de pagina <Link href="/contact" className="underline hover:text-ink">contact</Link>.
            </p>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Kennismaken</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Benieuwd wat zuiver water voor jouw huis betekent?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan. Je krijgt advies van iemand die de producten kent.</p>
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
