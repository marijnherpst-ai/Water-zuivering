-- Requests from the dashboard button "Laat Claude dit oplossen".
-- Only the admin can create, read and update them. No personal data is stored.
create table if not exists public.ads_review_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  status text not null default 'open' check (status in ('open', 'bezig', 'klaar')),
  period text,
  note text,
  items jsonb not null default '[]'::jsonb,
  result text,
  handled_at timestamptz
);
create index if not exists ads_review_requests_created_idx on public.ads_review_requests (created_at desc);
alter table public.ads_review_requests enable row level security;

drop policy if exists "ads_review_requests admin all" on public.ads_review_requests;
create policy "ads_review_requests admin all" on public.ads_review_requests
  for all to authenticated using (public.is_admin()) with check (public.is_admin());
