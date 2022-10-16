import { setState, getState, linkComponent, initLang } from '../index.js';
export { ToggleLangButtonComponent };

let translateToggleLangButton = {
	"ru": {
		"toggle__en": "Язык: Русский",
	},
	"en": {
		"toggle__ru": "Language: English",
	}
}

const ToggleLangButtonComponent = () => {
	const currentLang = getState('lang');

	return linkComponent({
		text: currentLang === "en" ? `${initLang(translateToggleLangButton, "toggle__ru")}` : `${initLang(translateToggleLangButton, "toggle__en")}`,
		className: `button lang__button`,
		href: "#settings",
		onClick: () => { currentLang === "en" ? setState("lang", "ru") : setState("lang", "en") },
	})
};