import Image from 'next/image';
import Link from 'next/link';
import OfferteForm from '@/components/OfferteForm';
import BlackFridayCountdown from '@/components/BlackFridayCountdown';
import ReviewsSectie from '@/components/ReviewsSectie';
import { isBlackFriday } from '@/lib/actie';

// Landing page for Google Ads only: short, form above the fold, no site
// navigation. noindex so it never competes with the SEO pages.
// The headline follows the ad group via ?t= (osmose | kraan | drinkwater |
// installatie), so the page repeats what the visitor searched for.
export const metadata = {
  title: 'Gratis offerte zuiver drinkwater uit je kraan — Water-zuivering',
  description: 'Vraag in één minuut een gratis offerte aan voor een waterzuiveraar onder je aanrecht. Montage in 1 à 2 uur, 10 jaar garantie.',
  robots: { index: false, follow: false },
};

const KOPPEN = {
  osmose: ['Osmosesysteem voor thuis.', 'Zuiver water uit je eigen kraan.'],
  kraan: ['Waterfilter in je keukenkraan.', 'Warm, koud én gefilterd.'],
  drinkwater: ['Zuiver drinkwater.', 'Zonder PFAS en medicijnresten.'],
  installatie: ['Waterzuivering laten installeren.', 'Klaar in 1 à 2 uur.'],
  standaard: ['Zuiver drinkwater.', 'Rechtstreeks uit je kraan.'],
};

const Vink = ({ licht = false }) => (
  <svg className="shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" stroke={licht ? '#EDA71B' : '#C6890F'} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const VOORDELEN = [
  'Filtert PFAS, medicijnresten en microplastics',
  'Direct flow: geen tank, slechts 10,5 cm breed',
  '3-weg kraan in 4 kleuren: warm, koud en gefilterd',
  'Montage door onze eigen monteur in 1 à 2 uur',
  '10 jaar garantie',
];

// Same claims as the product pages (/osmose-waterfilter, /kennisbank/omgekeerde-osmose-filter).
const STOFFEN = [
  ['PFAS', 'De "eeuwige chemicaliën" die in een deel van Nederland in het kraanwater zitten.'],
  ['Bacteriën en virussen', 'Het membraan is zo fijn dat ook bacteriën en virussen achterblijven.'],
  ['Medicijnresten', 'Sporen van medicijnen die de zuivering van het waterbedrijf deels doorlaten.'],
  ['Microplastics', 'Piepkleine plastic deeltjes, te klein om te zien.'],
  ['Kalk', 'Veel minder kalkaanslag in je waterkoker en minder vliesje op je thee.'],
  ['Zware metalen', 'Zoals lood uit oude leidingen.'],
];

const FILTERS = [
  ['Voorfilter', 'Vangt zand, roest en vuil en haalt de chloor eruit.'],
  ['Osmosemembraan', 'Gaatjes van 0,0001 micron: alleen watermoleculen komen erdoor. Hier blijven PFAS, medicijnresten en microplastics achter.'],
  ['Nafilter', 'Poetst de smaak op en voegt mineralen als calcium en magnesium terug.'],
];

const STAPPEN = [
  ['1', 'Aanvraag in 1 minuut', 'Vertel kort over je keuken en laat je gegevens achter.'],
  ['2', 'Offerte op maat', 'Binnen één werkdag nemen we contact op met advies en een offerte.'],
  ['3', 'Montage in 1 à 2 uur', 'Onze monteur plaatst het systeem en de kraan bij jou thuis.'],
];

const VRAGEN = [
  ['Wat kost het?', 'De prijs hangt af van je keuken en de kraan die je kiest. Je krijgt een vrijblijvende offerte op maat. Vraag je in november aan, dan krijg je €250 korting.'],
  ['Past het in mijn keukenkastje?', 'Het systeem is 10,5 cm breed en past staand of liggend in de meeste kastjes onder de spoelbak. Twijfel je, dan kijken we het samen met je na.'],
  ['Hoe vaak moeten de filters vervangen worden?', 'Het voor- en nafilter ongeveer elk jaar, het osmosemembraan om de twee jaar. Het display geeft aan wanneer het zover is.'],
  ['Wat valt er onder de garantie?', 'Je krijgt 10 jaar garantie op het systeem.'],
];

const btn = 'cursor-pointer inline-flex items-center justify-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-lg shadow-amber/25';

export default async function OffertePage({ searchParams }) {
  const params = await searchParams;
  const [kop, subkop] = KOPPEN[params?.t] || KOPPEN.standaard;
  const actie = isBlackFriday();

  return (
    <>
      {actie && (
        <div className="bg-amber text-ink text-center text-xs sm:text-sm font-bold px-4 py-2.5">
          BLACK FRIDAY · €250 korting op je waterzuiveraar · alleen t/m 30 november
        </div>
      )}

      <header className="bg-ink border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 py-3.5 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5 font-display font-extrabold text-lg tracking-tight text-white">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C12 2 5 10.5 5 15a7 7 0 0014 0c0-4.5-7-13-7-13z" fill="#EDA71B" /></svg>
            </span>
            Water-zuivering
          </Link>
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/" className="text-xs sm:text-sm font-semibold text-white/70 hover:text-white">Naar website</Link>
            <a href="tel:+31626944877" className="hidden md:inline text-sm font-semibold text-white/80 hover:text-white">06 26 94 48 77</a>
            <a href="#offerte" className="cursor-pointer rounded-full bg-amber px-4 py-2 text-xs sm:text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors">Gratis offerte</a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO + FORMULIER */}
        <section className="relative bg-ink text-white overflow-hidden">
          <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-amber/15 blur-[120px]" aria-hidden="true" />
          {/* Mobile order: headline, form, bullets. Desktop: text left, form right. */}
          <div className="relative max-w-6xl mx-auto px-5 py-8 md:py-16 grid lg:grid-cols-[1.05fr_1fr] gap-x-10 gap-y-7 items-start">
            <div className="lg:col-start-1 lg:row-start-1">
              {actie && (
                <span className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-amber">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber pulse" />
                  Black Friday: €250 korting
                </span>
              )}
              <h1 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05]">
                {kop}
                <span className="block text-amber">{subkop}</span>
              </h1>
            </div>

            <div id="offerte" className="scroll-mt-6 lg:col-start-2 lg:row-start-1 lg:row-span-2">
              <OfferteForm />
            </div>

            <div className="lg:col-start-1 lg:row-start-2">
              <ul className="space-y-3">
                {VOORDELEN.map((v) => (
                  <li key={v} className="flex gap-3 text-base text-white/90"><Vink licht />{v}</li>
                ))}
                {actie && (
                  <li className="flex gap-3 text-base font-bold text-amber"><Vink licht />€250 Black Friday-korting bij aanvraag in november</li>
                )}
              </ul>

              {actie && (
                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-3">Actie eindigt over</p>
                  <BlackFridayCountdown />
                </div>
              )}

              <p className="mt-8 text-sm text-white/70">Prijs op maat via een vrijblijvende offerte. Je zit nergens aan vast.</p>
            </div>
          </div>
        </section>

        {/* VERTROUWEN */}
        <section className="bg-surface border-b border-edge">
          <ul className="max-w-6xl mx-auto px-5 py-5 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm font-semibold text-ink">
            {['Gratis & vrijblijvend', 'Reactie binnen 1 werkdag', 'Eigen monteur', '10 jaar garantie'].map((t) => (
              <li key={t} className="flex items-center gap-2"><Vink />{t}</li>
            ))}
          </ul>
        </section>

        {/* WAT HAALT HET ERUIT */}
        <section className="max-w-6xl mx-auto px-5 pt-14 md:pt-20">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Wat haalt het uit je water?</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Tot 99% van wat je niet wilt drinken</h2>
          <p className="mt-3 text-dim max-w-2xl">Nederlands kraanwater is veilig, maar bevat sporen van stoffen die je liever niet binnenkrijgt. Het systeem filtert ze eruit voordat het water uit je kraan komt.</p>
          <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STOFFEN.map(([naam, uitleg]) => (
              <li key={naam} className="rounded-2xl card p-5 flex gap-3">
                <Vink />
                <div>
                  <p className="font-display font-bold">{naam}</p>
                  <p className="mt-1 text-sm text-dim">{uitleg}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12 rounded-3xl bg-ink text-white p-6 md:p-10">
            <p className="text-xs font-bold uppercase tracking-widest text-amber">Zo werkt het filter</p>
            <h3 className="mt-2 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Drie filterstappen, direct als je de kraan opendraait</h3>
            <ol className="mt-7 grid md:grid-cols-3 gap-5">
              {FILTERS.map(([naam, uitleg], i) => (
                <li key={naam} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <span className="text-amber font-display font-extrabold text-lg">{i + 1}. {naam}</span>
                  <p className="mt-2 text-sm text-white/75">{uitleg}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ZO WERKT HET */}
        <section className="max-w-6xl mx-auto px-5 py-14 md:py-20">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Zo werkt het</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-extrabold tracking-tight">In drie stappen zuiver water</h2>
          <ol className="mt-8 grid md:grid-cols-3 gap-5">
            {STAPPEN.map(([n, titel, tekst]) => (
              <li key={n} className="rounded-2xl card p-6">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-amber font-display font-extrabold text-ink">{n}</span>
                <p className="mt-4 font-display font-bold text-lg">{titel}</p>
                <p className="mt-1.5 text-sm text-dim">{tekst}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* PRODUCT */}
        <section className="bg-surface border-y border-edge">
          <div className="max-w-6xl mx-auto px-5 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white">
              <Image src="/assets/img/cabinet-install.png" alt="Osmosesysteem geplaatst in een keukenkastje onder de spoelbak" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Het systeem</span>
              <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight">Onzichtbaar onder je aanrecht</h2>
              <ul className="mt-6 space-y-3 text-dim">
                <li className="flex gap-3"><Vink />3 filterstappen: voorfilter, osmosemembraan en nafilter</li>
                <li className="flex gap-3"><Vink />Zuivert direct als je de kraan opendraait, geen opslagvat</li>
                <li className="flex gap-3"><Vink />Display laat zien wanneer een filter vervangen moet worden</li>
                <li className="flex gap-3"><Vink />Kraan in chroom, geborsteld staal, goud of zwart</li>
              </ul>
              <a href="#offerte" className={`${btn} mt-8`}>
                {actie ? 'Claim €250 korting' : 'Vraag gratis offerte aan'}
              </a>
            </div>
          </div>
        </section>

        <ReviewsSectie />

        {/* VRAGEN */}
        <section className="max-w-3xl mx-auto px-5 py-14 md:py-20">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-center">Veelgestelde vragen</h2>
          <div className="mt-8 divide-y divide-edge rounded-2xl card">
            {VRAGEN.map(([v, a]) => (
              <details key={v} className="group p-5">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold">
                  {v}
                  <span className="text-amber-dark text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-dim">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* SLOT-CTA */}
        <section className="bg-ink text-white">
          <div className="max-w-3xl mx-auto px-5 py-14 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight">
              {actie ? 'Nog even €250 korting' : 'Zuiver water, zonder gedoe'}
            </h2>
            <p className="mt-3 text-white/70">Gratis offerte op maat, binnen één werkdag reactie.</p>
            <a href="#offerte" className={`${btn} mt-7`}>Vraag gratis offerte aan</a>
          </div>
        </section>
      </main>

      <footer className="bg-ink border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 pt-8 pb-6">
          <p className="text-sm font-semibold text-white">Eerst meer lezen?</p>
          <nav aria-label="Website" className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/70">
            <Link href="/" className="hover:text-white">Homepage</Link>
            <Link href="/osmosesysteem" className="hover:text-white">Het osmosesysteem</Link>
            <Link href="/3-weg-kraan" className="hover:text-white">3-weg kraan</Link>
            <Link href="/uitleg" className="hover:text-white">Hoe het werkt</Link>
            <Link href="/maatcheck" className="hover:text-white">Maatcheck</Link>
            <Link href="/reviews" className="hover:text-white">Reviews</Link>
            <Link href="/kennisbank" className="hover:text-white">Kennisbank</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </nav>
        </div>
        <div className="max-w-6xl mx-auto px-5 pt-5 pb-24 md:pb-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-white/50">
          <span>&copy; 2026 Water-zuivering</span>
          <span className="flex gap-4">
            <Link href="/privacybeleid" className="hover:text-white">Privacybeleid</Link>
            <Link href="/algemene-voorwaarden" className="hover:text-white">Voorwaarden</Link>
          </span>
        </div>
      </footer>

      {/* Sticky knop op mobiel */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-ink/95 backdrop-blur border-t border-white/10 p-3">
        <a href="#offerte" className="cursor-pointer flex items-center justify-center rounded-full bg-amber py-3.5 text-sm font-bold text-ink">
          {actie ? 'Claim €250 korting' : 'Gratis offerte aanvragen'}
        </a>
      </div>
    </>
  );
}
