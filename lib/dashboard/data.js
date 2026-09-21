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

export async function haalDashboardData(supabase) {
  const vandaag = vandaagInAmsterdam();
  const vanaf = addDagen(vandaag, -59);

  const [campagnes, zoekwoorden, zoektermen, leadRijen, aanvragen, laatste] = await Promise.all([
    alles(() => supabase.from('ads_campaign_daily').select('day,campaign_id,campaign,status,impressions,clicks,cost,conversions').gte('day', vanaf).order('day').order('campaign_id')),
    alles(() => supabase.from('ads_keyword_daily').select('day,campaign_id,ad_group_id,criterion_id,campaign,ad_group,keyword,impressions,clicks,cost,conversions').gte('day', vanaf).order('day').order('ad_group_id').order('criterion_id')),
    alles(() => supabase.from('ads_search_term_daily').select('day,campaign_id,ad_group_id,campaign,ad_group,search_term,impressions,clicks,cost,conversions').gte('day', vanaf).order('day').order('ad_group_id').order('search_term')),
    alles(() => supabase.from('lead_events').select('id,created_at,lead_type,page_path,utm_medium,utm_campaign,utm_term,utm_content,gclid').gte('created_at', `${vanaf}T00:00:00Z`).order('created_at', { ascending: false }).order('id')),
    supabase.from('ads_review_requests').select('id,created_at,status,period,note,result,items').order('created_at', { ascending: false }).limit(8).then((r) => r.data || []),
    supabase.from('ads_campaign_daily').select('updated_at').order('updated_at', { ascending: false }).limit(1).then((r) => r.data?.[0]?.updated_at || null),
  ]);

  const leads = leadRijen.map((l) => ({
    id: l.id,
    day: dagInAmsterdam(l.created_at),
    tijd: l.created_at,
    type: l.lead_type,
    pagina: l.page_path || '',
    isAds: Boolean(l.gclid) || String(l.utm_medium || '').toLowerCase() === 'cpc',
    term: norm(l.utm_term),
    groep: l.utm_content || '',
    camp: l.utm_campaign || '',
  }));

  return { vandaag, campagnes, zoekwoorden, zoektermen, leads, aanvragen, bijgewerkt: laatste, demo: false };
}
