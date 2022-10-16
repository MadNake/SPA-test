export { homeComponent };
import { MovieLiComponent, getState, tripleLinkComponent, initLang } from '../index.js';
import data from '../data/movies.json' assert { type: 'json' };

let translateHome = {
	"ru": {
		"info__block": "Домашняя страница"
	},
	"en": {
		"info__block": "Home"
	}
};

function homeComponent() {
	return `
	<div class ="button-block theme-${getState("theme")}">
		<h1 class="info__block">${initLang(translateHome, "info__block")}</h1>
		${tripleLinkComponent()}

		<div class="container__movie-list">
			<ul class="movie-list">
			${data.imdb_movies.map(MovieLiComponent).join('')}
			</ul>
		</div>

	 </div>
	`};

