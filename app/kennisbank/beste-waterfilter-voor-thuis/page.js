import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import ArticleSchema from '@/components/ArticleSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import FaqSchema from '@/components/FaqSchema';

export const metadata = {
  alternates: { canonical: '/kennisbank/beste-waterfilter-voor-thuis' },
  title: 'Beste waterfilter voor thuis: vergelijking 2026 — Water-zuivering',
  description:
    'Waterfilterkan, kraanfilter of waterzuiveraar onder de gootsteen: wat is de beste waterfilter voor thuis? Vergelijking op filtratie, gemak en kosten.',
};

const TYPES = [
  {
    naam: 'Waterfilterkan',
    beeld: '/assets/img/glas-water.webp',
    filtratie: 2,
    gemak: 3,
    kosten: 5,
    plus: ['Lage aanschafprijs', 'Geen installatie nodig', 'Overal mee te nemen'],
    min: ['Filtert vooral chloor en kalk, geen PFAS of medicijnresten', 'Moet je steeds bijvullen', 'Filterpatronen relatief vaak vervangen'],
    conclusie: 'Prima instapoptie als je alleen de chloorsmaak kwijt wilt, maar filtert oppervlakkig.',
  },
  {
    naam: 'Kraanfilter (opzetstuk)',
    beeld: '/assets/img/een-kraan.jpg',
    filtratie: 3,
    gemak: 4,
    kosten: 4,
    plus: ['Direct water uit de kraan, geen bijvullen', 'Redelijk betaalbaar', 'Simpel zelf te monteren'],
    min: ['Neemt zichtbaar ruimte in op de kraan', 'Filtercapaciteit beperkter dan een ingebouwd systeem', 'Nog steeds geen volledige verwijdering van PFAS en microplastics'],
    conclusie: 'Handig tussenoplossing, maar qua filtratiediepte niet te vergelijken met een systeem onder de gootsteen.',
  },
  {
    naam: 'Waterzuiveraar onder de gootsteen (osmose)',
    beeld: '/assets/img/systeem-staand.png',
    filtratie: 5,
    gemak: 5,
    kosten: 3,
    plus: ['Verwijdert tot 99% van chloor, PFAS, medicijnresten en microplastics', 'Blijft volledig uit het zicht', 'Onbeperkt zuiver water, direct uit de kraan'],
    min: ['Hogere aanschafprijs dan een kan of opzetstuk', 'Vraagt eenmalige installatie'],
    conclusie: 'De grondigste optie — als filtratie je belangrijkste criterium is, wint dit type overtuigend.',
  },
];

const FAQ = [
  ['Wat is de beste waterfilter voor thuis?', 'Dat hangt af van wat je belangrijk vindt. Wil je puur de chloorsmaak kwijt en zo min mogelijk uitgeven, dan volstaat een waterfilterkan. Wil je ook PFAS, medicijnresten en microplastics eruit, dan is een waterzuiveraar onder de gootsteen (osmose) de grondigste keuze.'],
  ['Is een waterfilterkan net zo goed als een waterzuiveraar?', 'Nee. Een waterfilterkan filtert vooral chloor en verbetert de smaak, maar houdt PFAS, medicijnresten en microplastics niet of nauwelijks tegen. Een osmosesysteem verwijdert daarvan tot 99%.'],
  ['Wat kost de beste waterfilter voor thuis?', 'Een waterfilterkan kost enkele tientjes, een kraanfilter meestal onder de honderd euro. Een waterzuiveraar onder de gootsteen kost meer bij aanschaf, maar heeft geen doorlopende kosten voor flessenwater en gaat jarenlang mee.'],
  ['Moet een waterzuiveraar onder de gootsteen professioneel geïnstalleerd worden?', 'Het kan in principe zelf, maar een vakkundige installatie voorkomt lekkages en zorgt dat de waterdruk goed blijft. De meeste aanbieders regelen dit binnen één dag.'],
];

function Sterren({ aantal }) {
  return (
    <div className="flex gap-0.5" aria-label={`${aantal} van de 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < aantal ? '#EDA71B' : 'none'} stroke="#EDA71B" strokeWidth="1.5" aria-hidden="true">
          <path d="M12 2l2.9 6.2 6.8.8-5 4.6 1.4 6.7L12 16.9 5.9 20.3l1.4-6.7-5-4.6 6.8-.8L12 2z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}

export default function BesteWaterfilterVoorThuisPage() {
  return (
    <>
      <ArticleSchema
        headline="Beste waterfilter voor thuis: vergelijking 2026"
        description="Waterfilterkan, kraanfilter of waterzuiveraar onder de gootsteen: wat is de beste waterfilter voor thuis? Vergelijking op filtratie, gemak en kosten."
        image="https://www.water-zuivering.nl/assets/img/glas-water.webp"
        url="https://www.water-zuivering.nl/kennisbank/beste-waterfilter-voor-thuis"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.water-zuivering.nl/' },
          { name: 'Kennisbank', url: 'https://www.water-zuivering.nl/kennisbank' },
          { name: 'Beste waterfilter voor thuis: vergelijking 2026', url: 'https://www.water-zuivering.nl/kennisbank/beste-waterfilter-voor-thuis' },
        ]}
      />
      <FaqSchema items={FAQ} />
      <RevealObserver />
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Kennisbank — Koopgids</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Wat is de beste waterfilter voor thuis?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Waterfilterkan, kraanfilter of een waterzuiveraar onder de gootsteen — we vergelijken de drie meest gekozen opties op filtratie, gemak en kosten.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <p className="text-dim leading-relaxed">
              Er bestaat niet één "beste waterfilter voor thuis" die voor iedereen de juiste keuze is — welke het best bij jou past hangt af van hoe grondig je wilt filteren, hoeveel gemak je zoekt en wat je eraan wilt uitgeven. Hieronder zetten we de drie meest gekozen types eerlijk naast elkaar.
            </p>
          </div>
        </section>

        {/* VERGELIJKING */}
        <section className="relative">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <div className="space-y-10">
              {TYPES.map((type, i) => (
                <div key={type.naam} className="reveal grid lg:grid-cols-[1fr,1.3fr] gap-8 items-center rounded-[2rem] card p-6 sm:p-8">
                  <div className={`relative rounded-2xl overflow-hidden border border-edge aspect-[4/3] ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image
                      src={type.beeld}
                      alt={`${type.naam} als waterfilter voor thuis`}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className={type.naam.includes('osmose') ? 'object-contain p-6 bg-white' : 'object-cover'}
                    />
                  </div>
                  <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                    <span className="inline-block rounded-full bg-amber/12 text-amber-dark text-[11px] font-bold uppercase tracking-wide px-3 py-1">Optie {i + 1}</span>
                    <h2 className="mt-3 font-display text-xl font-extrabold tracking-tight">{type.naam}</h2>

                    <div className="mt-4 space-y-1.5 text-sm">
                      <div className="flex items-center justify-between gap-3"><span className="text-dim">Filtratiediepte</span><Sterren aantal={type.filtratie} /></div>
                      <div className="flex items-center justify-between gap-3"><span className="text-dim">Gemak</span><Sterren aantal={type.gemak} /></div>
                      <div className="flex items-center justify-between gap-3"><span className="text-dim">Lage instapkosten</span><Sterren aantal={type.kosten} /></div>
                    </div>

                    <div className="mt-4 grid sm:grid-cols-2 gap-4">
                      <ul className="space-y-1.5">
                        {type.plus.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-sm text-dim">
                            <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            {p}
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-1.5">
                        {type.min.map((m) => (
                          <li key={m} className="flex items-start gap-2 text-sm text-dim">
                            <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="#5B6472" strokeWidth="2" strokeLinecap="round" /></svg>
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="mt-4 text-sm font-semibold text-ink border-t border-edge pt-4">{type.conclusie}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONCLUSIE */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Onze conclusie</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Zoek je puur een goedkope oplossing tegen de chloorsmaak, dan is een waterfilterkan een prima start. Wil je écht af van PFAS, medicijnresten en microplastics — en dat zonder gedoe met bijvullen — dan is een waterzuiveraar onder de gootsteen de grondigste en op termijn ook de voordeligste keuze, omdat je nooit meer flessenwater hoeft te kopen.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Meer weten over hoe zo'n systeem precies werkt? Lees onze uitleg over <Link href="/waterzuivering-voor-thuis" className="underline hover:text-ink">waterzuivering voor thuis</Link>, of bekijk direct de <Link href="/osmosesysteem" className="underline hover:text-ink">specificaties van ons osmosesysteem</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Liever meteen de grondigste optie?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan voor een waterzuiveraar onder de gootsteen, op maat van jouw keuken.</p>
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
