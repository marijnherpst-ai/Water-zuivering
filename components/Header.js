'use client';

import { useState } from 'react';

const NAV_LINKS = [
  { href: '/#product', label: 'Producten' },
  { href: '/#hoe-het-werkt', label: 'Hoe het werkt' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="bg-ink text-white text-center text-xs sm:text-sm font-semibold py-2 px-6">
        Nu tijdelijk <span className="text-amber font-bold">€250 korting</span> bij aanvraag van een offerte
      </div>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 font-display font-extrabold text-lg tracking-tight">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ink">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C12 2 5 10.5 5 15a7 7 0 0014 0c0-4.5-7-13-7-13z" fill="#EDA71B" /></svg>
          </span>
          Water-zuivering
        </a>
        <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-dim">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-ink transition-colors">{link.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="/aanmelden" className="cursor-pointer hidden sm:inline-flex items-center rounded-full bg-amber px-5 py-2.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-lg shadow-amber/25">
            Offerte aanvragen
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Sluit menu' : 'Open menu'}
            className="cursor-pointer lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-edge text-ink"
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-edge bg-surface px-6 py-4">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-ink hover:bg-bg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/aanmelden"
              onClick={() => setOpen(false)}
              className="cursor-pointer sm:hidden mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-amber px-5 py-3 text-sm font-bold text-ink"
            >
              Offerte aanvragen
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
