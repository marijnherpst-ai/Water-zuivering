import { addDagen, norm } from './analyse';

const PAGINA = 1000;

async function alles(bouw) {
  const uit = [];
  for (let p = 0; p < 40; p++) {
    const { data, error } = await bouw().range(p * PAGINA, p * PAGINA + PAGINA - 1);
    if (error) throw new Error(error.message);
    uit.push(...data);
    if (data.length < PAGINA) break;
  }
  return uit;
}

export function vandaagInAmsterdam() {
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Amsterdam' }).format(new Date());
}

function dagInAmsterdam(iso) {
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Amsterdam' }).format(new Date(iso));
}

function uurInAmsterdam(iso) {
  return Number(new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Amsterdam', hour: '2-digit', hourCycle: 'h23' }).format(new Date(iso)));
}

const GOOGLE = ['google', 'adwords', 'googleads'];
const FACEBOOK = ['facebook', 'fb', 'instagram', 'ig', 'meta'];

function kanaalVanLead(l) {
  if (l.gclid) return 'google';
  if (l.fbclid) return 'facebook';
  const bron = String(l.utm_source || '').toLowerCase();
  if (GOOGLE.includes(bron)) return 'google';
  if (FACEBOOK.includes(bron)) return 'facebook';
  return String(l.utm_medium || '').toLowerCase() === 'cpc' ? 'overig' : null;
}

async function haalLeads(supabase, vanaf) {
  const rijen = await alles(() => supabase.from('lead_events').select('id,created_at,lead_type,page_path,utm_source,utm_medium,utm_campaign,utm_term,utm_content,gclid,fbclid,journey').gte('created_at', `${vanaf}T00:00:00Z`).order('created_at', { ascending: false }).order('id'));
  return rijen.map((l) => ({
    id: l.id,
    day: dagInAmsterdam(l.created_at),
    tijd: l.created_at,
    uur: uurInAmsterdam(l.created_at),
    type: l.lead_type,
    pagina: l.page_path || '',
    kanaal: kanaalVanLead(l),
    journey: l.journey || '',
    term: norm(l.utm_term),
    groep: l.utm_content || '',
    camp: l.utm_campaign || '',
  }));
}

export function metKanaal(leads, kanaal) {
  return leads.map((l) => ({ ...l, isAds: l.kanaal === kanaal }));
}

async function haalAanvragen(supabase) {
  const { data } = await supabase.from('ads_review_requests').select('id,created_at,status,period,note,result,items').order('created_at', { ascending: false }).limit(8);
  return data || [];
}

export async function haalDashboardData(supabase) {
  const vandaag = vandaagInAmsterdam();
  const vanaf = addDagen(vandaag, -59);

  const [campagnes, zoekwoorden, zoektermen, leads, aanvragen, laatste, uren] = await Promise.all([
    alles(() => supabase.from('ads_campaign_daily').select('day,campaign_id,campaign,status,impressions,clicks,cost,conversions').gte('day', vanaf).order('day').order('campaign_id')),
    alles(() => supabase.from('ads_keyword_daily').select('day,campaign_id,ad_group_id,criterion_id,campaign,ad_group,keyword,impressions,clicks,cost,conversions').gte('day', vanaf).order('day').order('ad_group_id').order('criterion_id')),
    alles(() => supabase.from('ads_search_term_daily').select('day,campaign_id,ad_group_id,campaign,ad_group,search_term,impressions,clicks,cost,conversions').gte('day', vanaf).order('day').order('ad_group_id').order('search_term')),
    haalLeads(supabase, vanaf),
    haalAanvragen(supabase),
    supabase.from('ads_campaign_daily').select('updated_at').order('updated_at', { ascending: false }).limit(1).then((r) => r.data?.[0]?.updated_at || null),
    alles(() => supabase.from('ads_hour_daily').select('day,hour,campaign_id,ad_group_id,campaign,ad_group,impressions,clicks,cost,conversions').gte('day', addDagen(vandaag, -29)).order('day').order('hour').order('ad_group_id')),
  ]);

  return { bron: 'google', vandaag, campagnes, zoekwoorden, zoektermen, leads: metKanaal(leads, 'google'), alleLeads: leads, uren, aanvragen, bijgewerkt: laatste, demo: false };
}

const ROUND = (n) => Math.round(n * 100) / 100;

// Facebook data is mapped onto the same shape as Google data so the whole dashboard can be reused:
// campaign -> campaign, ad set -> ad group, ad -> "keyword".
export async function haalMetaData(supabase) {
  const vandaag = vandaagInAmsterdam();
  const vanaf = addDagen(vandaag, -59);

  const [camp, adRijen, uurRijen, doelgroepRijen, bereik, status, leads, aanvragen] = await Promise.all([
    alles(() => supabase.from('meta_campaign_daily').select('day,campaign_id,campaign,status,spend,impressions,reach,clicks,leads').gte('day', vanaf).order('day').order('campaign_id')),
    alles(() => supabase.from('meta_ad_daily').select('day,ad_id,ad,adset_id,adset,campaign_id,campaign,spend,impressions,clicks,leads').gte('day', vanaf).order('day').order('ad_id')),
    alles(() => supabase.from('meta_breakdown_daily').select('day,bucket,campaign_id,campaign,spend,impressions,clicks,leads').eq('kind', 'hour').gte('day', addDagen(vandaag, -29)).order('day').order('bucket').order('campaign_id')),
    alles(() => supabase.from('meta_breakdown_daily').select('day,kind,bucket,spend,impressions,clicks,leads').in('kind', ['age_gender', 'placement']).gte('day', addDagen(vandaag, -29)).order('day').order('kind').order('bucket').order('campaign_id')),
    supabase.from('meta_period_reach').select('days,campaign_id,campaign,reach,impressions,frequency').then((r) => r.data || []),
    supabase.from('meta_sync_status').select('last_sync,ok,message').eq('id', 1).maybeSingle().then((r) => r.data || null),
    haalLeads(supabase, vanaf),
    haalAanvragen(supabase),
  ]);

  const campagnes = camp.map((r) => ({ day: r.day, campaign_id: r.campaign_id, campaign: r.campaign, status: r.status, impressions: r.impressions, clicks: r.clicks, cost: Number(r.spend), conversions: Number(r.leads) }));
  const zoekwoorden = adRijen.map((r) => ({
    day: r.day, campaign_id: r.campaign_id, ad_group_id: r.adset_id, criterion_id: r.ad_id, campaign: r.campaign, ad_group: r.adset, keyword: r.ad,
    impressions: r.impressions, clicks: r.clicks, cost: Number(r.spend), conversions: Number(r.leads),
  }));
  const uren = uurRijen
    .map((r) => ({
      day: r.day, hour: parseInt(String(r.bucket).slice(0, 2), 10), campaign_id: r.campaign_id, ad_group_id: r.campaign_id, campaign: r.campaign, ad_group: r.campaign,
      impressions: r.impressions, clicks: r.clicks, cost: Number(r.spend), conversions: Number(r.leads),
    }))
    .filter((r) => Number.isInteger(r.hour));
  const doelgroep = doelgroepRijen.map((r) => ({ day: r.day, kind: r.kind, bucket: r.bucket, cost: ROUND(Number(r.spend)), clicks: r.clicks, impressions: r.impressions, conversions: Number(r.leads) }));

  return {
    bron: 'facebook', vandaag, campagnes, zoekwoorden, zoektermen: [], leads: metKanaal(leads, 'facebook'), alleLeads: leads, uren, doelgroep, bereik,
    aanvragen, bijgewerkt: status?.last_sync || null, syncStatus: status, demo: false,
  };
}
