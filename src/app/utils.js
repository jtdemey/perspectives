const Three = require('../lib/three.module.js');

export const between = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getHexNum = hex => new Three.Color(hex).getHex();

export const getSpringConfig = (mass, tension, friction, args) => ({ config: { mass, tension, friction}, ...args});

export const easeInCirc = x => (1 - Math.sqrt(1 - Math.pow(x, 2)));

export const easeOutCirc = x => (Math.sqrt(1 - Math.pow(x - 1, 2)));

export const firstUpper = str => str && str.length > 1 ? str[0].toUpperCase() + str.substring(1, str.length) : '';

const hex = c => c.toString(16).length === 1 ? '0' + c.toString(16) : c.toString(16);
export const rgbToHex = (r, g, b) => `#${hex(r) + hex(g) + hex(b)}`;