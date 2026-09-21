-- Route details per lead (only stored with cookie consent, no personal data):
-- journey_days   = days between the first paid click and the lead
-- journey_detail = compact JSON of the touches: [{k: channel, m: minutes since first touch, c: campaign, a: ad group / ad}]
alter table public.lead_events add column if not exists journey_days numeric;
alter table public.lead_events add column if not exists journey_detail text;
