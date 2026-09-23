import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import FaqSchema from '@/components/FaqSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import PfasChecker from '@/components/PfasChecker';

export const metadata = {
  alternates: { canonical: '/pfas-check' },
  title: 'PFAS in uw kraanwater checken — Water-zuivering',
  description: 'Check hoeveel PFAS er in het kraanwater in uw regio zit op basis van de RIVM-gezondheidsnorm, en ontdek hoe een osmose waterzuiveraar PFAS verwijdert.',
};

const UITLEG = [
  ['Wat is PFAS?', 'PFAS staat voor poly- en perfluoralkylstoffen: een groep van duizenden door de mens gemaakte chemicaliën die nauwelijks afbreken in het milieu — vaak "forever chemicals" genoemd. Ze worden al decennia gebruikt in bijvoorbeeld antiaanbaklagen, regenkleding, blusschuim en verpakkingsmateriaal, en zijn via de bodem en het oppervlaktewater in het drinkwater terechtgekomen.'],
  ['Wat is de RIVM-gezondheidsnorm?', 'Het RIVM hanteert een gezondheidskundige richtwaarde van 4,4 nanogram per liter (ng/l), uitgedrukt in PFOA-equivalenten (PEQ). Dit is geen wettelijke norm — de wettelijke (Europese) norm ligt met 100 ng/l veel hoger, en daar voldoen alle Nederlandse waterbedrijven aan. De RIVM-richtwaarde is een strengere, gezondheidskundige advieswaarde.'],
  ['Hoe betrouwbaar is de check hierboven?', 'Onze check geeft een regionale indicatie op basis van uw provincie en waterleverancier, gebaseerd op de meetgegevens van de Nederlandse waterbedrijven zoals geanalyseerd door Greenpeace Nederland. Het is geen exacte check op uw 4-cijferige postcode: voor de meest precieze uitslag verwijzen we naar de officiële Greenpeace-postcodechecker.'],
  ['Hoe verwijdert osmose PFAS uit water?', 'Een omgekeerde-osmosesysteem perst water onder lichte druk door een membraan met poriën van slechts 0,0001 micron. PFAS-moleculen zijn hier ruimschoots te groot voor, waardoor het membraan ze samen met chloor, medicijnresten, microplastics en zware metalen tegenhoudt.'],
];

export default function PfasCheckPage() {
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
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
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

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Achtergrond</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat is PFAS, en wat kunt u eraan doen?</h2>
            </div>
            <div className="mt-10 space-y-3">
              {UITLEG.map(([vraag, antwoord]) => (
                <details key={vraag} className="reveal group rounded-2xl card p-5">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-display font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded">
                    {vraag}
                    <svg className="shrink-0 transition-transform group-open:rotate-45 text-amber-dark" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
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
