import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  alternates: { canonical: '/privacybeleid' },
  title: 'Privacyverklaring — Water-zuivering',
  description: 'Privacyverklaring van Water-zuivering: welke persoonsgegevens we verwerken, waarom, en welke rechten je hebt.',
};

export default function PrivacybeleidPage() {
  return (
    <>
      <Header />

      <main>
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Juridisch</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Privacyverklaring</h1>
            <p className="mt-3 text-dim">Water-zuivering</p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
            <div className="space-y-10 text-dim leading-relaxed [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:text-ink [&_h2]:tracking-tight [&_ul]:mt-4 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_p]:mt-4">

              <div>
                <p>
                  Water-zuivering hecht veel waarde aan uw privacy. In deze privacyverklaring leggen wij uit welke persoonsgegevens wij verzamelen, waarom wij deze gegevens verwerken en hoe wij hiermee omgaan.
                </p>
                <p>
                  Wij verwerken uw persoonsgegevens zorgvuldig en in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).
                </p>
              </div>

              <div>
                <h2>Welke gegevens verwerken wij?</h2>
                <p>Wanneer u contact met ons opneemt of een aanvraag indient, kunnen wij de volgende persoonsgegevens verwerken:</p>
                <ul>
                  <li>Naam</li>
                  <li>E-mailadres</li>
                  <li>Telefoonnummer (indien door u verstrekt)</li>
                </ul>
                <p>Wij verwerken uitsluitend de gegevens die u zelf aan ons verstrekt.</p>
              </div>

              <div>
                <h2>Waarvoor gebruiken wij uw gegevens?</h2>
                <p>Wij gebruiken uw persoonsgegevens uitsluitend voor:</p>
                <ul>
                  <li>Het beantwoorden van vragen.</li>
                  <li>Het verwerken van aanvragen.</li>
                  <li>Het opstellen van een offerte.</li>
                  <li>Het onderhouden van contact over onze dienstverlening.</li>
                </ul>
              </div>

              <div>
                <h2>Verstrekking aan derden</h2>
                <p>Uw persoonsgegevens worden niet verkocht of verstrekt aan derden, tenzij dit noodzakelijk is voor de uitvoering van onze dienstverlening of wanneer wij daartoe wettelijk verplicht zijn.</p>
              </div>

              <div>
                <h2>Beveiliging</h2>
                <p>Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen verlies, misbruik en onbevoegde toegang.</p>
              </div>

              <div>
                <h2>Bewaartermijn</h2>
                <p>Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk is voor het doel waarvoor ze zijn verzameld of zolang wij daartoe wettelijk verplicht zijn.</p>
              </div>

              <div>
                <h2>Uw rechten</h2>
                <p>U heeft het recht om:</p>
                <ul>
                  <li>Uw persoonsgegevens in te zien.</li>
                  <li>Uw gegevens te laten corrigeren.</li>
                  <li>Uw gegevens te laten verwijderen.</li>
                  <li>Bezwaar te maken tegen de verwerking van uw persoonsgegevens.</li>
                  <li>Een verzoek te doen om uw gegevens over te dragen.</li>
                </ul>
                <p>Wilt u gebruikmaken van één van deze rechten? Neem dan contact met ons op via onderstaand e-mailadres.</p>
              </div>

              <div>
                <h2>Wijzigingen</h2>
                <p>Water-zuivering behoudt zich het recht voor deze privacyverklaring aan te passen. De meest actuele versie is altijd beschikbaar op onze website.</p>
              </div>

              <div>
                <h2>Contactgegevens</h2>
                <p>
                  Water-zuivering<br />
                  Vestigingsadres: Veldkersweg 16, 3053 JR Rotterdam<br />
                  E-mail: <a href="mailto:info@water-zuivering.nl" className="underline hover:text-ink">info@water-zuivering.nl</a>
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
