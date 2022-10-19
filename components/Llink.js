export { linkComponent, tripleLinkComponent };
import { onClick, translate } from '../index.js';


// create a single link
function linkComponent(props) {
	return `<a class="${props.className}" href="${props.href}" id="${props.id}" onClick="${onClick(props.onClick)}">${props.text}</a>`;
};



// create a triple link 
function tripleLinkComponent() {
	return `
	${linkComponent({
		text: translate("links.text__home"),
		className: "button",
		href: "#",
	})}

	${linkComponent({
		text: translate("links.text__settings"),
		className: "button",
		href: "#settings",
	})}

	${linkComponent({
		text: translate("links.text__about"),
		className: "button",
		href: "#about",
	})}`
};