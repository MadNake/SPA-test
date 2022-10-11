export { homeComponent };
import { MovieLiComponent, getState, tripleLinkComponent, render } from '../index.js';
import data from '../data/movies.json' assert { type: 'json' };


function homeComponent() {
	render(`
	<div class ="button-block theme-${getState("theme")}">
		<h1 class="info__block">Home</h1>
		${tripleLinkComponent()}

		<div class="container__movie-list">
			<ul class="movie-list">
			${data.imdb_movies.map(MovieLiComponent).join('')}
			</ul>
		</div>

	 </div>
	`)};