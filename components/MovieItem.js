export { itemMovieComponent };
import { getState, tripleLinkComponent, getRouteInfo, render } from '../index.js';
import data from '../data/movies.json' assert { type: 'json' };


function getMovieId() {
	let idMovie = getRouteInfo().split("/");
	return idMovie[2];
};


function getMovie() {
	return data.imdb_movies.find((movie) => movie.ranking == getMovieId());
};


const itemMovieComponent = () => render(`
<div class ="film-block theme-${getState("theme")}">
${tripleLinkComponent()}

<div class="container__movie-item">
  <h1 class="info__block">${getMovie().movie_name}</h1>
  <p>${getMovie().summary}</p>
  <img src="${getMovie().poster_image}">
  <p>release date: ${getMovie().release_date}</p>
</div>

</div>
`);
