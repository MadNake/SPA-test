export { aboutComponent };
import {linkComponent} from "./index.js";

function aboutComponent() { 
	return `
	<div class="button-block">
		${linkComponent("home","button","#home")}
		${linkComponent("settings","button","#settings")}
		${linkComponent("about","button","#about")}
		<h1 class="info__block">About</h1>
	</div>`
};