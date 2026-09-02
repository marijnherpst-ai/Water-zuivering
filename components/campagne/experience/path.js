import * as THREE from 'three';

// Het waterpad, in wereldeenheden. Het beginpunt zit ín de kraanvoet zodat de
// lus fysiek sluit: voet → kolom → uitloop → straal → afvoer → drie filters →
// mineralen → retourleiding achterlangs → terug de voet in. De chromen uitloop
// van de kraan wordt van dezelfde punten (1 t/m 5) opgebouwd, zodat het water
// gegarandeerd precies uit de uitloop komt.
export const POINTS = [
  [0.9, -1.45, 0], // 0  in de kraanvoet (verborgen)
  [0.9, 0.7, 0], // 1  bovenkant kolom
  [0.75, 1.22, 0], // 2  uitloop-boog
  [0.3, 1.2, 0], // 3
  [0.02, 0.75, 0], // 4
  [0, 0.12, 0], // 5  uitloop — hier komt het water tevoorschijn
  [0, -0.8, 0], // 6  vallende straal
  [0, -1.6, 0], // 7  afvoer
  [0.15, -2.5, 0], // 8
  [0.95, -3.25, 0], // 9
  [2.2, -3.4, 0], // 10 FILTER 1 (PPC)
  [3.6, -3.75, 0.3], // 11
  [5.0, -4.6, 0.6], // 12 FILTER 2 (RO)
  [6.4, -5.05, 0.9], // 13
  [7.8, -5.8, 1.2], // 14 FILTER 3 (CTO)
  [9.0, -6.2, 1.4], // 15
  [10.2, -6.6, 1.6], // 16 MINERALEN
  [11.3, -6.1, 0.9], // 17 retour omhoog
  [11.8, -4.2, -0.6], // 18
  [11.2, -1.6, -1.8], // 19
  [8.6, -0.4, -2.4], // 20
  [4.6, -1.0, -2.4], // 21
  [1.6, -1.7, -1.4], // 22
  [0.95, -1.75, -0.4], // 23 nadert de voet van achteren
  [0.9, -1.45, 0], // 24 = punt 0, lus gesloten
];

export const IDX = { spout: 5, drain: 7, filter1: 10, filter2: 12, filter3: 14, minerals: 16, returnStart: 17 };
export const N = POINTS.length;

export const curve = new THREE.CatmullRomCurve3(
  POINTS.map((p) => new THREE.Vector3(...p)),
  false,
  'centripetal',
  0.5
);

// Resolutie waarmee we booglengte en Frenet-frames vooraf berekenen.
export const DIV = 600;
const lengths = curve.getLengths(DIV);
const total = lengths[DIV];
export const frames = curve.computeFrenetFrames(DIV, false);

// Controlepunt i ligt bij parameter i/(N-1); dit zet dat om naar booglengte-fractie,
// zodat deeltjes (die op booglengte lopen) en stations dezelfde schaal delen.
export const idxT = (i) => i / (N - 1);
export function paramToArc(t) {
  const i = Math.round(THREE.MathUtils.clamp(t, 0, 1) * DIV);
  return lengths[i] / total;
}
export const ARC = Object.fromEntries(Object.entries(IDX).map(([k, i]) => [k, paramToArc(idxT(i))]));

export const stationPoint = (i) => curve.getPoint(idxT(i));
export const stationTangent = (i) => curve.getTangent(idxT(i)).normalize();

function lerpKeys(keys, p) {
  if (p <= keys[0][0]) return keys[0][1];
  for (let k = 0; k < keys.length - 1; k += 1) {
    const [p0, v0] = keys[k];
    const [p1, v1] = keys[k + 1];
    if (p >= p0 && p <= p1) {
      const s = (p - p0) / (p1 - p0);
      return v0 + (v1 - v0) * s;
    }
  }
  return keys[keys.length - 1][1];
}

// Hoe ver het water (in booglengte-fractie) is gevorderd bij scrollvoortgang p.
const FRONT_KEYS = [
  [0, ARC.drain + 0.01],
  [0.12, ARC.filter1 - 0.08],
  [0.22, ARC.filter1 - 0.03],
  [0.32, ARC.filter1 + 0.03],
  [0.46, ARC.filter2 + 0.03],
  [0.6, ARC.filter3 + 0.03],
  [0.74, ARC.minerals + 0.04],
  [0.84, ARC.returnStart + 0.12],
  [0.92, 1],
  [1, 1],
];
export const waterFront = (p) => lerpKeys(FRONT_KEYS, p);

// Camera-keyframes: positie + kijkpunt per scrollvoortgang. Tussen keyframes
// wordt met smoothstep geïnterpoleerd, zodat elke beweging zacht in- en uitloopt.
const CAM_KEYS = [
  { p: 0.0, pos: [0.45, 1.25, 6.4], look: [0.4, 0.95, 0] },
  { p: 0.12, pos: [0.5, -0.9, 4.4], look: [0.2, -1.7, 0] },
  { p: 0.22, pos: [1.5, -2.5, 3.6], look: [1.4, -3.15, 0] },
  { p: 0.32, pos: [2.2, -2.95, 3.1], look: [2.2, -3.4, 0] },
  { p: 0.46, pos: [5.0, -4.15, 3.2], look: [5.0, -4.6, 0.6] },
  { p: 0.6, pos: [7.8, -5.35, 3.4], look: [7.8, -5.8, 1.2] },
  { p: 0.74, pos: [10.2, -6.1, 3.5], look: [10.2, -6.6, 1.6] },
  { p: 0.84, pos: [6.5, -1.5, 10.5], look: [5.8, -3.0, -0.6] },
  { p: 0.94, pos: [0.45, 0.6, 5.4], look: [0.4, 0.15, 0] },
  { p: 1.0, pos: [0.45, 0.6, 5.4], look: [0.4, 0.15, 0] },
];

const vA = new THREE.Vector3();
const vB = new THREE.Vector3();
export function cameraAt(p, outPos, outLook) {
  const q = THREE.MathUtils.clamp(p, 0, 1);
  let k = 0;
  while (k < CAM_KEYS.length - 2 && q > CAM_KEYS[k + 1].p) k += 1;
  const a = CAM_KEYS[k];
  const b = CAM_KEYS[k + 1];
  const s = THREE.MathUtils.smoothstep(q, a.p, b.p);
  outPos.copy(vA.fromArray(a.pos)).lerp(vB.fromArray(b.pos), s);
  outLook.copy(vA.fromArray(a.look)).lerp(vB.fromArray(b.look), s);
}

export const smoothstep = (x, a, b) => THREE.MathUtils.smoothstep(x, a, b);
