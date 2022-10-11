export { getRouteInfo, render, onRender }


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
}