'use client';

import { useState } from 'react';
import Link from 'next/link';
import { KLASSEN } from '@/lib/waterhardheid/data';

const getal = (n) => String(Math.round(n * 10) / 10).replace('.', ',');
const bereik = (a, b) => (a === b ? getal(a) : `${getal(a)} – ${getal(b)}`);
const SCHAAL_MAX = 18;
const positie = (dh) => `${Math.min(100, (dh / SCHAAL_MAX) * 100)}%`;

const UITLEG = {
  'Zeer zacht': 'Je water bevat heel weinig kalk. Kalkaanslag zie je nauwelijks.',
  Zacht: 'Je water bevat weinig kalk. Toch zie je op den duur nog wat kalk in je waterkoker, op de douchewand en rond de kraan.',
  Gemiddeld: 'Je water bevat een gemiddelde hoeveelheid kalk. Kalkaanslag in je waterkoker, koffiezetapparaat en douche komt regelmatig voor.',
  'Vrij hard': 'Je water bevat veel kalk. Apparaten verkalken sneller en je ziet snel witte vlekken op kranen en glas.',
  Hard: 'Je water bevat erg veel kalk. Ontkalk apparaten vaak en stel je vaatwasser goed in.',
};

export default function WaterhardheidChecker() {
  const [postcode, setPostcode] = useState('');
  const [huisnummer, setHuisnummer] = useState('');
  const [bezig, setBezig] = useState(false);
  const [fout, setFout] = useState(null);
  const [uitslag, setUitslag] = useState(null);

  async function check(e) {
    e.preventDefault();
    setBezig(true);
    setFout(null);
    try {
      const res = await fetch(`/api/waterhardheid?postcode=${encodeURIComponent(postcode)}&huisnummer=${encodeURIComponent(huisnummer)}`);
      const json = await res.json();
      if (!json.ok) {
        setFout(json.reden);
        setUitslag(null);
      } else {
        setUitslag(json);
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
          window.gtag('event', 'waterhardheid_check', { waterbedrijf: json.hardheid.bedrijfId });
        }
      }
    } catch {
      setFout('Er ging iets mis. Probeer het zo nog eens.');
    } finally {
      setBezig(false);
    }
  }

  const h = uitslag?.hardheid;
  const heeftWaarde = h && h.min != null;

  return (
    <div className="mt-10">
      <form onSubmit={check} className="rounded-2xl card p-6 sm:p-8 grid sm:grid-cols-[1fr_140px_auto] gap-3 items-end" aria-label="Waterhardheid check op postcode en huisnummer">
        <div>
          <label htmlFor="wh-postcode" className="block text-xs font-semibold text-dim mb-1.5">Postcode</label>
          <input
            id="wh-postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            placeholder="1234 AB"
            autoComplete="postal-code"
            required
            className="w-full rounded-lg border border-edge bg-bg px-4 py-3 text-sm text-ink placeholder:text-dim/60 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
          />
        </div>
        <div>
          <label htmlFor="wh-huisnummer" className="block text-xs font-semibold text-dim mb-1.5">Huisnummer</label>
          <input
            id="wh-huisnummer"
            value={huisnummer}
            onChange={(e) => setHuisnummer(e.target.value)}
            placeholder="12"
            inputMode="text"
            required
            className="w-full rounded-lg border border-edge bg-bg px-4 py-3 text-sm text-ink placeholder:text-dim/60 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
          />
        </div>
        <button
          type="submit"
          disabled={bezig}
          className="cursor-pointer inline-flex items-center justify-center rounded-lg bg-amber px-6 py-3 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors disabled:opacity-60"
        >
          {bezig ? 'Even zoeken…' : 'Check mijn waterhardheid'}
        </button>
      </form>
      <p className="mt-2 text-center text-xs text-dim/80">We slaan je adres niet op. Het wordt alleen gebruikt om je waterbedrijf te bepalen.</p>
      {fout && <p className="mt-3 text-center text-sm font-semibold text-red-500" role="alert">{fout}</p>}

      {uitslag && (
        <div className="mt-6 rounded-2xl card p-6 sm:p-8 text-left" aria-live="polite">
          <p className="text-sm text-dim">
            Uitslag voor <strong className="text-ink">{uitslag.adres}</strong>
          </p>

          {heeftWaarde ? (
            <>
              <div className="mt-3 flex flex-wrap items-end gap-x-4 gap-y-2">
                <p className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
                  {bereik(h.min, h.max)} <span className="text-2xl md:text-3xl">°dH</span>
                </p>
                <span className="mb-1.5 inline-flex rounded-full px-4 py-1.5 text-sm font-bold text-white" style={{ backgroundColor: h.klasse.kleur }}>
                  {h.klasseMin.label === h.klasseMax.label ? h.klasseMin.label : `${h.klasseMin.label} tot ${h.klasseMax.label.toLowerCase()}`}
                </span>
              </div>
              <p className="mt-2 text-sm text-dim">
                = {bereik(h.mmol[0], h.mmol[1])} mmol/l · {bereik(h.frans[0], h.frans[1])} °fH (Franse graden)
              </p>

              <div className="mt-6" aria-hidden="true">
                <div className="relative flex h-3 rounded-full overflow-hidden">
                  {KLASSEN.slice(0, 4).map((k, i) => (
                    <div key={k.label} style={{ width: `${((Math.min(k.tot, SCHAAL_MAX) - (i ? KLASSEN[i - 1].tot : 0)) / SCHAAL_MAX) * 100}%`, backgroundColor: k.kleur, opacity: 0.85 }} />
                  ))}
                </div>
                <div className="relative h-6">
                  <div className="absolute -top-4 h-5 rounded bg-ink/80" style={{ left: positie(h.min), width: `max(4px, calc(${positie(h.max)} - ${positie(h.min)}))` }} />
                </div>
                <div className="flex justify-between text-[11px] text-dim">
                  <span>0</span><span>4</span><span>8</span><span>12</span><span>18 °dH</span>
                </div>
              </div>

              <p className="mt-4 text-dim leading-relaxed">{UITLEG[h.klasse.label]}</p>
              {h.live && (
                <p className="mt-2 text-sm text-dim">
                  {h.naburigePostcode
                    ? `${h.bedrijf} heeft geen waarde voor jouw postcode gepubliceerd. Dit is de waarde voor de dichtstbijzijnde postcode in je woonplaats (${h.naburigePostcode.slice(0, 4)}).`
                    : `Deze waarde heeft ${h.bedrijf} zelf opgegeven voor jouw postcode${h.productielocatie ? ` (productielocatie ${h.productielocatie})` : ''}.`}
                </p>
              )}
              {h.plaatsdetail && (
                <ul className="mt-3 space-y-1 text-sm text-dim">
                  {h.plaatsdetail.map((r) => <li key={r}>• {r}</li>)}
                </ul>
              )}
            </>
          ) : (
            <p className="mt-3 text-dim leading-relaxed">
              Bij jou levert <strong className="text-ink">{h.bedrijf}</strong> het water. {h.toelichting}
            </p>
          )}

          <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl border border-edge p-4">
              <p className="text-xs font-semibold text-dim">Jouw waterbedrijf</p>
              <p className="mt-1 font-semibold text-ink">{h.bedrijf}</p>
              <p className="mt-1 text-xs text-dim">{uitslag.woonplaats}, gemeente {uitslag.gemeente}</p>
            </div>
            <div className="rounded-xl border border-edge p-4">
              <p className="text-xs font-semibold text-dim">Exacte waarde voor jouw straat</p>
              <a href={h.checkUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block font-semibold text-ink underline decoration-amber decoration-2 underline-offset-2 hover:text-amber-dark">
                Bekijk het bij {h.bedrijf}
              </a>
              <p className="mt-1 text-xs text-dim">De hardheid kan per pompstation iets verschillen.</p>
            </div>
          </div>

          {uitslag.pfas && (
            <p className="mt-4 text-sm text-dim">
              <span className="inline-block w-2.5 h-2.5 rounded-full mr-1.5 align-middle" style={{ backgroundColor: uitslag.pfas.hex }} />
              PFAS in {uitslag.pfas.provincie}: meestal <strong className="text-ink">{uitslag.pfas.label.toLowerCase()}</strong>.{' '}
              <Link href="/pfas-check" className="underline hover:text-ink">Bekijk de PFAS-check</Link>
            </p>
          )}

          <p className="mt-4 text-xs text-dim/80 leading-relaxed">
            Bron: <a href={h.bron.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">{h.bron.titel}</a>. Leveringsgebied volgens de RIVM-kaart van drinkwaterbedrijven. Dit is een indicatie, geen meting bij jou thuis.
          </p>

          <div className="mt-6 pt-6 border-t border-edge">
            <p className="font-display font-bold text-ink">Drinkwater zonder kalk uit je eigen kraan?</p>
            <p className="mt-1.5 text-sm text-dim">Het membraan van onze osmose waterzuiveraar houdt kalk, PFAS, medicijnresten en microplastics tegen. Veel minder kalk in je waterkoker en een heldere kop thee. Kies je het mineraalfilter, dan komt er voor de smaak weer een beetje calcium en magnesium bij.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors">
                Vraag vrijblijvend een offerte aan
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <Link href="/osmosesysteem" className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white px-6 py-3 text-sm font-bold text-ink hover:border-ink transition-colors">
                Bekijk het osmosesysteem
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
