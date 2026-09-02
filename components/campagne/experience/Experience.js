'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scene from './Scene';
import { CAPTIONS } from './captions';

const ss = (x, a, b) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};
const fade = (p, start, end) => ss(p, start, start + 0.035) * (1 - ss(p, end - 0.035, end));

// Eén doorlopende, scrollgestuurde 3D-reis. De scrollpositie in deze (hoge)
// sectie is de "tijdlijn": ScrollTrigger levert de ruwe voortgang, een
// GSAP-ticker maakt die vloeiend (ook bij terugscrollen) en deelt hem via een
// ref met de 3D-scène én de tekstlagen — zonder React-rerenders per frame.
export default function Experience() {
  const containerRef = useRef(null);
  const canvasWrapRef = useRef(null);
  const hintRef = useRef(null);
  const captionRefs = useRef([]);
  const targetRef = useRef(0);
  const progressRef = useRef(0);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(window.matchMedia('(max-width: 767px), (pointer: coarse)').matches);
    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        targetRef.current = self.progress;
      },
    });

    const tick = (_time, deltaMs) => {
      const dt = Math.min(deltaMs / 1000, 0.05);
      progressRef.current += (targetRef.current - progressRef.current) * (1 - Math.exp(-dt * 7));
      const p = progressRef.current;

      CAPTIONS.forEach((c, i) => {
        const el = captionRefs.current[i];
        if (!el) return;
        const o = fade(p, c.start, c.end);
        el.style.opacity = o;
        el.style.transform = `translate3d(0, ${(1 - o) * 28}px, 0)`;
        el.style.pointerEvents = o > 0.5 ? 'auto' : 'none';
      });
      if (hintRef.current) hintRef.current.style.opacity = 1 - ss(p, 0.01, 0.06);
      if (canvasWrapRef.current) canvasWrapRef.current.style.opacity = 1 - ss(p, 0.955, 0.995);
    };
    gsap.ticker.add(tick);
    if (process.env.NODE_ENV !== 'production') {
      window.__wzProgress = () => ({ target: targetRef.current, smoothed: progressRef.current, scrollY: window.scrollY });
    }

    return () => {
      gsap.ticker.remove(tick);
      trigger.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative bg-bg" style={{ height: '900vh' }} aria-label="Interactieve 3D-uitleg van het zuiveringsproces">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div ref={canvasWrapRef} className="absolute inset-0">
          <Canvas
            dpr={[1, mobile ? 1.25 : 1.6]}
            camera={{ fov: 38, near: 0.1, far: 80, position: [0.45, 0.25, 5] }}
            gl={{ antialias: true, powerPreference: 'high-performance' }}
          >
            <Scene progressRef={progressRef} mobile={mobile} />
          </Canvas>
        </div>

        {CAPTIONS.map((c, i) => (
          <div
            key={c.id}
            ref={(el) => {
              captionRefs.current[i] = el;
            }}
            style={{ opacity: 0, willChange: 'opacity, transform' }}
            className={
              c.layout === 'hero'
                ? 'absolute inset-x-0 top-[14svh] sm:top-[16svh] px-6 text-center'
                : 'absolute inset-x-6 bottom-[9svh] sm:inset-x-auto sm:left-[7vw] sm:top-1/2 sm:-translate-y-1/2 sm:max-w-md'
            }
          >
            {c.layout === 'hero' ? (
              <div className="max-w-3xl mx-auto">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-dark">{c.eyebrow}</p>
                <h1 className="mt-4 font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] whitespace-pre-line">{c.title}</h1>
                <p className="mt-5 text-base sm:text-lg text-dim max-w-xl mx-auto">{c.text}</p>
              </div>
            ) : (
              <div className={`rounded-3xl px-6 py-6 sm:px-8 sm:py-7 backdrop-blur-md ${c.highlight ? 'bg-ink text-white shadow-2xl shadow-amber/20' : 'bg-white/75 border border-white/70 shadow-xl shadow-ink/5'}`}>
                <p className={`text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] ${c.highlight ? 'text-amber' : 'text-amber-dark'}`}>{c.eyebrow}</p>
                <h2 className="mt-3 font-display text-2xl sm:text-4xl font-extrabold tracking-tight leading-[1.05] whitespace-pre-line">{c.title}</h2>
                <p className={`mt-3 text-sm sm:text-base leading-relaxed ${c.highlight ? 'text-white/75' : 'text-dim'}`}>{c.text}</p>
                {c.stat && (
                  <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber/15 px-3.5 py-1.5 text-xs font-bold text-amber-dark">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                    {c.stat}
                  </p>
                )}
                {c.note && <p className="mt-3 text-xs text-dim">{c.note}</p>}
              </div>
            )}
          </div>
        ))}

        <div ref={hintRef} className="absolute inset-x-0 bottom-8 flex justify-center pointer-events-none">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-dim">
            Scroll om te ontdekken
            <svg className="animate-bounce" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </p>
        </div>
      </div>
    </section>
  );
}
