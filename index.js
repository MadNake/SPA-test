// from components
export { aboutComponent } from './components/About.js';
export { homeComponent } from './components/Home.js';
export { settingsComponent } from './components/Settings.js';
export { linkComponent, tripleLinkComponent } from './components/Llink.js';
export { itemMovieComponent } from './components/MovieItem.js';
export { MovieLiComponent } from './components/MovieLi.js'
export { ToggleThemeButtonsComponent } from './components/ToggleThemeButton.js';
export { ToggleLangButtonComponent } from './components/ToggleLangButton.js';
export { rootComponent } from './components/Root.js';

// from data
export { state, setState, getState } from './data/StateSettings.js';
export { dataTranslate } from './data/Language.js';

// from tools
export { onClick } from './tools/ToolsToLinks.js';
export { getRouteInfo, render, onRender, init, data, translate } from './tools/ToolsToScript.js';