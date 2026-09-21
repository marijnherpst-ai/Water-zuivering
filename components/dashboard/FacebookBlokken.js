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

// ---------- Facebook-gezondheid ----------

const ACCOUNT_STATUS = {
  2: 'Facebook heeft je advertentieaccount uitgeschakeld.',
  3: 'Facebook kan je betaling niet afschrijven. Je advertenties kunnen stilvallen. Controleer je betaalmethode in Facebook.',
  7: 'Facebook controleert je account. Advertenties kunnen tijdelijk stilstaan.',
  8: 'Er staat een betaling open die nog wordt verwerkt.',
  9: 'Je account zit in een respijtperiode. Los je betaling snel op, anders stopt je advertentie.',
  100: 'Je advertentieaccount wordt gesloten.',
  101: 'Je advertentieaccount is gesloten.',
};

const CAMPAGNE_PROBLEEM = { WITH_ISSUES: 'heeft een probleem', DISAPPROVED: 'is afgekeurd door Facebook', PENDING_BILLING_INFO: 'wacht op betaalgegevens' };

export function AccountMelding({ account, campagnes }) {
  const meldingen = [];
  if (account && ACCOUNT_STATUS[account.account_status]) meldingen.push({ titel: 'Let op met je Facebook-account', tekst: ACCOUNT_STATUS[account.account_status] });
  const laatste = new Map();
  [...(campagnes || [])].sort((a, b) => (a.day < b.day ? -1 : 1)).forEach((c) => laatste.set(c.campaign_id, c));
  [...laatste.values()].forEach((c) => {
    if (CAMPAGNE_PROBLEEM[c.status]) meldingen.push({ titel: `Campagne "${c.campaign}" ${CAMPAGNE_PROBLEEM[c.status]}`, tekst: 'Open Advertentiebeheer in Facebook en kijk bij deze campagne wat er mis is.' });
  });
  if (meldingen.length === 0) return null;
  return (
    <div className="mt-5 space-y-2.5" role="alert">
      {meldingen.map((m, i) => (
        <div key={i} className="flex gap-3.5 rounded-2xl border border-[#FF5C6C]/35 bg-[#FF5C6C]/[0.09] p-4">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FF5C6C]/15 text-lg text-[#FF7A88]" aria-hidden="true">!</span>
          <div>
            <p className="font-semibold text-white">{m.titel}</p>
            <p className="mt-0.5 text-sm text-[#FFB4BC]">{m.tekst}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const RANKING = {
  ABOVE_AVERAGE: { tekst: 'Boven gemiddeld', klas: 'bg-[#3DDC97]/15 text-[#3DDC97] border-[#3DDC97]/30', punten: 0 },
  AVERAGE: { tekst: 'Gemiddeld', klas: 'bg-white/[0.05] text-[#B4BBC8] border-white/10', punten: 0 },
  BELOW_AVERAGE_10: { tekst: 'Onder gemiddeld', klas: 'bg-[#FF5C6C]/14 text-[#FF7A88] border-[#FF5C6C]/30', punten: 1 },
  BELOW_AVERAGE_20: { tekst: 'Onder gemiddeld', klas: 'bg-[#FF5C6C]/14 text-[#FF7A88] border-[#FF5C6C]/30', punten: 1 },
  BELOW_AVERAGE_35: { tekst: 'Ver onder gemiddeld', klas: 'bg-[#FF5C6C]/20 text-[#FF7A88] border-[#FF5C6C]/40', punten: 2 },
  UNKNOWN: { tekst: 'Te weinig data', klas: 'bg-white/[0.03] text-[#6B7482] border-white/[0.06]', punten: 0 },
};
const rank = (v) => RANKING[v] || RANKING.UNKNOWN;

function Tegel({ titel, waarde, status, uitleg, onder }) {
  const kleur = status ? KLEUR[status] : '#E9ECF1';
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-black/20 p-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8A93A3]">{titel}</p>
      <p className="mt-2 font-display text-2xl font-bold leading-none" style={{ color: kleur }}>{waarde}</p>
      <div className="mt-2 min-h-[1rem] text-xs">{onder}</div>
      <p className="mt-2 text-xs leading-relaxed text-[#6B7482]">{uitleg}</p>
    </div>
  );
}

function Verschil({ nu, vorig, hoogIsGoed, neutraal }) {
  if (!vorig || nu == null) return <span className="text-[#6B7482]">Nog geen vergelijking</span>;
  const pct = Math.round(((nu - vorig) / vorig) * 100);
  if (pct === 0) return <span className="text-[#6B7482]">Gelijk aan de periode ervoor</span>;
  const goed = neutraal ? null : pct > 0 === hoogIsGoed;
  const kleur = goed == null ? '#F3B93A' : goed ? '#3DDC97' : '#FF7A88';
  return <span style={{ color: kleur }} className="font-medium">{pct > 0 ? '▲' : '▼'} {Math.abs(pct)}% <span className="font-normal text-[#6B7482]">t.o.v. de periode ervoor</span></span>;
}

function som(rijen) {
  return rijen.reduce((t, r) => ({ imp: t.imp + (Number(r.impressions) || 0), klik: t.klik + (Number(r.clicks) || 0), kosten: t.kosten + (Number(r.cost) || 0), landing: t.landing + (Number(r.landing_views) || 0) }), { imp: 0, klik: 0, kosten: 0, landing: 0 });
}

const binnen = (rijen, b) => rijen.filter((r) => r.day >= b.van && r.day <= b.tot);

export function FacebookInzicht({ data, o }) {
  const a = useMemo(() => {
    const nu = som(binnen(data.campagnes, o.nu));
    const vorig = som(binnen(data.campagnes, o.eerder));
    const maat = (t) => ({
      ctr: t.imp > 0 ? t.klik / t.imp : null,
      cpc: t.klik > 0 ? t.kosten / t.klik : null,
      cpm: t.imp > 0 ? (t.kosten / t.imp) * 1000 : null,
      lpv: t.klik > 0 && t.landing > 0 ? Math.min(1, t.landing / t.klik) : null,
    });

    const perAd = (bereik) => {
      const k = new Map();
      binnen(data.zoekwoorden, bereik).forEach((r) => {
        const x = k.get(r.criterion_id) || { naam: r.keyword, adset: r.ad_group, imp: 0, klik: 0, landing: 0 };
        x.imp += Number(r.impressions) || 0; x.klik += Number(r.clicks) || 0; x.landing += Number(r.landing_views) || 0;
        k.set(r.criterion_id, x);
      });
      return k;
    };
    const adsNu = perAd(o.nu);
    const adsVorig = perAd(o.eerder);

    const moe = [];
    adsNu.forEach((x, id) => {
      const v = adsVorig.get(id);
      if (!v || x.imp < 500 || v.imp < 500) return;
      const ctrNu = x.klik / x.imp;
      const ctrVorig = v.klik / v.imp;
      if (ctrVorig > 0 && ctrNu / ctrVorig < 0.75) moe.push({ naam: x.naam, adset: x.adset, ctrNu, ctrVorig, daling: Math.round((1 - ctrNu / ctrVorig) * 100) });
    });
    moe.sort((p, q) => q.daling - p.daling);

    const zwaar = (data.bereik || []).filter((b) => b.days === o.periode.dagen && b.campaign_id !== '__account__' && b.frequency > 3);

    const trage = [];
    adsNu.forEach((x) => {
      if (x.klik >= 30 && x.landing > 0 && x.landing / x.klik < 0.7) trage.push({ naam: x.naam, adset: x.adset, klik: x.klik, lpv: Math.min(1, x.landing / x.klik) });
    });
    trage.sort((p, q) => p.lpv - q.lpv);

    const kwaliteit = [...(data.kwaliteit || [])]
      .map((k) => ({ ...k, ernst: rank(k.quality).punten + rank(k.engagement).punten + rank(k.conversion).punten }))
      .sort((p, q) => q.ernst - p.ernst);

    return { nu: maat(nu), vorig: maat(vorig), moe: moe.slice(0, 5), zwaar, trage: trage.slice(0, 4), kwaliteit: kwaliteit.slice(0, 10) };
  }, [data, o]);

  const ctrStatus = a.nu.ctr == null ? null : a.nu.ctr >= 0.01 ? 'goed' : a.nu.ctr >= 0.006 ? 'let-op' : 'slecht';
  const lpvStatus = a.nu.lpv == null ? null : a.nu.lpv >= 0.8 ? 'goed' : a.nu.lpv >= 0.65 ? 'let-op' : 'slecht';

  return (
    <section className={`${kaart} mt-5 p-5 sm:p-7`}>
      <Kop titel="Facebook-gezondheid" sub="De cijfers waar je op Facebook op moet letten, in gewone taal." />
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Tegel titel="Klikpercentage" waarde={a.nu.ctr != null ? `${getal(a.nu.ctr * 100, 2)}%` : '–'} status={ctrStatus}
          onder={<Verschil nu={a.nu.ctr} vorig={a.vorig.ctr} hoogIsGoed />}
          uitleg="Hoeveel mensen op je advertentie klikken als ze hem zien. Boven 1% is goed. Laag betekent dat beeld of tekst niet aanspreekt." />
        <Tegel titel="Kosten per klik" waarde={a.nu.cpc != null ? eur(a.nu.cpc) : '–'}
          onder={<Verschil nu={a.nu.cpc} vorig={a.vorig.cpc} hoogIsGoed={false} />}
          uitleg="Wat één bezoeker via Facebook je kost. Stijgt dit, dan wordt Facebook duurder of je advertentie minder aantrekkelijk." />
        <Tegel titel="Per 1.000 weergaven" waarde={a.nu.cpm != null ? eur(a.nu.cpm) : '–'}
          onder={<Verschil nu={a.nu.cpm} vorig={a.vorig.cpm} hoogIsGoed={false} />}
          uitleg="Wat Facebook rekent om je advertentie 1.000 keer te tonen. Zegt hoe duur je doelgroep is." />
        <Tegel titel="Bezoek na klik" waarde={a.nu.lpv != null ? `${Math.round(a.nu.lpv * 100)}%` : '–'} status={lpvStatus}
          onder={a.nu.lpv != null ? <Verschil nu={a.nu.lpv} vorig={a.vorig.lpv} hoogIsGoed /> : <span className="text-[#6B7482]">Nog niet gemeten</span>}
          uitleg="Hoeveel klikkers je pagina echt zien. Onder 70% is je pagina te traag of komen mensen per ongeluk binnen." />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A93A3]">Advertentiemoeheid</p>
          {a.moe.length === 0 && a.zwaar.length === 0 ? (
            <p className="rounded-2xl border border-white/[0.06] bg-black/20 p-4 text-sm text-[#B4BBC8]">Geen advertentie die duidelijk aan aantrekkingskracht verliest. Dat is goed nieuws.</p>
          ) : (
            <ul className="space-y-2.5">
              {a.zwaar.map((z) => (
                <li key={z.campaign_id} className="rounded-2xl border border-[#FF5C6C]/25 bg-[#FF5C6C]/[0.07] p-4 text-sm">
                  <p className="font-semibold text-white">{z.campaign}</p>
                  <p className="mt-0.5 text-[#FFB4BC]">Elke persoon zag deze campagne gemiddeld {getal(z.frequency, 1)} keer. Boven 3 raken mensen de advertentie beu. Vervang de advertentie of vergroot de doelgroep.</p>
                </li>
              ))}
              {a.moe.map((m) => (
                <li key={m.naam + m.adset} className="rounded-2xl border border-[#EDA71B]/25 bg-[#EDA71B]/[0.07] p-4 text-sm">
                  <p className="font-semibold text-white">{m.naam}</p>
                  <p className="mt-0.5 text-[#F3D28A]">Het klikpercentage daalde van {getal(m.ctrVorig * 100, 2)}% naar {getal(m.ctrNu * 100, 2)}% ({m.daling}% lager). Tijd voor een nieuwe versie.</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A93A3]">Klikken die je pagina niet halen</p>
          {a.trage.length === 0 ? (
            <p className="rounded-2xl border border-white/[0.06] bg-black/20 p-4 text-sm text-[#B4BBC8]">{a.nu.lpv == null ? 'Nog niet gemeten. Dit werkt zodra je Facebook-pixel op de site meet.' : 'Bij geen enkele advertentie haken veel klikkers af voordat de pagina laadt.'}</p>
          ) : (
            <ul className="space-y-2.5">
              {a.trage.map((t) => (
                <li key={t.naam + t.adset} className="rounded-2xl border border-[#FF5C6C]/25 bg-[#FF5C6C]/[0.07] p-4 text-sm">
                  <p className="font-semibold text-white">{t.naam}</p>
                  <p className="mt-0.5 text-[#FFB4BC]">Slechts {Math.round(t.lpv * 100)}% van {getal(t.klik)} klikkers zag de pagina. Je betaalt voor bezoekers die niet aankomen.</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {a.kwaliteit.length > 0 && (
        <div className="mt-7">
          <p className="mb-1 font-display text-lg font-bold text-white">Wat Facebook zelf van je advertenties vindt</p>
          <p className="mb-3 text-sm text-[#8A93A3]">Facebook geeft elke advertentie een beoordeling ten opzichte van concurrenten die dezelfde mensen willen bereiken. Onder gemiddeld betekent dat je meer betaalt voor minder resultaat.</p>
          <div className="hidden grid-cols-[minmax(0,2fr)_repeat(3,minmax(0,1fr))] gap-3 px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-[#6B7482] md:grid">
            <span>Advertentie</span><span>Kwaliteit</span><span>Interactie</span><span>Conversie</span>
          </div>
          <div className="space-y-2">
            {a.kwaliteit.map((k) => (
              <div key={k.ad_id} className="grid grid-cols-3 gap-2 rounded-2xl border border-white/[0.06] bg-black/20 p-3 md:grid-cols-[minmax(0,2fr)_repeat(3,minmax(0,1fr))] md:items-center md:gap-3">
                <div className="col-span-3 min-w-0 md:col-span-1">
                  <p className="truncate font-semibold text-white">{k.ad}</p>
                  <p className="truncate text-xs text-[#6B7482]">{k.adset}</p>
                </div>
                {[['Kwaliteit', k.quality], ['Interactie', k.engagement], ['Conversie', k.conversion]].map(([naam, v]) => (
                  <div key={naam}>
                    <p className="mb-1 text-[9px] uppercase tracking-wider text-[#6B7482] md:hidden">{naam}</p>
                    <span className={`inline-block rounded-full border px-2.5 py-1 text-[11px] font-semibold ${rank(v).klas}`}>{rank(v).tekst}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
