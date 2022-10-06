"use stict"

// added components
import { homeComponent, settingsComponent, aboutComponent, itemMovieComponent, setState } from '/components/index.js';
export { handleHash, onRender, listeners, render, mainDiv, getRouteInfo };
import data from './movies.json' assert { type: 'json' };

// creat blocks in HTML
let mainDiv = document.getElementById('root');


//get info from #
function getRouteInfo() {
	let hash = location.hash ? location.hash.slice(1) : '';
	return hash;
};


// create a function to render element 
function render(content, path) {
	path.innerHTML = content;
}

// created new array and func (onRender) to init all in array after render page 
let listeners = [];

function onRender(params) {
	listeners.push(params);
};


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
	}
	listeners = [];
};


//create an addIventListener to # changing and init the function
function init() {
	addEventListener("hashchange", handleHash);
	handleHash();
	location.hash = "home";
}

init();


