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

const STAPPEN = [
  ['Kraanwater komt binnen', 'Uw gewone kraanwater stroomt eerst door een voorfilter, die grof vuil, zand en chloor tegenhoudt.'],
  ['Het osmosemembraan filtert', 'Onder lichte druk perst het systeem het water door een membraan van 0,0001 micron — ruim fijn genoeg om PFAS, medicijnresten, microplastics en zware metalen tegen te houden.'],
  ['Nafilter voor de laatste smaak', 'Een laatste filtertrap verfijnt de smaak, zodat er alleen zuiver, lekker drinkwater overblijft.'],
  ['Direct uit uw eigen kraan', 'Geen waterflessen, geen sjouwen: schoon water rechtstreeks uit de kraan, elke dag opnieuw.'],
];

const VERWIJDERT = ['PFAS', 'Chloor', 'Medicijnresten', 'Microplastics', 'Zware metalen', 'Kalk en troebelheid'];

const KENMERKEN = [
  ['0,0001 micron membraan', 'Fijner dan elk ander filtertype op de markt — vrijwel niets komt er nog doorheen behalve watermoleculen zelf.'],
  ['Verwijdert tot 99% van PFAS', 'Naast PFAS ook chloor, medicijnresten, microplastics en zware metalen.'],
  ['10,5 cm breed', 'Past staand of liggend in vrijwel elk keukenkastje, volledig uit het zicht.'],
  ['10 jaar garantie', 'Gebouwd om jarenlang mee te gaan, met vakkundige installatie inbegrepen.'],
];

export const metadata = {
  alternates: { canonical: '/pfas-check' },
  title: 'PFAS in uw kraanwater checken — Water-zuivering',
  description: 'Check hoeveel PFAS er in het kraanwater in uw regio zit op basis van de RIVM-gezondheidsnorm, en ontdek hoe een osmose waterzuiveraar PFAS verwijdert.',
};

const UITLEG = [
  ['Wat is PFAS?', 'PFAS staat voor poly- en perfluoralkylstoffen: een groep van duizenden door de mens gemaakte chemicaliën die nauwelijks afbreken in het milieu — vaak "forever chemicals" genoemd. Ze worden al decennia gebruikt in bijvoorbeeld antiaanbaklagen, regenkleding, blusschuim en verpakkingsmateriaal, en zijn via de bodem en het oppervlaktewater in het drinkwater terechtgekomen.'],
  ['Wat is de RIVM-gezondheidsnorm?', 'Het RIVM hanteert een gezondheidskundige richtwaarde van 4,4 nanogram per liter (ng/l), uitgedrukt in PFOA-equivalenten (PEQ). Dit is geen wettelijke norm — de wettelijke (Europese) norm ligt met 100 ng/l veel hoger, en daar voldoen alle Nederlandse waterbedrijven aan. De RIVM-richtwaarde is een strengere, gezondheidskundige advieswaarde.'],
  ['Hoe betrouwbaar is de check hierboven?', 'Onze check geeft een regionale indicatie op basis van uw provincie en waterleverancier, gebaseerd op de meetgegevens van de Nederlandse waterbedrijven zoals geanalyseerd door Greenpeace Nederland. Het is geen exacte check op uw 4-cijferige postcode: voor de meest precieze uitslag verwijzen we naar de officiële Greenpeace-postcodechecker.'],
  ['Wat is een waterzuiveraar precies?', 'Een waterzuiveraar (ook wel waterfilter of osmosesysteem genoemd) is een compact apparaat dat onder uw aanrecht wordt geïnstalleerd en al het water dat door de kraan stroomt filtert, vóórdat u het drinkt of kookt.'],
  ['Hoe verwijdert osmose PFAS uit water?', 'Een omgekeerde-osmosesysteem perst water onder lichte druk door een membraan met poriën van slechts 0,0001 micron. PFAS-moleculen zijn hier ruimschoots te groot voor, waardoor het membraan ze samen met chloor, medicijnresten, microplastics en zware metalen tegenhoudt.'],
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
          </div>
        </section>

        {/* WAT IS EEN WATERZUIVERAAR EN HOE WERKT HET */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Onze oplossing</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat doet een waterzuiveraar, en hoe werkt het?</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Een waterzuiveraar is een compact filtersysteem dat u eenmalig onder het aanrecht laat installeren. Vanaf dat moment stroomt al uw kraanwater automatisch eerst door het systeem, vóórdat het uw glas of pan bereikt — zonder dat u er verder iets voor hoeft te doen.
              </p>
            </div>

            <div className="mt-14 grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3] bg-white order-2 lg:order-1">
                <Image src="/assets/img/systeem-slim-105mm.png" alt="Osmose waterzuiveraar, slechts 10,5 cm breed, geïnstalleerd onder het aanrecht" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-6" />
              </div>
              <div className="order-1 lg:order-2">
                <p className="font-display font-bold text-ink">In vier stappen naar zuiver water</p>
                <div className="mt-5 space-y-5">
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

            <div className="mt-14 rounded-2xl card p-6 sm:p-8">
              <p className="font-display font-bold text-ink text-center">Wat een waterzuiveraar allemaal tegenhoudt</p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                {VERWIJDERT.map((stof) => (
                  <span key={stof} className="inline-flex items-center gap-1.5 rounded-full bg-amber/10 px-4 py-2 text-sm font-semibold text-ink">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="#EDA71B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {stof}
                  </span>
                ))}
              </div>
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
        <section className="relative overflow-hidden">
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
          </div>
        </section>

        {/* REVIEWS */}
        {topReviews.length > 0 && (
          <section className="relative bg-surface border-y border-edge">
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

        {/* FAQ - ACHTERGROND, ONDERAAN */}
        <section className="relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Achtergrond</span>
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
            <p className="mt-4 text-white/70">Onze osmose waterzuiveraar verwijdert tot 99% van PFAS, chloor, medicijnresten en microplastics. Vraag een vrijblijvende offerte aan.</p>
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
