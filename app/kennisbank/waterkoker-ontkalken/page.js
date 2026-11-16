import OntkalkGids from '@/components/kennisbank/OntkalkGids';

export const metadata = {
  alternates: { canonical: '/kennisbank/waterkoker-ontkalken' },
  title: 'Waterkoker ontkalken: zo doe je het — Water-zuivering',
  description:
    'Waterkoker ontkalken in vier stappen met azijn, citroenzuur of citroensap. Wat je nodig hebt, hoe lang het inwerkt en hoe je de smaak weer kwijtraakt.',
  openGraph: {
    title: 'Waterkoker ontkalken: zo doe je het',
    description: 'Stappenplan met azijn, citroenzuur of citroensap, en wat je moet doen als de kalk blijft zitten.',
    url: 'https://www.water-zuivering.nl/kennisbank/waterkoker-ontkalken',
    type: 'article',
  },
};

const G = {
  slug: 'waterkoker-ontkalken',
  gepubliceerd: '2026-11-16',
  bijgewerkt: '16 november 2026',
  headline: 'Waterkoker ontkalken: zo doe je het',
  description:
    'Waterkoker ontkalken in vier stappen met azijn, citroenzuur of citroensap. Wat je nodig hebt, hoe lang het inwerkt en hoe je de smaak weer kwijtraakt.',
  h1: 'Waterkoker ontkalken: stappenplan met azijn of citroenzuur',
  lead:
    'Wil je je **waterkoker ontkalken**? Laat een oplossing van water en azijn of citroenzuur inwerken, maak de kalk los met een zachte borstel, spoel goed na en kook één keer vers water weg. Dat kost een kwartier werk en de rest doet het middel.',
  kortKop: 'Waterkoker ontkalken in het kort',
  kort:
    'Kalk is een laagje calcium en magnesium dat achterblijft als water verdampt. In een waterkoker zit het op de bodem en op het verwarmingselement. Het is niet schadelijk om te drinken, maar het ziet er slecht uit en het kost de koker meer moeite om water te verwarmen. Een zuur lost de kalk op: **schoonmaakazijn**, **citroenzuur** en **citroensap** werken alle drie.',
  nodig: {
    kop: 'Dit heb je nodig',
    items: [
      'Schoonmaakazijn, citroenzuur (poeder) of citroensap',
      'Water en een zachte borstel of doek',
      'Een kwartier tot een half uur, grotendeels wachten',
    ],
  },
  stappen: {
    kop: 'Zo ontkalk je je waterkoker in 4 stappen',
    intro:
      'Dit stappenplan werkt voor de meeste waterkokers van roestvrij staal, glas of kunststof. Staat er in de handleiding van jouw waterkoker iets anders, volg dan die handleiding.',
    items: [
      ['Maak de oplossing', 'Vul de koker voor ongeveer de helft met water en voeg evenveel schoonmaakazijn toe. Gebruik je citroenzuur, los het dan op in water volgens de verpakking. Blijf onder de maximumlijn van je koker.'],
      ['Laat de oplossing werken', 'Breng het mengsel aan de kook en zet de koker uit. Laat het ongeveer een half uur staan. Zie je schuimen of bellen, dan lost de kalk op. Bij een dikke laag mag het langer.'],
      ['Maak schoon en giet leeg', 'Giet het mengsel weg en wrijf losse kalk voorzichtig weg met een zachte borstel of doek. Gebruik geen mes of schuursponsje: krassen geven nieuwe kalk meer grip.'],
      ['Spoel en kook vers water', 'Vul de koker met vers water, kook het en giet het weg. Doe dat eventueel twee keer, tot je geen azijn meer ruikt. Droog de buitenkant af. Dompel de koker en zijn voet nooit onder water.'],
    ],
  },
  secties: [
    {
      kop: 'Welk middel gebruik je: azijn, citroenzuur of citroensap?',
      tekst: [
        'Alle drie lossen kalk op, want ze zijn zuur. Het verschil zit in geur, gemak en prijs. Wat voor jou het beste werkt, hangt vooral af van wat je in huis hebt.',
      ],
      tabel: {
        kolommen: ['Middel', 'Hoe werkt het', 'Waar let je op'],
        rijen: [
          ['**Schoonmaakazijn**', 'Lost kalk snel op. Meng met evenveel water.', 'De geur blijft hangen, dus goed naspoelen en vers water wegkoken.'],
          ['**Citroenzuur (poeder)**', 'Werkt als azijn, maar ruikt veel minder. Los het op volgens de verpakking.', 'Te veel poeder laat een zure smaak achter; spoel dus goed na.'],
          ['**Citroensap**', 'Werkt zwakker, dus beter voor een lichte laag.', 'Geeft een frisse geur, maar je hebt meer nodig dan van de andere twee.'],
        ],
      },
      na: [
        'Meer over de verschillen tussen deze middelen en andere ontkalkers lees je in [[antikalk en ontkalker kiezen|/kennisbank/antikalk-ontkalker-kiezen]].',
      ],
    },
    {
      kop: 'Hoe vaak moet je een waterkoker ontkalken?',
      tekst: [
        'Er is geen vast aantal keren. Het hangt af van hoe hard je water is en hoe vaak je de koker gebruikt. **Ontkalk zodra je een witte of grijze laag ziet** op de bodem of het element.',
        'Je ziet in een stad met zacht water, zoals Amsterdam (7,8 °dH), minder snel kalk dan op een plek waar het water gemiddeld hard is (8 tot 12 °dH). Hoe hard het water bij jou is, zie je met de [[waterhardheid check|/waterhardheid]]. Bijvoorbeeld voor [[Amsterdam|/waterhardheid/amsterdam]], [[Rotterdam|/waterhardheid/rotterdam]] en [[Eindhoven|/waterhardheid/eindhoven]] staan de cijfers per stad.',
      ],
    },
    {
      kop: 'Wat als de kalk blijft zitten?',
      tekst: [
        'Een dikke laag lost soms niet in één keer op. Herhaal het stappenplan en laat het mengsel de tweede keer langer inwerken. Een koker die jaren niet is ontkalkt, kan twee rondes nodig hebben.',
        'Blijft het element ruw of vlekkerig, dan komt dat vaak door kalk die zich hardnekkig heeft vastgezet. Schrob niet met iets scherps: een herhaling met inwerken werkt beter dan kracht.',
      ],
    },
    {
      kop: 'Is kalk in je waterkoker schadelijk?',
      tekst: [
        'Nee. Kalkdeeltjes in je thee of koffie zijn niet schadelijk. Ze bestaan uit dezelfde stoffen als kalk in water, calcium en magnesium. Wat wel kan gebeuren: de koker heeft meer tijd nodig om te verwarmen, want de laag werkt als isolatie. Lees ook [[is kalkaanslag schadelijk voor je gezondheid|/kennisbank/kalkaanslag-in-huis]].',
      ],
    },
    {
      kop: 'Glas, roestvrij staal of kunststof: wat verschilt?',
      tekst: [
        'Het stappenplan is voor alle soorten hetzelfde, maar je merkt kleine verschillen.',
      ],
      lijst: [
        '**Roestvrijstalen koker:** kalk is wit en goed te zien op de bodem en het element. Azijn en citroenzuur werken allebei goed.',
        '**Glazen koker:** je ziet de kalk meteen en weet dus wanneer het tijd is. Een zachte doek is genoeg, want glas krast bij een scherp voorwerp.',
        '**Kunststof koker:** kan de geur van azijn vasthouden. Citroenzuur is dan prettiger, en spoel extra goed na.',
        '**Koker met een vlak, verborgen verwarmingselement:** de kalk zit op een plaat in de bodem. Dat is makkelijk schoon te wrijven, maar lees de handleiding voor je er iets scherps bij pakt.',
      ],
    },
    {
      kop: 'Wat gebeurt er als je een waterkoker niet ontkalkt?',
      tekst: [
        'Er gebeurt niets gevaarlijks, maar de laag wordt dikker. Dikke kalk werkt als isolatie, waardoor de koker langer nodig heeft om water te verwarmen en meer energie kan verbruiken. Het water kan ook kalkdeeltjes bevatten die je in je thee ziet drijven. Hoe langer je wacht, hoe vaker je het stappenplan moet herhalen.',
      ],
    },
    {
      kop: 'Veelgemaakte fouten bij het ontkalken van een waterkoker',
      lijst: [
        '**Te weinig naspoelen**, waardoor je thee naar azijn of citroenzuur smaakt.',
        '**Schrobben met een mes of schuursponsje** op het element of de bodem.',
        '**De koker onder water zetten** om hem schoon te maken. Alleen de binnenkant gaat in contact met het mengsel.',
        '**Een middel gebruiken dat niet voor voedsel bedoeld is**, zoals een kalkreiniger voor de badkamer. Voor een waterkoker gebruik je azijn, citroenzuur of een ontkalker die daarvoor is gemaakt.',
      ],
    },
  ],
  letOp: {
    kop: 'Let op bij het ontkalken',
    items: [
      '**Mix nooit azijn of citroenzuur met bleek of een chloorreiniger.** Daarbij kan een giftig gas vrijkomen.',
      '**Volg de handleiding** als daar iets anders staat. Sommige fabrikanten raden bepaalde middelen af of beperken de inwerktijd.',
      '**Geen kokend mengsel bij kinderen in de buurt.** Laat het eerst afkoelen voordat je het weggiet.',
      '**Dompel de koker niet onder.** Alleen de binnenkant ontkalk je, de voet en het stroomsnoer blijven droog.',
    ],
  },
  voorkomen: {
    kop: 'Hoe voorkom je kalk in je waterkoker?',
    tekst: [
      'Leeg de koker na gebruik en vul hem alleen met de hoeveelheid die je nodig hebt. Staand water laat meer kalk achter dan water dat je meteen gebruikt.',
      'Wil je het probleem bij de bron aanpakken, dan kun je het water filteren. Omgekeerde osmose haalt vrijwel alle kalk uit het water dat je drinkt, zodat er veel minder kalk in je koker achterblijft. Meer over [[waterzuivering voor thuis|/waterzuivering-voor-thuis]] en het [[osmosesysteem|/osmosesysteem]].',
    ],
  },
  faq: [
    ['Hoe ontkalk je een waterkoker met azijn?', 'Vul de koker voor de helft met water en voeg evenveel schoonmaakazijn toe. Breng aan de kook, laat ongeveer een half uur staan, giet leeg en spoel goed na. Kook daarna één of twee keer vers water en giet dat weg.'],
    ['Hoe ontkalk je een waterkoker met citroenzuur?', 'Los citroenzuur op in water volgens de verpakking, laat het in de koker koken en ongeveer een half uur inwerken. Giet leeg, wrijf losse kalk weg en spoel twee keer met vers water.'],
    ['Kun je een waterkoker ontkalken met citroensap?', 'Ja, maar citroensap werkt zwakker dan azijn of citroenzuur. Het past vooral bij een lichte laag. Bij veel kalk heb je meer sap nodig of moet je het langer laten inwerken.'],
    ['Hoe lang moet het ontkalkmiddel in de waterkoker blijven?', 'Meestal ongeveer een half uur nadat het mengsel is gekookt. Bij een dikke laag kan het langer, soms een paar uur, mits de handleiding het toestaat.'],
    ['Mijn waterkoker ruikt na het ontkalken naar azijn. Wat nu?', 'Spoel de koker twee keer met vers water en kook dat telkens weg. Laat de koker daarna met de deksel open drogen. Citroenzuur geeft veel minder geur dan azijn.'],
    ['Hoe vaak moet je een waterkoker ontkalken?', 'Ontkalk zodra je een laag ziet op de bodem of het element. In een stad met zacht water is dat minder vaak nodig dan bij gemiddeld hard water.'],
    ['Is kalk in een waterkoker schadelijk om te drinken?', 'Nee. Kalk bestaat uit calcium en magnesium en is niet schadelijk. Het kan wel de smaak en het uiterlijk van thee of koffie beïnvloeden.'],
  ],
  gerelateerd: [
    ['Kalkaanslag in huis', '/kennisbank/kalkaanslag-in-huis', 'Waar kalk vandaan komt en hoe je het in de hele woning aanpakt.'],
    ['Koffiezetapparaat ontkalken', '/kennisbank/koffiezetapparaat-ontkalken', 'Een andere aanpak dan voor een waterkoker, vooral bij volautomaten en capsulemachines.'],
    ['Antikalk en ontkalker kiezen', '/kennisbank/antikalk-ontkalker-kiezen', 'Azijn, citroenzuur, tabletten of kant-en-klaar: wat past waarbij?'],
    ['Waterhardheid check', '/waterhardheid', 'Hoe hard is het water op jouw adres, en wat betekent dat voor kalk?'],
  ],
};

export default function Page() {
  return <OntkalkGids g={G} />;
}
