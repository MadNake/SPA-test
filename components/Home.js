export { homeComponent };
import {rButton} from "./index.js";

function homeComponent() { 
	return `${rButton("home","button","#home")}
	${rButton("settings","button","#settings")}
	${rButton("about","button","#about")}
<h1 class="info__block">Home</h1>`};