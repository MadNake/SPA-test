import { setState, getState, linkComponent, initLang } from '../index.js';
export { ToggleThemeButtonsComponent };

let translateToggleThemeButton = {
	"ru": {
		"toggle__dark": "Тёмная тема",
		"toggle__light": "Светлая тема",
	},
	"en": {
		"toggle__dark": "toggle to dark",
		"toggle__light": "toggle to light",
	}
}

const ToggleThemeButtonsComponent = () => {
	const currentTheme = getState('theme');

	return linkComponent({
		text: currentTheme === "light" ? `${initLang(translateToggleThemeButton, "toggle__dark")}` : `${initLang(translateToggleThemeButton, "toggle__light")}`,
		className: `button ${currentTheme === 'light' ? 'theme-light__button' : 'theme-dark__button'}`,
		href: "#settings",
		onClick: () => { currentTheme === "light" ? setState("theme", "dark") : setState("theme", "light") },
	})
};