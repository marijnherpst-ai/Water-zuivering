import Header from '@/components/Header';

export const metadata = {
  title: '10 jaar garantie — Water-zuivering',
  description: 'Elk Water-zuivering systeem wordt geleverd met 10 jaar garantie. Lees hier wat er precies gedekt is en hoe het werkt.',
};

export default function GarantiePage() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="relative max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
            <span className="mx-auto flex items-center justify-center w-16 h-16 rounded-2xl bg-ink text-amber mb-6">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Garantie</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">10 jaar garantie op elk systeem</h1>
            <p className="mt-5 text-dim text-lg">Wij staan achter de kwaliteit van ons werk. Daarom krijg je bij elk Water-zuivering systeem tien jaar lang zekerheid, zonder kleine lettertjes.</p>
          </div>
        </section>

        {/* WAT VALT ERONDER */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Dekking</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wat valt eronder?</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="rounded-2xl card p-6 flex items-start gap-4">
                <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-amber/12 text-amber-dark">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <div>
                  <p className="font-display font-bold">Materiaal- en fabricagefouten</p>
                  <p className="mt-1 text-sm text-dim">Gaat er onverhoopt iets stuk door een gebrek in het apparaat zelf? Dan repareren of vervangen wij het kosteloos.</p>
                </div>
              </div>
              <div className="rounded-2xl card p-6 flex items-start gap-4">
                <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-amber/12 text-amber-dark">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <div>
                  <p className="font-display font-bold">Onderdelen &amp; techniek</p>
                  <p className="mt-1 text-sm text-dim">Van de RO-membraan tot het display: technische onderdelen die niet naar behoren werken, vallen onder de garantie.</p>
                </div>
              </div>
              <div className="rounded-2xl card p-6 flex items-start gap-4">
                <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-amber/12 text-amber-dark">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <div>
                  <p className="font-display font-bold">Onze installatie</p>
                  <p className="mt-1 text-sm text-dim">Problemen die voortkomen uit de montage door onze eigen monteurs? Dan lossen we dat vanzelfsprekend gratis op.</p>
                </div>
              </div>
              <div className="rounded-2xl card p-6 flex items-start gap-4">
                <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-amber/12 text-amber-dark">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <div>
                  <p className="font-display font-bold">Persoonlijke ondersteuning</p>
                  <p className="mt-1 text-sm text-dim">Tien jaar lang kun je gewoon bij ons terecht met vragen — telefonisch of via het contactformulier.</p>
                </div>
              </div>
            </div>
            <p className="mt-8 text-center text-xs text-dim/70">Verbruiksartikelen zoals filters vallen niet onder de garantie — die vervang je periodiek zelf, zie <a href="/uitleg" className="underline hover:text-ink">de uitleg</a> hierover.</p>
          </div>
        </section>

        {/* HOE HET WERKT */}
        <section className="relative">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Zo werkt het</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Een beroep doen op je garantie</h2>
            </div>
            <div className="mt-14 grid sm:grid-cols-3 gap-x-6 gap-y-10">
              <div className="relative">
                <span className="font-display text-5xl font-extrabold text-amber/25">01</span>
                <p className="mt-2 font-display font-bold text-lg">Neem contact op</p>
                <p className="mt-2 text-sm text-dim">Meld het probleem via <a href="/contact" className="underline hover:text-ink">het contactformulier</a> of telefonisch.</p>
              </div>
              <div className="relative sm:border-x sm:border-edge sm:px-6">
                <span className="font-display text-5xl font-extrabold text-amber/25">02</span>
                <p className="mt-2 font-display font-bold text-lg">Wij beoordelen het</p>
                <p className="mt-2 text-sm text-dim">We denken met je mee en bepalen de snelste oplossing — vaak al tijdens het eerste contact.</p>
              </div>
              <div className="relative">
                <span className="font-display text-5xl font-extrabold text-amber/25">03</span>
                <p className="mt-2 font-display font-bold text-lg">Kosteloos verholpen</p>
                <p className="mt-2 text-sm text-dim">Valt het onder de garantie? Dan repareren of vervangen we het zonder kosten voor jou.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Zekerheid inbegrepen</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">10 jaar zorgeloos zuiver water</h2>
            <p className="mt-4 text-white/70">Vraag een vrijblijvende offerte aan en profiteer direct van onze 10 jaar garantie.</p>
            <a href="/aanmelden" className="cursor-pointer mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25">
              Vraag vrijblijvend een offerte aan
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-surface border-t border-edge">
        <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-dim text-center">&copy; 2026 Jd services B.V. (Water-zuivering). Alle rechten voorbehouden.</div>
      </footer>
    </>
  );
}
