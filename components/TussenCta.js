import Link from 'next/link';

// Compact call-to-action block halfway through a knowledge-base article,
// placed right after the section where readers ask "what can I do about it?".
// pfasEerst puts the PFAS check before the quote request (for areas where most
// addresses are below the RIVM guideline).
export default function TussenCta({ titel, children, pfasEerst = false }) {
  const offerte = (
    <Link key="offerte" href="/aanmelden" className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors">
      Vraag vrijblijvend een offerte aan
    </Link>
  );
  const check = (
    <Link key="check" href="/pfas-check" className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white px-6 py-3 text-sm font-bold text-ink hover:border-ink transition-colors">
      Doe de PFAS-check
    </Link>
  );
  return (
    <aside className="mt-10 rounded-2xl border border-amber/40 bg-amber/10 p-6 md:p-7">
      <p className="font-display font-bold text-ink text-lg">{titel}</p>
      <p className="mt-2 text-sm text-dim leading-relaxed">{children}</p>
      <div className="mt-5 flex flex-wrap gap-3">{pfasEerst ? [check, offerte] : [offerte, check]}</div>
    </aside>
  );
}
