export { aboutComponent } from './About.js';
export { homeComponent } from './Home.js';
export { settingsComponent } from './Settings.js';
export { linkComponent, ToggleThemeButtonsComponent, tripleLinkComponent } from './link.js';
export { MovieComponent, itemMovieComponent } from './MovieList.js';
export { state, setState, getState } from './stateSettings.js';

// index.js ничего не должне знать про то, что снаружи, только про то, что внутри.
// TODO: get rid of `export { ... } from '../script.js'` here.
export {handleHash, onRender, listeners, render, mainDiv, getRouteInfo} from '../script.js';
