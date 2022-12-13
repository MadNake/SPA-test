import { tripleLinkComponent } from './Link.js';
import { translate } from '../tools/indexTools.js';
import { getState } from '../data/indexData.js';

function aboutComponent() {
  return `
  <div class ="button-block theme-${getState('theme')}">
    <h1 class="info__block">${translate('about.info__block')}</h1>
    ${tripleLinkComponent()}
  </div>
  `;
};

export { aboutComponent };
