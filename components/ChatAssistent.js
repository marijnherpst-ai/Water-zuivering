'use client';

import { useEffect, useRef, useState, useTransition } from 'react';
import { usePathname } from 'next/navigation';
import { submitTerugbelVerzoek } from '@/app/actions';
import { trackLead } from '@/lib/trackLead';

// Floating chat assistant. Answers come from /api/chat (site knowledge only).
// A small teaser bubble points visitors to it once per session.
const VERBORGEN_OP = ['/dashboard', '/offerte', '/aanmelden', '/admin'];
const SUGGESTIES = [
  'Haalt een osmosesysteem PFAS uit mijn water?',
  'Past het systeem in mijn keukenkastje?',
  'Hoe vaak moet ik de filters vervangen?',
  'Is mijn kraanwater hard?',
];
const WELKOM = 'Hoi! Ik ben de waterassistent van Water-zuivering. Stel je vraag over kraanwater, PFAS, kalk of ons osmosesysteem, dan krijg je meteen antwoord.';
const OPSLAG = 'wz-chat';

function lees(sleutel) {
  try {
    return JSON.parse(sessionStorage.getItem(sleutel) || 'null');
  } catch {
    return null;
  }
}
function bewaar(sleutel, waarde) {
  try {
    sessionStorage.setItem(sleutel, JSON.stringify(waarde));
  } catch {}
}

// Turns site URLs into links and keeps line breaks; everything else is plain text.
function Tekst({ tekst }) {
  const delen = tekst.replace(/\*\*(.+?)\*\*/g, '$1').split(/(https:\/\/www\.water-zuivering\.nl[^\s)]*)/g);
  return (
    <p className="whitespace-pre-line">
      {delen.map((deel, i) => {
        if (!deel.startsWith('https://www.water-zuivering.nl')) return deel;
        const schoon = deel.replace(/[.,;:!?]+$/, '');
        const rest = deel.slice(schoon.length);
        const pad = schoon.replace('https://www.water-zuivering.nl', '') || '/';
        return (
          <span key={i}>
            <a href={pad} className="font-semibold underline decoration-amber decoration-2 underline-offset-2 hover:text-amber-dark">{pad === '/' ? 'water-zuivering.nl' : pad}</a>
            {rest}
          </span>
        );
      })}
    </p>
  );
}

export default function ChatAssistent() {
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [berichten, setBerichten] = useState([]);
  const [invoer, setInvoer] = useState('');
  const [bezig, setBezig] = useState(false);
  const [terugbel, setTerugbel] = useState('dicht'); // dicht | form | klaar
  const [fout, setFout] = useState(null);
  const [isPending, startTransition] = useTransition();
  const lijstRef = useRef(null);
  const invoerRef = useRef(null);

  const verborgen = VERBORGEN_OP.some((p) => pathname === p || pathname.startsWith(`${p}/`));

  useEffect(() => {
    const opgeslagen = lees(OPSLAG);
    if (Array.isArray(opgeslagen)) setBerichten(opgeslagen);
  }, []);

  useEffect(() => {
    bewaar(OPSLAG, berichten);
    lijstRef.current?.scrollTo({ top: lijstRef.current.scrollHeight, behavior: 'smooth' });
  }, [berichten]);

  // Teaser bubble: once per session, after a short delay, not on mobile checkout-like pages.
  useEffect(() => {
    if (verborgen || lees('wz-chat-teaser')) return;
    const t = setTimeout(() => setTeaser(true), 9000);
    return () => clearTimeout(t);
  }, [verborgen]);

  useEffect(() => {
    if (open) setTimeout(() => invoerRef.current?.focus(), 50);
  }, [open]);

  if (verborgen) return null;

  function openen() {
    setOpen(true);
    sluitTeaser();
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') window.gtag('event', 'chat_geopend');
  }

  function sluitTeaser() {
    setTeaser(false);
    bewaar('wz-chat-teaser', true);
  }

  async function vraag(tekst) {
    const vraagTekst = tekst.trim();
    if (!vraagTekst || bezig) return;
    const nieuw = [...berichten, { role: 'user', content: vraagTekst }];
    setBerichten([...nieuw, { role: 'assistant', content: '' }]);
    setInvoer('');
    setBezig(true);
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') window.gtag('event', 'chat_vraag');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nieuw }),
      });
      if (!res.body) throw new Error('geen antwoord');
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let antwoord = '';
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        antwoord += decoder.decode(value, { stream: true });
        setBerichten([...nieuw, { role: 'assistant', content: antwoord }]);
      }
      if (!antwoord.trim()) setBerichten([...nieuw, { role: 'assistant', content: 'Er ging iets mis. Probeer het opnieuw, of stuur ons een WhatsApp.' }]);
    } catch {
      setBerichten([...nieuw, { role: 'assistant', content: 'Er ging iets mis. Probeer het opnieuw, of stuur ons een WhatsApp.' }]);
    } finally {
      setBezig(false);
    }
  }

  function terugbellen(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const laatsteVraag = [...berichten].reverse().find((b) => b.role === 'user')?.content || '';
    startTransition(async () => {
      const res = await submitTerugbelVerzoek({ naam: fd.get('naam'), telefoon: fd.get('telefoon'), vraag: laatsteVraag, pagina: pathname });
      if (!res.success) {
        setFout(res.error);
        return;
      }
      setFout(null);
      setTerugbel('klaar');
      trackLead('chat_terugbellen');
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') window.gtag('event', 'generate_lead', { event_category: 'chat_terugbellen' });
    });
  }

  return (
    <>
      {/* Teaser */}
      {teaser && !open && (
        <div className="fixed bottom-[14.5rem] md:bottom-[10rem] right-5 md:right-6 z-50 max-w-[16rem] rounded-2xl bg-white text-ink shadow-xl shadow-black/15 border border-edge p-4 pr-8 text-sm">
          <button type="button" onClick={sluitTeaser} aria-label="Melding sluiten" className="cursor-pointer absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full text-dim hover:text-ink">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg>
          </button>
          <button type="button" onClick={openen} className="cursor-pointer text-left">
            <span className="font-semibold">Vraag over je water?</span>
            <span className="block mt-1 text-dim">Onze waterassistent geeft direct antwoord, ook &apos;s avonds.</span>
          </button>
        </div>
      )}

      {/* Knop */}
      {!open && (
        <button
          type="button"
          onClick={openen}
          aria-label="Open de waterassistent"
          className="cursor-pointer fixed bottom-[10.25rem] md:bottom-[5.75rem] right-5 md:right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-ink text-white shadow-xl shadow-black/25 hover:scale-105 transition-transform"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 016.5 3h11A2.5 2.5 0 0120 5.5v8a2.5 2.5 0 01-2.5 2.5H10l-4.5 4v-4h0A2.5 2.5 0 014 13.5v-8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><circle cx="9" cy="9.5" r="1.1" fill="currentColor" /><circle cx="12" cy="9.5" r="1.1" fill="currentColor" /><circle cx="15" cy="9.5" r="1.1" fill="currentColor" /></svg>
        </button>
      )}

      {/* Venster */}
      {open && (
        <div role="dialog" aria-label="Waterassistent" className="fixed z-[60] inset-x-0 bottom-0 md:inset-x-auto md:right-6 md:bottom-6 md:w-[24rem] h-[85vh] md:h-[36rem] flex flex-col rounded-t-2xl md:rounded-2xl bg-white text-ink shadow-2xl shadow-black/25 border border-edge overflow-hidden">
          <div className="flex items-center justify-between gap-3 bg-ink text-white px-5 py-4">
            <div>
              <p className="font-display font-bold">Waterassistent</p>
              <p className="text-xs text-white/70">Direct antwoord op je vraag over water</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Chat sluiten" className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
            </button>
          </div>

          <div ref={lijstRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 text-sm leading-relaxed bg-surface">
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white border border-edge px-4 py-3">{WELKOM}</div>
            {berichten.length === 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIES.map((s) => (
                  <button key={s} type="button" onClick={() => vraag(s)} className="cursor-pointer rounded-full border border-amber/60 bg-white px-3 py-1.5 text-xs font-semibold text-ink hover:bg-amber/10">
                    {s}
                  </button>
                ))}
              </div>
            )}
            {berichten.map((b, i) =>
              b.role === 'user' ? (
                <div key={i} className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-ink text-white px-4 py-3 whitespace-pre-line">{b.content}</div>
              ) : (
                <div key={i} className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white border border-edge px-4 py-3">
                  {b.content ? <Tekst tekst={b.content} /> : <span className="text-dim">Even denken…</span>}
                </div>
              )
            )}
          </div>

          <div className="border-t border-edge bg-white px-4 pt-3 pb-4">
            {terugbel === 'dicht' && (
              <button type="button" onClick={() => setTerugbel('form')} className="cursor-pointer mb-3 w-full inline-flex items-center justify-center gap-2 rounded-full border border-amber bg-amber/10 px-4 py-2 text-xs font-bold text-ink hover:bg-amber/20">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
                Bel me terug
              </button>
            )}
            {terugbel === 'form' && (
              <form onSubmit={terugbellen} className="mb-3 rounded-xl border border-edge p-3 space-y-2">
                <p className="text-xs font-semibold">Laat je naam en nummer achter, we bellen je binnen één werkdag.</p>
                <input name="naam" required maxLength={100} placeholder="Naam" aria-label="Naam" className="w-full rounded-lg border border-edge px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber" />
                <input name="telefoon" type="tel" required maxLength={30} placeholder="Telefoonnummer" aria-label="Telefoonnummer" className="w-full rounded-lg border border-edge px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber" />
                {fout && <p className="text-xs font-semibold text-red-600">{fout}</p>}
                <div className="flex gap-2">
                  <button type="submit" disabled={isPending} className="cursor-pointer flex-1 rounded-full bg-amber px-4 py-2 text-xs font-bold text-ink hover:bg-amber-dark hover:text-white disabled:opacity-60">{isPending ? 'Versturen…' : 'Bel me terug'}</button>
                  <button type="button" onClick={() => setTerugbel('dicht')} className="cursor-pointer rounded-full px-3 py-2 text-xs font-semibold text-dim hover:text-ink">Annuleren</button>
                </div>
              </form>
            )}
            {terugbel === 'klaar' && <p className="mb-3 text-xs font-semibold text-green-700">Dank je! We bellen je binnen één werkdag.</p>}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                vraag(invoer);
              }}
              className="flex items-end gap-2"
            >
              <textarea
                ref={invoerRef}
                value={invoer}
                onChange={(e) => setInvoer(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    vraag(invoer);
                  }
                }}
                rows={1}
                maxLength={1500}
                placeholder="Typ je vraag…"
                aria-label="Je vraag"
                className="flex-1 resize-none rounded-xl border border-edge px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber max-h-28"
              />
              <button type="submit" disabled={bezig || !invoer.trim()} aria-label="Verstuur" className="cursor-pointer shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-amber text-ink hover:bg-amber-dark hover:text-white disabled:opacity-50">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </form>
            <p className="mt-2 text-[10px] leading-snug text-dim">
              Antwoorden worden gemaakt door AI en kunnen fouten bevatten. Deel geen persoonlijke gegevens in de chat. <a href="/privacybeleid" className="underline">Privacy</a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
