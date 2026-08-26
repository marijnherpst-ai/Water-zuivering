import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  alternates: { canonical: '/algemene-voorwaarden' },
  title: 'Algemene voorwaarden — Water-zuivering',
  description: 'Algemene voorwaarden van Water-zuivering B.V.',
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      <Header />

      <main>
        <section className="relative overflow-hidden">
          <div className="glow w-[480px] h-[480px] bg-amber/15 -top-40 -left-40" />
          <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-dark">Juridisch</span>
            <h1 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">Algemene Voorwaarden</h1>
            <p className="mt-3 text-dim">Water-zuivering B.V.</p>
            <p className="mt-1 text-sm text-dim">Versie [datum] — laatst gewijzigd op [datum]</p>
          </div>
        </section>

        <section className="relative bg-surface border-y border-edge">
          <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
            <div className="space-y-12 text-dim leading-relaxed [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:text-ink [&_h2]:tracking-tight [&_ol]:mt-4 [&_ol]:space-y-3 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mt-4">

              <div>
                <h2>Artikel 1 – Begripsbepalingen</h2>
                <p>In deze algemene voorwaarden wordt verstaan onder:</p>
                <ol>
                  <li>Water-zuivering: Water-zuivering B.V., gevestigd te Veldkersweg 16, 3053 JR Rotterdam, ingeschreven bij de Kamer van Koophandel onder nummer 83174044, btw-identificatienummer [btw-nummer], bereikbaar via telefoonnummer 06 26944877 en e-mailadres info@water-zuivering.nl, hierna te noemen &quot;Water-zuivering&quot;, &quot;wij&quot; of &quot;ons&quot;.</li>
                  <li>Klant: de natuurlijke persoon die met Water-zuivering een overeenkomst sluit en die handelt voor doeleinden buiten zijn bedrijfs- of beroepsactiviteit (consument). Water-zuivering richt zich uitsluitend op de consumentenmarkt en sluit geen overeenkomsten met opdrachtgevers die handelen in de uitoefening van een beroep of bedrijf.</li>
                  <li>Product: het door Water-zuivering geleverde waterzuiveringssysteem (waterzuiveraar), inclusief filters, toebehoren en alle bijbehorende onderdelen.</li>
                  <li>Installatie: de aansluiting en installatie van het Product, uitgevoerd door Water-zuivering of door haar ingeschakelde derden, dan wel door de Klant zelf zoals bedoeld in artikel 7.</li>
                  <li>Overeenkomst: iedere overeenkomst tussen Water-zuivering en de Klant met betrekking tot de verkoop, levering en (eventuele) installatie van het Product, ongeacht of deze wordt gesloten op afstand, buiten de verkoopruimte of anderszins.</li>
                </ol>
              </div>

              <div>
                <h2>Artikel 2 – Toepasselijkheid</h2>
                <ol>
                  <li>Deze voorwaarden zijn van toepassing op alle aanbiedingen, offertes, overeenkomsten, leveringen en installaties van Water-zuivering, met uitsluiting van eventuele voorwaarden van de Klant, tenzij schriftelijk anders overeengekomen.</li>
                  <li>Indien een bepaling van deze voorwaarden nietig of vernietigbaar blijkt, blijven de overige bepalingen onverminderd van kracht. Partijen zullen in dat geval in overleg een nieuwe bepaling vaststellen die zoveel mogelijk aansluit bij de bedoeling van de oorspronkelijke bepaling.</li>
                  <li>In geval van tegenstrijdigheid tussen deze voorwaarden en eventuele voorwaarden van derden, prevaleren deze voorwaarden.</li>
                  <li>Dwingend consumentenrecht prevaleert te allen tijde boven het bepaalde in deze voorwaarden.</li>
                </ol>
              </div>

              <div>
                <h2>Artikel 3 – Offertes, prijzen en totstandkoming van de overeenkomst</h2>
                <ol>
                  <li>Op de website van Water-zuivering worden geen prijzen vermeld. Prijzen worden uitsluitend kenbaar gemaakt via een op maat gemaakte offerte.</li>
                  <li>Offertes van Water-zuivering zijn vrijblijvend en standaard geldig gedurende 14 dagen na dagtekening, tenzij in de offerte anders is vermeld.</li>
                  <li>De in de offerte genoemde prijs is een alles-inclusief prijs voor het Product, tenzij uitdrukkelijk anders vermeld. Offertes zijn gebaseerd op door de Klant verstrekte informatie; onjuiste of onvolledige informatie kan leiden tot aanpassing van de prijs en/of uitvoering.</li>
                  <li>Indien de Klant ervoor kiest het Product zelf te installeren in plaats van dit door Water-zuivering te laten doen, ontvangt de Klant hiervoor een korting ter waarde van € 250,- op de offerteprijs. De Klant is in dat geval zelf verantwoordelijk voor een juiste installatie conform de door Water-zuivering verstrekte instructies. Zie voor de gevolgen van een onjuiste zelfinstallatie voor de garantie artikel 12.</li>
                  <li>De overeenkomst komt tot stand door ondertekening van de offerte c.q. orderbevestiging door de Klant, of door schriftelijke bevestiging door Water-zuivering.</li>
                  <li>Wijzigingen of aanvullingen op de overeenkomst zijn slechts bindend indien deze schriftelijk door Water-zuivering zijn bevestigd.</li>
                  <li>Water-zuivering behoudt zich het recht voor om opdrachten te weigeren of levering/installatie te beperken tot bepaalde regio&apos;s. Dit wordt voorafgaand aan het sluiten van de overeenkomst aan de Klant medegedeeld.</li>
                  <li>Water-zuivering verstrekt voor of bij het sluiten van de overeenkomst alle informatie zoals vereist op grond van artikel 6:230m BW op een duurzame drager (onder meer: identiteit, totale prijs inclusief kosten, herroepingsrecht en de kosten van herroeping, klachtenprocedure en betaalmethode).</li>
                </ol>
              </div>

              <div>
                <h2>Artikel 4 – Nakomingstermijnen</h2>
                <ol>
                  <li>Leverings- en uitvoeringstermijnen zijn indicatief en gelden niet als fatale termijnen. Overschrijding hiervan geeft geen recht op schadevergoeding of ontbinding.</li>
                  <li>Termijnen kunnen worden verlengd indien noodzakelijke gegevens, goedkeuringen of betalingen niet tijdig zijn ontvangen.</li>
                </ol>
              </div>

              <div>
                <h2>Artikel 5 – Duur en beëindiging van de overeenkomst</h2>
                <ol>
                  <li>Water-zuivering kan de overeenkomst per aangetekende brief beëindigen zonder ingebrekestelling indien: a. de Klant zijn verplichtingen niet nakomt; b. onjuiste informatie is verstrekt; c. beslag wordt gelegd op het vermogen van de Klant, of de Klant in een schuldsaneringsregeling terechtkomt.</li>
                  <li>Bij beëindiging door toedoen van de Klant is deze gehouden tot betaling van alle reeds door Water-zuivering gemaakte kosten.</li>
                </ol>
              </div>

              <div>
                <h2>Artikel 6 – Zekerheidsstelling en voorschotten</h2>
                <ol>
                  <li>Water-zuivering kan een voorschot of zekerheid verlangen voordat werkzaamheden worden gestart.</li>
                  <li>Indien de Klant dit weigert, kan Water-zuivering de overeenkomst beëindigen en eventuele schade in rekening brengen.</li>
                </ol>
              </div>

              <div>
                <h2>Artikel 7 – Uitvoering van de installatie</h2>
                <ol>
                  <li>Indien de Klant kiest voor installatie door Water-zuivering, voert Water-zuivering (of een door haar ingeschakelde derde) de installatie zorgvuldig uit, conform de geldende wettelijke eisen en technische normen.</li>
                  <li>De Klant kan er in plaats daarvan voor kiezen het Product zelf te installeren, tegen de korting genoemd in artikel 3 lid 4. De Klant is in dat geval zelf verantwoordelijk voor een deugdelijke installatie conform de bijgeleverde instructies van Water-zuivering.</li>
                  <li>De Klant dient te zorgen voor vrije toegang tot de installatieplaats, alsmede voor water, elektriciteit en veilige werkomstandigheden.</li>
                  <li>De Klant dient Water-zuivering tijdig alle daarvoor benodigde gegevens te verstrekken.</li>
                  <li>Indien werkzaamheden niet kunnen plaatsvinden door omstandigheden buiten de schuld van Water-zuivering, kunnen de daaruit voortvloeiende kosten aan de Klant worden doorberekend, tenzij sprake is van overmacht.</li>
                  <li>Water-zuivering mag derden inschakelen voor de uitvoering van de installatie.</li>
                </ol>
              </div>

              <div>
                <h2>Artikel 8 – Levering en risico</h2>
                <ol>
                  <li>Levering vindt plaats op het door de Klant opgegeven adres.</li>
                  <li>Het risico voor beschadiging of verlies van het Product gaat over op de Klant bij aflevering.</li>
                </ol>
              </div>

              <div>
                <h2>Artikel 9 – Herroepingsrecht</h2>
                <ol>
                  <li>De Klant kan de overeenkomst binnen 14 dagen na installatie en volledige levering van het Product herroepen, zonder opgave van redenen. Indien de Klant het Product zelf installeert (artikel 7 lid 2), vangt deze termijn aan op het moment van levering van het Product.</li>
                  <li>Tijdens de bedenktijd gaat de Klant zorgvuldig met het Product om. Het Product mag slechts worden gebruikt voor zover dat nodig is om de aard, kenmerken en werking ervan vast te stellen.</li>
                  <li>De Klant is aansprakelijk voor waardevermindering van het Product indien hij het Product gebruikt op een manier die verder gaat dan toegestaan in lid 2.</li>
                  <li>Indien het Product door Water-zuivering is geïnstalleerd, kan het niet per post worden geretourneerd omdat professionele deïnstallatie vereist is. De kosten van deze deïnstallatie en ophaling komen bij herroeping voor rekening van de Klant; een redelijke schatting van deze kosten bedraagt € 498,- incl. btw binnen Nederland.</li>
                  <li>Losse filters die zijn voorzien van een verzegeling (hygiënedop) zijn van het herroepingsrecht uitgesloten zodra deze verzegeling na levering is verwijderd. Voor zover een dergelijk product nog niet is verzegeld/geopend, kan de Klant dit zelf verwijderen en op eigen kosten retourneren aan Water-zuivering.</li>
                  <li>Heeft de Klant uitdrukkelijk verzocht het Product tijdens de bedenktijd te laten installeren en heeft Water-zuivering daaraan voldaan, dan is de Klant bij herroeping een evenredige vergoeding verschuldigd voor de reeds verrichte diensten.</li>
                  <li>Het herroepingsrecht geldt uitsluitend voor consumenten.</li>
                </ol>
              </div>

              <div>
                <h2>Artikel 10 – Eigendomsvoorbehoud</h2>
                <ol>
                  <li>Het eigendom van het geleverde Product gaat over op de Klant bij levering c.q. oplevering, onder voorbehoud van volledige betaling van de koopprijs.</li>
                  <li>Het Product mag niet worden verpand, bezwaard of doorverkocht zonder voorafgaande schriftelijke toestemming van Water-zuivering.</li>
                  <li>Bij overdracht van het Product aan een derde dient de Klant Water-zuivering schriftelijk op de hoogte te stellen van de nieuwe eigenaar en diens contactgegevens, zodat de garantie zo nodig kan worden voortgezet.</li>
                  <li>De garantie op het Product vervalt indien het Product wordt gede-installeerd of herplaatst zonder dat dit gebeurt door Water-zuivering of een door haar erkende partij, of zonder voorafgaande schriftelijke goedkeuring van Water-zuivering.</li>
                </ol>
              </div>

              <div>
                <h2>Artikel 11 – Betaling</h2>
                <ol>
                  <li>De koopprijs kan naar keuze direct worden voldaan of na levering/installatie worden gefactureerd, via een van de volgende betaalmethoden: iDEAL, pinbetaling, creditcard, Klarna of automatische incasso.</li>
                  <li>Alle door Water-zuivering gehanteerde prijzen zijn inclusief btw, tenzij uitdrukkelijk anders vermeld.</li>
                  <li>Water-zuivering kan bij wanbetaling de levering van diensten opschorten of de overeenkomst beëindigen.</li>
                </ol>
              </div>

              <div>
                <h2>Artikel 12 – Garantie en vervanging van filters</h2>
                <ol>
                  <li>Water-zuivering verleent 10 jaar garantie op de onderdelen van de waterzuiveraar, tenzij schriftelijk anders overeengekomen.</li>
                  <li>Binnen deze garantietermijn worden defecte onderdelen kosteloos door Water-zuivering vervangen. Voorrijkosten en arbeidsuren die gemoeid zijn met een vervanging vallen niet onder deze garantie en worden afzonderlijk aan de Klant in rekening gebracht.</li>
                  <li>De toepasselijke garantievoorwaarden staan (aanvullend) beschreven in dit artikel en maken integraal deel uit van de overeenkomst.</li>
                  <li>Het Product signaleert zelf wanneer de filters aan vervanging toe zijn. Het is de verantwoordelijkheid van de Klant om dit signaal in de gaten te houden en tijdig nieuwe filters bij Water-zuivering te bestellen. Water-zuivering stuurt de Klant hiertoe periodiek een herinnering per e-mail, maar deze herinnering ontslaat de Klant niet van zijn eigen verantwoordelijkheid hiervoor.</li>
                  <li>Indien de Klant nalaat filters tijdig te (laten) vervangen, vervalt de garantie op het Product.</li>
                  <li>Vervanging van filters en onderdelen wordt uitsluitend uitgevoerd door Water-zuivering of door haar aangewezen derden, tenzij de Klant voor zelfinstallatie heeft gekozen conform artikel 7 lid 2, in welk geval de Klant filters ook zelf mag vervangen conform de verstrekte instructies.</li>
                  <li>Geen garantie wordt gegeven bij: a. onjuist gebruik; b. schade veroorzaakt door derden; c. vorst, blikseminslag, overstroming of andere externe invloeden; d. gebruik van niet-originele onderdelen; e. afwijkingen in waterkwaliteit die niet door het systeem worden gefilterd.</li>
                </ol>
              </div>

              <div>
                <h2>Artikel 13 – Overmacht en annulering</h2>
                <ol>
                  <li>De Klant kan de overeenkomst kosteloos annuleren zolang de installatie van het Product nog niet is gestart.</li>
                  <li>Onder overmacht wordt verstaan: omstandigheden buiten de macht van Water-zuivering, waaronder maar niet beperkt tot natuurrampen, oorlog, pandemieën, stakingen, overheidsmaatregelen of ernstige leveringsproblemen bij leveranciers. Tijdens overmacht worden verplichtingen opgeschort, of kan de overeenkomst zonder schadevergoeding door beide partijen worden beëindigd.</li>
                  <li>Voor het herroepingsrecht van de Klant als consument geldt artikel 9. Indien de Klant binnen de bedenktijd van 14 dagen ontbindt nadat installatie heeft plaatsgevonden, is hij de vooraf kenbaar gemaakte kosten van deïnstallatie verschuldigd, en aanvaardt hij dat eventuele aanpassingen aan keuken of overige voorzieningen voor zijn rekening en risico blijven, zoals bepaald in artikel 16.</li>
                </ol>
              </div>

              <div>
                <h2>Artikel 14 – Aansprakelijkheid</h2>
                <ol>
                  <li>Water-zuivering is niet aansprakelijk voor indirecte schade, gevolgschade, winstderving, immateriële schade of schade veroorzaakt door derden.</li>
                  <li>Directe schade wordt maximaal vergoed tot € 2.500,- per gebeurtenis, behoudens aansprakelijkheid voor opzet of grove schuld, dood of lichamelijk letsel, non-conformiteit van het Product, en overige dwingendrechtelijke consumentenrechten.</li>
                  <li>Water-zuivering is niet aansprakelijk voor schade veroorzaakt door: a. verborgen leidingen, kabels of constructies; b. gebreken of constructiefouten in de woning van de Klant; c. ondeugdelijke of gebrekkige voorzieningen van de Klant; d. werkzaamheden of nalatigheid van derden; e. onvoorziene omstandigheden buiten de macht van Water-zuivering.</li>
                  <li>Ernstige gebreken, zoals lekkages, storingen of defecten waardoor het systeem geen schoon water levert, dienen onverwijld na ontdekking schriftelijk aan Water-zuivering te worden gemeld. Water-zuivering dient altijd eerst de gelegenheid te krijgen het gebrek te herstellen voordat schadevergoeding kan worden gevorderd.</li>
                  <li>De Klant vrijwaart Water-zuivering voor aanspraken van derden die verband houden met of voortvloeien uit het gebruik van het Product, voor zover de schade niet aan Water-zuivering is toe te rekenen.</li>
                </ol>
              </div>

              <div>
                <h2>Artikel 15 – Intellectueel eigendom</h2>
                <ol>
                  <li>Alle door Water-zuivering verstrekte ontwerpen, tekeningen, handleidingen en overige documenten blijven eigendom van Water-zuivering.</li>
                  <li>De Klant verkrijgt uitsluitend een niet-exclusief, niet-overdraagbaar gebruiksrecht voor de duur van de overeenkomst.</li>
                  <li>Zonder schriftelijke toestemming van Water-zuivering mogen deze niet worden gekopieerd, verspreid, aangepast of aan derden verstrekt.</li>
                </ol>
              </div>

              <div>
                <h2>Artikel 16 – Montagevoorwaarden</h2>
                <ol>
                  <li>Indien Water-zuivering de installatie uitvoert, zorgt de Klant voor voldoende werkruimte, een droge kruipruimte (indien van toepassing), bescherming van vloeren en wanden, alsmede voor benodigde voorzieningen zoals water en elektriciteit.</li>
                  <li>Extra kosten door afwijkende situaties (bijvoorbeeld het verplaatsen van leidingen) kunnen in rekening worden gebracht.</li>
                  <li>De Klant erkent en aanvaardt dat voor de installatie van het Product aanpassingen aan het keukenblad, keukenkastjes, leidingen of wanden noodzakelijk kunnen zijn. Deze aanpassingen maken onderdeel uit van de overeengekomen werkzaamheden. Water-zuivering is niet aansprakelijk voor de (esthetische) gevolgen hiervan, tenzij sprake is van een aantoonbare fout of onzorgvuldigheid van Water-zuivering. Indien de Klant gebruikmaakt van het herroepingsrecht zoals bedoeld in artikel 9, blijven reeds aangebrachte aanpassingen aan de keuken of andere voorzieningen voor rekening en risico van de Klant; Water-zuivering is niet gehouden deze te herstellen.</li>
                </ol>
              </div>

              <div>
                <h2>Artikel 17 – Privacy, AVG en beeldmateriaal</h2>
                <ol>
                  <li>Water-zuivering verwerkt persoonsgegevens van de Klant conform de Privacyverklaring, te vinden op <Link href="https://www.water-zuivering.nl" className="underline hover:text-ink">www.water-zuivering.nl</Link>. De gegevens worden onder meer gebruikt voor de uitvoering van de overeenkomst, planning en installatie, facturatie en garantie, storingsbehandeling, en (indien vooraf toestemming is gegeven) marketing en communicatie, waaronder de in artikel 12 genoemde herinneringsmails.</li>
                  <li>De verwerking vindt plaats op basis van de overeenkomst, wettelijke verplichtingen of gerechtvaardigd belang. Bewaartermijnen, rechten van betrokkenen en contactgegevens voor privacyvragen staan vermeld in de Privacyverklaring.</li>
                  <li>Foto&apos;s en video&apos;s die Water-zuivering maakt van installaties blijven eigendom van Water-zuivering. Deze mogen worden gebruikt voor technische documentatie, bewijsvoering en marketingdoeleinden. Voor publicatie van beeldmateriaal waarop de Klant of andere personen herkenbaar zijn, wordt vooraf toestemming gevraagd.</li>
                  <li>Partijen zullen vertrouwelijke informatie die zij tijdens de uitvoering van de overeenkomst verkrijgen, niet zonder toestemming aan derden verstrekken.</li>
                </ol>
              </div>

              <div>
                <h2>Artikel 18 – Meerdere partijen</h2>
                <p>Indien meerdere klanten gezamenlijk een overeenkomst sluiten, zijn zij hoofdelijk aansprakelijk voor het geheel en ieder voor hun eigen deel van de verplichtingen.</p>
              </div>

              <div>
                <h2>Artikel 19 – Klachtenprocedure</h2>
                <ol>
                  <li>Water-zuivering beschikt over een klachtenprocedure en behandelt klachten overeenkomstig deze procedure.</li>
                  <li>Klachten over de uitvoering van de overeenkomst dienen binnen bekwame tijd nadat de Klant de gebreken heeft geconstateerd, volledig en duidelijk omschreven te worden ingediend bij Water-zuivering.</li>
                  <li>Bij Water-zuivering ingediende klachten worden binnen een termijn van 14 dagen, gerekend vanaf de datum van ontvangst, beantwoord. Indien een klacht een voorzienbaar langere verwerkingstijd vraagt, ontvangt de Klant binnen deze termijn van 14 dagen een bericht van ontvangst en een indicatie wanneer een meer uitvoerig antwoord kan worden verwacht.</li>
                  <li>De Klant dient Water-zuivering in ieder geval 4 weken de tijd te geven om de klacht in onderling overleg op te lossen voordat een geschil ontstaat.</li>
                </ol>
              </div>

              <div>
                <h2>Artikel 20 – Conversie</h2>
                <p>Indien een bepaling van deze voorwaarden ongeldig blijkt, wordt deze vervangen door een bepaling die zoveel mogelijk dezelfde strekking heeft.</p>
              </div>

              <div>
                <h2>Artikel 21 – Toepasselijk recht</h2>
                <ol>
                  <li>Op alle overeenkomsten is uitsluitend Nederlands recht van toepassing.</li>
                  <li>Geschillen kunnen door de Klant als consument zowel aanhangig worden gemaakt bij de volgens de wet bevoegde rechter als bij de rechter van zijn woonplaats.</li>
                  <li>Geschillen worden bij voorkeur eerst in onderling overleg opgelost voordat juridische stappen worden genomen.</li>
                </ol>
              </div>

              <div>
                <h2>Artikel 22 – Vindplaats en wijziging</h2>
                <p>Deze voorwaarden zijn te vinden op <Link href="https://www.water-zuivering.nl" className="underline hover:text-ink">www.water-zuivering.nl</Link>. De meest recente versie is te allen tijde van toepassing.</p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
