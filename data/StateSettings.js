import { render, data } from '../index.js';

const state = {};

function setState(key, value) {
  state[key] = value;
  render(data.component(), data.path);
};

function getState(key) {
  return state[key];
};

export { state, setState, getState };
