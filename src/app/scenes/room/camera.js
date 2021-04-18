const Three = require('../../../lib/three.module.js');

const camera = new Three.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 800);

export default camera;

export const CAM_ANGLES = {
  CENTER: 0,
  WALL: 1,
  CORNER: 2
};

export const setCameraAngle = angleId => {
  switch(angleId) {
    case CAM_ANGLES.CENTER:
      camera.position.set(4, 10, 20);
      camera.rotation.y = 0.2;
      break;
    case CAM_ANGLES.WALL:
      camera.position.set(5, 9, 5);
      camera.rotation.y = 0.2;
      break;
    case CAM_ANGLES.CORNER:
      camera.position.set(-1, 9, -1);
      camera.rotation.y = 0.8;
      break;
  }
};

export const updateCamera = angleId => {
  switch(angleId) {
    default:
      break;
  }
};