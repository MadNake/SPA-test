export { aboutComponent };
import {rLink} from "./index.js";

function aboutComponent() { 
	return `${rLink("home","button","#home")}
	${rLink("settings","button","#settings")}
	${rLink("about","button","#about")}
<h1 class="info__block">About</h1>`};