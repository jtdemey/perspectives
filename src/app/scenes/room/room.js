import * as Three from '../../../lib/three.module.js';
import { initLights, updateLights } from './light.js';
import { updateMeshes, initMeshes,  } from './meshes.js';
import camera, { setCameraAngle, updateCamera, CAM_ANGLES } from './camera.js';
import { onMouseMove, updateMouseIntersects } from './mouse';
import { initText } from './text';
import { initTiles } from './tiles.js';

var scene, renderer;

const config = {
  cameraAngle: CAM_ANGLES.CORNER,
  wallText: true,
  wallTiles: true
};

const init = () => {
  scene = new Three.Scene();
  scene.background = new Three.Color('#060d14');

  renderer = new Three.WebGLRenderer({antialias: true});
  renderer.physicallyCorrectLights = true;
  renderer.outputEncoding = Three.sRGBEncoding;
  renderer.shadowMap.enabled = true;
  console.log(renderer.shadowMap)
  renderer.shadowMap.type = 1;
  renderer.toneMapping = Three.ReinhardToneMapping;
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.querySelector('#site-wrapper').appendChild(renderer.domElement);

  setCameraAngle(config.cameraAngle);

  initMeshes(scene);

  if(config.wallText) {
    initText(scene);
  }

  if(config.wallTiles) {
    initTiles(scene);
  }

  initLights(scene);

  document.addEventListener('mousemove', e => onMouseMove(e));

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

const render = () => renderer.render(scene, camera);

export const stop = () => {
  renderer.setAnimationLoop(null);
  scene.remove.apply(scene, scene.children);
};

const update = () => {
  updateCamera(config.cameraAngle);
  updateMeshes();
  updateLights();
  updateMouseIntersects(); 
};

init();