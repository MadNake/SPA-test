export { settingsComponent };
import { linkComponent, state, ToggleThemeButtonsComponent } from "./index.js";

function settingsComponent() {
	return `
	<div class ="button-block theme-${state.theme}">
	<h1 class="info__block">Settings</h1>
	${linkComponent({
		text: "home",
		className: "button",
		href: "#home",
		id: "homeID",
	})}
	${linkComponent({
		text: "settings",
		className: "button",
		href: "#settings",
		id: "settingsID",
	})}
	${linkComponent({
		text: "about",
		className: "button",
		href: "#about",
		id: "aboutID",
	})}
	${ToggleThemeButtonsComponent()}
	</div>
`};