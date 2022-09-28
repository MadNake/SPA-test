export { settingsComponent };
import {linkComponent} from "./index.js";

function settingsComponent() { 
	return `
	<div class="button-block">
		${linkComponent("home","button","#home")}
		${linkComponent("settings","button","#settings")}
		${linkComponent("about","button","#about")}
		<h1 class="info__block">Settings</h1>
	</div>
`};