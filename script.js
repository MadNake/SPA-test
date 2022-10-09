"use stict"

// added components
import { homeComponent, settingsComponent, aboutComponent, itemMovieComponent, getRouteInfo, render, onRender, listeners, resetListeners } from './index.js';
export { handleHash, onRender, getRouteInfo };

// creat blocks in HTML
let mainDiv = document.getElementById('root');







// change the block depending on the hash
function handleHash() {
	let name = getRouteInfo();
	// change the state obj to render correct movie

	if (name === 'home') {
		render(homeComponent(), mainDiv);
	}

	if (name === 'settings') {
		render(settingsComponent(), mainDiv);
	}

	if (name === 'about') {
		render(aboutComponent(), mainDiv);
	}

	if (name.match(/movies\/(.*)/)) {
		render(itemMovieComponent(), mainDiv)
	}

	for (let i = 0; i < listeners.length; i++) {
		listeners[i]();
	};
	resetListeners();
};


//create an addIventListener to # changing and init the function
function init() {
	addEventListener("hashchange", handleHash);
	handleHash();
	location.hash = "home";
};


init();


