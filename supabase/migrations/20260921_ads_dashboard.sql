-- Ads dashboard: lead attribution + Google Ads data.
-- No personal data is stored in any of these tables.

-- 1. Who may read the dashboard data
create table if not exists public.admin_emails (
  email text primary key
);
alter table public.admin_emails enable row level security;
insert into public.admin_emails (email) values ('marijnherpst@gmail.com') on conflict do nothing;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.admin_emails
    where lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  );
$$;
revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated;

-- 2. Lead events (one row per submitted lead, without personal data)
create table if not exists public.lead_events (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  lead_type text not null check (lead_type in ('aanmelden', 'contact', 'besparing', 'giveaway')),
  page_path text,
  landing_page text,
  referrer_host text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  gclid text,
  consent boolean not null default false
);
create index if not exists lead_events_created_at_idx on public.lead_events (created_at desc);
alter table public.lead_events enable row level security;

drop policy if exists "lead_events insert" on public.lead_events;
create policy "lead_events insert" on public.lead_events
  for insert to anon, authenticated with check (true);

drop policy if exists "lead_events admin read" on public.lead_events;
create policy "lead_events admin read" on public.lead_events
  for select to authenticated using (public.is_admin());

-- 3. Google Ads data (filled automatically by a Google Ads script)
create table if not exists public.ads_campaign_daily (
  day date not null,
  campaign_id bigint not null,
  campaign text not null,
  status text,
  impressions bigint not null default 0,
  clicks bigint not null default 0,
  cost numeric(12, 2) not null default 0,
  conversions numeric(12, 2) not null default 0,
  conv_value numeric(12, 2) not null default 0,
  updated_at timestamptz not null default now(),
  primary key (day, campaign_id)
);

create table if not exists public.ads_keyword_daily (
  day date not null,
  campaign_id bigint not null,
  ad_group_id bigint not null,
  criterion_id bigint not null,
  campaign text not null,
  ad_group text not null,
  keyword text not null,
  match_type text,
  impressions bigint not null default 0,
  clicks bigint not null default 0,
  cost numeric(12, 2) not null default 0,
  conversions numeric(12, 2) not null default 0,
  updated_at timestamptz not null default now(),
  primary key (day, ad_group_id, criterion_id)
);

create table if not exists public.ads_search_term_daily (
  day date not null,
  campaign_id bigint not null,
  ad_group_id bigint not null,
  campaign text not null,
  ad_group text not null,
  search_term text not null,
  impressions bigint not null default 0,
  clicks bigint not null default 0,
  cost numeric(12, 2) not null default 0,
  conversions numeric(12, 2) not null default 0,
  updated_at timestamptz not null default now(),
  primary key (day, ad_group_id, search_term)
);

create table if not exists public.ads_ingest_keys (
  id serial primary key,
  label text not null,
  key_hash text not null unique,
  created_at timestamptz not null default now()
);
alter table public.ads_ingest_keys enable row level security;

alter table public.ads_campaign_daily enable row level security;
alter table public.ads_keyword_daily enable row level security;
alter table public.ads_search_term_daily enable row level security;

drop policy if exists "ads_campaign_daily admin read" on public.ads_campaign_daily;
create policy "ads_campaign_daily admin read" on public.ads_campaign_daily
  for select to authenticated using (public.is_admin());
drop policy if exists "ads_keyword_daily admin read" on public.ads_keyword_daily;
create policy "ads_keyword_daily admin read" on public.ads_keyword_daily
  for select to authenticated using (public.is_admin());
drop policy if exists "ads_search_term_daily admin read" on public.ads_search_term_daily;
create policy "ads_search_term_daily admin read" on public.ads_search_term_daily
  for select to authenticated using (public.is_admin());

-- 4. Ingest function: the Google Ads script calls this with a secret. The database only
-- keeps the SHA-256 hash of that secret.
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
  camp jsonb := coalesce(p_payload -> 'campaigns', '[]'::jsonb);
  kw jsonb := coalesce(p_payload -> 'keywords', '[]'::jsonb);
  st jsonb := coalesce(p_payload -> 'search_terms', '[]'::jsonb);
begin
  if p_secret is null or not exists (
    select 1 from public.ads_ingest_keys
    where key_hash = encode(sha256(convert_to(p_secret, 'UTF8')), 'hex')
  ) then
    raise exception 'unauthorized' using errcode = '28000';
  end if;

  if jsonb_array_length(camp) > 2000 or jsonb_array_length(kw) > 2000 or jsonb_array_length(st) > 2000 then
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

  return jsonb_build_object('campaigns', n_c, 'keywords', n_k, 'search_terms', n_s);
end;
$$;
revoke all on function public.ads_ingest(text, jsonb) from public;
grant execute on function public.ads_ingest(text, jsonb) to anon, authenticated;

insert into public.ads_ingest_keys (label, key_hash)
values ('google-ads-script', '540f17b090625aa204bf5981e431a2dcfe41cfd16cf8f2ad3e91c1e7f5fc01f9')
on conflict (key_hash) do nothing;

-- Tighten grants: visitors cannot call is_admin, signed-in users cannot call ads_ingest.
revoke execute on function public.is_admin() from anon;
revoke execute on function public.ads_ingest(text, jsonb) from authenticated;
