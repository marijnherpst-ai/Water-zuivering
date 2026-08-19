'use client';

import { useState } from 'react';
import ArViewer from './ArViewer';
import FotoFitTool from './FotoFitTool';

export default function MaatcheckPicker() {
  const [mode, setMode] = useState('foto');

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
        <button
          type="button"
          onClick={() => setMode('foto')}
          className={`cursor-pointer flex flex-col items-center gap-2.5 rounded-3xl border-2 px-4 py-6 transition-all ${
            mode === 'foto' ? 'border-amber bg-amber/10 shadow-lg' : 'border-edge bg-white hover:border-ink/30'
          }`}
        >
          <span className={`flex items-center justify-center w-14 h-14 rounded-2xl ${mode === 'foto' ? 'bg-amber text-ink' : 'bg-bg text-dim'}`}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 16l4.5-6 3.5 4.5 2.5-3L20 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" /><circle cx="8" cy="8.5" r="1.3" fill="currentColor" /></svg>
          </span>
          <span className="font-display font-bold">Met een foto</span>
          <span className="text-xs text-dim">Aanbevolen — altijd betrouwbaar</span>
        </button>

        <button
          type="button"
          onClick={() => setMode('camera')}
          className={`cursor-pointer flex flex-col items-center gap-2.5 rounded-3xl border-2 px-4 py-6 transition-all ${
            mode === 'camera' ? 'border-amber bg-amber/10 shadow-lg' : 'border-edge bg-white hover:border-ink/30'
          }`}
        >
          <span className={`flex items-center justify-center w-14 h-14 rounded-2xl ${mode === 'camera' ? 'bg-amber text-ink' : 'bg-bg text-dim'}`}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 8a2 2 0 012-2h1.5l1-1.5h7l1 1.5H18a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><circle cx="12" cy="13" r="3.2" stroke="currentColor" strokeWidth="1.8" /></svg>
          </span>
          <span className="font-display font-bold">Live met camera</span>
          <span className="text-xs text-dim">Beste op een lichte, open plek</span>
        </button>
      </div>

      {mode === 'camera' ? <ArViewer /> : <FotoFitTool />}
    </div>
  );
}
