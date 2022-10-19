import { setState, getState, linkComponent, translate } from '../index.js';
export { ToggleLangButtonComponent };



const ToggleLangButtonComponent = () => {
	const currentLang = getState('lang');

	return linkComponent({
		text: translate("toggleLang.toggle__lang"),
		className: `button lang__button`,
		href: "#settings",
		onClick: () => {
			switch (currentLang) {
				case "en": setState("lang", "de");
					break;
				case "de": setState("lang", "ru");
					break;
				case "ru": setState("lang", "en");
					break;
				default: setState("lang", "en")
					break;
			}
		},
	})
};
