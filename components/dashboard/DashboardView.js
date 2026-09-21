'use client';

import { useEffect, useMemo, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { PERIODES, STANDAARD_INSTELLINGEN, bouwOverzicht, eur, getal, uitsluitWoord, verandering } from '@/lib/dashboard/analyse';
import { stuurAanvraag, synchroniseerMeta, uitloggen } from '@/app/dashboard/actions';
import { AccountMelding, Doelgroepen, FacebookInzicht, MetaSetup } from './FacebookBlokken';
import Chart from './Chart';
import UrenChart from './UrenChart';

const STATUS = {
  goed: { label: 'Presteert goed', klas: 'bg-[#3DDC97]/12 text-[#3DDC97] border-[#3DDC97]/25', balk: '#3DDC97' },
  'let-op': { label: 'Let op', klas: 'bg-[#EDA71B]/12 text-[#F3B93A] border-[#EDA71B]/25', balk: '#EDA71B' },
  slecht: { label: 'Verliest geld', klas: 'bg-[#FF5C6C]/12 text-[#FF7A88] border-[#FF5C6C]/25', balk: '#FF5C6C' },
  wacht: { label: 'Nog te vroeg', klas: 'bg-white/5 text-[#8A93A3] border-white/10', balk: '#4B5361' },
};

const TYPE_LABEL = { contact: 'Contactformulier', besparing: 'Besparingscheck', giveaway: 'Winactie', aanmelden: 'Aanmelding' };
const AANVRAAG_STATUS = {
  open: { label: 'Wacht op Claude', klas: 'bg-[#EDA71B]/12 text-[#F3B93A] border-[#EDA71B]/25' },
  bezig: { label: 'Claude is bezig', klas: 'bg-sky-400/10 text-sky-300 border-sky-400/25' },
  klaar: { label: 'Afgehandeld', klas: 'bg-[#3DDC97]/12 text-[#3DDC97] border-[#3DDC97]/25' },
};

const kaart = 'rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.045] to-white/[0.02] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]';

function Chip({ status, tekst }) {
  const s = STATUS[status];
  return <span className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] font-semibold ${s.klas}`}><span className="h-1.5 w-1.5 rounded-full" style={{ background: s.balk }} />{tekst || s.label}</span>;
}

function Delta({ nu, vorig, hoogIsGoed, neutraal }) {
  const v = verandering(nu, vorig);
  if (!v || v.pct == null) return <span className="text-xs text-[#6B7482]">{v?.nieuw ? 'Nieuw ten opzichte van eerder' : 'Nog geen vergelijking'}</span>;
  if (v.pct === 0) return <span className="text-xs text-[#6B7482]">Gelijk aan de periode ervoor</span>;
  const omhoog = v.pct > 0;
  const goed = neutraal ? null : omhoog === hoogIsGoed;
  const kleur = goed == null ? 'text-[#F3B93A]' : goed ? 'text-[#3DDC97]' : 'text-[#FF7A88]';
  return <span className={`text-xs font-medium ${kleur}`}>{omhoog ? '▲' : '▼'} {Math.abs(v.pct)}% <span className="font-normal text-[#6B7482]">t.o.v. de periode ervoor</span></span>;
}

function Kpi({ titel, waarde, onder, accent }) {
  return (
    <div className={`${kaart} relative overflow-hidden p-5`}>
      {accent && <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full blur-3xl" style={{ background: accent, opacity: 0.18 }} />}
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A93A3]">{titel}</p>
      <p className="mt-2 font-display text-[2rem] font-bold leading-none tracking-tight text-white">{waarde}</p>
      <div className="mt-3 min-h-[1rem]">{onder}</div>
    </div>
  );
}

function Ring({ pct, kleur }) {
  const r = 44;
  const omtrek = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 110 110" className="h-28 w-28 shrink-0 -rotate-90" aria-hidden="true">
      <circle cx="55" cy="55" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="9" />
      <circle cx="55" cy="55" r={r} fill="none" stroke={kleur} strokeWidth="9" strokeLinecap="round" strokeDasharray={`${(omtrek * pct) / 100} ${omtrek}`} style={{ filter: `drop-shadow(0 0 8px ${kleur}80)` }} />
    </svg>
  );
}

function Sectiekop({ titel, sub, rechts }) {
  return (
    <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h2 className="font-display text-xl font-bold text-white">{titel}</h2>
        {sub && <p className="mt-1 text-sm text-[#8A93A3]">{sub}</p>}
      </div>
      {rechts}
    </div>
  );
}

function RangRij({ nummer, r, soort, max }) {
  const goed = soort === 'wint';
  const waarde = goed ? r.leads : r.verlies;
  return (
    <li className="rounded-2xl border border-white/[0.06] bg-black/20 p-4">
      <div className="flex items-start gap-3.5">
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${goed ? 'bg-[#3DDC97]/15 text-[#3DDC97]' : 'bg-[#FF5C6C]/15 text-[#FF7A88]'}`}>{nummer}</span>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate font-semibold text-white">{r.naam}</p>
              {r.groep && <p className="truncate text-xs text-[#6B7482]">{r.groep}</p>}
            </div>
            <div className="shrink-0 text-right">
              <p className={`font-display text-lg font-bold leading-tight ${goed ? 'text-[#3DDC97]' : 'text-[#FF7A88]'}`}>
                {goed ? `${getal(r.leads, r.leads % 1 ? 1 : 0)} ${r.leads === 1 ? 'lead' : 'leads'}` : `− ${eur(r.verlies)}`}
              </p>
              <p className="text-xs text-[#8A93A3]">
                {goed ? `${eur(r.cpl)} per lead` : r.leads > 0 ? `${eur(r.cpl)} per lead` : 'geen enkele lead'}
              </p>
            </div>
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
            <div className="h-full rounded-full" style={{ width: `${Math.max(6, (waarde / max) * 100)}%`, background: goed ? '#3DDC97' : '#FF5C6C' }} />
          </div>
          <p className="mt-2 text-xs text-[#6B7482]">{eur(r.kosten)} uitgegeven · {getal(r.klikken)} klikken</p>
        </div>
      </div>
    </li>
  );
}

function AdviesGroep({ titel, kleur, items, alles }) {
  if (items.length === 0) return null;
  const zichtbaar = alles ? items : items.slice(0, 4);
  return (
    <div className="mt-5 first:mt-0">
      <p className="mb-2.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A93A3]">
        <span className="h-2 w-2 rounded-full" style={{ background: kleur }} />{titel} ({items.length})
      </p>
      <ul className="space-y-2.5">
        {zichtbaar.map((a) => (
          <li key={a.id} className="flex gap-3.5 rounded-2xl border border-white/[0.06] bg-black/20 p-4">
            <span className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-base ${a.niveau === 'slecht' ? 'bg-[#FF5C6C]/12 text-[#FF7A88]' : 'bg-[#3DDC97]/12 text-[#3DDC97]'}`} aria-hidden="true">
              {a.soort === 'pauzeer' ? '❚❚' : a.soort === 'uitsluiten' ? '⊘' : a.soort === 'meer' ? '▲' : a.soort === 'tijd' ? '◷' : '!'}
            </span>
            <div className="min-w-0">
              <p className="font-semibold text-white">{a.titel}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-[#8A93A3]">{a.uitleg}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const CEL = {
  goed: 'bg-[#3DDC97]/15 text-[#3DDC97] border-[#3DDC97]/30',
  'let-op': 'bg-[#EDA71B]/12 text-[#F3B93A] border-[#EDA71B]/25',
  slecht: 'bg-[#FF5C6C]/14 text-[#FF7A88] border-[#FF5C6C]/30',
  wacht: 'bg-white/[0.03] text-[#6B7482] border-white/[0.06]',
};

function uurTekst(v) {
  return `${v.van} tot ${v.tot} uur`;
}

function tijdTekst(iso) {
  if (!iso) return null;
  return new Date(iso).toLocaleString('nl-NL', { timeZone: 'Europe/Amsterdam', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
}

function kort(d) {
  return new Date(`${d}T12:00:00Z`).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short' });
}

export default function DashboardView({ data, email, geenEchteCijfers, metaGekoppeld }) {
  const router = useRouter();
  const fb = data.bron === 'facebook';
  const BRON = fb ? 'Facebook' : 'Google Ads';
  const [periodeId, setPeriodeId] = useState('7');
  const [inst, setInst] = useState(STANDAARD_INSTELLINGEN);
  const [tab, setTab] = useState('zoekwoorden');
  const [filter, setFilter] = useState('alles');
  const [alleAdvies, setAlleAdvies] = useState(false);
  const [paneel, setPaneel] = useState(false);
  const [notitie, setNotitie] = useState('');
  const [melding, setMelding] = useState(null);
  const [lokaleAanvragen, setLokaleAanvragen] = useState([]);
  const [bezig, start] = useTransition();

  useEffect(() => {
    try {
      const opgeslagen = JSON.parse(localStorage.getItem('wz-dash-inst') || 'null');
      if (opgeslagen) setInst({ ...STANDAARD_INSTELLINGEN, ...opgeslagen });
      const p = localStorage.getItem('wz-dash-periode');
      if (p && PERIODES.some((x) => x.id === p)) setPeriodeId(p);
    } catch {}
  }, []);

  const [synchroniseert, startSync] = useTransition();
  useEffect(() => {
    if (!fb || data.demo || !metaGekoppeld) return;
    synchroniseerMeta(false).then((r) => { if (r?.ok && !r.overgeslagen) router.refresh(); }).catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function versversFacebook() {
    startSync(async () => {
      await synchroniseerMeta(true);
      router.refresh();
    });
  }

  function kiesPeriode(id) {
    setPeriodeId(id);
    try { localStorage.setItem('wz-dash-periode', id); } catch {}
  }

  function wijzigInst(sleutel, waarde) {
    const nieuw = { ...inst, [sleutel]: Math.max(1, Number(waarde) || 1) };
    setInst(nieuw);
    try { localStorage.setItem('wz-dash-inst', JSON.stringify(nieuw)); } catch {}
  }

  const o = useMemo(() => bouwOverzicht(data, periodeId, inst), [data, periodeId, inst]);
  const kanOordelen = o.totaal.kosten > 0;
  const bereikRij = fb ? (data.bereik || []).find((b) => b.campaign_id === '__account__' && b.days === o.periode.dagen) : null;

  const lijst = { zoekwoorden: o.zoekwoorden, groepen: o.groepen, campagnes: o.campagnes, zoektermen: o.zoektermen }[tab];
  const gefilterd = lijst.filter((r) => (filter === 'alles' ? true : filter === 'slecht' ? r.oordeel.status === 'slecht' : r.oordeel.status === 'goed'));
  const maxKosten = Math.max(...lijst.map((r) => r.kosten), 1);
  const teller = (st) => lijst.filter((r) => r.oordeel.status === st).length;

  const aanvragen = [...lokaleAanvragen, ...data.aanvragen];

  function versturen() {
    setMelding(null);
    if (data.demo) {
      setLokaleAanvragen((l) => [{ id: `lokaal-${Date.now()}`, created_at: new Date().toISOString(), status: 'open', items: o.advies, note: notitie }, ...l]);
      setMelding({ ok: true });
      setPaneel(false);
      setNotitie('');
      return;
    }
    start(async () => {
      const r = await stuurAanvraag({ periode: o.periode.label + (fb ? ' · Facebook' : ''), notitie, items: o.advies });
      if (r.ok) {
        setMelding({ ok: true });
        setPaneel(false);
        setNotitie('');
        router.refresh();
      } else {
        setMelding({ ok: false, fout: r.fout });
      }
    });
  }

  let hero;
  const effectief = kanOordelen ? Math.max(0, Math.round((1 - o.verspild / o.totaal.kosten) * 100)) : null;
  if (!o.heeftData) {
    hero = { kleur: '#8A93A3', titel: 'Er zijn nog geen cijfers binnen', tekst: fb ? 'Zodra Facebook is gekoppeld en je advertenties worden getoond, verschijnen hier je cijfers. Je hoeft niets te doen.' : 'Zodra je advertenties worden getoond, stuurt Google Ads elk uur de cijfers hierheen. Je hoeft niets te doen.' };
  } else if (!kanOordelen) {
    hero = { kleur: '#8A93A3', titel: 'In deze periode is niets uitgegeven', tekst: 'Kies een langere periode om resultaten te zien.' };
  } else if (o.verspild >= inst.verspildVanaf) {
    hero = { kleur: '#FF5C6C', titel: `${eur(o.verspild)} is uitgegeven zonder resultaat`, tekst: 'Dit geld had beter kunnen worden gebruikt. Hieronder staat precies wat je kunt stoppen en waar je meer aan uit kunt geven.' };
  } else if (o.totaal.leads > 0) {
    hero = { kleur: '#3DDC97', titel: 'Goed bezig, je advertenties leveren leads op', tekst: `Gemiddeld kost een lead ${eur(o.totaal.cpl)}. Je doel is ${eur(inst.doelCpl, 0)}.` };
  } else {
    hero = { kleur: '#EDA71B', titel: 'Nog te vroeg om te oordelen', tekst: 'Er is geld uitgegeven maar er zijn nog te weinig klikken om iets te concluderen. Wacht nog een paar dagen.' };
  }

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div className="pointer-events-none absolute -top-48 left-1/4 h-[480px] w-[480px] rounded-full bg-[#EDA71B]/[0.09] blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[420px] w-[420px] rounded-full bg-[#3DDC97]/[0.05] blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-6 sm:px-6">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rotate-45 bg-[#EDA71B] shadow-[0_0_18px_#EDA71B]" />
            <div>
              <p className="font-display text-[11px] font-semibold uppercase tracking-[0.3em] text-[#EDA71B]">Water-zuivering</p>
              <h1 className="font-display text-2xl font-bold leading-tight text-white">Advertentie-overzicht</h1>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1 text-xs font-semibold">
              {[['google', 'Google Ads'], ['facebook', 'Facebook']].map(([id, naam]) => (
                <a key={id} href={`/dashboard?bron=${id}${data.demo ? '&demo=1' : ''}`}
                  className={`rounded-full px-3.5 py-1.5 transition ${data.bron === id ? 'bg-white/12 text-white' : 'text-[#8A93A3] hover:text-white'}`}>{naam}</a>
              ))}
            </div>
            {email && (
              <a href={`/dashboard?bron=${data.bron}&demo=${data.demo ? 0 : 1}`}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${data.demo ? 'border-[#EDA71B]/50 bg-[#EDA71B]/12 text-[#F3B93A]' : 'border-white/10 text-[#B4BBC8] hover:border-white/25 hover:text-white'}`}>
                {data.demo ? 'Voorbeeldcijfers: aan' : 'Voorbeeldcijfers bekijken'}
              </a>
            )}
            {email && (
              <form action={uitloggen}>
                <button className="rounded-full border border-white/10 px-4 py-1.5 text-xs text-[#B4BBC8] transition hover:border-white/25 hover:text-white">Uitloggen</button>
              </form>
            )}
          </div>
        </header>

        {data.demo && (
          <div role="note" className="mt-5 rounded-2xl border border-[#EDA71B]/30 bg-[#EDA71B]/[0.08] px-4 py-3 text-sm text-[#F3B93A]">
            <strong className="text-white">Dit zijn voorbeeldcijfers, geen echte.</strong>{' '}
            {geenEchteCijfers ? (fb ? 'Zodra Facebook is gekoppeld, verschijnen hier automatisch je echte cijfers.' : 'Zodra je advertenties vertoningen hebben, verschijnen hier automatisch je echte cijfers.') : 'Klik rechtsboven op "Voorbeeldcijfers: aan" om terug te gaan naar je echte cijfers.'}
          </div>
        )}

        {fb && <AccountMelding account={data.account} campagnes={data.campagnes} />}
        {fb && !data.demo && <MetaSetup gekoppeld={metaGekoppeld} status={data.syncStatus} />}
        {fb && data.demo && !metaGekoppeld && <MetaSetup gekoppeld={false} status={null} />}

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div role="tablist" aria-label="Periode" className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1">
            {PERIODES.map((p) => (
              <button key={p.id} role="tab" aria-selected={periodeId === p.id} onClick={() => kiesPeriode(p.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${periodeId === p.id ? 'bg-gradient-to-b from-[#F3B93A] to-[#D9950F] text-[#1A1204] shadow-[0_6px_20px_-6px_rgba(237,167,27,0.7)]' : 'text-[#B4BBC8] hover:text-white'}`}>
                {p.label}
              </button>
            ))}
          </div>
          <p className="text-xs text-[#6B7482]">
            {o.periode.dagen === 1 ? kort(o.nu.tot) : `${kort(o.nu.van)} t/m ${kort(o.nu.tot)}`}
            {' · '}
            {data.bijgewerkt ? `${BRON}-cijfers van ${tijdTekst(data.bijgewerkt)}` : `Nog geen cijfers van ${BRON} ontvangen`}
            {fb && !data.demo && metaGekoppeld && (
              <button onClick={versversFacebook} disabled={synchroniseert} className="ml-2 rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-[#B4BBC8] hover:text-white disabled:opacity-60">{synchroniseert ? 'Bezig…' : 'Nu verversen'}</button>
            )}
          </p>
        </div>

        <section className={`${kaart} relative mt-5 overflow-hidden p-6 sm:p-8`}>
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full blur-3xl" style={{ background: hero.kleur, opacity: 0.16 }} />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
            {effectief != null && (
              <div className="relative h-28 w-28 shrink-0">
                <Ring pct={effectief} kleur={effectief >= 80 ? '#3DDC97' : effectief >= 60 ? '#EDA71B' : '#FF5C6C'} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display text-2xl font-bold text-white">{effectief}%</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#8A93A3]">goed besteed</span>
                </div>
              </div>
            )}
            <div>
              <h2 className="font-display text-2xl font-bold leading-snug text-white sm:text-[1.7rem]">{hero.titel}</h2>
              <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-[#B4BBC8]">{hero.tekst}</p>
            </div>
          </div>
        </section>

        <section className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          <Kpi titel="Uitgegeven" waarde={eur(o.totaal.kosten)} accent="#EDA71B" onder={<Delta nu={o.totaal.kosten} vorig={o.vorig.kosten} neutraal />} />
          <Kpi titel="Leads" waarde={getal(o.totaal.leads, o.totaal.leads % 1 ? 1 : 0)} accent="#3DDC97" onder={<Delta nu={o.totaal.leads} vorig={o.vorig.leads} hoogIsGoed />} />
          <Kpi titel="Kosten per lead" waarde={o.totaal.cpl != null ? eur(o.totaal.cpl) : '–'} accent={o.totaal.cpl != null && o.totaal.cpl > inst.doelCpl ? '#FF5C6C' : '#3DDC97'}
            onder={o.totaal.cpl != null && o.vorig.cpl != null ? <Delta nu={o.totaal.cpl} vorig={o.vorig.cpl} hoogIsGoed={false} /> : <span className="text-xs text-[#6B7482]">Doel: {eur(inst.doelCpl, 0)} per lead</span>} />
          {fb && bereikRij ? (
            <Kpi titel="Bereik" waarde={getal(bereikRij.reach)} onder={<span className="text-xs text-[#6B7482]">Gemiddeld {getal(bereikRij.frequency, 1)}x gezien per persoon</span>} />
          ) : (
            <Kpi titel="Bezoekers via advertenties" waarde={getal(o.totaal.klikken)} onder={<Delta nu={o.totaal.klikken} vorig={o.vorig.klikken} hoogIsGoed />} />
          )}
        </section>

        <section className={`${kaart} mt-5 p-5 sm:p-7`}>
          <Sectiekop titel="Geld en leads per dag" sub="De gouden balken zijn wat je uitgaf, de groene lijn zijn je leads." />
          <Chart reeks={o.reeks} />
        </section>

        {fb && <FacebookInzicht data={data} o={o} />}

        <section className="mt-5 grid gap-4 lg:grid-cols-2">
          <div className={`${kaart} relative overflow-hidden p-5 sm:p-7`}>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#3DDC97] opacity-[0.12] blur-3xl" />
            <Sectiekop titel="Dit werkt" sub={o.wint.length ? `De beste ${o.zoekwoorden.length ? (fb ? 'advertenties' : 'zoekwoorden') : 'campagnes'}. Alles wat goed presteert levert samen ${getal(o.winstLeads, o.winstLeads % 1 ? 1 : 0)} leads op. Hier mag meer geld naartoe.` : undefined} />
            {o.wint.length === 0 ? (
              <p className="rounded-2xl border border-white/[0.06] bg-black/20 p-5 text-sm text-[#B4BBC8]">Nog niets dat aantoonbaar werkt in deze periode. Kies een langere periode of wacht op meer klikken.</p>
            ) : (
              <ul className="space-y-2.5">{o.wint.map((r, i) => <RangRij key={r.key} nummer={i + 1} r={r} soort="wint" max={Math.max(...o.wint.map((x) => x.leads), 1)} />)}</ul>
            )}
          </div>
          <div className={`${kaart} relative overflow-hidden p-5 sm:p-7`}>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#FF5C6C] opacity-[0.12] blur-3xl" />
            <Sectiekop titel="Dit verliest geld" sub={o.verliest.length ? `De duurste problemen. Samen ${eur(o.verliest.reduce((t, r) => t + r.verlies, 0))} weggegooid. Stop of pas aan.` : undefined} />
            {o.verliest.length === 0 ? (
              <p className="rounded-2xl border border-white/[0.06] bg-black/20 p-5 text-sm text-[#B4BBC8]">Er verliest op dit moment niets aantoonbaar geld. Kies een langere periode voor een completer beeld.</p>
            ) : (
              <ul className="space-y-2.5">{o.verliest.map((r, i) => <RangRij key={r.key} nummer={i + 1} r={r} soort="verlies" max={Math.max(...o.verliest.map((x) => x.verlies), 1)} />)}</ul>
            )}
          </div>
        </section>

        <section className="mt-5 grid gap-4 lg:grid-cols-3">
          <div className={`${kaart} p-5 sm:p-6`}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A93A3]">{fb ? 'Beste advertentieset' : 'Beste advertentiegroep'}</p>
            {o.besteGroep ? (
              <>
                <p className="mt-3 font-display text-xl font-bold text-white">{o.besteGroep.naam}</p>
                <p className="mt-1 text-sm text-[#3DDC97]">{getal(o.besteGroep.leads, o.besteGroep.leads % 1 ? 1 : 0)} leads voor {eur(o.besteGroep.cpl)} per lead</p>
              </>
            ) : <p className="mt-3 text-sm text-[#8A93A3]">Nog te vroeg om te zeggen.</p>}
            {o.slechtsteGroep && (
              <div className="mt-4 border-t border-white/[0.07] pt-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A93A3]">{fb ? 'Zwakste advertentieset' : 'Zwakste groep'}</p>
                <p className="mt-2 font-semibold text-white">{o.slechtsteGroep.naam}</p>
                <p className="mt-0.5 text-sm text-[#FF7A88]">{o.slechtsteGroep.oordeel.tekst}</p>
              </div>
            )}
          </div>

          <div className={`${kaart} p-5 sm:p-6`}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A93A3]">Beste dag van de week</p>
            {o.besteWeekdag ? (
              <>
                <p className="mt-3 font-display text-xl font-bold capitalize text-white">{o.besteWeekdag.lang}</p>
                <p className="mt-1 text-sm text-[#3DDC97]">Leads kosten hier gemiddeld {eur(o.besteWeekdag.cpl)}</p>
              </>
            ) : <p className="mt-3 text-sm text-[#8A93A3]">Nog te vroeg om te zeggen.</p>}
            <div className="mt-4 flex h-24 gap-1.5" aria-hidden="true">
              {o.weekdagen.map((w) => {
                const maxL = Math.max(...o.weekdagen.map((x) => x.leads), 1);
                const kleur = o.besteWeekdag && w.lang === o.besteWeekdag.lang ? '#3DDC97' : o.slechtsteWeekdag && w.lang === o.slechtsteWeekdag.lang ? '#FF5C6C' : '#EDA71B';
                return (
                  <div key={w.lang} className="flex h-full flex-1 flex-col items-center gap-1">
                    <div className="flex w-full flex-1 items-end">
                      <div className="w-full rounded-t-md" style={{ height: `${Math.max(6, (w.leads / maxL) * 100)}%`, background: kleur, opacity: 0.85 }} />
                    </div>
                    <span className="text-[10px] uppercase text-[#6B7482]">{w.kort}</span>
                  </div>
                );
              })}
            </div>
            {o.slechtsteWeekdag && <p className="mt-3 text-xs text-[#8A93A3]">Op {o.slechtsteWeekdag.lang} kost een lead {eur(o.slechtsteWeekdag.cpl)}. Overweeg dan minder te bieden.</p>}
          </div>

          {fb ? (
            <div className={`${kaart} p-5 sm:p-6`}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A93A3]">Hoe vaak zien mensen je advertentie</p>
              {bereikRij ? (
                <>
                  <p className={`mt-3 font-display text-3xl font-bold ${bereikRij.frequency > 3 ? 'text-[#FF7A88]' : bereikRij.frequency > 2.2 ? 'text-[#F3B93A]' : 'text-[#3DDC97]'}`}>{getal(bereikRij.frequency, 1)}x</p>
                  <p className="mt-1 text-sm text-[#B4BBC8]">{getal(bereikRij.reach)} mensen bereikt, {getal(bereikRij.impressions)} keer getoond.</p>
                  <p className="mt-3 text-xs text-[#8A93A3]">{bereikRij.frequency > 3 ? 'Dit is te vaak: mensen raken de advertentie beu. Ververs de advertentie of vergroot de doelgroep.' : bereikRij.frequency > 2.2 ? 'Let op: bij meer dan 3 keer per persoon nemen de resultaten meestal af.' : 'Dit is een gezond niveau.'}</p>
                </>
              ) : <p className="mt-3 text-sm text-[#8A93A3]">Nog geen bereikcijfers.</p>}
            </div>
          ) : (
          <div className={`${kaart} p-5 sm:p-6`}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A93A3]">Weggegooid op verkeerde zoekopdrachten</p>
            <p className="mt-3 font-display text-3xl font-bold text-[#FF7A88]">{eur(o.uitsluitKosten)}</p>
            <p className="mt-1 text-sm text-[#B4BBC8]">
              {o.zoektermen.filter((t) => uitsluitWoord(t.naam)).length} zoekopdrachten van mensen die niets willen kopen, zoals &quot;gratis&quot; of &quot;vervangen&quot;.
            </p>
            <p className="mt-3 text-xs text-[#6B7482]">Sluit ze uit en dat geld gaat naar echte klanten.</p>
          </div>
          )}
        </section>


        {o.tijden && (
          <section className={`${kaart} mt-5 p-5 sm:p-7`}>
            <Sectiekop titel="Beste tijdstippen" sub="Op basis van de laatste 30 dagen. Zo zie je wanneer je advertenties het best werken en wanneer je geld weggooit." />

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#3DDC97]/25 bg-[#3DDC97]/[0.07] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3DDC97]">Beste tijd</p>
                {o.tijden.beste ? (
                  <>
                    <p className="mt-2 font-display text-2xl font-bold text-white">{uurTekst(o.tijden.beste)}</p>
                    <p className="mt-0.5 text-sm text-[#B4BBC8]">{getal(o.tijden.beste.leads)} leads voor {eur(o.tijden.beste.cpl)} per lead</p>
                  </>
                ) : <p className="mt-2 text-sm text-[#B4BBC8]">Nog te vroeg om te zeggen.</p>}
              </div>
              <div className="rounded-2xl border border-[#FF5C6C]/25 bg-[#FF5C6C]/[0.07] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FF7A88]">Slechtste tijd</p>
                {o.tijden.slechtste ? (
                  <>
                    <p className="mt-2 font-display text-2xl font-bold text-white">{uurTekst(o.tijden.slechtste)}</p>
                    <p className="mt-0.5 text-sm text-[#B4BBC8]">{eur(o.tijden.slechtste.kosten)} uitgegeven, {o.tijden.slechtste.leads > 0 ? `${getal(o.tijden.slechtste.leads)} leads (${eur(o.tijden.slechtste.cpl)} per lead)` : 'geen enkele lead'}</p>
                  </>
                ) : <p className="mt-2 text-sm text-[#B4BBC8]">Geen tijd die duidelijk geld verliest.</p>}
              </div>
            </div>

            <div className="mt-5">
              <UrenChart uren={o.tijden.uren} beste={o.tijden.beste} slechtste={o.tijden.slechtste} />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {o.tijden.blokken.map((b) => (
                <div key={b.id} className={`rounded-2xl border p-4 ${CEL[b.oordeel.status]}`}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] opacity-90">{b.naam}</p>
                  <p className="text-[11px] opacity-70">{b.tijd}</p>
                  <p className="mt-2 font-display text-xl font-bold text-white">{b.cpl != null ? `${eur(b.cpl)}` : '–'}</p>
                  <p className="text-xs opacity-90">{b.cpl != null ? 'per lead' : 'nog geen lead'}</p>
                  <p className="mt-2 text-xs text-[#8A93A3]">{eur(b.kosten)} uitgegeven · {getal(b.leads, b.leads % 1 ? 1 : 0)} {b.leads === 1 ? 'lead' : 'leads'}</p>
                </div>
              ))}
            </div>

            <div className="mt-7">
              <p className="mb-1 font-display text-lg font-bold text-white">{fb ? 'Welke campagne werkt wanneer?' : 'Welke advertentiegroep werkt wanneer?'}</p>
              <p className="mb-3 text-sm text-[#8A93A3]">Per groep zie je wat een lead kost in elk deel van de dag. Groen is goedkoop, rood is duur, grijs is nog te weinig data.</p>
              <div className="hidden grid-cols-[minmax(0,1.6fr)_repeat(4,minmax(0,1fr))_minmax(0,1.3fr)] gap-2.5 px-1 pb-2 text-[11px] font-semibold uppercase tracking-wider text-[#6B7482] md:grid">
                <span>Advertentiegroep</span>
                {o.tijden.blokken.map((b) => <span key={b.id} className="text-center">{b.naam}</span>)}
                <span>Beste tijd</span>
              </div>
              <div className="space-y-2">
                {o.tijden.groepen.map((g) => (
                  <div key={g.key} className="grid grid-cols-4 gap-2 rounded-2xl border border-white/[0.06] bg-black/20 p-3 md:grid-cols-[minmax(0,1.6fr)_repeat(4,minmax(0,1fr))_minmax(0,1.3fr)] md:items-center md:gap-2.5">
                    <div className="col-span-4 min-w-0 md:col-span-1">
                      <p className="truncate font-semibold text-white">{g.naam}</p>
                      <p className="truncate text-xs text-[#6B7482]">{g.campagne} · {eur(g.kosten)}</p>
                    </div>
                    {g.blokken.map((b) => (
                      <div key={b.id} className={`rounded-xl border px-2 py-2 text-center ${CEL[b.oordeel.status]}`}>
                        <p className="text-[9px] uppercase tracking-wider opacity-70 md:hidden">{b.naam}</p>
                        <p className="font-display text-sm font-bold">{b.cpl != null ? eur(b.cpl, 0) : b.kosten >= 1 ? '0 leads' : '–'}</p>
                        <p className="text-[10px] opacity-80">{b.leads > 0 ? `${getal(b.leads, b.leads % 1 ? 1 : 0)} ${b.leads === 1 ? 'lead' : 'leads'}` : eur(b.kosten, 0)}</p>
                      </div>
                    ))}
                    <div className="col-span-4 md:col-span-1">
                      {g.beste ? (
                        <p className="text-sm"><span className="font-semibold text-[#3DDC97]">{g.beste.naam}</span> <span className="text-xs text-[#8A93A3]">{eur(g.beste.cpl, 0)} per lead</span></p>
                      ) : <p className="text-xs text-[#6B7482]">Nog te vroeg</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {fb && <Doelgroepen rijen={data.doelgroep} nu={o.nu} inst={inst} />}

        <section className={`${kaart} mt-5 p-5 sm:p-7`}>
          <Sectiekop titel="Wat moet ik nu doen?" sub={o.advies.length ? 'Op basis van de cijfers hierboven. Hoe hoger in de lijst, hoe meer geld het scheelt.' : undefined} />
          {o.advies.length === 0 ? (
            <p className="rounded-2xl border border-white/[0.06] bg-black/20 p-5 text-[15px] text-[#B4BBC8]">
              {o.heeftData ? 'Er is op dit moment niets dat je hoeft aan te passen. Kom later terug als er meer klikken zijn.' : 'Zodra er cijfers zijn, verschijnt hier wat je kunt aanpassen.'}
            </p>
          ) : (
            <>
              <AdviesGroep titel="Stoppen of aanpassen" kleur="#FF5C6C" items={o.advies.filter((a) => a.niveau === 'slecht')} alles={alleAdvies} />
              <AdviesGroep titel="Meer aan uitgeven" kleur="#3DDC97" items={o.advies.filter((a) => a.niveau === 'goed')} alles={alleAdvies} />
              {(o.advies.filter((a) => a.niveau === 'slecht').length > 4 || o.advies.filter((a) => a.niveau === 'goed').length > 4) && (
                <button onClick={() => setAlleAdvies((v) => !v)} className="mt-4 text-sm font-medium text-[#F3B93A] hover:underline">
                  {alleAdvies ? 'Toon minder' : `Toon alle ${o.advies.length} punten`}
                </button>
              )}

              <div className="mt-6 rounded-2xl border border-[#EDA71B]/25 bg-gradient-to-br from-[#EDA71B]/[0.12] to-transparent p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-display text-lg font-bold text-white">Laat Claude dit oplossen</p>
                    <p className="mt-1 max-w-xl text-sm text-[#B4BBC8]">Claude ontvangt deze {o.advies.length} punten, past in Google Ads de zoekwoorden en advertenties aan en zet slecht presterende dingen uit. Jij hoeft niets in Google Ads te doen.</p>
                  </div>
                  {!paneel && (
                    <button onClick={() => { setPaneel(true); setMelding(null); }} className="shrink-0 rounded-xl bg-gradient-to-b from-[#F3B93A] to-[#D9950F] px-6 py-3.5 font-semibold text-[#1A1204] shadow-[0_10px_30px_-8px_rgba(237,167,27,0.7)] transition hover:brightness-110">
                      Stuur naar Claude
                    </button>
                  )}
                </div>
                {paneel && (
                  <div className="mt-4 border-t border-white/10 pt-4">
                    <label className="text-sm text-[#B4BBC8]" htmlFor="notitie">Wil je iets meegeven? (mag leeg blijven)</label>
                    <textarea id="notitie" value={notitie} onChange={(e) => setNotitie(e.target.value)} rows={2} maxLength={1000}
                      placeholder="Bijvoorbeeld: laat de merknaam gewoon staan."
                      className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-[#5B6472] focus:border-[#EDA71B]/70" />
                    <div className="mt-3 flex gap-3">
                      <button onClick={versturen} disabled={bezig} className="rounded-xl bg-gradient-to-b from-[#F3B93A] to-[#D9950F] px-5 py-2.5 text-sm font-semibold text-[#1A1204] disabled:opacity-60">{bezig ? 'Versturen…' : 'Versturen'}</button>
                      <button onClick={() => setPaneel(false)} className="rounded-xl border border-white/15 px-5 py-2.5 text-sm text-[#B4BBC8] hover:bg-white/5">Annuleren</button>
                    </div>
                  </div>
                )}
                {melding?.ok && (
                  <p role="status" className="mt-4 rounded-xl border border-[#3DDC97]/25 bg-[#3DDC97]/10 p-3.5 text-sm text-[#7BE8B6]">
                    Verstuurd. Zeg nu tegen Claude: <span className="font-semibold text-white">“Kijk naar mijn dashboard-aanvraag”</span>, dan gaat Claude aan de slag.
                  </p>
                )}
                {melding && !melding.ok && <p role="alert" className="mt-4 text-sm text-[#FF7A88]">{melding.fout}</p>}
              </div>
            </>
          )}

          {aanvragen.length > 0 && (
            <div className="mt-6">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A93A3]">Eerdere aanvragen aan Claude</p>
              <ul className="space-y-2">
                {aanvragen.slice(0, 5).map((a) => (
                  <li key={a.id} className="rounded-2xl border border-white/[0.06] bg-black/20 px-4 py-3 text-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[#B4BBC8]">{tijdTekst(a.created_at)} · {(a.items || []).length} punten</span>
                      <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${AANVRAAG_STATUS[a.status]?.klas}`}>{AANVRAAG_STATUS[a.status]?.label}</span>
                    </div>
                    {a.result && <p className="mt-2 text-[#8A93A3]">{a.result}</p>}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <section className={`${kaart} mt-5 p-5 sm:p-7`}>
          <Sectiekop titel="Wat presteert goed en wat niet?" sub="Rood kost je geld zonder dat het iets oplevert, groen werkt." />
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5" role="tablist">
              {(fb ? [['zoekwoorden', 'Advertenties'], ['groepen', 'Advertentiesets'], ['campagnes', 'Campagnes']] : [['zoekwoorden', 'Zoekwoorden'], ['groepen', 'Advertentiegroepen'], ['campagnes', 'Campagnes'], ['zoektermen', 'Wat mensen typten']]).map(([id, naam]) => (
                <button key={id} role="tab" aria-selected={tab === id} onClick={() => setTab(id)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition ${tab === id ? 'border-[#EDA71B]/50 bg-[#EDA71B]/12 text-[#F3B93A]' : 'border-white/10 text-[#B4BBC8] hover:text-white'}`}>{naam}</button>
              ))}
            </div>
            <div className="flex gap-1.5 text-xs">
              {[['alles', `Alles (${lijst.length})`], ['slecht', `Verliest geld (${teller('slecht')})`], ['goed', `Goed (${teller('goed')})`]].map(([id, naam]) => (
                <button key={id} onClick={() => setFilter(id)} className={`rounded-full px-3 py-1.5 font-medium transition ${filter === id ? 'bg-white/10 text-white' : 'text-[#8A93A3] hover:text-white'}`}>{naam}</button>
              ))}
            </div>
          </div>

          <div className="mt-4 hidden grid-cols-[minmax(0,2.2fr)_1.3fr_0.7fr_0.6fr_0.9fr_1.4fr] gap-4 px-4 text-[11px] font-semibold uppercase tracking-wider text-[#6B7482] sm:grid">
            <span>Naam</span><span>Uitgegeven</span><span className="text-right">Klikken</span><span className="text-right">Leads</span><span className="text-right">Per lead</span><span>Oordeel</span>
          </div>

          <div className="mt-2 space-y-2">
            {gefilterd.length === 0 && (
              <p className="rounded-2xl border border-white/[0.06] bg-black/20 p-5 text-sm text-[#B4BBC8]">
                {lijst.length === 0 && o.campagnes.length > 0 && tab !== 'campagnes'
                  ? 'Deze lijst is leeg omdat je huidige campagne (Performance Max) geen zoekwoorden laat zien. Zodra je zoekcampagne draait, verschijnen ze hier.'
                  : lijst.length === 0 ? 'Nog geen gegevens in deze periode.' : 'Niets in deze selectie.'}
              </p>
            )}
            {gefilterd.slice(0, 60).map((r) => (
              <div key={r.key} className="grid grid-cols-6 gap-x-3 gap-y-3 rounded-2xl border border-white/[0.06] bg-black/20 px-4 py-3.5 sm:gap-x-4 sm:grid-cols-[minmax(0,2.2fr)_1.3fr_0.7fr_0.6fr_0.9fr_1.4fr] sm:items-center">
                <div className="col-span-6 min-w-0 sm:col-span-1">
                  <p className="truncate font-semibold text-white">{r.naam}</p>
                  {(r.groep || (tab === 'groepen' && r.campagne)) && <p className="truncate text-xs text-[#6B7482]">{tab === 'groepen' ? r.campagne : r.groep}</p>}
                  {tab === 'zoektermen' && uitsluitWoord(r.naam) && <p className="text-xs text-[#FF7A88]">Past niet bij je aanbod</p>}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-[10px] uppercase tracking-wider text-[#6B7482] sm:hidden">Uitgegeven</p>
                  <p className="font-display font-semibold text-white">{eur(r.kosten)}</p>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]"><div className="h-full rounded-full" style={{ width: `${Math.max(3, (r.kosten / maxKosten) * 100)}%`, background: STATUS[r.oordeel.status].balk }} /></div>
                </div>
                <div className="col-span-1 sm:text-right"><p className="text-[10px] uppercase tracking-wider text-[#6B7482] sm:hidden">Klikken</p><p className="text-[#D5DAE3]">{getal(r.klikken)}</p></div>
                <div className="col-span-1 sm:text-right"><p className="text-[10px] uppercase tracking-wider text-[#6B7482] sm:hidden">Leads</p><p className={r.leads > 0 ? 'font-semibold text-[#3DDC97]' : 'text-[#D5DAE3]'}>{getal(r.leads, r.leads % 1 ? 1 : 0)}</p></div>
                <div className="col-span-2 sm:col-span-1 sm:text-right"><p className="text-[10px] uppercase tracking-wider text-[#6B7482] sm:hidden">Per lead</p><p className="text-[#D5DAE3]">{r.cpl != null ? eur(r.cpl) : '–'}</p></div>
                <div className="col-span-6 sm:col-span-1"><Chip status={r.oordeel.status} /></div>
              </div>
            ))}
            {gefilterd.length > 60 && <p className="px-2 pt-1 text-xs text-[#6B7482]">De eerste 60 van {gefilterd.length} worden getoond.</p>}
          </div>
        </section>

        <section className={`${kaart} mt-5 p-5 sm:p-7`}>
          <Sectiekop titel="Aanvragen van je website" sub="Zonder naam of contactgegevens. Je ziet alleen waar de aanvraag vandaan kwam." />
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/[0.06] bg-black/20 p-4"><p className="text-[11px] uppercase tracking-wider text-[#8A93A3]">Via {BRON}</p><p className="mt-1 font-display text-3xl font-bold text-[#3DDC97]">{o.leadsViaAds}</p></div>
            <div className="rounded-2xl border border-white/[0.06] bg-black/20 p-4"><p className="text-[11px] uppercase tracking-wider text-[#8A93A3]">Alle aanvragen</p><p className="mt-1 font-display text-3xl font-bold text-white">{o.leads.length}</p></div>
          </div>
          {o.leads.length > 0 ? (
            <ul className="mt-4 divide-y divide-white/[0.06]">
              {o.leads.slice(0, 8).map((l) => (
                <li key={l.id} className="flex flex-wrap items-center justify-between gap-2 py-3 text-sm">
                  <div className="min-w-0">
                    <p className="font-medium text-white">{TYPE_LABEL[l.type] || l.type}</p>
                    <p className="truncate text-xs text-[#6B7482]">{l.pagina || '/'}{l.term ? ` · zocht op "${l.term}"` : ''}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${l.isAds ? 'border-[#3DDC97]/25 bg-[#3DDC97]/10 text-[#3DDC97]' : 'border-white/10 text-[#8A93A3]'}`}>{l.isAds ? BRON : 'Overig'}</span>
                    <span className="text-xs text-[#6B7482]">{tijdTekst(l.tijd)}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-sm text-[#8A93A3]">In deze periode zijn er geen aanvragen binnengekomen.</p>
          )}
        </section>

        <details className="mt-5 rounded-3xl border border-white/[0.07] px-5 py-4 text-sm text-[#B4BBC8]">
          <summary className="cursor-pointer font-medium text-white">Instellingen: wat vind je een goede prijs?</summary>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span>Zoveel mag een lead maximaal kosten</span>
              <div className="mt-1.5 flex items-center gap-2"><span className="text-[#8A93A3]">€</span><input type="number" min="1" value={inst.doelCpl} onChange={(e) => wijzigInst('doelCpl', e.target.value)} className="w-28 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white outline-none focus:border-[#EDA71B]/70" /></div>
            </label>
            <label className="block">
              <span>Rood zodra dit bedrag is uitgegeven zonder lead</span>
              <div className="mt-1.5 flex items-center gap-2"><span className="text-[#8A93A3]">€</span><input type="number" min="1" value={inst.verspildVanaf} onChange={(e) => wijzigInst('verspildVanaf', e.target.value)} className="w-28 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white outline-none focus:border-[#EDA71B]/70" /></div>
            </label>
          </div>
          <p className="mt-3 text-xs text-[#6B7482]">Deze instellingen worden alleen in je eigen browser bewaard.</p>
        </details>
      </div>
    </div>
  );
}
