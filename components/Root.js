import { homeComponent, settingsComponent, aboutComponent, itemMovieComponent, getRouteInfo } from '../index.js';
export { rootComponent }


function rootComponent() {
	let name = getRouteInfo();
	// change the state obj to render correct movie

	if (name === '') {
		return homeComponent();
	}

	if (name === 'settings') {
		return settingsComponent();
	}

	if (name === 'about') {
		return aboutComponent();
	}

	if (name.match(/movies\/(.*)/)) {
		return itemMovieComponent();
	}
}