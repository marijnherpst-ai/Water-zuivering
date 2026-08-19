'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

const REAL = {
  staand: { breedteCm: 10.5, hoogteCm: 43, label: 'Staand' },
  liggend: { breedteCm: 43, hoogteCm: 10.5, label: 'Liggend' },
};
const DIEPTE_CM = 42;
const BREEDTE_PRESETS = [40, 50, 60];

export default function FotoFitTool() {
  const [photo, setPhoto] = useState(null);
  const [cabinetWidthCm, setCabinetWidthCm] = useState(50);
  const [calibLeft, setCalibLeft] = useState(20);
  const [calibRight, setCalibRight] = useState(80);
  const [orientation, setOrientation] = useState('staand');
  const [boxPos, setBoxPos] = useState({ x: 50, y: 55 });
  const [depthInput, setDepthInput] = useState('');
  const [imgBoxSize, setImgBoxSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  const dragRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !photo) return;
    const el = containerRef.current;
    const update = () => setImgBoxSize({ width: el.clientWidth, height: el.clientHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [photo]);

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPhoto(reader.result);
    reader.readAsDataURL(file);
  };

  const resetPhoto = () => {
    setPhoto(null);
    setCalibLeft(20);
    setCalibRight(80);
    setBoxPos({ x: 50, y: 55 });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const pctFromClientX = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    return Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
  };
  const pctFromClientY = (clientY) => {
    const rect = containerRef.current.getBoundingClientRect();
    return Math.min(100, Math.max(0, ((clientY - rect.top) / rect.height) * 100));
  };

  const startDrag = (which) => (e) => {
    e.preventDefault();
    dragRef.current = which;
    e.target.setPointerCapture(e.pointerId);
  };
  const onMove = (e) => {
    if (!dragRef.current) return;
    if (dragRef.current === 'left') setCalibLeft(Math.min(pctFromClientX(e.clientX), calibRight - 4));
    else if (dragRef.current === 'right') setCalibRight(Math.max(pctFromClientX(e.clientX), calibLeft + 4));
    else if (dragRef.current === 'box') {
      setBoxPos({ x: pctFromClientX(e.clientX), y: pctFromClientY(e.clientY) });
    }
  };
  const endDrag = () => {
    dragRef.current = null;
  };

  const pxPerCm = useMemo(() => {
    if (!imgBoxSize.width || !cabinetWidthCm) return 0;
    const widthPx = ((calibRight - calibLeft) / 100) * imgBoxSize.width;
    return widthPx / cabinetWidthCm;
  }, [calibLeft, calibRight, cabinetWidthCm, imgBoxSize.width]);

  const boxWidthPx = REAL[orientation].breedteCm * pxPerCm;
  const boxHeightPx = REAL[orientation].hoogteCm * pxPerCm;

  const depthCm = parseFloat(depthInput.replace(',', '.'));
  const depthFeedback = !depthInput
    ? null
    : Number.isFinite(depthCm) && depthCm >= DIEPTE_CM
    ? { ok: true, text: `Past ook op diepte — je kastje is ${DIEPTE_CM} cm of dieper nodig, jij gaf ${depthCm} cm op.` }
    : { ok: false, text: `Let op: het systeem heeft ${DIEPTE_CM} cm diepte nodig, jij gaf ${Number.isFinite(depthCm) ? depthCm : '?'} cm op.` };

  return (
    <div>
      {!photo && (
        <label className="cursor-pointer flex flex-col items-center justify-center gap-4 rounded-[2rem] border-2 border-dashed border-edge bg-bg p-14 text-center hover:border-amber transition-colors">
          <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-amber/12 text-amber-dark">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 8a2 2 0 012-2h1.5l1-1.5h7l1 1.5H18a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="12" cy="13" r="3.2" stroke="currentColor" strokeWidth="1.6" /></svg>
          </span>
          <span>
            <span className="block font-display font-bold text-lg">Maak of upload een foto van je keukenkastje</span>
            <span className="block mt-1.5 text-sm text-dim">Op je telefoon opent dit direct de camera</span>
          </span>
          <input ref={fileInputRef} type="file" accept="image/*" capture="environment" onChange={handleFile} className="hidden" />
        </label>
      )}

      {photo && (
        <div>
          {/* Stap 1: breedte opgeven */}
          <div className="rounded-2xl card p-5 sm:p-6 mb-5">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-dark">Stap 1</p>
            <p className="mt-1 font-display font-bold">Hoe breed is de opening van je kastje?</p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {BREEDTE_PRESETS.map((w) => (
                <button
                  key={w}
                  type="button"
                  onClick={() => setCabinetWidthCm(w)}
                  className={`cursor-pointer rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                    cabinetWidthCm === w ? 'bg-ink text-white' : 'bg-bg border border-edge text-dim hover:border-ink/30'
                  }`}
                >
                  {w} cm
                </button>
              ))}
              <div className="flex items-center gap-1.5 rounded-full bg-bg border border-edge px-4 py-2">
                <input
                  type="number"
                  inputMode="decimal"
                  value={cabinetWidthCm}
                  onChange={(e) => setCabinetWidthCm(Math.max(1, Number(e.target.value) || 0))}
                  className="w-14 bg-transparent text-sm font-bold text-ink outline-none"
                />
                <span className="text-sm text-dim">cm (eigen maat)</span>
              </div>
            </div>
          </div>

          {/* Stap 2: kalibreren + slepen */}
          <div className="rounded-2xl card p-5 sm:p-6 mb-5">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-dark">Stap 2</p>
            <p className="mt-1 font-display font-bold">Sleep de twee lijnen naar de randen van je kastopening</p>
            <p className="mt-1 text-sm text-dim">Daarna sleep je het amberkleurige kader naar de juiste plek.</p>
          </div>

          <div
            ref={containerRef}
            className="relative w-full rounded-[2rem] overflow-hidden border border-edge select-none touch-none"
            style={{ background: '#00000010' }}
          >
            <img src={photo} alt="Foto van je keukenkastje" className="w-full h-auto block pointer-events-none" draggable={false} />

            {/* Kalibratielijnen */}
            <div
              onPointerDown={startDrag('left')}
              onPointerMove={onMove}
              onPointerUp={endDrag}
              className="absolute top-0 bottom-0 w-6 -ml-3 cursor-ew-resize flex items-center justify-center group"
              style={{ left: `${calibLeft}%` }}
            >
              <span className="w-1 h-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.4)] group-active:bg-amber" />
              <span className="absolute w-5 h-5 rounded-full bg-white border-2 border-ink shadow" />
            </div>
            <div
              onPointerDown={startDrag('right')}
              onPointerMove={onMove}
              onPointerUp={endDrag}
              className="absolute top-0 bottom-0 w-6 -ml-3 cursor-ew-resize flex items-center justify-center group"
              style={{ left: `${calibRight}%` }}
            >
              <span className="w-1 h-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.4)] group-active:bg-amber" />
              <span className="absolute w-5 h-5 rounded-full bg-white border-2 border-ink shadow" />
            </div>
            <div
              className="absolute h-0.5 bg-white/70 pointer-events-none"
              style={{ left: `${calibLeft}%`, width: `${calibRight - calibLeft}%`, top: '8px' }}
            />
            <span
              className="absolute -translate-x-1/2 pointer-events-none rounded-full bg-ink text-white text-[11px] font-bold px-2.5 py-1"
              style={{ left: `${(calibLeft + calibRight) / 2}%`, top: '14px' }}
            >
              {cabinetWidthCm} cm
            </span>

            {/* Product-overlay */}
            {pxPerCm > 0 && (
              <div
                onPointerDown={startDrag('box')}
                onPointerMove={onMove}
                onPointerUp={endDrag}
                className="absolute cursor-grab active:cursor-grabbing flex flex-col items-center justify-end"
                style={{
                  left: `${boxPos.x}%`,
                  top: `${boxPos.y}%`,
                  width: boxWidthPx,
                  height: boxHeightPx,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <span className="absolute -top-7 rounded-full bg-amber text-ink text-[11px] font-bold px-2.5 py-1 whitespace-nowrap shadow">
                  {REAL[orientation].breedteCm} × {REAL[orientation].hoogteCm} cm
                </span>
                <div className="w-full h-full rounded-md border-2 border-amber bg-white/25 backdrop-blur-[1px] shadow-lg overflow-hidden flex items-center justify-center p-0.5">
                  <img
                    src={orientation === 'staand' ? '/assets/img/systeem-staand.png' : '/assets/img/systeem-liggend.png'}
                    alt="Osmosewatersysteem, op schaal"
                    className="w-full h-full object-contain pointer-events-none"
                    draggable={false}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Stap 3: oriëntatie + diepte */}
          <div className="mt-5 grid sm:grid-cols-2 gap-5">
            <div className="rounded-2xl card p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-dark">Stap 3</p>
              <p className="mt-1 font-display font-bold">Staand of liggend?</p>
              <div className="mt-3 inline-flex items-center rounded-full bg-bg p-1 border border-edge">
                {Object.entries(REAL).map(([key, v]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setOrientation(key)}
                    className={`cursor-pointer rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                      orientation === key ? 'bg-ink text-white shadow' : 'text-dim hover:text-ink'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-dim">Het systeem kan liggend gebruikt worden — het bedieningspaneel draait automatisch mee.</p>
            </div>

            <div className="rounded-2xl card p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-dark">Check ook de diepte</p>
              <p className="mt-1 font-display font-bold">Hoe diep is je kastje?</p>
              <div className="mt-3 flex items-center gap-1.5 rounded-full bg-bg border border-edge px-4 py-2 w-fit">
                <input
                  type="number"
                  inputMode="decimal"
                  placeholder="bijv. 45"
                  value={depthInput}
                  onChange={(e) => setDepthInput(e.target.value)}
                  className="w-16 bg-transparent text-sm font-bold text-ink outline-none placeholder:text-dim/60 placeholder:font-normal"
                />
                <span className="text-sm text-dim">cm</span>
              </div>
              {depthFeedback && (
                <p className={`mt-2.5 text-sm font-semibold ${depthFeedback.ok ? 'text-amber-dark' : 'text-red-600'}`}>
                  {depthFeedback.text}
                </p>
              )}
              {!depthFeedback && <p className="mt-2.5 text-xs text-dim">Nodig: {DIEPTE_CM} cm diepte (b × d × h: 10,5 × 42 × 43 cm).</p>}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={resetPhoto}
              className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-ink px-5 py-2.5 text-sm font-bold text-ink hover:bg-bg transition-colors"
            >
              Andere foto proberen
            </button>
            <p className="text-xs text-dim">Je foto wordt nergens opgeslagen of verzonden — alles gebeurt in je eigen browser.</p>
          </div>
        </div>
      )}
    </div>
  );
}
