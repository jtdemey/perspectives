const Three = require('../../../lib/three.module.js');

const meshes = [];

export default meshes;

export const addMeshes = (scene, geometry, material) => {
  const floor = createMesh(scene, geometry, material);
  console.log(meshes)
};

export const createMesh = (scene, geometry, material) => {
  const mesh = new Three.Mesh(geometry, material);
  mesh.receiveShadow = true;
  scene.add(mesh);
  meshes.push(mesh);
  return mesh;
};

let textMesh;
export const addText = (scene, text, fontPath) => {
  const loader = new Three.FontLoader();
  const onSuccess = font => {
    const lineMaterial = new Three.LineBasicMaterial({
      color: new Three.Color('#bfbfbf'),
      side: Three.DoubleSide
    });
    const shapes = font.generateShapes(text, 100);
    const geometry = new Three.ShapeBufferGeometry(shapes);
    geometry.computeBoundingBox();
    textMesh = new Three.Mesh(geometry, lineMaterial);
    textMesh.position.set(11.535, -10.395, 14.01);
    const s = 0.0015;
    textMesh.scale.set(s, s, s);
    textMesh.castShadow = true;
    scene.add(textMesh);
  };
  const onError = err => console.error(err);
  loader.load(fontPath, onSuccess, null, onError);
};

let geometry, material;
export const initMeshes = scene => {
  geometry = new Three.BoxGeometry(40, 0.25, 40);
  material = new Three.MeshStandardMaterial({
    color: new Three.Color('#2d5986')
  });
  addMeshes(scene, geometry, material);
};

export const updateMeshes = () => {
  meshes.forEach(m => {
    return;
  });
};