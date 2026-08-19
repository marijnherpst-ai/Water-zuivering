'use client';

import { useState, useTransition } from 'react';
import { submitGiveawayEntry } from '@/app/actions';

export default function GiveawayForm({ closed = false }) {
  const [status, setStatus] = useState(null);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    startTransition(async () => {
      const result = await submitGiveawayEntry(formData);
      if (result.success) {
        setStatus({ ok: true, message: 'Gelukt! Je doet mee — hou je mailbox in de gaten.' });
        formEl.reset();
        if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
          window.fbq('track', 'Lead');
        }
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
          window.gtag('event', 'generate_lead', { event_category: 'giveaway' });
        }
      } else {
        setStatus({ ok: false, message: result.error });
      }
    });
  }

  if (closed) {
    return (
      <div className="rounded-[2rem] bg-white p-8 sm:p-10 shadow-2xl shadow-ink/10 text-center max-w-md mx-auto">
        <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-amber/12 text-amber-dark mx-auto">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 8v5M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="12" r="9" strokeWidth="1.7" stroke="currentColor" /></svg>
        </span>
        <p className="mt-4 font-display font-bold text-lg">De inschrijving is gesloten</p>
        <p className="mt-2 text-sm text-dim">We maken de winnaar bekend via e-mail. Bedankt voor je deelname!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-8 sm:p-10 shadow-2xl shadow-ink/10 max-w-md mx-auto" aria-labelledby="giveaway-form-heading">
      <h3 id="giveaway-form-heading" className="font-display font-extrabold text-xl text-center">Gratis meedoen</h3>
      <p className="mt-1.5 text-sm text-dim text-center">Vul je gegevens in — je maakt direct kans.</p>

      <div className="mt-6 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="voornaam" className="block text-xs font-semibold text-dim mb-1.5">Voornaam</label>
            <input
              id="voornaam"
              name="voornaam"
              type="text"
              autoComplete="given-name"
              required
              className="w-full rounded-lg border border-edge bg-bg px-4 py-3 text-sm text-ink placeholder:text-dim/60 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
              placeholder="Voornaam"
            />
          </div>
          <div>
            <label htmlFor="achternaam" className="block text-xs font-semibold text-dim mb-1.5">Achternaam</label>
            <input
              id="achternaam"
              name="achternaam"
              type="text"
              autoComplete="family-name"
              required
              className="w-full rounded-lg border border-edge bg-bg px-4 py-3 text-sm text-ink placeholder:text-dim/60 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
              placeholder="Achternaam"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-dim mb-1.5">E-mailadres</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full rounded-lg border border-edge bg-bg px-4 py-3 text-sm text-ink placeholder:text-dim/60 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
            placeholder="naam@voorbeeld.nl"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="postcode" className="block text-xs font-semibold text-dim mb-1.5">Postcode</label>
            <input
              id="postcode"
              name="postcode"
              type="text"
              autoComplete="postal-code"
              required
              className="w-full rounded-lg border border-edge bg-bg px-4 py-3 text-sm text-ink placeholder:text-dim/60 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
              placeholder="1234 AB"
            />
          </div>
          <div>
            <label htmlFor="huisnummer" className="block text-xs font-semibold text-dim mb-1.5">Huisnummer</label>
            <input
              id="huisnummer"
              name="huisnummer"
              type="text"
              autoComplete="address-line2"
              required
              className="w-full rounded-lg border border-edge bg-bg px-4 py-3 text-sm text-ink placeholder:text-dim/60 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
              placeholder="12"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="cursor-pointer mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-4 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-xl shadow-amber/25 disabled:opacity-60"
      >
        {isPending ? 'Versturen…' : 'GRATIS MEEDOEN'}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>

      <p className={`mt-3 text-sm font-semibold text-center ${status?.ok ? 'text-amber-dark' : 'text-red-600'}`} role="status" aria-live="polite">
        {status?.message}
      </p>

      <p className="mt-4 text-xs text-dim text-center">Deelname is gratis. Geen aankoop verplicht. Je gegevens worden alleen gebruikt voor deze actie.</p>
    </form>
  );
}
