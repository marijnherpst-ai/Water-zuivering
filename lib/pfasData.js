// Bronnen:
// - Postcode-provincie indeling: Wikipedia "Postcodes in Nederland"
// - PFAS-percentages per provincie: Greenpeace Nederland, "Uitleg en verantwoording
//   bij de PFAS kraanwater postcodechecker" (22 september 2026), gebaseerd op publieke
//   meetgegevens van de 10 Nederlandse waterbedrijven, getoetst aan de RIVM-gezondheids-
//   richtwaarde van 4,4 ng/l PEQ.
// Let op: dit is een regionale (provincie/waterbedrijf) indicatie, geen exacte
// postcode-op-4-cijfers check zoals Greenpeace's eigen tool (die corrigeert ook voor
// mengwater binnen een postcodegebied). Voor de precieze uitslag verwijzen we door.

export const RIVM_NORM_NG_L = 4.4;

export const KLEUR_INFO = {
  donkerrood: { label: 'Donkerrood', uitleg: 'meer dan 1,5x de RIVM-gezondheidsnorm (> 6,6 ng/l PEQ)', hex: '#8B1E1E' },
  rood: { label: 'Rood', uitleg: 'tussen de 1x en 1,5x de RIVM-gezondheidsnorm (4,4 - 6,6 ng/l PEQ)', hex: '#D64545' },
  oranje: { label: 'Oranje', uitleg: 'tussen de helft en de volledige RIVM-gezondheidsnorm (2,2 - 4,4 ng/l PEQ)', hex: '#E39A2D' },
  groen: { label: 'Groen', uitleg: 'onder de helft van de RIVM-gezondheidsnorm (0 - 2,2 ng/l PEQ)', hex: '#3DA35D' },
};

// Percentage van de inwoners van de provincie per kleurcategorie (bron: Greenpeace, zie boven)
export const PROVINCIE_DATA = {
  'Zuid-Holland': { donkerrood: 76, rood: 5, oranje: 13, groen: 6, waterbedrijf: 'Dunea, Oasen of Evides (afhankelijk van uw gemeente)' },
  'Noord-Holland': { donkerrood: 93, rood: 2, oranje: 4, groen: 1, waterbedrijf: 'PWN (of Waternet in Amsterdam en omgeving)' },
  Limburg: { donkerrood: 0, rood: 20, oranje: 11, groen: 69, waterbedrijf: 'WML Limburgs Drinkwater' },
  Zeeland: { donkerrood: 28, rood: 8, oranje: 0, groen: 64, waterbedrijf: 'Evides' },
  Utrecht: { donkerrood: 4, rood: 5, oranje: 2, groen: 89, waterbedrijf: 'Vitens (of Oasen/Waternet in delen van de provincie)' },
  Flevoland: { donkerrood: 0, rood: 10, oranje: 33, groen: 57, waterbedrijf: 'Vitens' },
  Gelderland: { donkerrood: 0, rood: 2, oranje: 18, groen: 80, waterbedrijf: 'Vitens' },
  Friesland: { donkerrood: 0, rood: 1, oranje: 0, groen: 99, waterbedrijf: 'Vitens' },
  Overijssel: { donkerrood: 0, rood: 0, oranje: 33, groen: 67, waterbedrijf: 'Vitens' },
  'Noord-Brabant': { donkerrood: 0, rood: 0, oranje: 7, groen: 93, waterbedrijf: 'Brabant Water (of Evides in het westen)' },
  Drenthe: { donkerrood: 0, rood: 0, oranje: 11, groen: 89, waterbedrijf: 'WMD Drents Drinkwater' },
  Groningen: { donkerrood: 0, rood: 0, oranje: 0, groen: 100, waterbedrijf: 'Waterbedrijf Groningen (of Vitens in delen van de provincie)' },
};

// 4-cijferige postcode-reeksen per provincie (bron: Wikipedia "Postcodes in Nederland")
const REEKSEN = [
  { van: 1000, tot: 1299, provincie: 'Noord-Holland' },
  { van: 1300, tot: 1379, provincie: 'Flevoland' },
  { van: 1380, tot: 1384, provincie: 'Noord-Holland' },
  { van: 1390, tot: 1393, provincie: 'Utrecht' },
  { van: 1394, tot: 1394, provincie: 'Noord-Holland' },
  { van: 1396, tot: 1396, provincie: 'Utrecht' },
  { van: 1398, tot: 1425, provincie: 'Noord-Holland' },
  { van: 1426, tot: 1427, provincie: 'Utrecht' },
  { van: 1428, tot: 1429, provincie: 'Zuid-Holland' },
  { van: 1430, tot: 2158, provincie: 'Noord-Holland' },
  { van: 2159, tot: 2166, provincie: 'Zuid-Holland' },
  { van: 2170, tot: 3381, provincie: 'Zuid-Holland' },
  { van: 3382, tot: 3464, provincie: 'Utrecht' },
  { van: 3467, tot: 3769, provincie: 'Utrecht' },
  { van: 3770, tot: 3794, provincie: 'Gelderland' },
  { van: 3795, tot: 3836, provincie: 'Utrecht' },
  { van: 3837, tot: 3888, provincie: 'Gelderland' },
  { van: 3890, tot: 3899, provincie: 'Flevoland' },
  { van: 3900, tot: 3924, provincie: 'Utrecht' },
  { van: 3925, tot: 3925, provincie: 'Gelderland' },
  { van: 3926, tot: 3999, provincie: 'Utrecht' },
  { van: 4000, tot: 4119, provincie: 'Gelderland' },
  { van: 4120, tot: 4130, provincie: 'Utrecht' },
  { van: 4147, tot: 4162, provincie: 'Gelderland' },
  { van: 4163, tot: 4169, provincie: 'Utrecht' },
  { van: 4170, tot: 4199, provincie: 'Gelderland' },
  { van: 4200, tot: 4209, provincie: 'Zuid-Holland' },
  { van: 4211, tot: 4212, provincie: 'Gelderland' },
  { van: 4213, tot: 4213, provincie: 'Zuid-Holland' },
  { van: 4214, tot: 4219, provincie: 'Gelderland' },
  { van: 4220, tot: 4229, provincie: 'Zuid-Holland' },
  { van: 4230, tot: 4239, provincie: 'Utrecht' },
  { van: 4240, tot: 4241, provincie: 'Zuid-Holland' },
  { van: 4242, tot: 4249, provincie: 'Utrecht' },
  { van: 4250, tot: 4299, provincie: 'Noord-Brabant' },
  { van: 4300, tot: 4599, provincie: 'Zeeland' },
  { van: 4600, tot: 4671, provincie: 'Noord-Brabant' },
  { van: 4672, tot: 4679, provincie: 'Zeeland' },
  { van: 4680, tot: 4681, provincie: 'Noord-Brabant' },
  { van: 4682, tot: 4699, provincie: 'Zeeland' },
  { van: 4700, tot: 4944, provincie: 'Noord-Brabant' },
  { van: 5000, tot: 5299, provincie: 'Noord-Brabant' },
  { van: 5300, tot: 5335, provincie: 'Gelderland' },
  { van: 5340, tot: 5765, provincie: 'Noord-Brabant' },
  { van: 5766, tot: 5817, provincie: 'Limburg' },
  { van: 5820, tot: 5846, provincie: 'Noord-Brabant' },
  { van: 5850, tot: 5995, provincie: 'Limburg' },
  { van: 6000, tot: 6019, provincie: 'Limburg' },
  { van: 6020, tot: 6029, provincie: 'Noord-Brabant' },
  { van: 6030, tot: 6499, provincie: 'Limburg' },
  { van: 6500, tot: 6583, provincie: 'Gelderland' },
  { van: 6584, tot: 6599, provincie: 'Limburg' },
  { van: 6600, tot: 6999, provincie: 'Gelderland' },
  { van: 7000, tot: 7399, provincie: 'Gelderland' },
  { van: 7400, tot: 7438, provincie: 'Overijssel' },
  { van: 7439, tot: 7439, provincie: 'Gelderland' },
  { van: 7440, tot: 7739, provincie: 'Overijssel' },
  { van: 7740, tot: 7766, provincie: 'Drenthe' },
  { van: 7767, tot: 7799, provincie: 'Overijssel' },
  { van: 7800, tot: 7949, provincie: 'Drenthe' },
  { van: 7950, tot: 7955, provincie: 'Overijssel' },
  { van: 7956, tot: 7991, provincie: 'Drenthe' },
  { van: 8000, tot: 8049, provincie: 'Overijssel' },
  { van: 8050, tot: 8054, provincie: 'Gelderland' },
  { van: 8055, tot: 8069, provincie: 'Overijssel' },
  { van: 8070, tot: 8099, provincie: 'Gelderland' },
  { van: 8100, tot: 8159, provincie: 'Overijssel' },
  { van: 8160, tot: 8195, provincie: 'Gelderland' },
  { van: 8196, tot: 8199, provincie: 'Overijssel' },
  { van: 8200, tot: 8259, provincie: 'Flevoland' },
  { van: 8260, tot: 8299, provincie: 'Overijssel' },
  { van: 8300, tot: 8322, provincie: 'Flevoland' },
  { van: 8323, tot: 8349, provincie: 'Overijssel' },
  { van: 8350, tot: 8354, provincie: 'Drenthe' },
  { van: 8355, tot: 8379, provincie: 'Overijssel' },
  { van: 8380, tot: 8387, provincie: 'Drenthe' },
  { van: 8388, tot: 8941, provincie: 'Friesland' },
  { van: 9000, tot: 9299, provincie: 'Friesland' },
  { van: 9300, tot: 9349, provincie: 'Drenthe' },
  { van: 9350, tot: 9399, provincie: 'Groningen' },
  { van: 9400, tot: 9478, provincie: 'Drenthe' },
  { van: 9479, tot: 9479, provincie: 'Groningen' },
  { van: 9480, tot: 9499, provincie: 'Drenthe' },
  { van: 9500, tot: 9509, provincie: 'Groningen' },
  { van: 9510, tot: 9539, provincie: 'Drenthe' },
  { van: 9540, tot: 9563, provincie: 'Groningen' },
  { van: 9564, tot: 9564, provincie: 'Drenthe' },
  { van: 9565, tot: 9569, provincie: 'Groningen' },
  { van: 9570, tot: 9579, provincie: 'Drenthe' },
  { van: 9580, tot: 9653, provincie: 'Groningen' },
  { van: 9654, tot: 9659, provincie: 'Drenthe' },
  { van: 9660, tot: 9748, provincie: 'Groningen' },
  { van: 9749, tot: 9749, provincie: 'Drenthe' },
  { van: 9750, tot: 9759, provincie: 'Groningen' },
  { van: 9760, tot: 9769, provincie: 'Drenthe' },
  { van: 9770, tot: 9849, provincie: 'Groningen' },
  { van: 9850, tot: 9859, provincie: 'Friesland' },
  { van: 9860, tot: 9869, provincie: 'Groningen' },
  { van: 9870, tot: 9879, provincie: 'Friesland' },
  { van: 9880, tot: 9999, provincie: 'Groningen' },
];

export function postcodeNaarProvincie(postcode) {
  const cijfers = parseInt(String(postcode).trim().slice(0, 4), 10);
  if (!Number.isFinite(cijfers) || cijfers < 1000 || cijfers > 9999) return null;
  const match = REEKSEN.find((r) => cijfers >= r.van && cijfers <= r.tot);
  return match ? match.provincie : null;
}

export function dominanteKleur(data) {
  const volgorde = ['donkerrood', 'rood', 'oranje', 'groen'];
  let beste = 'groen';
  let besteWaarde = -1;
  volgorde.forEach((k) => {
    if (data[k] > besteWaarde) {
      besteWaarde = data[k];
      beste = k;
    }
  });
  return beste;
}

function normaliseer(tekst) {
  return String(tekst).trim().toLowerCase().replace(/^'s-/, 's-').replace(/[\s-]+/g, ' ');
}

// Grote(re) Nederlandse plaatsen per provincie, voor de "zoek op plaatsnaam" optie.
// Geen uitputtende lijst van alle 4.000+ Nederlandse woonplaatsen — bij twijfel
// verwijzen we de bezoeker door naar de postcode-optie voor een preciezer resultaat.
const PLAATS_PROVINCIE = {
  Groningen: ['groningen', 'delfzijl', 'winschoten', 'veendam', 'stadskanaal', 'hoogezand', 'appingedam', 'ten boer', 'leek'],
  Friesland: ['leeuwarden', 'sneek', 'drachten', 'heerenveen', 'harlingen', 'dokkum', 'franeker', 'joure', 'bolsward'],
  Drenthe: ['assen', 'emmen', 'hoogeveen', 'meppel', 'coevorden', 'roden', 'beilen', 'zuidlaren'],
  Overijssel: ['zwolle', 'enschede', 'hengelo', 'deventer', 'almelo', 'kampen', 'oldenzaal', 'raalte', 'steenwijk'],
  Flevoland: ['almere', 'lelystad', 'dronten', 'emmeloord', 'urk', 'zeewolde'],
  Gelderland: ['arnhem', 'nijmegen', 'apeldoorn', 'ede', 'zutphen', 'doetinchem', 'harderwijk', 'tiel', 'wageningen', 'winterswijk', 'culemborg', 'barneveld'],
  Utrecht: ['utrecht', 'amersfoort', 'veenendaal', 'nieuwegein', 'zeist', 'woerden', 'houten', 'ijsselstein', 'maarssen'],
  'Noord-Holland': ['amsterdam', 'haarlem', 'zaanstad', 'zaandam', 'alkmaar', 'hilversum', 'haarlemmermeer', 'hoofddorp', 'hoorn', 'purmerend', 'den helder', 'amstelveen', 'bergen', 'heemskerk', 'beverwijk', 'castricum', 'ijmuiden'],
  'Zuid-Holland': ['rotterdam', 'den haag', 's gravenhage', 'leiden', 'dordrecht', 'zoetermeer', 'delft', 'gouda', 'schiedam', 'vlaardingen', 'spijkenisse', 'westland', 'alphen aan den rijn', 'katwijk', 'capelle aan den ijssel', 'leidschendam', 'zoetermeer', 'gorinchem', 'ridderkerk'],
  Zeeland: ['middelburg', 'vlissingen', 'goes', 'terneuzen', 'zierikzee', 'hulst', 'sluis', 'kapelle'],
  'Noord-Brabant': ['eindhoven', 'tilburg', 'breda', 's hertogenbosch', 'den bosch', 'helmond', 'roosendaal', 'oss', 'bergen op zoom', 'oosterhout', 'waalwijk', 'veldhoven'],
  Limburg: ['maastricht', 'venlo', 'sittard', 'heerlen', 'roermond', 'weert', 'kerkrade', 'geleen', 'landgraaf', 'venray'],
};

const PLAATS_LOOKUP = Object.entries(PLAATS_PROVINCIE).reduce((acc, [provincie, plaatsen]) => {
  plaatsen.forEach((p) => { acc[p] = provincie; });
  return acc;
}, {});

export function plaatsNaarProvincie(plaatsnaam) {
  return PLAATS_LOOKUP[normaliseer(plaatsnaam)] || null;
}

function resultaatVoorProvincie(provincie) {
  const data = PROVINCIE_DATA[provincie];
  const kleur = dominanteKleur(data);
  return { provincie, data, kleur, ...KLEUR_INFO[kleur] };
}

export function pfasCheck(postcode) {
  const provincie = postcodeNaarProvincie(postcode);
  if (!provincie) return null;
  return resultaatVoorProvincie(provincie);
}

export function pfasCheckPerPlaats(plaatsnaam) {
  const provincie = plaatsNaarProvincie(plaatsnaam);
  if (!provincie) return null;
  return resultaatVoorProvincie(provincie);
}
