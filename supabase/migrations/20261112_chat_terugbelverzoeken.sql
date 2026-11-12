-- Callback requests from the website chat assistant. Visitors can only insert;
-- reading is for admins (dashboard / Supabase), like contact_submissions.
create table if not exists public.chat_terugbelverzoeken (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  naam text not null check (char_length(naam) between 1 and 100),
  telefoon text not null check (char_length(telefoon) between 6 and 30),
  vraag text check (char_length(vraag) <= 1000),
  pagina text check (char_length(pagina) <= 200)
);

alter table public.chat_terugbelverzoeken enable row level security;

drop policy if exists "Anyone can request a callback" on public.chat_terugbelverzoeken;
create policy "Anyone can request a callback" on public.chat_terugbelverzoeken
  for insert to anon, authenticated with check (true);

drop policy if exists "Admins read callback requests" on public.chat_terugbelverzoeken;
create policy "Admins read callback requests" on public.chat_terugbelverzoeken
  for select to authenticated using ((select public.is_admin()));
