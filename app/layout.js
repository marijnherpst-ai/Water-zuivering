import { Inter, Outfit } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

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

export const metadata = {
  title: 'Water-zuivering — Premium waterzuiveraar voor onder uw keukenkraan',
  description:
    'Zuiver drinkwater rechtstreeks uit uw eigen kraan. Water-zuivering verwijdert chloor, PFAS, medicijnresten, microplastics, lood en meer. Vraag een gratis offerte aan voor uw waterfilter onder het aanrecht.',
  keywords:
    'waterzuiveraar, waterfilter, drinkwater filter, waterfilter keuken, gefilterd drinkwater, waterfilter onder aanrecht, drinkwater zuiveren, waterzuiveringssysteem, waterfilter kraan, gezond drinkwater',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-bg text-ink font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
