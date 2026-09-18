import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import FaqSchema from '@/components/FaqSchema';

export const metadata = {
  alternates: { canonical: '/kennisbank/kraanwater-filteren' },
  title: 'Kraanwater filteren: welke opties heb je? — Water-zuivering',
  description: 'Kraanwater filteren kan op verschillende manieren, van een simpele kan tot een compleet osmosesysteem. De opties en hun effect op een rij.',
};

const OPTIES = [
  ['Waterfilterkan', 'Laagdrempelig en goedkoop, filtert vooral chloor en verbetert de smaak. Geen effect op PFAS of medicijnresten.'],
  ['Kraanfilter (opzetstuk)', 'Direct water uit de kraan zonder bijvullen, iets grondiger dan een kan, maar nog altijd beperkt in filtratiediepte.'],
  ['Waterzuiveraar onder de gootsteen (osmose)', 'De grondigste manier om kraanwater te filteren: verwijdert tot 99% van chloor, PFAS, medicijnresten en microplastics.'],
];

const FAQ = [
  ['Is kraanwater filteren in Nederland nodig?', 'Nederlands kraanwater voldoet aan strenge normen en is veilig om te drinken. Filteren is een extra stap voor wie ook sporen van PFAS, medicijnresten en microplastics kwijt wil.'],
  ['Wat is de snelste manier om kraanwater te filteren?', 'Een waterfilterkan werkt meteen zonder installatie, maar filtert het minst grondig. Voor snelheid én diepgang samen is een kraanfilter een tussenoptie.'],
  ['Welke manier van kraanwater filteren is het grondigst?', 'Een waterzuiveraar onder de gootsteen met omgekeerde osmose, omdat het membraan veel fijner filtert dan een kan of kraanfilter.'],
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Kraanwater filteren: welke opties heb je?"
        description="Kraanwater filteren kan op verschillende manieren, van een simpele kan tot een compleet osmosesysteem. De opties en hun effect op een rij."
        image="https://www.water-zuivering.nl/assets/img/twee-kranen.jpg"
        url="https://www.water-zuivering.nl/kennisbank/kraanwater-filteren"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Kraanwater filteren: welke opties heb je?', url: 'https://www.water-zuivering.nl/kennisbank/kraanwater-filteren' },
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
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">Kraanwater filteren: welke opties heb je?</h1>
            <p className="mt-5 text-dim text-lg"><strong className="text-ink">Kraanwater filteren</strong> kan op meerdere manieren — met flink verschil in resultaat.</p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
              <Image src="/assets/img/twee-kranen.jpg" alt="Twee kranen, waarvan een met gefilterd kraanwater" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">De drie meest gekozen opties</h2>
              <div className="mt-5 space-y-4">
                {OPTIES.map(([titel, uitleg]) => (
                  <div key={titel}>
                    <p className="font-display font-bold text-ink">{titel}</p>
                    <p className="mt-1 text-sm text-dim leading-relaxed">{uitleg}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Welke optie past bij jou?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Zoek je een snelle, goedkope manier om de chloorsmaak kwijt te raken, dan volstaat een kan. Wil je écht af van sporenstoffen zonder gedoe met bijvullen, dan is een systeem onder de gootsteen de grondigste keuze. Een uitgebreide vergelijking, inclusief kosten en gemak, vind je in ons artikel <Link href="/kennisbank/beste-waterfilter-voor-thuis" className="underline hover:text-ink">beste waterfilter voor thuis</Link>.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
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

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Kies voor de grondigste optie?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan voor een waterzuiveraar die chloor, PFAS en microplastics filtert.</p>
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
