import ResourcePaths from '../../ResourcePaths.js';
import { getDegree } from '../../utils.js';
const Three = require('../../../lib/three.module.js');

const meshes = [];

export default meshes;

const textureLoader = new Three.TextureLoader();

let roomGeom, material;

export const addMeshes = (scene, roomGeom, material) => {
  const floor = createMesh(scene, roomGeom, material);
  const roof = createMesh(scene, roomGeom, material);
  roof.position.set(0, 20, 0);
  const left = createMesh(scene, roomGeom, material);
  left.position.set(-20, 10, 0);
  left.rotation.z = getDegree(90);
  left.scale.x = 0.5;
  const right = createMesh(scene, roomGeom, material);
  right.position.set(20, 10, 0);
  right.rotation.z = getDegree(90);
  right.scale.x = 0.506;
  const back = createMesh(scene, roomGeom, material);
  back.position.set(0, 10, -20);
  back.rotation.x = getDegree(90);
  // back.scale.x = 0.506;
};

export const createMesh = (scene, roomGeom, material) => {
  const mesh = new Three.Mesh(roomGeom, material);
  mesh.receiveShadow = true;
  //const texture = textureLoader.load('./assets/wall.png');
  scene.add(mesh);
  meshes.push(mesh);
  return mesh;
};

export const addText = (scene, text, fontPath, config) => {
  const loader = new Three.FontLoader();
  const onSuccess = font => {
    const lineMaterial = new Three.LineBasicMaterial({
      color: new Three.Color('#bfbfbf'),
      side: Three.DoubleSide
    });
    const shapes = font.generateShapes(text, 100);
    const geom = new Three.ShapeBufferGeometry(shapes);
    geom.computeBoundingBox();
    const textMesh = new Three.Mesh(geom, lineMaterial);
    textMesh.position.set(config.x || 0, config.y || 0, config.z || 0);
    const s = config.scale || 0.0015;
    textMesh.scale.set(s, s, s);
    textMesh.rotation.set(config.rx || 0, config.ry || 0, config.rz || 0);
    textMesh.castShadow = true;
    scene.add(textMesh);
  };
  const onError = err => console.error(err);
  loader.load(fontPath, onSuccess, null, onError);
};

export const initMeshes = scene => {
  roomGeom = new Three.BoxGeometry(40, 0.25, 40);
  material = new Three.MeshStandardMaterial({
    color: new Three.Color('#DCE1DE')
  });
  addMeshes(scene, roomGeom, material);
};

export const initText = scene => {
  addText(scene, 'John', ResourcePaths.FONT_HELVETIKER, {
    x: -19, y: 14, z: -4, scale: 0.02, ry: getDegree(90) 
  });
  addText(scene, 'Torsten', ResourcePaths.FONT_HELVETIKER, {
    x: -19, y: 11, z: -5, scale: 0.02, ry: getDegree(90)
  });
  addText(scene, 'Maker of Things', ResourcePaths.FONT_HELVETIKER, {
    x: -19, y: 6, z: -6, scale: 0.01, ry: getDegree(90) 
  });
};

export const initTiles = scene => {
  const swTile = createMesh(scene, roomGeom, new Three.MeshStandardMaterial({
    color: new Three.Color('#383961')
  }));
  swTile.position.set(-6.7, 17.15, -19.5);
  swTile.rotation.set(getDegree(90), 0, 0);
  swTile.scale.set(0.6, 0.01, 0.1);
  addText(scene, 'software', ResourcePaths.FONT_HELVETIKER, {
    x: -17.9, y: 15.8, z: -19.4, scale: 0.015 
  });
  const tuneTile = createMesh(scene, roomGeom, new Three.MeshStandardMaterial({
    color: new Three.Color('#8E0E00')
  }));
  tuneTile.position.set(-4.7, 12.35, -19.5);
  tuneTile.rotation.set(getDegree(90), 0, 0);
  tuneTile.scale.set(0.6, 0.01, 0.1);
  addText(scene, 'music', ResourcePaths.FONT_HELVETIKER, {
    x: -15.9, y: 11, z: -19.4, scale: 0.015 
  });
  const artTile = createMesh(scene, roomGeom, new Three.MeshStandardMaterial({
    color: new Three.Color('#5F758E')
  }));
  artTile.position.set(-2.7, 7.55, -19.5);
  artTile.rotation.set(getDegree(90), 0, 0);
  artTile.scale.set(0.6, 0.01, 0.1);
  addText(scene, 'art', ResourcePaths.FONT_HELVETIKER, {
    x: -13.9, y: 6.2, z: -19.4, scale: 0.015 
  });
  const aboutTile = createMesh(scene, roomGeom, new Three.MeshStandardMaterial({
    color: new Three.Color('#9A8C98')
  }));
  addText(scene, 'about', ResourcePaths.FONT_HELVETIKER, {
    x: -11.9, y: 1.4, z: -19.4, scale: 0.015 
  });
  aboutTile.position.set(-0.7, 2.75, -19.5);
  aboutTile.rotation.set(getDegree(90), 0, 0);
  aboutTile.scale.set(0.6, 0.01, 0.1);
  console.log(swTile)
};

export const updateMeshes = () => {
  meshes.forEach(m => {
    return;
  });
};