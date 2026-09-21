'use client';

import { useEffect, useMemo, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { PERIODES, STANDAARD_INSTELLINGEN, eur } from '@/lib/dashboard/analyse';
import { bouwSamen } from '@/lib/dashboard/samen';
import { stuurAanvraag, synchroniseerMeta, uitloggen } from '@/app/dashboard/actions';

const kaart = 'rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.045] to-white/[0.02] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]';
const ZEKER = { hoog: 'border-[#3DDC97]/30 bg-[#3DDC97]/10 text-[#3DDC97]', midden: 'border-[#EDA71B]/30 bg-[#EDA71B]/10 text-[#F3B93A]', laag: 'border-[#FF5C6C]/30 bg-[#FF5C6C]/10 text-[#FF7A88]' };
const KANAAL_CHIP = { google: 'border-[#EDA71B]/30 bg-[#EDA71B]/10 text-[#F3B93A]', facebook: 'border-[#5B9DFF]/30 bg-[#5B9DFF]/10 text-[#8DBAFF]', beide: 'border-white/15 bg-white/[0.06] text-white' };
const KANAAL_TEKST = { google: 'Google Ads', facebook: 'Facebook', beide: 'Google en Facebook' };
const BETROUWBAAR = {
  goed: { tekst: 'Betrouwbaar', klas: 'border-[#3DDC97]/30 bg-[#3DDC97]/10 text-[#3DDC97]' },
  beperkt: { tekst: 'Beperkt betrouwbaar', klas: 'border-[#EDA71B]/30 bg-[#EDA71B]/10 text-[#F3B93A]' },
  'te-weinig': { tekst: 'Te weinig gegevens', klas: 'border-[#FF5C6C]/30 bg-[#FF5C6C]/10 text-[#FF7A88]' },
};
const VEILIG = ['opruimen', 'meten', 'retarget'];

const uitvoerbaar = (a) => a.door !== 'jij' && !['wacht', 'budget-houd'].includes(a.soort);

function tijdTekst(iso) {
  if (!iso) return null;
  return new Date(iso).toLocaleString('nl-NL', { timeZone: 'Europe/Amsterdam', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
}

function Chip({ klas, children }) {
  return <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${klas}`}>{children}</span>;
}

function ActieKaart({ a, gekozen, onWissel }) {
  const [open, setOpen] = useState(false);
  const kan = uitvoerbaar(a);
  return (
    <li className={`rounded-2xl border p-4 transition sm:p-5 ${gekozen ? 'border-[#EDA71B]/40 bg-[#EDA71B]/[0.05]' : 'border-white/[0.08] bg-black/25'}`}>
      <div className="flex gap-3.5">
        {kan ? (
          <button onClick={onWissel} role="checkbox" aria-checked={gekozen} aria-label={`Selecteer: ${a.titel}`}
            className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border text-sm font-bold transition ${gekozen ? 'border-[#EDA71B] bg-gradient-to-b from-[#F3B93A] to-[#D9950F] text-[#1A1204]' : 'border-white/20 bg-black/30 text-transparent hover:border-white/40'}`}>✓</button>
        ) : (
          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-xs text-[#6B7482]" aria-hidden="true">{a.door === 'jij' ? '☝' : '–'}</span>
        )}
        <div className="min-w-0 flex-1">
          <p className="font-display text-lg font-bold leading-snug text-white">{a.titel}</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <Chip klas={KANAAL_CHIP[a.kanaal] || KANAAL_CHIP.beide}>{KANAAL_TEKST[a.kanaal] || 'Beide'}</Chip>
            <Chip klas={ZEKER[a.zekerheid] || ZEKER.midden}>Zekerheid: {a.zekerheid}</Chip>
            {a.door === 'jij' && <Chip klas="border-[#EDA71B]/30 bg-[#EDA71B]/10 text-[#F3B93A]">Dit doe jij</Chip>}
            {a.kosten > 0 && a.soort === 'opruimen' && <Chip klas="border-[#FF5C6C]/30 bg-[#FF5C6C]/10 text-[#FF7A88]">{eur(a.kosten, 0)} weggegooid</Chip>}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-[#B4BBC8]"><strong className="text-white">Waarom: </strong>{a.waarom}</p>
          <p className="mt-2 text-sm leading-relaxed text-[#B4BBC8]"><strong className="text-white">{a.door === 'jij' ? 'Wat jij doet: ' : 'Wat ik ga doen: '}</strong>{a.actie}</p>
          {a.items && a.items.length > 0 && (
            <>
              <button onClick={() => setOpen((v) => !v)} className="mt-3 text-sm font-medium text-[#F3B93A] hover:underline">{open ? 'Verberg details' : `Bekijk de ${a.items.length} onderdelen`}</button>
              {open && (
                <ul className="mt-2 space-y-1.5">
                  {a.items.slice(0, 40).map((i, k) => (
                    <li key={i.id || k} className="rounded-xl border border-white/[0.05] bg-black/25 px-3 py-2 text-xs">
                      <span className="mr-2 font-semibold uppercase tracking-wider text-[#6B7482]">{KANAAL_TEKST[i.kanaal] || ''}</span>
                      <span className="text-[#D5DAE3]">{i.titel}</span>
                    </li>
                  ))}
                  {a.items.length > 40 && <li className="px-1 text-xs text-[#6B7482]">En nog {a.items.length - 40} andere.</li>}
                </ul>
              )}
            </>
          )}
        </div>
      </div>
    </li>
  );
}

function Groep({ titel, sub, acties, selectie, wissel }) {
  if (acties.length === 0) return null;
  return (
    <div className="mt-7 first:mt-0">
      <h3 className="font-display text-lg font-bold text-white">{titel}</h3>
      {sub && <p className="mb-3 mt-0.5 text-sm text-[#8A93A3]">{sub}</p>}
      <ul className="mt-3 space-y-3">{acties.map((a) => <ActieKaart key={a.id} a={a} gekozen={selectie.has(a.id)} onWissel={() => wissel(a.id)} />)}</ul>
    </div>
  );
}

export default function AdviesView({ data, email, metaGekoppeld }) {
  const router = useRouter();
  const [periodeId, setPeriodeId] = useState('30');
  const [inst, setInst] = useState(STANDAARD_INSTELLINGEN);
  const [gekozen, setGekozen] = useState(null);
  const [notitie, setNotitie] = useState('');
  const [melding, setMelding] = useState(null);
  const [lokaal, setLokaal] = useState([]);
  const [bezig, start] = useTransition();

  useEffect(() => {
    try {
      const o = JSON.parse(localStorage.getItem('wz-dash-inst') || 'null');
      if (o) setInst({ ...STANDAARD_INSTELLINGEN, ...o });
    } catch {}
  }, []);

  useEffect(() => {
    if (data.demo || !metaGekoppeld) return;
    synchroniseerMeta(false).then((r) => { if (r?.ok && !r.overgeslagen) router.refresh(); }).catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const s = useMemo(() => bouwSamen(data, periodeId, inst), [data, periodeId, inst]);
  const perioden = PERIODES.filter((p) => p.id !== 'vandaag');

  const standaard = useMemo(() => new Set(s.acties.filter((a) => uitvoerbaar(a) && a.zekerheid !== 'laag' && a.soort !== 'test').map((a) => a.id)), [s]);
  const selectie = gekozen ?? standaard;
  const wissel = (id) => {
    const nieuw = new Set(selectie);
    if (nieuw.has(id)) nieuw.delete(id); else nieuw.add(id);
    setGekozen(nieuw);
  };
  const kiesPeriode = (id) => { setPeriodeId(id); setGekozen(null); };

  const uitvoerbaarLijst = s.acties.filter(uitvoerbaar);
  const nu = uitvoerbaarLijst.filter((a) => a.prio === 1);
  const daarna = uitvoerbaarLijst.filter((a) => a.prio === 2);
  const later = uitvoerbaarLijst.filter((a) => a.prio >= 3);
  const laten = s.acties.filter((a) => !uitvoerbaar(a) && a.door !== 'jij');
  const jij = s.acties.filter((a) => a.door === 'jij');
  const opruim = s.acties.find((a) => a.id === 'opruimen');
  const aantalGekozen = uitvoerbaarLijst.filter((a) => selectie.has(a.id)).length;
  const brug = BETROUWBAAR[s.betrouwbaarheid];

  function versturen() {
    setMelding(null);
    const gekozenActies = uitvoerbaarLijst.filter((a) => selectie.has(a.id));
    const items = [];
    gekozenActies.forEach((a) => {
      items.push({
        soort: a.soort, titel: a.titel, uitleg: a.waarom, kanaal: a.kanaal, actie: a.actie, zekerheid: a.zekerheid, door: a.door,
        ref: { niveau: 'cross', naam: a.titel, campagne: a.kanaal, reden: a.actie, kosten: a.kosten || 0 },
      });
      (a.items || []).slice(0, 40).forEach((i) => items.push({ soort: i.soort, titel: i.titel, uitleg: i.uitleg, kanaal: i.kanaal, ref: i.ref }));
    });
    if (items.length === 0) { setMelding({ ok: false, fout: 'Kies eerst minstens één actie.' }); return; }
    if (data.demo) {
      setLokaal((l) => [{ id: `lokaal-${Date.now()}`, created_at: new Date().toISOString(), status: 'open', items, note: notitie }, ...l]);
      setMelding({ ok: true, aantal: gekozenActies.length });
      setNotitie('');
      return;
    }
    start(async () => {
      const r = await stuurAanvraag({ periode: `${s.periode.label} · Advies`, notitie, items: items.slice(0, 80) });
      if (r.ok) { setMelding({ ok: true, aantal: gekozenActies.length }); setNotitie(''); router.refresh(); } else setMelding({ ok: false, fout: r.fout });
    });
  }

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div className="pointer-events-none absolute -top-48 left-1/4 h-[480px] w-[480px] rounded-full bg-[#EDA71B]/[0.10] blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[420px] w-[420px] rounded-full bg-[#5B9DFF]/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-4xl px-4 pb-32 pt-6 sm:px-6">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rotate-45 bg-[#EDA71B] shadow-[0_0_18px_#EDA71B]" />
            <div>
              <p className="font-display text-[11px] font-semibold uppercase tracking-[0.3em] text-[#EDA71B]">Water-zuivering</p>
              <h1 className="font-display text-2xl font-bold leading-tight text-white">Advies van Claude</h1>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1 text-xs font-semibold">
              {[['google', 'Google Ads'], ['facebook', 'Facebook'], ['samen', 'Samen'], ['advies', 'Advies']].map(([id, naam]) => (
                <a key={id} href={`/dashboard?bron=${id}${data.demo ? '&demo=1' : ''}`} className={`rounded-full px-3.5 py-1.5 transition ${id === 'advies' ? 'bg-white/12 text-white' : 'text-[#8A93A3] hover:text-white'}`}>{naam}</a>
              ))}
            </div>
            {email && (
              <a href={`/dashboard?bron=advies&demo=${data.demo ? 0 : 1}`}
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
            <strong className="text-white">Dit zijn voorbeeldcijfers, geen echte.</strong> Met echte cijfers verschijnen hier je eigen adviezen, gebaseerd op je live Google- en Facebook-data.
          </div>
        )}

        <section className={`${kaart} relative mt-5 overflow-hidden p-6 ring-1 ring-[#EDA71B]/25 sm:p-8`}>
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#EDA71B] opacity-[0.10] blur-3xl" />
          <div className="relative">
            <div className="flex flex-wrap items-center gap-2">
              <Chip klas={brug.klas}>{brug.tekst}</Chip>
              <span className="text-xs text-[#6B7482]">Google: {tijdTekst(data.google?.bijgewerkt) ? `cijfers van ${tijdTekst(data.google.bijgewerkt)}` : 'nog geen cijfers'} · Facebook: {tijdTekst(data.facebook?.bijgewerkt) ? `cijfers van ${tijdTekst(data.facebook.bijgewerkt)}` : 'nog niet gekoppeld'}</span>
            </div>
            <h2 className="mt-4 font-display text-2xl font-bold leading-snug text-white sm:text-[1.8rem]">Alles wat ik zou aanpassen, op basis van je cijfers</h2>
            <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#D5DAE3]">{s.kern}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/[0.08] bg-black/25 p-4"><p className="text-[11px] uppercase tracking-wider text-[#8A93A3]">Acties klaar</p><p className="mt-1 font-display text-3xl font-bold text-white">{uitvoerbaarLijst.length}</p></div>
              <div className="rounded-2xl border border-white/[0.08] bg-black/25 p-4"><p className="text-[11px] uppercase tracking-wider text-[#8A93A3]">Geld dat nu weglekt</p><p className="mt-1 font-display text-3xl font-bold text-[#FF7A88]">{opruim ? eur(opruim.kosten, 0) : eur(0, 0)}</p></div>
              <div className="rounded-2xl border border-white/[0.08] bg-black/25 p-4"><p className="text-[11px] uppercase tracking-wider text-[#8A93A3]">Gebaseerd op</p><p className="mt-1 font-display text-3xl font-bold text-white">{s.betaald} <span className="text-base font-medium text-[#8A93A3]">aanvragen</span></p></div>
            </div>
          </div>
        </section>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <div role="tablist" aria-label="Periode" className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1">
            {perioden.map((p) => (
              <button key={p.id} role="tab" aria-selected={periodeId === p.id} onClick={() => kiesPeriode(p.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${periodeId === p.id ? 'bg-gradient-to-b from-[#F3B93A] to-[#D9950F] text-[#1A1204] shadow-[0_6px_20px_-6px_rgba(237,167,27,0.7)]' : 'text-[#B4BBC8] hover:text-white'}`}>{p.label}</button>
            ))}
          </div>
          <div className="flex gap-2 text-xs">
            <button onClick={() => setGekozen(new Set(uitvoerbaarLijst.map((a) => a.id)))} className="rounded-full border border-white/10 px-3.5 py-1.5 font-semibold text-[#B4BBC8] hover:text-white">Alles kiezen</button>
            <button onClick={() => setGekozen(new Set(uitvoerbaarLijst.filter((a) => VEILIG.includes(a.soort)).map((a) => a.id)))} className="rounded-full border border-white/10 px-3.5 py-1.5 font-semibold text-[#B4BBC8] hover:text-white">Alleen veilige acties</button>
            <button onClick={() => setGekozen(new Set())} className="rounded-full border border-white/10 px-3.5 py-1.5 font-semibold text-[#B4BBC8] hover:text-white">Niets</button>
          </div>
        </div>

        <section className={`${kaart} mt-5 p-5 sm:p-7`}>
          <Groep titel="Nu doen" sub="Dit levert het meeste op of kost je nu geld." acties={nu} selectie={selectie} wissel={wissel} />
          <Groep titel="Daarna" sub="Goed om te doen, maar minder dringend." acties={daarna} selectie={selectie} wissel={wissel} />
          <Groep titel="Later of testen" sub="Kleinere verbeteringen en proeven. Staan standaard uit." acties={later} selectie={selectie} wissel={wissel} />
          {uitvoerbaarLijst.length === 0 && <p className="rounded-2xl border border-white/[0.06] bg-black/20 p-5 text-sm text-[#B4BBC8]">Er is op dit moment niets dat ik voor je kan aanpassen. Kom terug als er meer cijfers zijn.</p>}
        </section>

        {laten.length > 0 && (
          <section className={`${kaart} mt-5 p-5 sm:p-7`}>
            <h3 className="font-display text-lg font-bold text-white">Hier verander ik niets</h3>
            <p className="mb-3 mt-0.5 text-sm text-[#8A93A3]">Dit werkt naar behoren of er is nog te weinig data.</p>
            <ul className="space-y-3">{laten.map((a) => <ActieKaart key={a.id} a={a} gekozen={false} onWissel={() => {}} />)}</ul>
          </section>
        )}

        {jij.length > 0 && (
          <section className={`${kaart} mt-5 p-5 sm:p-7`}>
            <h3 className="font-display text-lg font-bold text-white">Dit kan alleen jij doen</h3>
            <p className="mb-3 mt-0.5 text-sm text-[#8A93A3]">Daar heb ik jouw toegang of jouw inloggegevens voor nodig.</p>
            <ul className="space-y-3">{jij.map((a) => <ActieKaart key={a.id} a={a} gekozen={false} onWissel={() => {}} />)}</ul>
          </section>
        )}

        <section className={`${kaart} mt-5 p-5 sm:p-7`}>
          <h3 className="font-display text-lg font-bold text-white">Zo werkt het</h3>
          <ol className="mt-3 space-y-2.5 text-sm leading-relaxed text-[#B4BBC8]">
            <li><strong className="text-white">1. Jij kiest.</strong> Vink aan wat ik mag doen en druk op de knop onderaan. Meer hoef je niet in te vullen.</li>
            <li><strong className="text-white">2. Jij zegt het tegen mij.</strong> Typ in Claude: <span className="font-semibold text-white">“Kijk naar mijn dashboard-aanvraag”</span>.</li>
            <li><strong className="text-white">3. Ik voer het uit.</strong> Ik pas het aan in Google Ads en Facebook en meld hier terug wat ik deed.</li>
          </ol>
          <div className="mt-5 rounded-2xl border border-white/[0.08] bg-black/25 p-4 text-sm leading-relaxed text-[#B4BBC8]">
            <p className="font-semibold text-white">Zo houd ik het veilig</p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Ik verander een budget nooit met meer dan 20% per keer en wacht 7 dagen voor de volgende stap.</li>
              <li>Loopt een kanaal daarna duurder dan {eur(inst.doelCpl * 1.3, 0)} per aanvraag, dan zet ik de wijziging terug.</li>
              <li>Ik verwijder niets, ik zet alleen op pauze. Je kunt alles terugzetten.</li>
              <li>Zijn er te weinig gegevens, dan verander ik je budgetten niet en zeg ik dat eerlijk.</li>
              <li>Ik werk in je ingelogde browser. Je computer moet aan staan en Claude in Chrome verbonden zijn. Wachtwoorden, betaalgegevens en tokens vul ik nooit zelf in.</li>
            </ul>
          </div>
        </section>

        {[...lokaal, ...(data.aanvragen || [])].length > 0 && (
          <section className={`${kaart} mt-5 p-5 sm:p-7`}>
            <h3 className="font-display text-lg font-bold text-white">Wat ik voor je gedaan heb</h3>
            <ul className="mt-3 space-y-2">
              {[...lokaal, ...(data.aanvragen || [])].slice(0, 6).map((a) => (
                <li key={a.id} className="rounded-2xl border border-white/[0.06] bg-black/20 px-4 py-3 text-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[#B4BBC8]">{tijdTekst(a.created_at)} · {(a.items || []).length} punten</span>
                    <Chip klas={a.status === 'klaar' ? ZEKER.hoog : a.status === 'bezig' ? 'border-sky-400/25 bg-sky-400/10 text-sky-300' : ZEKER.midden}>{a.status === 'klaar' ? 'Afgehandeld' : a.status === 'bezig' ? 'Claude is bezig' : 'Wacht op Claude'}</Chip>
                  </div>
                  {a.result && <p className="mt-2 text-[#8A93A3]">{a.result}</p>}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      <div className="fixed inset-x-0 bottom-0 z-10 border-t border-white/10 bg-[#080A0E]/90 backdrop-blur">
        <div className="mx-auto flex max-w-4xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:px-6">
          <input value={notitie} onChange={(e) => setNotitie(e.target.value)} maxLength={1000} placeholder="Iets meegeven? (mag leeg blijven)" aria-label="Opmerking voor Claude"
            className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-[#5B6472] focus:border-[#EDA71B]/70" />
          <button onClick={versturen} disabled={bezig || aantalGekozen === 0}
            className="shrink-0 rounded-xl bg-gradient-to-b from-[#F3B93A] to-[#D9950F] px-6 py-3 font-semibold text-[#1A1204] shadow-[0_10px_30px_-8px_rgba(237,167,27,0.7)] transition hover:brightness-110 disabled:opacity-50">
            {bezig ? 'Versturen…' : `Stuur ${aantalGekozen} ${aantalGekozen === 1 ? 'actie' : 'acties'} naar Claude`}
          </button>
        </div>
        {melding?.ok && <p role="status" className="border-t border-[#3DDC97]/20 bg-[#3DDC97]/10 px-4 py-2.5 text-center text-sm text-[#7BE8B6]">Verstuurd. Zeg nu tegen Claude: <span className="font-semibold text-white">“Kijk naar mijn dashboard-aanvraag”</span></p>}
        {melding && !melding.ok && <p role="alert" className="border-t border-[#FF5C6C]/20 bg-[#FF5C6C]/10 px-4 py-2.5 text-center text-sm text-[#FF9AA5]">{melding.fout}</p>}
      </div>
    </div>
  );
}
