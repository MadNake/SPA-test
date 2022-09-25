export { settingsComponent };
import {rButton} from "./index.js";

function settingsComponent() { 
	return `${rButton("home","button","#home")}
	${rButton("settings","button","#settings")}
	${rButton("about","button","#about")}
<h1 class="info__block">Settings</h1>`};