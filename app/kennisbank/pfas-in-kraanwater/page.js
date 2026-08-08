import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import RevealObserver from '@/components/RevealObserver';

export const metadata = {
  title: 'PFAS in kraanwater: wat is het en hoe filter je het?',
  description:
    'PFAS in kraanwater: wat het is, waar het vandaan komt en hoe je het effectief uit je drinkwater filtert.',
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
              PFAS in kraanwater: wat is het en hoe filter je het eruit?
            </h1>
            <p className="mt-5 text-dim text-lg">
              Je hebt de term vast voorbij zien komen in het nieuws. Wat zijn PFAS precies, en wat kun je er zelf aan doen?
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat zijn PFAS?</h2>
            <p className="mt-4 text-dim leading-relaxed">
              PFAS staat voor poly- en perfluoralkylstoffen: een grote groep synthetische stoffen die decennialang zijn gebruikt in onder meer antiaanbaklagen, waterafstotende kleding, blusschuim en verpakkingen. Ze worden ook wel <strong className="text-ink">"forever chemicals"</strong> genoemd, omdat ze van nature nauwelijks afbreken.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Doordat ze zo lang worden gebruikt en amper afbreken, zijn ze inmiddels op veel plekken in de bodem, het oppervlaktewater en dus ook — in kleine sporen — in drinkwater terechtgekomen.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Waarom de aandacht ervoor toeneemt</h2>
            <p className="mt-4 text-dim leading-relaxed">
              Onderzoek naar de effecten van PFAS op de gezondheid loopt nog, maar wijst voorzichtig op mogelijke risico's bij langdurige blootstelling, ook bij lage concentraties. Daardoor worden de toegestane grenswaarden geleidelijk verder aangescherpt — een teken dat de wetenschap dit onderwerp serieus neemt.
            </p>
            <p className="mt-4 text-dim leading-relaxed">
              Precies daarom is PFAS een van de belangrijkste redenen waarom mensen tegenwoordig kiezen voor extra filtratie thuis, naast wat het drinkwaterbedrijf al doet.
            </p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                <Image src="/assets/img/kennisbank/pfas-in-kraanwater.png" alt="Close-up van een druppel helder water" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">De oplossing</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Omgekeerde osmose filtert PFAS effectief</h2>
              <p className="mt-4 text-dim">Het RO-membraan in een Water-zuivering systeem heeft gaatjes die honderden keren dunner zijn dan een haar — te klein voor PFAS-moleculen om doorheen te komen. Meer over hoe dat proces precies werkt lees je in <Link href="/kennisbank/wat-is-osmosewater" className="underline hover:text-ink">onze uitleg over osmosewater</Link>.</p>
            </div>
          </div>
        </section>

        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">PFAS-vrij water, direct uit je kraan</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan en ontdek wat een Water-zuivering systeem voor jouw huishouden betekent.</p>
            <Link href="/aanmelden" className="cursor-pointer mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25">
              Vraag vrijblijvend een offerte aan
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-surface border-t border-edge">
        <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-dim text-center">&copy; 2026 Jd services B.V. (Water-zuivering). Alle rechten voorbehouden.</div>
      </footer>
    </>
  );
}
