export { linkComponent, ToggleThemeButtonsComponent };
import { setState, getState, handleHash, onRender } from './index.js'

const ToggleThemeButtonsComponent = () => {
	const currentTheme = getState('theme');

	return linkComponent({
		text: currentTheme === "light" ? 'toggle to dark' : 'toggle to light',
		className: "button",
		href: "#settings",
		id: "toggleID",
		onClick: () => {currentTheme === "light" ? setState("theme", "dark") : setState("theme", "light");
		handleHash()},
	})
};

//generate unique identifier
const uuid = () => Math.floor(Math.random() * Date.now());
const onClick = (callback) => {
	const uid = uuid();

	onRender(() => document.querySelector(`[onClick="${uid}"]`).addEventListener('click', callback));

	return uid;
};

function linkComponent(props) {
	// if (props.onClick) {
	// 	onRender(() => {
	// 		document
	// 			.querySelector(`#${props.id}`)
	// 			.addEventListener('click', props.onClick);
	// 	})
	// }
	
	return `<a class="${props.className}" href="${props.href}" id="${props.id}" onClick="${onClick(props.onClick)}">${props.text}</a>`;
}