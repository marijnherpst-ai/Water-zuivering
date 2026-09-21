'use client';

import { useActionState } from 'react';
import { inloggen } from '@/app/dashboard/actions';

export default function LoginForm() {
  const [state, action, bezig] = useActionState(inloggen, null);

  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#EDA71B]/15 blur-[120px]" />
      <div className="relative w-full max-w-sm">
        <div className="flex items-center justify-center gap-2.5">
          <span className="h-2.5 w-2.5 rotate-45 bg-[#EDA71B]" />
          <span className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-[#EDA71B]">Water-zuivering</span>
        </div>
        <h1 className="mt-6 text-center font-display text-3xl font-bold text-white">Advertentie-overzicht</h1>
        <p className="mt-2 text-center text-sm text-[#8A93A3]">Log in om te zien wat je advertenties opleveren.</p>

        <form action={action} className="mt-8 space-y-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
          <label className="block">
            <span className="text-xs font-medium uppercase tracking-wider text-[#8A93A3]">E-mailadres</span>
            <input name="email" type="email" required autoComplete="username" className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-[#EDA71B]/70" />
          </label>
          <label className="block">
            <span className="text-xs font-medium uppercase tracking-wider text-[#8A93A3]">Wachtwoord</span>
            <input name="wachtwoord" type="password" required autoComplete="current-password" className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-[#EDA71B]/70" />
          </label>
          {state?.fout && <p role="alert" className="text-sm text-[#FF6B7A]">{state.fout}</p>}
          <button disabled={bezig} className="w-full rounded-xl bg-gradient-to-b from-[#F3B93A] to-[#D9950F] py-3 font-semibold text-[#1A1204] shadow-[0_8px_30px_-8px_rgba(237,167,27,0.6)] transition hover:brightness-110 disabled:opacity-60">
            {bezig ? 'Bezig…' : 'Inloggen'}
          </button>
        </form>
      </div>
    </main>
  );
}
