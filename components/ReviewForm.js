'use client';

import { useState, useTransition } from 'react';
import { submitReview } from '@/app/actions';

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [status, setStatus] = useState(null);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    formData.set('rating', String(rating));

    if (!rating) {
      setStatus({ ok: false, message: 'Kies een aantal sterren.' });
      return;
    }

    startTransition(async () => {
      const result = await submitReview(formData);
      if (result.success) {
        setStatus({ ok: true, message: 'Bedankt voor je review! Deze verschijnt na controle op de site.' });
        formEl.reset();
        setRating(0);
      } else {
        setStatus({ ok: false, message: result.error });
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl card p-6 sm:p-8" aria-labelledby="review-form-heading">
      <h3 id="review-form-heading" className="font-display font-bold text-lg mb-5">Schrijf een review</h3>

      <div className="mb-4">
        <p className="text-xs font-semibold text-dim mb-1.5">Jouw beoordeling</p>
        <div className="flex items-center gap-1" onMouseLeave={() => setHoverRating(0)}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setRating(n)}
              onMouseEnter={() => setHoverRating(n)}
              aria-label={`${n} sterren`}
              className="cursor-pointer p-0.5"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill={(hoverRating || rating) >= n ? '#EDA71B' : 'none'} stroke="#EDA71B" strokeWidth="1.6" aria-hidden="true">
                <path d="M12 2l2.9 6.2 6.8.8-5 4.6 1.4 6.7L12 16.9 5.9 20.3l1.4-6.7-5-4.6 6.8-.8L12 2z" strokeLinejoin="round" />
              </svg>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-dim mb-1.5">Naam</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="w-full rounded-lg border border-edge bg-bg px-4 py-3 text-sm text-ink placeholder:text-dim/60 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
            placeholder="Jouw naam"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-xs font-semibold text-dim mb-1.5">Plaats (optioneel)</label>
          <input
            id="city"
            name="city"
            type="text"
            className="w-full rounded-lg border border-edge bg-bg px-4 py-3 text-sm text-ink placeholder:text-dim/60 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
            placeholder="Rotterdam"
          />
        </div>
        <div>
          <label htmlFor="review_text" className="block text-xs font-semibold text-dim mb-1.5">Jouw review</label>
          <textarea
            id="review_text"
            name="review_text"
            rows="4"
            required
            className="w-full rounded-lg border border-edge bg-bg px-4 py-3 text-sm text-ink placeholder:text-dim/60 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
            placeholder="Vertel over je ervaring..."
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="cursor-pointer mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-amber px-5 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:opacity-60"
      >
        {isPending ? 'Versturen…' : 'Review plaatsen'}
      </button>
      <p className="mt-3 text-xs font-semibold text-amber-dark" role="status" aria-live="polite">
        {status?.message}
      </p>
      <p className="mt-3 text-[11px] text-dim/70">Reviews worden gecontroleerd voordat ze zichtbaar worden op de site.</p>
    </form>
  );
}
