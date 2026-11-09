'use client';

import { useRef, useState, useTransition } from 'react';
import { submitAanmeldenForm } from '@/app/actions';
import { trackLead } from '@/lib/trackLead';

// Compact two-step version of the /aanmelden form for the Google Ads landing
// page (/offerte). It submits through the same server action and fires the same
// conversion events, so leads land in the same table and count in Google Ads.
// The "hoe ken je ons" step is skipped: visitors here always arrive via an ad.
const TOTAL_STEPS = 2;
const BRON = 'Google advertentie (landingspagina)';

const invoer =
  'w-full rounded-lg border border-edge bg-white px-4 py-3 text-sm text-ink placeholder:text-dim/60 focus:outline-none focus:ring-2 focus:ring-amber transition-colors';

function Keuze({ name, opties, kolommen = 'grid-cols-2' }) {
  return (
    <div className={`grid ${kolommen} gap-2.5`}>
      {opties.map((label, i) => (
        <label className="option" key={label}>
          <input type="radio" name={name} value={label} required={i === 0} />
          <span className="opt-card flex items-center justify-center gap-2 text-center py-3">
            <span className="text-sm font-medium">{label}</span>
          </span>
        </label>
      ))}
    </div>
  );
}

export default function OfferteForm() {
  const [step, setStep] = useState(1);
  const [submitError, setSubmitError] = useState(null);
  const [isPending, startTransition] = useTransition();
  const formRef = useRef(null);

  function validateCurrentStep() {
    const panel = formRef.current.querySelector(`[data-step="${step}"]`);
    for (const input of panel.querySelectorAll('[required]')) {
      if (!input.checkValidity()) {
        input.reportValidity();
        return false;
      }
    }
    return true;
  }

  function handleNext() {
    if (validateCurrentStep()) setStep(2);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateCurrentStep()) return;

    const fd = new FormData(formRef.current);
    const data = {
      keukenblad: fd.get('keukenblad'),
      kastje_leeg: fd.get('kastje_leeg'),
      quooker: fd.get('quooker'),
      bron: BRON,
      naam: fd.get('naam'),
      telefoon: fd.get('telefoon'),
      email: fd.get('email'),
      postcode: fd.get('postcode'),
      huisnummer: fd.get('huisnummer'),
    };

    startTransition(async () => {
      const result = await submitAanmeldenForm(data);
      if (!result.success) {
        setSubmitError(result.error);
        return;
      }
      setSubmitError(null);
      setStep(3);
      if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        window.fbq('track', 'Lead');
      }
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', { event_category: 'offerte' });
        window.gtag('event', 'ads_conversion_Leadformulier_indienen_1');
      }
      trackLead('aanmelden');
    });
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="rounded-2xl bg-white text-ink shadow-2xl shadow-ink/30 p-6 sm:p-7">
      {step <= TOTAL_STEPS && (
        <div className="mb-5">
          <div className="flex items-center justify-between text-xs font-semibold text-dim">
            <span>Stap {step} van {TOTAL_STEPS}</span>
            <span className="text-amber-dark">Gratis &amp; vrijblijvend</span>
          </div>
          <div className="mt-2 h-1.5 rounded-full bg-edge overflow-hidden">
            <div className="h-full bg-amber transition-all duration-300" style={{ width: `${(step / TOTAL_STEPS) * 100}%` }} />
          </div>
        </div>
      )}

      <fieldset className={`step-panel ${step === 1 ? 'active' : ''}`} data-step="1">
        <legend className="font-display font-bold text-xl">Vertel kort over je keuken</legend>
        <p className="mt-1 text-sm text-dim">Zo kunnen we de installatie alvast inschatten.</p>

        <p className="mt-5 text-sm font-semibold mb-2.5">Welk keukenblad heb je?</p>
        <Keuze name="keukenblad" opties={['Composiet / kunststeen', 'Natuursteen', 'Hout', 'RVS', 'Laminaat', 'Weet ik niet']} />

        <p className="mt-5 text-sm font-semibold mb-2.5">Is het kastje onder de spoelbak leeg genoeg?</p>
        <Keuze name="kastje_leeg" opties={['Ja', 'Nee', 'Weet ik niet']} kolommen="grid-cols-3" />

        <p className="mt-5 text-sm font-semibold mb-2.5">Heb je een Quooker of kokendwaterkraan?</p>
        <Keuze name="quooker" opties={['Ja', 'Nee']} />
      </fieldset>

      <fieldset className={`step-panel ${step === 2 ? 'active' : ''}`} data-step="2">
        <legend className="font-display font-bold text-xl">Waar mogen we de offerte heen sturen?</legend>
        <p className="mt-1 text-sm text-dim">Je ontvangt binnen één werkdag een offerte op maat, inclusief €250 Black Friday-korting.</p>

        <div className="mt-5 space-y-3">
          <input aria-label="Naam" name="naam" type="text" autoComplete="name" required className={invoer} placeholder="Naam" />
          <input aria-label="Telefoonnummer" name="telefoon" type="tel" autoComplete="tel" required className={invoer} placeholder="Telefoonnummer" />
          <input aria-label="E-mailadres" name="email" type="email" autoComplete="email" required className={invoer} placeholder="E-mailadres" />
          <div className="grid grid-cols-2 gap-3">
            <input aria-label="Postcode" name="postcode" type="text" autoComplete="postal-code" required className={invoer} placeholder="Postcode" />
            <input aria-label="Huisnummer" name="huisnummer" type="text" autoComplete="off" required className={invoer} placeholder="Huisnummer" />
          </div>
        </div>
        {submitError && <p className="mt-3 text-sm font-semibold text-red-600">{submitError}</p>}
        <p className="mt-3 text-[11px] text-dim/80">Geen spam. We gebruiken je gegevens alleen voor je aanvraag.</p>
      </fieldset>

      <div className={`step-panel text-center py-6 ${step === 3 ? 'active' : ''}`} data-step="3">
        <span className="mx-auto flex items-center justify-center w-14 h-14 rounded-full bg-amber/15">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
        <p className="mt-5 font-display font-bold text-xl">Bedankt, je aanvraag is binnen!</p>
        <p className="mt-2 text-sm text-dim max-w-xs mx-auto">We nemen binnen één werkdag contact met je op. Je €250 Black Friday-korting staat vast.</p>
      </div>

      {step <= TOTAL_STEPS && (
        <div className="mt-6 flex items-center gap-3">
          {step === 2 && (
            <button type="button" onClick={() => setStep(1)} className="cursor-pointer rounded-full px-4 py-3 text-sm font-bold text-dim hover:text-ink transition-colors">
              ← Terug
            </button>
          )}
          {step === 1 ? (
            <button type="button" onClick={handleNext} className="cursor-pointer flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors">
              Volgende stap
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          ) : (
            <button type="submit" disabled={isPending} className="cursor-pointer flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors disabled:opacity-60">
              {isPending ? 'Versturen…' : 'Vraag gratis offerte aan'}
            </button>
          )}
        </div>
      )}
    </form>
  );
}
