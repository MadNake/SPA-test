export { linkComponent, tripleLinkComponent };
import { onClick } from '../index.js';


// create a single link
function linkComponent(props) {
	return `<a class="${props.className}" href="${props.href}" id="${props.id}" onClick="${onClick(props.onClick)}">${props.text}</a>`;
};


// create a triple link 
function tripleLinkComponent() {
	return `
	${linkComponent({
		text: "home",
		className: "button",
		href: "#home",
	})}

	${linkComponent({
		text: "settings",
		className: "button",
		href: "#settings",
	})}

	${linkComponent({
		text: "about",
		className: "button",
		href: "#about",
	})}`
};