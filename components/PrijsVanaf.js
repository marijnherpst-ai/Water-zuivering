// Price indication shown on the commercial pages. Kept in one place so the
// "vanaf" price on the page always matches PRIJS_VANAF in the Product schema.
export const PRIJS_VANAF = 999;

export default function PrijsVanaf({ donker = false, className = '' }) {
  return (
    <p className={`${className} text-sm ${donker ? 'text-white/70' : 'text-dim'}`}>
      <span className={`font-display font-extrabold text-lg ${donker ? 'text-white' : 'text-ink'}`}>Vanaf €{PRIJS_VANAF}</span>{' '}
      <span>exclusief montage</span>
      <span className="block mt-1 text-xs">Montage door onze eigen monteur in 1 à 2 uur, of zelf installeren. Je exacte prijs krijg je in een vrijblijvende offerte.</span>
    </p>
  );
}
