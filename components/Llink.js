export { linkComponent, tripleLinkComponent };
import { onClick, initLang } from '../index.js';


// create a single link
function linkComponent(props) {
	return `<a class="${props.className}" href="${props.href}" id="${props.id}" onClick="${onClick(props.onClick)}">${props.text}</a>`;
};

let translateLinks = {
	"ru": {
		"text__home": "Домашняя страница",
		"text__settings": "Настройки",
		"text__about": "О нас",
	},
	"en": {
		"text__home": "Home",
		"text__settings": "Settings",
		"text__about": "About",
	}
}

// create a triple link 
function tripleLinkComponent() {
	return `
	${linkComponent({
		text: initLang(translateLinks, "text__home"),
		className: "button",
		href: "#",
	})}

	${linkComponent({
		text: initLang(translateLinks, "text__settings"),
		className: "button",
		href: "#settings",
	})}

	${linkComponent({
		text: initLang(translateLinks, "text__about"),
		className: "button",
		href: "#about",
	})}`
};