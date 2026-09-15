'use client';

import { useState } from 'react';

const TYPE_LABEL = {
  storing: 'Storing',
  werkzaamheden: 'Werkzaamheden',
  onderhoud: 'Onderhoud',
  kookadvies: 'Kookwateradvies',
};

const TYPE_KLEUR = {
  storing: { bg: 'rgba(220, 38, 38, 0.08)', tekst: '#B91C1C' },
  werkzaamheden: { bg: 'rgba(237, 167, 27, 0.1)', tekst: '#C6890F' },
  onderhoud: { bg: 'rgba(91, 100, 114, 0.1)', tekst: '#5B6472' },
  kookadvies: { bg: 'rgba(220, 38, 38, 0.08)', tekst: '#B91C1C' },
};

function formatDatum(iso) {
  if (!iso) return null;
  try {
    return new Date(iso).toLocaleString('nl-NL', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
  } catch {
    return null;
  }
}

export default function StoringenChecker() {
  const [modus, setModus] = useState('adres');
  const [postcode, setPostcode] = useState('');
  const [huisnummer, setHuisnummer] = useState('');
  const [plaats, setPlaats] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [foutmelding, setFoutmelding] = useState('');

  function wisselModus(nieuweModus) {
    setModus(nieuweModus);
    setFoutmelding('');
    setResult(null);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setFoutmelding('');
    setResult(null);

    let params;
    if (modus === 'adres') {
      const pcOk = /^[1-9][0-9]{3}\s?[A-Za-z]{2}$/.test(postcode.trim());
      if (!pcOk || !huisnummer.trim()) {
        setFoutmelding('Vul een geldige postcode (bijv. 2651 BD) en huisnummer in.');
        return;
      }
      params = new URLSearchParams({ postcode: postcode.trim(), huisnummer: huisnummer.trim() });
    } else {
      if (plaats.trim().length < 2) {
        setFoutmelding('Vul een plaatsnaam in (bijv. Amsterdam).');
        return;
      }
      params = new URLSearchParams({ plaats: plaats.trim() });
    }

    setLoading(true);
    try {
      const res = await fetch(`/api/storingen?${params}`);
      const data = await res.json();
      if (!res.ok) {
        setFoutmelding('Vul een geldige zoekopdracht in.');
      } else {
        setResult(data);
      }
    } catch {
      setFoutmelding('Er ging iets mis bij het ophalen van de storingen. Probeer het straks opnieuw.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="rounded-[2rem] card p-6 sm:p-8">
        <div className="inline-flex items-center rounded-full bg-bg p-1 border border-edge mb-5">
          <button
            type="button"
            onClick={() => wisselModus('adres')}
            className={`cursor-pointer rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-colors ${
              modus === 'adres' ? 'bg-ink text-white shadow' : 'text-dim hover:text-ink'
            }`}
          >
            Postcode + huisnummer
          </button>
          <button
            type="button"
            onClick={() => wisselModus('plaats')}
            className={`cursor-pointer rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-colors ${
              modus === 'plaats' ? 'bg-ink text-white shadow' : 'text-dim hover:text-ink'
            }`}
          >
            Alleen plaats
          </button>
        </div>

        {modus === 'adres' ? (
          <div className="grid sm:grid-cols-[2fr,1fr,auto] gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-dim mb-1.5" htmlFor="postcode">Postcode</label>
              <input
                id="postcode"
                type="text"
                inputMode="text"
                placeholder="2651 BD"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                className="w-full rounded-xl border border-edge px-4 py-3 text-sm font-semibold focus:outline-none focus:border-ink"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-dim mb-1.5" htmlFor="huisnummer">Huisnummer</label>
              <input
                id="huisnummer"
                type="text"
                inputMode="numeric"
                placeholder="110"
                value={huisnummer}
                onChange={(e) => setHuisnummer(e.target.value)}
                className="w-full rounded-xl border border-edge px-4 py-3 text-sm font-semibold focus:outline-none focus:border-ink"
              />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                disabled={loading}
                className="cursor-pointer w-full sm:w-auto rounded-xl bg-ink text-white px-6 py-3 text-sm font-bold hover:bg-amber hover:text-ink transition-colors disabled:opacity-60 disabled:cursor-wait"
              >
                {loading ? 'Zoeken…' : 'Check storingen'}
              </button>
            </div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-[2fr,auto] gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-dim mb-1.5" htmlFor="plaats">Plaats</label>
              <input
                id="plaats"
                type="text"
                placeholder="Amsterdam"
                value={plaats}
                onChange={(e) => setPlaats(e.target.value)}
                className="w-full rounded-xl border border-edge px-4 py-3 text-sm font-semibold focus:outline-none focus:border-ink"
              />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                disabled={loading}
                className="cursor-pointer w-full sm:w-auto rounded-xl bg-ink text-white px-6 py-3 text-sm font-bold hover:bg-amber hover:text-ink transition-colors disabled:opacity-60 disabled:cursor-wait"
              >
                {loading ? 'Zoeken…' : 'Check storingen'}
              </button>
            </div>
          </div>
        )}
        {foutmelding && <p className="mt-3 text-sm font-semibold text-red-700">{foutmelding}</p>}
      </form>

      {result && (
        <div className="mt-6">
          {result.status === 'niet-gevonden' && (
            <div className="rounded-2xl bg-bg border border-edge p-6 text-sm text-dim">
              Dit adres kon niet worden gevonden. Check of de postcode en het huisnummer kloppen.
            </div>
          )}

          {result.status === 'onbekend' && (
            <div className="rounded-2xl bg-bg border border-edge p-6 text-sm text-dim">
              We weten helaas niet welk waterbedrijf dit adres bedient. Check het bij je eigen waterbedrijf.
            </div>
          )}

          {result.status === 'fout' && (
            <div className="rounded-2xl bg-bg border border-edge p-6 text-sm text-dim">
              De actuele storingen van {result.provider?.naam} konden nu niet worden opgehaald. Probeer het straks opnieuw.
            </div>
          )}

          {result.status === 'linkout' && (
            <div className="rounded-2xl bg-bg border border-edge p-6">
              <p className="text-sm text-dim">
                Voor <strong className="text-ink">{result.adres?.weergavenaam}</strong> is <strong className="text-ink">{result.provider?.naam}</strong> het waterbedrijf.
                Daar hebben we (nog) geen live koppeling mee — check daarom hun eigen storingspagina:
              </p>
              <a
                href={result.provider?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink text-white px-5 py-2.5 text-sm font-bold hover:bg-amber hover:text-ink transition-colors"
              >
                Naar storingspagina van {result.provider?.naam}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          )}

          {result.status === 'ok' && (
            <div>
              <p className="text-sm text-dim mb-4">
                Resultaat voor <strong className="text-ink">{result.adres?.weergavenaam}</strong> — bron: {result.provider?.naam}
              </p>
              {result.storingen?.length === 0 ? (
                <div className="rounded-2xl bg-bg border border-edge p-6 text-sm text-dim flex items-start gap-3">
                  <svg className="shrink-0 mt-0.5 text-amber-dark" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" /></svg>
                  <span>Geen actuele storingen of werkzaamheden bekend voor dit adres.</span>
                </div>
              ) : (
                <ul className="space-y-3">
                  {result.storingen.map((s) => {
                    const kleur = TYPE_KLEUR[s.type] || TYPE_KLEUR.werkzaamheden;
                    return (
                      <li key={s.id} className="rounded-2xl card p-5">
                        <div className="flex items-start justify-between gap-3 flex-wrap">
                          <span
                            className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide"
                            style={{ background: kleur.bg, color: kleur.tekst }}
                          >
                            {TYPE_LABEL[s.type] || s.type}
                          </span>
                          {s.status && <span className="text-xs font-semibold text-dim">{s.status}</span>}
                        </div>
                        <p className="mt-3 font-display font-bold text-ink">{s.titel}</p>
                        {s.omschrijving && <p className="mt-1.5 text-sm text-dim leading-relaxed">{s.omschrijving}</p>}
                        {(s.periode || s.start) && (
                          <p className="mt-2 text-xs font-semibold text-dim">
                            {s.periode || `${formatDatum(s.start) || ''}${s.eind ? ' – ' + formatDatum(s.eind) : ''}`}
                          </p>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
