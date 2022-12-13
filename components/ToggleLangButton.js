import { langList } from './LangListComponent.js';
import { getState } from '../data/indexData.js';
import { translate } from '../tools/indexTools.js';

const toggleLangButtonComponent = () => `
  <div class="dropdown">
    <div class="dropbtn lang_${getState('lang')}">${translate('toggleLang.toggle__lang')}</div>
    <div class="dropdown-content">
      ${langList()}
    </div>
  </div>
  `;

export { toggleLangButtonComponent };
