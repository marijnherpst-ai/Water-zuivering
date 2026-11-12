// Waterhardheid per drinkwaterbedrijf, alleen uit officiële publicaties van de
// drinkwaterbedrijven zelf (geraadpleegd 12 november 2026). Geen cijfers van
// vergelijkingssites of verkopers van ontharders.
//
// type:
//   'vast'      één waarde of smalle bandbreedte voor het hele leveringsgebied
//   'bereik'    alleen een bandbreedte voor het hele gebied gepubliceerd
//   'per_plaats' het bedrijf publiceert een tabel per woonplaats (zie lijsten hieronder)
//   'tool'      het bedrijf publiceert het alleen via een eigen postcodecheck
//
// De leveringsgebieden (welk bedrijf levert waar) komen uit de RIVM-dataset
// "Drinkwaterbedrijven 2026" (data.rivm.nl, laag rivm_20260430_drinkwaterbedrijven_2026),
// zie gebieden.json. De woonplaatslijsten van Oasen en Brabant Water gaan voor:
// die zijn actueler dan de kaart (bijv. Woerden: Oasen).

export const GEPUBLICEERD = '2026-11-12';

export const BEDRIJVEN = {
  waternet: {
    naam: 'Waternet',
    gebied: 'Amsterdam, Amstelveen, Diemen, Heemstede, Muiden, Muiderberg en Ouderkerk aan de Amstel',
    type: 'vast',
    min: 7.8,
    max: 7.8,
    toelichting: 'Waternet levert in het hele gebied hetzelfde water: 7,8 °dH (1,40 mmol/l). Sinds 2015, daarvoor was het 8,4 °dH.',
    bron: { titel: 'Waternet: Tap water hardness in and around Amsterdam', url: 'https://www.waternet.nl/en/service-and-contact/tap-water/tap-water-hardness/' },
    checkUrl: 'https://www.waternet.nl/en/service-and-contact/tap-water/tap-water-hardness/',
  },
  pwn: {
    naam: 'PWN',
    gebied: 'Noord-Holland (behalve Amsterdam en omgeving en het Gooi)',
    type: 'vast',
    min: 7.9,
    max: 7.9,
    toelichting: 'PWN levert in heel Noord-Holland water met een hardheid van gemiddeld 7,9 °dH. Per productielocatie kan het iets afwijken.',
    bron: { titel: 'PWN: Er gaat niets boven kraanwater', url: 'https://www.pwn.nl/drinkwater/heerlijk-kraanwater' },
    checkUrl: 'https://www.pwn.nl/drinkwater/heerlijk-kraanwater',
  },
  dunea: {
    naam: 'Dunea',
    gebied: 'Den Haag, Leiden, Zoetermeer, Katwijk en omgeving',
    type: 'vast',
    min: 7.4,
    max: 8.0,
    toelichting: 'Dunea onthardt centraal tot ongeveer 1,4 mmol/l (circa 7,9 °dH). In de kwartaalmetingen ligt de totale hardheid rond 7,4 tot 8,0 °dH.',
    bron: { titel: 'Dunea: waterkwaliteitsrapportages (o.a. Scheveningen, 1e kwartaal 2024)', url: 'https://dunea.nl/-/media/bestanden/home/drinkwater/waterkwaliteitsrapportages/2024-rapportages/scheveningen-1e-kw-2024-verzendfile.ashx' },
    checkUrl: 'https://www.dunea.nl/drinkwater/waterkwaliteit-en-samenstelling',
  },
  wmd: {
    naam: 'WMD Drents Drinkwater',
    gebied: 'Drenthe',
    type: 'vast',
    min: 8,
    max: 8,
    toelichting: 'In het grootste deel van Drenthe is het drinkwater ongeveer 8 °dH: zacht tot gemiddeld. WMD onthardt tot ongeveer 8 °dH.',
    bron: { titel: 'WMD: hardheid van het drinkwater', url: 'https://www.wmd.nl/hardheid' },
    checkUrl: 'https://wmd.nl/drinkwater/waterhardheid/',
  },
  'waterbedrijf-groningen': {
    naam: 'Waterbedrijf Groningen',
    gebied: 'provincie Groningen',
    type: 'bereik',
    min: 6,
    max: 12.5,
    toelichting: 'In de provincie Groningen varieert de hardheid van 6 °dH tot 12,5 °dH, afhankelijk van de productielocatie die jouw straat levert.',
    bron: { titel: 'Waterbedrijf Groningen: hardheid van drinkwater', url: 'https://waterbedrijfgroningen.nl/over-drinkwater/hardheid-van-drinkwater/' },
    checkUrl: 'https://waterbedrijfgroningen.nl/over-drinkwater/hardheid-van-drinkwater/',
  },
  oasen: {
    naam: 'Oasen',
    gebied: 'Groene Hart, Alblasserwaard en Drechtsteden (deels)',
    type: 'per_plaats',
    toelichting: 'Oasen publiceert de hardheid per woonplaats en werkt die tabel elk kwartaal bij. Het water van Oasen is overal zacht tot gemiddeld.',
    bron: { titel: 'Oasen: waterhardheid en samenstelling per woonplaats', url: 'https://www.oasen.nl/alles-over-drinkwater/waterkwaliteit/waterhardheid-en-samenstelling' },
    checkUrl: 'https://www.oasen.nl/alles-over-drinkwater/waterkwaliteit/waterhardheid-en-samenstelling',
  },
  'brabant-water': {
    naam: 'Brabant Water',
    gebied: 'Noord-Brabant',
    type: 'per_plaats',
    toelichting: 'Brabant Water publiceert de hardheid per woonplaats, vaak als bandbreedte omdat een plaats water van meerdere productielocaties kan krijgen. Het water is maximaal 11,2 °dH.',
    bron: { titel: 'Brabant Water: waterhardheid per woonplaats', url: 'https://www.brabantwater.nl/drinkwater/waterkwaliteit-en-hardheid/waterhardheid' },
    checkUrl: 'https://www.brabantwater.nl/drinkwater/waterkwaliteit-en-hardheid/waterhardheid',
  },
  vitens: {
    naam: 'Vitens',
    gebied: 'Utrecht, Gelderland, Overijssel, Flevoland, Friesland en een deel van Noord-Holland en Drenthe',
    type: 'tool',
    toelichting: 'Vitens wint water op veel verschillende plekken, daardoor verschilt de hardheid per pompstation. Vitens publiceert de exacte waarde alleen per postcode.',
    bron: { titel: 'Vitens: drinkwater uit lokale bron (postcodecheck)', url: 'https://www.vitens.nl/over-water/hardheid-water' },
    checkUrl: 'https://www.vitens.nl/over-water/hardheid-water',
  },
  evides: {
    naam: 'Evides Waterbedrijf',
    gebied: 'Rotterdam, Dordrecht, Delft, Westland en Zeeland',
    type: 'tool',
    toelichting: 'Evides geeft aan dat de hardheid per productiebedrijf en per bron verschilt, en publiceert de exacte waarde per postcode.',
    bron: { titel: 'Evides: uw drinkwater (postcodecheck waterhardheid)', url: 'https://www.evides.nl/uw-drinkwater' },
    checkUrl: 'https://www.evides.nl/uw-drinkwater',
  },
  wml: {
    naam: 'WML Limburgs Drinkwater',
    gebied: 'Limburg',
    type: 'tool',
    toelichting: 'WML onthardt in een viertal onthardingsfabrieken, waardoor het water in Limburg zachter is geworden. De exacte waarde zoek je op met postcode en huisnummer bij WML.',
    bron: { titel: 'WML: waterdruk en hardheid', url: 'https://www.wml.nl/alles-over-water/waterdruk-en-hardheid' },
    checkUrl: 'https://www.wml.nl/alles-over-water/waterdruk-en-hardheid',
  },
};

// Woonplaatsen waar Waternet levert (bron: Waternet, zie boven).
export const WATERNET_PLAATSEN = ['Amsterdam', 'Amstelveen', 'Diemen', 'Heemstede', 'Muiden', 'Muiderberg', 'Ouderkerk aan de Amstel'];

// Oasen: woonplaats | gemeente | °dH (tabel op oasen.nl, geraadpleegd 12-11-2026)
export const OASEN = `Aardam|Nieuwkoop|6.2
Aarlanderveen (noorden)|Alphen aan den Rijn|7.0
Aarlanderveen (zuiden, vanaf Dorpstraat)|Alphen aan den Rijn|6.2
Acquoy|Geldermalsen|7.2
Alblasserdam|Alblasserdam|6.3
Alphen aan den Rijn|Alphen aan den Rijn|7.0
Ameide|Vijfheerenlanden|7.2
Ammerstol|Krimpenerwaard|6.7
Arkel|Molenlanden|7.2
Benthuizen|Alphen aan den Rijn|7.0
Bergambacht|Krimpenerwaard|6.7
Berkenwoude|Krimpenerwaard|6.7
Bleskensgraaf|Molenlanden|7.2
Bodegraven (noord van spoor)|Bodegraven-Reeuwijk|6.2
Bodegraven (zuid van spoor)|Bodegraven-Reeuwijk|6.7
Boskoop|Alphen aan den Rijn|6.7
Brandwijk|Molenlanden|7.2
Culemborg|Culemborg|7.2
Dalem|Gorinchem|7.2
De Hoef|Nieuwkoop|6.2
Driebruggen|Bodegraven-Reeuwijk|6.2
Everdingen|Vijfheerenlanden|7.2
Giessenburg|Molenlanden|7.2
Gorinchem|Gorinchem|7.2
Gouda|Gouda|6.7
Gouderak|Krimpenerwaard|6.7
Goudriaan|Molenlanden|7.2
Groot-Ammers|Molenlanden|7.2
Haastrecht|Krimpenerwaard|6.7
Hagestein|Vijfheerenlanden|7.2
Hardinxveld-Giessendam|Hardinxveld-Giessendam|7.2
Hazerswoude (Dorp en Rijndijk)|Alphen aan den Rijn|7.0
Hei- en Boeicop|Vijfheerenlanden|7.2
Hendrik-Ido-Ambacht (noord)|Hendrik-Ido-Ambacht|8.7
Hendrik-Ido-Ambacht (zuid)|Hendrik-Ido-Ambacht|8.2
Hoef en Haag|Vijfheerenlanden|7.2
Hoogblokland|Molenlanden|7.2
Hoogmade|Kaag en Braassem|7.0
Hoornaar|Molenlanden|7.2
Kamerik|Woerden|6.2
Kedichem|Vijfheerenlanden|7.2
Kinderdijk|Molenlanden|6.3
Korteraar|Nieuwkoop|6.2
Koudekerk aan de Rijn|Alphen aan den Rijn|7.0
Krimpen aan de Lek|Krimpenerwaard|6.6
Krimpen aan den IJssel|Krimpen aan den IJssel|6.6
Langeraar|Nieuwkoop|6.2
Langerak|Molenlanden|7.2
Leerbroek|Vijfheerenlanden|7.2
Leerdam|Vijfheerenlanden|7.2
Leiderdorp|Leiderdorp|7.0
Leimuiden|Kaag en Braassem|7.0
Lekkerkerk|Krimpenerwaard|6.6
Lexmond|Vijfheerenlanden|7.2
Meerkerk|Vijfheerenlanden|7.2
Molenaarsgraaf|Molenlanden|7.2
Moordrecht|Zuidplas|6.7
Nieuwe Wetering|Kaag en Braassem|7.0
Nieuwerbrug|Bodegraven-Reeuwijk|6.2
Nieuwkoop|Nieuwkoop|6.2
Nieuwland|Vijfheerenlanden|7.2
Nieuw-Lekkerland|Molenlanden|7.2
Nieuwpoort|Molenlanden|7.2
Nieuwveen|Nieuwkoop|6.2
Noordeloos|Molenlanden|7.2
Noorden|Nieuwkoop|6.2
Oosterwijk|Vijfheerenlanden|7.2
Ottoland|Molenlanden|7.2
Oud Ade|Kaag en Braassem|7.0
Oud Alblas|Molenlanden|7.2
Oude Wetering|Kaag en Braassem|7.0
Ouderkerk aan den IJssel|Krimpenerwaard|6.6
Oudewater|Oudewater|6.7
Papendrecht|Papendrecht|6.3
Papenveer|Nieuwkoop|6.2
Reeuwijk (Brug en Dorp)|Bodegraven-Reeuwijk|6.7
Ridderkerk|Ridderkerk|8.7
Rijnsaterwoude|Kaag en Braassem|7.0
Rijpwetering|Kaag en Braassem|7.0
Roelofarendsveen|Kaag en Braassem|7.0
Schelluinen|Molenlanden|7.2
Schoonhoven|Krimpenerwaard|6.7
Schoonrewoerd|Vijfheerenlanden|7.2
Sliedrecht|Sliedrecht|7.2
Stolwijk|Krimpenerwaard|6.7
Streefkerk|Molenlanden|7.2
Ter Aar|Nieuwkoop|7.0
Tienhoven|Vijfheerenlanden|7.2
Vianen|Vijfheerenlanden|7.2
Vlist|Krimpenerwaard|6.7
Vrouwenakker|Nieuwkoop|6.2
Vuren|Lingewaal|7.2
Waal|Molenlanden|7.2
Waarder|Bodegraven-Reeuwijk|6.2
Waddinxveen|Waddinxveen|6.7
Warmond|Teylingen|7.0
Wijngaarden|Molenlanden|7.2
Woerden|Woerden|6.2
Woerdense Verlaat|Nieuwkoop|6.2
Woubrugge|Kaag en Braassem|7.0
Zederik|Vijfheerenlanden|7.2
Zegveld|Woerden|6.2
Zevenhoven|Nieuwkoop|6.2
Zijderveld|Vijfheerenlanden|7.2
Zoetermeer (Slootweg)|Zoetermeer|7.0
Zoeterwoude (Dorp en Rijndijk)|Zoeterwoude|7.0
Zwammerdam|Alphen aan den Rijn|7.0
Zwijndrecht|Zwijndrecht|8.2`;

// Brabant Water: woonplaats | min °dH | max °dH (pagina per woonplaats op brabantwater.nl, geraadpleegd 12-11-2026)
export const BRABANT_WATER = `'s-Hertogenbosch|7.17|10.02
Aalst|5.77|5.77
Aarle-Rixtel|8.40|10.81
Acht|5.77|5.88
Achtmaal|8.12|8.12
Almkerk|10.47|10.47
Alphen|7.73|9.74
Andel|10.47|10.47
Anna Jacobapolder|8.12|8.23
Asten|8.57|10.47
Baarle-Hertog|7.73|9.74
Baarle-Nassau|7.73|9.74
Baarschot|5.49|9.97
Babyloniënbroek|10.47|10.47
Bakel|8.12|10.81
Bavel|10.36|10.36
Beek en Donk|8.12|8.40
Beers|7.95|8.40
Bergeijk|5.60|9.97
Bergen op Zoom|8.12|9.52
Berghem|8.46|8.46
Berkel-Enschot|6.61|6.61
Berlicum|10.02|10.02
Best|8.12|9.97
Beugen|7.95|10.81
Biest-Houtakker|5.49|9.97
Biezenmortel|6.61|6.61
Bladel|5.60|9.97
Boekel|7.95|7.95
Boerdonk|8.12|8.40
Bokhoven|10.02|10.02
Borkel en Schaft|5.60|5.77
Boskant|8.12|8.23
Bosschenhoofd|8.12|8.12
Boxmeer|7.95|10.81
Boxtel|6.61|8.23
Breda|7.56|10.36
Breugel|5.77|8.12
Broekhoven|5.60|9.97
Budel|6.55|6.55
Budel-Dorplein|6.55|6.55
Budel-Schoot|6.55|6.55
Castelre|9.74|9.74
Casteren|9.97|9.97
Chaam|9.74|9.74
Cromvoirt|6.61|6.61
Cuijk|7.95|8.40
De Heen|8.12|8.23
De Moer|7.73|7.73
De Mortel|8.12|10.81
Demen|7.78|8.46
Den Dungen|8.23|8.23
Den Hout|7.56|7.56
Deurne|10.47|10.47
Deursen-Dennenburg|7.78|8.46
Dieden|7.78|8.46
Diessen|5.49|9.97
Dinteloord|8.12|8.12
Dinther|7.78|8.23
Doeveren|10.47|10.47
Dommelen|5.77|5.77
Dongen|7.56|7.56
Dorst|10.36|10.36
Drimmelen|7.56|7.56
Drongelen|10.47|10.47
Drunen|6.61|7.17
Duizel|5.60|9.97
Dussen|10.47|10.47
Eerde|7.95|8.23
Eersel|5.60|9.97
Eethen|10.47|10.47
Eindhoven|5.77|5.88
Elsendorp|7.95|8.12
Elshout|6.61|7.17
Empel|10.02|10.02
Engelen|10.02|10.02
Erp|7.95|7.95
Esbeek|5.49|9.97
Esch|6.61|6.61
Escharen|7.78|8.46
Etten-Leur|8.12|10.36
Fijnaart|8.12|8.12
Galder|9.74|10.36
Gassel|7.95|7.95
Gastel|6.55|6.55
Geertruidenberg|7.56|7.56
Geffen|7.78|8.46
Geldrop|5.77|5.77
Gemert|8.12|8.40
Gemonde|8.23|8.23
Genderen|10.47|10.47
Gerwen|5.77|8.40
Giersbergen|6.61|6.61
Giessen|10.47|10.47
Gilze|9.74|9.74
Goirle|7.73|7.73
Grave|7.78|8.46
Groeningen|7.95|10.81
Haaren|6.61|6.61
Haarsteeg|7.17|7.17
Haghorst|5.49|9.97
Handel|7.95|7.95
Hank|10.47|10.47
Hapert|5.60|9.97
Haps|7.95|8.40
Haren|7.78|8.46
Hedikhuizen|10.47|10.47
Heerle|8.12|8.23
Heesbeen|10.47|10.47
Heesch|7.78|8.46
Heeswijk-Dinther|7.78|8.23
Heeze|6.55|8.57
Heijningen|8.12|8.12
Helenaveen|8.57|10.47
Helmond|10.81|10.81
Helvoirt|6.61|6.61
Herpen|7.78|8.46
Herpt|10.47|10.47
Heukelom|6.61|6.61
Heusden|10.47|10.47
Heusden (Asten)|8.57|10.47
Hilvarenbeek|5.49|9.97
Hoeven|8.12|8.12
Holthees|7.95|10.81
Hooge Mierde|9.97|9.97
Hooge Zwaluwe|7.56|7.56
Hoogeloon|9.97|9.97
Huisseling|7.78|8.46
Hulsel|9.97|9.97
Hulten|7.56|7.56
Kaatsheuvel|7.56|10.47
Katwijk|7.95|8.40
Keent|7.78|8.46
Keldonk|7.95|8.23
Kessel|7.78|8.46
Klein-Zundert|8.12|8.12
Klundert|8.12|10.36
Knegsel|9.97|9.97
Kruisland|8.12|8.23
Lage Mierde|9.97|9.97
Lage Zwaluwe|7.56|8.12
Landhorst|7.95|7.95
Langenboom|7.95|7.95
Langeweg|8.12|10.36
Ledeacker|7.95|10.81
Leende|6.55|8.57
Lennisheuvel|5.49|6.61
Liempde|8.23|8.23
Lierop|8.57|10.47
Lieshout|8.12|8.40
Liessel|10.47|10.47
Linden|7.95|8.40
Lith|7.78|8.46
Lithoijen|7.78|8.46
Loon op Zand|7.73|7.73
Loosbroek|7.78|7.78
Luyksgestel|5.60|9.97
Maarheeze|6.55|6.55
Maashees|7.95|10.81
Maaskantje|8.23|8.23
Macharen|7.78|8.46
Made|7.56|7.56
Maren-Kessel|7.78|8.46
Mariaheide|7.95|7.95
Mariahout|7.95|8.12
Megen|7.78|8.46
Meeuwen|10.47|10.47
Middelbeers|5.49|9.97
Middelrode|10.02|10.02
Mierlo|10.81|10.81
Milheeze|8.40|10.81
Mill|7.95|7.95
Moerdijk|8.12|10.36
Moergestel|5.49|9.97
Moerstraten|8.12|8.23
Molenschot|9.74|9.74
Nederweert|8.57|8.57
Nederwetten|5.77|5.77
Neerkant|8.57|10.47
Neerloon|7.78|8.46
Netersel|9.97|9.97
Nieuw-Vossemeer|8.12|8.23
Nieuwendijk|10.47|10.47
Nieuwkuijk|7.17|7.17
Nijnsel|8.12|8.23
Nispen|10.08|10.08
Nistelrode|7.78|7.78
Noordhoek|8.12|10.36
Nuenen|5.77|5.77
Nuland|10.02|10.02
Odiliapeel|7.95|7.95
Oeffelt|7.95|10.81
Oerle|5.77|5.88
Oijen|7.78|8.46
Oirschot|5.49|9.97
Oisterwijk|5.49|6.61
Olland|8.23|8.23
Ommel|10.47|10.47
Oostelbeers|5.49|9.97
Oosterhout|7.56|7.56
Oploo|7.95|10.81
Ospel|8.57|8.57
Oss|7.78|8.46
Oud Gastel|8.12|8.12
Oudheusden|10.47|10.47
Oudemolen|8.12|8.12
Oudenbosch|8.12|8.12
Oudendijk|10.47|10.47
Overlangel|7.78|8.46
Overloon|7.95|10.81
Prinsenbeek|7.56|10.36
Raamsdonk|7.56|7.56
Raamsdonksveer|7.56|7.56
Ravenstein|7.78|8.46
Reek|7.78|8.46
Reusel|9.97|9.97
Riel|7.73|7.73
Riethoven|5.60|9.97
Rijen|7.56|7.56
Rijkevoort|7.95|10.81
Rijsbergen|8.12|8.12
Rijswijk|10.47|10.47
Rips|8.12|8.40
Roosendaal|10.08|10.08
Rosmalen|10.02|10.02
Rucphen|8.12|8.12
's Gravenmoer|7.56|7.56
Sambeek|7.95|10.81
Schaijk|7.78|7.78
Schijf|8.12|8.12
Schijndel|8.23|8.23
Sint Agatha|7.95|8.40
Sint Anthonis|7.95|10.81
Sint Hubert|7.95|7.95
Sint-Oedenrode|8.12|8.23
Sint Philipsland|8.12|8.23
Sint Willebrord|8.12|8.12
Sint-Michielsgestel|8.23|8.23
Sleeuwijk|10.47|10.47
Soerendonk|6.55|6.55
Someren|8.57|10.47
Son en Breugel|5.77|8.12
Spoordonk|5.49|9.97
Sprang-Capelle|7.56|10.47
Sprundel|8.12|8.12
Stampersgat|8.12|8.12
Standdaarbuiten|8.12|8.12
Steenbergen|8.12|8.23
Steensel|5.60|9.97
Sterksel|6.55|8.57
Stevensbeek|7.95|10.81
Stiphout|10.81|10.81
Teeffelen|7.78|8.46
Terheijden|7.56|10.36
Teteringen|7.56|10.36
Tilburg|7.73|7.73
Uden|7.78|7.95
Udenhout|6.61|6.61
Uitwijk|10.47|10.47
Ulicoten|7.73|9.74
Ulvenhout|9.74|10.36
Uppel|10.47|10.47
Valkenswaard|5.77|5.77
Veen|10.47|10.47
Veghel|7.95|8.23
Veldhoven|5.77|5.88
Velp|7.78|8.46
Venhorst|7.95|7.95
Vessem|9.97|9.97
Vianen|7.95|8.40
Vierlingsbeek|7.95|10.81
Vinkel|7.78|7.78
Vlierden|10.47|10.47
Vlijmen|7.17|7.17
Volkel|7.95|7.95
Vorstenbosch|7.78|7.78
Vortum-Mullem|7.95|10.81
Vught|6.61|6.61
Waalre|5.77|5.77
Waalwijk|6.61|7.17
Waardhuizen|10.47|10.47
Wagenberg|7.56|7.56
Walik|5.60|9.97
Wanroij|7.95|7.95
Waspik|7.56|7.56
Weebosch|5.60|9.97
Welberg|8.12|8.23
Werkendam|10.47|10.47
Wernhout|8.12|8.12
Westerbeek|7.95|10.81
Westerhoven|5.60|9.97
Wijk en Aalburg|10.47|10.47
Wilbertoord|7.95|7.95
Willemstad|8.12|8.12
Wintelre|9.97|9.97
Woudrichem|10.47|10.47
Wouw|8.12|8.23
Wouwse Plantage|8.12|8.23
Zeeland|7.78|7.78
Zegge|8.12|8.12
Zeilberg|10.47|10.47
Zevenbergen|8.12|10.36
Zevenbergschen Hoek|8.12|10.36
Zijtaart|7.95|7.95
Zundert|8.12|8.12`;

// Classificatie zoals Waterbedrijf Groningen die hanteert (°dH).
export const KLASSEN = [
  { tot: 4, label: 'Zeer zacht', kleur: '#2E86C1' },
  { tot: 8, label: 'Zacht', kleur: '#3DA35D' },
  { tot: 12, label: 'Gemiddeld', kleur: '#E39A2D' },
  { tot: 18, label: 'Vrij hard', kleur: '#D64545' },
  { tot: 99, label: 'Hard', kleur: '#8B1E1E' },
];

export function klasse(dh) {
  return KLASSEN.find((k) => dh < k.tot) || KLASSEN[KLASSEN.length - 1];
}

// 1 mmol/l = 5,6 °dH = 10 °fH
export const naarMmol = (dh) => Math.round((dh / 5.6) * 100) / 100;
export const naarFrans = (dh) => Math.round((dh / 0.56) * 10) / 10;
