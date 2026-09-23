import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import FaqSchema from '@/components/FaqSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import PfasChecker from '@/components/PfasChecker';
import { createClient } from '@/lib/supabase/server';

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} van de 5 sterren`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} width="14" height="14" viewBox="0 0 24 24" fill={n <= rating ? '#EDA71B' : 'none'} stroke="#EDA71B" strokeWidth="1.6" aria-hidden="true">
          <path d="M12 2l2.9 6.2 6.8.8-5 4.6 1.4 6.7L12 16.9 5.9 20.3l1.4-6.7-5-4.6 6.8-.8L12 2z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}

const BRONNEN = [
  'Blusschuim van brandweeroefenterreinen en vliegvelden',
  'Antiaanbaklagen van koekenpannen',
  'Waterafstotende kleding, regenjassen en outdoor-textiel',
  'Voedselverpakkingen zoals pizzadozen en frietzakken',
  'Cosmetica en persoonlijke verzorgingsproducten',
  'Industriële processen bij chemiefabrieken',
];

const GEZONDHEID = [
  ['Immuunsysteem', 'Het eerste en best onderbouwde effect: EFSA concludeert dat PFAS het afweersysteem kunnen verzwakken, waardoor bijvoorbeeld vaccinaties minder goed aanslaan.'],
  ['Cholesterol en lever', 'Langdurige blootstelling wordt in verband gebracht met een hoger cholesterolgehalte en mogelijke leverschade.'],
  ['Voortplanting en ontwikkeling', 'PFOA staat bekend om effecten op de vruchtbaarheid en op de ontwikkeling van het ongeboren kind.'],
  ['Blijft jarenlang in het lichaam', 'De halfwaardetijd van PFOS is gemiddeld 5 jaar, van PFOA ongeveer 3,5 jaar — het lichaam raakt het dus maar heel langzaam kwijt.'],
];

const FILTER_VERGELIJKING = [
  { naam: 'Kannenfilter (Brita e.d.)', score: 'Nauwelijks effect', percentage: 10, kleur: '#D64545' },
  { naam: 'Koolstofblokfilter', score: '60-90%, mist korte-keten PFAS', percentage: 75, kleur: '#E39A2D' },
  { naam: 'Omgekeerde osmose', score: 'Tot 99%, ook korte-keten PFAS', percentage: 99, kleur: '#3DA35D' },
];

const STAPPEN = [
  ['Voorfilter', 'Grof vuil, zand en chloor worden er als eerste uitgehaald, zodat het membraan daarna niet dichtslibt.'],
  ['Omgekeerde-osmosemembraan', 'Het water wordt onder druk door een membraan met poriën van 0,0001 micron geperst — ongeveer 500 keer kleiner dan de meeste PFAS-moleculen. Wat er niet doorheen past, spoelt weg via het afvalwater.'],
  ['Nafilter', 'Een laatste polijstfilter haalt de laatste restjes en een eventuele metaalsmaak weg.'],
  ['Kraan', 'Wat overblijft is water waar vrijwel alleen nog watermoleculen inzitten.'],
];

const KENMERKEN = [
  ['0,0001 micron membraan', 'Zo fijn dat zelfs de kleinste, kortketenige PFAS-varianten (zoals GenX en PFBS) er niet doorheen komen — daar lopen koolstoffilters juist op vast.'],
  ['Drie filtertrappen', 'Voorfilter, membraan en nafilter werken na elkaar, niet als los onderdeel.'],
  ['10,5 cm breed', 'Past staand of liggend onder vrijwel elk aanrecht, zonder dat u kastruimte inlevert.'],
  ['10 jaar garantie', 'Inclusief installatie door onze eigen monteurs, niet door een externe partij.'],
];

export const metadata = {
  alternates: { canonical: '/pfas-check' },
  title: 'PFAS in uw kraanwater checken — Water-zuivering',
  description: 'Check hoeveel PFAS er in het kraanwater in uw regio zit op basis van de RIVM-gezondheidsnorm, en ontdek hoe een osmose waterzuiveraar PFAS verwijdert.',
};

const UITLEG = [
  ['Wat betekent PFAS precies?', 'PFAS staat voor poly- en perfluoralkylstoffen: een verzamelnaam voor meer dan 10.000 door de mens gemaakte chemicaliën, waaronder bekendere namen als PFOA, PFOS en GenX. De koolstof-fluorbinding waar ze op gebouwd zijn hoort tot de sterkste in de scheikunde — daardoor breken ze in de natuur nauwelijks af. Vandaar de bijnaam "forever chemicals".'],
  ['Hoe komt PFAS in het drinkwater terecht?', 'Via blusschuim, industrieel afvalwater en producten die in de bodem of het oppervlaktewater terechtkomen sijpelt PFAS uiteindelijk door naar grondwater en rivieren — de bronnen waaruit Nederlandse waterbedrijven drinkwater winnen. Zuiveringsinstallaties van waterbedrijven zijn niet ontworpen om PFAS eruit te halen.'],
  ['Wat is de RIVM-gezondheidsnorm?', 'Het RIVM hanteert een gezondheidskundige richtwaarde van 4,4 nanogram per liter (ng/l), uitgedrukt in PFOA-equivalenten (PEQ). Dit is geen wettelijke norm — de wettelijke Europese norm ligt met 100 ng/l veel hoger, en daar voldoen alle Nederlandse waterbedrijven aan. De RIVM-richtwaarde is de strengere, gezondheidskundige advieswaarde waar ruim een derde van Nederland boven zit.'],
  ['Hoe betrouwbaar is de check hierboven?', 'Onze check geeft een regionale indicatie op basis van uw provincie en waterleverancier, gebaseerd op de meetgegevens van de Nederlandse waterbedrijven zoals geanalyseerd door Greenpeace Nederland. Het is geen exacte check op uw 4-cijferige postcode — die corrigeert ook voor mengwater binnen een postcodegebied. Voor die precisie verwijzen we naar de officiële Greenpeace-postcodechecker.'],
  ['Waarom werkt een gewone kannenfilter niet tegen PFAS?', 'Kannenfilters en de meeste koolstoffilters zijn ontworpen voor chloor en smaak, niet voor moleculen zo klein als PFAS. Vooral de kortketenige varianten zoals GenX en PFBS glippen er grotendeels doorheen. Onafhankelijke tests laten zien dat alleen omgekeerde osmose en ionenwisseling consistent boven de 90% uitkomen.'],
  ['Is één systeem genoeg voor het hele huis?', 'Ons systeem wordt aangesloten op de kraan die u voor drinken en koken gebruikt, meestal de keukenkraan. Voor douchewater is het meestal niet nodig, omdat PFAS-opname via de huid veel beperkter is dan via drinkwater.'],
];

export default async function PfasCheckPage() {
  const supabase = await createClient();
  const { data: reviews } = await supabase
    .from('reviews')
    .select('id, name, city, rating, review_text, created_at')
    .eq('approved', true)
    .order('created_at', { ascending: false })
    .limit(3);
  const topReviews = reviews || [];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'PFAS check', url: 'https://www.water-zuivering.nl/pfas-check' },
        ]}
      />
      <FaqSchema items={UITLEG} />
      <RevealObserver />
      <Header />

      <main>
        {/* HERO + CHECKER */}
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="glow drift2 w-[360px] h-[360px] bg-amber/10 top-10 -right-24" />
          <div className="relative max-w-4xl mx-auto px-6 py-16 md:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">PFAS in kraanwater</span>
              <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">Hoeveel PFAS zit er in úw kraanwater?</h1>
              <p className="mt-5 text-dim text-lg">
                Vul uw postcode en huisnummer in en zie direct hoe uw regio scoort ten opzichte van de RIVM-gezondheidsnorm van 4,4 ng/l.
              </p>
            </div>
            <PfasChecker />
            <p className="mt-6 text-center text-sm text-dim">
              Liever niet wachten op de check?{' '}
              <Link href="/aanmelden" className="cursor-pointer font-bold text-ink underline decoration-amber decoration-2 underline-offset-2 hover:text-amber-dark">
                Vraag direct een vrijblijvende offerte aan
              </Link>
            </p>
          </div>
        </section>

        {/* WAT IS PFAS - UITGEBREID */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Achtergrond</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat is PFAS eigenlijk?</h2>
            </div>
            <div className="mt-10 grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-dim leading-relaxed">
                  PFAS is geen enkele stof, maar een familie van meer dan 10.000 door mensen gemaakte chemicaliën — bekende namen daaruit zijn PFOA, PFOS en GenX. Ze zijn gebouwd rond een koolstof-fluorbinding, een van de sterkste bindingen die er in de scheikunde bestaan. Dat maakt ze extreem water-, vet- en vuilafstotend, maar ook vrijwel onafbreekbaar in de natuur. Vandaar de bijnaam <em>forever chemicals</em>: eenmaal geloosd, verdwijnen ze niet meer vanzelf.
                </p>
                <p className="mt-4 text-dim leading-relaxed">
                  Sinds de jaren '40 zitten deze stoffen in duizenden alledaagse producten, juist vanwege die handige eigenschappen:
                </p>
                <ul className="mt-4 space-y-2">
                  {BRONNEN.map((bron) => (
                    <li key={bron} className="flex items-start gap-2.5 text-sm text-dim">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber shrink-0" />
                      {bron}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-dim leading-relaxed">
                  Via bodem, grondwater en rivieren komt PFAS uiteindelijk terecht in de bronnen waar Nederlandse waterbedrijven ons drinkwater uit winnen. Standaard zuiveringsinstallaties zijn daar niet op gebouwd — PFAS gaat er gewoon doorheen.
                </p>
              </div>
              <div>
                <p className="font-display font-bold text-ink mb-4">Wat het met uw lichaam doet</p>
                <div className="space-y-4">
                  {GEZONDHEID.map(([titel, uitleg]) => (
                    <div key={titel} className="reveal rounded-xl border border-edge p-4">
                      <p className="font-semibold text-ink text-sm">{titel}</p>
                      <p className="mt-1 text-sm text-dim leading-relaxed">{uitleg}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-dim/70 leading-relaxed">
                  Bron: <a href="https://www.rivm.nl/pfas/risicos-pfas-voor-gezondheid-en-milieu" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">RIVM, risico's PFAS voor gezondheid en milieu</a>.
                </p>
                <Link href="/aanmelden" className="cursor-pointer mt-5 inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-lg shadow-amber/25">
                  Bescherm uw gezin, vraag een offerte aan
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* HOE WERKT HET SYSTEEM */}
        <section className="relative overflow-hidden">
          <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Onze oplossing</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe werkt onze waterzuiveraar tegen PFAS?</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Niet elk filter is hetzelfde. Een kannenfilter houdt chloor en smaak tegen, maar laat PFAS grotendeels door — de moleculen zijn er simpelweg te klein voor. Omgekeerde osmose werkt fundamenteel anders: het perst water onder druk door een membraan dat op moleculair niveau filtert.
              </p>
            </div>

            <div className="mt-14 grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3] bg-white order-2 lg:order-1">
                <Image src="/assets/img/hero-vrouw-water.webp" alt="Vrouw tapt schoon, PFAS-vrij water uit de kraan met osmose waterzuiveraar" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="space-y-5">
                  {STAPPEN.map(([titel, uitleg], i) => (
                    <div key={titel} className="reveal flex gap-4">
                      <span className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-amber text-ink text-sm font-bold">{i + 1}</span>
                      <div>
                        <p className="font-display font-bold text-ink text-sm">{titel}</p>
                        <p className="mt-1 text-sm text-dim leading-relaxed">{uitleg}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* INSTALLATIE / 3-WEG KRAAN */}
            <div className="mt-16 rounded-2xl card p-6 md:p-8">
              <p className="font-display font-bold text-ink mb-3">Waar wordt het systeem geplaatst?</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-sm text-dim leading-relaxed">
                    Het filter zelf staat onder het aanrecht, meestal in het kastje onder de spoelbak naast het sifon. Dankzij de smalle behuizing van 10,5 cm past het ook in kleinere keukens, tussen de leidingen en het afvalsysteem door.
                  </p>
                  <p className="mt-3 text-sm text-dim leading-relaxed">
                    Voor de kraan zelf heeft u twee opties. De meest gekozen oplossing is een aparte <strong className="text-ink">3-wegkraan</strong>: naast uw bestaande mengkraan komt een tweede, kleinere kraan specifiek voor gezuiverd water. Zo blijft warm en koud water gewoon uit de oude kraan komen, en tapt u gezuiverd drinkwater apart — koud, en indien gewenst ook direct koolzuurhoudend of heet, afhankelijk van het gekozen kraantype.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-dim leading-relaxed">
                    Heeft u liever geen extra gat in het aanrecht? Dan sluiten we het systeem aan op een tussenstuk in de koudwaterleiding van uw bestaande kraan. Praktisch onderhoud, geen zichtbare wijziging aan het aanrecht — maar dan komt er altijd gezuiverd water uit die ene kraan, niet naast elkaar.
                  </p>
                  <p className="mt-3 text-sm text-dim leading-relaxed">
                    Onze monteur bekijkt bij de installatie de ruimte onder uw aanrecht en de staat van de leidingen, en adviseert welke optie het beste past. De installatie zelf duurt gemiddeld 1 tot 2 uur en is bij de meeste standaardkeukens zonder verbouwing mogelijk.
                  </p>
                </div>
              </div>
            </div>

            {/* VERGELIJKING FILTERTYPES */}
            <div className="mt-16">
              <p className="font-display font-bold text-ink text-center mb-2">Waarom niet gewoon een kannenfilter?</p>
              <p className="text-sm text-dim text-center max-w-xl mx-auto mb-8">Onafhankelijke tests laten grote verschillen zien tussen filtertypen, vooral bij kortketenige PFAS zoals GenX.</p>
              <div className="max-w-2xl mx-auto space-y-4">
                {FILTER_VERGELIJKING.map((f) => (
                  <div key={f.naam} className="rounded-xl border border-edge p-4">
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <p className="font-semibold text-ink text-sm">{f.naam}</p>
                      <p className="text-sm font-bold" style={{ color: f.kleur }}>{f.score}</p>
                    </div>
                    <div className="h-2.5 rounded-full bg-bg overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${f.percentage}%`, backgroundColor: f.kleur }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-dim/70 text-center">
                Gebaseerd op onafhankelijke effectiviteitstests van filtertypen tegen PFAS. NSF/ANSI 58 geldt als certificeringsstandaard voor omgekeerde-osmosesystemen.
              </p>
            </div>

            <div className="mt-10 text-center">
              <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-lg shadow-amber/25">
                Vraag vrijblijvend een offerte aan
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* KENMERKEN */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="glow w-[400px] h-[400px] bg-amber/10 top-0 -right-32" />
          <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">In het kort</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom kiezen voor onze waterzuiveraar?</h2>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {KENMERKEN.map(([titel, uitleg]) => (
                <div key={titel} className="reveal rounded-2xl card p-6 flex gap-4">
                  <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-amber/15 text-amber-dark">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <div>
                    <p className="font-display font-bold text-ink">{titel}</p>
                    <p className="mt-1.5 text-sm text-dim leading-relaxed">{uitleg}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-lg shadow-amber/25">
                Ontvang een offerte op maat
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        {topReviews.length > 0 && (
          <section className="relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
              <div className="flex items-center justify-between gap-4 mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vertrouwd</span>
                  <h2 className="mt-2 font-display text-xl md:text-2xl font-extrabold tracking-tight">Wat klanten van ons vinden</h2>
                </div>
                <Link href="/reviews" className="cursor-pointer hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-ink hover:text-amber-dark transition-colors shrink-0">
                  Alle reviews
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
              <div className="grid sm:grid-cols-3 gap-5">
                {topReviews.map((review) => (
                  <div key={review.id} className="reveal rounded-2xl card p-5">
                    <Stars rating={review.rating} />
                    <p className="mt-2.5 text-sm text-ink leading-snug line-clamp-3">&ldquo;{review.review_text}&rdquo;</p>
                    <p className="mt-2.5 text-xs font-semibold text-dim">{review.name}{review.city ? ` — ${review.city}` : ''}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ - ONDERAAN */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over PFAS</h2>
            </div>
            <div className="mt-10 space-y-3">
              {UITLEG.map(([vraag, antwoord]) => (
                <details key={vraag} className="reveal group rounded-2xl card p-5">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-display font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded">
                    {vraag}
                    <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-amber/12 text-amber-dark transition-transform group-open:rotate-45">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-dim leading-relaxed">{antwoord}</p>
                </details>
              ))}
            </div>
            <p className="mt-8 text-xs text-dim/70 text-center">
              Bronnen: <a href="https://www.rivm.nl/pfas" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">RIVM</a> en Greenpeace Nederland, "Uitleg en verantwoording bij de PFAS kraanwater postcodechecker" (22 september 2026).
            </p>
          </div>
        </section>

        {/* SLOT CTA */}
        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Schoon water, zonder PFAS, uit uw eigen kraan</h2>
            <p className="mt-4 text-white/70">Onze osmose waterzuiveraar filtert PFAS, chloor, medicijnresten en microplastics eruit voordat het uw glas bereikt. Vraag een vrijblijvende offerte aan.</p>
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
