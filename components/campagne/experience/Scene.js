'use client';

import { useLayoutEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { Environment, Lightformer, Line, Sparkles, useGLTF } from '@react-three/drei';
import { ARC, DIV, IDX, POINTS, cameraAt, curve, frames, idxT, smoothstep, stationPoint, stationTangent, waterFront } from './path';

const BG = '#F7F8FA';
const WATER = new THREE.Color('#6FBDF0');
const WATER_CLEAN = new THREE.Color('#A6DBF8');
const TUBULAR = 700;
const RADIAL = 10;
const UP = new THREE.Vector3(0, 1, 0);
const FWD = new THREE.Vector3(0, 0, 1);

/* ------------------------------------------------------------------ */
/* Camera: volgt de keyframes uit path.js; op staande schermen iets    */
/* verder naar achteren zodat de scène in beeld past.                  */
/* ------------------------------------------------------------------ */
function Rig({ progressRef }) {
  const { camera, size } = useThree();
  const tmp = useMemo(() => ({ pos: new THREE.Vector3(), look: new THREE.Vector3(), dir: new THREE.Vector3() }), []);

  useFrame(() => {
    const p = progressRef.current;
    const aspect = size.width / size.height;
    const fov = aspect < 1 ? 50 : 38;
    if (camera.fov !== fov) {
      camera.fov = fov;
      camera.updateProjectionMatrix();
    }
    cameraAt(p, tmp.pos, tmp.look);
    if (aspect < 1) {
      tmp.dir.subVectors(tmp.pos, tmp.look).multiplyScalar(1.45);
      tmp.pos.copy(tmp.look).add(tmp.dir);
    } else if (aspect >= 1.2) {
      // Brede schermen kadreren verticaal krapper: iets verder naar achteren.
      // En de tekstlaag staat links, dus schuif het onderwerp naar rechts in
      // beeld zolang er een tekstkaart naast staat.
      tmp.dir.subVectors(tmp.pos, tmp.look).multiplyScalar(1.45);
      tmp.pos.copy(tmp.look).add(tmp.dir);
      const shift = -1.25 * smoothstep(p, 0.08, 0.2) * (1 - smoothstep(p, 0.9, 0.96));
      tmp.pos.x += shift;
      tmp.look.x += shift;
    }
    camera.position.copy(tmp.pos);
    camera.lookAt(tmp.look);
  });
  return null;
}

// De wereld buiten de kraan "materialiseert" pas zodra je begint te scrollen:
// zo blijft de hero minimalistisch (alleen kraan + water) en groeit de rest
// van de installatie op zijn plek tevoorschijn.
const worldK = (p) => smoothstep(p, 0.05, 0.17);

function Grow({ progressRef, children, ...props }) {
  const ref = useRef();
  useFrame(() => {
    if (!ref.current) return;
    const k = Math.max(0.001, worldK(progressRef.current));
    ref.current.scale.setScalar(k);
    ref.current.visible = k > 0.01;
  });
  return (
    <group ref={ref} {...props}>
      {children}
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* Kraan + aanrecht (procedureel, chroom)                              */
/* ------------------------------------------------------------------ */
function Chrome() {
  return <meshStandardMaterial color="#E9EBEF" metalness={1} roughness={0.14} envMapIntensity={1.3} />;
}

function Tap() {
  const spoutGeom = useMemo(() => {
    const pts = POINTS.slice(1, 6).map((p) => new THREE.Vector3(...p));
    const c = new THREE.CatmullRomCurve3(pts, false, 'centripetal', 0.5);
    return new THREE.TubeGeometry(c, 64, 0.11, 32, false);
  }, []);

  return (
    <group>
      {/* Aanrechtblad en spoelbak */}
      <mesh position={[0.6, -1.7, 0]} receiveShadow>
        <boxGeometry args={[7.5, 0.18, 3.4]} />
        <meshStandardMaterial color="#EEF0F3" roughness={0.65} />
      </mesh>
      <mesh position={[0, -1.66, 0]}>
        <boxGeometry args={[2.4, 0.06, 1.5]} />
        <meshStandardMaterial color="#D6DAE0" roughness={0.3} metalness={0.5} />
      </mesh>
      {/* Voet, kolom, uitloop, hendel */}
      <mesh position={[0.9, -1.55, 0]}>
        <cylinderGeometry args={[0.24, 0.28, 0.12, 48]} />
        <Chrome />
      </mesh>
      <mesh position={[0.9, -0.42, 0]}>
        <cylinderGeometry args={[0.115, 0.115, 2.25, 48]} />
        <Chrome />
      </mesh>
      <mesh geometry={spoutGeom}>
        <Chrome />
      </mesh>
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.08, 32]} />
        <Chrome />
      </mesh>
      <mesh position={[1.14, 0.3, 0]} rotation={[0, 0, -0.45]}>
        <cylinderGeometry args={[0.032, 0.032, 0.55, 24]} />
        <Chrome />
      </mesh>
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* Leiding (glazig) en water (onthult zichzelf langs het pad)          */
/* ------------------------------------------------------------------ */
function Pipe({ progressRef }) {
  const geom = useMemo(() => new THREE.TubeGeometry(curve, TUBULAR, 0.1, RADIAL, false), []);
  const mat = useRef();
  useLayoutEffect(() => {
    // Geen leiding waar het water vrij valt (uitloop → afvoer).
    const start = Math.floor((ARC.drain + 0.005) * TUBULAR) * RADIAL * 6;
    geom.setDrawRange(start, geom.index.count - start);
  }, [geom]);
  useFrame(() => {
    if (mat.current) mat.current.opacity = 0.22 * worldK(progressRef.current);
  });
  return (
    <mesh geometry={geom}>
      <meshPhysicalMaterial ref={mat} color="#FFFFFF" transparent opacity={0} roughness={0.05} metalness={0.15} depthWrite={false} />
    </mesh>
  );
}

function Water({ progressRef }) {
  const geom = useMemo(() => new THREE.TubeGeometry(curve, TUBULAR, 0.072, RADIAL, false), []);
  const mat = useRef();
  useFrame(() => {
    const p = progressRef.current;
    const count = Math.floor(waterFront(p) * TUBULAR) * RADIAL * 6;
    geom.setDrawRange(0, count);
    if (mat.current) mat.current.color.lerpColors(WATER, WATER_CLEAN, smoothstep(p, 0.86, 0.95));
  });
  return (
    <mesh geometry={geom}>
      <meshPhysicalMaterial ref={mat} color="#6FBDF0" roughness={0.12} metalness={0} transparent opacity={0.72} />
    </mesh>
  );
}

/* ------------------------------------------------------------------ */
/* Deeltjes die met het water meereizen. Elke groep heeft zijn eigen   */
/* zichtbaarheidsregel: onzuiverheden verdwijnen bij "hun" filter,     */
/* mineralen verschijnen pas ná het mineralen-element.                 */
/* ------------------------------------------------------------------ */
function useDotTexture() {
  return useMemo(() => {
    const c = document.createElement('canvas');
    c.width = 64;
    c.height = 64;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.55, 'rgba(255,255,255,0.9)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, []);
}

const HIDDEN_Y = 999;
const tmpP = new THREE.Vector3();

// Deeltjes lopen op/rondom de buitenkant van de waterbuis (r ≈ 0.08–0.12),
// anders zitten ze verstopt ín het water en zie je ze nooit.
function Flow({ progressRef, count, color, size, speed, opacity = 0.9, radius = 0.04, visible, texture }) {
  const seeds = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i += 1) {
      arr.push({ u0: Math.random(), r: 0.08 + Math.random() * radius, a: Math.random() * Math.PI * 2 });
    }
    return arr;
  }, [count, radius]);
  const positions = useMemo(() => new Float32Array(count * 3), [count]);
  const ref = useRef();

  useFrame(({ clock }) => {
    const p = progressRef.current;
    const t = clock.getElapsedTime();
    const front = waterFront(p);
    for (let i = 0; i < count; i += 1) {
      const s = seeds[i];
      const u = (s.u0 + t * speed) % 1;
      const on = visible(u, p, front);
      if (!on) {
        positions[i * 3] = 0;
        positions[i * 3 + 1] = HIDDEN_Y;
        positions[i * 3 + 2] = 0;
        continue;
      }
      curve.getPointAt(u, tmpP);
      const fi = Math.round(u * DIV);
      const n = frames.normals[fi];
      const b = frames.binormals[fi];
      const cs = Math.cos(s.a + t * 0.8) * s.r;
      const sn = Math.sin(s.a + t * 0.8) * s.r;
      positions[i * 3] = tmpP.x + n.x * cs + b.x * sn;
      positions[i * 3 + 1] = tmpP.y + n.y * cs + b.y * sn;
      positions[i * 3 + 2] = tmpP.z + n.z * cs + b.z * sn;
    }
    if (ref.current) ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial map={texture} color={color} size={size} sizeAttenuation transparent opacity={opacity} depthWrite={false} alphaTest={0.05} />
    </points>
  );
}

function Particles({ progressRef, mobile }) {
  const tex = useDotTexture();
  const k = mobile ? 0.45 : 1;
  const dirtyOn = (p) => p < 0.9;
  return (
    <group>
      <Flow progressRef={progressRef} texture={tex} count={Math.round(200 * k)} color="#CFEAFB" size={0.05} speed={0.055} opacity={0.6} radius={0.02} visible={(u, p, front) => u < front} />
      <Flow progressRef={progressRef} texture={tex} count={Math.round(120 * k)} color="#A8763F" size={0.12} speed={0.05} visible={(u, p, front) => dirtyOn(p) && u < front && u < ARC.filter1 - 0.004} />
      <Flow progressRef={progressRef} texture={tex} count={Math.round(120 * k)} color="#6E7A88" size={0.095} speed={0.06} visible={(u, p, front) => dirtyOn(p) && u < front && u < ARC.filter2 - 0.004} />
      <Flow progressRef={progressRef} texture={tex} count={Math.round(90 * k)} color="#7F8F5C" size={0.085} speed={0.052} visible={(u, p, front) => dirtyOn(p) && u < front && u < ARC.filter3 - 0.004} />
      <Flow progressRef={progressRef} texture={tex} count={Math.round(150 * k)} color="#EDA71B" size={0.085} speed={0.06} opacity={0.9} visible={(u, p, front) => u < front && u > ARC.minerals + 0.004} />
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* Filterpatronen: witte cilinders met zwarte doppen, zoals de echte   */
/* PPC/RO/CTO-patronen die je uit het apparaat trekt. De binnenkant    */
/* laat per filter zien wat er gebeurt.                                */
/* ------------------------------------------------------------------ */
function Granules({ count }) {
  const ref = useRef();
  useLayoutEffect(() => {
    const m = new THREE.Matrix4();
    for (let i = 0; i < count; i += 1) {
      const r = Math.sqrt(Math.random()) * 0.22;
      const a = Math.random() * Math.PI * 2;
      m.makeTranslation(Math.cos(a) * r, (Math.random() - 0.5) * 1.15, Math.sin(a) * r);
      ref.current.setMatrixAt(i, m);
    }
    ref.current.instanceMatrix.needsUpdate = true;
  }, [count]);
  return (
    <instancedMesh ref={ref} args={[null, null, count]}>
      <sphereGeometry args={[0.034, 10, 10]} />
      <meshStandardMaterial color="#1B1D22" roughness={0.6} />
    </instancedMesh>
  );
}

function Membrane() {
  const pts = useMemo(() => {
    const out = [];
    for (let i = 0; i <= 720; i += 1) {
      const a = i * 0.11;
      const y = -0.6 + (i / 720) * 1.2;
      out.push([Math.cos(a) * 0.24, y, Math.sin(a) * 0.24]);
    }
    return out;
  }, []);
  return (
    <group>
      <mesh>
        <cylinderGeometry args={[0.09, 0.09, 1.3, 24]} />
        <meshStandardMaterial color="#F4F6F8" roughness={0.5} />
      </mesh>
      <Line points={pts} color="#B9C4D0" lineWidth={1.4} transparent opacity={0.9} />
    </group>
  );
}

function Pleats() {
  return (
    <group>
      <mesh>
        <cylinderGeometry args={[0.235, 0.235, 1.28, 48]} />
        <meshStandardMaterial color="#F5F1E8" roughness={0.95} transparent opacity={0.8} />
      </mesh>
      {[-0.42, -0.14, 0.14, 0.42].map((y) => (
        <mesh key={y} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.245, 0.012, 12, 64]} />
          <meshStandardMaterial color="#DCD6C9" roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

function Cartridge({ index, kind, progressRef }) {
  const { position, quaternion } = useMemo(() => {
    const pos = stationPoint(index);
    const q = new THREE.Quaternion().setFromUnitVectors(UP, stationTangent(index));
    return { position: pos, quaternion: q };
  }, [index]);

  return (
    <Grow progressRef={progressRef} position={position} quaternion={quaternion}>
      {/* Doorschijnende huls */}
      <mesh>
        <cylinderGeometry args={[0.34, 0.34, 1.5, 64, 1, true]} />
        <meshPhysicalMaterial color="#F7F8FA" transparent opacity={0.42} roughness={0.18} metalness={0.05} side={THREE.DoubleSide} depthWrite={false} />
      </mesh>
      {/* Zwarte doppen */}
      {[-0.79, 0.79].map((y) => (
        <mesh key={y} position={[0, y, 0]}>
          <cylinderGeometry args={[0.37, 0.37, 0.16, 64]} />
          <meshStandardMaterial color="#15171B" roughness={0.45} metalness={0.3} />
        </mesh>
      ))}
      {/* Binnenwerk per filter */}
      {kind === 'ppc' && <Pleats />}
      {kind === 'ro' && <Membrane />}
      {kind === 'cto' && <Granules count={170} />}
    </Grow>
  );
}

/* ------------------------------------------------------------------ */
/* Het echte apparaat (GLB uit de Maatcheck), als context achter de    */
/* patronen: hierin zitten ze in het echt.                             */
/* ------------------------------------------------------------------ */
function Device({ progressRef }) {
  const { scene } = useGLTF('/assets/3d/osmosesysteem.glb');
  const model = useMemo(() => scene.clone(), [scene]);
  return (
    <Grow progressRef={progressRef} position={[5.4, -7.25, -1.7]}>
      <primitive object={model} rotation={[0, -0.55, 0]} scale={6} />
    </Grow>
  );
}
useGLTF.preload('/assets/3d/osmosesysteem.glb');

/* ------------------------------------------------------------------ */
/* Mineralen-element: amberkleurige ring + sprankels                   */
/* ------------------------------------------------------------------ */
function Minerals({ progressRef, mobile }) {
  const group = useRef();
  const glow = useRef();
  const { position, quaternion } = useMemo(() => {
    const pos = stationPoint(IDX.minerals);
    const q = new THREE.Quaternion().setFromUnitVectors(FWD, stationTangent(IDX.minerals));
    return { position: pos, quaternion: q };
  }, []);

  useFrame(({ clock }) => {
    const p = progressRef.current;
    const on = smoothstep(p, 0.64, 0.7) * (1 - smoothstep(p, 0.8, 0.86));
    if (group.current) group.current.visible = on > 0.02;
    if (glow.current) glow.current.emissiveIntensity = 0.5 + on * 1.2 + Math.sin(clock.getElapsedTime() * 3) * 0.15 * on;
  });

  return (
    <Grow progressRef={progressRef} position={position}>
      <mesh quaternion={quaternion}>
        <torusGeometry args={[0.5, 0.075, 24, 72]} />
        <meshStandardMaterial ref={glow} color="#EDA71B" emissive="#EDA71B" emissiveIntensity={0.6} roughness={0.3} metalness={0.4} />
      </mesh>
      <mesh quaternion={quaternion}>
        <torusGeometry args={[0.5, 0.035, 16, 72]} />
        <meshStandardMaterial color="#F6D48B" emissive="#EDA71B" emissiveIntensity={0.3} roughness={0.2} />
      </mesh>
      <group ref={group}>
        <Sparkles count={mobile ? 45 : 110} scale={[2.2, 2.2, 2.2]} size={mobile ? 5 : 7} speed={0.5} color="#EDA71B" opacity={0.9} />
      </group>
    </Grow>
  );
}

function CleanStream({ progressRef, mobile }) {
  const group = useRef();
  useFrame(() => {
    if (group.current) group.current.visible = progressRef.current > 0.9;
  });
  return (
    <group ref={group} position={[0, -0.75, 0]}>
      <Sparkles count={mobile ? 25 : 50} scale={[0.5, 1.8, 0.5]} size={mobile ? 3 : 4} speed={0.9} color="#FFFFFF" opacity={0.9} />
    </group>
  );
}

/* ------------------------------------------------------------------ */
export default function Scene({ progressRef, mobile }) {
  return (
    <>
      <color attach="background" args={[BG]} />
      <fog attach="fog" args={[BG, 9, 26]} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 7, 5]} intensity={1.15} />
      <directionalLight position={[-6, 2, -4]} intensity={0.35} />
      <Environment resolution={128} frames={1}>
        <Lightformer intensity={2.2} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[12, 2, 1]} />
        <Lightformer intensity={1.4} rotation-y={Math.PI / 2} position={[-6, 1, 0]} scale={[10, 3, 1]} />
        <Lightformer intensity={1.0} rotation-y={-Math.PI / 2} position={[7, 2, 0]} scale={[10, 3, 1]} />
        <Lightformer intensity={0.8} color="#EDA71B" position={[2, -6, 6]} scale={[3, 1, 1]} />
      </Environment>

      <Rig progressRef={progressRef} />
      <Tap />
      <Pipe progressRef={progressRef} />
      <Water progressRef={progressRef} />
      <Particles progressRef={progressRef} mobile={mobile} />
      <Cartridge index={IDX.filter1} kind="ppc" progressRef={progressRef} />
      <Cartridge index={IDX.filter2} kind="ro" progressRef={progressRef} />
      <Cartridge index={IDX.filter3} kind="cto" progressRef={progressRef} />
      <Device progressRef={progressRef} />
      <Minerals progressRef={progressRef} mobile={mobile} />
      <CleanStream progressRef={progressRef} mobile={mobile} />
    </>
  );
}
