import {
  homeComponent, settingsComponent, aboutComponent, itemMovieComponent, getRouteInfo,
} from '../index.js';

function rootComponent() {
  const name = getRouteInfo();

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
  };
  return false;
}

export { rootComponent };
