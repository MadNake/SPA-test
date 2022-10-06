export { homeComponent };
import { MovieComponent, state, tripleLinkComponent } from "./index.js";
import data from '../movies.json' assert { type: 'json' };


function homeComponent() {
	return `
	<div class ="button-block theme-${state.theme}">
		<h1 class="info__block">Home</h1>
		${tripleLinkComponent()}

		<div class="container__movie-list">
			<ul class="movie-list">
			${data.imdb_movies.map(MovieComponent).join('')}
			</ul>
		</div>

	 </div>
	`};