import camera, { CAM_ANGLES, setCameraAngle, updateCamera } from './camera';
import meshes, { addMeshes, addText, updateMeshes } from './meshes.js';
import * as Three from '../../../lib/three.module.js';
import ResourcePaths from '../../ResourcePaths';

var scene, renderer, geometry, material;

const VIEW = CAM_ANGLES.DIAGONAL;

const lights = [];
const addLight = (color, intensity, x, y, z) => {
  const light = new Three.DirectionalLight(color, intensity);
  light.position.set(x, y, z);
  scene.add(light);
  lights.push(light);
};
 
export const initTowers = () => {
  scene = new Three.Scene();
  scene.background = new Three.Color('#060d14');
  scene.fog = new Three.FogExp2(new Three.Color('#00394d'), 0.15);

  renderer = new Three.WebGLRenderer({antialias: true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.querySelector('#site-wrapper').appendChild(renderer.domElement);

  setCameraAngle(VIEW);

  geometry = new Three.BoxBufferGeometry(1, 1, 1);
  material = new Three.MeshStandardMaterial({color: new Three.Color('#2d5986')});
  addMeshes(scene, geometry, material);

  addText(scene, `We'll be\nright back.`, ResourcePaths.FONT_HELVETIKER);

  addLight(0xffffff, 2.0, 8, 0, 2);

  play();
};

const update = () => {
  lights[0].rotation.x += 0.01;
  updateCamera(VIEW);
  updateMeshes();
};

const render = () => {
  renderer.render(scene, camera);
};

const play = () => {
  renderer.setAnimationLoop(() => {
    update();
    render();
  });
};

export const stopTowers = () => {
  renderer.setAnimationLoop(null);
  scene.remove.apply(scene, scene.children);
};

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};
window.addEventListener('resize', onWindowResize);

initTowers();