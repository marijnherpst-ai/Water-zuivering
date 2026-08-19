'use client';

import { useEffect, useRef, useState } from 'react';

const ORIENTATIONS = {
  staand: { label: 'Staand', orientation: '0deg 0deg 0deg' },
  liggend: { label: 'Liggend', orientation: '0deg 0deg 90deg' },
};

export default function ArViewer() {
  const [ready, setReady] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [orientation, setOrientation] = useState('staand');
  const [arStatus, setArStatus] = useState('not-presenting');
  const [arTracking, setArTracking] = useState('tracking');
  const [showPlacedHint, setShowPlacedHint] = useState(false);
  const viewerRef = useRef(null);

  useEffect(() => {
    import('@google/model-viewer').then(() => setReady(true));
  }, []);

  // Wacht op het 'load'-event van model-viewer voordat er iets aan de
  // oriëntatie wordt veranderd: zet je dat te vroeg (voor de interne
  // scene/omgeving volledig is opgezet), dan gooit Lit een onbehandelde
  // promise-rejection ("Cannot read properties of null").
  useEffect(() => {
    const el = viewerRef.current;
    if (!el) return;
    const onLoad = () => setLoaded(true);
    el.addEventListener('load', onLoad);
    return () => el.removeEventListener('load', onLoad);
  }, [ready]);

  // Imperatief bijwerken i.p.v. via JSX-attribuut: model-viewer is een Lit-based
  // custom element en React's attribute-diffing daarvan kan botsen met Lit's
  // interne reactive-update-cyclus bij snel wisselende attributen.
  useEffect(() => {
    if (viewerRef.current && loaded) {
      viewerRef.current.orientation = ORIENTATIONS[orientation].orientation;
    }
  }, [orientation, loaded]);

  // Live stap-tekst tijdens een WebXR AR-sessie: model-viewer rendert zijn
  // eigen lichte-DOM-kinderen als overlay bovenop het camerabeeld (de
  // 'dom-overlay' functie van WebXR), dus deze tekst is daadwerkelijk
  // zichtbaar terwijl iemand met de camera aan het scannen/plaatsen is.
  // (Alleen van toepassing als de browser WebXR AR ondersteunt — anders
  // valt model-viewer terug op Scene Viewer, dat buiten onze pagina om
  // draait en dus zijn eigen, niet-aanpasbare hints toont.)
  useEffect(() => {
    const el = viewerRef.current;
    if (!el) return;
    let hideTimer;
    const onArStatus = (e) => {
      const status = e.detail.status;
      setArStatus(status);
      clearTimeout(hideTimer);
      if (status === 'object-placed') {
        setShowPlacedHint(true);
        hideTimer = setTimeout(() => setShowPlacedHint(false), 6000);
      } else {
        setShowPlacedHint(false);
      }
    };
    const onArTracking = (e) => setArTracking(e.detail.status);
    el.addEventListener('ar-status', onArStatus);
    el.addEventListener('ar-tracking', onArTracking);
    return () => {
      el.removeEventListener('ar-status', onArStatus);
      el.removeEventListener('ar-tracking', onArTracking);
      clearTimeout(hideTimer);
    };
  }, [ready]);

  return (
    <div className="rounded-[2rem] card overflow-hidden">
      <div className="relative aspect-square sm:aspect-[16/10] bg-bg">
        {ready ? (
          // eslint-disable-next-line react/no-unknown-property
          <model-viewer
            ref={viewerRef}
            src="/assets/3d/osmosesysteem.glb"
            alt="3D-model van het Water-zuivering osmosewatersysteem, op ware grootte"
            ar
            ar-modes="webxr scene-viewer quick-look"
            ar-scale="fixed"
            ar-placement="floor"
            camera-controls
            auto-rotate
            shadow-intensity="1.1"
            exposure="1"
            environment-image="neutral"
            style={{ width: '100%', height: '100%', '--poster-color': 'transparent' }}
          >
            <button
              slot="ar-button"
              className="cursor-pointer absolute left-1/2 bottom-5 -translate-x-1/2 inline-flex items-center gap-2.5 rounded-full bg-amber px-7 py-4 text-base font-bold text-ink shadow-2xl shadow-amber/30 hover:bg-amber-dark hover:text-white transition-colors whitespace-nowrap"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 8a2 2 0 012-2h1.5l1-1.5h7l1 1.5H18a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><circle cx="12" cy="13" r="3.2" stroke="currentColor" strokeWidth="1.8" /></svg>
              Open camera
            </button>

            {/* Live overlay tijdens een WebXR AR-sessie */}
            {arStatus === 'session-started' && (
              <div className="absolute inset-x-0 top-5 flex justify-center px-4 pointer-events-none">
                <div className="rounded-2xl bg-ink/90 backdrop-blur text-white text-sm font-semibold px-5 py-3 text-center shadow-xl max-w-xs">
                  {arTracking === 'not-tracking'
                    ? 'Beweeg rustiger — ik ben de plek even kwijt'
                    : 'Houd je telefoon stil, tot het apparaat verschijnt…'}
                </div>
              </div>
            )}
            {showPlacedHint && (
              <div className="absolute inset-x-0 top-5 flex justify-center px-4 pointer-events-none">
                <div className="rounded-2xl bg-amber text-ink text-sm font-bold px-5 py-3 text-center shadow-xl max-w-xs">
                  Sleep het apparaat met je vinger naar de juiste plek
                </div>
              </div>
            )}
          </model-viewer>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-sm text-dim">3D-model laden…</div>
        )}
      </div>

      <div className="p-5 sm:p-6 border-t border-edge">
        <div className="text-center">
          <p className="font-display font-bold">Op ware grootte: 10,5 × 42 × 43 cm</p>
          <p className="mt-1 text-xs text-dim">Deze uitleg verschijnt ook live in beeld terwijl je scant.</p>
        </div>

        <ol className="mt-4 space-y-3 max-w-sm mx-auto">
          <li className="flex items-start gap-3">
            <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-amber text-ink text-xs font-bold">1</span>
            <span className="text-sm text-dim pt-0.5">Tik op <strong className="text-ink">"Open camera"</strong> en doe het kastdeurtje open met het licht aan.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-amber text-ink text-xs font-bold">2</span>
            <span className="text-sm text-dim pt-0.5"><strong className="text-ink">Houd je telefoon stil</strong> gericht op je kastje, tot het apparaat in beeld verschijnt.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-amber text-ink text-xs font-bold">3</span>
            <span className="text-sm text-dim pt-0.5">Tik om het neer te zetten, en <strong className="text-ink">sleep het daarna met je vinger</strong> naar de precieze plek in je kastje.</span>
          </li>
        </ol>

        <div className="mt-4 rounded-2xl bg-bg px-4 py-3.5 flex items-start gap-2.5 text-left max-w-sm mx-auto">
          <svg className="shrink-0 mt-0.5 text-amber-dark" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 8v5M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" /></svg>
          <p className="text-xs text-dim">Beweegt je camera te snel, dan verliest hij de plek. Ga dan gewoon rustig terug en houd 'm even stil.</p>
        </div>

        <div className="mt-5 flex justify-center">
          <div className="inline-flex items-center rounded-full bg-bg p-1 border border-edge shrink-0">
            {Object.entries(ORIENTATIONS).map(([key, o]) => (
              <button
                key={key}
                type="button"
                onClick={() => setOrientation(key)}
                className={`cursor-pointer rounded-full px-6 py-3 text-sm font-bold transition-colors ${
                  orientation === key ? 'bg-ink text-white shadow' : 'text-dim hover:text-ink'
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
        <p className="mt-4 text-xs text-dim text-center">Werkt volledig op Android. Op iPhone kan je hierboven ronddraaien en inzoomen, maar nog niet live in de camera plaatsen.</p>
      </div>
    </div>
  );
}
