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
            <li>Veldkersweg 16, 3053 JR Rotterdam</li>
            <li>KVK 83174044</li>
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
      <div className="border-t border-edge">
        <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-dim">&copy; 2026 Jd services B.V. (Water-zuivering). Alle rechten voorbehouden.</div>
      </div>
    </footer>
  );
}
