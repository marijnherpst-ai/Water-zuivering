// Prijzen: null = nog niet bekend, dan is het product niet bestelbaar.
export const PRODUCTEN = [
  {
    slug: 'ppc-filter',
    afbeelding: '/assets/img/winkel/ppc-filter.webp',
    naam: 'PPC-filter',
    ondertitel: 'Voorfilter',
    prijs: 49.99,
    vervanging: 'Ieder jaar',
    kort: 'Vangt grof vuil, zand en roest op, zodat de rest van het systeem beschermd blijft.',
    uitleg: [
      'Het PPC-filter is de eerste filtertrap van je Water-zuivering osmosesysteem. Het water uit je leiding gaat eerst hierdoorheen, nog voordat het de rest van het systeem bereikt. Het filter vangt grof vuil op, zoals zandkorrels, roestdeeltjes en ander zwevend vuil dat via de waterleiding je huis binnenkomt.',
      'Dat lijkt een klein klusje, maar het is belangrijk voor de rest van het systeem. Grove deeltjes die het PPC-filter niet tegenhoudt, zouden het RO-filter sneller verstoppen. Een schoon voorfilter zorgt er dus voor dat de fijnere filters hun werk goed kunnen blijven doen en langer meegaan.',
      'Omdat het PPC-filter als eerste al het vuil opvangt, is het ook een filter dat regelmatig vervangen moet worden. Het display op je apparaat laat met balkjes zien hoeveel levensduur er nog over is, dus je hoeft dit niet zelf bij te houden.',
    ],
    kenmerken: [
      'Eerste filtertrap in je Water-zuivering osmosesysteem',
      'Vangt zand, roest en grof vuil op',
      'Beschermt het RO-filter tegen verstopping',
      'Vervang je gemiddeld ieder jaar (± 12 maanden)',
      'Zonder gereedschap te vervangen',
    ],
    wanneer:
      'Gemiddeld vervang je het PPC-filter ieder jaar. Dat is een richtlijn: bij veel waterverbruik of vuil leidingwater kan het filter sneller vol raken. Het display op je apparaat laat per filter zien hoeveel levensduur er nog over is. Is het balkje van dit filter leeg, dan is het tijd voor een nieuw filter.',
    afbeeldingAlt: 'PPC-filter voor het Water-zuivering osmosesysteem',
  },
  {
    slug: 'ro-filter',
    afbeelding: '/assets/img/winkel/ro-filter.webp',
    naam: 'RO-filter',
    ondertitel: 'Omgekeerde osmose',
    prijs: 69.99,
    vervanging: 'Elke 2 jaar',
    kort: 'Het hart van het systeem: haalt bacteriën, zware metalen en PFAS uit je water.',
    uitleg: [
      'Het RO-filter is het hart van je osmosesysteem. RO staat voor omgekeerde osmose (reverse osmosis): het water wordt onder druk door een uiterst fijn membraan geperst. Dat membraan laat vrijwel alleen watermoleculen door en houdt veel stoffen tegen die je liever niet in je glas hebt, waaronder bacteriën, zware metalen en PFAS.',
      'Het membraan is veel fijner dan wat een gewoon koolstoffilter of een filterkan kan: de poriën zijn ongeveer 0,0001 micron. Daardoor haalt een osmosesysteem meer uit je water dan filters die vooral chloor en geur wegnemen.',
      'Het RO-filter is het duurste filter van het systeem, maar heeft ook de langste levensduur. Wordt het membraan beschermd door een schoon PPC-filter, dan blijft het langer goed werken. Daarom vervang je het voorfilter op tijd.',
    ],
    kenmerken: [
      'Omgekeerde-osmosefilter voor je Water-zuivering osmosesysteem',
      'Membraan van ongeveer 0,0001 micron',
      'Filtert onder andere bacteriën, zware metalen en PFAS',
      'Langste levensduur van alle filters: gemiddeld 2 jaar (± 24 maanden)',
      'Zonder gereedschap te vervangen',
    ],
    wanneer:
      'Gemiddeld vervang je het RO-filter elke 2 jaar. Ook dit is een richtlijn: het hangt af van hoeveel water je gebruikt en hoe het leidingwater bij jou is. Het display op je apparaat laat zien wanneer het tijd is. Een duidelijk tragere doorstroming of een veranderende smaak van je water kunnen ook een teken zijn dat het filter aan vervanging toe is.',
    afbeeldingAlt: 'RO-filter voor het Water-zuivering osmosesysteem',
  },
  {
    slug: 'cto-filter',
    afbeelding: '/assets/img/winkel/cto-filter.webp',
    naam: 'CTO-filter',
    ondertitel: 'Nafilter',
    prijs: 49.99,
    vervanging: 'Ieder jaar',
    kort: 'Nafilter voor een frisse, heldere smaak van je gefilterde water.',
    uitleg: [
      'Het CTO-filter is het nafilter van je Water-zuivering osmosesysteem. Het bevat actieve koolstof die de laatste smaak- en geurtjes wegpoetst, nadat het water door het RO-filter is gegaan. Het is als het ware de laatste polijstbeurt voordat het water uit je kraan komt.',
      'Dit filter zorgt ervoor dat je water zo fris en helder smaakt als je van gefilterd water mag verwachten. Merk je dat de smaak of geur van je water verandert, dan is het CTO-filter vaak het eerste filter dat je controleert.',
      'Het CTO-filter en het PPC-filter hebben dezelfde levensduur. Veel klanten vervangen ze daarom tegelijk, zodat het systeem in één keer weer als nieuw werkt.',
    ],
    kenmerken: [
      'Laatste filtertrap in je Water-zuivering osmosesysteem',
      'Actieve koolstof voor een frisse, heldere smaak',
      'Haalt de laatste smaak- en geurtjes weg',
      'Vervang je gemiddeld ieder jaar (± 12 maanden)',
      'Zonder gereedschap te vervangen',
    ],
    wanneer:
      'Gemiddeld vervang je het CTO-filter ieder jaar. Het display op je apparaat laat met balkjes zien hoeveel levensduur er nog over is. Smaakt of ruikt je water anders dan normaal, dan is het CTO-filter een van de eerste dingen om te controleren.',
    afbeeldingAlt: 'CTO-filter voor het Water-zuivering osmosesysteem',
  },
  {
    slug: 'cto-filter-met-mineralen',
    afbeelding: '/assets/img/winkel/cto-filter-met-mineralen.webp',
    naam: 'CTO-filter met mineralen',
    ondertitel: 'Nafilter met mineralen',
    prijs: 64.99,
    vervanging: 'Levensduur volgt',
    kort: 'Nafilter dat mineralen aan je gefilterde water toevoegt voor een vollere smaak.',
    uitleg: [
      'Het CTO-filter met mineralen is een nafilter voor je Water-zuivering osmosesysteem. Het doet wat het gewone CTO-filter ook doet, namelijk de laatste smaak- en geurtjes wegpoetsen, maar voegt daarnaast mineralen toe aan je gefilterde water.',
      'Omgekeerde osmose is zo grondig dat ook goede mineralen uit het water worden gefilterd. Dit filter brengt ze er bewust weer in terug, waaronder calcium en magnesium. Zo krijgt je water een voller en ronder smaakprofiel, dichter bij hoe je kraanwater van nature smaakt.',
      'Twijfel je of dit filter bij jouw systeem past, of welk nafilter het beste bij jou past? Neem dan contact met ons op, dan denken we graag met je mee.',
    ],
    kenmerken: [
      'Nafilter in je Water-zuivering osmosesysteem',
      'Voegt mineralen toe, waaronder calcium en magnesium',
      'Voller en ronder smaakprofiel',
      'Zonder gereedschap te vervangen',
    ],
    wanneer:
      'Het display op je apparaat laat zien wanneer een filter aan vervanging toe is. De precieze levensduur van dit filter volgt binnenkort.',
    afbeeldingAlt: 'CTO-filter met mineralen voor het Water-zuivering osmosesysteem',
  },
];

export const STAPPEN_VERVANGEN = [
  'Draai de 3-weg kraan dicht en haal de stekker eruit.',
  'Verwijder het voorpaneel van het apparaat.',
  'Trek het oude filter eruit en veeg achtergebleven water weg met een schone doek.',
  'Duw het nieuwe filter erin tot je een klik hoort.',
  'Zet het voorpaneel er weer op en zet water en stroom weer aan.',
  'Druk kort op de resetknop, nogmaals om het juiste filter te kiezen (het lampje knippert) en houd 3 seconden ingedrukt om te bevestigen (je hoort een piepje).',
  'Druk kort op de spoelknop en laat de kraan 10 minuten doorlopen voordat je het water weer drinkt. Controleer ondertussen op lekkage.',
];

export const FAQ_PRODUCT = [
  ['Hoe weet ik wanneer ik een filter moet vervangen?', 'Het display op je apparaat heeft 3 balkjes die per filter laten zien hoeveel levensduur er nog over is. Is een balkje leeg, dan is het tijd om dat filter te vervangen. De genoemde levensduur is een richtlijn.'],
  ['Kan ik een filter zelf vervangen?', 'Ja, dat kan zonder gereedschap: paneel eraf, oud filter eruit, nieuw filter erin tot je een klik hoort. In onze handleiding staat stap voor stap wat je doet.'],
  ['Past dit filter op mijn apparaat?', 'Deze filters zijn bedoeld voor het Water-zuivering osmosesysteem. Heb je een ander systeem, of twijfel je? Neem dan contact met ons op voordat je bestelt.'],
  ['Kan ik nu al bestellen?', 'Nog niet. De winkel is in opbouw en afrekenen is nog niet mogelijk. Je kunt wel alvast filters in de winkelmand leggen.'],
];

export function getProduct(slug) {
  return PRODUCTEN.find((p) => p.slug === slug) || null;
}

export function formatPrijs(prijs) {
  return `€${prijs.toFixed(2).replace('.', ',')}`;
}
