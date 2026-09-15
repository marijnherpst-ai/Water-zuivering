// Grove routering: welk waterbedrijf bedient welke gemeente/provincie.
// Voor de 3 bedrijven met live data (Dunea, PWN, Waterbedrijf Groningen) wordt
// dit alleen gebruikt om de juiste bron te kiezen — de postcode/huisnummer-match
// zelf gebeurt daarna op de echte, actuele data van dat bedrijf. Voor de rest
// van Nederland is er (nog) geen eigen bron te vinden zonder waterstoring.nl
// te gebruiken, dus daar tonen we een linkje naar het eigen waterbedrijf.

const DUNEA_GEMEENTEN = new Set([
  'Den Haag', 'Delft', 'Rijswijk', 'Zoetermeer', 'Leidschendam-Voorburg',
  'Wassenaar', 'Pijnacker-Nootdorp', 'Midden-Delfland', 'Westland', 'Katwijk', 'Voorschoten',
]);

// Amsterdam/Gooi e.o. wordt bediend door Waternet, niet PWN — voor de rest van
// Noord-Holland is PWN de aangewezen partij (en daar hebben we live data van).
const WATERNET_GEMEENTEN = new Set([
  'Amsterdam', 'Amstelveen', 'Diemen', 'Ouder-Amstel', 'Weesp',
  'Gooise Meren', 'Hilversum', 'Huizen', 'Blaricum', 'Laren', 'Wijdemeren',
]);

const OASEN_GEMEENTEN = new Set([
  'Gouda', 'Waddinxveen', 'Krimpenerwaard', 'Bodegraven-Reeuwijk', 'Zuidplas', 'Woerden',
]);

const PROVINCIE_FALLBACK = {
  'Fryslân': { naam: 'Vitens', url: 'https://www.vitens.nl/service/faq-actuele-storingen-en-werkzaamheden' },
  'Friesland': { naam: 'Vitens', url: 'https://www.vitens.nl/service/faq-actuele-storingen-en-werkzaamheden' },
  'Drenthe': { naam: 'WMD', url: 'https://www.wmd.nl/klantenservice/storingen/' },
  'Overijssel': { naam: 'Vitens', url: 'https://www.vitens.nl/service/faq-actuele-storingen-en-werkzaamheden' },
  'Flevoland': { naam: 'Vitens', url: 'https://www.vitens.nl/service/faq-actuele-storingen-en-werkzaamheden' },
  'Gelderland': { naam: 'Vitens', url: 'https://www.vitens.nl/service/faq-actuele-storingen-en-werkzaamheden' },
  'Utrecht': { naam: 'Vitens', url: 'https://www.vitens.nl/service/faq-actuele-storingen-en-werkzaamheden' },
  'Zeeland': { naam: 'Evides', url: 'https://www.evides.nl/storing-onderhoud' },
  'Noord-Brabant': { naam: 'Brabant Water', url: 'https://www.brabantwater.nl/storingen-en-werkzaamheden' },
  'Limburg': { naam: 'WML', url: 'https://www.wml.nl/thuis/veelgestelde-vragen/storing' },
};

export function resolveProvider({ gemeente, provincie }) {
  if (DUNEA_GEMEENTEN.has(gemeente)) {
    return { key: 'dunea', naam: 'Dunea', live: true };
  }
  if (provincie === 'Groningen') {
    return { key: 'groningen', naam: 'Waterbedrijf Groningen', live: true };
  }
  if (provincie === 'Noord-Holland') {
    if (WATERNET_GEMEENTEN.has(gemeente)) {
      return { key: 'waternet', naam: 'Waternet', live: true };
    }
    return { key: 'pwn', naam: 'PWN', live: true };
  }
  if (provincie === 'Zuid-Holland') {
    if (OASEN_GEMEENTEN.has(gemeente)) {
      return { key: 'linkout', naam: 'Oasen', url: 'https://www.oasen.nl/storingen-en-werkzaamheden', live: false };
    }
    return { key: 'linkout', naam: 'Evides', url: 'https://www.evides.nl/storing-onderhoud', live: false };
  }

  const fallback = PROVINCIE_FALLBACK[provincie];
  if (fallback) {
    return { key: 'linkout', naam: fallback.naam, url: fallback.url, live: false };
  }

  return null;
}
