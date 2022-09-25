export { aboutComponent };
import {rButton} from "./index.js";

function aboutComponent() { 
	return `${rButton("home","button","#home")}
	${rButton("settings","button","#settings")}
	${rButton("about","button","#about")}
<h1 class="info__block">About</h1>`};