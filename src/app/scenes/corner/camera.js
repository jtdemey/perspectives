const Three = require('../../../lib/three.module.js');

const camera = new Three.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 800);

export default camera;

export const CAM_ANGLES = {
  MAIN: 0,
  SIDE: 1,
  WORM: 2
};

export const setCameraAngle = angleId => {
  switch(angleId) {
    case CAM_ANGLES.MAIN:
      camera.position.set(2, 10, 35);
      camera.rotation.y = 0.7;
      break;
    case CAM_ANGLES.SIDE:
      camera.position.set(12, -11.4, 15.3);
      camera.rotation.x = 0.5;
      camera.rotation.y = 0.35;
      camera.rotation.z = 0.35;
      break;
    case CAM_ANGLES.WORM:
      camera.position.set(12.5, -9, 16);
      camera.rotation.x = 0.3;
      camera.rotation.y = 0.5;
      camera.rotation.z = 0.5;
      break;
  }
};

export const updateCamera = angleId => {
  switch(angleId) {
    default:
      break;
  }
};