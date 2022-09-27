export { homeComponent };
import {rLink, movieList} from "./index.js";


function homeComponent() { 
	return `${rLink("home","button","#home")}
	${rLink("settings","button","#settings")}
	${rLink("about","button","#about")}
	<h1 class="info__block">Home</h1>
	${movieList()}
	`};
