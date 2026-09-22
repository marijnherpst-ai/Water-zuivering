import 'server-only';
import { gaqlMutate, CUSTOMER_ID } from './googleAdsApi';

const KEYWORDS = [
  'waterzuivering voor thuis',
  'waterzuiveraar voor thuis',
  'waterzuiveraar kopen',
  'waterzuiveraar drinkwater',
  'waterzuiveringsinstallatie drinkwater',
  'waterzuiveringsfilter',
];

const HEADLINES = [
  'Waterzuivering voor Thuis',
  'Schoon Drinkwater Altijd',
  'Waterzuiveraar Kopen',
  'Direct Leverbaar',
  'Gratis Advies op Maat',
  'Vraag Nu Offerte Aan',
  'Betrouwbare Waterfilter',
  'Voor Elk Huishouden',
  'Kalkvrij en Schoon Water',
  'Bekijk Onze Filters',
  'Snel en Vakkundig',
  'Waterzuivering Specialist',
];

const DESCRIPTIONS = [
  'Ontdek de beste waterzuiveraar voor thuis. Persoonlijk advies en snelle levering.',
  'Schoon en gezond drinkwater direct uit de kraan. Vraag vrijblijvend een offerte aan.',
  'Specialist in waterzuiveringsinstallaties voor particulieren. Vakkundig geinstalleerd.',
  'Vergelijk onze waterzuiveraars en filters. Kies de oplossing die bij u past.',
];

const FINAL_URL = 'https://www.water-zuivering.nl/';

export async function maakSearchCampagne() {
  const cid = CUSTOMER_ID;
  const ops = [];

  ops.push({ campaignBudgetOperation: { create: {
    resourceName: `customers/${cid}/campaignBudgets/-1`,
    name: `Water-zuivering - Search budget ${Date.now()}`,
    amountMicros: '10400000',
    deliveryMethod: 'STANDARD',
  } } });

  ops.push({ campaignOperation: { create: {
    resourceName: `customers/${cid}/campaigns/-2`,
    name: 'Water-zuivering - Search',
    advertisingChannelType: 'SEARCH',
    status: 'ENABLED',
    campaignBudget: `customers/${cid}/campaignBudgets/-1`,
    manualCpc: {},
    networkSettings: {
      targetGoogleSearch: true,
      targetSearchNetwork: true,
      targetContentNetwork: false,
      targetPartnerSearchNetwork: true,
    },
  } } });

  ops.push({ campaignCriterionOperation: { create: {
    resourceName: `customers/${cid}/campaignCriteria/-2~-3`,
    campaign: `customers/${cid}/campaigns/-2`,
    location: { geoTargetConstant: 'geoTargetConstants/2528' },
  } } });

  ops.push({ campaignCriterionOperation: { create: {
    resourceName: `customers/${cid}/campaignCriteria/-2~-4`,
    campaign: `customers/${cid}/campaigns/-2`,
    language: { languageConstant: 'languageConstants/1010' },
  } } });

  ops.push({ adGroupOperation: { create: {
    resourceName: `customers/${cid}/adGroups/-5`,
    name: 'Waterzuivering - hoofdgroep',
    campaign: `customers/${cid}/campaigns/-2`,
    status: 'ENABLED',
    type: 'SEARCH_STANDARD',
    cpcBidMicros: '800000',
  } } });

  KEYWORDS.forEach((kw, i) => {
    ops.push({ adGroupCriterionOperation: { create: {
      resourceName: `customers/${cid}/adGroupCriteria/-5~${-(10 + i)}`,
      adGroup: `customers/${cid}/adGroups/-5`,
      status: 'ENABLED',
      keyword: { text: kw, matchType: 'PHRASE' },
    } } });
  });

  ops.push({ adGroupAdOperation: { create: {
    resourceName: `customers/${cid}/adGroupAds/-5~-99`,
    adGroup: `customers/${cid}/adGroups/-5`,
    status: 'ENABLED',
    ad: {
      finalUrls: [FINAL_URL],
      responsiveSearchAd: {
        headlines: HEADLINES.map((text) => ({ text })),
        descriptions: DESCRIPTIONS.map((text) => ({ text })),
      },
    },
  } } });

  const results = await gaqlMutate(ops, { customerId: cid });
  return { ok: true, results, keywords: KEYWORDS };
}
