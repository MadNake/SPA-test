import { setState, getState, linkComponent, translate } from '../index.js';

// Some components have capitalized first letter, some don't.
// It's an inconsistency that should be eliminated.
export { ToggleThemeButtonsComponent };



const ToggleThemeButtonsComponent = () => {
	const currentTheme = getState('theme');

	// Little trick that could make your code look a bit nicer:
	// Instead of using `currentTheme` variable consider making `isLightTheme` variable
	// and use instead of repeating `currentTheme === 'light'` condition multiple times.
	return linkComponent({
		text: currentTheme === "light" ? `${translate("toggleTheme.toggle__dark")}` : `${translate("toggleTheme.toggle__light")}`,
		className: `button ${currentTheme === 'light' ? 'theme-light__button' : 'theme-dark__button'}`,
		href: "#settings",

		// Also, a good habit is to create named functions for things like this (and move them to the top),
		// so that `onClick: () => { .... }` becomes `onClick: onClickFunc`.
		onClick: () => { currentTheme === "light" ? setState("theme", "dark") : setState("theme", "light") },
	})
};
