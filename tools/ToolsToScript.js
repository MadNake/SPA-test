/* eslint-disable max-len */
import { setState, getState, dataTranslate } from '../data/indexData.js';

const data = {
  component: '',
  path: '',
};

// created new array and func (onRender) to init all in array after render page
let listeners = [];

function resetListeners() {
  listeners = [];
};

function initListeners() {
  for (let i = 0; i < listeners.length; i += 1) {
    listeners[i]();
  };
  resetListeners();
};

// create a function to render element
function render(content, path = document.getElementById('root')) {
  const way = path;
  way.innerHTML = content;
  initListeners();
};

function init(component, path, theme, language) {
  data.component = component;
  data.path = path;
  if (localStorage.getItem('theme')) {
    setState('theme', localStorage.getItem('theme'));
  } else {
    setState('theme', theme);
  };
  if (localStorage.getItem('lang')) {
    setState('lang', localStorage.getItem('lang'));
  } else {
    setState('lang', language);
  };
  // The abbreviated example below results in an expression usage notification without a function call or assignment
  // localStorage.getItem('theme') ? setState('theme', localStorage.getItem('theme')) : setState('theme', theme);
  // localStorage.getItem('lang') ? setState('lang', localStorage.getItem('lang')) : setState('lang', language);
  window.addEventListener('hashchange', () => render(data.component(), data.path));
};

// get info from #
function getRouteInfo() {
  const hash = window.location.hash ? window.location.hash.slice(1) : '';
  return hash;
};

function onRender(params) {
  listeners.push(params);
};

const get = (object, path, defaultValue) => {
  const p = Array.isArray(path)
    ? path
    : path.split('.');
  if (object && p.length) return get(object[p.shift()], p, defaultValue);
  return object === undefined ? defaultValue : object;
};

function translate(string) {
  return get(dataTranslate[getState('lang')], string);
};

export {
  getRouteInfo, render, onRender, init, data, translate,
};
