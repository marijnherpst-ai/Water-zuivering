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

  return (
    <div className="rounded-[2rem] card overflow-hidden">
      <div className="relative aspect-[4/5] sm:aspect-[16/10] bg-bg">
        {ready ? (
          // eslint-disable-next-line react/no-unknown-property
          <model-viewer
            ref={viewerRef}
            src="/assets/3d/osmosesysteem.glb"
            alt="3D-model van het Water-zuivering osmosewatersysteem, op ware grootte"
            ar
            ar-modes="scene-viewer webxr quick-look"
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
              className="cursor-pointer absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-amber px-5 py-3 text-sm font-bold text-ink shadow-xl shadow-amber/25 hover:bg-amber-dark hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 8a2 2 0 012-2h1.5l1-1.5h7l1 1.5H18a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="12" cy="13" r="3.2" stroke="currentColor" strokeWidth="1.6" /></svg>
              Bekijk in je eigen keuken
            </button>
          </model-viewer>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-sm text-dim">3D-viewer laden…</div>
        )}
      </div>

      <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-edge">
        <div>
          <p className="font-display font-bold text-sm">Op ware grootte: 10,5 × 42 × 43 cm</p>
          <p className="mt-1 text-xs text-dim">Sleep om te draaien. Op Android opent de knop live camera-AR; op iPhone zie je hier het interactieve 3D-model.</p>
        </div>
        <div className="inline-flex items-center rounded-full bg-bg p-1 border border-edge shrink-0">
          {Object.entries(ORIENTATIONS).map(([key, o]) => (
            <button
              key={key}
              type="button"
              onClick={() => setOrientation(key)}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                orientation === key ? 'bg-ink text-white shadow' : 'text-dim hover:text-ink'
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
