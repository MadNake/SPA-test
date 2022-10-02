export { aboutComponent };
import { linkComponent, state } from "./index.js";

function aboutComponent() {
	return `
	<div class ="button-block theme-${state.theme}">
	<h1 class="info__block">About</h1>
	${linkComponent({
		text: "home",
		className: "button",
		href: "#home",
		id: "homeID"
	})}
	${linkComponent({
		text: "settings",
		className: "button",
		href: "#settings",
		id: "settingsID"
	})}
	${linkComponent({
		text: "about",
		className: "button",
		href: "#about",
		id: "aboutID"
	})}
	</div>`
};