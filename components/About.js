export { aboutComponent };
import {linkComponent} from "./index.js";

function aboutComponent() { 
	return `
	<div class="button-block">
	${linkComponent("home","button","#home", "home")}
	${linkComponent("settings","button","#settings", "settings")}
	${linkComponent("about","button","#about", "about")}
	${linkComponent("toggle to dark","button","#about", "toggle")}
		<h1 class="info__block">About</h1>
	</div>`
};