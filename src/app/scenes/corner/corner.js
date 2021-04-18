import * as Three from '../../../lib/three.module.js';
import { initLights, updateLights } from './light.js';
import { updateMeshes, initMeshes } from './meshes.js';
import camera, { setCameraAngle, updateCamera } from './camera.js';

var scene, renderer;

const init = () => {
  scene = new Three.Scene();
  scene.background = new Three.Color('#060d14');

  renderer = new Three.WebGLRenderer({antialias: true});
  renderer.physicallyCorrectLights = true;
  renderer.outputEncoding = Three.sRGBEncoding;
  renderer.shadowMap.enabled = true;
  renderer.toneMapping = Three.ReinhardToneMapping;
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.querySelector('#site-wrapper').appendChild(renderer.domElement);

  setCameraAngle(0);

  initMeshes(scene);

  initLights(scene);

  play();
};

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};
window.addEventListener('resize', onWindowResize);

const play = () => {
  renderer.setAnimationLoop(() => {
    update();
    render();
  });
};

const render = () => {
  renderer.render(scene, camera);
};

export const stop = () => {
  renderer.setAnimationLoop(null);
  scene.remove.apply(scene, scene.children);
};

const update = () => {
  updateCamera(0);
  updateMeshes();
  updateLights();
};

init();