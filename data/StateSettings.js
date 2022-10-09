export { state, setState, getState };
import { handleHash } from '../script.js';


const state = {
	theme: "light",
};


function setState(key, value) {
	state[key] = value;
	handleHash();
};


function getState(key) {
	return state[key];
};
