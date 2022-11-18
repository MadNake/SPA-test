import { getState, translate, langList } from '../index.js';

const toggleLangButtonComponent = () => `
  <div class="dropdown">
    <div class="dropbtn lang_${getState('lang')}">${translate('toggleLang.toggle__lang')}</div>
    <div class="dropdown-content">
      ${langList()}
    </div>
  </div>
  `;

export { toggleLangButtonComponent };
