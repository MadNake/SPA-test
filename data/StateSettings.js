import { render, data } from '../tools/indexTools.js';

const state = {};

function setState(key, value) {
  state[key] = value;
  render(data.component(), data.path);
};

function getState(key) {
  return state[key];
};

export { state, setState, getState };
