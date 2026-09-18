import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-edge">
      <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Link href="/" className="flex items-center gap-2.5 font-display font-extrabold text-lg tracking-tight">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ink">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C12 2 5 10.5 5 15a7 7 0 0014 0c0-4.5-7-13-7-13z" fill="#EDA71B" /></svg>
            </span>
            Water-zuivering
          </Link>
          <p className="mt-3 text-sm text-dim">Premium waterfiltratie voor onder uw keukenkraan.</p>
        </div>
        <div>
          <p className="font-display font-bold text-sm">Navigatie</p>
          <ul className="mt-3 space-y-2 text-sm text-dim">
            <li><Link href="/#product" className="hover:text-ink transition-colors">Producten</Link></li>
            <li><Link href="/waterzuivering-voor-thuis" className="hover:text-ink transition-colors">Waterzuivering voor thuis</Link></li>
            <li><Link href="/osmose-waterfilter" className="hover:text-ink transition-colors">Osmose waterfilter</Link></li>
            <li><Link href="/waterfilter-kraan" className="hover:text-ink transition-colors">Waterfilter kraan</Link></li>
            <li><Link href="/waterfiltersysteem" className="hover:text-ink transition-colors">Waterfiltersysteem</Link></li>
            <li><Link href="/kennisbank" className="hover:text-ink transition-colors">Kennisbank</Link></li>
            <li><Link href="/handleiding" className="hover:text-ink transition-colors">Handleiding</Link></li>
            <li><Link href="/garantie" className="hover:text-ink transition-colors">Garantie</Link></li>
            <li><Link href="/#faq" className="hover:text-ink transition-colors">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-display font-bold text-sm">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-dim">
            <li><Link href="/contact" className="hover:text-ink transition-colors">Contactgegevens &amp; locatie</Link></li>
            <li><a href="tel:+31626944877" className="hover:text-ink transition-colors">06 26 94 48 77</a></li>
            <li><a href="mailto:info@water-zuivering.nl" className="hover:text-ink transition-colors">info@water-zuivering.nl</a></li>
            <li>Industrieweg 110, 2651 BD Berkel en Rodenrijs</li>
            <li>KVK 88718301</li>
          </ul>
        </div>
        <div>
          <p className="font-display font-bold text-sm">Juridisch</p>
          <ul className="mt-3 space-y-2 text-sm text-dim">
            <li><Link href="/privacybeleid" className="hover:text-ink transition-colors">Privacybeleid</Link></li>
            <li><Link href="/cookiebeleid" className="hover:text-ink transition-colors">Cookiebeleid</Link></li>
            <li><Link href="/algemene-voorwaarden" className="hover:text-ink transition-colors">Algemene voorwaarden</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <p className="font-display font-bold text-sm">Populaire onderwerpen</p>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-dim">
          <li><Link href="/zuiverwater" className="hover:text-ink transition-colors">Zuiver water</Link></li>
          <li><Link href="/waterzuiveraar-drinkwater" className="hover:text-ink transition-colors">Waterzuiveraar drinkwater</Link></li>
          <li><Link href="/waterzuiveringsinstallatie" className="hover:text-ink transition-colors">Waterzuiveringsinstallatie</Link></li>
          <li><Link href="/maatcheck" className="hover:text-ink transition-colors">Maatcheck</Link></li>
          <li><Link href="/kennisbank/waterfilter-vervangen-hoe-vaak" className="hover:text-ink transition-colors">Waterfilter vervangen</Link></li>
          <li><Link href="/kennisbank/waterfilter-onder-de-gootsteen" className="hover:text-ink transition-colors">Waterfilter onder de gootsteen</Link></li>
          <li><Link href="/kennisbank/kraanwater-vs-flessenwater" className="hover:text-ink transition-colors">Kraanwater vs flessenwater</Link></li>
          <li><Link href="/kennisbank/kalkaanslag-in-huis" className="hover:text-ink transition-colors">Kalkaanslag in huis</Link></li>
          <li><Link href="/kennisbank/3-weg-kraan-uitleg" className="hover:text-ink transition-colors">3-weg kraan uitleg</Link></li>
          <li><Link href="/kennisbank/osmosewater-maken-thuis" className="hover:text-ink transition-colors">Osmosewater maken</Link></li>
          <li><Link href="/kennisbank/kraanwater-filteren" className="hover:text-ink transition-colors">Kraanwater filteren</Link></li>
          <li><Link href="/kennisbank/drinkwaternormen-nederland" className="hover:text-ink transition-colors">Drinkwaternormen</Link></li>
          <li><Link href="/kennisbank/slechtste-kraanwater-nederland" className="hover:text-ink transition-colors">Slechtste kraanwater Nederland</Link></li>
        </ul>
      </div>
      <div className="border-t border-edge">
        <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-dim">&copy; 2026 Water-zuivering. Alle rechten voorbehouden.</div>
      </div>
    </footer>
  );
}
