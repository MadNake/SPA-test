import { setState, getState, linkComponent, translate } from '../index.js';
export { ToggleThemeButtonsComponent };



const ToggleThemeButtonsComponent = () => {
	const currentTheme = getState('theme');

	return linkComponent({
		text: currentTheme === "light" ? `${translate("toggleTheme.toggle__dark")}` : `${translate("toggleTheme.toggle__light")}`,
		className: `button ${currentTheme === 'light' ? 'theme-light__button' : 'theme-dark__button'}`,
		href: "#settings",
		onClick: () => { currentTheme === "light" ? setState("theme", "dark") : setState("theme", "light") },
	})
};