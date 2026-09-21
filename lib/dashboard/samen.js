import { PERIODES, STANDAARD_INSTELLINGEN, addDagen, bereik, bouwOverzicht, eur, getal } from './analyse';

export const KANAAL_NAAM = { google: 'Google Ads', facebook: 'Facebook', overig: 'Overig' };
export const MODELLEN = [
  { id: 'laatste', naam: 'Laatste klik', uitleg: 'Het kanaal waar de bezoeker als laatste op klikte. Zo tellen Google en Facebook zelf.' },
  { id: 'eerste', naam: 'Eerste klik', uitleg: 'Het kanaal dat de bezoeker als eerste bracht.' },
  { id: 'gelijk', naam: 'Gelijk verdeeld', uitleg: 'Elk kanaal in de route krijgt evenveel eer.' },
  { id: 'positie', naam: '40-20-40', uitleg: 'Eerste en laatste kanaal krijgen elk 40%, alles ertussen samen 20%.' },
];

const inRange = (dag, b) => dag >= b.van && dag <= b.tot;

function stappen(l) {
  if (l.journey) return l.journey.split('>').filter(Boolean);
  return l.kanaal ? [l.kanaal] : [];
}

function credit(model, s) {
  const n = s.length;
  const uit = {};
  const voeg = (k, w) => { uit[k] = (uit[k] || 0) + w; };
  if (n === 0) return uit;
  if (model === 'laatste') voeg(s[n - 1], 1);
  else if (model === 'eerste') voeg(s[0], 1);
  else if (model === 'gelijk') s.forEach((k) => voeg(k, 1 / n));
  else if (n === 1) voeg(s[0], 1);
  else if (n === 2) { voeg(s[0], 0.5); voeg(s[1], 0.5); }
  else {
    voeg(s[0], 0.4);
    voeg(s[n - 1], 0.4);
    s.slice(1, -1).forEach((k) => voeg(k, 0.2 / (n - 2)));
  }
  return uit;
}

function mediaan(waarden) {
  if (!waarden.length) return null;
  const s = [...waarden].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

function pearson(x, y) {
  const n = Math.min(x.length, y.length);
  if (n < 10) return null;
  const mx = x.slice(0, n).reduce((a, b) => a + b, 0) / n;
  const my = y.slice(0, n).reduce((a, b) => a + b, 0) / n;
  let sxy = 0; let sxx = 0; let syy = 0;
  for (let i = 0; i < n; i++) {
    sxy += (x[i] - mx) * (y[i] - my);
    sxx += (x[i] - mx) ** 2;
    syy += (y[i] - my) ** 2;
  }
  if (sxx === 0 || syy === 0) return null;
  return sxy / Math.sqrt(sxx * syy);
}

const mooi = (slug) => (slug ? String(slug).replace(/[-_]+/g, ' ').replace(/^./, (c) => c.toUpperCase()) : 'Onbekend');

function telGroepen(leads, kies) {
  const k = new Map();
  leads.forEach((l) => {
    const naam = kies(l);
    if (!naam) return;
    k.set(naam, (k.get(naam) || 0) + 1);
  });
  return [...k.entries()].map(([naam, aantal]) => ({ naam: mooi(naam), aantal })).sort((a, b) => b.aantal - a.aantal).slice(0, 4);
}

function dagSom(rijen, veld) {
  const k = new Map();
  rijen.forEach((r) => k.set(r.day, (k.get(r.day) || 0) + (Number(r[veld]) || 0)));
  return k;
}

function merkLift(data) {
  const nu = data.vandaag;
  const van = addDagen(nu, -59);
  const dagen = [];
  for (let d = van; d <= nu; d = addDagen(d, 1)) dagen.push(d);

  const fb = dagSom(data.facebook.campagnes, 'impressions');
  const merkRijen = data.google.zoekwoorden.filter((r) => /merk/i.test(r.ad_group) || /water[- ]?zuivering/i.test(r.keyword));
  if (merkRijen.length === 0 || fb.size === 0) return null;
  const merk = dagSom(merkRijen, 'clicks');

  const fbReeks = dagen.map((d) => fb.get(d) || 0);
  const merkReeks = dagen.map((d) => merk.get(d) || 0);
  if (fbReeks.filter((v) => v > 0).length < 20) return null;

  let beste = null;
  for (let lag = 0; lag <= 3; lag++) {
    const r = pearson(fbReeks.slice(0, fbReeks.length - lag), merkReeks.slice(lag));
    if (r != null && (!beste || r > beste.r)) beste = { r, lag };
  }
  return { dagen, fbReeks, merkReeks, ...(beste || { r: null, lag: 0 }) };
}

export function bouwSamen(data, periodeId, inst = STANDAARD_INSTELLINGEN) {
  const periode = PERIODES.find((p) => p.id === periodeId) || PERIODES[3];
  const b = bereik(data.vandaag, Math.max(periode.dagen, 7));
  const leads = data.leads.filter((l) => l.type !== 'giveaway' && inRange(l.day, b));

  const metToestemming = leads.filter((l) => l.consent !== false);
  const schaal = metToestemming.length > 0 ? leads.length / metToestemming.length : null;
  const betaald = metToestemming.filter((l) => stappen(l).length > 0);
  const meerdere = betaald.filter((l) => stappen(l).length > 1);
  const gemengd = betaald.filter((l) => { const s = stappen(l); return s.includes('google') && s.includes('facebook'); });

  const betrouwbaarheid = betaald.length >= 30 ? 'goed' : betaald.length >= 10 ? 'beperkt' : 'te-weinig';

  // hoe verdelen de vier modellen de eer
  const kosten = {
    google: data.google.campagnes.filter((r) => inRange(r.day, b)).reduce((t, r) => t + (Number(r.cost) || 0), 0),
    facebook: data.facebook.campagnes.filter((r) => inRange(r.day, b)).reduce((t, r) => t + (Number(r.cost) || 0), 0),
  };
  const kanalen = ['google', 'facebook'];
  const modellen = MODELLEN.map((m) => {
    const som = {};
    betaald.forEach((l) => {
      const c = credit(m.id, stappen(l));
      Object.entries(c).forEach(([k, w]) => { som[k] = (som[k] || 0) + w; });
    });
    const perKanaal = Object.fromEntries(kanalen.map((k) => {
      const geschat = (som[k] || 0) * (schaal || 1);
      return [k, { ruw: som[k] || 0, geschat, cpl: geschat > 0 ? kosten[k] / geschat : null }];
    }));
    return { ...m, perKanaal };
  });

  // wat melden de platformen zelf en wat kwam er echt binnen
  const geclaimd = {
    google: data.google.campagnes.filter((r) => inRange(r.day, b)).reduce((t, r) => t + (Number(r.conversions) || 0), 0),
    facebook: data.facebook.campagnes.filter((r) => inRange(r.day, b)).reduce((t, r) => t + (Number(r.conversions) || 0), 0),
  };
  const geclaimdTotaal = geclaimd.google + geclaimd.facebook;
  const echteKosten = leads.length > 0 ? (kosten.google + kosten.facebook) / leads.length : null;

  // rollen per kanaal
  const rollen = { google: { eerste: 0, laatste: 0, hulp: 0 }, facebook: { eerste: 0, laatste: 0, hulp: 0 } };
  const routes = new Map();
  betaald.forEach((l) => {
    const s = stappen(l);
    routes.set(s.join('>'), (routes.get(s.join('>')) || 0) + 1);
    Object.keys(rollen).forEach((k) => {
      if (s[0] === k) rollen[k].eerste += 1;
      if (s[s.length - 1] === k) rollen[k].laatste += 1;
      if (s.includes(k) && s[s.length - 1] !== k) rollen[k].hulp += 1;
    });
  });
  const routeLijst = [...routes.entries()].map(([journey, aantal]) => ({ journey, aantal, stappen: journey.split('>').length })).sort((x, y) => y.aantal - x.aantal);

  // tijd tot aanvraag
  const dagenLijst = betaald.filter((l) => l.dagen != null).map((l) => l.dagen);
  const dagenMeer = meerdere.filter((l) => l.dagen != null).map((l) => l.dagen);
  const emmers = [
    { naam: 'Zelfde dag', van: 0, tot: 1 },
    { naam: '1 tot 3 dagen', van: 1, tot: 3 },
    { naam: '3 tot 7 dagen', van: 3, tot: 7 },
    { naam: '7 tot 14 dagen', van: 7, tot: 14 },
    { naam: 'Langer dan 14 dagen', van: 14, tot: Infinity },
  ].map((e) => ({ ...e, aantal: dagenLijst.filter((d) => d >= e.van && d < e.tot).length }));

  // welke start- en eindpunten horen bij elkaar
  const eersteDetail = (l) => (l.detail && l.detail[0]) || null;
  const laatsteDetail = (l) => (l.detail && l.detail[l.detail.length - 1]) || null;
  const startpunten = {
    googleNaarFacebook: telGroepen(betaald.filter((l) => { const s = stappen(l); return s[0] === 'google' && s.includes('facebook'); }), (l) => eersteDetail(l)?.a),
    facebookAfronden: telGroepen(betaald.filter((l) => { const s = stappen(l); return s[s.length - 1] === 'facebook' && s.includes('google'); }), (l) => laatsteDetail(l)?.c),
    facebookNaarGoogle: telGroepen(betaald.filter((l) => { const s = stappen(l); return s[0] === 'facebook' && s.includes('google'); }), (l) => eersteDetail(l)?.a),
    googleAfronden: telGroepen(betaald.filter((l) => { const s = stappen(l); return s[s.length - 1] === 'google' && s.includes('facebook'); }), (l) => laatsteDetail(l)?.a),
  };

  const lift = merkLift(data);

  // dataketen: wat is er nodig en wat is al aanwezig
  const googleLeads = leads.filter((l) => l.kanaal === 'google');
  const fbLeads = leads.filter((l) => l.kanaal === 'facebook');
  const checklist = [
    { id: 'toestemming', tekst: 'Genoeg bezoekers geven toestemming voor meten', ok: schaal != null && 1 / schaal >= 0.6, detail: schaal ? `${Math.round((1 / schaal) * 100)}% van je aanvragen is meetbaar` : 'Nog geen aanvragen' },
    { id: 'google-utm', tekst: 'Google Ads-links hebben tags (URL-achtervoegsel)', ok: googleLeads.length > 0 && googleLeads.filter((l) => l.camp).length / googleLeads.length >= 0.8, detail: googleLeads.length ? `${googleLeads.filter((l) => l.camp).length} van ${googleLeads.length} aanvragen via Google heeft een campagnenaam` : 'Nog geen aanvragen via Google' },
    { id: 'fb-utm', tekst: 'Facebook-advertenties hebben tags in de link', ok: fbLeads.length > 0 && fbLeads.filter((l) => l.camp).length / fbLeads.length >= 0.8, detail: fbLeads.length ? `${fbLeads.filter((l) => l.camp).length} van ${fbLeads.length} aanvragen via Facebook heeft een campagnenaam` : 'Nog geen aanvragen via Facebook' },
    { id: 'fb-gekoppeld', tekst: 'Facebook is gekoppeld aan het dashboard', ok: !data.facebook.demo && data.facebook.campagnes.length > 0, detail: data.facebook.demo ? 'Nog voorbeeldcijfers' : 'Gekoppeld' },
    { id: 'google-conv', tekst: 'Google Ads meldt aanvragen als conversie', ok: geclaimd.google > 0, detail: geclaimd.google > 0 ? `${getal(geclaimd.google, 1)} conversies gemeld` : 'Nog geen conversies gemeld: importeer de aanvraag als conversie' },
    { id: 'volume', tekst: 'Minstens 30 aanvragen met bekende route', ok: betaald.length >= 30, detail: `${betaald.length} nu` },
  ];

  const advies = maakAdvies({ modellen, betaald, meerdere, gemengd, dagenMeer, lift, geclaimdTotaal, leads, echteKosten, schaal, betrouwbaarheid, kosten });

  const go = bouwOverzicht(data.google, periodeId, inst);
  const fo = bouwOverzicht(data.facebook, periodeId, inst);
  const dagenPeriode = Math.max(periode.dagen, 7);
  const acties = [
    ...budgetActies({ modellen, kosten, dagen: dagenPeriode, betrouwbaarheid, betaald, lift, inst }),
    ...platformActies({ go, fo, dagenMeer, checklist, betrouwbaarheid, lift }),
  ].sort((a, b) => (a.prio - b.prio) || ((b.kosten || 0) - (a.kosten || 0)));
  const kern = bouwKern(acties, betrouwbaarheid, betaald.length);
  const platformItems = [
    ...go.advies.map((a) => ({ ...a, kanaal: 'google' })),
    ...fo.advies.map((a) => ({ ...a, kanaal: 'facebook' })),
  ];
  const meerPct = pct(meerdere.length, betaald.length);
  const uitleg = bouwUitleg({
    modellen, betaald: betaald.length, meerdere: meerdere.length, aantalMeerPct: meerPct, routeLijst, mediaanDagen: mediaan(dagenLijst),
    mediaanDagenMeer: mediaan(dagenMeer), startpunten, lift, geclaimd, geclaimdTotaal, aantalLeads: leads.length, echteKosten, checklist,
  });

  return {
    periode, bereik: b, aantalLeads: leads.length, betaald: betaald.length, meerdere: meerdere.length, gemengd: gemengd.length,
    dekking: schaal ? 1 / schaal : null, betrouwbaarheid, modellen, kosten, geclaimd, geclaimdTotaal, echteKosten,
    rollen, routeLijst: routeLijst.slice(0, 6), mediaanDagen: mediaan(dagenLijst), mediaanDagenMeer: mediaan(dagenMeer), emmers, startpunten, lift,
    checklist, advies, acties, kern, uitleg, platformItems,
  };
}

function maakAdvies({ modellen, betaald, meerdere, gemengd, dagenMeer, lift, geclaimdTotaal, leads, echteKosten, schaal, betrouwbaarheid, kosten }) {
  const advies = [];
  const laatste = modellen.find((m) => m.id === 'laatste');
  const gelijk = modellen.find((m) => m.id === 'gelijk');

  if (betrouwbaarheid === 'te-weinig') {
    advies.push({ niveau: 'let-op', titel: 'Nog te weinig aanvragen om conclusies te trekken', tekst: `Er zijn ${betaald.length} aanvragen met een bekende route. Vanaf ongeveer 30 worden de verdelingen betrouwbaar. Trek tot die tijd nog geen conclusies en verander geen budgetten op basis van deze pagina.` });
  }

  if (betaald.length >= 5) {
    ['google', 'facebook'].forEach((k) => {
      const l = laatste.perKanaal[k].ruw;
      const g = gelijk.perKanaal[k].ruw;
      if (l < 1) return;
      const naam = KANAAL_NAAM[k];
      if (g / l >= 1.25) {
        advies.push({ niveau: 'goed', titel: `${naam} doet meer dan de laatste klik laat zien`, tekst: `Als je de eer eerlijk verdeelt krijgt ${naam} ${Math.round((g / l - 1) * 100)}% meer aanvragen toegerekend. Zet ${naam} niet uit omdat het op de laatste klik duur lijkt: het brengt mensen binnen die elders converteren.` });
      } else if (l / g >= 1.25) {
        advies.push({ niveau: 'let-op', titel: `${naam} rondt vooral af wat andere kanalen beginnen`, tekst: `${naam} krijgt op de laatste klik ${Math.round((l / g - 1) * 100)}% meer aanvragen dan bij eerlijk verdelen. Meer budget levert daarom minder extra aanvragen op dan de cijfers van het platform doen denken.` });
      }
    });
  }

  if (betaald.length >= 10 && meerdere.length / betaald.length >= 0.2) {
    advies.push({ niveau: 'info', titel: 'Veel mensen hebben beide kanalen nodig', tekst: `${Math.round((meerdere.length / betaald.length) * 100)}% van de aanvragen kwam na klikken op meerdere kanalen (${gemengd.length} via zowel Google als Facebook). Beoordeel Google en Facebook daarom nooit los van elkaar.` });
  }

  const md = mediaan(dagenMeer);
  if (md != null && dagenMeer.length >= 5) {
    advies.push({ niveau: 'info', titel: `Mensen doen er mediaan ${getal(md, 1)} dagen over`, tekst: `Bij bezoekers die meerdere kanalen gebruiken zit gemiddeld ${getal(md, 1)} dagen tussen de eerste klik en de aanvraag. Zet je Facebook-retargeting op minstens ${Math.max(7, Math.ceil(md * 2))} dagen, anders zie je ze te vroeg niet meer.` });
  }

  if (lift && lift.r != null) {
    if (lift.r >= 0.5) advies.push({ niveau: 'goed', titel: 'Facebook lijkt Google-zoekopdrachten op je merknaam te verhogen', tekst: `Als Facebook meer mensen bereikt, zoeken ${lift.lag === 0 ? 'diezelfde dag' : `${lift.lag} ${lift.lag === 1 ? 'dag' : 'dagen'} later`} meer mensen naar jullie naam (verband ${getal(lift.r, 2)}). Facebook werkt dan ook als bekendheid, ook bij mensen die niet klikken. Dit is een aanwijzing, geen bewijs.` });
    else if (lift.r < 0.3) advies.push({ niveau: 'info', titel: 'Geen zichtbaar effect van Facebook op merkzoekopdrachten', tekst: `Het verband is zwak (${getal(lift.r, 2)}). Facebook werkt bij jullie vooral op directe reacties, of het effect is te klein om te meten.` });
    else advies.push({ niveau: 'info', titel: 'Mogelijk effect van Facebook op merkzoekopdrachten', tekst: `Er is een matig verband (${getal(lift.r, 2)}). Test het: zet Facebook 14 dagen op de helft van het budget en kijk of de merkzoekopdrachten in Google dalen.` });
  }

  if (geclaimdTotaal > 0 && leads.length > 0 && geclaimdTotaal / leads.length >= 1.3) {
    advies.push({ niveau: 'let-op', titel: 'Google en Facebook tellen dezelfde aanvragen dubbel', tekst: `Samen melden ze ${getal(geclaimdTotaal, 0)} aanvragen, terwijl er ${leads.length} binnenkwamen. Stuur op je echte kosten per aanvraag (${echteKosten != null ? eur(echteKosten) : 'onbekend'}), niet op wat de platformen zelf claimen.` });
  }

  if (schaal && 1 / schaal < 0.6) {
    advies.push({ niveau: 'let-op', titel: 'De meting dekt maar een deel van je aanvragen', tekst: `Alleen ${Math.round((1 / schaal) * 100)}% van je aanvragen is meetbaar, omdat de rest geen cookies accepteert. De cijfers zijn een schatting: kijk naar de verhoudingen, niet naar de exacte aantallen.` });
  }

  advies.push({ niveau: 'test', titel: 'Snelste manier om het zeker te weten', tekst: 'Zet één kanaal 14 dagen op de helft van het budget en kijk naar het totaal aantal aanvragen op je site, niet naar de platformen. Dat laat zien wat dat kanaal echt toevoegt.' });
  return advies;
}

// ---------- Mijn advies: alles gecombineerd tot concrete acties ----------

function pct(n, totaal) {
  return totaal > 0 ? Math.round((n / totaal) * 100) : 0;
}

function budgetActies({ modellen, kosten, dagen, betrouwbaarheid, betaald, lift, inst }) {
  const uit = [];
  if (betrouwbaarheid === 'te-weinig') {
    uit.push({
      id: 'wacht', prio: 1, kanaal: 'beide', soort: 'wacht', door: 'claude', zekerheid: 'laag',
      titel: 'Verander nog niets aan je budgetten',
      waarom: `Er zijn pas ${betaald.length} aanvragen waarvan ik de route ken. Dat is te weinig om eerlijk te zien wat Google en Facebook elk opleveren. Bij ongeveer 30 aanvragen kan ik dat wel.`,
      actie: 'Ik wacht tot er ongeveer 30 aanvragen met een bekende route zijn en maak dan een advies over je budgetten.',
    });
    return uit;
  }
  const zekerheid = betaald.length >= 60 ? 'hoog' : betaald.length >= 30 ? 'midden' : 'laag';
  ['google', 'facebook'].forEach((k) => {
    const cpls = modellen.map((m) => m.perKanaal[k].cpl).filter((v) => v != null);
    if (!cpls.length) return;
    const best = Math.min(...cpls);
    const worst = Math.max(...cpls);
    const dag = kosten[k] / dagen;
    const naam = KANAAL_NAAM[k];
    const sterkeLift = k === 'facebook' && lift && lift.r != null && lift.r >= 0.5;
    if (worst <= inst.doelCpl) {
      uit.push({
        id: `op-${k}`, prio: 1, kanaal: k, soort: 'budget-op', door: 'claude', zekerheid, kosten: dag,
        titel: `Geef ${naam} 20% meer budget`,
        waarom: `Ook als ik het zo streng mogelijk reken, kost een aanvraag via ${naam} ${eur(worst)}. Dat is minder dan je doel van ${eur(inst.doelCpl, 0)}. Er is dus ruimte om meer uit te geven.`,
        actie: `Ik verhoog het dagbudget van ${naam} met 20%, van gemiddeld ${eur(dag)} naar ongeveer ${eur(dag * 1.2)} per dag. Na 7 dagen kijk ik of de kosten per aanvraag gelijk blijven. Zo niet, dan zet ik het terug.`,
      });
    } else if (best > inst.doelCpl * 1.3 && !sterkeLift) {
      uit.push({
        id: `af-${k}`, prio: 1, kanaal: k, soort: 'budget-af', door: 'claude', zekerheid, kosten: dag,
        titel: `Geef ${naam} 20% minder budget`,
        waarom: `Zelfs als ik het zo gunstig mogelijk reken, kost een aanvraag via ${naam} ${eur(best)}. Dat is veel meer dan je doel van ${eur(inst.doelCpl, 0)}.`,
        actie: `Ik verlaag het dagbudget van ${naam} met 20%, van gemiddeld ${eur(dag)} naar ongeveer ${eur(dag * 0.8)} per dag, en bewaar het geld voor wat beter werkt.`,
      });
    } else if (sterkeLift && best > inst.doelCpl * 1.3) {
      uit.push({
        id: `houd-${k}`, prio: 2, kanaal: k, soort: 'budget-houd', door: 'claude', zekerheid, kosten: dag,
        titel: 'Laat Facebook aan, ook al lijkt het duur',
        waarom: `Op de aanvragen zelf lijkt Facebook duur (${eur(best)} of meer per aanvraag). Maar dagen met veel Facebook-bereik geven daarna meer zoekopdrachten op je naam in Google. Facebook werkt dus ook voor mensen die niet klikken.`,
        actie: 'Ik laat het Facebook-budget staan en meet verder. Ik pas alleen de advertenties aan die geld verliezen.',
      });
    } else {
      uit.push({
        id: `houd-${k}`, prio: 2, kanaal: k, soort: 'budget-houd', door: 'claude', zekerheid, kosten: dag,
        titel: `Laat het budget van ${naam} zoals het is`,
        waarom: `Een aanvraag via ${naam} kost tussen ${eur(best)} en ${eur(worst)}, afhankelijk van hoe je telt. Dat zit rond je doel van ${eur(inst.doelCpl, 0)}. Meer of minder uitgeven is nu niet nodig.`,
        actie: `Ik verander het budget van ${naam} niet, maar ruim wel op wat geld verliest.`,
      });
    }
  });
  return uit;
}

function platformActies({ go, fo, dagenMeer, checklist, betrouwbaarheid, lift }) {
  const uit = [];
  const alle = [
    ...go.advies.map((a) => ({ ...a, kanaal: 'google' })),
    ...fo.advies.map((a) => ({ ...a, kanaal: 'facebook' })),
  ];

  const verliezers = alle.filter((a) => a.niveau === 'slecht' && a.soort !== 'tijd');
  const verspild = go.verspild + fo.verspild + go.uitsluitKosten;
  if (verliezers.length > 0) {
    uit.push({
      id: 'opruimen', prio: 1, kanaal: 'beide', soort: 'opruimen', door: 'claude', zekerheid: 'hoog', kosten: verspild,
      titel: `Ruim ${verliezers.length} dingen op die geld verliezen`,
      waarom: `Hier is samen ${eur(verspild)} aan uitgegeven zonder dat het een aanvraag opleverde. Voorbeelden zijn zoekwoorden, advertenties en zoekopdrachten van mensen die niets willen kopen.`,
      actie: 'Ik zet zoekwoorden en advertenties op pauze en sluit verkeerde zoekopdrachten uit, in Google en in Facebook. Je ziet in de tabbladen Google Ads en Facebook precies welke.',
      items: verliezers,
    });
  }

  const winnaars = alle.filter((a) => a.niveau === 'goed' && a.soort === 'meer');
  if (winnaars.length > 0) {
    uit.push({
      id: 'winnaars', prio: 2, kanaal: 'beide', soort: 'winnaars', door: 'claude', zekerheid: 'midden',
      titel: `Geef ${winnaars.length} winnaars meer ruimte`,
      waarom: 'Deze zoekwoorden en advertenties leveren aanvragen op voor minder dan je doel. Een beetje meer budget of een hoger bod laat ze meer opleveren.',
      actie: 'Ik verhoog bij deze winnaars het bod of het budget met kleine stappen en houd de kosten per aanvraag in de gaten.',
      items: winnaars,
    });
  }

  const tijden = alle.filter((a) => a.soort === 'tijd');
  if (tijden.length > 0) {
    uit.push({
      id: 'tijden', prio: 3, kanaal: 'beide', soort: 'tijden', door: 'claude', zekerheid: 'midden',
      titel: `Pas ${tijden.length} tijdstippen aan`,
      waarom: 'Op sommige momenten van de dag geef je geld uit dat weinig oplevert, en op andere momenten levert hetzelfde geld veel meer op.',
      actie: 'Ik stel in Google Ads een advertentieplanning in en verlaag of verhoog het bod op de genoemde tijden.',
      items: tijden,
    });
  }

  const md = mediaan(dagenMeer);
  if (md != null && dagenMeer.length >= 5) {
    const venster = Math.max(7, Math.ceil(md * 2));
    uit.push({
      id: 'retarget', prio: 2, kanaal: 'facebook', soort: 'retarget', door: 'claude', zekerheid: 'midden',
      titel: `Laat je Facebook-retargeting minstens ${venster} dagen doorlopen`,
      waarom: `De helft van de mensen die beide kanalen gebruikt doet er ${getal(md, 1)} dagen over om aan te vragen. Toon je hen maar 3 dagen, dan verlies je een deel voordat ze zover zijn.`,
      actie: `Ik zet de doelgroep van je retargeting op ${venster} dagen.`,
    });
  }

  const MISSEND = {
    'google-utm': { titel: 'Zet tags in je Google Ads-links', kanaal: 'google', waarom: 'Zonder tags weet ik niet welke Google-advertentiegroep tot een aanvraag leidde. Dan kan ik ook niet zien welke groep Facebook helpt.', actie: 'Ik zet het URL-achtervoegsel in Google Ads (utm_source=google&utm_medium=cpc&utm_campaign=...).', door: 'claude' },
    'fb-utm': { titel: 'Zet tags in je Facebook-advertentielinks', kanaal: 'facebook', waarom: 'Zonder tags herkent de site niet dat een aanvraag van Facebook komt. Dan zie ik ook de route tussen Google en Facebook niet.', actie: 'Ik voeg bij elke Facebook-advertentie de tags toe (utm_source=facebook&utm_medium=cpc&utm_campaign={{campaign.name}}&utm_term={{adset.name}}&utm_content={{ad.name}}).', door: 'claude' },
    'fb-gekoppeld': { titel: 'Koppel Facebook aan het dashboard', kanaal: 'facebook', waarom: 'Zonder koppeling zie ik geen echte Facebook-cijfers en kan ik niets opschalen.', actie: 'Jij zet het toegangstoken in Vercel. Daarna haalt het dashboard de cijfers zelf op en pak ik de rest op.', door: 'jij' },
    'google-conv': { titel: 'Laat Google Ads aanvragen als conversie tellen', kanaal: 'google', waarom: 'Nu weet Google niet welke klikken tot een aanvraag leidden. Daardoor kan het niet slim bieden en zie je geen echte aanvragen per zoekwoord.', actie: 'Ik stel de aanvraag in als conversie in Google Ads.', door: 'claude' },
  };
  checklist.filter((c) => !c.ok && MISSEND[c.id]).slice(0, 3).forEach((c) => {
    uit.push({ id: `meten-${c.id}`, prio: 2, soort: 'meten', zekerheid: 'hoog', ...MISSEND[c.id] });
  });

  if (betrouwbaarheid !== 'te-weinig') {
    uit.push({
      id: 'test', prio: 3, kanaal: 'facebook', soort: 'test', door: 'claude', zekerheid: 'midden',
      titel: 'Test 14 dagen wat Facebook echt toevoegt',
      waarom: lift && lift.r != null && lift.r >= 0.3
        ? 'Het lijkt dat Facebook ook Google-zoekopdrachten op je naam verhoogt. Met een korte test weet je dat zeker.'
        : 'Alleen met een test weet je zeker wat Facebook toevoegt bovenop Google.',
      actie: 'Ik halveer het Facebook-budget 14 dagen en vergelijk het totaal aantal aanvragen op je site (niet wat de platformen claimen). Daarna zet ik het terug of pas ik het aan.',
    });
  }
  return uit;
}

function bouwKern(acties, betrouwbaarheid, betaald) {
  if (betrouwbaarheid === 'te-weinig') {
    return `Ik kan nog niet betrouwbaar adviseren over budgetten: er zijn pas ${betaald} aanvragen met een bekende route. Wat ik wel al kan zeggen staat hieronder. Zodra er ongeveer 30 zijn, geef ik je een echt advies over hoe je Google en Facebook het best verdeelt.`;
  }
  const zinnen = [];
  acties.filter((a) => a.soort.startsWith('budget')).forEach((a) => {
    const naam = a.kanaal === 'google' ? 'Google' : 'Facebook';
    if (a.soort === 'budget-op') zinnen.push(`geef ${naam} meer budget`);
    else if (a.soort === 'budget-af') zinnen.push(`geef ${naam} minder budget`);
    else zinnen.push(`laat ${naam} zoals het is`);
  });
  const opruim = acties.find((a) => a.id === 'opruimen');
  const basis = zinnen.length ? `Mijn advies in het kort: ${zinnen.join(' en ')}.` : 'Mijn advies in het kort staat hieronder.';
  return `${basis}${opruim ? ` Ruim daarnaast op wat geld verliest (${eur(opruim.kosten, 0)}).` : ''} Je hoeft niets in Google of Facebook zelf te doen: druk op de knop onderaan en ik voer het uit.`;
}

function bouwUitleg({ modellen, betaald, meerdere, aantalMeerPct, routeLijst, mediaanDagen, mediaanDagenMeer, startpunten, lift, geclaimd, geclaimdTotaal, aantalLeads, echteKosten, checklist }) {
  const som = (id, k) => modellen.find((m) => m.id === id)?.perKanaal[k].ruw || 0;
  const aandeel = (id, k) => { const g = som(id, 'google'); const f = som(id, 'facebook'); return pct(k === 'google' ? g : f, g + f); };
  const gL = aandeel('laatste', 'google');
  const fL = aandeel('laatste', 'facebook');
  const gG = aandeel('gelijk', 'google');
  const fG = aandeel('gelijk', 'facebook');
  const verschil = fG - fL;
  const routeNaam = (j) => j.split('>').map((k) => KANAAL_NAAM[k] || k).join(' → ');
  const goedeItems = checklist.filter((c) => c.ok).length;
  const eerstMissend = checklist.find((c) => !c.ok);

  return {
    eer: {
      wat: 'Stel: iemand ziet eerst je Google-advertentie, klikt een paar dagen later op je Facebook-advertentie en vraagt dan aan. Welk kanaal heeft die aanvraag verdiend? Daar zijn vier manieren van tellen voor. Zo tellen Google en Facebook zelf alleen de laatste klik.',
      zie: betaald > 0 ? `Tel je alleen de laatste klik, dan krijgt Google ${gL}% en Facebook ${fL}%. Verdeel je het eerlijk, dan krijgt Google ${gG}% en Facebook ${fG}%.` : 'Er zijn nog geen aanvragen met een bekende route.',
      doe: betaald === 0 ? 'Wacht tot er aanvragen binnenkomen.' : Math.abs(verschil) < 5 ? 'Het verschil is klein. Je kunt de cijfers van Google en Facebook dus redelijk vertrouwen.' : verschil > 0 ? 'Facebook doet meer dan het lijkt. Zet Facebook niet uit omdat het bij de laatste klik weinig oplevert. Het brengt ook mensen die later via Google aanvragen.' : 'Google doet meer dan het lijkt. Zet Google niet uit omdat het bij de laatste klik weinig oplevert. Het brengt ook mensen die later via Facebook aanvragen.',
    },
    route: {
      wat: 'Dit zijn de wegen die mensen namen voordat ze aanvroegen. "Google → Facebook" betekent: eerst op een Google-advertentie geklikt, later op een Facebook-advertentie.',
      zie: betaald > 0 ? `${aantalMeerPct}% van de aanvragen (${meerdere}) nam meer dan één kanaal.${routeLijst.find((r) => r.stappen > 1) ? ` De vaakste combinatie van meerdere kanalen is ${routeNaam(routeLijst.find((r) => r.stappen > 1).journey)}.` : ''}` : 'Nog geen routes bekend.',
      doe: 'Kijk niet naar Google en Facebook los van elkaar. Wat je bij het ene uitzet, kan het andere ook raken.',
    },
    tijd: {
      wat: 'Hoeveel dagen zitten er tussen de eerste keer dat iemand op je advertentie klikt en de aanvraag?',
      zie: mediaanDagen != null ? `De helft van de mensen doet er ${getal(mediaanDagen, 1)} dagen of korter over.${mediaanDagenMeer != null ? ` Wie beide kanalen gebruikt doet er mediaan ${getal(mediaanDagenMeer, 1)} dagen over.` : ''}` : 'Nog geen gegevens.',
      doe: mediaanDagenMeer != null ? `Toon je advertenties minstens ${Math.max(7, Math.ceil(mediaanDagenMeer * 2))} dagen aan mensen die je site bezochten. Stop je eerder, dan mis je mensen die nog moeten beslissen.` : 'Hoe langer mensen erover doen, hoe langer je advertenties moeten blijven staan.',
    },
    samenwerking: {
      wat: 'Hier zie je welke advertenties elkaar helpen: waar mensen begonnen en waar ze uiteindelijk aanvroegen.',
      zie: startpunten.googleNaarFacebook[0] || startpunten.facebookAfronden[0]
        ? `${startpunten.googleNaarFacebook[0] ? `Het vaakst begint de route bij Google-groep "${startpunten.googleNaarFacebook[0].naam}".` : ''} ${startpunten.facebookAfronden[0] ? `Facebook rondt het vaakst af via campagne "${startpunten.facebookAfronden[0].naam}".` : ''}`.trim()
        : 'Nog te weinig routes om dit te zien.',
      doe: 'Zet een groep die veel mensen aanlevert niet zomaar uit, ook al maakt Facebook de aanvraag af. Zonder die eerste stap was er misschien geen aanvraag geweest.',
    },
    lift: {
      wat: 'Sommige mensen zien je Facebook-advertentie, klikken niet, en zoeken je later zelf op in Google. Dat kun je meten: zoek je op je bedrijfsnaam, dan ken je je al.',
      zie: lift && lift.r != null ? (lift.r >= 0.5 ? 'De lijnen lopen bijna gelijk. Zijn er dagen met veel Facebook-bereik, dan zoeken daarna ook meer mensen op je naam.' : lift.r >= 0.3 ? 'De lijnen lopen soms gelijk, maar niet duidelijk genoeg om er zeker van te zijn.' : 'De lijnen lopen niet duidelijk gelijk. Je ziet geen effect van Facebook op zoekopdrachten naar je naam.') : 'Er zijn nog niet genoeg dagen met gegevens.',
      doe: lift && lift.r != null && lift.r >= 0.5 ? 'Zie Facebook dus niet alleen als een kanaal voor aanvragen. Het zorgt ook voor bekendheid. Wil je het zeker weten, halveer Facebook twee weken en kijk of de merkzoekopdrachten dalen.' : 'Houd dit in de gaten. Twijfel je, doe dan de test: Facebook twee weken op de helft van het budget.',
    },
    claims: {
      wat: 'Google en Facebook tellen allebei een aanvraag als "van hen" zodra de persoon hun advertentie zag of aanklikte. Daardoor kunnen ze samen meer claimen dan er echt binnenkwam.',
      zie: `Google claimt ${getal(geclaimd.google, 0)} en Facebook ${getal(geclaimd.facebook, 0)}, samen ${getal(geclaimdTotaal, 0)}. Er kwamen echt ${aantalLeads} aanvragen binnen.${geclaimdTotaal > aantalLeads * 1.15 ? ' Ze tellen dus een deel dubbel.' : ' Dat klopt ongeveer, dus er wordt weinig dubbel geteld.'}`,
      doe: `Stuur op je echte kosten per aanvraag${echteKosten != null ? ` (${eur(echteKosten)})` : ''}, niet op wat Google of Facebook zelf zeggen.`,
    },
    checklist: {
      wat: 'Deze pagina is alleen zo goed als de gegevens die erin gaan. Hier zie je wat er klopt en wat nog mist.',
      zie: `${goedeItems} van de ${checklist.length} dingen zijn in orde.`,
      doe: eerstMissend ? `Het belangrijkste dat nog mist: ${eerstMissend.tekst.charAt(0).toLowerCase()}${eerstMissend.tekst.slice(1)}.` : 'Alles is in orde.',
    },
  };
}
