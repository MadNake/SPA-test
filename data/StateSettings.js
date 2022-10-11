import { rootComponent } from '../components/Root.js';

export { state, setState, getState };
// import { handleHash } from '../script.js';


const state = {
	theme: "light",
};


function setState(key, value) {
	state[key] = value;
	rootComponent();
};


function getState(key) {
	return state[key];
};
