'use client';

import { useMemo } from 'react';
import { beoordeel, eur, getal } from '@/lib/dashboard/analyse';

const kaart = 'rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.045] to-white/[0.02] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]';
const KLEUR = { goed: '#3DDC97', 'let-op': '#EDA71B', slecht: '#FF5C6C', wacht: '#4B5361' };

function Kop({ titel, sub }) {
  return (
    <div className="mb-4">
      <h2 className="font-display text-xl font-bold text-white">{titel}</h2>
      {sub && <p className="mt-1 text-sm text-[#8A93A3]">{sub}</p>}
    </div>
  );
}

const GESLACHT = { female: 'Vrouwen', male: 'Mannen', unknown: 'Onbekend' };
const PLEK = {
  'facebook: feed': 'Facebook nieuwsoverzicht',
  'facebook: story': 'Facebook stories',
  'facebook: facebook_reels': 'Facebook reels',
  'facebook: marketplace': 'Facebook Marketplace',
  'instagram: feed': 'Instagram feed',
  'instagram: story': 'Instagram stories',
  'instagram: reels': 'Instagram reels',
  'instagram: explore': 'Instagram verkennen',
  'audience_network: classic': 'Partner-apps (Audience Network)',
  'messenger: messenger_inbox': 'Messenger',
};

function leeftijdLabel(bucket) {
  const [leeftijd, geslacht] = bucket.split(' · ');
  return `${GESLACHT[geslacht] || geslacht} ${leeftijd}`;
}

function verzamel(rijen, kind, inst, label) {
  const kaartje = new Map();
  rijen.filter((r) => r.kind === kind).forEach((r) => {
    const x = kaartje.get(r.bucket) || { bucket: r.bucket, kosten: 0, klikken: 0, leads: 0 };
    x.kosten += r.cost; x.klikken += r.clicks; x.leads += r.conversions;
    kaartje.set(r.bucket, x);
  });
  return [...kaartje.values()]
    .map((x) => {
      const leads = Math.round(x.leads * 10) / 10;
      const r = { ...x, leads, naam: label(x.bucket), cpl: leads > 0 ? x.kosten / leads : null };
      return { ...r, status: beoordeel({ kosten: r.kosten, klikken: r.klikken, leads }, inst).status };
    })
    .sort((a, b) => b.kosten - a.kosten);
}

function Balken({ rijen }) {
  const max = Math.max(...rijen.map((r) => r.kosten), 1);
  return (
    <ul className="space-y-2.5">
      {rijen.map((r) => (
        <li key={r.bucket}>
          <div className="flex items-baseline justify-between gap-3 text-sm">
            <span className="truncate font-medium text-white">{r.naam}</span>
            <span className="shrink-0 text-xs text-[#8A93A3]">
              {eur(r.kosten, 0)} · <span style={{ color: KLEUR[r.status] }}>{r.cpl != null ? `${eur(r.cpl)} per lead` : 'nog geen lead'}</span>
            </span>
          </div>
          <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
            <div className="h-full rounded-full" style={{ width: `${Math.max(3, (r.kosten / max) * 100)}%`, background: KLEUR[r.status] }} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Doelgroepen({ rijen, nu, inst }) {
  const { leeftijd, plaatsing } = useMemo(() => {
    const inRange = (rijen || []).filter((r) => r.day >= nu.van && r.day <= nu.tot);
    return {
      leeftijd: verzamel(inRange, 'age_gender', inst, leeftijdLabel).slice(0, 8),
      plaatsing: verzamel(inRange, 'placement', inst, (b) => PLEK[b] || b.replace(/_/g, ' ')),
    };
  }, [rijen, nu, inst]);

  if (leeftijd.length === 0 && plaatsing.length === 0) return null;
  const slechtsteLeeftijd = leeftijd.filter((r) => r.status === 'slecht')[0];
  const besteLeeftijd = [...leeftijd].filter((r) => r.cpl != null).sort((a, b) => a.cpl - b.cpl)[0];

  return (
    <section className={`${kaart} mt-5 p-5 sm:p-7`}>
      <Kop titel="Wie ziet je advertenties en wie reageert?" sub="Groen is goedkoop per lead, rood is duur. De balk laat zien hoeveel je aan die groep uitgaf." />
      {(besteLeeftijd || slechtsteLeeftijd) && (
        <div className="mb-5 grid gap-3 sm:grid-cols-2">
          {besteLeeftijd && (
            <div className="rounded-2xl border border-[#3DDC97]/25 bg-[#3DDC97]/[0.07] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3DDC97]">Beste doelgroep</p>
              <p className="mt-2 font-display text-xl font-bold text-white">{besteLeeftijd.naam}</p>
              <p className="text-sm text-[#B4BBC8]">{eur(besteLeeftijd.cpl)} per lead</p>
            </div>
          )}
          {slechtsteLeeftijd && (
            <div className="rounded-2xl border border-[#FF5C6C]/25 bg-[#FF5C6C]/[0.07] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FF7A88]">Verliest geld</p>
              <p className="mt-2 font-display text-xl font-bold text-white">{slechtsteLeeftijd.naam}</p>
              <p className="text-sm text-[#B4BBC8]">{eur(slechtsteLeeftijd.kosten, 0)} uitgegeven, {slechtsteLeeftijd.cpl != null ? `${eur(slechtsteLeeftijd.cpl)} per lead` : 'geen enkele lead'}</p>
            </div>
          )}
        </div>
      )}
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A93A3]">Leeftijd en geslacht</p>
          <Balken rijen={leeftijd} />
        </div>
        <div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A93A3]">Waar wordt de advertentie getoond</p>
          <Balken rijen={plaatsing} />
        </div>
      </div>
    </section>
  );
}

const KANAAL = { google: 'Google Ads', facebook: 'Facebook', overig: 'Overig' };
const routeNaam = (j) => j.split('>').filter(Boolean).map((k) => KANAAL[k] || k).join('  →  ');

export function Klantreis({ leads }) {
  const a = useMemo(() => {
    const met = leads.filter((l) => l.journey);
    const routes = new Map();
    const kanalen = { google: { eerste: 0, laatste: 0, hulp: 0 }, facebook: { eerste: 0, laatste: 0, hulp: 0 } };
    met.forEach((l) => {
      const s = l.journey.split('>').filter(Boolean);
      routes.set(l.journey, (routes.get(l.journey) || 0) + 1);
      Object.keys(kanalen).forEach((k) => {
        if (s[0] === k) kanalen[k].eerste += 1;
        if (s[s.length - 1] === k) kanalen[k].laatste += 1;
        if (s.includes(k) && s[s.length - 1] !== k) kanalen[k].hulp += 1;
      });
    });
    const lijst = [...routes.entries()].map(([journey, aantal]) => ({ journey, aantal, stappen: journey.split('>').length })).sort((x, y) => y.aantal - x.aantal);
    const meerdere = lijst.filter((r) => r.stappen > 1);
    return { totaal: met.length, lijst: lijst.slice(0, 6), kanalen, meerdereAantal: meerdere.reduce((t, r) => t + r.aantal, 0), topMeerdere: meerdere[0] || null };
  }, [leads]);

  return (
    <section className={`${kaart} mt-5 p-5 sm:p-7`}>
      <Kop titel="Klantreis: Google en Facebook samen" sub="Welke route bezoekers namen voor ze een aanvraag deden. Alleen bezoekers die cookies accepteerden, en alleen op hetzelfde apparaat." />
      {a.totaal === 0 ? (
        <p className="rounded-2xl border border-white/[0.06] bg-black/20 p-5 text-sm text-[#B4BBC8]">Nog geen aanvragen met een bekende route in deze periode. Zorg dat je Facebook-advertenties UTM-tags in de link hebben, dan verschijnt de route hier vanzelf.</p>
      ) : (
        <>
          <p className="mb-5 rounded-2xl border border-white/[0.06] bg-black/20 p-4 text-[15px] leading-relaxed text-[#B4BBC8]">
            <strong className="text-white">{a.meerdereAantal} van de {a.totaal} aanvragen</strong> ({Math.round((a.meerdereAantal / a.totaal) * 100)}%) kwamen na klikken op meerdere kanalen.
            {a.topMeerdere && <> De vaakste combinatie is <strong className="text-white">{routeNaam(a.topMeerdere.journey)}</strong> ({a.topMeerdere.aantal}x).</>}
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A93A3]">Vaakste routes</p>
              <ul className="space-y-2.5">
                {a.lijst.map((r) => (
                  <li key={r.journey}>
                    <div className="flex items-baseline justify-between gap-3 text-sm">
                      <span className="truncate font-medium text-white">{routeNaam(r.journey)}</span>
                      <span className="shrink-0 text-xs text-[#8A93A3]">{r.aantal} aanvragen</span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/[0.06]">
                      <div className="h-full rounded-full bg-gradient-to-r from-[#EDA71B] to-[#3DDC97]" style={{ width: `${Math.max(4, (r.aantal / a.lijst[0].aantal) * 100)}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A93A3]">Wat doet elk kanaal</p>
              <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
                <div className="grid grid-cols-4 gap-2 bg-black/30 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-[#6B7482]">
                  <span>Kanaal</span><span className="text-right">Bracht bezoeker</span><span className="text-right">Rondde af</span><span className="text-right">Hielp mee</span>
                </div>
                {['google', 'facebook'].map((k) => (
                  <div key={k} className="grid grid-cols-4 items-center gap-2 border-t border-white/[0.06] px-4 py-3 text-sm">
                    <span className="font-semibold text-white">{KANAAL[k]}</span>
                    <span className="text-right font-display text-lg font-bold text-[#F3B93A]">{getal(a.kanalen[k].eerste)}</span>
                    <span className="text-right font-display text-lg font-bold text-[#3DDC97]">{getal(a.kanalen[k].laatste)}</span>
                    <span className="text-right font-display text-lg font-bold text-sky-300">{getal(a.kanalen[k].hulp)}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-[#6B7482]">Hielp mee: het kanaal stond in de route maar was niet de laatste klik. Alleen kijken naar de laatste klik onderschat dit kanaal.</p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export function MetaSetup({ gekoppeld, status }) {
  if (gekoppeld && (!status || status.ok !== false)) return null;
  return (
    <div role="note" className={`mt-5 rounded-2xl border p-4 text-sm ${gekoppeld ? 'border-[#FF5C6C]/30 bg-[#FF5C6C]/[0.08] text-[#FF9AA5]' : 'border-white/10 bg-white/[0.03] text-[#B4BBC8]'}`}>
      {gekoppeld ? (
        <p><strong className="text-white">De koppeling met Facebook geeft een fout.</strong> {status?.message || 'Onbekende fout.'}</p>
      ) : (
        <>
          <p className="font-semibold text-white">Facebook is nog niet gekoppeld</p>
          <p className="mt-1">Zodra het toegangstoken in Vercel staat (als <code className="rounded bg-black/40 px-1.5 py-0.5 text-[#F3B93A]">META_ACCESS_TOKEN</code>), haalt dit dashboard vanzelf je Facebook-cijfers op. Tot die tijd zie je voorbeeldcijfers.</p>
        </>
      )}
    </div>
  );
}
