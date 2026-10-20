// Shared building blocks for the premium product pages (dark grid sections,
// mono labels, consistent headings and buttons).
import { IBM_Plex_Mono } from 'next/font/google';

export const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['500', '600'], display: 'swap' });

export const DONKER = {
  backgroundImage:
    'radial-gradient(circle at 85% 0%, rgba(237,167,27,0.14), transparent 50%), radial-gradient(circle at 0% 100%, rgba(127,211,255,0.06), transparent 45%), linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
  backgroundSize: 'auto, auto, 32px 32px, 32px 32px',
};

export function Kop({ label, titel, intro, donker = false, midden = false, as = 'h2' }) {
  const H = as;
  return (
    <div className={midden ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}>
      <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] ${donker ? 'text-amber' : 'text-amber-dark'}`}>{label}</p>
      <H className={`mt-3 font-display text-3xl md:text-[2.5rem] font-extrabold tracking-tight leading-[1.08] ${donker ? 'text-white' : 'text-ink'}`}>{titel}</H>
      {intro && <p className={`mt-4 leading-relaxed ${donker ? 'text-white/65' : 'text-dim'}`}>{intro}</p>}
    </div>
  );
}

export function Pijl() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
  );
}

export function Sterren({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} van de 5 sterren`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} width={size} height={size} viewBox="0 0 24 24" fill={n <= Math.round(rating) ? '#EDA71B' : 'none'} stroke="#EDA71B" strokeWidth="1.6" aria-hidden="true">
          <path d="M12 2l2.9 6.2 6.8.8-5 4.6 1.4 6.7L12 16.9 5.9 20.3l1.4-6.7-5-4.6 6.8-.8L12 2z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}

const focus = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber';
export const btnPrimair = `cursor-pointer inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-lg shadow-amber/25 ${focus}`;
export const btnLicht = `cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 text-sm font-bold text-ink hover:bg-ink hover:text-white transition-colors ${focus}`;
export const btnDonker = `cursor-pointer inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white hover:bg-white hover:text-ink transition-colors ${focus}`;
