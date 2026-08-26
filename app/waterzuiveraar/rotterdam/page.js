import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import MobileStickyCta from '@/components/MobileStickyCta';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import FaqSchema from '@/components/FaqSchema';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

export const metadata = {
  alternates: { canonical: '/waterzuiveraar/rotterdam' },
  title: 'Waterzuiveraar Rotterdam — installatie aan huis | Water-zuivering',
  description:
    'Water-zuivering is gevestigd in Rotterdam en installeert osmosewatersystemen in de hele stad, van Kralingen tot IJsselmonde. Lees ervaringen van klanten uit Rotterdam.',
};

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

const FAQ_ITEMS = [
  ['Wat kost het om een waterzuiveraar in Rotterdam te laten installeren?', 'Hetzelfde als elders in het land: het systeem kost normaal €1.499 incl. btw en installatie, deze maand met €250 korting. De prijs verschilt niet per stad of wijk.'],
  ['Installeren jullie in alle wijken van Rotterdam?', 'Ja. Onze monteurs komen door de hele stad — van het centrum en Kralingen tot Delfshaven, Hillegersberg, Rotterdam-Noord, Charlois, Feijenoord, IJsselmonde, Prins Alexander en Overschie.'],
  ['Kan een osmosewatersysteem in een appartement worden geplaatst?', 'Ja. Het systeem is maar 10,5 cm breed en past staand of liggend in vrijwel elk keukenkastje, ook in kleinere Rotterdamse appartementen.'],
  ['Hoeveel ruimte heeft het systeem nodig?', 'Weinig — een strook van 10,5 cm breed onder de spoelbak is voldoende. Twijfelt u? Doe de Maatcheck en zie het direct op ware grootte in uw eigen keuken.'],
  ['Kan het systeem onder iedere keuken worden geplaatst?', 'In de meeste gevallen wel. Heeft u een Quooker, kalkaanslag of weinig ruimte? Dat wordt gewoon meegenomen tijdens de installatie — de monteur brengt alles mee dat daarvoor nodig is.'],
];

export default async function WaterzuiveraarRotterdamPage() {
  const supabase = await createClient();
  const { data: reviews } = await supabase
    .from('reviews')
    .select('id, name, city, rating, review_text, created_at')
    .eq('approved', true)
    .eq('city', 'Rotterdam')
    .order('created_at', { ascending: false });

  const rotterdamReviews = reviews || [];
  const reviewCount = rotterdamReviews.length;
  const avgRating = reviewCount > 0 ? (rotterdamReviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount).toFixed(1) : null;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Waterzuiveraar per stad', url: 'https://www.water-zuivering.nl/waterzuiveraar' },
          { name: 'Rotterdam', url: 'https://www.water-zuivering.nl/waterzuiveraar/rotterdam' },
        ]}
      />
      <FaqSchema items={FAQ_ITEMS} />
      <RevealObserver />
      <Header />

      <main>
        <section id="hero" className="relative overflow-hidden">
          <div className="relative h-[46vh] min-h-[320px]">
            <Image src="/assets/img/locaties/rotterdam.jpg" alt="Skyline van Rotterdam, gezien vanaf de Euromast" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0">
              <div className="max-w-4xl mx-auto px-6 pb-10 text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-amber">Werkgebied · Rotterdam</span>
                <h1 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Waterzuiveraar installeren in Rotterdam</h1>
              </div>
            </div>
          </div>
          <p className="max-w-4xl mx-auto px-6 pt-3 text-[11px] text-dim">Foto: Kristoffer Trolle, via Wikimedia Commons (CC BY 2.0)</p>
        </section>

        <section className="relative">
          <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
            <p className="text-lg text-dim">
              Water-zuivering (Jd services B.V.) is zelf aan de Veldkersweg gevestigd, dus deze stad is letterlijk waar we vandaan komen. Onze monteurs installeren door de hele stad — van appartementen rond het centrum en Kralingen tot eengezinswoningen in Hillegersberg, Delfshaven, Noord, Charlois, Feijenoord, IJsselmonde, Prins Alexander en Overschie.
            </p>
            <p className="mt-4 text-dim">
              Het kraanwater hier komt van Evides, dat zijn water uit de Maas haalt en — met een eigen productielocatie in Kralingen — al sinds 1977 een deel van de stad bedient. Ons osmosewatersysteem sluit daar met drie filtertrappen op aan: het haalt chloor, PFAS, medicijnresten en microplastics uit dat kraanwater, vlak voordat het uw glas bereikt.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zo verloopt de installatie bij u thuis</h2>
            <p className="mt-3 text-dim max-w-2xl">Meestal binnen 1 tot 2 uur, door een eigen monteur — geen onderaannemers.</p>
            <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
              <ol className="space-y-4">
                {[
                  'Inspectie van de ruimte onder de gootsteen',
                  'Aansluiting op de bestaande koudwaterleiding',
                  'Plaatsing van het filtersysteem in het keukenkastje',
                  'Aansluiting van de (3-weg) kraan op het aanrecht',
                  'Controle op lekkages bij alle koppelingen',
                  'Testen van het systeem en elke filtertrap',
                  'Uitleg aan u: gebruik, onderhoud en het display',
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-3.5">
                    <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-amber/15 text-amber-dark text-xs font-bold">{i + 1}</span>
                    <span className="text-dim">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5]">
                <Image src="/assets/img/cabinet-install.png" alt="Het osmosewatersysteem geïnstalleerd in een keukenkastje" fill sizes="(min-width: 768px) 40vw, 90vw" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {reviewCount > 0 && (
          <section className="relative">
            <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Ervaringen</span>
                  <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Klanten in Rotterdam aan het woord</h2>
                </div>
                <div className="flex items-center gap-2">
                  <Stars rating={Math.round(avgRating)} />
                  <span className="text-sm font-semibold text-dim">{avgRating} van de 5 — {reviewCount} reviews uit Rotterdam</span>
                </div>
              </div>
              <div className="mt-10 grid md:grid-cols-2 gap-5">
                {rotterdamReviews.map((review) => (
                  <div key={review.id} className="rounded-2xl card p-6">
                    <Stars rating={review.rating} />
                    <p className="mt-3 text-sm text-dim">&ldquo;{review.review_text}&rdquo;</p>
                    <p className="mt-4 text-sm font-bold">{review.name} <span className="font-normal text-dim">— Rotterdam</span></p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-dim">Meer lezen? Bekijk <Link href="/reviews" className="underline hover:text-ink">alle reviews</Link> van klanten door heel Nederland.</p>
            </div>
          </section>
        )}

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Vragen</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over waterzuiveraars in Rotterdam</h2>
            <div className="mt-8 space-y-3">
              {FAQ_ITEMS.map(([vraag, antwoord]) => (
                <details key={vraag} className="group rounded-2xl card p-5">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-display font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded">
                    {vraag}
                    <svg className="shrink-0 transition-transform group-open:rotate-45 text-amber-dark" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  </summary>
                  <p className="mt-3 text-sm text-dim">{antwoord}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
            <div className="flex flex-wrap gap-3">
              <Link href="/besparing" className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-bold text-ink hover:bg-ink hover:text-white transition-colors">
                Bereken uw besparing
              </Link>
              <Link href="/kennisbank/waterzuiveraar-installeren" className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-bold text-ink hover:bg-ink hover:text-white transition-colors">
                Meer over de installatie
              </Link>
            </div>

            <div className="mt-14 pt-10 border-t border-edge">
              <h2 className="font-display text-lg font-extrabold tracking-tight">Ook actief in</h2>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <Link href="/waterzuiveraar/utrecht" className="cursor-pointer underline hover:text-ink text-dim">Waterzuiveraar installeren in Utrecht</Link>
                <Link href="/waterzuiveraar/den-haag" className="cursor-pointer underline hover:text-ink text-dim">Waterzuiveraar installeren in Den Haag</Link>
                <Link href="/waterzuiveraar" className="cursor-pointer underline hover:text-ink text-dim">Alle werkgebieden</Link>
              </div>
            </div>

            <Link href="/aanmelden" className="cursor-pointer mt-10 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25">
              Vraag vrijblijvend een offerte aan
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyCta />
    </>
  );
}
