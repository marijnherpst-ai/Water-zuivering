import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact — Water-zuivering',
  description:
    'Neem contact op met Water-zuivering (Jd services B.V.), Veldkersweg 16, 3053 JR Rotterdam. KVK 83174044.',
};

export default function ContactPage() {
  return (
    <>
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
            <a href="/#product" className="hover:text-ink transition-colors">Producten</a>
            <a href="/#hoe-het-werkt" className="hover:text-ink transition-colors">Hoe het werkt</a>
            <a href="/#faq" className="hover:text-ink transition-colors">FAQ</a>
            <a href="/contact" className="text-ink">Contact</a>
          </div>
          <a href="/aanmelden" className="cursor-pointer inline-flex items-center rounded-full bg-amber px-5 py-2.5 text-sm font-bold text-ink hover:bg-amber-dark hover:text-white transition-colors shadow-lg shadow-amber/25">
            Offerte aanvragen
          </a>
        </nav>
      </header>

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
                      <dd className="mt-0.5 font-semibold">Jd services B.V.</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold text-dim">Adres</dt>
                      <dd className="mt-0.5 font-semibold">Veldkersweg 16<br />3053 JR Rotterdam</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold text-dim">KVK-nummer</dt>
                      <dd className="mt-0.5 font-semibold">83174044</dd>
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
                    title="Locatie Jd services B.V."
                    src="https://www.google.com/maps?q=Veldkersweg+16,+3053+JR+Rotterdam&output=embed"
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

      <footer className="bg-surface border-t border-edge">
        <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a href="/" className="flex items-center gap-2.5 font-display font-extrabold text-lg tracking-tight">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ink">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C12 2 5 10.5 5 15a7 7 0 0014 0c0-4.5-7-13-7-13z" fill="#EDA71B" /></svg>
              </span>
              Water-zuivering
            </a>
            <p className="mt-3 text-sm text-dim">Premium waterfiltratie voor onder uw keukenkraan.</p>
          </div>
          <div>
            <p className="font-display font-bold text-sm">Navigatie</p>
            <ul className="mt-3 space-y-2 text-sm text-dim">
              <li><a href="/#product" className="hover:text-ink transition-colors">Producten</a></li>
              <li><a href="/#hoe-het-werkt" className="hover:text-ink transition-colors">Hoe het werkt</a></li>
              <li><a href="/#faq" className="hover:text-ink transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="font-display font-bold text-sm">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-dim">
              <li><a href="mailto:info@water-zuivering.nl" className="hover:text-ink transition-colors">info@water-zuivering.nl</a></li>
              <li>Veldkersweg 16, 3053 JR Rotterdam</li>
              <li>KVK 83174044</li>
            </ul>
          </div>
          <div>
            <p className="font-display font-bold text-sm">Juridisch</p>
            <ul className="mt-3 space-y-2 text-sm text-dim">
              <li><a href="#" className="hover:text-ink transition-colors">Privacybeleid</a></li>
              <li><a href="#" className="hover:text-ink transition-colors">Algemene voorwaarden</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-edge">
          <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-dim">&copy; 2026 Jd services B.V. (Water-zuivering). Alle rechten voorbehouden.</div>
        </div>
      </footer>

      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 glass px-4 py-3">
        <a href="/aanmelden" className="cursor-pointer flex items-center justify-center gap-2 rounded-full bg-amber px-5 py-3 text-sm font-bold text-ink shadow-lg">
          Offerte aanvragen
        </a>
      </div>
    </>
  );
}
