import OntkalkGids from '@/components/kennisbank/OntkalkGids';

export const metadata = {
  alternates: { canonical: '/kennisbank/kranen-en-douchekop-ontkalken' },
  title: 'Kranen en douchekop ontkalken in 4 stappen — Water-zuivering',
  description:
    'Kranen en douchekop ontkalken met azijn of citroenzuur, ook zonder losschroeven. Zo houd je uitloop en douchekop schoon en let je op gekleurde kranen.',
  openGraph: {
    title: 'Kranen en douchekop ontkalken: zo doe je het',
    description: 'Met azijn of citroenzuur, ook zonder losschroeven, en waar je op moet letten bij gecoate kranen.',
    url: 'https://www.water-zuivering.nl/kennisbank/kranen-en-douchekop-ontkalken',
    type: 'article',
  },
};

const G = {
  slug: 'kranen-en-douchekop-ontkalken',
  gepubliceerd: '2026-11-16',
  bijgewerkt: '16 november 2026',
  headline: 'Kranen en douchekop ontkalken: zo doe je het',
  description:
    'Kranen en douchekop ontkalken met azijn of citroenzuur, ook zonder losschroeven. Zo houd je uitloop en douchekop schoon en let je op gekleurde kranen.',
  h1: 'Kranen en douchekop ontkalken: zo doe je het',
  lead:
    '**Kranen en douchekop ontkalken** gaat het makkelijkst met een zakje of bakje azijn of citroenzuuroplossing dat een uur inwerkt. Daarna spoel je na en wrijf je de rest weg. Zo krijg je verstopte stralen weer open en chroom weer glanzend.',
  kortKop: 'Kranen en douchekop ontkalken in het kort',
  kort:
    'Kalk zet zich af waar water blijft zitten of verdampt: op de uitloop van de kraan, in de zeefjes en in de gaatjes van de douchekop. Zuur lost het op. Je laat een lapje of zakje met **schoonmaakazijn** of **citroenzuur** op de plek zitten, laat het inwerken en spoelt na. Let wel op bij kranen met een gekleurde of geborstelde afwerking.',
  afbeelding: '/assets/img/kennisbank/kalkaanslag-in-huis.png',
  afbeeldingAlt: 'Kalkaanslag op de uitloop van een chromen kraan, voor het ontkalken',
  nodig: {
    kop: 'Dit heb je nodig',
    items: [
      'Schoonmaakazijn of citroenzuur',
      'Een plastic zakje en een elastiekje, of een bakje',
      'Een zachte doek of tandenborstel en een uur geduld',
    ],
  },
  stappen: {
    kop: 'Zo ontkalk je een kraan en douchekop',
    intro:
      'Dit werkt voor kranen van chroom en voor de meeste douchekoppen. Heeft je kraan een zwarte, gouden of geborstelde afwerking, lees dan eerst het kopje "Let op" hieronder.',
    items: [
      ['Kraan: zakje met azijn om de uitloop', 'Vul een plastic zakje voor de helft met schoonmaakazijn, schuif het over de uitloop zodat die erin hangt en zet het vast met een elastiekje. Laat het ongeveer een uur zitten.'],
      ['Douchekop: losschroeven en in een bakje', 'Draai de douchekop van de slang en leg hem in een bakje met azijn of citroenzuuroplossing. Laat hem ongeveer een uur liggen. Kun je hem niet losschroeven, gebruik dan ook hier het zakje.'],
      ['Wrijf de rest weg', 'Haal de kraan of douchekop eruit, wrijf losse kalk weg met een zachte doek of tandenborstel en maak de gaatjes en zeefjes schoon. Zit er nog kalk? Herhaal dan het inweken.'],
      ['Spoel en controleer', 'Spoel alles goed met schoon water en draai de douchekop terug. Laat de kraan een halve minuut lopen. Is de straal nog onregelmatig, herhaal dan het inweken.'],
    ],
  },
  secties: [
    {
      kop: 'Waar zit kalk bij een kraan en douche, en wat doe je?',
      tabel: {
        kolommen: ['Waar', 'Zo pak je het aan', 'Let op'],
        rijen: [
          ['**Uitloop van de kraan**', 'Zakje met azijn om de uitloop, ongeveer een uur.', 'Spoel goed na en droog met een doek.'],
          ['**Perlator (luchtmenger in de uitloop)**', 'Schroef hem eruit en leg hem in azijn.', 'Zet hem na het spoelen precies terug.'],
          ['**Douchekop met noppen**', 'Bakje met azijn en wrijf de noppen met je vinger.', 'Gebruik geen scherp voorwerp in de gaatjes.'],
          ['**Regendouche**', 'Zakje of bakje met azijn, noppen met een zachte borstel.', 'Een grote kop weegt zwaar: hou hem vast bij het losmaken.'],
          ['**Thermostaatkraan**', 'Alleen de buitenkant en uitloop met een doek, kort.', 'Laat zuur niet in de kraan lopen; volg de handleiding.'],
        ],
      },
    },
    {
      kop: 'Hoe vaak moet je een douchekop en kranen ontkalken?',
      tekst: [
        'Zodra de straal minder wordt, scheef spuit of je witte aanslag ziet. Hoe vaak dat is, hangt af van hoe hard je water is. In water van 6 tot 8 °dH gaat het langzaam, bij gemiddeld hard water (8 tot 12 °dH) merk je het eerder.',
        'Hoe hard je water is, zie je met de [[waterhardheid check|/waterhardheid]]. In [[Utrecht|/waterhardheid/utrecht]] loopt het per postcode uiteen van 6,0 tot 9,9 °dH, dus zie je het ene adres sneller kalk dan het andere.',
      ],
    },
    {
      kop: 'Waarom raakt een douchekop steeds verstopt?',
      tekst: [
        'De gaatjes zijn heel klein. Ook een dun laagje kalk in een gaatje verandert de straal. Daarom zie je het zo snel. Een [[waterfilter voor de douche|/kennisbank/waterfilter-douche]] kan helpen, maar haalt niet alle kalk weg. Elke keer na het douchen even afdrogen scheelt het meest.',
      ],
    },
    {
      kop: 'Ontkalken zonder de douchekop los te schroeven',
      tekst: [
        'Zit je douchekop vast of is hij onhandig? Gebruik dan een zakje met azijn dat je met een elastiekje of tape om de kop vastmaakt, zodat alle gaatjes in de vloeistof zitten. Laat het ongeveer een uur zitten, spoel daarna goed door en laat de douche een minuut lopen.',
      ],
    },
    {
      kop: 'De perlator herkennen en terugzetten',
      tekst: [
        'De perlator is het zeefje of de luchtmenger voorin de uitloop van je kraan. Daar zit vaak de meeste kalk, en daar merk je het aan een scheef of zwak waterstraaltje.',
        'Draai hem los met de hand of met een sleutel die bij je kraan hoort. Let op de kleine rubber ring en de volgorde van de onderdelen, zodat je alles terug kunt zetten zoals het zat. Leg de onderdelen in azijn of citroenzuuroplossing, wrijf ze schoon met een zachte tandenborstel, spoel ze en draai alles terug.',
      ],
    },
    {
      kop: 'Kalk onder de rand en rond de sokkel van de kraan',
      tekst: [
        'Op plekken waar water blijft staan, zoals rond de voet van de kraan en onder de rand van de spoelbak, hecht kalk zich vast. Leg een doek met azijn of citroenzuuroplossing op die plek en laat het een kwartier inwerken. Wrijf daarna met een zachte tandenborstel en spoel goed. Droog de plek daarna af, want daar blijft water het langst staan.',
      ],
    },
    {
      kop: 'Veelgemaakte fouten bij het ontkalken van kranen en douchekoppen',
      lijst: [
        '**Te lang laten inwerken** op een gekleurde of geborstelde kraan.',
        '**Met een scherp voorwerp in de gaatjes prikken**, waardoor de noppen beschadigen.',
        '**De perlator verkeerd terugzetten** of het rubber ringetje vergeten.',
        '**Niet goed naspoelen**, waardoor je azijn in het water proeft.',
        '**Alleen ontkalken en daarna niet drogen**, waardoor de kalk meteen terugkomt.',
      ],
    },
  ],
  letOp: {
    kop: 'Let op bij zwarte, gouden en geborstelde kranen',
    items: [
      '**Gekleurde en geborstelde afwerkingen** zoals zwart, goud of geborsteld staal kunnen door zuur dof of vlekkerig worden. Gebruik daar liever een milde, zuurvrije reiniger, of volg het onderhoudsadvies van de fabrikant.',
      '**Chroom** kan er wel tegen, maar laat het zuur niet uren zitten.',
      '**Laat azijn niet in de kraan en thermostaat lopen**, want het kan rubbers en afdichtingen aantasten als je het vaak herhaalt.',
      '**Geen schuursponsje of scherp voorwerp.** Krassen geven kalk meer grip.',
      '**Mix nooit azijn of citroenzuur met bleek of chloorreiniger.** Dat kan een giftig gas geven.',
    ],
  },
  voorkomen: {
    kop: 'Kalk op kranen voorkomen',
    tekst: [
      'Veeg de kraan na gebruik droog met een doek. Water dat niet opdroogt, laat geen kalk achter. Dat is het goedkoopste en meest effectieve wat je doet.',
      'Osmosewater bevat vrijwel geen kalk, dus waar je dat water gebruikt, blijft er geen kalk achter. Een [[3-weg kraan|/3-weg-kraan]] naast je eigen kraan levert dat gefilterde water in de keuken. Voor de rest van je huis lees je meer bij [[kalkaanslag in huis|/kennisbank/kalkaanslag-in-huis]].',
    ],
  },
  faq: [
    ['Hoe ontkalk je een kraan?', 'Doe schoonmaakazijn in een plastic zakje, schuif het om de uitloop en zet het vast met een elastiekje. Laat het ongeveer een uur zitten, wrijf de rest weg met een doek en spoel goed na.'],
    ['Hoe lang moet een douchekop in azijn?', 'Ongeveer een uur. Bij veel kalk kun je hem langer laten liggen, maar volg de handleiding als de fabrikant een andere tijd noemt.'],
    ['Kun je een douchekop ontkalken zonder te demonteren?', 'Ja. Gebruik een zakje met azijn dat je om de douchekop vastmaakt, zodat alle gaatjes in de vloeistof zitten. Laat het ongeveer een uur zitten en spoel daarna goed door.'],
    ['Mag ik een zwarte of gouden kraan met azijn schoonmaken?', 'Wees voorzichtig. Zuur kan gekleurde en geborstelde afwerkingen aantasten. Gebruik een milde, zuurvrije reiniger of volg het onderhoudsadvies van de fabrikant.'],
    ['Kun je een thermostaatkraan ontkalken?', 'Alleen de buitenkant en de uitloop, kort en met een doek. Laat zuur niet in de kraan lopen en volg de handleiding.'],
    ['Waarom spuit mijn douchekop scheef?', 'Door kalk in de gaatjes. Ontkalk de douchekop en maak de gaatjes voorzichtig schoon met een zachte borstel.'],
  ],
  gerelateerd: [
    ['Kalk verwijderen van glas en tegels', '/kennisbank/kalk-verwijderen-glas-tegels', 'Douchewand, douchedeur en badkamertegels weer helder krijgen.'],
    ['Antikalk en ontkalker kiezen', '/kennisbank/antikalk-ontkalker-kiezen', 'Welk middel past bij welke ondergrond?'],
    ['Waterfilter voor de douche', '/kennisbank/waterfilter-douche', 'Wat een filter op de douchekop wel en niet doet.'],
    ['Kalkaanslag in huis', '/kennisbank/kalkaanslag-in-huis', 'Waar kalk vandaan komt en hoe je het in je hele woning aanpakt.'],
  ],
};

export default function Page() {
  return <OntkalkGids g={G} />;
}
