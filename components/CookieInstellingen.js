'use client';

// Opent de cookie-instellingen opnieuw (toestemming wijzigen of intrekken).
// Op telefoon en tablet staat het zwevende Cookiebot-rondje niet meer over de tekst; dit is de vervanging.
export default function CookieInstellingen() {
  return (
    <button
      type="button"
      onClick={() => { try { window.Cookiebot && window.Cookiebot.renew(); } catch {} }}
      className="cursor-pointer hover:text-ink transition-colors text-left inline-flex items-center min-h-11 lg:min-h-0"
    >
      Cookie-instellingen
    </button>
  );
}
