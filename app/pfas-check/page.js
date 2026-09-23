import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import FaqSchema from '@/components/FaqSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import PfasChecker from '@/components/PfasChecker';
import KraanKleurSwitcher from '@/components/KraanKleurSwitcher';
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
  ['Immuunsysteem', 'Dit is het effect waar de meeste onderzoeken over eens zijn: PFAS kan uw afweer verzwakken. Vaccinaties werken daardoor minder goed aan.'],
  ['Cholesterol en lever', 'Wie langere tijd aan PFAS blootstaat, heeft vaker een hoger cholesterol. Ook de lever kan er last van krijgen.'],
  ['Voortplanting en ontwikkeling', 'PFOA kan de vruchtbaarheid beïnvloeden en de ontwikkeling van een ongeboren kind verstoren.'],
  ['Blijft jarenlang in uw lichaam', 'Uw lichaam breekt PFAS bijna niet af. PFOS blijft gemiddeld 5 jaar in uw bloed, PFOA ongeveer 3,5 jaar.'],
];

const FILTER_VERGELIJKING = [
  { naam: 'Kannenfilter (Brita e.d.)', score: 'Nauwelijks effect', percentage: 10, kleur: '#D64545' },
  { naam: 'Koolstofblokfilter', score: '60-90%, mist korte-keten PFAS', percentage: 75, kleur: '#E39A2D' },
  { naam: 'Omgekeerde osmose', score: 'Tot 99%, ook korte-keten PFAS', percentage: 99, kleur: '#3DA35D' },
];

const STAPPEN = [
  ['Voorfilter', 'Hier gaan grof vuil, zand en chloor er als eerste uit. Zo raakt het membraan daarna niet verstopt.'],
  ['Omgekeerde-osmosemembraan', 'Het water gaat onder druk door een membraan met piepkleine poriën: 0,0001 micron, ongeveer 500 keer kleiner dan de meeste PFAS-deeltjes. Wat er niet doorheen past, spoelt gewoon weg.'],
  ['Nafilter', 'Een laatste filter haalt de laatste restjes eruit, en een eventuele metaalsmaak.'],
  ['Kraan', 'Wat overblijft is puur water. Klaar om te drinken.'],
];

const KENMERKEN = [
  ['0,0001 micron membraan', 'Zo fijn dat zelfs de allerkleinste PFAS-varianten, zoals GenX en PFBS, er niet doorheen komen. Daar lopen koolstoffilters juist op vast.'],
  ['Drie filtertrappen', 'Voorfilter, membraan en nafilter werken samen, stap voor stap.'],
  ['10,5 cm breed', 'Past staand of liggend onder vrijwel elk aanrecht. U levert geen kastruimte in.'],
  ['10 jaar garantie', 'Onze eigen monteurs installeren het systeem, geen externe partij.'],
];

export const metadata = {
  alternates: { canonical: '/pfas-check' },
  title: 'PFAS in uw kraanwater checken — Water-zuivering',
  description: 'Check hoeveel PFAS er in het kraanwater in uw regio zit op basis van de RIVM-gezondheidsnorm, en ontdek hoe een osmose waterzuiveraar PFAS verwijdert.',
};

const UITLEG = [
  ['Wat betekent PFAS precies?', 'PFAS is een verzamelnaam voor meer dan 10.000 door mensen gemaakte stoffen, waaronder bekende namen als PFOA, PFOS en GenX. Ze zijn zo stevig in elkaar gezet dat ze in de natuur bijna niet afbreken. Daarom noemt men ze ook wel "forever chemicals": eenmaal in het milieu, blijven ze daar praktisch voorgoed.'],
  ['Hoe komt PFAS in het drinkwater terecht?', 'Via blusschuim, fabrieksafval en allerlei producten sijpelt PFAS de bodem in en spoelt mee met regen naar grondwater en rivieren. Precies daar wint Nederland zijn drinkwater. Gewone zuiveringsinstallaties van waterbedrijven zijn niet gebouwd om PFAS eruit te halen, dus het water blijft ermee besmet.'],
  ['Wat is de RIVM-gezondheidsnorm?', 'Het RIVM adviseert om niet meer dan 4,4 nanogram PFAS per liter drinkwater binnen te krijgen. Dat is geen wet, maar een gezondheidsadvies. De officiële, wettelijke norm in Europa ligt met 100 ng/l veel hoger, en daaraan voldoen alle Nederlandse waterbedrijven. Toch zit ruim een derde van Nederland boven het strengere RIVM-advies.'],
  ['Hoe betrouwbaar is de check hierboven?', 'Onze check laat zien hoe uw provincie en waterbedrijf er gemiddeld voor staan, op basis van cijfers die Greenpeace Nederland bij de waterbedrijven heeft opgevraagd. Het is geen meting op uw exacte postcode, dat verschilt namelijk per straat en leiding. Wilt u die precisie? Kijk dan op de officiële postcodechecker van Greenpeace.'],
  ['Waarom werkt een gewone kannenfilter niet tegen PFAS?', 'Een kannenfilter is gemaakt voor chloor en een betere smaak, niet voor iets zo kleins als PFAS. Vooral de kleinste varianten, zoals GenX en PFBS, glippen er gewoon doorheen. Alleen omgekeerde osmose en ionenwisseling halen er in de praktijk consequent meer dan 90% uit.'],
  ['Is één systeem genoeg voor het hele huis?', 'U sluit het systeem aan op de kraan waar u uit drinkt en mee kookt, meestal de keukenkraan. Voor de douche is het niet nodig: via uw huid neemt u veel minder PFAS op dan via drinkwater.'],
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
                Vul uw postcode en huisnummer in. U ziet meteen hoe uw water scoort ten opzichte van de RIVM-gezondheidsnorm van 4,4 ng/l.
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
                  PFAS is niet één stof, maar een hele familie: meer dan 10.000 door mensen gemaakte chemicaliën, met PFOA, PFOS en GenX als bekendste namen. Ze zijn zo sterk gemaakt dat water, vet en vuil er gewoon van afglijden. Handig voor de fabriek, maar diezelfde eigenschap zorgt ervoor dat de natuur ze bijna niet kan afbreken. Daarom heten ze ook wel <em>forever chemicals</em>: eenmaal in het milieu, blijven ze.
                </p>
                <p className="mt-4 text-dim leading-relaxed">
                  Al sinds de jaren '40 zitten ze in duizenden alledaagse spullen. Denk aan:
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
                  Via de bodem spoelt PFAS mee naar grondwater en rivieren, precies de plekken waar Nederlandse waterbedrijven ons drinkwater vandaan halen. Hun zuiveringsinstallaties zijn er simpelweg niet op gebouwd, dus PFAS gaat er ongehinderd doorheen.
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

        {/* STATS DONKERE BREAK */}
        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[380px] h-[380px] bg-amber/15 -top-32 -left-24" />
          <div className="relative max-w-5xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-display text-3xl md:text-4xl font-extrabold text-amber">4,4 ng/l</p>
              <p className="mt-2 text-sm text-white/60">RIVM-gezondheidsnorm voor PFAS</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-extrabold text-amber">10.000+</p>
              <p className="mt-2 text-sm text-white/60">bekende PFAS-varianten</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-extrabold text-amber">0,0001 µm</p>
              <p className="mt-2 text-sm text-white/60">poriegrootte van ons membraan</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-extrabold text-amber">Tot 99%</p>
              <p className="mt-2 text-sm text-white/60">PFAS verwijderd met omgekeerde osmose</p>
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
                Niet elk filter doet hetzelfde werk. Een kannenfilter houdt chloor en een vieze smaak tegen, maar PFAS glipt er grotendeels doorheen: de deeltjes zijn er gewoon te klein voor. Omgekeerde osmose pakt het anders aan en perst het water onder druk door een membraan dat tot op moleculair niveau filtert.
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

            {/* INSTALLATIE */}
            <div className="mt-16 rounded-2xl card p-6 md:p-8">
              <p className="font-display font-bold text-ink mb-3">Waar komt het systeem te staan?</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-sm text-dim leading-relaxed">
                    Het filter zelf staat onder uw aanrecht, meestal in het kastje onder de spoelbak, naast het sifon. Het is maar 10,5 cm breed, dus het past ook in een kleine keuken tussen de leidingen door.
                  </p>
                  <p className="mt-3 text-sm text-dim leading-relaxed">
                    Voor de kraan heeft u de keuze uit twee opties. De meeste mensen kiezen voor een <strong className="text-ink">3-wegkraan</strong>: naast uw gewone mengkraan komt een tweede, kleinere kraan die alleen gezuiverd water geeft. Uw oude kraan blijft gewoon warm en koud water geven, en uit de nieuwe tapt u schoon drinkwater, koud of desgewenst ook bruisend of heet.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-dim leading-relaxed">
                    Liever geen extra gat in het aanrecht? Dan koppelen we het systeem aan een tussenstuk in de koudwaterleiding van uw bestaande kraan. Geen zichtbare aanpassing, alleen komt er dan altijd gezuiverd water uit die ene kraan, niet naast elkaar.
                  </p>
                  <p className="mt-3 text-sm text-dim leading-relaxed">
                    Onze monteur kijkt bij u thuis welke optie het beste past bij uw keuken en leidingen. De installatie duurt meestal 1 tot 2 uur, en bij een standaardkeuken hoeft er niets verbouwd te worden.
                  </p>
                </div>
              </div>
            </div>

            {/* 3-WEG KRAAN SHOWCASE */}
            <div className="mt-8 relative rounded-2xl bg-surface overflow-hidden">
              <div className="glow w-64 h-64 bg-amber/10 top-1/2 left-1/2" style={{ transform: 'translate(-50%,-50%)' }} />
              <div className="relative max-w-xl mx-auto flex flex-col items-center text-center gap-6 p-8 md:p-12">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Bekijk hier de 3-wegkraan</span>
                <p className="-mt-4 font-display text-xl font-extrabold tracking-tight">In 4 afwerkingen leverbaar</p>
                <div className="w-full max-w-[14rem]">
                  <KraanKleurSwitcher />
                </div>
                <p className="text-sm text-dim leading-relaxed">
                  Van tijdloos chroom tot een statement in goud of mat zwart — er is altijd een afwerking die past bij uw keuken. Tik op een kleurtje hierboven om 'm te bekijken.
                </p>
                <Link href="/3-weg-kraan" className="cursor-pointer inline-flex items-center gap-1.5 text-sm font-bold text-ink hover:text-amber-dark transition-colors">
                  Meer over de 3-wegkraan
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
            </div>

            {/* VERGELIJKING FILTERTYPES */}
            <div className="mt-16">
              <p className="font-display font-bold text-ink text-center mb-2">Waarom niet gewoon een kannenfilter?</p>
              <p className="text-sm text-dim text-center max-w-xl mx-auto mb-8">Onafhankelijke tests laten zien dat filters onderling flink verschillen, vooral bij kleinere PFAS-varianten zoals GenX.</p>
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
            <p className="mt-4 text-white/70">Onze osmose waterzuiveraar haalt PFAS, chloor, medicijnresten en microplastics eruit, nog voordat het water uw glas bereikt. Vraag vrijblijvend een offerte aan.</p>
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
