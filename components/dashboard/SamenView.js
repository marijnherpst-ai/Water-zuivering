'use client';

import { useEffect, useMemo, useState } from 'react';
import { PERIODES, STANDAARD_INSTELLINGEN, eur, getal } from '@/lib/dashboard/analyse';
import { KANAAL_NAAM, bouwSamen } from '@/lib/dashboard/samen';
import { uitloggen } from '@/app/dashboard/actions';
import { Klantreis } from './FacebookBlokken';

const kaart = 'rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.045] to-white/[0.02] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]';
const KLEUR = { google: '#EDA71B', facebook: '#5B9DFF' };
const NIVEAU = {
  goed: { icoon: '▲', klas: 'bg-[#3DDC97]/12 text-[#3DDC97]' },
  'let-op': { icoon: '!', klas: 'bg-[#FF5C6C]/12 text-[#FF7A88]' },
  info: { icoon: 'i', klas: 'bg-sky-400/12 text-sky-300' },
  test: { icoon: '◷', klas: 'bg-[#EDA71B]/12 text-[#F3B93A]' },
};
const BETROUWBAAR = {
  goed: { tekst: 'Betrouwbaar', klas: 'border-[#3DDC97]/30 bg-[#3DDC97]/10 text-[#3DDC97]' },
  beperkt: { tekst: 'Beperkt betrouwbaar', klas: 'border-[#EDA71B]/30 bg-[#EDA71B]/10 text-[#F3B93A]' },
  'te-weinig': { tekst: 'Te weinig gegevens', klas: 'border-[#FF5C6C]/30 bg-[#FF5C6C]/10 text-[#FF7A88]' },
};

function Gewoon({ u }) {
  if (!u) return null;
  return (
    <div className="mb-5 rounded-2xl border border-sky-400/20 bg-sky-400/[0.06] p-4">
      <p className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-300">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-400/20 text-[11px]">i</span>In gewone woorden
      </p>
      <dl className="space-y-2 text-sm leading-relaxed">
        <div><dt className="inline font-semibold text-white">Wat is dit? </dt><dd className="inline text-[#B4BBC8]">{u.wat}</dd></div>
        <div><dt className="inline font-semibold text-white">Wat zie je? </dt><dd className="inline text-[#B4BBC8]">{u.zie}</dd></div>
        <div><dt className="inline font-semibold text-white">Wat kun je ermee? </dt><dd className="inline text-[#B4BBC8]">{u.doe}</dd></div>
      </dl>
    </div>
  );
}

function Kop({ titel, sub }) {
  return (
    <div className="mb-4">
      <h2 className="font-display text-xl font-bold text-white">{titel}</h2>
      {sub && <p className="mt-1 text-sm text-[#8A93A3]">{sub}</p>}
    </div>
  );
}

function Kpi({ titel, waarde, onder }) {
  return (
    <div className={`${kaart} p-5`}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A93A3]">{titel}</p>
      <p className="mt-2 font-display text-[2rem] font-bold leading-none tracking-tight text-white">{waarde}</p>
      <p className="mt-3 text-xs leading-relaxed text-[#6B7482]">{onder}</p>
    </div>
  );
}

function LiftChart({ lift }) {
  const W = 820; const H = 200; const L = 10; const R = 10; const T = 14; const B = 26;
  const n = lift.dagen.length;
  const maxF = Math.max(...lift.fbReeks, 1);
  const maxM = Math.max(...lift.merkReeks, 1);
  const x = (i) => L + ((W - L - R) * i) / (n - 1);
  const y = (v, max) => T + (H - T - B) * (1 - v / max);
  const pad = (reeks, max) => reeks.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${y(v, max).toFixed(1)}`).join(' ');
  const kort = (d) => `${Number(d.slice(8, 10))}/${Number(d.slice(5, 7))}`;
  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Facebook-weergaven tegenover Google-klikken op je merknaam per dag">
        {[0, 0.5, 1].map((f) => <line key={f} x1={L} x2={W - R} y1={T + (H - T - B) * f} y2={T + (H - T - B) * f} stroke="rgba(255,255,255,0.06)" />)}
        <path d={pad(lift.fbReeks, maxF)} fill="none" stroke={KLEUR.facebook} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" opacity="0.95" />
        <path d={pad(lift.merkReeks, maxM)} fill="none" stroke={KLEUR.google} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
        {[0, Math.floor(n / 2), n - 1].map((i) => <text key={i} x={x(i)} y={H - 8} textAnchor={i === 0 ? 'start' : i === n - 1 ? 'end' : 'middle'} fontSize="11" fill="#8A93A3">{kort(lift.dagen[i])}</text>)}
      </svg>
      <div className="mt-1 flex flex-wrap gap-x-5 gap-y-1 text-xs text-[#8A93A3]">
        <span className="inline-flex items-center gap-2"><span className="h-0.5 w-4 rounded" style={{ background: KLEUR.facebook }} />Facebook: weergaven per dag</span>
        <span className="inline-flex items-center gap-2"><span className="h-0.5 w-4 rounded" style={{ background: KLEUR.google }} />Google: klikken op zoekopdrachten met je merknaam</span>
      </div>
    </div>
  );
}

function Lijst({ titel, sub, rijen }) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-black/20 p-4">
      <p className="text-sm font-semibold text-white">{titel}</p>
      <p className="mb-3 text-xs text-[#6B7482]">{sub}</p>
      {rijen.length === 0 ? (
        <p className="text-sm text-[#8A93A3]">Nog geen gegevens.</p>
      ) : (
        <ul className="space-y-2">
          {rijen.map((r) => (
            <li key={r.naam} className="flex items-center justify-between gap-3 text-sm">
              <span className="truncate text-[#D5DAE3]">{r.naam}</span>
              <span className="shrink-0 rounded-full bg-white/[0.06] px-2.5 py-0.5 text-xs font-semibold text-white">{r.aantal}x</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function SamenView({ data, email }) {
  const [periodeId, setPeriodeId] = useState('30');
  const [inst, setInst] = useState(STANDAARD_INSTELLINGEN);

  useEffect(() => {
    try {
      const o = JSON.parse(localStorage.getItem('wz-dash-inst') || 'null');
      if (o) setInst({ ...STANDAARD_INSTELLINGEN, ...o });
    } catch {}
  }, []);

  const s = useMemo(() => bouwSamen(data, periodeId, inst), [data, periodeId, inst]);

  const perioden = PERIODES.filter((p) => p.id !== 'vandaag');
  const kanalen = ['google', 'facebook'];
  const meerPct = s.betaald > 0 ? Math.round((s.meerdere / s.betaald) * 100) : 0;
  const maxEmmer = Math.max(...s.emmers.map((e) => e.aantal), 1);
  const klantreisLeads = data.leads.filter((l) => l.type !== 'giveaway' && l.day >= s.bereik.van && l.day <= s.bereik.tot && l.consent !== false);
  const brug = BETROUWBAAR[s.betrouwbaarheid];

  let hero;
  if (s.betrouwbaarheid === 'te-weinig') hero = { kleur: '#FF5C6C', titel: 'Nog te weinig aanvragen om conclusies te trekken', tekst: 'Zodra er ongeveer 30 aanvragen met een bekende route zijn, worden de verdelingen op deze pagina betrouwbaar. Tot die tijd geeft ze vooral een eerste indruk.' };
  else if (meerPct >= 20) hero = { kleur: '#5B9DFF', titel: `${meerPct}% van je aanvragen heeft meerdere kanalen nodig`, tekst: 'Google en Facebook werken samen. Beoordeel ze daarom niet los van elkaar en stuur op wat ze samen opleveren.' };
  else hero = { kleur: '#3DDC97', titel: 'Bijna alle aanvragen komen via één kanaal', tekst: 'Je kunt Google en Facebook op dit moment grotendeels los van elkaar beoordelen. Kijk hieronder of dat verandert.' };

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div className="pointer-events-none absolute -top-48 left-1/4 h-[480px] w-[480px] rounded-full bg-[#5B9DFF]/[0.08] blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[420px] w-[420px] rounded-full bg-[#EDA71B]/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-6 sm:px-6">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rotate-45 bg-[#EDA71B] shadow-[0_0_18px_#EDA71B]" />
            <div>
              <p className="font-display text-[11px] font-semibold uppercase tracking-[0.3em] text-[#EDA71B]">Water-zuivering</p>
              <h1 className="font-display text-2xl font-bold leading-tight text-white">Google en Facebook samen</h1>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1 text-xs font-semibold">
              {[['google', 'Google Ads'], ['facebook', 'Facebook'], ['samen', 'Samen'], ['advies', 'Advies']].map(([id, naam]) => (
                <a key={id} href={`/dashboard?bron=${id}${data.demo ? '&demo=1' : ''}`} className={`rounded-full px-3.5 py-1.5 transition ${id === 'samen' ? 'bg-white/12 text-white' : 'text-[#8A93A3] hover:text-white'}`}>{naam}</a>
              ))}
            </div>
            {email && (
              <a href={`/dashboard?bron=samen&demo=${data.demo ? 0 : 1}`}
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
            <strong className="text-white">Dit zijn voorbeeldcijfers, geen echte.</strong> Zodra Google en Facebook gekoppeld zijn en er aanvragen binnenkomen, verschijnen hier je echte cijfers.
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div role="tablist" aria-label="Periode" className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1">
            {perioden.map((p) => (
              <button key={p.id} role="tab" aria-selected={periodeId === p.id} onClick={() => setPeriodeId(p.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${periodeId === p.id ? 'bg-gradient-to-b from-[#F3B93A] to-[#D9950F] text-[#1A1204] shadow-[0_6px_20px_-6px_rgba(237,167,27,0.7)]' : 'text-[#B4BBC8] hover:text-white'}`}>{p.label}</button>
            ))}
          </div>
          <p className="text-xs text-[#6B7482]">Laatste {perioden.find((p) => p.id === periodeId)?.dagen} dagen. Alleen bezoekers met cookietoestemming, op hetzelfde apparaat.</p>
        </div>

        <section className={`${kaart} relative mt-5 overflow-hidden p-6 sm:p-8`}>
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full blur-3xl" style={{ background: hero.kleur, opacity: 0.16 }} />
          <div className="relative">
            <span className={`inline-block rounded-full border px-3 py-1 text-[11px] font-semibold ${brug.klas}`}>{brug.tekst}: {s.betaald} aanvragen met bekende route</span>
            <h2 className="mt-4 font-display text-2xl font-bold leading-snug text-white sm:text-[1.7rem]">{hero.titel}</h2>
            <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-[#B4BBC8]">{hero.tekst}</p>
          </div>
        </section>

        <section className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          <Kpi titel="Aanvragen met route" waarde={getal(s.betaald)} onder={`van ${getal(s.aantalLeads)} aanvragen in totaal. De rest kwam via SEO, direct of zonder cookietoestemming.`} />
          <Kpi titel="Via meerdere kanalen" waarde={`${meerPct}%`} onder={`${getal(s.meerdere)} aanvragen, waarvan ${getal(s.gemengd)} via zowel Google als Facebook.`} />
          <Kpi titel="Tijd tot aanvraag" waarde={s.mediaanDagen != null ? `${getal(s.mediaanDagen, 1)} dagen` : '–'} onder={s.mediaanDagenMeer != null ? `Bij meerdere kanalen: ${getal(s.mediaanDagenMeer, 1)} dagen (mediaan).` : 'Mediaan van eerste klik tot aanvraag.'} />
          <Kpi titel="Meetbaar" waarde={s.dekking != null ? `${Math.round(s.dekking * 100)}%` : '–'} onder="Van je aanvragen accepteert dit deel cookies. De rest schatten we erbij." />
        </section>

        <section className={`${kaart} mt-5 p-5 sm:p-7`}>
          <Kop titel="Wie krijgt de eer voor een aanvraag?" sub="Dezelfde aanvragen, op vier manieren geteld." />
          <Gewoon u={s.uitleg.eer} />
          <div className="space-y-4">
            {s.modellen.map((m) => {
              const g = m.perKanaal.google.ruw;
              const f = m.perKanaal.facebook.ruw;
              const totaal = g + f || 1;
              return (
                <div key={m.id}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-sm font-semibold text-white">{m.naam} <span className="font-normal text-[#6B7482]">· {m.uitleg}</span></p>
                  </div>
                  <div className="mt-2 flex h-9 overflow-hidden rounded-xl bg-white/[0.05]">
                    <div className="flex items-center justify-center text-xs font-bold text-[#1A1204]" style={{ width: `${(g / totaal) * 100}%`, background: KLEUR.google }}>{g > 0 ? `${Math.round((g / totaal) * 100)}%` : ''}</div>
                    <div className="flex items-center justify-center text-xs font-bold text-[#08111F]" style={{ width: `${(f / totaal) * 100}%`, background: KLEUR.facebook }}>{f > 0 ? `${Math.round((f / totaal) * 100)}%` : ''}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-2 flex gap-5 text-xs text-[#8A93A3]">
            {kanalen.map((k) => <span key={k} className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm" style={{ background: KLEUR[k] }} />{KANAAL_NAAM[k]}</span>)}
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/[0.06]">
            <div className="grid grid-cols-[minmax(0,1.2fr)_repeat(4,minmax(0,1fr))] gap-2 bg-black/30 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-[#6B7482]">
              <span>Kosten per aanvraag</span>{s.modellen.map((m) => <span key={m.id} className="text-right">{m.naam}</span>)}
            </div>
            {kanalen.map((k) => (
              <div key={k} className="grid grid-cols-[minmax(0,1.2fr)_repeat(4,minmax(0,1fr))] items-center gap-2 border-t border-white/[0.06] px-4 py-3 text-sm">
                <span className="font-semibold" style={{ color: KLEUR[k] }}>{KANAAL_NAAM[k]}</span>
                {s.modellen.map((m) => <span key={m.id} className="text-right font-display font-bold text-white">{m.perKanaal[k].cpl != null ? eur(m.perKanaal[k].cpl) : '–'}</span>)}
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-[#6B7482]">Uitgegeven in deze periode: Google {eur(s.kosten.google)}, Facebook {eur(s.kosten.facebook)}. Aanvragen zijn geschat voor bezoekers zonder cookietoestemming.</p>
        </section>

        <div className={`${kaart} mt-5 p-5 pb-1 sm:p-7 sm:pb-1`}>
          <p className="mb-3 font-display text-xl font-bold text-white">Welke weg namen mensen?</p>
          <Gewoon u={s.uitleg.route} />
        </div>
        <Klantreis leads={klantreisLeads} />

        <section className={`${kaart} mt-5 p-5 sm:p-7`}>
          <Kop titel="Hoe lang duurt het voor iemand een aanvraag doet?" sub="Tijd van de eerste klik tot de aanvraag." />
          <Gewoon u={s.uitleg.tijd} />
          <ul className="space-y-2.5">
            {s.emmers.map((e) => (
              <li key={e.naam}>
                <div className="flex items-baseline justify-between text-sm"><span className="text-[#D5DAE3]">{e.naam}</span><span className="text-xs text-[#8A93A3]">{e.aantal} aanvragen</span></div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/[0.06]"><div className="h-full rounded-full bg-gradient-to-r from-[#EDA71B] to-[#5B9DFF]" style={{ width: `${Math.max(e.aantal ? 4 : 0, (e.aantal / maxEmmer) * 100)}%` }} /></div>
              </li>
            ))}
          </ul>
        </section>

        <section className={`${kaart} mt-5 p-5 sm:p-7`}>
          <Kop titel="Welke advertenties helpen elkaar?" sub="Waar routes begonnen en waar ze eindigden." />
          <Gewoon u={s.uitleg.samenwerking} />
          <div className="grid gap-3 md:grid-cols-2">
            <Lijst titel="Google brengt, Facebook rondt af" sub="Google-advertentiegroepen waar de route begon" rijen={s.startpunten.googleNaarFacebook} />
            <Lijst titel="Facebook rondt de route af" sub="Facebook-campagnes die de aanvraag binnenhaalden" rijen={s.startpunten.facebookAfronden} />
            <Lijst titel="Facebook brengt, Google rondt af" sub="Facebook-advertenties waar de route begon" rijen={s.startpunten.facebookNaarGoogle} />
            <Lijst titel="Google rondt de route af" sub="Google-advertentiegroepen die de aanvraag binnenhaalden" rijen={s.startpunten.googleAfronden} />
          </div>
        </section>

        <section className={`${kaart} mt-5 p-5 sm:p-7`}>
          <Kop titel="Helpt Facebook ook mensen die niet klikken?" sub="Facebook-weergaven tegenover zoekopdrachten op je naam (laatste 60 dagen)." />
          <Gewoon u={s.uitleg.lift} />
          {s.lift ? (
            <>
              <LiftChart lift={s.lift} />
              <p className="mt-4 rounded-2xl border border-white/[0.06] bg-black/20 p-4 text-sm leading-relaxed text-[#B4BBC8]">
                {s.lift.r == null ? 'Nog niet genoeg gegevens.' : s.lift.r >= 0.5
                  ? <>Er is een <strong className="text-white">sterk verband</strong> ({getal(s.lift.r, 2)}). Dagen dat Facebook veel mensen bereikt, volgen {s.lift.lag === 0 ? 'diezelfde dag' : `${s.lift.lag} ${s.lift.lag === 1 ? 'dag' : 'dagen'} later`} meer merkzoekopdrachten in Google.</>
                  : s.lift.r >= 0.3 ? <>Er is een <strong className="text-white">matig verband</strong> ({getal(s.lift.r, 2)}). Test het door Facebook tijdelijk te halveren.</>
                  : <>Er is <strong className="text-white">geen duidelijk verband</strong> ({getal(s.lift.r, 2)}).</>}
                {' '}Een verband is een aanwijzing, geen bewijs.
              </p>
            </>
          ) : <p className="rounded-2xl border border-white/[0.06] bg-black/20 p-5 text-sm text-[#B4BBC8]">Nog niet genoeg gegevens. Hiervoor heb je minstens 20 dagen Facebook-cijfers en een Google-advertentiegroep met je merknaam nodig.</p>}
        </section>

        <section className={`${kaart} mt-5 p-5 sm:p-7`}>
          <Kop titel="Tellen Google en Facebook dubbel?" sub="Wat de platformen zeggen tegenover wat er echt binnenkwam." />
          <Gewoon u={s.uitleg.claims} />
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.06] bg-black/20 p-4"><p className="text-[11px] uppercase tracking-wider text-[#8A93A3]">Google claimt</p><p className="mt-1 font-display text-3xl font-bold" style={{ color: KLEUR.google }}>{getal(s.geclaimd.google, 0)}</p></div>
            <div className="rounded-2xl border border-white/[0.06] bg-black/20 p-4"><p className="text-[11px] uppercase tracking-wider text-[#8A93A3]">Facebook claimt</p><p className="mt-1 font-display text-3xl font-bold" style={{ color: KLEUR.facebook }}>{getal(s.geclaimd.facebook, 0)}</p></div>
            <div className="rounded-2xl border border-white/[0.06] bg-black/20 p-4"><p className="text-[11px] uppercase tracking-wider text-[#8A93A3]">Echt binnengekomen</p><p className="mt-1 font-display text-3xl font-bold text-white">{getal(s.aantalLeads)}</p></div>
          </div>
          <p className="mt-4 text-sm text-[#B4BBC8]">
            Je echte advertentiekosten per aanvraag, over alle bronnen heen: <strong className="text-white">{s.echteKosten != null ? eur(s.echteKosten) : 'onbekend'}</strong>. Dit is het getal om op te sturen, omdat het niet dubbel telt.
          </p>
        </section>

        <section className={`${kaart} mt-5 p-5 sm:p-7`}>
          <Kop titel="Wat ik verder opmerk" sub="Losse opmerkingen die niet in mijn advies bovenaan passen." />
          <ul className="space-y-2.5">
            {s.advies.filter((a) => a.niveau !== 'test').map((a, i) => (
              <li key={i} className="flex gap-3.5 rounded-2xl border border-white/[0.06] bg-black/20 p-4">
                <span className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-base font-bold ${NIVEAU[a.niveau].klas}`} aria-hidden="true">{NIVEAU[a.niveau].icoon}</span>
                <div className="min-w-0">
                  <p className="font-semibold text-white">{a.titel}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-[#8A93A3]">{a.tekst}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className={`${kaart} mt-5 p-5 sm:p-7`}>
          <Kop titel="Wat is er nodig voor betrouwbare cijfers?" sub="Een vinkje betekent dat het klopt. Bij een kruisje mis je nauwkeurigheid." />
          <Gewoon u={s.uitleg.checklist} />
          <ul className="space-y-2">
            {s.checklist.map((c) => (
              <li key={c.id} className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-black/20 p-3.5">
                <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${c.ok ? 'bg-[#3DDC97]/15 text-[#3DDC97]' : 'bg-[#FF5C6C]/15 text-[#FF7A88]'}`} aria-hidden="true">{c.ok ? '✓' : '✕'}</span>
                <div>
                  <p className="text-sm font-medium text-white">{c.tekst}</p>
                  <p className="text-xs text-[#6B7482]">{c.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
