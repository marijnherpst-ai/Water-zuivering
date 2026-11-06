// Price line shown on the commercial pages. The system price is not published on the site
// (it depends on the kitchen and faucet), so this shows "prijs op maat" and the Product
// schema gets no offer (PRIJS_VANAF stays null).
export const PRIJS_VANAF = null;

export default function PrijsVanaf({ donker = false, className = '' }) {
  return (
    <p className={`${className} text-sm ${donker ? 'text-white/70' : 'text-dim'}`}>
      <span className={`font-display font-extrabold text-lg ${donker ? 'text-white' : 'text-ink'}`}>Prijs op maat</span>{' '}
      <span>via een vrijblijvende offerte</span>
      <span className="block mt-1 text-xs">Montage door onze eigen monteur in 1 à 2 uur, of zelf installeren. Je prijs hangt af van je keuken en de kraan die je kiest.</span>
    </p>
  );
}
