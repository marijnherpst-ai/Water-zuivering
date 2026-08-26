import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';

export const metadata = {
  alternates: { canonical: '/kennisbank/wat-kost-een-waterzuiveringssysteem' },
  title: 'Wat kost een waterzuiveringssysteem? — Water-zuivering',
  description:
    'Alle kosten van een waterzuiveringssysteem op een rij: aanschaf, installatie en onderhoud — en wat je ermee bespaart op flessenwater.',
};

export default function Page() {
  return (
    <>
      <RevealObserver />
      <Header />

      <main>
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Kennisbank</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Wat kost een waterzuiveringssysteem?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Een eerlijk overzicht van waar de kosten vandaan komen — en waarom het op termijn vaak voordeliger is dan je zou denken.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Drie soorten kosten</h2>
            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              <div className="rounded-2xl card p-6">
                <span className="font-display text-3xl font-extrabold text-amber/40">1</span>
                <p className="mt-3 font-display font-bold">Eenmalige aanschaf</p>
                <p className="mt-2 text-sm text-dim">Het systeem zelf, afhankelijk van het type en eventuele accessoires zoals een 3-weg kraan of mineraalfilter.</p>
              </div>
              <div className="rounded-2xl card p-6">
                <span className="font-display text-3xl font-extrabold text-amber/40">2</span>
                <p className="mt-3 font-display font-bold">Installatie</p>
                <p className="mt-2 text-sm text-dim">Vakkundige aansluiting op je bestaande kraan, meestal binnen 1 tot 2 uur geregeld door een monteur.</p>
              </div>
              <div className="rounded-2xl card p-6">
                <span className="font-display text-3xl font-extrabold text-amber/40">3</span>
                <p className="mt-3 font-display font-bold">Onderhoud</p>
                <p className="mt-2 text-sm text-dim">Om de 12 tot 24 maanden een nieuw filter (afhankelijk van het type) — de enige terugkerende kostenpost, en die is beperkt.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom de vergelijking met flessenwater vaak in het voordeel van een systeem uitvalt</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Flessenwater of jerrycans kosten per liter al snel meer dan je denkt — en die kosten lopen jaar na jaar door, voor onbepaalde tijd. Een eigen systeem heeft wél een aanschafkost vooraf, maar daarna nog maar één beperkte, terugkerende kostenpost: het filter.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Bij Water-zuivering geldt op dit moment bovendien tijdelijk <strong className="text-ink">€250 korting</strong> bij aanvraag van een offerte.
            </p>
            <Link href="/besparing" className="cursor-pointer mt-6 inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors">
              Bereken je persoonlijke besparing
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/kennisbank/wat-kost-een-waterzuiveringssysteem.png" alt="Euromunten naast een glas helder water op een keukenblad" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Persoonlijk advies</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Een exacte prijs? Dat hangt af van jouw situatie</h2>
              <p className="mt-4 text-dim">Elke keuken is anders — daarom geven we liever een persoonlijk, vrijblijvend advies dan een algemeen bedrag dat voor jou misschien niet klopt. Een offerte aanvragen kost niets en verplicht je tot niets.</p>
              <ul className="mt-5 space-y-2.5 text-sm">
                <li className="flex items-center gap-2.5 text-dim"><svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Gratis en vrijblijvend advies</li>
                <li className="flex items-center gap-2.5 text-dim"><svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>10 jaar garantie inbegrepen</li>
                <li className="flex items-center gap-2.5 text-dim"><svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Reactie binnen 1 werkdag</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Benieuwd wat het voor jou kost?</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan en ontvang binnen één werkdag een persoonlijk voorstel.</p>
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
