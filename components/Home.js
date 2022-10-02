export { homeComponent };
import {linkComponent, MovieComponent} from "./index.js";
import data from '../movies.json' assert { type: 'json' };


function homeComponent() { 
	return `
	<div class ="button-block">
		${linkComponent("home","button","#home", "home")}
		${linkComponent("settings","button","#settings", "settings")}
		${linkComponent("about","button","#about", "about")}
		${linkComponent("toggle to dark","button", "#home", "toggle")}
		<h1 class="info__block">Home</h1>

		<div class="container__movie-list">
			<ul class="movie-list">
			${data.imdb_movies.map(MovieComponent).join('')}
			</ul>
		</div>

	 </div>
	`};
