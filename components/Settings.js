export { settingsComponent };
import {rLink} from "./index.js";

function settingsComponent() { 
	return `${rLink("home","button","#home")}
	${rLink("settings","button","#settings")}
	${rLink("about","button","#about")}
<h1 class="info__block">Settings</h1>`};