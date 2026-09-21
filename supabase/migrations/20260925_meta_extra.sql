-- Extra Facebook metrics: landing page views, Meta's own ad quality rankings and ad account status.
alter table public.meta_campaign_daily add column if not exists landing_views bigint not null default 0;
alter table public.meta_ad_daily add column if not exists landing_views bigint not null default 0;

create table if not exists public.meta_ad_quality (
  ad_id text primary key,
  ad text not null,
  adset text,
  campaign text,
  quality text,
  engagement text,
  conversion text,
  updated_at timestamptz not null default now()
);

create table if not exists public.meta_account_status (
  id smallint primary key default 1 check (id = 1),
  account_status integer,
  disable_reason integer,
  balance numeric,
  amount_spent numeric,
  currency text,
  updated_at timestamptz not null default now()
);

do $$
declare t text;
begin
  foreach t in array array['meta_ad_quality', 'meta_account_status']
  loop
    execute format('alter table public.%I enable row level security', t);
    execute format('drop policy if exists "%s admin all" on public.%I', t, t);
    execute format('create policy "%s admin all" on public.%I for all to authenticated using (public.is_admin()) with check (public.is_admin())', t, t);
  end loop;
end $$;
