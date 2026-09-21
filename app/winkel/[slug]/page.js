import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductAfbeelding from '@/components/winkel/ProductAfbeelding';
import ToevoegenKnop from '@/components/winkel/ToevoegenKnop';
import { PRODUCTEN, STAPPEN_VERVANGEN, FAQ_PRODUCT, getProduct, formatPrijs } from '@/lib/winkel/producten';

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTEN.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: `${p.naam} — Water-zuivering`,
    description: p.kort,
    alternates: { canonical: `/winkel/${p.slug}` },
    robots: { index: false, follow: false },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const anderen = PRODUCTEN.filter((x) => x.slug !== p.slug);

  return (
    <>
      <Header />
      <main>
        <section className="max-w-5xl mx-auto px-6 py-14 md:py-20">
          <Link href="/winkel" className="text-sm text-dim underline hover:text-ink">Terug naar de winkel</Link>

          <div className="mt-6 grid md:grid-cols-2 gap-10 items-start">
            <ProductAfbeelding src={p.afbeelding} alt={p.afbeeldingAlt} className="aspect-[4/5]" priority />

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">{p.ondertitel}</span>
              <h1 className="mt-2 font-display text-3xl md:text-4xl font-extrabold tracking-tight">{p.naam}</h1>
              <p className="mt-4 font-display text-3xl font-extrabold">
                {p.prijs === null ? 'Prijs volgt' : formatPrijs(p.prijs)}
                {p.prijs !== null && <span className="ml-2 text-sm font-medium text-dim">incl. btw</span>}
              </p>
              <p className="mt-1 text-sm text-dim">Vervanging: {p.vervanging.toLowerCase()}</p>

              <p className="mt-6 text-dim leading-relaxed">{p.kort}</p>

              <ul className="mt-6 space-y-2.5 text-sm">
                {p.kenmerken.map((k) => (
                  <li key={k} className="flex items-start gap-2.5 text-dim">
                    <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {k}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <ToevoegenKnop slug={p.slug} bestelbaar={p.prijs !== null} />
                <Link href="/winkel/mandje" className="text-sm underline text-dim hover:text-ink">Bekijk winkelmand</Link>
              </div>
              <p className="mt-4 text-xs text-dim">Afrekenen is nog niet beschikbaar: de winkel is in opbouw.</p>
            </div>
          </div>
        </section>

        <section className="bg-surface border-y border-edge">
          <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Over het {p.naam}</h2>
            {p.uitleg.map((alinea) => (
              <p key={alinea} className="mt-4 text-dim leading-relaxed">{alinea}</p>
            ))}
          </div>
        </section>

        <section>
          <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Wanneer vervang je dit filter?</h2>
            <p className="mt-4 text-dim leading-relaxed">{p.wanneer}</p>

            <h3 className="mt-10 font-display text-xl font-extrabold tracking-tight">Zo vervang je een filter</h3>
            <ol className="mt-5 space-y-3">
              {STAPPEN_VERVANGEN.map((stap, i) => (
                <li key={stap} className="flex items-start gap-3">
                  <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-amber text-ink text-xs font-bold">{i + 1}</span>
                  <span className="text-dim text-sm leading-relaxed">{stap}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-dim">
              Meer uitleg vind je in de <Link href="/handleiding" className="underline hover:text-ink">handleiding</Link> en op de pagina over het <Link href="/osmosesysteem" className="underline hover:text-ink">osmosesysteem</Link>.
            </p>
          </div>
        </section>

        <section className="bg-surface border-y border-edge">
          <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen</h2>
            <div className="mt-8 space-y-3">
              {FAQ_PRODUCT.map(([vraag, antwoord]) => (
                <details key={vraag} className="group rounded-2xl card p-5">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-display font-semibold">
                    {vraag}
                    <svg className="shrink-0 transition-transform group-open:rotate-45 text-amber-dark" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  </summary>
                  <p className="mt-3 text-sm text-dim leading-relaxed">{antwoord}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-5xl mx-auto px-6 py-14 md:py-20">
            <h2 className="font-display text-2xl font-extrabold tracking-tight">Andere filters</h2>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {anderen.map((x) => (
                <Link key={x.slug} href={`/winkel/${x.slug}`} className="cursor-pointer rounded-2xl card p-5 hover:shadow-lg transition-shadow">
                  <ProductAfbeelding src={x.afbeelding} alt={x.afbeeldingAlt} className="aspect-[4/5] mb-4" sizes="(min-width: 640px) 25vw, 90vw" />
                  <p className="text-xs font-bold uppercase tracking-wide text-amber-dark">{x.ondertitel}</p>
                  <p className="mt-1 font-display font-bold">{x.naam}</p>
                  <p className="mt-2 text-sm text-dim">{x.prijs === null ? 'Prijs volgt' : formatPrijs(x.prijs)}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
