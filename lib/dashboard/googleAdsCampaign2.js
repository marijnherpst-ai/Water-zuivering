import 'server-only';
import { gaqlMutate, CUSTOMER_ID } from './googleAdsApi';

const BASE = 'https://www.water-zuivering.nl';

const AD_GROUPS = [
  {
    name: 'Osmose',
    finalUrl: `${BASE}/osmose-waterfilter`,
    keywords: ['osmose', 'osmose filter', 'omgekeerde osmose filter'],
    headlines: [
      'Osmose Waterfilter Systeem',
      'Omgekeerde Osmose Filter',
      'Schoon Water door Osmose',
      'Osmose Systeem Kopen',
      'Gratis Advies op Maat',
      'Direct Leverbaar',
      'Vraag Nu Offerte Aan',
      'Vakkundig Geinstalleerd',
      'Kalkvrij en Puur Water',
      'Bekijk Onze Osmosefilters',
      'Waterzuivering Specialist',
      'Betrouwbaar en Snel',
      'Voor Elk Huishouden',
      'Persoonlijk Advies',
      'Snelle Installatie',
    ],
    descriptions: [
      'Ontdek ons omgekeerde-osmosesysteem voor kraakhelder drinkwater. Persoonlijk advies.',
      'Osmosewaterfilter met vakkundige installatie thuis. Vraag vrijblijvend een offerte aan.',
      'Puur en kalkvrij drinkwater direct uit de kraan. Snel geleverd en professioneel geplaatst.',
      'Specialist in osmose waterfiltersystemen voor particulieren. Betrouwbaar en snel geregeld.',
    ],
  },
  {
    name: 'Waterzuivering Thuis',
    finalUrl: `${BASE}/waterzuivering-voor-thuis`,
    keywords: ['water zuivering thuis', 'water zuiveren thuis'],
    headlines: [
      'Water Zuivering voor Thuis',
      'Zelf Water Zuiveren Thuis',
      'Schoon Drinkwater Altijd',
      'Waterzuivering Specialist',
      'Gratis Advies op Maat',
      'Direct Leverbaar',
      'Vraag Nu Offerte Aan',
      'Vakkundig Geinstalleerd',
      'Kalkvrij en Schoon Water',
      'Bekijk Onze Filters',
      'Snel en Vakkundig',
      'Betrouwbare Waterfilter',
      'Voor Elk Huishouden',
      'Persoonlijk Advies',
      'Nu Snel Geregeld',
    ],
    descriptions: [
      'Water zuiveren thuis met een systeem op maat. Persoonlijk advies en snelle installatie.',
      'Ontdek hoe u thuis eenvoudig schoon drinkwater krijgt. Vraag vrijblijvend een offerte aan.',
      'Waterzuivering voor elk huishouden. Vakkundig geplaatst en snel geleverd.',
      'Specialist in waterzuivering voor thuis. Betrouwbare filters, persoonlijk advies.',
    ],
  },
  {
    name: 'Water Filtration',
    finalUrl: `${BASE}/waterfiltersysteem`,
    keywords: ['water filtration', 'water filtration system', 'drinking water filter'],
    headlines: [
      'Water Filtration System',
      'Drinking Water Filter',
      'Clean Water at Home',
      'Waterzuivering Specialist',
      'Gratis Advies op Maat',
      'Direct Leverbaar',
      'Vraag Nu Offerte Aan',
      'Vakkundig Geinstalleerd',
      'Kalkvrij en Schoon Water',
      'Bekijk Onze Filters',
      'Snel en Vakkundig',
      'Betrouwbare Waterfilter',
      'Voor Elk Huishouden',
      'Persoonlijk Advies',
      'Nu Snel Geregeld',
    ],
    descriptions: [
      'Professioneel waterfiltersysteem voor thuis. Schoon drinkwater, vakkundig geinstalleerd.',
      'Ontdek ons drinkwaterfiltersysteem met persoonlijk advies en snelle levering.',
      'Kalkvrij en puur water direct uit de kraan. Betrouwbaar en snel geregeld.',
      'Specialist in waterfiltersystemen voor particulieren. Vraag een offerte aan.',
    ],
  },
];

const SITELINKS = [
  { text: 'Onze Waterfilters', desc1: 'Bekijk alle systemen', desc2: 'Direct leverbaar', url: `${BASE}/winkel` },
  { text: 'Gratis Advies', desc1: 'Persoonlijk en vrijblijvend', desc2: 'Snel contact', url: `${BASE}/contact` },
  { text: 'Klantreviews', desc1: 'Ervaringen van klanten', desc2: 'Betrouwbaar en getest', url: `${BASE}/reviews` },
  { text: 'Osmose Waterfilters', desc1: 'Kraakhelder drinkwater', desc2: 'Vakkundig geplaatst', url: `${BASE}/osmose-waterfilter` },
];

const CALLOUTS = ['Vakkundige Installatie', 'Persoonlijk Advies', 'Snelle Levering', 'Betrouwbare Specialist'];

const SNIPPET_VALUES = ['Osmosesystemen', 'Kraanwaterfilters', 'Waterzuiveraars', 'Installatieservice'];

function assertLen(items, max, label) {
  items.forEach((t) => {
    if (t.length > max) throw new Error(`${label} te lang (${t.length}/${max}): "${t}"`);
  });
}

export async function testMinimaleCampagne() {
  const cid = CUSTOMER_ID;

  const budgetOps = [{ campaignBudgetOperation: { create: {
    resourceName: `customers/${cid}/campaignBudgets/-1`,
    name: `Water-zuivering - test budget ${Date.now()}`,
    amountMicros: '10000000',
    deliveryMethod: 'STANDARD',
  } } }];
  let budgetResults;
  try {
    budgetResults = await gaqlMutate(budgetOps, { customerId: cid });
  } catch (e) {
    throw new Error(`STAP=budget FOUT=${e.message}`);
  }
  const budgetRN = budgetResults[0].resourceName;

  const campaignOps = [{ campaignOperation: { create: {
    resourceName: `customers/${cid}/campaigns/-1`,
    name: `Test-Debug-${Date.now()}`,
    advertisingChannelType: 'SEARCH',
    status: 'PAUSED',
    campaignBudget: budgetRN,
    manualCpc: { enhancedCpcEnabled: false },
    containsEuPoliticalAdvertising: 'DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING',
  } } }];
  let campaignResults;
  try {
    campaignResults = await gaqlMutate(campaignOps, { customerId: cid });
  } catch (e) {
    const err = new Error(`STAP=campagne (budgetRN=${budgetRN}) FOUT=${e.message}`);
    err.ruw = e.ruw;
    throw err;
  }

  return { ok: true, budgetRN, campaignResults };
}

export async function verwijderCampagne(campaignResourceName) {
  const cid = CUSTOMER_ID;
  const ops = [{ campaignOperation: { remove: campaignResourceName } }];
  const results = await gaqlMutate(ops, { customerId: cid });
  return { ok: true, results };
}

export async function maakSearchCampagne2() {
  const cid = CUSTOMER_ID;
  AD_GROUPS.forEach((g) => {
    assertLen(g.headlines, 30, `Kop (${g.name})`);
    assertLen(g.descriptions, 90, `Beschrijving (${g.name})`);
  });
  assertLen(SITELINKS.map((s) => s.text), 25, 'Sitelinktekst');
  assertLen(SITELINKS.flatMap((s) => [s.desc1, s.desc2]), 35, 'Sitelinkbeschrijving');
  assertLen(CALLOUTS, 25, 'Callout');

  const ops = [];
  const campaignRN = `customers/${cid}/campaigns/-2`;

  ops.push({ campaignBudgetOperation: { create: {
    resourceName: `customers/${cid}/campaignBudgets/-1`,
    name: `Water-zuivering - Search 2 budget ${Date.now()}`,
    amountMicros: '10000000',
    deliveryMethod: 'STANDARD',
  } } });

  ops.push({ campaignOperation: { create: {
    resourceName: campaignRN,
    name: 'Leads-Search-2',
    advertisingChannelType: 'SEARCH',
    status: 'PAUSED',
    campaignBudget: `customers/${cid}/campaignBudgets/-1`,
    manualCpc: { enhancedCpcEnabled: false },
    containsEuPoliticalAdvertising: 'DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING',
    networkSettings: {
      targetGoogleSearch: true,
      targetSearchNetwork: true,
      targetContentNetwork: false,
      targetPartnerSearchNetwork: false,
    },
  } } });

  ops.push({ campaignCriterionOperation: { create: {
    campaign: campaignRN,
    location: { geoTargetConstant: 'geoTargetConstants/2528' },
  } } });

  ops.push({ campaignCriterionOperation: { create: {
    campaign: campaignRN,
    language: { languageConstant: 'languageConstants/1010' },
  } } });

  let tmpId = -10;
  const allKeywords = [];

  AD_GROUPS.forEach((g, gi) => {
    const agId = tmpId--;
    const agRN = `customers/${cid}/adGroups/${agId}`;
    ops.push({ adGroupOperation: { create: {
      resourceName: agRN,
      name: g.name,
      campaign: campaignRN,
      status: 'ENABLED',
      type: 'SEARCH_STANDARD',
      cpcBidMicros: '800000',
    } } });

    g.keywords.forEach((kw) => {
      const critId = tmpId--;
      ops.push({ adGroupCriterionOperation: { create: {
        resourceName: `customers/${cid}/adGroupCriteria/${agId}~${critId}`,
        adGroup: agRN,
        status: 'ENABLED',
        keyword: { text: kw, matchType: 'PHRASE' },
      } } });
      allKeywords.push(kw);
    });

    const adId = tmpId--;
    ops.push({ adGroupAdOperation: { create: {
      resourceName: `customers/${cid}/adGroupAds/${agId}~${adId}`,
      adGroup: agRN,
      status: 'ENABLED',
      ad: {
        finalUrls: [g.finalUrl],
        responsiveSearchAd: {
          headlines: g.headlines.map((text) => ({ text })),
          descriptions: g.descriptions.map((text) => ({ text })),
        },
      },
    } } });
  });

  SITELINKS.forEach((s) => {
    const assetId = tmpId--;
    const assetRN = `customers/${cid}/assets/${assetId}`;
    ops.push({ assetOperation: { create: {
      resourceName: assetRN,
      finalUrls: [s.url],
      sitelinkAsset: { linkText: s.text, description1: s.desc1, description2: s.desc2 },
    } } });
    ops.push({ campaignAssetOperation: { create: {
      campaign: campaignRN,
      asset: assetRN,
      fieldType: 'SITELINK',
    } } });
  });

  CALLOUTS.forEach((text) => {
    const assetId = tmpId--;
    const assetRN = `customers/${cid}/assets/${assetId}`;
    ops.push({ assetOperation: { create: {
      resourceName: assetRN,
      calloutAsset: { calloutText: text },
    } } });
    ops.push({ campaignAssetOperation: { create: {
      campaign: campaignRN,
      asset: assetRN,
      fieldType: 'CALLOUT',
    } } });
  });

  const snippetAssetId = tmpId--;
  const snippetRN = `customers/${cid}/assets/${snippetAssetId}`;
  ops.push({ assetOperation: { create: {
    resourceName: snippetRN,
    structuredSnippetAsset: { header: 'Service catalog', values: SNIPPET_VALUES },
  } } });
  ops.push({ campaignAssetOperation: { create: {
    campaign: campaignRN,
    asset: snippetRN,
    fieldType: 'STRUCTURED_SNIPPET',
  } } });

  const results = await gaqlMutate(ops, { customerId: cid });
  return { ok: true, results, keywords: allKeywords };
}

const CAMPAGNE2_ID = '24284141011';

export async function pauzeerAdGroepen(ids) {
  const cid = CUSTOMER_ID;
  const ops = ids.map((id) => ({ adGroupOperation: { update: {
    resourceName: `customers/${cid}/adGroups/${id}`,
    status: 'PAUSED',
  }, updateMask: 'status' } }));
  const results = await gaqlMutate(ops, { customerId: cid });
  return { ok: true, results };
}

export async function pasBodAan(adGroupId, bodMicros, customerId = CUSTOMER_ID) {
  const ops = [{ adGroupOperation: { update: {
    resourceName: `customers/${customerId}/adGroups/${adGroupId}`,
    cpcBidMicros: String(bodMicros),
  }, updateMask: 'cpc_bid_micros' } }];
  const results = await gaqlMutate(ops, { customerId });
  return { ok: true, results };
}

const VALUETRACK_SUFFIX = 'utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_term={keyword}&utm_content={creative}&matchtype={matchtype}';

export async function zetValueTrack(campaignIds, customerId = CUSTOMER_ID) {
  const ops = campaignIds.map((id) => ({ campaignOperation: { update: {
    resourceName: `customers/${customerId}/campaigns/${id}`,
    finalUrlSuffix: VALUETRACK_SUFFIX,
  }, updateMask: 'final_url_suffix' } }));
  const results = await gaqlMutate(ops, { customerId });
  return { ok: true, results };
}

const BESTAANDE_GROEPEN = {
  osmose: { id: '203320125111', keywords: [
    'osmose water apparaat', 'osmose water systeem', 'osmose filter kopen',
    'omgekeerde osmose apparaat kopen', 'osmose installatie kopen', 'osmose kopen',
    'osmose toestel kopen', 'reverse osmosis kopen', 'reverse osmosis filter kopen',
    'ro water kopen', 'osmose water kopen particulier',
  ] },
  waterFiltration: { id: '206071755488', keywords: [
    'home water filter', 'house water filter', 'water filters home',
    'home water filtration systems', 'filter water house system',
    'water filter system for home', 'water filter apparaat', 'filter water system',
  ] },
  waterzuiveringThuis: { id: '202057824924', keywords: [
    'waterzuivering drinkwater', 'water zuivering installatie', 'water filter voor thuis',
    'waterfilteren', 'water zuivering', 'drinkwater zuivering', 'water reiniging',
    'waterzuiver', 'water zuiver',
  ] },
};

const NIEUWE_GROEPEN = [
  {
    name: 'Waterfilter Kopen',
    finalUrl: `${BASE}/winkel`,
    keywords: [
      'waterfilter kopen', 'waterfilters kopen', 'drinkwaterfilter kopen',
      'kraanwater filter kopen', 'kraanfilter kopen', 'grondwater filter kopen',
      'zuiver water kopen', 'waterfilter beste', 'best waterfilter', 'goede waterfilters',
    ],
    headlines: [
      'Waterfilter Kopen', 'Beste Waterfilter Kopen', 'Drinkwaterfilter Kopen',
      'Vergelijk Waterfilters', 'Direct Leverbaar', 'Gratis Advies op Maat',
      'Vraag Nu Offerte Aan', 'Vakkundig Geinstalleerd', 'Kalkvrij en Schoon Water',
      'Bekijk Onze Waterfilters', 'Waterzuivering Specialist', 'Betrouwbaar en Snel',
      'Voor Elk Huishouden', 'Persoonlijk Advies', 'Nu Snel Geregeld',
    ],
    descriptions: [
      'Waterfilter kopen? Vergelijk onze systemen en ontvang persoonlijk advies.',
      'Drinkwaterfilter direct leverbaar, vakkundig geinstalleerd. Vraag een offerte aan.',
      'De beste waterfilter voor uw situatie. Betrouwbaar en professioneel geplaatst.',
      'Schoon en kalkvrij drinkwater voor elk huishouden. Vraag vrijblijvend advies aan.',
    ],
  },
  {
    name: 'Waterzuivering Algemeen',
    finalUrl: `${BASE}/waterzuivering-voor-thuis`,
    keywords: [
      'waterzuivering camper', 'waterzuiveringssysteem', 'waterzuiveringssystemen',
      'filters voor thuis', 'vuil water filter', 'water filtersysteem', 'filter-water',
      'waterwinkel', 'water filter netherlands', 'waterfilter nl', 'water filters',
      'water filter for tap',
    ],
    headlines: [
      'Waterzuivering Algemeen', 'Alle Waterfilters Op Rij', 'Waterwinkel Nederland',
      'Schoon Drinkwater Altijd', 'Gratis Advies op Maat', 'Direct Leverbaar',
      'Vraag Nu Offerte Aan', 'Vakkundig Geinstalleerd', 'Kalkvrij en Schoon Water',
      'Bekijk Onze Filters', 'Waterzuivering Specialist', 'Betrouwbaar en Snel',
      'Voor Elk Huishouden', 'Persoonlijk Advies', 'Nu Snel Geregeld',
    ],
    descriptions: [
      'Alle waterfilters en waterzuiveringssystemen op een plek. Persoonlijk advies.',
      'Vind de juiste waterfilter voor uw situatie. Vakkundig en snel geleverd.',
      'Schoon en kalkvrij drinkwater voor elk huishouden. Vraag een offerte aan.',
      'Waterzuivering specialist met persoonlijke service. Betrouwbaar en snel geregeld.',
    ],
  },
];

export async function voegVijftigZoekwoordenToe() {
  const cid = CUSTOMER_ID;
  NIEUWE_GROEPEN.forEach((g) => {
    assertLen(g.headlines, 30, `Kop (${g.name})`);
    assertLen(g.descriptions, 90, `Beschrijving (${g.name})`);
  });

  const ops = [];
  let tmpId = -100;
  const campaignRN = `customers/${cid}/campaigns/${CAMPAGNE2_ID}`;
  const allKeywords = [];

  Object.values(BESTAANDE_GROEPEN).forEach((g) => {
    const agRN = `customers/${cid}/adGroups/${g.id}`;
    g.keywords.forEach((kw) => {
      const critId = tmpId--;
      ops.push({ adGroupCriterionOperation: { create: {
        resourceName: `customers/${cid}/adGroupCriteria/${g.id}~${critId}`,
        adGroup: agRN,
        status: 'ENABLED',
        keyword: { text: kw, matchType: 'PHRASE' },
      } } });
      allKeywords.push(kw);
    });
  });

  NIEUWE_GROEPEN.forEach((g) => {
    const agId = tmpId--;
    const agRN = `customers/${cid}/adGroups/${agId}`;
    ops.push({ adGroupOperation: { create: {
      resourceName: agRN,
      name: g.name,
      campaign: campaignRN,
      status: 'ENABLED',
      type: 'SEARCH_STANDARD',
      cpcBidMicros: '800000',
    } } });

    g.keywords.forEach((kw) => {
      const critId = tmpId--;
      ops.push({ adGroupCriterionOperation: { create: {
        resourceName: `customers/${cid}/adGroupCriteria/${agId}~${critId}`,
        adGroup: agRN,
        status: 'ENABLED',
        keyword: { text: kw, matchType: 'PHRASE' },
      } } });
      allKeywords.push(kw);
    });

    const adId = tmpId--;
    ops.push({ adGroupAdOperation: { create: {
      resourceName: `customers/${cid}/adGroupAds/${agId}~${adId}`,
      adGroup: agRN,
      status: 'ENABLED',
      ad: {
        finalUrls: [g.finalUrl],
        responsiveSearchAd: {
          headlines: g.headlines.map((text) => ({ text })),
          descriptions: g.descriptions.map((text) => ({ text })),
        },
      },
    } } });
  });

  const results = await gaqlMutate(ops, { customerId: cid });
  return { ok: true, results, aantalZoekwoorden: allKeywords.length, keywords: allKeywords };
}

const OUDE_GROEP_IDS = ['203320125111', '206071755488', '202057824924'];

const GEDEELDE_HEADLINES = [
  'Gratis Advies op Maat', 'Direct Leverbaar', 'Vraag Nu Offerte Aan',
  'Vakkundig Geinstalleerd', 'Kalkvrij en Schoon Water', 'Waterzuivering Specialist',
  'Betrouwbaar en Snel', 'Voor Elk Huishouden', 'Persoonlijk Advies',
  'Nu Snel Geregeld', 'Bekijk Ons Aanbod', 'Snelle Levering', 'Vandaag Nog Besteld',
];

const GEDEELDE_DESCRIPTIONS = [
  'Vakkundig geinstalleerd en snel geleverd. Vraag vrijblijvend een offerte aan.',
  'Schoon en kalkvrij drinkwater voor elk huishouden. Persoonlijk advies op maat.',
  'Betrouwbare specialist in waterzuivering. Snel en professioneel geregeld.',
];

const STAG_GROEPEN = [
  {
    name: 'Osmose Systeem', finalUrl: `${BASE}/osmosesysteem`,
    keywords: ['osmose', 'osmose water systeem', 'osmose water apparaat'],
    h1: 'Osmose Systeem Kopen', h2: 'Osmose Systeem Thuis',
    d1: 'Osmose systeem voor kraakhelder drinkwater thuis. Vakkundig geinstalleerd.',
  },
  {
    name: 'Osmose Kopen', finalUrl: `${BASE}/osmose-waterfilter`,
    keywords: ['osmose filter', 'osmose filter kopen', 'omgekeerde osmose filter', 'omgekeerde osmose apparaat kopen', 'osmose installatie kopen', 'osmose kopen', 'osmose toestel kopen', 'osmose water kopen particulier'],
    h1: 'Osmose Kopen', h2: 'Osmose Filter Kopen',
    d1: 'Osmose kopen met persoonlijk advies en snelle, vakkundige installatie.',
  },
  {
    name: 'Reverse Osmosis', finalUrl: `${BASE}/osmose-waterfilter`,
    keywords: ['reverse osmosis kopen', 'reverse osmosis filter kopen', 'ro water kopen'],
    h1: 'Reverse Osmosis Systeem', h2: 'Reverse Osmosis Kopen',
    d1: 'Reverse osmosis systeem voor puur drinkwater. Snel en vakkundig geplaatst.',
  },
  {
    name: 'Waterfilteren', finalUrl: `${BASE}/waterzuivering-voor-thuis`,
    keywords: ['waterfilteren', 'water filter voor thuis'],
    h1: 'Waterfilteren Vandaag', h2: 'Waterfilteren Thuis',
    d1: 'Waterfilteren doet u eenvoudig thuis met ons systeem. Persoonlijk advies.',
  },
  {
    name: 'Waterzuivering Thuis (STAG)', finalUrl: `${BASE}/waterzuivering-voor-thuis`,
    keywords: ['water zuivering thuis', 'water zuiveren thuis'],
    h1: 'Waterzuivering Thuis', h2: 'Water Zuiveren Thuis',
    d1: 'Waterzuivering thuis regelen? Wij adviseren en installeren vakkundig.',
  },
  {
    name: 'Waterzuiveringsinstallatie', finalUrl: `${BASE}/waterzuiveringsinstallatie`,
    keywords: ['waterzuivering drinkwater', 'water zuivering installatie', 'water zuivering', 'drinkwater zuivering'],
    h1: 'Waterzuiveringsinstallatie', h2: 'Waterzuivering Installatie',
    d1: 'Waterzuiveringsinstallatie op maat, vakkundig geplaatst. Vraag advies aan.',
  },
  {
    name: 'Zuiver Water', finalUrl: `${BASE}/zuiverwater`,
    keywords: ['water reiniging', 'waterzuiver', 'water zuiver'],
    h1: 'Zuiver Water Thuis', h2: 'Zuiver Water Altijd',
    d1: 'Zuiver water direct uit de kraan, elke dag opnieuw. Persoonlijk advies.',
  },
  {
    name: 'Waterfiltersysteem', finalUrl: `${BASE}/waterfiltersysteem`,
    keywords: ['water filtration', 'water filtration system', 'filter water system', 'water filtersysteem', 'waterzuiveringssysteem', 'waterzuiveringssystemen'],
    h1: 'Waterfiltersysteem Kopen', h2: 'Waterfiltersysteem Thuis',
    d1: 'Waterfiltersysteem voor thuis, vakkundig geinstalleerd. Vraag offerte aan.',
  },
  {
    name: 'Drinking Water Filter', finalUrl: `${BASE}/waterzuiveraar-drinkwater`,
    keywords: ['drinking water filter', 'home water filter', 'house water filter', 'water filters home', 'home water filtration systems', 'filter water house system', 'water filter system for home', 'water filter apparaat'],
    h1: 'Drinking Water Filter', h2: 'Home Water Filter',
    d1: 'Drinking water filter for your home, professionally installed. Ask us now.',
  },
  {
    name: 'Waterfilter Kopen (STAG)', finalUrl: `${BASE}/winkel`,
    keywords: ['waterfilter kopen', 'waterfilters kopen', 'drinkwaterfilter kopen', 'zuiver water kopen', 'waterfilter beste', 'best waterfilter', 'goede waterfilters'],
    h1: 'Waterfilter Kopen', h2: 'Beste Waterfilter',
    d1: 'Waterfilter kopen? Vergelijk onze systemen en ontvang persoonlijk advies.',
  },
  {
    name: 'Kraanwaterfilter Kopen', finalUrl: `${BASE}/waterfilter-kraan`,
    keywords: ['kraanwater filter kopen', 'kraanfilter kopen', 'water filter for tap', 'grondwater filter kopen'],
    h1: 'Kraanwaterfilter Kopen', h2: 'Waterfilter voor Kraan',
    d1: 'Kraanwaterfilter kopen? Vakkundig geinstalleerd, snel geleverd.',
  },
  {
    name: 'Waterwinkel', finalUrl: `${BASE}/winkel`,
    keywords: ['waterwinkel', 'water filters', 'filters voor thuis', 'vuil water filter', 'filter-water', 'water filter netherlands', 'waterfilter nl', 'waterzuivering camper'],
    h1: 'Waterwinkel Nederland', h2: 'Alle Waterfilters Hier',
    d1: 'Waterwinkel met alle waterfilters op een plek. Persoonlijk advies op maat.',
  },
];

export async function herstructureerNaarStags() {
  const cid = CUSTOMER_ID;
  STAG_GROEPEN.forEach((g) => {
    const headlines = [g.h1, g.h2, ...GEDEELDE_HEADLINES].slice(0, 15);
    const descriptions = [g.d1, ...GEDEELDE_DESCRIPTIONS].slice(0, 4);
    assertLen(headlines, 30, `Kop (${g.name})`);
    assertLen(descriptions, 90, `Beschrijving (${g.name})`);
  });

  const ops = [];
  let tmpId = -200;
  const campaignRN = `customers/${cid}/campaigns/${CAMPAGNE2_ID}`;

  OUDE_GROEP_IDS.forEach((id) => {
    ops.push({ adGroupOperation: { update: {
      resourceName: `customers/${cid}/adGroups/${id}`,
      status: 'PAUSED',
    }, updateMask: 'status' } });
  });

  const allKeywords = [];
  STAG_GROEPEN.forEach((g) => {
    const agId = tmpId--;
    const agRN = `customers/${cid}/adGroups/${agId}`;
    ops.push({ adGroupOperation: { create: {
      resourceName: agRN,
      name: g.name,
      campaign: campaignRN,
      status: 'ENABLED',
      type: 'SEARCH_STANDARD',
      cpcBidMicros: '800000',
    } } });

    g.keywords.forEach((kw) => {
      const critId = tmpId--;
      ops.push({ adGroupCriterionOperation: { create: {
        resourceName: `customers/${cid}/adGroupCriteria/${agId}~${critId}`,
        adGroup: agRN,
        status: 'ENABLED',
        keyword: { text: kw, matchType: 'PHRASE' },
      } } });
      allKeywords.push(kw);
    });

    const headlines = [g.h1, g.h2, ...GEDEELDE_HEADLINES].slice(0, 15);
    const descriptions = [g.d1, ...GEDEELDE_DESCRIPTIONS].slice(0, 4);
    const adId = tmpId--;
    ops.push({ adGroupAdOperation: { create: {
      resourceName: `customers/${cid}/adGroupAds/${agId}~${adId}`,
      adGroup: agRN,
      status: 'ENABLED',
      ad: {
        finalUrls: [g.finalUrl],
        responsiveSearchAd: {
          headlines: headlines.map((text) => ({ text })),
          descriptions: descriptions.map((text) => ({ text })),
        },
      },
    } } });
  });

  const results = await gaqlMutate(ops, { customerId: cid });
  return { ok: true, results, groepen: STAG_GROEPEN.length, aantalZoekwoorden: allKeywords.length };
}
