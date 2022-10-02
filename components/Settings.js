export { settingsComponent };
import {linkComponent} from "./index.js";

function settingsComponent() { 
	return `
	<div class="button-block">
	${linkComponent("home","button","#home", "home")}
	${linkComponent("settings","button","#settings", "settings")}
	${linkComponent("about","button","#about", "about")}
	${linkComponent("toggle to dark","button","#settings", "toggle")}
		<h1 class="info__block">Settings</h1>
	</div>
`};