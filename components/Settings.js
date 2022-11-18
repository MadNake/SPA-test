import {
  tripleLinkComponent, getState, toggleThemeButtonsComponent, translate, toggleLangButtonComponent,
} from '../index.js';

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
