import { toggleLangButtonComponent } from './ToggleLangButton.js';
import { toggleThemeButtonsComponent } from './ToggleThemeButton.js';
import { tripleLinkComponent } from './Link.js';
import { getState } from '../data/indexData.js';
import { translate } from '../tools/indexTools.js';

function settingsComponent() {
  return `
  <div class ="button-block theme-${getState('theme')}" style='grid-template-columns: repeat(4, 200px)'>
  <h1 class="info__block">${translate('settings.info__block')}</h1>
  ${tripleLinkComponent()}
  ${toggleThemeButtonsComponent()}
  ${toggleLangButtonComponent()}
  </div>
`;
};

export { settingsComponent };
