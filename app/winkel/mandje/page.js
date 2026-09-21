import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MandView from '@/components/winkel/MandView';

export const metadata = {
  title: 'Winkelmand — Water-zuivering',
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section className="max-w-3xl mx-auto px-6 py-14 md:py-20">
          <Link href="/winkel" className="text-sm text-dim underline hover:text-ink">Verder winkelen</Link>
          <h1 className="mt-4 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Winkelmand</h1>
          <MandView />
        </section>
      </main>
      <Footer />
    </>
  );
}
