'use client';

import { useState, useTransition } from 'react';
import { submitBesparingLead } from '@/app/actions';

const WATER_BRANDS = [
  { name: 'Spa Blauw', pricePerLiter: 0.79 },
  { name: 'Spa Reine', pricePerLiter: 0.72 },
  { name: 'Chaudfontaine', pricePerLiter: 0.79 },
  { name: 'Sourcy', pricePerLiter: 0.67 },
  { name: 'Bar-le-Duc', pricePerLiter: 0.52 },
  { name: 'Evian', pricePerLiter: 0.85 },
  { name: 'Supermarkt huismerk (bijv. AH, Jumbo, Lidl)', pricePerLiter: 0.30 },
];

export default function Calculator() {
  const [step, setStep] = useState(1);
  const [personen, setPersonen] = useState(3);
  const [glazen, setGlazen] = useState(6);
  const [brand, setBrand] = useState(null);

  const [naam, setNaam] = useState('');
  const [email, setEmail] = useState('');
  const [telefoon, setTelefoon] = useState('');
  const [postcode, setPostcode] = useState('');
  const [huisnummer, setHuisnummer] = useState('');
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  const activeBrand = brand || WATER_BRANDS[0];
  const litersPerJaar = personen * glazen * 0.25 * 365;
  const besparing = Math.round(litersPerJaar * (activeBrand.pricePerLiter - 0.05));

  function selectBrand(b) {
    setBrand(b);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!naam.trim() || !email.trim() || !telefoon.trim() || !postcode.trim() || !huisnummer.trim()) {
      setError('Vul alle velden in.');
      return;
    }
    setError(null);
    startTransition(async () => {
      const result = await submitBesparingLead({
        naam: naam.trim(),
        email: email.trim(),
        telefoon: telefoon.trim(),
        postcode: postcode.trim(),
        huisnummer: huisnummer.trim(),
        watermerk: activeBrand.name,
        personen,
        glazen,
        besparing,
      });
      if (result.success) {
        setStep(6);
      } else {
        setError(result.error);
      }
    });
  }

  // Stap 6: bedankt
  if (step === 6) {
    return (
      <div className="mt-12 rounded-3xl card p-10 sm:p-14 text-center">
        <span className="mx-auto flex items-center justify-center w-14 h-14 rounded-full bg-amber/15">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
        <p className="mt-5 font-display font-bold text-xl">Bedankt, {naam.split(' ')[0]}!</p>
        <p className="mt-2 text-dim max-w-sm mx-auto">We hebben je berekende besparing van <strong className="text-ink">€ {besparing.toLocaleString('nl-NL')} per jaar</strong> ontvangen. We nemen binnen één werkdag contact met je op.</p>
      </div>
    );
  }

  // Stap 5: contactgegevens
  if (step === 5) {
    return (
      <div className="mt-10 rounded-3xl card p-8 sm:p-10">
        <div className="rounded-2xl bg-ink text-white p-6 text-center mb-8">
          <p className="text-xs font-semibold text-white/60">Jouw geschatte besparing</p>
          <p className="mt-1 font-display text-4xl font-extrabold text-emerald-400">€ {besparing.toLocaleString('nl-NL')}</p>
          <p className="mt-1 text-xs text-white/60">per jaar, t.o.v. {activeBrand.name}</p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <div className="text-center mb-2">
            <p className="font-display font-bold text-lg">Vraag je persoonlijke offerte aan</p>
            <p className="mt-1 text-sm text-dim">Laat je gegevens achter, dan maken we deze besparing voor jou waar.</p>
          </div>
          <div>
            <label htmlFor="besp-naam" className="block text-xs font-semibold text-dim mb-1.5">Naam</label>
            <input id="besp-naam" type="text" value={naam} onChange={(e) => setNaam(e.target.value)} autoComplete="name" required
              className="w-full rounded-lg border border-edge bg-bg px-4 py-3 text-sm text-ink placeholder:text-dim/60 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
              placeholder="Jouw naam" />
          </div>
          <div>
            <label htmlFor="besp-email" className="block text-xs font-semibold text-dim mb-1.5">E-mailadres</label>
            <input id="besp-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required
              className="w-full rounded-lg border border-edge bg-bg px-4 py-3 text-sm text-ink placeholder:text-dim/60 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
              placeholder="naam@voorbeeld.nl" />
          </div>
          <div>
            <label htmlFor="besp-telefoon" className="block text-xs font-semibold text-dim mb-1.5">Telefoonnummer</label>
            <input id="besp-telefoon" type="tel" value={telefoon} onChange={(e) => setTelefoon(e.target.value)} autoComplete="tel" required
              className="w-full rounded-lg border border-edge bg-bg px-4 py-3 text-sm text-ink placeholder:text-dim/60 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
              placeholder="06 12345678" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="besp-postcode" className="block text-xs font-semibold text-dim mb-1.5">Postcode</label>
              <input id="besp-postcode" type="text" value={postcode} onChange={(e) => setPostcode(e.target.value)} autoComplete="postal-code" required
                className="w-full rounded-lg border border-edge bg-bg px-4 py-3 text-sm text-ink placeholder:text-dim/60 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
                placeholder="1234 AB" />
            </div>
            <div>
              <label htmlFor="besp-huisnummer" className="block text-xs font-semibold text-dim mb-1.5">Huisnummer</label>
              <input id="besp-huisnummer" type="text" value={huisnummer} onChange={(e) => setHuisnummer(e.target.value)} autoComplete="off" required
                className="w-full rounded-lg border border-edge bg-bg px-4 py-3 text-sm text-ink placeholder:text-dim/60 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
                placeholder="12" />
            </div>
          </div>
          {error && <p className="text-xs font-semibold text-red-600 text-center">{error}</p>}
          <div className="flex items-center gap-3 pt-2">
            <button type="button" onClick={() => setStep(4)} className="cursor-pointer text-sm font-semibold text-dim hover:text-ink transition-colors">
              Terug
            </button>
            <button type="submit" disabled={isPending}
              className="cursor-pointer ml-auto inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors disabled:opacity-60">
              {isPending ? 'Versturen…' : 'Verstuur aanvraag'}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
          <p className="text-[11px] text-dim/70 text-center">Geen spam. We gebruiken je gegevens uitsluitend om contact op te nemen over je besparing.</p>
        </form>
      </div>
    );
  }

  // Stap 4: resultaat-reveal
  if (step === 4) {
    return (
      <div className="mt-10 rounded-3xl card p-10 sm:p-14 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Jouw resultaat</span>
        <p className="mt-3 text-dim">Op basis van {personen} {personen === 1 ? 'persoon' : 'personen'}, {glazen} glazen per dag en {activeBrand.name}:</p>
        <p className="mt-4 font-display text-6xl sm:text-7xl font-extrabold text-emerald-500">€ {besparing.toLocaleString('nl-NL')}</p>
        <p className="mt-2 text-dim">geschatte besparing per jaar</p>
        <button type="button" onClick={() => setStep(5)} className="cursor-pointer mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors">
          Begin met besparen
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <p className="mt-4">
          <button type="button" onClick={() => setStep(3)} className="cursor-pointer text-sm font-semibold text-dim hover:text-ink transition-colors">← Terug aanpassen</button>
        </p>
      </div>
    );
  }

  // Stappen 1-3: input-vragen, één per scherm
  return (
    <div className="mt-10 rounded-3xl card p-8 sm:p-10">
      <div className="flex items-center gap-2 max-w-xs mx-auto mb-10">
        {[1, 2, 3].map((n) => (
          <span key={n} className={`flex-1 h-1.5 rounded-full ${n <= step ? 'bg-amber' : 'bg-edge'}`} />
        ))}
      </div>

      {step === 1 && (
        <div className="max-w-md mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-dark">Stap 1 van 3</p>
          <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight">Welk flessenwater drink je?</h2>
          <div className="mt-6 space-y-2 text-left">
            {WATER_BRANDS.map((b) => (
              <button
                key={b.name}
                type="button"
                onClick={() => selectBrand(b)}
                className={`cursor-pointer flex items-center justify-between w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors ${b.name === activeBrand.name ? 'border-amber bg-amber/10 font-bold text-amber-dark' : 'border-edge hover:bg-bg text-ink'}`}
              >
                {b.name}
                <span className="text-xs text-dim">€ {b.pricePerLiter.toFixed(2)}/L</span>
              </button>
            ))}
          </div>
          <button type="button" onClick={() => setStep(2)} className="cursor-pointer mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors">
            Volgende
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="max-w-md mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-dark">Stap 2 van 3</p>
          <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight">Met hoeveel personen ben je thuis?</h2>
          <p className="mt-8 font-display text-5xl font-extrabold text-amber-dark">{personen}</p>
          <input
            id="personen"
            type="range"
            min="1"
            max="8"
            value={personen}
            onChange={(e) => setPersonen(Number(e.target.value))}
            className="w-full accent-amber mt-6"
          />
          <div className="mt-8 flex items-center gap-3">
            <button type="button" onClick={() => setStep(1)} className="cursor-pointer inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-dim hover:text-ink transition-colors">
              Vorige
            </button>
            <button type="button" onClick={() => setStep(3)} className="cursor-pointer flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors">
              Volgende
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="max-w-md mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-dark">Stap 3 van 3</p>
          <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight">Hoeveel glazen water per dag, per persoon?</h2>
          <p className="mt-8 font-display text-5xl font-extrabold text-amber-dark">{glazen}</p>
          <input
            id="glazen"
            type="range"
            min="2"
            max="12"
            value={glazen}
            onChange={(e) => setGlazen(Number(e.target.value))}
            className="w-full accent-amber mt-6"
          />
          <div className="mt-8 flex items-center gap-3">
            <button type="button" onClick={() => setStep(2)} className="cursor-pointer inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-dim hover:text-ink transition-colors">
              Vorige
            </button>
            <button type="button" onClick={() => setStep(4)} className="cursor-pointer flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors">
              Bekijk mijn besparing
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
