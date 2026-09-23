'use client';

import { useState, useTransition } from 'react';
import Link from 'next/link';
import { pfasCheck, RIVM_NORM_NG_L, KLEUR_INFO } from '@/lib/pfasData';
import { trackLead } from '@/lib/trackLead';

const VOLGORDE = ['donkerrood', 'rood', 'oranje', 'groen'];

export default function PfasChecker() {
  const [postcode, setPostcode] = useState('');
  const [huisnummer, setHuisnummer] = useState('');
  const [resultaat, setResultaat] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e) {
    e.preventDefault();
    const check = pfasCheck(postcode);
    if (!check) {
      setError('Vul een geldige Nederlandse postcode in (bijv. 1234 AB).');
      setResultaat(null);
      return;
    }
    setError(null);
    setResultaat(check);
    startTransition(() => {
      trackLead('pfas_check');
    });
  }

  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit} className="rounded-2xl card p-6 sm:p-8 grid sm:grid-cols-[1fr_140px_auto] gap-3 items-end">
        <div>
          <label htmlFor="pfas-postcode" className="block text-xs font-semibold text-dim mb-1.5">Postcode</label>
          <input
            id="pfas-postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            placeholder="1234 AB"
            required
            className="w-full rounded-lg border border-edge bg-bg px-4 py-3 text-sm text-ink placeholder:text-dim/60 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
          />
        </div>
        <div>
          <label htmlFor="pfas-huisnummer" className="block text-xs font-semibold text-dim mb-1.5">Huisnummer</label>
          <input
            id="pfas-huisnummer"
            value={huisnummer}
            onChange={(e) => setHuisnummer(e.target.value)}
            placeholder="12"
            required
            className="w-full rounded-lg border border-edge bg-bg px-4 py-3 text-sm text-ink placeholder:text-dim/60 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="cursor-pointer inline-flex items-center justify-center rounded-lg bg-amber px-6 py-3 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors disabled:opacity-60"
        >
          Check mijn water
        </button>
      </form>
      {error && <p className="mt-3 text-sm font-semibold text-red-500">{error}</p>}

      {resultaat && (
        <div className="mt-6 rounded-2xl card p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold text-white" style={{ backgroundColor: resultaat.hex }}>
              {resultaat.label}
            </span>
            <p className="text-sm text-dim">
              Regio <strong className="text-ink">{resultaat.provincie}</strong> — waterleverancier: <strong className="text-ink">{resultaat.data.waterbedrijf}</strong>
            </p>
          </div>
          <p className="mt-4 text-dim leading-relaxed">
            In de provincie <strong className="text-ink">{resultaat.provincie}</strong> valt het kraanwater doorgaans in de categorie <strong style={{ color: resultaat.hex }}>{resultaat.label}</strong>: {resultaat.uitleg}. Dit is gebaseerd op de RIVM-gezondheidsrichtwaarde van {RIVM_NORM_NG_L} ng/l PEQ.
          </p>

          <div className="mt-6">
            <p className="text-xs font-semibold text-dim mb-2">Verdeling inwoners {resultaat.provincie} per categorie</p>
            <div className="flex w-full h-4 rounded-full overflow-hidden border border-edge">
              {VOLGORDE.map((k) => resultaat.data[k] > 0 && (
                <div key={k} style={{ width: `${resultaat.data[k]}%`, backgroundColor: KLEUR_INFO[k].hex }} title={`${KLEUR_INFO[k].label}: ${resultaat.data[k]}%`} />
              ))}
            </div>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-dim">
              {VOLGORDE.map((k) => (
                <span key={k} className="inline-flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: KLEUR_INFO[k].hex }} />
                  {KLEUR_INFO[k].label} {resultaat.data[k]}%
                </span>
              ))}
            </div>
          </div>

          <p className="mt-6 text-xs text-dim/80 leading-relaxed">
            Dit is een regionale indicatie op basis van uw provincie en waterleverancier, gebaseerd op de meetgegevens van de Nederlandse waterbedrijven zoals verwerkt door Greenpeace Nederland (22 september 2026). Dit is geen exacte check op uw 4-cijferige postcode — daarvoor kunt u de{' '}
            <a href="https://doemee.greenpeace.nl/actie/pfas-kraanwater-postcodecheck/" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">officiële Greenpeace-postcodechecker</a> raadplegen.
          </p>

          <div className="mt-6 pt-6 border-t border-edge">
            <p className="font-display font-bold text-ink">Wilt u PFAS, kalk en andere stoffen uit uw kraanwater filteren?</p>
            <p className="mt-1.5 text-sm text-dim">Onze osmose waterzuiveraar verwijdert tot 99% van PFAS, chloor, medicijnresten en microplastics.</p>
            <Link href="/aanmelden" className="cursor-pointer mt-4 inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors">
              Vraag vrijblijvend een offerte aan
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
