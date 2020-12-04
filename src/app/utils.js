export const between = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const easeInCirc = x => (1 - Math.sqrt(1 - Math.pow(x, 2)));

export const easeOutCirc = x => (Math.sqrt(1 - Math.pow(x - 1, 2)));