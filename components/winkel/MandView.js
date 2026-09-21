'use client';

import Link from 'next/link';
import { PRODUCTEN, formatPrijs } from '@/lib/winkel/producten';
import { useMand, zetAantal, verwijder } from '@/lib/winkel/mand';

export default function MandView() {
  const { regels, klaar } = useMand();

  const items = regels
    .map((r) => ({ ...r, product: PRODUCTEN.find((p) => p.slug === r.slug) }))
    .filter((r) => r.product && r.product.prijs !== null);

  if (!klaar) return <p className="mt-8 text-dim">Winkelmand laden…</p>;

  if (items.length === 0) {
    return (
      <div className="mt-8 rounded-2xl card p-8 text-center">
        <p className="font-display font-bold text-lg">Je winkelmand is leeg</p>
        <p className="mt-2 text-sm text-dim">Voeg een filter toe om te beginnen.</p>
        <Link href="/winkel" className="cursor-pointer mt-6 inline-flex items-center rounded-full bg-amber px-6 py-3 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors">
          Naar de winkel
        </Link>
      </div>
    );
  }

  const totaal = items.reduce((som, r) => som + r.product.prijs * r.aantal, 0);

  return (
    <div className="mt-8">
      <ul className="space-y-3">
        {items.map((r) => (
          <li key={r.slug} className="rounded-2xl card p-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-display font-bold">{r.product.naam}</p>
              <p className="text-sm text-dim">{formatPrijs(r.product.prijs)} per stuk</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button type="button" aria-label={`Minder ${r.product.naam}`} onClick={() => zetAantal(r.slug, r.aantal - 1)} className="cursor-pointer w-9 h-9 rounded-full border border-edge font-bold hover:bg-bg">−</button>
                <span className="w-6 text-center font-semibold" aria-live="polite">{r.aantal}</span>
                <button type="button" aria-label={`Meer ${r.product.naam}`} onClick={() => zetAantal(r.slug, r.aantal + 1)} className="cursor-pointer w-9 h-9 rounded-full border border-edge font-bold hover:bg-bg">+</button>
              </div>
              <p className="w-24 text-right font-display font-bold">{formatPrijs(r.product.prijs * r.aantal)}</p>
              <button type="button" onClick={() => verwijder(r.slug)} className="cursor-pointer text-sm text-dim underline hover:text-ink">Verwijder</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-2xl bg-amber/10 border border-amber/20 p-6">
        <div className="flex items-baseline justify-between">
          <p className="font-display font-bold">Totaal (incl. btw)</p>
          <p className="font-display text-2xl font-extrabold">{formatPrijs(totaal)}</p>
        </div>
        <p className="mt-1 text-xs text-dim">Verzendkosten worden later berekend.</p>
        <button type="button" disabled className="mt-5 w-full rounded-full bg-edge px-6 py-3.5 text-sm font-bold text-dim cursor-not-allowed">
          Afrekenen — binnenkort beschikbaar
        </button>
      </div>
    </div>
  );
}
