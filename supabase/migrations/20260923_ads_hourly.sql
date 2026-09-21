-- Hourly Google Ads figures per ad group, used for the "best times" section of the dashboard.
create table if not exists public.ads_hour_daily (
  day date not null,
  hour smallint not null check (hour between 0 and 23),
  campaign_id bigint not null,
  ad_group_id bigint not null,
  campaign text not null,
  ad_group text not null,
  impressions bigint not null default 0,
  clicks bigint not null default 0,
  cost numeric(12, 2) not null default 0,
  conversions numeric(12, 2) not null default 0,
  updated_at timestamptz not null default now(),
  primary key (day, hour, ad_group_id)
);
alter table public.ads_hour_daily enable row level security;

drop policy if exists "ads_hour_daily admin read" on public.ads_hour_daily;
create policy "ads_hour_daily admin read" on public.ads_hour_daily
  for select to authenticated using (public.is_admin());

create or replace function public.ads_ingest(p_secret text, p_payload jsonb)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  n_c int := 0;
  n_k int := 0;
  n_s int := 0;
  n_h int := 0;
  camp jsonb := coalesce(p_payload -> 'campaigns', '[]'::jsonb);
  kw jsonb := coalesce(p_payload -> 'keywords', '[]'::jsonb);
  st jsonb := coalesce(p_payload -> 'search_terms', '[]'::jsonb);
  hr jsonb := coalesce(p_payload -> 'hours', '[]'::jsonb);
begin
  if p_secret is null or not exists (
    select 1 from public.ads_ingest_keys
    where key_hash = encode(sha256(convert_to(p_secret, 'UTF8')), 'hex')
  ) then
    raise exception 'unauthorized' using errcode = '28000';
  end if;

  if jsonb_array_length(camp) > 2000 or jsonb_array_length(kw) > 2000 or jsonb_array_length(st) > 2000 or jsonb_array_length(hr) > 2000 then
    raise exception 'too many rows in one call' using errcode = '22023';
  end if;

  insert into public.ads_campaign_daily (day, campaign_id, campaign, status, impressions, clicks, cost, conversions, conv_value, updated_at)
  select x.day, x.campaign_id, x.campaign, x.status, coalesce(x.impressions, 0), coalesce(x.clicks, 0),
         coalesce(x.cost, 0), coalesce(x.conversions, 0), coalesce(x.conv_value, 0), now()
  from jsonb_to_recordset(camp) as x(day date, campaign_id bigint, campaign text, status text, impressions bigint, clicks bigint, cost numeric, conversions numeric, conv_value numeric)
  on conflict (day, campaign_id) do update set
    campaign = excluded.campaign, status = excluded.status, impressions = excluded.impressions, clicks = excluded.clicks,
    cost = excluded.cost, conversions = excluded.conversions, conv_value = excluded.conv_value, updated_at = now();
  get diagnostics n_c = row_count;

  insert into public.ads_keyword_daily (day, campaign_id, ad_group_id, criterion_id, campaign, ad_group, keyword, match_type, impressions, clicks, cost, conversions, updated_at)
  select x.day, x.campaign_id, x.ad_group_id, x.criterion_id, x.campaign, x.ad_group, x.keyword, x.match_type,
         coalesce(x.impressions, 0), coalesce(x.clicks, 0), coalesce(x.cost, 0), coalesce(x.conversions, 0), now()
  from jsonb_to_recordset(kw) as x(day date, campaign_id bigint, ad_group_id bigint, criterion_id bigint, campaign text, ad_group text, keyword text, match_type text, impressions bigint, clicks bigint, cost numeric, conversions numeric)
  on conflict (day, ad_group_id, criterion_id) do update set
    campaign = excluded.campaign, ad_group = excluded.ad_group, keyword = excluded.keyword, match_type = excluded.match_type,
    impressions = excluded.impressions, clicks = excluded.clicks, cost = excluded.cost, conversions = excluded.conversions, updated_at = now();
  get diagnostics n_k = row_count;

  insert into public.ads_search_term_daily (day, campaign_id, ad_group_id, campaign, ad_group, search_term, impressions, clicks, cost, conversions, updated_at)
  select x.day, x.campaign_id, x.ad_group_id, x.campaign, x.ad_group, x.search_term,
         coalesce(x.impressions, 0), coalesce(x.clicks, 0), coalesce(x.cost, 0), coalesce(x.conversions, 0), now()
  from jsonb_to_recordset(st) as x(day date, campaign_id bigint, ad_group_id bigint, campaign text, ad_group text, search_term text, impressions bigint, clicks bigint, cost numeric, conversions numeric)
  on conflict (day, ad_group_id, search_term) do update set
    campaign = excluded.campaign, ad_group = excluded.ad_group,
    impressions = excluded.impressions, clicks = excluded.clicks, cost = excluded.cost, conversions = excluded.conversions, updated_at = now();
  get diagnostics n_s = row_count;

  insert into public.ads_hour_daily (day, hour, campaign_id, ad_group_id, campaign, ad_group, impressions, clicks, cost, conversions, updated_at)
  select x.day, x.hour, x.campaign_id, x.ad_group_id, x.campaign, x.ad_group,
         coalesce(x.impressions, 0), coalesce(x.clicks, 0), coalesce(x.cost, 0), coalesce(x.conversions, 0), now()
  from jsonb_to_recordset(hr) as x(day date, hour smallint, campaign_id bigint, ad_group_id bigint, campaign text, ad_group text, impressions bigint, clicks bigint, cost numeric, conversions numeric)
  on conflict (day, hour, ad_group_id) do update set
    campaign = excluded.campaign, ad_group = excluded.ad_group,
    impressions = excluded.impressions, clicks = excluded.clicks, cost = excluded.cost, conversions = excluded.conversions, updated_at = now();
  get diagnostics n_h = row_count;

  return jsonb_build_object('campaigns', n_c, 'keywords', n_k, 'search_terms', n_s, 'hours', n_h);
end;
$$;
