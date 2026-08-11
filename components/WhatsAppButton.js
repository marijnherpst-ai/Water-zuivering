'use client';

const WHATSAPP_NUMBER = '31626944877';
const WHATSAPP_MESSAGE = 'Hoi, ik heb een vraag over jullie waterzuiveraar';

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Stuur ons een WhatsApp-bericht"
      className="cursor-pointer fixed bottom-24 md:bottom-6 right-5 md:right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-black/25 hover:scale-105 transition-transform"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.28 4.94L2 22l5.25-1.38a9.96 9.96 0 004.79 1.22h.01c5.52 0 10-4.48 10-10s-4.48-10-10.01-10zm5.86 14.27c-.25.7-1.23 1.29-2.01 1.46-.55.12-1.26.21-3.67-.79-2.94-1.22-4.84-4.18-4.99-4.38-.14-.19-1.2-1.59-1.2-3.04 0-1.44.75-2.15 1.02-2.44.25-.28.55-.35.73-.35h.53c.17 0 .4-.02.62.48.25.6.86 2.05.94 2.2.08.15.13.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.23 1.6 1.99 1.1.98 2.03 1.29 2.32 1.43.29.15.46.13.63-.05.17-.18.72-.83.91-1.12.19-.29.38-.24.63-.15.25.1 1.6.75 1.87.89.27.13.45.2.51.31.06.11.06.62-.19 1.32z" />
      </svg>
    </a>
  );
}
