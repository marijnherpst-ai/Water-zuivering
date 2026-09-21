import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductAfbeelding from '@/components/winkel/ProductAfbeelding';
import ProductZoom from '@/components/winkel/ProductZoom';
import ToevoegenKnop from '@/components/winkel/ToevoegenKnop';
import RichText from '@/components/winkel/RichText';
import FaqSchema from '@/components/FaqSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import ProductSchema from '@/components/ProductSchema';
import { PRODUCTEN, STAPPEN_VERVANGEN, FAQ_PRODUCT_BESTELLEN, getProduct, formatPrijs } from '@/lib/winkel/producten';

const SITE = 'https://www.water-zuivering.nl';

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTEN.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: `${p.seo.metaTitle} — Water-zuivering`,
    description: p.seo.metaDescription,
    alternates: { canonical: `/winkel/${p.slug}` },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const { seo } = p;
  const anderen = PRODUCTEN.filter((x) => x.slug !== p.slug);
  const faq = [...seo.faq, FAQ_PRODUCT_BESTELLEN];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: `${SITE}/` },
          { name: 'Winkel', url: `${SITE}/winkel` },
          { name: p.naam, url: `${SITE}/winkel/${p.slug}` },
        ]}
      />
      <ProductSchema
        name={p.naam}
        description={seo.metaDescription}
        image={`${SITE}${p.afbeelding}`}
        url={`${SITE}/winkel/${p.slug}`}
      />
      <FaqSchema items={faq} />
      <Header />
      <main>
        <section className="max-w-5xl mx-auto px-6 py-14 md:py-20">
          <nav aria-label="Kruimelpad" className="text-sm text-dim">
            <Link href="/" className="hover:text-ink underline">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <Link href="/winkel" className="hover:text-ink underline">Winkel</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span>{p.naam}</span>
          </nav>

          <div className="mt-6 grid md:grid-cols-2 gap-10 items-start">
            <ProductZoom src={p.afbeelding} alt={p.afbeeldingAlt} className="aspect-[4/5]" />

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">{p.ondertitel}</span>
              <h1 className="mt-2 font-display text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.1]">{seo.h1}</h1>
              <p className="mt-4 font-display text-3xl font-extrabold">
                {p.prijs === null ? 'Prijs volgt' : formatPrijs(p.prijs)}
                {p.prijs !== null && <span className="ml-2 text-sm font-medium text-dim">incl. btw</span>}
              </p>
              <p className="mt-1 text-sm text-dim">Vervanging: {p.vervanging.toLowerCase()}</p>

              <p className="mt-6 text-dim leading-relaxed"><RichText text={seo.intro[0]} /></p>

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
            <p className="text-dim leading-relaxed"><RichText text={seo.intro[1]} /></p>
            <ul className="mt-8 space-y-2.5 text-sm">
              {p.kenmerken.map((k) => (
                <li key={k} className="flex items-start gap-2.5 text-dim">
                  <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {k}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {seo.secties.map((sectie, i) => (
          <section key={sectie.titel} className={i % 2 === 0 ? '' : 'bg-surface border-y border-edge'}>
            <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">{sectie.titel}</h2>
              {sectie.alineas.map((alinea) => (
                <p key={alinea} className="mt-4 text-dim leading-relaxed">{alinea}</p>
              ))}
            </div>
          </section>
        ))}

        <section className={seo.secties.length % 2 === 0 ? '' : 'bg-surface border-y border-edge'}>
          <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Specificaties van het {p.naam}</h2>
            <div className="mt-6 rounded-2xl card overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {seo.specs.map(([naam, waarde], i) => (
                    <tr key={naam} className={i % 2 === 0 ? 'bg-bg/50' : ''}>
                      <th scope="row" className="text-left font-semibold px-5 py-3 w-2/5 align-top">{naam}</th>
                      <td className="px-5 py-3 text-dim">{waarde}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className={seo.secties.length % 2 === 0 ? 'bg-surface border-y border-edge' : ''}>
          <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">{seo.wanneerTitel}</h2>
            {seo.wanneer.map((alinea) => (
              <p key={alinea} className="mt-4 text-dim leading-relaxed">{alinea}</p>
            ))}

            <h3 className="mt-10 font-display text-xl font-extrabold tracking-tight">{seo.signalenTitel}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {seo.signalen.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-dim">
                  <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {s}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-xl font-extrabold tracking-tight">Zo vervang je het filter</h3>
            <ol className="mt-5 space-y-3">
              {STAPPEN_VERVANGEN.map((stap, i) => (
                <li key={stap} className="flex items-start gap-3">
                  <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-amber text-ink text-xs font-bold">{i + 1}</span>
                  <span className="text-dim text-sm leading-relaxed">{stap}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-dim">
              Meer uitleg vind je in de <Link href="/handleiding" className="underline hover:text-ink">handleiding</Link>.
            </p>
          </div>
        </section>

        <section className={seo.secties.length % 2 === 0 ? '' : 'bg-surface border-y border-edge'}>
          <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">{seo.samenTitel}</h2>
            {seo.samen.map((alinea) => (
              <p key={alinea} className="mt-4 text-dim leading-relaxed">{alinea}</p>
            ))}
            <ul className="mt-6 flex flex-wrap gap-3">
              {seo.samenLinks.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="cursor-pointer inline-flex items-center rounded-full border-2 border-ink px-4 py-2 text-sm font-bold text-ink hover:bg-bg transition-colors">{label}</Link>
                </li>
              ))}
            </ul>

            <h2 className="mt-14 font-display text-2xl md:text-3xl font-extrabold tracking-tight">{seo.kopenTitel}</h2>
            {seo.kopen.map((alinea) => (
              <p key={alinea} className="mt-4 text-dim leading-relaxed">{alinea}</p>
            ))}
            <p className="mt-4 text-dim leading-relaxed">
              Vragen over dit filter? <Link href="/contact" className="underline hover:text-ink">Neem contact met ons op</Link>.
            </p>
          </div>
        </section>

        <section className={seo.secties.length % 2 === 0 ? 'bg-surface border-y border-edge' : ''}>
          <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">Veelgestelde vragen over het {p.naam}</h2>
            <div className="mt-8 space-y-3">
              {faq.map(([vraag, antwoord]) => (
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
            <h2 className="font-display text-2xl font-extrabold tracking-tight">Andere osmose filters</h2>
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
