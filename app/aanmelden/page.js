'use client';

import { useRef, useState, useTransition } from 'react';
import { submitAanmeldenForm } from '@/app/actions';

const TOTAL_STEPS = 3;

export default function AanmeldenPage() {
  const [step, setStep] = useState(1);
  const [submitError, setSubmitError] = useState(null);
  const [isPending, startTransition] = useTransition();
  const formRef = useRef(null);

  function currentPanel() {
    return formRef.current.querySelector(`[data-step="${step}"]`);
  }

  function validateCurrentStep() {
    const inputs = currentPanel().querySelectorAll('[required]');
    for (const input of inputs) {
      if (!input.checkValidity()) {
        input.reportValidity();
        return false;
      }
    }
    return true;
  }

  function handleNext() {
    if (!validateCurrentStep()) return;
    if (step < TOTAL_STEPS) setStep(step + 1);
  }

  function handlePrev() {
    if (step > 1) setStep(step - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateCurrentStep()) return;

    const formData = new FormData(formRef.current);
    const data = {
      keukenblad: formData.get('keukenblad'),
      kastje_leeg: formData.get('kastje_leeg'),
      quooker: formData.get('quooker'),
      bron: formData.get('bron'),
      naam: formData.get('naam'),
      email: formData.get('email'),
      postcode: formData.get('postcode'),
      huisnummer: formData.get('huisnummer'),
    };

    startTransition(async () => {
      const result = await submitAanmeldenForm(data);
      if (result.success) {
        setSubmitError(null);
        setStep(4);
      } else {
        setSubmitError(result.error);
      }
    });
  }

  return (
    <>
      <header className="border-b border-edge">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 font-display font-extrabold text-lg tracking-tight">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ink">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C12 2 5 10.5 5 15a7 7 0 0014 0c0-4.5-7-13-7-13z" fill="#EDA71B" /></svg>
            </span>
            AquaPuur
          </a>
          <a href="/" className="text-sm font-semibold text-dim hover:text-ink transition-colors">← Terug naar site</a>
        </div>
      </header>

      <main className="relative overflow-hidden grid-dots min-h-[calc(100vh-65px)]">
        <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-32" />
        <div className="glow w-[420px] h-[420px] bg-amber/10 bottom-0 -right-20" />

        <div className="relative max-w-2xl mx-auto px-6 py-12 md:py-16">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full card px-3.5 py-1.5 text-xs font-semibold text-amber-dark">
              <span className="w-1.5 h-1.5 rounded-full bg-amber" />
              Gratis &amp; vrijblijvend
            </span>
            <h1 className="mt-4 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Doe de gratis waterscan</h1>
            <p className="mt-2 text-dim">Drie korte stappen, klaar in minder dan een minuut.</p>
          </div>

          {step <= TOTAL_STEPS && (
            <div className="mt-10 flex items-center gap-2">
              <div className="flex flex-col items-center gap-2 w-20">
                <span className={`step-dot ${step === 1 ? 'active' : ''} ${step > 1 ? 'done' : ''}`}>1</span>
                <span className="text-xs font-semibold text-center">Jouw keuken</span>
              </div>
              <span className={`step-line ${step > 1 ? 'done' : ''}`} />
              <div className="flex flex-col items-center gap-2 w-20">
                <span className={`step-dot ${step === 2 ? 'active' : ''} ${step > 2 ? 'done' : ''}`}>2</span>
                <span className="text-xs font-semibold text-center text-dim">Hoe ken je ons</span>
              </div>
              <span className={`step-line ${step > 2 ? 'done' : ''}`} />
              <div className="flex flex-col items-center gap-2 w-20">
                <span className={`step-dot ${step === 3 ? 'active' : ''}`}>3</span>
                <span className="text-xs font-semibold text-center text-dim">Jouw gegevens</span>
              </div>
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="mt-8 rounded-2xl card p-6 sm:p-9" noValidate>

            {/* STAP 1 */}
            <fieldset className={`step-panel ${step === 1 ? 'active' : ''}`} data-step="1">
              <legend className="font-display font-bold text-xl">Vertel ons over je keuken</legend>
              <p className="mt-1 text-sm text-dim">Zo kunnen we alvast inschatten wat er nodig is voor de installatie.</p>

              <div className="mt-6">
                <p className="text-sm font-semibold mb-3">Welk soort keukenblad heb je?</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {['Composiet / kunststeen', 'Natuursteen (graniet/marmer)', 'Hout', 'RVS', 'Laminaat', 'Anders / weet ik niet'].map((label, i) => (
                    <label className="option" key={label}>
                      <input type="radio" name="keukenblad" value={label} required={i === 0} />
                      <span className="opt-card flex items-center justify-between gap-3">
                        <span className="text-sm font-medium">{label}</span>
                        <span className="opt-check" />
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold mb-3">Is het kastje onder je spoelbak leeg genoeg voor het apparaat?</p>
                <div className="grid grid-cols-3 gap-3">
                  {['Ja', 'Nee', 'Weet ik niet'].map((label, i) => (
                    <label className="option" key={label}>
                      <input type="radio" name="kastje_leeg" value={label} required={i === 0} />
                      <span className="opt-card flex items-center justify-center gap-2 text-center">
                        <span className="text-sm font-medium">{label}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold mb-3">Is er een Quooker (of vergelijkbare kokendwaterkraan) aanwezig?</p>
                <div className="grid grid-cols-2 gap-3">
                  {['Ja', 'Nee'].map((label, i) => (
                    <label className="option" key={label}>
                      <input type="radio" name="quooker" value={label} required={i === 0} />
                      <span className="opt-card flex items-center justify-center gap-2 text-center">
                        <span className="text-sm font-medium">{label}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </fieldset>

            {/* STAP 2 */}
            <fieldset className={`step-panel ${step === 2 ? 'active' : ''}`} data-step="2">
              <legend className="font-display font-bold text-xl">Hoe ken je ons?</legend>
              <p className="mt-1 text-sm text-dim">Zo weten we via welk kanaal we je het beste kunnen helpen.</p>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {['Google', 'Facebook / Instagram', 'Via vrienden of familie', 'Anders'].map((label, i) => (
                  <label className="option" key={label}>
                    <input type="radio" name="bron" value={label} required={i === 0} />
                    <span className="opt-card flex items-center justify-between gap-3">
                      <span className="text-sm font-medium">{label}</span>
                      <span className="opt-check" />
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* STAP 3 */}
            <fieldset className={`step-panel ${step === 3 ? 'active' : ''}`} data-step="3">
              <legend className="font-display font-bold text-xl">Jouw gegevens</legend>
              <p className="mt-1 text-sm text-dim">Zo kunnen we je de resultaten van je waterscan sturen.</p>

              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="naam" className="block text-xs font-semibold text-dim mb-1.5">Naam</label>
                  <input id="naam" name="naam" type="text" autoComplete="name" required
                    className="w-full rounded-lg border border-edge bg-surface px-4 py-3 text-sm text-ink placeholder:text-dim/60 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
                    placeholder="Jouw naam" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-dim mb-1.5">E-mailadres</label>
                  <input id="email" name="email" type="email" autoComplete="email" required
                    className="w-full rounded-lg border border-edge bg-surface px-4 py-3 text-sm text-ink placeholder:text-dim/60 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
                    placeholder="naam@voorbeeld.nl" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="postcode" className="block text-xs font-semibold text-dim mb-1.5">Postcode</label>
                    <input id="postcode" name="postcode" type="text" autoComplete="postal-code" required
                      className="w-full rounded-lg border border-edge bg-surface px-4 py-3 text-sm text-ink placeholder:text-dim/60 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
                      placeholder="1234 AB" />
                  </div>
                  <div>
                    <label htmlFor="huisnummer" className="block text-xs font-semibold text-dim mb-1.5">Huisnummer</label>
                    <input id="huisnummer" name="huisnummer" type="text" autoComplete="off" required
                      className="w-full rounded-lg border border-edge bg-surface px-4 py-3 text-sm text-ink placeholder:text-dim/60 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
                      placeholder="12" />
                  </div>
                </div>
              </div>
              {submitError && (
                <p className="mt-4 text-sm font-semibold text-red-600">{submitError}</p>
              )}
              <p className="mt-4 text-[11px] text-dim/80">Geen spam. We gebruiken je gegevens uitsluitend om contact op te nemen over je aanvraag.</p>
            </fieldset>

            {/* STAP 4: bevestiging */}
            <div className={`step-panel text-center py-6 ${step === 4 ? 'active' : ''}`} data-step="4">
              <span className="mx-auto flex items-center justify-center w-14 h-14 rounded-full bg-amber/15">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="#C6890F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <p className="mt-5 font-display font-bold text-xl">Bedankt voor je aanvraag!</p>
              <p className="mt-2 text-sm text-dim max-w-sm mx-auto">We nemen binnen één werkdag contact met je op met een gratis, vrijblijvend advies voor jouw keuken.</p>
              <a href="/" className="cursor-pointer mt-6 inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-bold text-ink hover:bg-surface transition-colors">
                Terug naar de website
              </a>
            </div>

            {/* Navigatie */}
            {step <= TOTAL_STEPS && (
              <div className="mt-8 flex items-center justify-between gap-3">
                <button type="button" onClick={handlePrev} className={`cursor-pointer inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-ink hover:bg-surface transition-colors ${step === 1 ? 'invisible' : ''}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Vorige
                </button>
                {step < TOTAL_STEPS ? (
                  <button type="button" onClick={handleNext} className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors ml-auto">
                    Volgende
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                ) : (
                  <button type="submit" disabled={isPending} className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors ml-auto disabled:opacity-60">
                    {isPending ? 'Versturen…' : 'Versturen'}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                )}
              </div>
            )}
          </form>
        </div>
      </main>

      <footer className="border-t border-edge bg-surface">
        <div className="max-w-2xl mx-auto px-6 py-8 text-center text-sm text-dim">
          &copy; 2026 AquaPuur. Alle rechten voorbehouden.
        </div>
      </footer>
    </>
  );
}
