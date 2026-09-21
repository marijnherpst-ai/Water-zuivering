-- Facebook / Instagram (Meta) ads data. Filled by the dashboard itself (server-side sync when the
-- admin opens the dashboard). Only the admin can read and write. No personal data is stored.

alter table public.lead_events add column if not exists fbclid text;

create table if not exists public.meta_campaign_daily (
  day date not null,
  campaign_id text not null,
  campaign text not null,
  status text,
  spend numeric(12, 2) not null default 0,
  impressions bigint not null default 0,
  reach bigint not null default 0,
  clicks bigint not null default 0,
  leads numeric(12, 2) not null default 0,
  updated_at timestamptz not null default now(),
  primary key (day, campaign_id)
);

create table if not exists public.meta_ad_daily (
  day date not null,
  ad_id text not null,
  ad text not null,
  adset_id text not null,
  adset text not null,
  campaign_id text not null,
  campaign text not null,
  spend numeric(12, 2) not null default 0,
  impressions bigint not null default 0,
  reach bigint not null default 0,
  clicks bigint not null default 0,
  leads numeric(12, 2) not null default 0,
  updated_at timestamptz not null default now(),
  primary key (day, ad_id)
);

-- hour / age_gender / placement breakdowns per campaign
create table if not exists public.meta_breakdown_daily (
  day date not null,
  kind text not null check (kind in ('hour', 'age_gender', 'placement')),
  bucket text not null,
  campaign_id text not null,
  campaign text not null,
  spend numeric(12, 2) not null default 0,
  impressions bigint not null default 0,
  clicks bigint not null default 0,
  leads numeric(12, 2) not null default 0,
  updated_at timestamptz not null default now(),
  primary key (day, kind, bucket, campaign_id)
);

-- true (de-duplicated) reach and frequency per period; '__account__' is the whole ad account
create table if not exists public.meta_period_reach (
  days smallint not null,
  campaign_id text not null,
  campaign text not null,
  reach bigint not null default 0,
  impressions bigint not null default 0,
  frequency numeric(8, 2) not null default 0,
  updated_at timestamptz not null default now(),
  primary key (days, campaign_id)
);

create table if not exists public.meta_sync_status (
  id smallint primary key default 1 check (id = 1),
  last_sync timestamptz,
  ok boolean not null default false,
  message text
);

do $$
declare t text;
begin
  foreach t in array array['meta_campaign_daily', 'meta_ad_daily', 'meta_breakdown_daily', 'meta_period_reach', 'meta_sync_status']
  loop
    execute format('alter table public.%I enable row level security', t);
    execute format('drop policy if exists "%s admin all" on public.%I', t, t);
    execute format('create policy "%s admin all" on public.%I for all to authenticated using (public.is_admin()) with check (public.is_admin())', t, t);
  end loop;
end $$;

-- Channel route of the visitor, e.g. "google>facebook" (only stored with consent)
alter table public.lead_events add column if not exists journey text;
