// Rescales a GLB so its bounding box matches the real-world dimensions of the
// osmosewatersysteem: 10.5 cm breed x 42 cm diepte x 43 cm hoogte.
// Usage: node scripts/rescale-glb.mjs <input.glb> <output.glb>
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { getBounds } from '@gltf-transform/functions';

const [, , inputPath, outputPath] = process.argv;
if (!inputPath || !outputPath) {
  console.error('Usage: node scripts/rescale-glb.mjs <input.glb> <output.glb>');
  process.exit(1);
}

// Echte afmetingen in meters (glTF-standaard eenheid)
const TARGETS_M = { breedte: 0.105, diepte: 0.42, hoogte: 0.43 };

const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const doc = await io.read(inputPath);
const scene = doc.getRoot().listScenes()[0];

const { min, max } = getBounds(scene);
const size = [max[0] - min[0], max[1] - min[1], max[2] - min[2]];
console.log('Huidige bounding box (model-eenheden):', size);

// Bepaal welke as welke echte afmeting is: de smalste as = breedte (10,5cm),
// de grootste as = hoogte (43cm), de middelste as = diepte (42cm).
const axes = [0, 1, 2];
const sorted = [...axes].sort((a, b) => size[a] - size[b]);
const [narrowAxis, midAxis, tallAxis] = sorted;

const targetSize = [0, 0, 0];
targetSize[narrowAxis] = TARGETS_M.breedte;
targetSize[midAxis] = TARGETS_M.diepte;
targetSize[tallAxis] = TARGETS_M.hoogte;

const scaleFactor = [0, 1, 2].map((i) => (size[i] > 0 ? targetSize[i] / size[i] : 1));
console.log('Schaalfactor per as:', scaleFactor);

for (const node of scene.listChildren()) {
  const s = node.getScale();
  node.setScale([s[0] * scaleFactor[0], s[1] * scaleFactor[1], s[2] * scaleFactor[2]]);
}

// Herbereken en centreer op de vloer (y=0) zodat het model netjes op de grond staat in AR.
const after = getBounds(scene);
const centerX = (after.min[0] + after.max[0]) / 2;
const centerZ = (after.min[2] + after.max[2]) / 2;
const bottomY = after.min[1];
for (const node of scene.listChildren()) {
  const t = node.getTranslation();
  node.setTranslation([t[0] - centerX, t[1] - bottomY, t[2] - centerZ]);
}

const final = getBounds(scene);
console.log('Nieuwe bounding box (meters):', [
  final.max[0] - final.min[0],
  final.max[1] - final.min[1],
  final.max[2] - final.min[2],
]);

await io.write(outputPath, doc);
console.log('Weggeschreven naar', outputPath);
