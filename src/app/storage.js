export const STORAGE_PREFIX = 'JTDPS_';

const prefix = str => STORAGE_PREFIX + str;

const storageKeys = [];

export const addToStorage = (key, val) => {
  const k = prefix(key);
  if(!storageKeys.some(x => x === k)) {
    storageKeys.push(k);
  }
  window.localStorage.setItem(k, val);
};

export const clearStorage = () => {
  storageKeys.forEach(x => window.localStorage.removeItem(x));
  storageKeys.length = 0;
  console.log(storageKeys);
};