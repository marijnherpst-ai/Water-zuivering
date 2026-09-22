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
    manualCpc: {},
    networkSettings: {
      targetGoogleSearch: true,
      targetSearchNetwork: true,
      targetContentNetwork: false,
      targetPartnerSearchNetwork: false,
    },
  } } });

  ops.push({ campaignCriterionOperation: { create: {
    resourceName: `customers/${cid}/campaignCriteria/-2~-3`,
    campaign: campaignRN,
    location: { geoTargetConstant: 'geoTargetConstants/2528' },
  } } });

  ops.push({ campaignCriterionOperation: { create: {
    resourceName: `customers/${cid}/campaignCriteria/-2~-4`,
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
    structuredSnippetAsset: { header: 'Diensten', values: SNIPPET_VALUES },
  } } });
  ops.push({ campaignAssetOperation: { create: {
    campaign: campaignRN,
    asset: snippetRN,
    fieldType: 'STRUCTURED_SNIPPET',
  } } });

  const results = await gaqlMutate(ops, { customerId: cid });
  return { ok: true, results, keywords: allKeywords };
}
