import { getState, translate, langList } from '../index.js';
export { ToggleLangButtonComponent };

const ToggleLangButtonComponent = () => {
	return `
	<div class="dropdown">
  <div class="dropbtn lang_${getState("lang")}">${translate("toggleLang.toggle__lang")}</div>
  <div class="dropdown-content">
		${langList()}
  </div>
</div>`
};
