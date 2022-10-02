export { state, setState, getState };

const state = {
	theme: "light",
};


function setState(key, value) {
	state[key] = value;
};

function getState(key) {
	return state[key];
};
