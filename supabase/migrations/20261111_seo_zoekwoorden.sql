-- Own SEO keyword database, replacing SE Ranking (subscription ends 18 Nov 2026).
-- seo_zoekwoorden: one row per keyword with search volume (Google Keyword Planner),
-- relevance, topic cluster, intent and the page that should rank for it.
-- seo_posities: position history per keyword and date (SE Ranking archive,
-- later Search Console), so trends stay visible after SE Ranking is gone.
create table if not exists public.seo_zoekwoorden (
  id bigint generated always as identity primary key,
  zoekwoord text not null unique,
  volume integer,
  volume_per_maand jsonb,
  cpc_laag numeric,
  cpc_hoog numeric,
  concurrentie text,
  concurrentie_index integer,
  kd integer,
  relevant boolean,
  intentie text check (intentie in ('koop', 'vergelijk', 'info', 'lokaal', 'irrelevant')),
  onderwerp text,
  pagina text,
  actie text,
  bron text not null default 'handmatig',
  notitie text,
  volume_bijgewerkt timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.seo_posities (
  id bigint generated always as identity primary key,
  zoekwoord text not null,
  datum date not null,
  positie integer,
  url text,
  bron text not null default 'se_ranking',
  created_at timestamptz not null default now(),
  unique (zoekwoord, datum, bron)
);

create index if not exists seo_zoekwoorden_onderwerp_idx on public.seo_zoekwoorden (onderwerp);
create index if not exists seo_posities_zoekwoord_datum_idx on public.seo_posities (zoekwoord, datum desc);

alter table public.seo_zoekwoorden enable row level security;
alter table public.seo_posities enable row level security;

drop policy if exists "seo_zoekwoorden admin" on public.seo_zoekwoorden;
create policy "seo_zoekwoorden admin" on public.seo_zoekwoorden
  for all to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));

drop policy if exists "seo_posities admin" on public.seo_posities;
create policy "seo_posities admin" on public.seo_posities
  for all to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));
