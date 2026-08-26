import Script from 'next/script';
import { Inter, Outfit } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import WhatsAppButton from '@/components/WhatsAppButton';
import TrackingScripts from '@/components/TrackingScripts';
import OrganizationSchema from '@/components/OrganizationSchema';
import './globals.css';

const COOKIEBOT_ID = '2400c0e3-dc57-47af-ad98-2bf32c9804f7';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
});

const SITE_URL = 'https://www.water-zuivering.nl';
const DEFAULT_TITLE = 'Water-zuivering — Waterzuiveraar voor onder de kraan';
const DEFAULT_DESCRIPTION =
  'Zuiver drinkwater rechtstreeks uit uw kraan. Water-zuivering verwijdert chloor, PFAS, medicijnresten en microplastics. Vraag een gratis offerte aan.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  keywords:
    'waterzuiveraar, waterfilter, drinkwater filter, waterfilter keuken, gefilterd drinkwater, waterfilter onder aanrecht, drinkwater zuiveren, waterzuiveringssysteem, waterfilter kraan, gezond drinkwater',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Water-zuivering',
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: '/assets/img/hero-vrouw-water.webp',
        width: 2752,
        height: 1536,
        alt: 'Vrouw geniet van een glas vers, gefilterd water rechtstreeks uit de kraan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ['/assets/img/hero-vrouw-water.webp'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-bg text-ink font-sans antialiased">
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid={COOKIEBOT_ID}
          data-blockingmode="auto"
          data-culture="nl"
          strategy="beforeInteractive"
        />
        <OrganizationSchema />
        {children}
        <WhatsAppButton />
        <Analytics />
        <TrackingScripts />
      </body>
    </html>
  );
}
