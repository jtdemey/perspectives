const Three = require('../../../lib/three.module.js');

const meshes = [];

export default meshes;

const textureLoader = new Three.TextureLoader();

let geometry, material, textMesh;

export const addMeshes = (scene, geometry, material) => {
  const floor = createMesh(scene, geometry, material);
  const roof = createMesh(scene, geometry, material);
  roof.position.set(0, 20, 0);
  const left = createMesh(scene, geometry, material);
  left.position.set(-20, 10, 0);
  left.rotation.z = 1.575;
  left.scale.x = 0.5;
  const right = createMesh(scene, geometry, material);
  right.position.set(20, 10, 0);
  right.rotation.z = 1.575;
  right.scale.x = 0.506;
  const back = createMesh(scene, geometry, material);
  back.position.set(0, 10, -20);
  back.rotation.x = 1.575;
  // back.scale.x = 0.506;
  console.log(back)
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