export { getRouteInfo, render, onRender, listeners, resetListeners }


//get info from #
function getRouteInfo() {
	let hash = location.hash ? location.hash.slice(1) : '';
	return hash;
};


// create a function to render element 
function render(content, path) {
	path.innerHTML = content;
};


// created new array and func (onRender) to init all in array after render page 
let listeners = [];

function onRender(params) {
	listeners.push(params);
};


function resetListeners() {
	listeners = [];
}