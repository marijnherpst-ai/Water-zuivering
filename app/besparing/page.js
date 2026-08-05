import Link from 'next/link';
import Header from '@/components/Header';
import Calculator from '@/components/Calculator';

export const metadata = {
  title: 'Bereken je besparing — Water-zuivering',
  description: 'Bereken hoeveel jij per jaar bespaart door over te stappen van flessenwater naar een Water-zuivering waterzuiveraar.',
};

export default function BesparingPage() {
  return (
    <>
      <Header />

      <main>
        {/* HERO + CALCULATOR */}
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Kostenbesparing</span>
              <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">Bereken hier hoeveel euro je kunt besparen met een waterzuiveraar</h1>
              <p className="mt-5 text-dim text-lg">Flessenwater is duurder dan je denkt. In drie korte stappen bereken je precies wat de aanschaf van een waterzuiveraar oplevert.</p>
            </div>
            <Calculator />
          </div>
        </section>

        {/* HOE REKENEN WE DIT UIT */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Transparant</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Hoe rekenen we dit uit?</h2>
            </div>
            <div className="mt-14 grid sm:grid-cols-3 gap-x-6 gap-y-10">
              <div className="relative">
                <span className="font-display text-5xl font-extrabold text-amber/25">01</span>
                <p className="mt-2 font-display font-bold text-lg">Jouw waterverbruik</p>
                <p className="mt-2 text-sm text-dim">Aantal personen × glazen per dag × 250 ml = liters die je gezin per jaar drinkt.</p>
              </div>
              <div className="relative sm:border-x sm:border-edge sm:px-6">
                <span className="font-display text-5xl font-extrabold text-amber/25">02</span>
                <p className="mt-2 font-display font-bold text-lg">Prijs per liter</p>
                <p className="mt-2 text-sm text-dim">De literprijs van het merk dat jij drinkt, versus circa €0,05 per liter gefilterd kraanwater (incl. filters).</p>
              </div>
              <div className="relative">
                <span className="font-display text-5xl font-extrabold text-amber/25">03</span>
                <p className="mt-2 font-display font-bold text-lg">Het verschil</p>
                <p className="mt-2 text-sm text-dim">Liters per jaar × het prijsverschil = jouw geschatte besparing per jaar.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WAAROM HET LOONT */}
        <section className="relative">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Meer dan geld</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Ook goed voor je gemak en het milieu</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:divide-x lg:divide-edge">
              <div className="text-center lg:px-2">
                <p className="font-display text-2xl font-extrabold text-amber-dark">0</p>
                <p className="mt-1 text-xs text-dim">Flessen sjouwen</p>
              </div>
              <div className="text-center lg:px-2">
                <p className="font-display text-2xl font-extrabold text-amber-dark">24/7</p>
                <p className="mt-1 text-xs text-dim">Vers water beschikbaar</p>
              </div>
              <div className="text-center lg:px-2">
                <p className="font-display text-2xl font-extrabold text-amber-dark">-</p>
                <p className="mt-1 text-xs text-dim">Minder plastic afval</p>
              </div>
              <div className="text-center lg:px-2">
                <p className="font-display text-2xl font-extrabold text-amber-dark">3</p>
                <p className="mt-1 text-xs text-dim">Filtertraps voor puur water</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Volgende stap</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Zet die besparing vandaag nog in gang</h2>
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
