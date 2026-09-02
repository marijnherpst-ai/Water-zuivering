'use client';

import dynamic from 'next/dynamic';

// WebGL/Three heeft `window` nodig — alleen in de browser laden, en het zware
// bundle pas ophalen op deze ene pagina.
const Experience = dynamic(() => import('./Experience'), {
  ssr: false,
  loading: () => (
    <div style={{ height: '900vh' }} className="bg-bg">
      <div className="sticky top-0 h-[100svh] flex items-center justify-center">
        <p className="text-sm font-semibold text-dim">3D-ervaring laden…</p>
      </div>
    </div>
  ),
});

export default function ExperienceLoader() {
  return <Experience />;
}
