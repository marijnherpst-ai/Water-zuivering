'use client';

import { useState, useTransition } from 'react';
import { submitContactForm } from '@/app/actions';

export default function ContactForm() {
  const [status, setStatus] = useState(null);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    startTransition(async () => {
      const result = await submitContactForm(formData);
      if (result.success) {
        setStatus({ ok: true, message: 'Bedankt! We nemen zo snel mogelijk contact met u op.' });
        formEl.reset();
        if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
          window.fbq('track', 'Lead');
        }
      } else {
        setStatus({ ok: false, message: result.error });
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white text-ink p-6 sm:p-8 shadow-2xl"
      aria-labelledby="contact-form-heading"
    >
      <h3 id="contact-form-heading" className="font-display font-bold text-lg mb-5">Offerte aanvragen</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="naam" className="block text-xs font-semibold text-dim mb-1.5">Naam</label>
          <input
            id="naam"
            name="naam"
            type="text"
            autoComplete="name"
            required
            className="w-full rounded-lg border border-edge bg-bg px-4 py-3 text-sm text-ink placeholder:text-dim/60 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
            placeholder="Uw naam"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="telefoon" className="block text-xs font-semibold text-dim mb-1.5">Telefoon</label>
            <input
              id="telefoon"
              name="telefoon"
              type="tel"
              autoComplete="tel"
              required
              className="w-full rounded-lg border border-edge bg-bg px-4 py-3 text-sm text-ink placeholder:text-dim/60 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
              placeholder="06 12345678"
            />
          </div>
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
        <div>
          <label htmlFor="bericht" className="block text-xs font-semibold text-dim mb-1.5">Bericht (optioneel)</label>
          <textarea
            id="bericht"
            name="bericht"
            rows="3"
            className="w-full rounded-lg border border-edge bg-bg px-4 py-3 text-sm text-ink placeholder:text-dim/60 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
            placeholder="Vertel ons kort over uw situatie"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="cursor-pointer mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-amber px-5 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:opacity-60"
      >
        {isPending ? 'Versturen…' : 'Vraag gratis een offerte aan'}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      <p className="mt-3 text-xs font-semibold text-amber-dark" role="status" aria-live="polite">
        {status?.message}
      </p>
      <p className="mt-3 text-[11px] text-dim/70">Geen spam. We gebruiken uw gegevens uitsluitend om contact op te nemen over uw aanvraag.</p>
    </form>
  );
}
