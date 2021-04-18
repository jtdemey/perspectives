const Three = require('../../../lib/three.module.js');

const meshes = [];

export default meshes;

const textureLoader = new Three.TextureLoader();

let geometry, material, textMesh;

export const addMeshes = (scene, geometry, material) => {
  const g = () => createMesh(scene, geometry, material);
  const asphalt = g();
  asphalt.position.set(-10, -0.25, 0);
  asphalt.scale.set(4, 1, 4);
  const sidewalk = g();
  sidewalk.position.set(0, 0, -10);
  const back = g();
  back.position.set(0, 10, -20);
  back.rotation.x = 1.575;
  const smallface = g();
  smallface.position.set(-50, 10, 40);
  smallface.rotation.set(1.575, 0, 1.575);
};

export const createMesh = (scene, geometry, material) => {
  const mesh = new Three.Mesh(geometry, material);
  mesh.receiveShadow = true;
  //const texture = textureLoader.load('./assets/wall.png');
  scene.add(mesh);
  meshes.push(mesh);
  return mesh;
};

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

export const initMeshes = scene => {
  geometry = new Three.BoxGeometry(40, 0.25, 40);
  material = new Three.MeshStandardMaterial({
    color: new Three.Color('#DCE1DE')
  });
  addMeshes(scene, geometry, material);
};

export const updateMeshes = () => {
  meshes.forEach(m => {
    return;
  });
};