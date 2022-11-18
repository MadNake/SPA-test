import { tripleLinkComponent, getState, translate } from '../index.js';

function aboutComponent() {
  return `
  <div class ="button-block theme-${getState('theme')}">
    <h1 class="info__block">${translate('about.info__block')}</h1>
    ${tripleLinkComponent()}
  </div>
  `;
};

export { aboutComponent };
