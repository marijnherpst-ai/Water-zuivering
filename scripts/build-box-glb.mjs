// Bouwt een schone, exact-op-schaal doos (GLB) van het osmosewatersysteem:
// 10,5 cm breed x 42 cm diep x 43 cm hoog, met de echte productfoto op de
// voorkant en een matzwart materiaal op de overige vlakken.
//
// Dit vervangt een AI-reconstructie (image-to-3D) die op het glimmende,
// vlakke zwarte oppervlak een 'verkreukeld' resultaat gaf — voor een simpele
// rechthoekige doos is een handgebouwde mesh betrouwbaarder en exact op maat.
import { readFileSync, writeFileSync } from 'node:fs';
import { Document, NodeIO } from '@gltf-transform/core';

const WIDTH = 0.105; // breedte (x)
const DEPTH = 0.42; // diepte (z)
const HEIGHT = 0.43; // hoogte (y)

const xMin = -WIDTH / 2;
const xMax = WIDTH / 2;
const yMin = 0;
const yMax = HEIGHT;
const zMin = -DEPTH / 2;
const zMax = DEPTH / 2;

function quad(v0, v1, v2, v3) {
  // Twee driehoeken, CCW gezien vanaf de buitenkant (correcte outward normal).
  const positions = [...v0, ...v1, ...v2, ...v3];
  const uvs = [0, 1, 1, 1, 1, 0, 0, 0];
  const a = [v1[0] - v0[0], v1[1] - v0[1], v1[2] - v0[2]];
  const b = [v2[0] - v0[0], v2[1] - v0[1], v2[2] - v0[2]];
  const n = [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
  const len = Math.hypot(...n) || 1;
  const normal = n.map((c) => c / len);
  const normals = [...normal, ...normal, ...normal, ...normal];
  const indices = [0, 1, 2, 0, 2, 3];
  return { positions, uvs, normals, indices };
}

function mergeQuads(quads) {
  const positions = [];
  const uvs = [];
  const normals = [];
  const indices = [];
  let offset = 0;
  for (const q of quads) {
    positions.push(...q.positions);
    uvs.push(...q.uvs);
    normals.push(...q.normals);
    for (const i of q.indices) indices.push(i + offset);
    offset += 4;
  }
  return { positions, uvs, normals, indices };
}

// Voorkant (+Z) — krijgt de productfoto
const front = quad(
  [xMin, yMin, zMax],
  [xMax, yMin, zMax],
  [xMax, yMax, zMax],
  [xMin, yMax, zMax]
);

// Overige 5 vlakken — matzwart
const back = quad(
  [xMax, yMin, zMin],
  [xMin, yMin, zMin],
  [xMin, yMax, zMin],
  [xMax, yMax, zMin]
);
const left = quad(
  [xMin, yMin, zMin],
  [xMin, yMin, zMax],
  [xMin, yMax, zMax],
  [xMin, yMax, zMin]
);
const right = quad(
  [xMax, yMin, zMax],
  [xMax, yMin, zMin],
  [xMax, yMax, zMin],
  [xMax, yMax, zMax]
);
const top = quad(
  [xMin, yMax, zMax],
  [xMax, yMax, zMax],
  [xMax, yMax, zMin],
  [xMin, yMax, zMin]
);
const bottom = quad(
  [xMin, yMin, zMin],
  [xMax, yMin, zMin],
  [xMax, yMin, zMax],
  [xMin, yMin, zMax]
);

const body = mergeQuads([back, left, right, top, bottom]);

const doc = new Document();
const buffer = doc.createBuffer();

// Materialen
const frontImage = readFileSync('public/assets/img/systeem-staand.png');
const texture = doc
  .createTexture('front-panel')
  .setImage(frontImage)
  .setMimeType('image/png');

const frontMaterial = doc
  .createMaterial('front-panel-material')
  .setBaseColorTexture(texture)
  .setMetallicFactor(0.1)
  .setRoughnessFactor(0.35);

const bodyMaterial = doc
  .createMaterial('body-material')
  .setBaseColorFactor([0.035, 0.033, 0.035, 1])
  .setMetallicFactor(0.2)
  .setRoughnessFactor(0.45);

function addPrimitive(mesh, data, material) {
  const positionAccessor = doc
    .createAccessor()
    .setType('VEC3')
    .setArray(new Float32Array(data.positions))
    .setBuffer(buffer);
  const normalAccessor = doc
    .createAccessor()
    .setType('VEC3')
    .setArray(new Float32Array(data.normals))
    .setBuffer(buffer);
  const uvAccessor = doc
    .createAccessor()
    .setType('VEC2')
    .setArray(new Float32Array(data.uvs))
    .setBuffer(buffer);
  const indexAccessor = doc
    .createAccessor()
    .setType('SCALAR')
    .setArray(new Uint16Array(data.indices))
    .setBuffer(buffer);

  const primitive = doc
    .createPrimitive()
    .setAttribute('POSITION', positionAccessor)
    .setAttribute('NORMAL', normalAccessor)
    .setAttribute('TEXCOORD_0', uvAccessor)
    .setIndices(indexAccessor)
    .setMaterial(material);
  mesh.addPrimitive(primitive);
}

const mesh = doc.createMesh('osmosesysteem');
addPrimitive(mesh, front, frontMaterial);
addPrimitive(mesh, body, bodyMaterial);

const node = doc.createNode('osmosesysteem').setMesh(mesh);
const scene = doc.createScene('scene').addChild(node);
doc.getRoot().setDefaultScene(scene);

const io = new NodeIO();
await io.write('public/assets/3d/osmosesysteem.glb', doc);
console.log('Doos-GLB weggeschreven: 10,5 x 42 x 43 cm (b x d x h)');
