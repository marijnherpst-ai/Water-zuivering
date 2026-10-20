import { mono } from '@/components/Ontwerp';

// Answer-first summary block (40–60 words) at the top of knowledge-base articles,
// so readers and AI assistants get the core answer before the details.
export default function KortAntwoord({ children, bron }) {
  return (
    <div className="mt-8 text-left rounded-2xl border-l-4 border-amber bg-white/80 p-5 md:p-6 shadow-sm max-w-3xl mx-auto">
      <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] text-amber-dark`}>Kort antwoord</p>
      <p className="mt-2 text-ink leading-relaxed">{children}</p>
      {bron && (
        <p className="mt-3 text-xs text-dim">
          Bron: <a href={bron.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">{bron.naam}</a>
        </p>
      )}
    </div>
  );
}
