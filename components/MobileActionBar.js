'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Mobile-only action bar (offerte, WhatsApp, chat) that replaces the two floating buttons.
// It never lies on top of the text while you read: it slides away when you scroll down
// and comes back when you scroll up. It stays hidden on forms/checkout and while the chat is open.
const WHATSAPP_NUMBER = '31626944877';
const WHATSAPP_MESSAGE = 'Hoi, ik heb een vraag over jullie waterzuiveraar';
const VERBORGEN_OP = ['/dashboard', '/offerte', '/aanmelden', '/admin', '/winkel/mandje'];

export default function MobileActionBar() {
  const pathname = usePathname();
  const [zichtbaar, setZichtbaar] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [veldActief, setVeldActief] = useState(false);
  const laatsteY = useRef(0);

  const verborgen = VERBORGEN_OP.some((p) => pathname === p || pathname.startsWith(`${p}/`));

  useEffect(() => {
    laatsteY.current = window.scrollY;
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const dy = y - laatsteY.current;
        if (y < 320) setZichtbaar(false); // niet boven aan de pagina: daar staat al een eigen knop
        else if (dy < -6) setZichtbaar(true); // omhoog scrollen: tonen
        else if (dy > 6) setZichtbaar(false); // omlaag lezen: weg
        laatsteY.current = y;
        ticking = false;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const staat = (e) => setChatOpen(Boolean(e.detail));
    const focusIn = (e) => {
      if (e.target && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) setVeldActief(true);
    };
    const focusUit = () => setVeldActief(false);
    window.addEventListener('wz-chat-state', staat);
    window.addEventListener('focusin', focusIn);
    window.addEventListener('focusout', focusUit);
    return () => {
      window.removeEventListener('wz-chat-state', staat);
      window.removeEventListener('focusin', focusIn);
      window.removeEventListener('focusout', focusUit);
    };
  }, []);

  if (verborgen) return null;

  const toon = zichtbaar && !chatOpen && !veldActief;
  const wa = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}&type=phone_number&app_absent=0`;

  return (
    <div
      aria-hidden={!toon}
      className={`lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-edge bg-white/95 backdrop-blur px-3 pt-2.5 pb-[max(0.875rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(11,13,16,0.08)] transition-transform duration-300 ${toon ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="flex items-center gap-2.5 md:max-w-xl md:mx-auto">
        <Link
          href="/aanmelden"
          tabIndex={toon ? 0 : -1}
          className="cursor-pointer flex-1 flex items-center justify-center h-12 rounded-full bg-amber text-base font-bold text-ink shadow-lg shadow-amber/25"
        >
          Offerte aanvragen
        </Link>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={toon ? 0 : -1}
          className="cursor-pointer shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.28 4.94L2 22l5.25-1.38a9.96 9.96 0 004.79 1.22h.01c5.52 0 10-4.48 10-10s-4.48-10-10.01-10zm5.86 14.27c-.25.7-1.23 1.29-2.01 1.46-.55.12-1.26.21-3.67-.79-2.94-1.22-4.84-4.18-4.99-4.38-.14-.19-1.2-1.59-1.2-3.04 0-1.44.75-2.15 1.02-2.44.25-.28.55-.35.73-.35h.53c.17 0 .4-.02.62.48.25.6.86 2.05.94 2.2.08.15.13.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.23 1.6 1.99 1.1.98 2.03 1.29 2.32 1.43.29.15.46.13.63-.05.17-.18.72-.83.91-1.12.19-.29.38-.24.63-.15.25.1 1.6.75 1.87.89.27.13.45.2.51.31.06.11.06.62-.19 1.32z" />
          </svg>
          <span className="sr-only">Stuur ons een WhatsApp-bericht</span>
        </a>
        <button
          type="button"
          tabIndex={toon ? 0 : -1}
          onClick={() => window.dispatchEvent(new Event('wz-open-chat'))}
          aria-label="Open de waterassistent"
          className="cursor-pointer shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-ink text-amber"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M10 3c-3 4.2-5.5 7-5.5 10.2a5.5 5.5 0 0011 0C15.5 10 13 7.200 10 3z" fill="currentColor" />
            <path d="M18.500 3.500l.7 1.800 1.800.7-1.800.7-.7 1.800-.7-1.800-1.800-.7 1.800-.7z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  );
}
