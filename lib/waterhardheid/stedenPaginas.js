// Inhoud van de stadspagina's /waterhardheid/<stad>.
// Alle cijfers komen van de drinkwaterbedrijven zelf (zie bron per stad):
// - Waternet, Dunea en Brabant Water: officiële publicaties (zie lib/waterhardheid/data.js, 12 november 2026).
// - Evides en Vitens: de eigen postcodechecks van die bedrijven, per postcodegebied opgevraagd op 16 november 2026.
// Tekst tussen [[label|/pad]] wordt een interne link.

export const STAD_VOLGORDE = ['amsterdam', 'rotterdam', 'utrecht', 'eindhoven', 'den-haag'];

export const STAD_PAGINAS = {
  amsterdam: {
    slug: 'amsterdam',
    naam: 'Amsterdam',
    bedrijf: 'Waternet',
    min: 7.8,
    max: 7.8,
    peildatum: '12 november 2026',
    title: 'Waterhardheid Amsterdam: 7,8 °dH (zacht) — Water-zuivering',
    description:
      'Waterhardheid Amsterdam: 7,8 °dH, zacht water van Waternet in de hele stad. Wat dat betekent voor kalk, vaatwasser en waterkoker, en of je iets moet doen.',
    h1: 'Waterhardheid Amsterdam: zo hard is het kraanwater',
    lead:
      'De **waterhardheid in Amsterdam** is **7,8 °dH** (1,40 mmol/l). Dat is zacht water, net onder de grens van 8 °dH waarbij water als gemiddeld geldt. Waternet levert dit water in de hele stad. Hieronder lees je wat dat in de praktijk betekent en of je er iets mee moet.',
    artikel: { href: '/kennisbank/drinkwater-amsterdam', label: 'Drinkwater Amsterdam: bron, PFAS en veiligheid' },
    secties: [
      {
        kop: 'Eén waterhardheid voor heel Amsterdam',
        tekst: [
          'Waternet levert in Amsterdam en omliggende plaatsen overal hetzelfde water. De waterhardheid is daardoor niet per wijk of postcode verschillend, zoals in sommige andere steden. Of je nu in een grachtenpand in het centrum woont of in een nieuwbouwwoning in Zuidoost: uit de kraan komt water van 7,8 °dH.',
          'Dat was niet altijd zo. Tot 2015 was het Amsterdamse kraanwater met 8,4 °dH net iets harder, en dus aan de andere kant van de grens tussen zacht en gemiddeld. Sinds Waternet het water zachter maakt, valt Amsterdam in de klasse zacht.',
        ],
      },
      {
        kop: 'Wat betekent 7,8 °dH voor je huis in Amsterdam?',
        tekst: [
          'Zacht water laat minder kalk achter dan gemiddeld of hard water. In een Amsterdams huishouden merk je dat zo:',
        ],
        lijst: [
          '**Waterkoker en koffiezetapparaat**: er zet zich kalk af, maar langzaam. Ontkalk volgens de handleiding van je apparaat.',
          '**Vaatwasser**: stel de waterhardheid in op "zacht", of op de waarde van 7,8 °dH als je apparaat dat in getallen vraagt. Dan gebruikt hij niet onnodig veel regenereerzout.',
          '**Wasmachine**: bij zacht water heb je minder wasmiddel nodig. Kijk op de verpakking naar de dosering voor zacht water.',
          '**Douche en kranen**: witte vlekken komen bij zacht water vooral door verdamping. De weinige kalk die in het water zit, blijft achter als het opdroogt.',
        ],
      },
    ],
    tabel: {
      kop: 'Waar levert Waternet, en met welke hardheid?',
      uitleg: 'Waternet levert in het hele gebied hetzelfde water. Deze plaatsen hebben dus dezelfde waterhardheid als Amsterdam:',
      kolommen: ['Plaats', 'Waterbedrijf', 'Hardheid'],
      rijen: [
        ['Amsterdam', 'Waternet', '7,8 °dH'],
        ['Amstelveen', 'Waternet', '7,8 °dH'],
        ['Diemen', 'Waternet', '7,8 °dH'],
        ['Heemstede', 'Waternet', '7,8 °dH'],
        ['Muiden en Muiderberg', 'Waternet', '7,8 °dH'],
        ['Ouderkerk aan de Amstel', 'Waternet', '7,8 °dH'],
      ],
    },
    kalk: {
      kop: 'Heb je in Amsterdam een waterontharder nodig?',
      tekst: [
        'Voor de meeste huishoudens niet. Bij 7,8 °dH is het water zacht en is kalkaanslag een kleine ergernis, geen probleem. Een waterontharder is bedoeld voor water dat veel harder is. Wil je toch minder kalk in je drinkwater, dan haalt omgekeerde osmose vrijwel alle kalk eruit. Dat is dan een bijkomend voordeel, het is niet de reden om het te nemen.',
        'Wat Amsterdammers vaker willen weten is wat er verder in het water zit, zoals PFAS en medicijnresten. Daarvoor is hardheid geen maatstaf. Dat lees je in [[drinkwater in Amsterdam|/kennisbank/drinkwater-amsterdam]], en met de [[PFAS-check|/pfas-check]] zie je de cijfers voor jouw postcode.',
      ],
    },
    faq: [
      ['Hoe hard is het water in Amsterdam?', 'Het water in Amsterdam heeft een hardheid van 7,8 °dH (1,40 mmol/l of 13,9 °fH). Dat is zacht water, net onder de grens van 8 °dH.'],
      ['Verschilt de waterhardheid per wijk in Amsterdam?', 'Nee. Waternet levert in heel Amsterdam, Amstelveen, Diemen, Heemstede, Muiden, Muiderberg en Ouderkerk aan de Amstel hetzelfde water van 7,8 °dH.'],
      ['Is Amsterdams kraanwater hard of zacht?', 'Zacht. Water tot 8 °dH heet zacht, tussen 8 en 12 °dH gemiddeld. Amsterdam zit met 7,8 °dH net onder die grens.'],
      ['Was het water in Amsterdam vroeger harder?', 'Ja. Tot 2015 had het Amsterdamse kraanwater volgens Waternet een hardheid van 8,4 °dH. Sinds 2015 is dat 7,8 °dH.'],
      ['Wat moet ik instellen op mijn vaatwasser in Amsterdam?', 'Kies de instelling voor zacht water, of vul 7,8 °dH in als je apparaat de waterhardheid in graden Duitse hardheid vraagt. In de handleiding staat hoe dat werkt.'],
      ['Heb ik in Amsterdam een waterontharder nodig?', 'Meestal niet. Bij zacht water is de kalkaanslag beperkt. Een ontharder is vooral zinvol bij water dat gemiddeld tot hard is.'],
    ],
    bronnen: [{ titel: 'Waternet: waterhardheid in en rond Amsterdam', url: 'https://www.waternet.nl/en/service-and-contact/tap-water/tap-water-hardness/' }],
  },

  rotterdam: {
    slug: 'rotterdam',
    naam: 'Rotterdam',
    bedrijf: 'Evides',
    min: 7.6,
    max: 7.8,
    peildatum: '16 november 2026',
    title: 'Waterhardheid Rotterdam: 7,6 – 7,8 °dH — Water-zuivering',
    description:
      'Waterhardheid Rotterdam: 7,6 tot 7,8 °dH, zacht water van Evides. Zie per postcode welke productielocatie levert en wat dat betekent voor kalk in huis.',
    h1: 'Waterhardheid Rotterdam: zo hard is het kraanwater',
    lead:
      'De **waterhardheid in Rotterdam** ligt tussen **7,6 en 7,8 °dH**. Dat is zacht water, net onder de grens van 8 °dH. Evides levert het, en welke waarde je krijgt hangt af van de productielocatie die jouw postcode bedient. Zo ligt het verschil precies.',
    artikel: { href: '/kennisbank/drinkwater-rotterdam', label: 'Drinkwater Rotterdam: bron, PFAS en tappunten' },
    secties: [
      {
        kop: 'Twee productielocaties, twee waarden',
        tekst: [
          'Rotterdam krijgt zijn water van Evides, dat het oppervlaktewater uit de Maas zuivert. Volgens de postcodecheck van Evides komt het water in Rotterdam uit twee productielocaties: Kralingen en Berenplaat. Kralingen levert water van 7,6 °dH, Berenplaat water van 7,8 °dH.',
          'Het verschil is klein. Beide waarden vallen in de klasse zacht, en in de praktijk zul je er in huis niets van merken. Wil je het exact voor jouw adres weten, gebruik dan de [[waterhardheid check|/waterhardheid]] of de postcodecheck van Evides zelf.',
        ],
      },
      {
        kop: 'Wat betekent 7,6 tot 7,8 °dH voor je huis in Rotterdam?',
        tekst: ['Het water is zacht, dus kalk zet zich langzaam af. Concreet:'],
        lijst: [
          '**Waterkoker**: er komt een kalklaagje op het element, maar langzaam. Ontkalk volgens de handleiding.',
          '**Vaatwasser**: kies de instelling voor zacht water. Op de meeste apparaten komt dat neer op de laagste of de op één na laagste stand.',
          '**Wasmachine**: gebruik de dosering voor zacht water op het wasmiddel. Dat scheelt wasmiddel.',
          '**Kranen en douchekop**: kalkvlekken verschijnen vooral als druppels opdrogen. Afnemen met een doek houdt ze weg.',
        ],
      },
    ],
    tabel: {
      kop: 'Waterhardheid per postcodegebied in en rond Rotterdam',
      uitleg: 'Dit zijn de waarden die de postcodecheck van Evides gaf op 16 november 2026. Evides publiceert de waarde per postcode en benoemt de productielocatie erbij.',
      kolommen: ['Plaats / postcodegebied', 'Productielocatie', 'Hardheid'],
      rijen: [
        ['Rotterdam centrum (3011)', 'Kralingen', '7,6 °dH'],
        ['Rotterdam (3021, 3032, 3051)', 'Kralingen', '7,6 °dH'],
        ['Rotterdam (3062, 3071, 3077)', 'Kralingen', '7,6 °dH'],
        ['Schiedam (3111)', 'Kralingen', '7,6 °dH'],
        ['Capelle aan den IJssel (2901)', 'Kralingen', '7,6 °dH'],
        ['Rotterdam (3086)', 'Berenplaat', '7,8 °dH'],
        ['Hoogvliet (3194)', 'Berenplaat', '7,8 °dH'],
        ['Vlaardingen (3131)', 'Berenplaat', '7,8 °dH'],
        ['Spijkenisse (3201)', 'Berenplaat', '7,8 °dH'],
        ['Barendrecht (2991)', 'Berenplaat', '7,8 °dH'],
      ],
    },
    kalk: {
      kop: 'Heb je in Rotterdam een waterontharder nodig?',
      tekst: [
        'Meestal niet. Het Rotterdamse kraanwater is zacht, dus de kalkaanslag is beperkt. Een waterontharder past eerder bij harder water. In een stad met 7,6 tot 7,8 °dH wegen de kosten zelden op tegen de winst.',
        'Wil je liever weten wat er verder in je water zit? De hardheid zegt daar niets over. Voor PFAS en andere stoffen lees je [[drinkwater in Rotterdam|/kennisbank/drinkwater-rotterdam]] en doe je de [[PFAS-check|/pfas-check]]. Omgekeerde osmose haalt naast die stoffen ook de kalk uit je drinkwater, maar dat is een bijkomend voordeel.',
      ],
    },
    faq: [
      ['Hoe hard is het water in Rotterdam?', 'Het water in Rotterdam is 7,6 tot 7,8 °dH, volgens de postcodecheck van Evides. Dat is zacht water.'],
      ['Waarom zijn er twee waarden voor Rotterdam?', 'Evides levert in Rotterdam water uit twee productielocaties: Kralingen (7,6 °dH) en Berenplaat (7,8 °dH). Welke je krijgt hangt af van je postcode.'],
      ['Waar komt het water in Rotterdam vandaan?', 'Evides zuivert in Rotterdam oppervlaktewater uit de Maas. Volgens de postcodecheck van Evides gebeurt dat op de productielocaties Kralingen en Berenplaat.'],
      ['Is het water in Rotterdam hard of zacht?', 'Zacht. Water tot 8 °dH heet zacht. Rotterdam zit met 7,6 tot 7,8 °dH net onder die grens.'],
      ['Waar vind ik de waterhardheid voor mijn adres in Rotterdam?', 'Op de site van Evides vul je je postcode in. Daarnaast laat onze waterhardheid check zien welk waterbedrijf op jouw adres levert en wat de hardheid is.'],
      ['Heb ik in Rotterdam een waterontharder nodig?', 'Meestal niet. Zacht water geeft maar beperkt kalkaanslag. Een ontharder is vooral zinvol bij water dat gemiddeld tot hard is.'],
    ],
    bronnen: [{ titel: 'Evides: waterhardheid voor je postcode', url: 'https://www.evides.nl/uw-drinkwater' }],
  },

  utrecht: {
    slug: 'utrecht',
    naam: 'Utrecht',
    bedrijf: 'Vitens',
    min: 6.0,
    max: 9.9,
    peildatum: '16 november 2026',
    title: 'Waterhardheid Utrecht: 6,0 – 9,9 °dH — Water-zuivering',
    description:
      'Waterhardheid Utrecht: van 6,0 tot 9,9 °dH, afhankelijk van je postcode. Zie de waarden van Vitens per postcodegebied en wat ze betekenen voor kalk in huis.',
    h1: 'Waterhardheid Utrecht: hoe hard is het water bij jou?',
    lead:
      'De **waterhardheid in Utrecht** verschilt per postcode. In onze steekproef van 17 Utrechtse postcodegebieden ligt de hardheid tussen **6,0 en 9,9 °dH**: van zacht tot gemiddeld. Vitens publiceert de waarde per postcode, en een stadsgemiddelde bestaat dus niet echt.',
    artikel: { href: '/kennisbank/kraanwater-utrecht', label: 'Kraanwater Utrecht: bronnen, PFAS en kookadvies' },
    secties: [
      {
        kop: 'Waarom de waterhardheid in Utrecht per postcode verschilt',
        tekst: [
          'Vitens wint water uit veel verschillende grondwaterbronnen en levert het via meerdere pompstations. Daardoor krijgt niet elke straat hetzelfde water. In een deel van de stad is het water van nature zacht, op andere plekken onthardt Vitens het water voor je het ontvangt.',
          'Het gevolg is een groter verschil dan in steden met één waterbron. Een postcodegebied in het ene deel van Utrecht heeft zacht water van 6 °dH, een ander gebied zit al boven de 9 °dH. Daarom loont het hier om je eigen postcode te checken.',
        ],
      },
      {
        kop: 'Wat betekent dat voor je huis in Utrecht?',
        tekst: ['Je krijgt in Utrecht twee soorten situaties, afhankelijk van je postcode:'],
        lijst: [
          '**Onder de 8 °dH (zacht)**: kalk zet zich langzaam af. Je waterkoker en koffiezetapparaat hoef je niet vaak te ontkalken, en je kunt wasmiddel voor zacht water doseren.',
          '**Tussen 8 en 12 °dH (gemiddeld)**: je ziet de kalk sneller terug op de waterkoker, de douchekop en in de vaatwasser. Zet je vaatwasser op de middelste hardheidsstand en ontkalk apparaten wat vaker.',
          '**Vaatwasser en wasmachine**: stel ze in op de waarde van jouw postcode, niet op een stadsgemiddelde.',
        ],
      },
    ],
    tabel: {
      kop: 'Waterhardheid per postcodegebied in Utrecht',
      uitleg: 'Dit zijn de waarden die Vitens gaf op 16 november 2026, per postcodegebied (de eerste vier cijfers). Voor sommige postcodes publiceert Vitens geen waarde, dat geldt onder meer voor 3511, 3542 en 3585.',
      kolommen: ['Postcodegebied', 'Hardheid', 'Klasse'],
      rijen: [
        ['3521', '6,4 °dH', 'Zacht'],
        ['3524', '6,5 °dH', 'Zacht'],
        ['3526', '7,0 °dH', 'Zacht'],
        ['3527', '8,5 °dH', 'Gemiddeld'],
        ['3531', '6,7 °dH', 'Zacht'],
        ['3541', '8,8 °dH', 'Gemiddeld'],
        ['3543', '8,2 °dH', 'Gemiddeld'],
        ['3544', '8,2 °dH', 'Gemiddeld'],
        ['3551', '7,6 °dH', 'Zacht'],
        ['3555', '9,2 °dH', 'Gemiddeld'],
        ['3561', '9,9 °dH', 'Gemiddeld'],
        ['3563', '8,7 °dH', 'Gemiddeld'],
        ['3571', '6,9 °dH', 'Zacht'],
        ['3573', '6,3 °dH', 'Zacht'],
        ['3581', '6,1 °dH', 'Zacht'],
        ['3582', '6,0 °dH', 'Zacht'],
        ['3584', '6,2 °dH', 'Zacht'],
      ],
      extra: {
        kop: 'En in de buurt van Utrecht?',
        kolommen: ['Plaats', 'Hardheid', 'Klasse'],
        rijen: [
          ['Zeist (3701)', '5,7 °dH', 'Zacht'],
          ['IJsselstein (3401)', '6,6 °dH', 'Zacht'],
          ['Nieuwegein (3431)', '7,0 °dH', 'Zacht'],
          ['Houten (3991)', '7,1 °dH', 'Zacht'],
          ['Vleuten (3451)', '8,0 °dH', 'Gemiddeld'],
        ],
      },
    },
    kalk: {
      kop: 'Heb je in Utrecht een waterontharder nodig?',
      tekst: [
        'Dat hangt van je postcode af. In de zachte gebieden (6 tot 8 °dH) is een ontharder meestal niet nodig. In de gebieden die richting 9 of 10 °dH gaan, merk je de kalk vaker. Dan kan een ontharder of een ander systeem de moeite waard zijn. Weet je niet zeker welke waarde bij jou hoort? Gebruik de [[waterhardheid check|/waterhardheid]] met je postcode en huisnummer.',
        'Omgekeerde osmose haalt vrijwel alle kalk uit het water dat je drinkt, maar is er in de eerste plaats voor stoffen als PFAS en medicijnresten. Meer over wat er in het Utrechtse water zit lees je in [[kraanwater in Utrecht|/kennisbank/kraanwater-utrecht]], en met de [[PFAS-check|/pfas-check]] zie je je eigen postcode.',
      ],
    },
    faq: [
      ['Hoe hard is het water in Utrecht?', 'Dat hangt af van je postcode. In onze steekproef van 17 Utrechtse postcodegebieden ligt de hardheid tussen 6,0 en 9,9 °dH: van zacht tot gemiddeld.'],
      ['Waarom verschilt de waterhardheid per postcode in Utrecht?', 'Vitens wint water uit veel bronnen en levert het via meerdere pompstations. Op sommige plekken is het water van nature zacht, op andere plekken onthardt Vitens het water.'],
      ['Waar vind ik de waterhardheid voor mijn adres in Utrecht?', 'Vitens geeft de waarde voor je postcode in zijn eigen postcodecheck. Ook onze waterhardheid check laat de hardheid voor jouw adres zien.'],
      ['Is het water in Utrecht hard of zacht?', 'Zacht tot gemiddeld, afhankelijk van de postcode. Bijna de helft van de onderzochte postcodegebieden zit onder de 7 °dH, een kleinere groep zit tussen 8 en 10 °dH.'],
      ['Heb ik in Utrecht een waterontharder nodig?', 'Alleen als je in een deel woont waar het water richting 9 of 10 °dH gaat en je veel last hebt van kalk. In de zachtere gebieden is een ontharder meestal niet nodig.'],
      ['Waarom toont Vitens voor mijn postcode geen waarde?', 'Voor sommige postcodes publiceert Vitens geen waarde in zijn postcodecheck. Dat gold bij onze steekproef onder meer voor 3511, 3542 en 3585. Probeer dan een postcode in de buurt of bel Vitens.'],
    ],
    bronnen: [{ titel: 'Vitens: waterhardheid per postcode', url: 'https://www.vitens.nl/over-water/hardheid-water' }],
  },

  eindhoven: {
    slug: 'eindhoven',
    naam: 'Eindhoven',
    bedrijf: 'Brabant Water',
    min: 5.77,
    max: 5.88,
    peildatum: '12 november 2026',
    title: 'Waterhardheid Eindhoven: 5,8 °dH (zacht) — Water-zuivering',
    description:
      'Waterhardheid Eindhoven: 5,8 °dH, zacht water van Brabant Water. Zie de hardheid in Veldhoven, Geldrop, Helmond en andere plaatsen rond Eindhoven.',
    h1: 'Waterhardheid Eindhoven: zo hard is het kraanwater',
    lead:
      'De **waterhardheid in Eindhoven** is **5,8 °dH**: 5,77 tot 5,88 °dH volgens Brabant Water. Dat is zacht water, ruim onder de grens van 8 °dH. Een paar kilometer verderop kan het anders zijn: Helmond zit bijvoorbeeld op 10,8 °dH.',
    artikel: null,
    secties: [
      {
        kop: 'Waarom het Eindhovense water zo zacht is',
        tekst: [
          'Brabant Water publiceert de waterhardheid per woonplaats, vaak als bandbreedte, omdat een plaats water van meerdere productielocaties kan krijgen. Voor Eindhoven geeft Brabant Water 5,77 tot 5,88 °dH, dus bijna een vaste waarde. Dat is zacht water.',
          'In Nederland is 8 °dH de grens tussen zacht en gemiddeld water. Eindhoven zit daar ruim onder. Voor je huis betekent dat weinig kalk op je kranen, een waterkoker die niet snel dichtslibt en zeer beperkte kans op kalkaanslag in je vaatwasser.',
        ],
      },
      {
        kop: 'Wat betekent 5,8 °dH voor je huis in Eindhoven?',
        tekst: ['Bij zacht water zijn de gevolgen klein:'],
        lijst: [
          '**Waterkoker en koffiezetapparaat**: kalkafzetting gaat langzaam. Ontkalk volgens de handleiding, maar je komt er niet vaak aan toe.',
          '**Vaatwasser**: zet de waterhardheid op de laagste stand. Je hebt weinig regenereerzout nodig.',
          '**Wasmachine**: doseer wasmiddel voor zacht water. Meer gebruiken dan nodig is verspilling en kan zeepresten achterlaten.',
          '**Douche**: kalkvlekken blijven beperkt tot opgedroogde druppels. Een doek is meestal genoeg.',
        ],
      },
    ],
    tabel: {
      kop: 'Waterhardheid in Eindhoven en omliggende plaatsen',
      uitleg: 'Brabant Water publiceert de hardheid per woonplaats. Dit zijn plaatsen rond Eindhoven, gebaseerd op de officiële tabel (gecontroleerd op 12 november 2026):',
      kolommen: ['Plaats', 'Hardheid', 'Klasse'],
      rijen: [
        ['Eindhoven', '5,77 – 5,88 °dH', 'Zacht'],
        ['Veldhoven', '5,77 – 5,88 °dH', 'Zacht'],
        ['Waalre', '5,77 °dH', 'Zacht'],
        ['Geldrop', '5,77 °dH', 'Zacht'],
        ['Nuenen', '5,77 °dH', 'Zacht'],
        ['Valkenswaard', '5,77 °dH', 'Zacht'],
        ['Son en Breugel', '5,77 – 8,12 °dH', 'Zacht tot gemiddeld'],
        ['Oirschot', '5,49 – 9,97 °dH', 'Zacht tot gemiddeld'],
        ['Best', '8,12 – 9,97 °dH', 'Gemiddeld'],
        ['Helmond', '10,81 °dH', 'Gemiddeld'],
      ],
    },
    kalk: {
      kop: 'Heb je in Eindhoven een waterontharder nodig?',
      tekst: [
        'In Eindhoven zelf vrijwel nooit. Met 5,8 °dH is het water zacht genoeg om geen extra ontharding nodig te hebben. Woon je in Helmond of Best, dan ligt dat anders: daar is het water gemiddeld en merk je de kalk sneller.',
        'Wil je weten wat er verder in je Eindhovense kraanwater zit, zoals PFAS? Doe de [[PFAS-check|/pfas-check]] met je postcode. Omgekeerde osmose haalt daarnaast ook kalk weg, maar dat is een bijkomend voordeel bij zacht water. Kijk voor je adres ook in de [[waterhardheid check|/waterhardheid]].',
      ],
    },
    faq: [
      ['Hoe hard is het water in Eindhoven?', 'Het water in Eindhoven heeft een hardheid van 5,77 tot 5,88 °dH volgens Brabant Water. Dat is zacht water.'],
      ['Is kraanwater in Eindhoven hard of zacht?', 'Zacht. Eindhoven zit ruim onder de grens van 8 °dH tussen zacht en gemiddeld water.'],
      ['Waarom is het water in Helmond harder dan in Eindhoven?', 'Brabant Water levert water uit meerdere productielocaties. Volgens de officiële tabel is het water in Helmond 10,81 °dH, tegen 5,77 tot 5,88 °dH in Eindhoven.'],
      ['Wat moet ik instellen op mijn vaatwasser in Eindhoven?', 'Kies de laagste hardheidsstand of de stand voor zacht water. Vul je de waarde in graden in, gebruik dan ongeveer 6 °dH.'],
      ['Heb ik in Eindhoven een waterontharder nodig?', 'Nee, meestal niet. Het water is zacht en kalkaanslag blijft beperkt.'],
      ['Waar vind ik de waterhardheid voor mijn adres in Eindhoven?', 'Brabant Water publiceert de waterhardheid per woonplaats. Onze waterhardheid check laat de waarde voor jouw plaats zien en welk waterbedrijf levert.'],
    ],
    bronnen: [{ titel: 'Brabant Water: waterhardheid per woonplaats', url: 'https://www.brabantwater.nl/drinkwater/waterkwaliteit-en-hardheid/waterhardheid' }],
  },

  'den-haag': {
    slug: 'den-haag',
    naam: 'Den Haag',
    bedrijf: 'Dunea',
    min: 7.4,
    max: 8.0,
    peildatum: '12 november 2026',
    title: 'Waterhardheid Den Haag: 7,4 – 8,0 °dH — Water-zuivering',
    description:
      'Waterhardheid Den Haag: 7,4 tot 8,0 °dH, zacht water van Dunea. Hoe de ontharding werkt, wat het betekent voor kalk en of je een ontharder nodig hebt.',
    h1: 'Waterhardheid Den Haag: zo hard is het kraanwater',
    lead:
      'De **waterhardheid in Den Haag** ligt rond **7,9 °dH**. Dunea onthardt het water centraal tot ongeveer 1,4 mmol/l, en in de kwartaalmetingen komt de totale hardheid uit tussen 7,4 en 8,0 °dH. Dat is zacht water, aan de bovenkant van die klasse.',
    artikel: null,
    secties: [
      {
        kop: 'Ontharding bij Dunea: waarom Den Haag zacht water krijgt',
        tekst: [
          'Dunea onthardt het drinkwater in zijn leveringsgebied centraal. Dat betekent dat het water al zacht is wanneer het bij je woning aankomt. De doelwaarde is ongeveer 1,4 mmol/l, wat overeenkomt met circa 7,9 °dH.',
          'Dunea levert niet alleen in Den Haag, maar ook in Leiden, Zoetermeer, Katwijk en omgeving. In de kwartaalmetingen van Dunea ligt de totale hardheid tussen 7,4 en 8,0 °dH.',
        ],
      },
      {
        kop: 'Wat betekent 7,9 °dH voor je huis in Den Haag?',
        tekst: ['Dit is zacht water in de bovenste helft van de klasse. In de praktijk:'],
        lijst: [
          '**Waterkoker en koffiezetapparaat**: kalk zet zich af, maar niet snel. Ontkalk ze volgens de handleiding, of zodra je een witte laag ziet.',
          '**Vaatwasser**: stel de waterhardheid in op zacht, rond 8 °dH.',
          '**Wasmachine**: gebruik de dosering voor zacht water. Dat scheelt wasmiddel.',
          '**Douche en kranen**: kalkvlekken verschijnen vooral als water opdroogt. Neem ze regelmatig af, dan blijven ze licht.',
        ],
      },
    ],
    tabel: {
      kop: 'Den Haag vergeleken met de omliggende plaatsen',
      uitleg: 'Het waterbedrijf bepaalt de hardheid, en niet de plaats. Daarom zie je rond Den Haag verschillende waarden, afhankelijk van wie levert:',
      kolommen: ['Plaats', 'Waterbedrijf', 'Hardheid'],
      rijen: [
        ['Den Haag', 'Dunea', '7,4 – 8,0 °dH'],
        ['Leiden', 'Dunea', '7,4 – 8,0 °dH'],
        ['Zoetermeer', 'Dunea', '7,4 – 8,0 °dH'],
        ['Delft (2611, 2628)', 'Evides', '7,8 °dH'],
        ['Leiderdorp', 'Oasen', '7,0 °dH'],
      ],
    },
    kalk: {
      kop: 'Heb je in Den Haag een waterontharder nodig?',
      tekst: [
        'Meestal niet. Dunea onthardt het water al centraal, en met 7,4 tot 8,0 °dH is het water zacht. Een extra ontharder bij jou thuis voegt weinig toe. Wil je het exacte cijfer voor jouw adres, kijk dan in de [[waterhardheid check|/waterhardheid]].',
        'Wat in Den Haag vaker een vraag is, zijn de stoffen die geen kalk zijn, zoals PFAS. Daar zegt hardheid niets over. Doe de [[PFAS-check|/pfas-check]] voor je postcode. Omgekeerde osmose haalt daarnaast ook kalk uit je drinkwater, maar bij zacht water is dat een bijkomend voordeel.',
      ],
    },
    faq: [
      ['Hoe hard is het water in Den Haag?', 'Het water in Den Haag is ongeveer 7,9 °dH. Dunea onthardt centraal tot circa 1,4 mmol/l, en in de metingen ligt de totale hardheid tussen 7,4 en 8,0 °dH.'],
      ['Is het water in Den Haag hard of zacht?', 'Zacht. De waarde zit net onder de grens van 8 °dH.'],
      ['Wie levert het drinkwater in Den Haag?', 'Dunea. Dat bedrijf levert ook in Leiden, Zoetermeer, Katwijk en omgeving.'],
      ['Waarom schommelt de waterhardheid in Den Haag?', 'In de kwartaalmetingen van Dunea ligt de totale hardheid tussen 7,4 en 8,0 °dH. Dat verschil is klein en merk je in huis niet.'],
      ['Wat moet ik instellen op mijn vaatwasser in Den Haag?', 'Kies de instelling voor zacht water, of zet de waterhardheid op ongeveer 8 °dH als je apparaat de waarde in graden vraagt.'],
      ['Heb ik in Den Haag een waterontharder nodig?', 'Meestal niet. Dunea onthardt het water al centraal, en kalkaanslag blijft beperkt.'],
    ],
    bronnen: [
      { titel: 'Dunea: waterkwaliteit en samenstelling', url: 'https://www.dunea.nl/drinkwater/waterkwaliteit-en-samenstelling' },
      { titel: 'Dunea: waterkwaliteitsrapportage Scheveningen, 1e kwartaal 2024', url: 'https://dunea.nl/-/media/bestanden/home/drinkwater/waterkwaliteitsrapportages/2024-rapportages/scheveningen-1e-kw-2024-verzendfile.ashx' },
    ],
  },
};

// Overzicht voor de vergelijkingstabel op elke stadspagina.
export const STAD_OVERZICHT = [
  { slug: 'amsterdam', naam: 'Amsterdam', bedrijf: 'Waternet', waarde: '7,8 °dH', klasse: 'Zacht' },
  { slug: 'rotterdam', naam: 'Rotterdam', bedrijf: 'Evides', waarde: '7,6 – 7,8 °dH', klasse: 'Zacht' },
  { slug: 'utrecht', naam: 'Utrecht', bedrijf: 'Vitens', waarde: '6,0 – 9,9 °dH', klasse: 'Zacht tot gemiddeld' },
  { slug: 'eindhoven', naam: 'Eindhoven', bedrijf: 'Brabant Water', waarde: '5,8 °dH', klasse: 'Zacht' },
  { slug: 'den-haag', naam: 'Den Haag', bedrijf: 'Dunea', waarde: '7,4 – 8,0 °dH', klasse: 'Zacht' },
];
