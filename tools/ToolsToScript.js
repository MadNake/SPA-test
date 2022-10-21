export { getRouteInfo, render, onRender, init, data, translate };
import { setState, getState, dataTranslate } from '../index.js'

let data = {
	component : "",
	path: "",
}

function init(component, path, setup, language) {
	data.component = component;
	data.path = path;
	setState(setup[0], setup[1]);
	setState("lang", language);
	addEventListener("hashchange", () => render(data.component(), data.path) );
};


//get info from #
function getRouteInfo() {
	let hash = location.hash ? location.hash.slice(1) : '';
	return hash;
};


// create a function to render element 
function render(content, path = document.getElementById('root')) {
	path.innerHTML = content;
	initListeners();
};


// created new array and func (onRender) to init all in array after render page 
let listeners = [];

function onRender(params) {
	listeners.push(params);
};


function resetListeners() {
	listeners = [];
};

function initListeners() {
	for (let i = 0; i < listeners.length; i++) {
		listeners[i]();
	};
	resetListeners();
};

const get = (object, path, defaultValue) => {
  const _path = Array.isArray(path)
    ? path
    : path.split('.');
  if (object && _path.length) return get(object[_path.shift()], _path, defaultValue);
  return object === undefined ? defaultValue : object;
};

function translate(string) {
	return get(dataTranslate[getState("lang")], string)
};
