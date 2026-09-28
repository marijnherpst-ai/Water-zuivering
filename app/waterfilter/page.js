import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import FaqSchema from '@/components/FaqSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import RatingSchema from '@/components/RatingSchema';
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

export const dynamic = 'force-dynamic';

export const metadata = {
  alternates: { canonical: '/waterfilter' },
  title: 'Waterfilter kopen: de complete gids 2026 — Water-zuivering',
  description: 'Waterfilter kopen? Vergelijk filterkan, kraan-opzetstuk en osmosesysteem op grondigheid, gemak en prijs, en ontdek welk type bij jou past.',
};

const TYPES = [
  ['Filterkan', 'Goedkoopst en direct te gebruiken, maar filtert alleen chloor en smaakstoffen. PFAS, kalk en medicijnresten gaan er gewoon doorheen. Filter moet elke maand vervangen worden.'],
  ['Opzetstuk op de kraan', 'Klikt om je bestaande kraan heen, filtert continu zonder bijvullen. Vergelijkbare beperking als de filterkan: prima tegen smaak, niet tegen fijnere verontreinigingen.'],
  ['Waterfilter kraan (3-weg of geïntegreerd)', 'Een apart, compact systeem onder de gootsteen met een eigen kraantje erboven. Hier zit meestal een uitgebreider filterpakket achter, tot en met omgekeerde osmose.'],
  ['Omgekeerde-osmosesysteem', 'De meest grondige optie: een membraan dat op moleculair niveau filtert. Verwijdert kalk, lood, PFAS, medicijnresten en microplastics — niet alleen de smaak, maar ook wat je niet proeft.'],
];

const FAQ = [
  ['Welke waterfilter is het beste?', 'Dat hangt af van wat je wilt oplossen. Voor alleen een betere smaak volstaat een filterkan of opzetstuk. Wil je ook kalk, PFAS en medicijnresten kwijt, dan is een omgekeerde-osmosesysteem de enige optie die dat daadwerkelijk verwijdert.'],
  ['Is een waterfilter nodig in Nederland?', 'Nederlands kraanwater voldoet aan strenge wettelijke normen en is veilig om te drinken. Een waterfilter is dus geen noodzaak, maar wel een manier om verder te gaan dan het wettelijk minimum — vooral relevant voor smaak en voor sporen van stoffen die onder de norm blijven maar niet op nul staan.'],
  ['Wat kost een waterfilter?', 'Een filterkan begin je al voor een paar tientjes, een opzetstuk vergelijkbaar. Een compleet osmosesysteem met eigen kraan is een grotere investering, maar filtert grondiger en heeft geen maandelijkse aanschaf van losse kannen of filters nodig.'],
  ['Hoe vaak moet ik een waterfilter vervangen?', 'Dat verschilt sterk per type: een filterkan-patroon gaat gemiddeld 4-6 weken mee, een opzetstuk 2-3 maanden. Bij een compleet systeem gaan de voor- en nafilters 6-12 maanden mee, en het osmosemembraan zelf 2-3 jaar.'],
  ['Verwijdert een waterfilter PFAS?', 'Alleen als er een omgekeerde-osmosemembraan in zit. Filterkannen en de meeste opzetstukken werken op basis van actieve kool, wat goed is tegen chloor en smaak, maar PFAS-moleculen grotendeels door laat.'],
  ['Wat is het verschil tussen een waterfilter en een waterontharder?', 'Een waterontharder haalt specifiek kalk uit het water via ionenwisseling. Een waterfilter (zeker met osmose) pakt een veel bredere groep aan stoffen aan, waaronder ook kalk, maar via een ander principe.'],
];

export default async function Page() {
  const supabase = await createClient();
  const { data: reviews } = await supabase
    .from('reviews')
    .select('id, name, city, rating, review_text, created_at')
    .eq('approved', true)
    .order('created_at', { ascending: false })
    .limit(3);

  const topReviews = reviews || [];

  const { data: ratingStats } = await supabase
    .from('reviews')
    .select('rating')
    .eq('approved', true);

  const reviewCount = ratingStats?.length || 0;
  const avgRating = reviewCount > 0
    ? (ratingStats.reduce((sum, r) => sum + r.rating, 0) / reviewCount).toFixed(1)
    : null;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Waterfilter', url: 'https://www.water-zuivering.nl/waterfilter' },
        ]}
      />
      <FaqSchema items={FAQ} />
      <RatingSchema rating={avgRating} count={reviewCount} />
      <RevealObserver />
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="glow drift2 w-[360px] h-[360px] bg-amber/10 top-10 -right-24" />
          <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Waterfilter</span>
              <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
                Waterfilter kopen? Zo kies je het type dat écht bij je past
              </h1>
              <p className="mt-5 text-dim text-lg">
                Van een simpele filterkan tot een compleet omgekeerde-osmosesysteem: niet elke <strong className="text-ink">waterfilter</strong> doet hetzelfde. Deze gids zet de opties eerlijk naast elkaar, zodat je weet waar je precies voor betaalt.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-lg shadow-amber/25">
                  Vraag vrijblijvend een offerte aan
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <Link href="/waterfilter-kraan" className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 text-sm font-bold text-ink hover:bg-bg transition-colors">
                  Bekijk onze waterfilter kraan
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-[2rem] overflow-hidden border border-edge aspect-[4/5]">
                <Image src="/assets/img/glas-water.webp" alt="Glas gefilterd water uit een waterfilter" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <p className="text-dim leading-relaxed">
              Zoek je op "waterfilter", dan kom je een wirwar aan producten tegen: filterkannen van vijftien euro, opzetstukken voor de kraan, en complete systemen die duizenden liters per jaar zuiveren. Ze worden vaak in één adem genoemd, maar filteren totaal niet hetzelfde — en dat verschil merk je pas als je weet waar je op moet letten.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              De kortste samenvatting: hoe fijner de filtratie, hoe meer stoffen eruit gaan — maar ook hoe groter de investering. Hieronder zetten we de vier belangrijkste type waterfilters naast elkaar, zodat je een weloverwogen keuze kunt maken in plaats van te gokken.
            </p>
          </div>
        </section>

        {/* TYPES */}
        <section className="relative">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-center">Vier soorten waterfilters, van simpel tot compleet</h2>
            <p className="mt-3 text-dim text-center max-w-xl mx-auto">Gerangschikt van minst naar meest grondig — niet elk type lost hetzelfde probleem op.</p>
            <div className="mt-10 space-y-5">
              {TYPES.map(([titel, uitleg], i) => (
                <div key={titel} className="reveal rounded-2xl card p-6 flex gap-4">
                  <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-amber text-ink text-sm font-bold">{i + 1}</span>
                  <div>
                    <p className="font-display font-bold text-ink">{titel}</p>
                    <p className="mt-1.5 text-sm text-dim leading-relaxed">{uitleg}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-dim leading-relaxed max-w-3xl mx-auto text-center">
              Twijfel je tussen de laatste twee opties? We zetten ze uitgebreider tegenover elkaar in <Link href="/kennisbank/beste-waterfilter-voor-thuis" className="underline hover:text-ink">beste waterfilter voor thuis</Link>.
            </p>
          </div>
        </section>

        {/* WAAROM OSMOSE GRONDIGER IS */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
              <Image src="/assets/img/filters-closeup.png" alt="Close-up van filtratielagen in een waterfilter" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Het verschil zit in de poriegrootte</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom een filterkan minder doet dan het lijkt</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Een filterkan of kraan-opzetstuk werkt met actieve kool: goed tegen chloor en smaakstoffen, maar de poriën zijn simpelweg te grof om kleinere moleculen zoals PFAS tegen te houden. Een omgekeerde-osmosemembraan heeft poriën die honderden keren kleiner zijn — klein genoeg om ook die onzichtbare stoffen tegen te houden.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Wil je precies weten hoe dat membraan werkt? Lees onze uitleg over de <Link href="/kennisbank/omgekeerde-osmose-filter" className="underline hover:text-ink">omgekeerde osmose filter</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* PRIJS OVERZICHT */}
        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat kost een waterfilter, per type?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              De prijs loopt sterk uiteen, en dat is direct gekoppeld aan hoe grondig een filter werkt. Een filterkan of opzetstuk is de laagste instapkosten, maar de doorlopende kosten (nieuwe patronen, elke paar weken tot maanden) tikken op jaarbasis alsnog aardig aan. Een compleet omgekeerde-osmosesysteem kost meer bij aanschaf, maar de filters gaan een stuk langer mee — de voor- en nafilters 6-12 maanden, het membraan zelf 2-3 jaar — waardoor de jaarlijkse kosten per liter juist lager uitvallen.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Reken je het helemaal door inclusief wat je bespaart op flessenwater, dan lees je dat in <Link href="/kennisbank/wat-kost-een-waterzuiveringssysteem" className="underline hover:text-ink">wat kost een waterzuiveringssysteem</Link>.
            </p>
          </div>
        </section>

        {/* PRODUCT TIE-IN */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Onze aanpak</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wij kiezen bewust voor omgekeerde osmose</h2>
              <p className="mt-4 text-dim leading-relaxed">
                Bij Water-zuivering verkopen we geen filterkannen of opzetstukken — we geloven dat de moeite van een echt systeem het waard is als je toch al voor een waterfilter kiest. Ons systeem past compact onder je gootsteen, wordt binnen één werkdag geïnstalleerd, en levert zuiver water via een eigen kraantje op je aanrecht.
              </p>
              <p className="mt-4 text-dim leading-relaxed">
                Inclusief 10 jaar garantie, en zonder dat je ooit nog een filterkan hoeft bij te vullen.
              </p>
            </div>
            <div className="relative">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/systeem-liggend.png" alt="Compleet osmosewaterfiltersysteem van Water-zuivering" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-6 bg-white" />
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        {topReviews.length > 0 && (
          <section className="relative bg-surface border-y border-edge overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
              <div className="flex items-end justify-between gap-4 mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Ervaringen</span>
                  <h2 className="mt-2 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat klanten van ons vinden</h2>
                </div>
                <Link href="/reviews" className="cursor-pointer hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-ink hover:text-amber-dark transition-colors shrink-0">
                  Alle reviews
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
              <div className="grid sm:grid-cols-3 gap-5">
                {topReviews.map((review) => (
                  <div key={review.id} className="rounded-2xl card p-5">
                    <Stars rating={review.rating} />
                    <p className="mt-2.5 text-sm text-ink leading-snug line-clamp-3">&ldquo;{review.review_text}&rdquo;</p>
                    <p className="mt-3 text-xs font-semibold text-dim">{review.name}{review.city ? ` — ${review.city}` : ''}</p>
                  </div>
                ))}
              </div>
              <Link href="/reviews" className="cursor-pointer sm:hidden mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-ink">
                Alle reviews
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </section>
        )}

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
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Klaar voor een waterfilter die écht grondig filtert?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan en ontdek wat een Water-zuivering systeem voor jouw huishouden betekent.</p>
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
