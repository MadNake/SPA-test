// from components
export { aboutComponent } from './components/About.js';
export { homeComponent } from './components/Home.js';
export { settingsComponent } from './components/Settings.js';
export { linkComponent, tripleLinkComponent } from './components/Link.js';
export { itemMovieComponent } from './components/MovieItem.js';
export { movieLiComponent } from './components/MovieLi.js';
export { toggleThemeButtonsComponent } from './components/ToggleThemeButton.js';
export { toggleLangButtonComponent } from './components/ToggleLangButton.js';
export { rootComponent } from './components/Root.js';
export { langList } from './components/LangListComponent.js';

// from data
export { state, setState, getState } from './data/StateSettings.js';
export { dataTranslate } from './data/Language.js';

// from tools
export { onClick } from './tools/ToolsToLinks.js';
export {
  getRouteInfo, render, onRender, init, data, translate,
} from './tools/ToolsToScript.js';
