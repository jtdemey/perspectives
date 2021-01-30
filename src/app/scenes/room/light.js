const Three = require('../../../lib/three.module.js');

const lights = [];

export default lights;

export const addLight = (scene, color, intensity, x, y, z) => {
  const light = new Three.PointLight(color, intensity, 100, 2);
  light.position.set(x, y, z);
  scene.add(light);
  lights.push(light);
};

export const initLights = scene => {
  addLight(scene, 0xffffff, 10.0, 0, 0, 2);
};