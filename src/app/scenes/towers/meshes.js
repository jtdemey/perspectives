import { easeInCirc, easeOutCirc } from '../../utils';
const Three = require('../../../lib/three.module.js');

//Meshes
const meshes = [];
export default meshes;

const GROWTH_DEGREE = 1 / 1000;

const SCALE_STATE = {
  INERT: 0,
  UP: 1,
  DOWN: 2
};

const setInert = mesh => {
  mesh.scaleState = SCALE_STATE.INERT;
  const randSleep = Math.floor((Math.random() * 10) + 8) * 1000;
  setTimeout(() => {
    mesh.scaleState = SCALE_STATE.UP;
  }, randSleep);
};

const setScaleProperties = (mesh, disableScaling = false) => {
  mesh.baseHeight = Math.floor((Math.random() * 4) + 3);
  mesh.scaleDegree = 0;
  mesh.scaleState = SCALE_STATE.UP;
  mesh.disableScaling = disableScaling;
};

export const createMesh = (scene, geometry, material) => {
  const mesh = new Three.Mesh(geometry, material);
  setScaleProperties(mesh);
  scene.add(mesh);
  meshes.push(mesh);
};

const addMesh = (scene, mesh, index) => {
  setScaleProperties(mesh);
  if(index === 85) {
    mesh.baseHeight = 6;
    mesh.disableScaling = true;
  }
  scene.add(mesh);
  meshes.push(mesh);
};

export const addMeshes = (scene, geometry, material) => {
  createMesh(scene, geometry, material);
  for(let i = 0; i < 122; i++) {
    const rect = meshes[i].clone();
    rect.position.x += 1.5;
    if(i > 0 && i % 11 === 0) {
      rect.position.x = 0;
      rect.position.y -= 1.5;
    }
    addMesh(scene, rect, i);
  }
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

const upscale = mesh => {
  if(mesh.scaleDegree >= 1) {
    mesh.scaleState = SCALE_STATE.DOWN;
    return;
  }
  mesh.scaleDegree += GROWTH_DEGREE;
  const growth = mesh.baseHeight + easeOutCirc(mesh.scaleDegree);
  mesh.scale.z = growth * 2;
  mesh.position.z = growth;
};

const downscale = mesh => {
  if(mesh.disableScaling) {
    return;
  }
  if(mesh.scaleDegree <= 0.001) {
    setInert(mesh);
    return;
  }
  mesh.scaleDegree -= GROWTH_DEGREE;
  const growth = mesh.baseHeight + easeInCirc(mesh.scaleDegree);
  mesh.scale.z = growth * 2;
  mesh.position.z = growth;
};

export const updateMeshes = () => {
  meshes.forEach(mesh => {
    switch(mesh.scaleState) {
      case SCALE_STATE.UP:
        upscale(mesh);
        break;
      case SCALE_STATE.DOWN:
        downscale(mesh);
        break;
      default:
        break;
    }
  });
};