"use stict"

// added components
import { homeComponent, settingsComponent, aboutComponent} from '/components/index.js';

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


// change the block depending on the hash
function handleHash() {
	let name = getRouteInfo();

	switch (name) {
		case "home":
			render(homeComponent(), mainDiv);
			break;
		case "settings":
			render(settingsComponent(), mainDiv);
			break;
		case "about":	
			render(aboutComponent(), mainDiv);
			break;
		default:
			render(homeComponent(), mainDiv);
			break;
	}

};

// create array with buttons
let buttons = document.getElementsByClassName("button");

//create an addIventListener to # changing and init the function
function init() {
	addEventListener("hashchange", handleHash);
	handleHash();
	buttons[0].click();
}

init();

