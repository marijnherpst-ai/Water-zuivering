import 'server-only';
import { addDagen } from './analyse';
import { vandaagInAmsterdam } from './data';

const VERSIE = 'v23.0';
const ACCOUNT = 'act_231890793320528';
const VERS_MS = 55 * 60 * 1000;
const LEAD_ACTIES = [
  'lead',
  'onsite_conversion.lead_grouped',
  'offsite_conversion.fb_pixel_lead',
  'offsite_conversion.fb_pixel_complete_registration',
  'complete_registration',
];

function leadsUit(actions) {
  if (!Array.isArray(actions)) return 0;
  for (const type of LEAD_ACTIES) {
    const a = actions.find((x) => x.action_type === type);
    if (a) return Number(a.value) || 0;
  }
  return 0;
}

const getal = (v) => Number(v) || 0;

async function graph(pad, params, token) {
  const basis = new URLSearchParams({ ...params, access_token: token, limit: '500' });
  let url = `https://graph.facebook.com/${VERSIE}/${pad}?${basis}`;
  const uit = [];
  for (let i = 0; i < 20 && url; i++) {
    const res = await fetch(url, { cache: 'no-store' });
    const json = await res.json().catch(() => ({}));
    if (!res.ok || json.error) {
      const fout = new Error(json.error?.message || `Facebook gaf fout ${res.status}`);
      fout.code = json.error?.code;
      throw fout;
    }
    uit.push(...(json.data || []));
    url = json.paging?.next || null;
  }
  return uit;
}

async function opslaan(supabase, tabel, rijen, conflict) {
  for (let i = 0; i < rijen.length; i += 500) {
    const { error } = await supabase.from(tabel).upsert(rijen.slice(i, i + 500), { onConflict: conflict });
    if (error) throw new Error(`Opslaan in ${tabel} mislukt: ${error.message}`);
  }
}

async function zetStatus(supabase, ok, message) {
  await supabase.from('meta_sync_status').upsert({ id: 1, last_sync: new Date().toISOString(), ok, message: message ? String(message).slice(0, 300) : null });
}

export async function syncMeta(supabase, { force = false } = {}) {
  const token = process.env.META_ACCESS_TOKEN;
  if (!token) return { ok: false, reden: 'geen-token' };

  if (!force) {
    const { data } = await supabase.from('meta_sync_status').select('last_sync,ok').eq('id', 1).maybeSingle();
    if (data?.ok && data.last_sync && Date.now() - new Date(data.last_sync).getTime() < VERS_MS) return { ok: true, overgeslagen: true };
  }

  const vandaag = vandaagInAmsterdam();
  const bereik = (dagen) => JSON.stringify({ since: addDagen(vandaag, -(dagen - 1)), until: vandaag });
  const nu = new Date().toISOString();

  try {
    const dagelijks = { time_increment: '1' };
    const [statusRijen, campRijen, adRijen, uurRijen, leeftijdRijen, plaatsRijen, ...bereikRijen] = await Promise.all([
      graph(`${ACCOUNT}/campaigns`, { fields: 'id,effective_status' }, token),
      graph(`${ACCOUNT}/insights`, { ...dagelijks, level: 'campaign', time_range: bereik(60), fields: 'campaign_id,campaign_name,spend,impressions,reach,clicks,actions' }, token),
      graph(`${ACCOUNT}/insights`, { ...dagelijks, level: 'ad', time_range: bereik(60), fields: 'ad_id,ad_name,adset_id,adset_name,campaign_id,campaign_name,spend,impressions,reach,clicks,actions' }, token),
      graph(`${ACCOUNT}/insights`, { ...dagelijks, level: 'campaign', time_range: bereik(30), breakdowns: 'hourly_stats_aggregated_by_advertiser_time_zone', fields: 'campaign_id,campaign_name,spend,impressions,clicks,actions' }, token),
      graph(`${ACCOUNT}/insights`, { ...dagelijks, level: 'campaign', time_range: bereik(30), breakdowns: 'age,gender', fields: 'campaign_id,campaign_name,spend,impressions,clicks,actions' }, token),
      graph(`${ACCOUNT}/insights`, { ...dagelijks, level: 'campaign', time_range: bereik(30), breakdowns: 'publisher_platform,platform_position', fields: 'campaign_id,campaign_name,spend,impressions,clicks,actions' }, token),
      ...[1, 7, 14, 30].flatMap((d) => [
        graph(`${ACCOUNT}/insights`, { level: 'campaign', time_range: bereik(d), fields: 'campaign_id,campaign_name,reach,impressions,frequency' }, token).then((r) => r.map((x) => ({ ...x, dagen: d }))),
        graph(`${ACCOUNT}/insights`, { level: 'account', time_range: bereik(d), fields: 'reach,impressions,frequency' }, token).then((r) => r.map((x) => ({ ...x, dagen: d, campaign_id: '__account__', campaign_name: 'Totaal' }))),
      ]),
    ]);

    const status = new Map(statusRijen.map((c) => [c.id, c.effective_status]));

    await opslaan(supabase, 'meta_campaign_daily', campRijen.map((r) => ({
      day: r.date_start, campaign_id: r.campaign_id, campaign: r.campaign_name, status: status.get(r.campaign_id) || null,
      spend: getal(r.spend), impressions: getal(r.impressions), reach: getal(r.reach), clicks: getal(r.clicks), leads: leadsUit(r.actions), updated_at: nu,
    })), 'day,campaign_id');

    await opslaan(supabase, 'meta_ad_daily', adRijen.map((r) => ({
      day: r.date_start, ad_id: r.ad_id, ad: r.ad_name, adset_id: r.adset_id, adset: r.adset_name, campaign_id: r.campaign_id, campaign: r.campaign_name,
      spend: getal(r.spend), impressions: getal(r.impressions), reach: getal(r.reach), clicks: getal(r.clicks), leads: leadsUit(r.actions), updated_at: nu,
    })), 'day,ad_id');

    const breakdown = (rijen, kind, bucketVan) => rijen.map((r) => ({
      day: r.date_start, kind, bucket: bucketVan(r), campaign_id: r.campaign_id, campaign: r.campaign_name,
      spend: getal(r.spend), impressions: getal(r.impressions), clicks: getal(r.clicks), leads: leadsUit(r.actions), updated_at: nu,
    }));
    const alleBreakdowns = [
      ...breakdown(uurRijen, 'hour', (r) => r.hourly_stats_aggregated_by_advertiser_time_zone),
      ...breakdown(leeftijdRijen, 'age_gender', (r) => `${r.age} · ${r.gender}`),
      ...breakdown(plaatsRijen, 'placement', (r) => `${r.publisher_platform}: ${r.platform_position}`),
    ];
    await opslaan(supabase, 'meta_breakdown_daily', alleBreakdowns, 'day,kind,bucket,campaign_id');

    await opslaan(supabase, 'meta_period_reach', bereikRijen.flat().map((r) => ({
      days: r.dagen, campaign_id: r.campaign_id, campaign: r.campaign_name, reach: getal(r.reach), impressions: getal(r.impressions), frequency: getal(r.frequency), updated_at: nu,
    })), 'days,campaign_id');

    await zetStatus(supabase, true, null);
    return { ok: true };
  } catch (e) {
    const melding = e?.code === 190 ? 'Het Facebook-token is ongeldig of verlopen. Maak een nieuw token en zet het in Vercel.' : e?.message || 'Onbekende fout';
    await zetStatus(supabase, false, melding);
    return { ok: false, reden: melding };
  }
}
