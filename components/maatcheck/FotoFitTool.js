'use client';

import { useEffect, useRef, useState } from 'react';

const REAL = {
  staand: { breedteCm: 10.5, hoogteCm: 43, label: 'Staand' },
  liggend: { breedteCm: 43, hoogteCm: 10.5, label: 'Liggend' },
};
const DIEPTE_CM = 42;
const MIN_WIDTH_PX = 32;
// Ruimte die we boven/onder het vak vrijhouden voor het maatlabel en de sleep-handle.
const VERTICAL_MARGIN_PX = 44;

function clampWidth(width, rect, aspect) {
  if (!rect.width || !rect.height) return width;
  const maxByWidth = rect.width * 0.92;
  const maxByHeight = (rect.height - VERTICAL_MARGIN_PX * 2) * aspect;
  return Math.min(Math.max(width, MIN_WIDTH_PX), maxByWidth, Math.max(MIN_WIDTH_PX, maxByHeight));
}

export default function FotoFitTool() {
  const [photo, setPhoto] = useState(null);
  const [orientation, setOrientation] = useState('staand');
  const [boxPos, setBoxPos] = useState({ x: 50, y: 50 });
  const [boxWidthPx, setBoxWidthPx] = useState(80);
  const [imgBoxSize, setImgBoxSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  const dragRef = useRef(null);
  const fileInputRef = useRef(null);

  const aspect = REAL[orientation].breedteCm / REAL[orientation].hoogteCm;
  const boxHeightPx = boxWidthPx / aspect;

  // Nieuwe foto of container-formaat verandert: startgrootte bepalen die
  // sowieso past, ongeacht of de foto liggend of staand is gefotografeerd.
  useEffect(() => {
    if (!containerRef.current || !photo) return;
    const el = containerRef.current;
    const update = () => {
      const rect = { width: el.clientWidth, height: el.clientHeight };
      setImgBoxSize(rect);
      setBoxWidthPx((prev) => (prev === 80 ? clampWidth(rect.width * 0.34, rect, aspect) : clampWidth(prev, rect, aspect)));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photo]);

  // Oriëntatie gewisseld (staand <-> liggend heeft een heel andere
  // verhouding): huidige grootte opnieuw begrenzen zodat de handle altijd
  // binnen de foto blijft.
  useEffect(() => {
    if (!containerRef.current || imgBoxSize.width === 0) return;
    setBoxWidthPx((prev) => clampWidth(prev, imgBoxSize, aspect));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orientation]);

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPhoto(reader.result);
    reader.readAsDataURL(file);
  };

  const resetPhoto = () => {
    setPhoto(null);
    setBoxPos({ x: 50, y: 50 });
    setBoxWidthPx(80);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const clampPos = (xPct, yPct, rect, widthPx, heightPx) => {
    const halfWPct = ((widthPx / 2) / rect.width) * 100;
    const halfHPct = (((heightPx / 2) + VERTICAL_MARGIN_PX) / rect.height) * 100;
    return {
      x: Math.min(100 - halfWPct, Math.max(halfWPct, xPct)),
      y: Math.min(100 - halfHPct, Math.max(halfHPct, yPct)),
    };
  };

  const startMove = (e) => {
    e.preventDefault();
    dragRef.current = 'move';
    e.target.setPointerCapture(e.pointerId);
  };
  const startResize = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragRef.current = 'resize';
    e.target.setPointerCapture(e.pointerId);
  };
  const onMove = (e) => {
    if (!dragRef.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (dragRef.current === 'move') {
      const xPct = ((e.clientX - rect.left) / rect.width) * 100;
      const yPct = ((e.clientY - rect.top) / rect.height) * 100;
      setBoxPos(clampPos(xPct, yPct, rect, boxWidthPx, boxHeightPx));
    } else if (dragRef.current === 'resize') {
      // Handle zit rechtsonder, dus de afstand vanaf het midden x2 = de nieuwe breedte.
      const centerXPx = (boxPos.x / 100) * rect.width;
      const raw = (e.clientX - rect.left - centerXPx) * 2;
      const w = clampWidth(raw, rect, aspect);
      setBoxWidthPx(w);
      setBoxPos((prev) => clampPos(prev.x, prev.y, rect, w, w / aspect));
    }
  };
  const endDrag = () => {
    dragRef.current = null;
  };

  return (
    <div>
      {!photo && (
        <label className="cursor-pointer flex flex-col items-center justify-center gap-4 rounded-[2rem] border-2 border-dashed border-edge bg-bg p-10 sm:p-14 text-center hover:border-amber transition-colors active:border-amber">
          <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-amber/12 text-amber-dark">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 8a2 2 0 012-2h1.5l1-1.5h7l1 1.5H18a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="12" cy="13" r="3.2" stroke="currentColor" strokeWidth="1.6" /></svg>
          </span>
          <span>
            <span className="block font-display font-bold text-lg">Maak een foto van je kastje</span>
            <span className="block mt-1.5 text-sm text-dim">Tik hier om je camera te openen</span>
          </span>
          <input ref={fileInputRef} type="file" accept="image/*" capture="environment" onChange={handleFile} className="hidden" />
        </label>
      )}

      {photo && (
        <div>
          <div className="rounded-2xl bg-bg px-5 py-4 mb-4 text-center">
            <p className="font-display font-bold">Sleep het vak op zijn plek</p>
            <p className="mt-1 text-sm text-dim">Versleep het amberkleurige vak, en trek aan de hoek rechtsonder om het groter of kleiner te maken.</p>
          </div>

          <div
            ref={containerRef}
            className="relative w-full rounded-[2rem] overflow-hidden border border-edge select-none touch-none"
          >
            <img src={photo} alt="Foto van je keukenkastje" className="w-full h-auto block pointer-events-none" draggable={false} />

            {imgBoxSize.width > 0 && (
              <div
                onPointerDown={startMove}
                onPointerMove={onMove}
                onPointerUp={endDrag}
                className="absolute cursor-grab active:cursor-grabbing flex items-center justify-center"
                style={{
                  left: `${boxPos.x}%`,
                  top: `${boxPos.y}%`,
                  width: boxWidthPx,
                  height: boxHeightPx,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <span className="absolute -top-8 rounded-full bg-amber text-ink text-xs font-bold px-3 py-1.5 whitespace-nowrap shadow">
                  {REAL[orientation].breedteCm} × {REAL[orientation].hoogteCm} cm
                </span>
                <div className="w-full h-full rounded-md border-[3px] border-amber bg-white/25 backdrop-blur-[1px] shadow-lg overflow-hidden flex items-center justify-center">
                  <img
                    src={orientation === 'staand' ? '/assets/img/systeem-staand.png' : '/assets/img/systeem-liggend.png'}
                    alt="Osmosewatersysteem, op schaal"
                    className="w-full h-full object-contain pointer-events-none"
                    draggable={false}
                  />
                </div>
                <div
                  onPointerDown={startResize}
                  onPointerMove={onMove}
                  onPointerUp={endDrag}
                  className="absolute -right-5 -bottom-5 w-11 h-11 rounded-full bg-ink text-white shadow-xl flex items-center justify-center cursor-nwse-resize active:scale-95 transition-transform"
                  aria-label="Sleep om te vergroten of verkleinen"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17L17 7M11 7h6v6M7 13v4h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              </div>
            )}
          </div>

          <div className="mt-5 flex flex-col items-center gap-4">
            <div className="inline-flex items-center rounded-full bg-bg p-1 border border-edge">
              {Object.entries(REAL).map(([key, v]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setOrientation(key)}
                  className={`cursor-pointer rounded-full px-6 py-3 text-sm font-bold transition-colors ${
                    orientation === key ? 'bg-ink text-white shadow' : 'text-dim hover:text-ink'
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
            <p className="text-xs text-dim text-center">Nodig aan diepte: {DIEPTE_CM} cm (meet dit apart in je kastje).</p>
          </div>

          <div className="mt-6 flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={resetPhoto}
              className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-bold text-ink hover:bg-bg transition-colors"
            >
              Andere foto proberen
            </button>
            <p className="text-xs text-dim text-center">Je foto wordt nergens opgeslagen of verzonden — alles gebeurt in je eigen browser.</p>
          </div>
        </div>
      )}
    </div>
  );
}
