import OntkalkGids from '@/components/kennisbank/OntkalkGids';

export const metadata = {
  alternates: { canonical: '/kennisbank/kalk-verwijderen-glas-tegels' },
  title: 'Kalk verwijderen van glas en tegels — Water-zuivering',
  description:
    'Kalk verwijderen van glas, een douchewand en badkamertegels met azijn of citroenzuur. Zo werkt het en welke ondergronden geen zuur verdragen.',
  openGraph: {
    title: 'Kalk verwijderen van glas en tegels',
    description: 'Douchewand, douchedeur en tegels weer helder, en welke ondergronden geen zuur verdragen.',
    url: 'https://www.water-zuivering.nl/kennisbank/kalk-verwijderen-glas-tegels',
    type: 'article',
  },
};

const G = {
  slug: 'kalk-verwijderen-glas-tegels',
  gepubliceerd: '2026-11-16',
  bijgewerkt: '16 november 2026',
  headline: 'Kalk verwijderen van glas en tegels',
  description:
    'Kalk verwijderen van glas, een douchewand en badkamertegels met azijn of citroenzuur. Zo werkt het en welke ondergronden geen zuur verdragen.',
  h1: 'Kalk verwijderen van glas, douchewand en tegels',
  lead:
    'Wil je **kalk verwijderen van glas** of van badkamertegels? Spuit of wrijf een verdunde oplossing van azijn of citroenzuur op de ondergrond, laat het een paar minuten inwerken, wrijf na met een zachte doek en spoel goed met water. Droog daarna af, zodat het niet meteen terugkomt.',
  kortKop: 'Kalk op glas en tegels: wat is het en wat werkt?',
  kort:
    'De witte waas op een douchewand, de vlekken op een raam en de grijze korst op tegels zijn kalk. Dat blijft achter als water verdampt. Een zuur lost het op, maar niet elke ondergrond verdraagt zuur. **Glas en geglazuurde keramische tegels** kunnen er goed tegen. **Natuursteen**, marmer en sommige voegen niet.',
  nodig: {
    kop: 'Dit heb je nodig',
    items: [
      'Schoonmaakazijn of citroenzuur, verdund met water',
      'Een sprayfles, een zachte doek en eventueel een zachte borstel',
      'Een trekker of droge doek om na te drogen',
    ],
  },
  stappen: {
    kop: 'Zo verwijder je kalk van glas en tegels',
    intro:
      'Test het middel altijd eerst op een klein, onopvallend stukje. Dat geldt zeker voor tegels met voegen en voor een coating op glas.',
    items: [
      ['Maak het oppervlak nat en nevel de oplossing', 'Spuit een mengsel van ongeveer evenveel water en azijn, of citroenzuur opgelost in water, op de aanslag. Op een verticale douchewand werkt een doek die je met de oplossing nat maakt en tegen het glas legt.'],
      ['Laat het inwerken', 'Wacht ongeveer tien tot vijftien minuten. Hardnekkige aanslag mag langer, maar laat de oplossing niet opdrogen op het oppervlak.'],
      ['Wrijf en spoel', 'Wrijf met een zachte doek of borstel in cirkels. Spoel daarna goed met schoon water, zodat er geen azijn of citroenzuur achterblijft.'],
      ['Droog en herhaal waar nodig', 'Droog het glas met een trekker of droge doek. Zit er nog kalk? Herhaal dan het inwerken. Schrob niet harder, want krassen geven nieuwe kalk meer grip.'],
    ],
  },
  secties: [
    {
      kop: 'Welke ondergrond kan tegen zuur?',
      tekst: [
        'Dat bepaalt of je azijn of citroenzuur kunt gebruiken. Lees dit voordat je begint, want zuur op de verkeerde ondergrond laat blijvende schade achter.',
      ],
      tabel: {
        kolommen: ['Ondergrond', 'Kan het tegen azijn of citroenzuur?', 'Let op'],
        rijen: [
          ['**Glas** (douchewand, douchedeur, raam)', 'Ja', 'Heeft het glas een speciale coating, gebruik dan het advies van de fabrikant en geen schuurmiddel.'],
          ['**Keramische tegels met glazuur**', 'Meestal ja', 'Het zuur kan de voegen aantasten. Test eerst en spoel de voegen goed na.'],
          ['**Voegen**', 'Wees voorzichtig', 'Sommige voegen reageren op zuur. Houd de inwerktijd kort.'],
          ['**Natuursteen, marmer, travertijn**', 'Nee', 'Zuur tast het oppervlak aan. Gebruik een middel dat voor natuursteen bedoeld is.'],
          ['**Douchebak van acryl of email**', 'Meestal ja', 'Gebruik een zachte doek, geen schuurmiddel, en spoel goed na.'],
        ],
      },
      na: [
        'Meer over de verschillende middelen en waarom ze bij de ene ondergrond wel en bij de andere niet werken, lees je in [[antikalk en ontkalker kiezen|/kennisbank/antikalk-ontkalker-kiezen]].',
      ],
    },
    {
      kop: 'Hardnekkige kalk op een douchewand of douchedeur',
      tekst: [
        'Een dikke, witte laag die niet bij de eerste keer verdwijnt, heeft meer inwerktijd nodig. Leg een doek met de oplossing tegen het glas en laat dat een half uur zitten. Spoel daarna en wrijf na. Een kalkreiniger voor de badkamer werkt sneller, maar volg dan het etiket en spoel goed.',
        'Heeft je douchewand een kalkwerende coating, dan kun je die beschadigen met schuren of te veel zuur. Gebruik dan een milde reiniger en droog het glas na elke douche met een trekker.',
      ],
    },
    {
      kop: 'Kalkaanslag op badkamertegels en in de douchebak',
      tekst: [
        'Op glazuurtegels werkt de oplossing hetzelfde als op glas. Werk per stuk muur, zodat je het zuur niet laat opdrogen, en spoel de voegen goed na. Bij een kalklaag in de douchebak laat je de oplossing een kwartier staan en spoel je daarna goed, zodat de bodem niet glad blijft.',
        'Gele of bruine vlekken zijn meestal geen kalk, maar ijzer uit leidingen. Dat lees je bij [[bruin water uit de kraan|/kennisbank/bruin-water-uit-de-kraan]].',
      ],
    },
    {
      kop: 'Hoe vaak moet je dit doen?',
      tekst: [
        'Dat hangt af van hoe hard je water is en hoe vaak je doucht. Bij gemiddeld hard water (8 tot 12 °dH) zie je de aanslag sneller dan bij zacht water. Hoe hard het water bij jou is, vind je met de [[waterhardheid check|/waterhardheid]].',
      ],
    },
    {
      kop: 'Kalk op spiegels en ramen',
      tekst: [
        'Op een spiegel of raam werkt dezelfde oplossing als op een douchewand. Let wel op de randen: zuur dat langs de rand van een spiegel loopt, kan de achterkant aantasten. Gebruik daarom een licht bevochtigde doek in plaats van veel vloeistof, en droog de randen direct af. Bij ramen met een kozijn van aluminium of lak spoel je snel na, zodat het zuur niet inwerkt.',
      ],
    },
    {
      kop: 'Matglas, zwart glas en glas met een coating',
      tekst: [
        'Een douchewand met een kalkwerende coating, zwarte profielen of matglas vraagt om extra voorzichtigheid. Gebruik een milde reiniger zonder schuurmiddel en volg het onderhoudsadvies van de fabrikant. Een kalkwerende laag is meestal bedoeld om water makkelijker af te laten lopen. Met een trekker na elke douchebeurt help je dat effect, en je hebt zo minder reiniger nodig.',
      ],
    },
    {
      kop: 'Veelgemaakte fouten bij het verwijderen van kalk van glas en tegels',
      lijst: [
        '**Het zuur laten opdrogen** op glas of tegels, waardoor het vlekken geeft.',
        '**Zuur gebruiken op natuursteen of marmer.**',
        '**Schrobben met een schuursponsje** op glas of een coating.',
        '**Niet naspoelen** en zuur op voegen of rubber laten zitten.',
        '**Meteen de hele badkamer doen** zonder eerst een klein stuk te testen.',
      ],
    },
  ],
  letOp: {
    kop: 'Let op bij het verwijderen van kalk',
    items: [
      '**Gebruik geen azijn of citroenzuur op natuursteen, marmer of travertijn.** Het zuur maakt het oppervlak dof.',
      '**Geen schuursponsje of staalwol op glas.** Krassen geven nieuwe kalk meer grip.',
      '**Mix nooit azijn of citroenzuur met bleek of chloorreiniger.** Dat geeft een giftig gas.',
      '**Zorg voor ventilatie** in een kleine badkamer.',
      '**Spoel goed na.** Zuur dat op tegels of voegen achterblijft, kan het oppervlak aantasten.',
    ],
  },
  voorkomen: {
    kop: 'Voorkom dat de kalk terugkomt',
    tekst: [
      'Trek het glas na het douchen droog met een trekker. Water dat niet opdroogt, laat geen kalk achter. Dat scheelt meer dan elke reiniger.',
      'Hoe snel de kalk terugkomt, hangt af van hoe hard je water is. Dat verschilt per stad: zie [[waterhardheid Amsterdam|/waterhardheid/amsterdam]], [[Rotterdam|/waterhardheid/rotterdam]], [[Utrecht|/waterhardheid/utrecht]] en [[Den Haag|/waterhardheid/den-haag]]. Meer over kalk in huis lees je bij [[kalkaanslag in huis|/kennisbank/kalkaanslag-in-huis]].',
    ],
  },
  faq: [
    ['Hoe verwijder je kalk van glas?', 'Spuit een mengsel van water en azijn of citroenzuur op het glas, laat het tien tot vijftien minuten inwerken, wrijf na met een zachte doek en spoel goed. Droog het glas daarna af met een trekker.'],
    ['Hoe krijg je kalk van een douchewand?', 'Leg een doek met azijn- of citroenzuuroplossing tegen het glas en laat het een kwartier tot een half uur inwerken. Wrijf na en spoel. Gebruik geen schuurmiddel.'],
    ['Kun je kalk van tegels verwijderen met azijn?', 'Op geglazuurde keramische tegels meestal wel. Test eerst op een klein stukje en spoel de voegen goed na. Op natuursteen of marmer gebruik je geen azijn.'],
    ['Wat doe ik tegen kalkaanslag in de douchebak?', 'Laat een oplossing van azijn of citroenzuur een kwartier staan, wrijf met een zachte doek en spoel goed na. Gebruik geen schuurmiddel op acryl.'],
    ['Waarom komen kalkvlekken zo snel terug op glas?', 'Omdat kalk achterblijft als druppels opdrogen. Een trekker na elke douchebeurt voorkomt het meeste.'],
    ['Is het gevaarlijk om azijn en bleek te mengen?', 'Ja. Daarbij kan een giftig gas vrijkomen. Gebruik nooit zuur en bleek of chloorreiniger samen of vlak na elkaar zonder te spoelen.'],
  ],
  gerelateerd: [
    ['Kranen en douchekop ontkalken', '/kennisbank/kranen-en-douchekop-ontkalken', 'Uitloop, perlator en douchekop weer schoon.'],
    ['Antikalk en ontkalker kiezen', '/kennisbank/antikalk-ontkalker-kiezen', 'Azijn, citroenzuur, tabletten of kalkreiniger: wat past waarbij?'],
    ['Waterkoker ontkalken', '/kennisbank/waterkoker-ontkalken', 'Zo ontkalk je je waterkoker in vier stappen.'],
    ['Kalkaanslag in huis', '/kennisbank/kalkaanslag-in-huis', 'Waar kalk vandaan komt en hoe je het in je hele woning aanpakt.'],
  ],
};

export default function Page() {
  return <OntkalkGids g={G} />;
}
