export { homeComponent };
import { linkComponent, MovieComponent, state } from "./index.js";
import data from '../movies.json' assert { type: 'json' };


function homeComponent() {
	return `
	<div class ="button-block theme-${state.theme}">
		<h1 class="info__block">Home</h1>
		${linkComponent({
		text: "home",
		className: "button",
		href: "#home",
		id: "homeID"
	})}
		${linkComponent({
		text: "settings",
		className: "button",
		href: "#settings",
		id: "settingsID"
	})}
		${linkComponent({
		text: "about",
		className: "button",
		href: "#about",
		id: "aboutID"
	})}

		<div class="container__movie-list">
			<ul class="movie-list">
			${data.imdb_movies.map(MovieComponent).join('')}
			</ul>
		</div>

	 </div>
	`};

	// "settings","button","#settings", "settingsID"