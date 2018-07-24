/*global window*/
/*global Promise*/

const localStorage = window.localStorage;

export default {
  get: key => {
    return new Promise(resolve => {
      const value = localStorage.getItem(key);
      resolve(JSON.parse(value));
    });
  },
  set: (key, value) => {
    return new Promise(resolve => {
      localStorage.setItem(key, JSON.stringify(value));
      resolve();
    });
  },
  remove: key => {
    return new Promise(resolve => {
      localStorage.removeItem(key);
      resolve();
    });
  },
  clear: () => {
    return new Promise(resolve => {
      localStorage.clear();
      resolve();
    });
  }
};
