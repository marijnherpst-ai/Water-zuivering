import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';

export const metadata = {
  title: 'Hoe werkt het? — Water-zuivering',
  description: 'In gewone taal uitgelegd: hoe je waterzuiveraar werkt, hoe je een filter vervangt en hoe de installatie gaat.',
};

export default function UitlegPage() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Uitleg</span>
              <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">Hoe werkt jouw waterzuiveraar?</h1>
              <p className="mt-5 text-dim text-lg max-w-md">Geen ingewikkeld gedoe. In gewone taal: hoe het systeem water zuivert, hoe je zelf een filter vervangt en hoe de installatie gaat.</p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-dim">
                <span className="inline-flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>3-traps filtratie</span>
                <span className="inline-flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Filter in 3 stappen</span>
                <span className="inline-flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Vakkundig geïnstalleerd</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-amber/20 via-amber/5 to-transparent -rotate-3" />
              <div className="relative rounded-[2rem] overflow-hidden border border-edge aspect-[4/5]">
                <Image src="/assets/img/cabinet-install.png" alt="Het Water-zuivering systeem geïnstalleerd in het keukenkastje" fill className="object-cover" />
              </div>
              <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -left-6 rounded-2xl card shadow-xl px-5 py-4 bg-white">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-amber/15 text-amber-dark">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.7" /><path d="M4 9h16M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
                </span>
                <div>
                  <p className="text-lg font-display font-extrabold leading-none">10,5 cm</p>
                  <p className="text-xs text-dim mt-1 max-w-[9rem]">Smaller dan de meeste keukenladen</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOE HET WERKT - 3 STAPPEN */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="glow w-[400px] h-[400px] bg-amber/10 bottom-0 -right-32" />
          <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Het proces</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">In drie stappen naar zuiver water</h2>
            </div>
            <div className="mt-14 grid sm:grid-cols-3 gap-x-6 gap-y-10">
              <div className="relative">
                <span className="font-display text-5xl font-extrabold text-amber/25">01</span>
                <p className="mt-2 font-display font-bold text-lg">PPC-filter</p>
                <p className="mt-2 text-sm text-dim">Het grove vuil eruit: zand, roest en andere grove deeltjes blijven hier meteen al hangen.</p>
              </div>
              <div className="relative sm:border-x sm:border-edge sm:px-6">
                <span className="font-display text-5xl font-extrabold text-amber/25">02</span>
                <p className="mt-2 font-display font-bold text-lg">RO-filter</p>
                <p className="mt-2 text-sm text-dim">Het fijne werk: piepkleine gaatjes, honderden keren dunner dan een haar, houden bijna alles tegen.</p>
              </div>
              <div className="relative">
                <span className="font-display text-5xl font-extrabold text-amber/25">03</span>
                <p className="mt-2 font-display font-bold text-lg">CTO-filter</p>
                <p className="mt-2 text-sm text-dim">De laatste smaakjes weg: chloor en vieze geurtjes verdwijnen, zodat je water lekker fris smaakt.</p>
              </div>
            </div>
            <p className="mt-12 text-center font-display font-bold text-xl text-amber-dark">Het resultaat: zuiver water, direct uit je kraan.</p>
          </div>
        </section>

        {/* KLEIN MAAR KRACHTIG */}
        <section className="relative">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glow w-64 h-64 bg-amber/15" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
              <div className="relative rounded-3xl overflow-hidden border border-edge bg-white flex items-center justify-center p-8">
                <Image src="/assets/img/systeem-slim-105mm.png" alt="Het systeem is maar 105mm smal" width={165} height={630} className="h-auto max-h-[420px] w-auto" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Ontwerp</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Klein maar krachtig</h2>
              <p className="mt-4 text-dim">Het systeem is maar 10,5 cm breed (420 x 105 x 430 mm) — smaller dan de meeste keukenladen. Past dus zo goed als altijd onder je aanrecht.</p>
              <p className="mt-4 text-dim">Er hoeft ook geen los waterreservoir bij. Het systeem maakt zuiver water op het moment dat jij de kraan opendraait.</p>
            </div>
          </div>
        </section>

        {/* STAAND OF LIGGEND */}
        <section className="relative bg-surface border-y border-edge overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Flexibel plaatsen</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Staand of liggend — jouw keuze</h2>
              <p className="mt-4 text-dim">Past het systeem niet rechtop in je kastje? Geen probleem. Leg 'm gewoon op zijn kant neer. Het bedieningspaneel draait automatisch mee, zodat je het display altijd goed kunt aflezen.</p>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl card p-6 text-center">
                <div className="rounded-xl overflow-hidden bg-bg flex items-center justify-center p-4 h-64">
                  <Image src="/assets/img/systeem-staand.png" alt="Systeem rechtop staand geplaatst" width={180} height={520} className="h-full w-auto object-contain" />
                </div>
                <p className="mt-4 font-display font-bold">Staand</p>
              </div>
              <div className="rounded-2xl card p-6 text-center">
                <div className="rounded-xl overflow-hidden bg-bg flex items-center justify-center p-4 h-64">
                  <Image src="/assets/img/systeem-liggend.png" alt="Systeem liggend geplaatst" width={500} height={145} className="w-full h-auto object-contain" />
                </div>
                <p className="mt-4 font-display font-bold">Liggend</p>
              </div>
            </div>
          </div>
        </section>

        {/* FILTER VERVANGEN */}
        <section className="relative">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-edge order-2 lg:order-1 shadow-xl">
              <Image src="/assets/img/filter-vervangen.png" alt="Filter eruit draaien zonder gereedschap" width={1200} height={611} className="w-full h-auto" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Onderhoud</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Filter vervangen in drie stappen</h2>
              <p className="mt-4 text-dim">Zonder gereedschap, in een paar minuten geregeld:</p>
              <ol className="mt-5 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-amber text-ink text-sm font-bold">1</span>
                  <span className="text-dim">Draai de dop een kwartslag los.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-amber text-ink text-sm font-bold">2</span>
                  <span className="text-dim">Trek het oude filter eruit.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-amber text-ink text-sm font-bold">3</span>
                  <span className="text-dim">Schuif het nieuwe filter erin en draai de dop weer vast. Klaar!</span>
                </li>
              </ol>
              <p className="mt-5 text-sm text-dim">Een filter gaat gemiddeld <strong className="text-ink">36 maanden</strong> mee, of tot <strong className="text-ink">6.000 liter</strong> water. Het display op het apparaat laat je precies zien wanneer het tijd is om te vervangen.</p>
              <p className="mt-5 text-sm text-dim">Benieuwd wat osmosewater precies is en waarom het zo zuiver is? Lees onze <Link href="/kennisbank/wat-is-osmosewater" className="underline hover:text-ink">uitleg in de kennisbank</Link>.</p>
            </div>
          </div>
        </section>

        {/* TECHNISCHE GEGEVENS */}
        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-6xl mx-auto px-6 py-14">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">In het kort</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">De belangrijkste gegevens</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-y-8 lg:divide-x lg:divide-edge">
              <div className="text-center lg:px-2">
                <p className="font-display text-2xl font-extrabold text-amber-dark">± 3.000L</p>
                <p className="mt-1 text-xs text-dim">per dag</p>
              </div>
              <div className="text-center lg:px-2">
                <p className="font-display text-2xl font-extrabold text-amber-dark">2L/min</p>
                <p className="mt-1 text-xs text-dim">uit de kraan</p>
              </div>
              <div className="text-center lg:px-2">
                <p className="font-display text-2xl font-extrabold text-amber-dark">&lt;48 dB</p>
                <p className="mt-1 text-xs text-dim">fluisterstil</p>
              </div>
              <div className="text-center lg:px-2">
                <p className="font-display text-2xl font-extrabold text-amber-dark">&lt;60 W</p>
                <p className="mt-1 text-xs text-dim">stroomverbruik</p>
              </div>
              <div className="text-center lg:px-2">
                <p className="font-display text-2xl font-extrabold text-amber-dark">10 jaar</p>
                <p className="mt-1 text-xs text-dim">garantie</p>
              </div>
              <div className="text-center lg:px-2">
                <p className="font-display text-2xl font-extrabold text-amber-dark">CE / RoHS</p>
                <p className="mt-1 text-xs text-dim">gecertificeerd</p>
              </div>
            </div>
          </div>
        </section>

        {/* INSTALLATIE + CTA */}
        <section className="relative bg-ink text-white overflow-hidden">
          <div className="glow w-[420px] h-[420px] bg-amber/15 -top-32 -right-32" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber">Installatie</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold tracking-tight">Installatie laten we niet aan het toeval over</h2>
            <p className="mt-4 text-white/70">Een vakman sluit het systeem binnen 1 tot 2 uur professioneel aan op je bestaande kraan. Jij hoeft zelf niets te doen.</p>
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
