import { aboutComponent } from './About.js';
import { settingsComponent } from './Settings.js';
import { homeComponent } from './Home.js';
import { itemMovieComponent } from './MovieItem.js';
import { getRouteInfo } from '../tools/indexTools.js';

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
