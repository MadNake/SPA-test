import { setState, getState, linkComponent } from '../index.js';
export { ToggleThemeButtonsComponent };


const ToggleThemeButtonsComponent = () => {
	const currentTheme = getState('theme');

	return linkComponent({
		text: currentTheme === "light" ? 'toggle to dark' : 'toggle to light',
		className: "button",
		href: "#settings",
		onClick: () => { currentTheme === "light" ? setState("theme", "dark") : setState("theme", "light") },
	})
};