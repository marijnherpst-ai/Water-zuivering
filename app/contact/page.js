import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  alternates: { canonical: '/contact' },
  title: 'Contact — Water-zuivering',
  description:
    'Neem contact op met Water-zuivering, Industrieweg 110, 2651 BD Berkel en Rodenrijs. KVK 88718301.',
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <section className="relative">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Contact</span>
              <h1 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Neem contact met ons op</h1>
              <p className="mt-4 text-dim text-lg">Heeft u een vraag of wilt u een offerte aanvragen? We staan voor u klaar.</p>
            </div>

            <div className="mt-14 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              <div>
                <div className="rounded-3xl card p-8">
                  <h2 className="font-display font-bold text-lg">Bedrijfsgegevens</h2>
                  <dl className="mt-5 space-y-4 text-sm">
                    <div>
                      <dt className="text-xs font-semibold text-dim">Bedrijfsnaam</dt>
                      <dd className="mt-0.5 font-semibold">Water-zuivering</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold text-dim">Adres</dt>
                      <dd className="mt-0.5 font-semibold">Industrieweg 110<br />2651 BD Berkel en Rodenrijs</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold text-dim">KVK-nummer</dt>
                      <dd className="mt-0.5 font-semibold">88718301</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold text-dim">Telefoon</dt>
                      <dd className="mt-0.5">
                        <a href="tel:+31626944877" className="font-semibold text-amber-dark hover:underline">
                          06 26 94 48 77
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold text-dim">E-mail</dt>
                      <dd className="mt-0.5">
                        <a href="mailto:info@water-zuivering.nl" className="font-semibold text-amber-dark hover:underline">
                          info@water-zuivering.nl
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-6 rounded-3xl overflow-hidden border border-edge aspect-[4/3]">
                  <iframe
                    title="Locatie Water-zuivering"
                    src="https://www.google.com/maps?q=Industrieweg+110,+2651+BD+Berkel+en+Rodenrijs&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 glass px-4 py-3">
        <Link href="/aanmelden" className="cursor-pointer flex items-center justify-center gap-2 rounded-full bg-amber px-5 py-3 text-sm font-bold text-ink shadow-lg">
          Offerte aanvragen
        </Link>
      </div>
    </>
  );
}
