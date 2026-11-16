import OntkalkGids from '@/components/kennisbank/OntkalkGids';

export const metadata = {
  alternates: { canonical: '/kennisbank/koffiezetapparaat-ontkalken' },
  title: 'Koffiezetapparaat ontkalken: zo doe je het — Water-zuivering',
  description:
    'Koffiezetapparaat ontkalken met azijn of een ontkalker: welke methode past bij jouw machine, hoe vaak het moet en wat je beter niet doet.',
  openGraph: {
    title: 'Koffiezetapparaat ontkalken: veilig en stap voor stap',
    description: 'Welke methode past bij jouw koffiemachine, hoe vaak het moet en wat je beter niet doet.',
    url: 'https://www.water-zuivering.nl/kennisbank/koffiezetapparaat-ontkalken',
    type: 'article',
  },
};

const G = {
  slug: 'koffiezetapparaat-ontkalken',
  gepubliceerd: '2026-11-16',
  bijgewerkt: '16 november 2026',
  headline: 'Koffiezetapparaat ontkalken: veilig en stap voor stap',
  description:
    'Koffiezetapparaat ontkalken met azijn of een ontkalker: welke methode past bij jouw machine, hoe vaak het moet en wat je beter niet doet.',
  h1: 'Koffiezetapparaat ontkalken: veilig en stap voor stap',
  lead:
    'Je **koffiezetapparaat ontkalken** doe je het veiligst met het middel en het schema van de fabrikant. Een gewoon filterkoffiezetapparaat kan vaak met schoonmaakazijn of citroenzuur. Capsulemachines en volautomaten hebben meestal een eigen ontkalkprogramma.',
  kortKop: 'Koffiezetapparaat ontkalken: eerst kijken welk type je hebt',
  kort:
    'Kalk zet zich af in de boiler, de leidingen en het verwarmingselement van je machine. Dat zie je niet, maar je merkt het: de koffie wordt minder warm, de machine doet er langer over en uiteindelijk kan hij verstopt raken. **Ontkalken** is daarom onderhoud. Welke methode je gebruikt, hangt af van het type machine. Daarom begin je met je handleiding.',
  nodig: {
    kop: 'Dit heb je nodig',
    items: [
      'De handleiding van je machine (zoek op "ontkalken")',
      'Het ontkalkmiddel dat de fabrikant voorschrijft, of bij een filterkoffiezetapparaat schoonmaakazijn of citroenzuur',
      'Schoon water en een kwartier tot een uur, afhankelijk van het programma',
    ],
  },
  stappen: {
    kop: 'Zo ontkalk je een filterkoffiezetapparaat met azijn',
    intro:
      'Dit stappenplan geldt voor een gewoon filterkoffiezetapparaat zonder eigen ontkalkprogramma. Voor andere machines staat hieronder wat je anders doet.',
    items: [
      ['Maak de machine leeg', 'Haal het filter, de koffie en eventueel een waterfilterpatroon uit de machine. Veel fabrikanten vragen om het waterfilter eruit te halen voor het ontkalken.'],
      ['Vul het reservoir met oplossing', 'Gebruik evenveel water en schoonmaakazijn, of los citroenzuur op volgens de verpakking. Vul het reservoir niet verder dan de maximumlijn.'],
      ['Laat de helft doorlopen', 'Zet de machine aan en laat ongeveer de helft doorlopen. Zet hem uit en laat de rest een half uur staan, zodat de oplossing in de leidingen kan werken.'],
      ['Laat de rest doorlopen en spoel', 'Zet de machine weer aan en laat de rest doorlopen. Spoel daarna minstens twee à drie keer met vers water, tot je geen azijn meer ruikt of proeft.'],
    ],
  },
  secties: [
    {
      kop: 'Hoe ontkalk je jouw type koffiemachine?',
      tekst: [
        'Niet elke machine werkt hetzelfde. Als de handleiding en deze tabel elkaar tegenspreken, geldt de handleiding.',
      ],
      tabel: {
        kolommen: ['Type machine', 'Zo ontkalk je hem', 'Waar let je op'],
        rijen: [
          ['**Filterkoffiezetapparaat**', 'Met schoonmaakazijn of citroenzuur, zoals hierboven.', 'Spoel goed na. Een azijnsmaak in je koffie betekent dat je te weinig hebt gespoeld.'],
          ['**Capsule- en padmachines** (zoals Nespresso, Senseo en Dolce Gusto)', 'Meestal met een ontkalker of ontkalkingstabletten die de fabrikant adviseert, via een vast programma of een vaste volgorde.', 'Sommige fabrikanten sluiten azijn uit, omdat het afdichtingen kan aantasten. Lees de handleiding.'],
          ['**Volautomaat en espressomachine**', 'Via het ontkalkprogramma in het menu, met de ontkalker van de fabrikant.', 'Onderbreek het programma niet. Haal het waterfilter eruit als de handleiding dat vraagt.'],
        ],
      },
      na: [
        'Staat jouw merk of model er niet bij? Zoek in de handleiding naar "ontkalken" of "descaling". Staat het niet in je handleiding, kijk dan op de site van de fabrikant voordat je zelf iets bedenkt.',
      ],
    },
    {
      kop: 'Azijn, citroenzuur of een speciale ontkalker?',
      tekst: [
        '**Schoonmaakazijn** en **citroenzuur** zijn goedkoop en werken goed op een filterkoffiezetapparaat. Voor machines met ontkalkprogramma is het veiliger om de **ontkalker van de fabrikant** te gebruiken. Zulke ontkalkers zijn vaak op een andere zuursoort gebaseerd, zoals melkzuur, citroenzuur of sulfaminezuur, en afgestemd op de materialen in de machine.',
        'Meer over de verschillen lees je in [[antikalk en ontkalker kiezen|/kennisbank/antikalk-ontkalker-kiezen]].',
      ],
    },
    {
      kop: 'Hoe vaak moet je een koffiezetapparaat ontkalken?',
      tekst: [
        'Veel machines geven het zelf aan met een lampje of melding. Anders geeft de handleiding een schema, vaak gekoppeld aan hoe hard je water is. Hoe harder het water, hoe vaker je moet ontkalken.',
        'Wil je weten hoeveel kalk jouw water bevat? Gebruik de [[waterhardheid check|/waterhardheid]]. In steden als [[Utrecht|/waterhardheid/utrecht]] verschilt het per postcode, in [[Eindhoven|/waterhardheid/eindhoven]] ligt het water rond 5,8 °dH en is het dus zacht.',
      ],
    },
    {
      kop: 'Wat doet een waterfilter, en wat niet?',
      tekst: [
        'Een waterfilter in het reservoir vermindert kalk in je machine, maar het vervangt het ontkalken niet. Blijf ontkalken volgens de handleiding. Hoe zo\'n filter werkt en wanneer het loont, lees je bij [[waterfilter voor koffiemachines|/kennisbank/waterfilter-koffiemachine]].',
        'Gebruik je gefilterd of zeer zacht water, zoals osmosewater? Sommige fabrikanten raden gedemineraliseerd water af, omdat de machine mineralen nodig kan hebben om goed te werken. Controleer dat voordat je het in je machine gebruikt. Een [[mineraalfilter|/winkel/cto-filter-met-mineralen]] voegt na het membraan mineralen toe.',
      ],
    },
    {
      kop: 'Hoe merk je dat je koffiemachine ontkalkt moet worden?',
      tekst: [
        'Kalk bouwt langzaam op. Dit zijn de signalen:',
      ],
      lijst: [
        '**De koffie is minder warm** dan eerst.',
        '**De machine doet er langer over** om koffie te zetten, of loopt langzamer door.',
        '**De machine maakt meer geluid** dan normaal.',
        '**Een melding of lampje** op de machine zegt dat je moet ontkalken.',
        '**Een witte laag** in het reservoir of op het element.',
      ],
      na: [
        'Verbetert het niet na het ontkalken, of blijft er een foutmelding staan? Zoek dan de melding op in de handleiding of neem contact op met de fabrikant. Probeer niet zelf iets te demonteren.',
      ],
    },
    {
      kop: 'Wat gebeurt er als je niet ontkalkt?',
      tekst: [
        'De kalk zet zich af in de boiler, de leidingen en het element. Dat kost de machine meer moeite en kan op den duur storingen geven. Lees ook de garantievoorwaarden van je machine. Sommige fabrikanten verwachten dat je volgens hun schema ontkalkt.',
      ],
    },
    {
      kop: 'Veelgemaakte fouten bij het ontkalken van een koffiemachine',
      lijst: [
        '**Te weinig spoelen** na het ontkalken, waardoor je koffie naar ontkalker smaakt.',
        '**Het ontkalkprogramma stoppen** voordat het klaar is.',
        '**Een middel gebruiken dat de fabrikant afraadt**, zoals azijn bij sommige machines.',
        '**Het waterfilter laten zitten** terwijl de handleiding vraagt het eruit te halen.',
        '**Het ontkalken uitstellen** tot de machine niet meer werkt.',
      ],
    },
  ],
  letOp: {
    kop: 'Wat je beter niet doet',
    items: [
      '**Geen azijn gebruiken als de fabrikant het afraadt.** Dat kan afdichtingen aantasten en laat een geur achter.',
      '**Mix nooit een ontkalker met bleek of chloorreiniger.** Dat kan een giftig gas geven.',
      '**Onderbreek een ontkalkprogramma niet.** Dan blijft er ontkalker in het systeem zitten.',
      '**Spoel altijd goed na.** Resten ontkalker horen niet in je koffie.',
      '**Gebruik geen middel dat niet voor jouw machine bedoeld is.** Ontkalkers zijn niet altijd uitwisselbaar. Voor je waterkoker lees je [[waterkoker ontkalken|/kennisbank/waterkoker-ontkalken]].',
    ],
  },
  voorkomen: {
    kop: 'Minder kalk in je koffiemachine',
    tekst: [
      'Het meeste kalk komt uit je water. Ontkalk op tijd, gebruik zo nodig een filter in het reservoir en kijk naar de waterhardheid bij jou thuis.',
      'Wil je koffie en thee met zuiverder water, zonder kalk en met minder stoffen als PFAS en medicijnresten? Een [[osmosesysteem|/osmosesysteem]] onder het aanrecht levert dat uit je eigen kraan.',
    ],
  },
  faq: [
    ['Hoe ontkalk je een koffiezetapparaat met azijn?', 'Vul het reservoir met evenveel water en schoonmaakazijn, laat de helft doorlopen, wacht een half uur en laat de rest doorlopen. Spoel daarna minstens twee à drie keer met vers water. Gebruik azijn alleen als de fabrikant het toestaat.'],
    ['Kan ik elk koffieapparaat met azijn ontkalken?', 'Nee. Een filterkoffiezetapparaat meestal wel, maar bij capsule- en padmachines en volautomaten raden veel fabrikanten azijn af. Controleer altijd de handleiding.'],
    ['Wat is beter om een koffiemachine te ontkalken: azijn of een ontkalker?', 'Voor een filterkoffiezetapparaat werken beide. Bij machines met een ontkalkprogramma kies je de ontkalker van de fabrikant, want die is afgestemd op de machine.'],
    ['Hoe vaak moet ik mijn koffiezetapparaat ontkalken?', 'Volg de handleiding of de melding van de machine. In water dat harder is, moet je vaker ontkalken dan in zacht water.'],
    ['Hoe krijg ik de azijnsmaak uit mijn koffiemachine?', 'Spoel meerdere keren met vers water, tot je niets meer ruikt of proeft. Laat de machine daarna met het deksel open drogen.'],
    ['Moet ik het waterfilter eruit halen voor het ontkalken?', 'Veel fabrikanten vragen dat. Het filter zou anders ontkalker opnemen of beschadigd raken. Controleer de handleiding van je machine.'],
  ],
  gerelateerd: [
    ['Waterkoker ontkalken', '/kennisbank/waterkoker-ontkalken', 'Stappenplan voor de waterkoker, met azijn, citroenzuur of citroensap.'],
    ['Antikalk en ontkalker kiezen', '/kennisbank/antikalk-ontkalker-kiezen', 'Welk middel past bij welk apparaat of welke ondergrond?'],
    ['Waterfilter koffiemachine', '/kennisbank/waterfilter-koffiemachine', 'Wat een filter doet, wanneer het loont en hoe vaak je het vervangt.'],
    ['Kalkaanslag in huis', '/kennisbank/kalkaanslag-in-huis', 'Waar kalk vandaan komt en hoe je het in je hele woning aanpakt.'],
  ],
};

export default function Page() {
  return <OntkalkGids g={G} />;
}
