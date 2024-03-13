import { tripleLinkComponent } from './Link.js';
import { getState } from '../data/indexData.js';
import { getRouteInfo } from '../tools/indexTools.js';
import data from '../data/movies.json' assert { type: 'json' };

function getMovieId() {
  let idMovie = getRouteInfo().split("/");
  console.log(idMovie);
  return idMovie[3];
};

function getMovie() {
  let movie = data.imdb_movies.find((movie) => movie.ranking == getMovieId());
  console.log(movie)
  return movie
};

// Consider using destructuring here: `{ movie_name, ... } = getMovie()`.
// Done

function itemMovieComponent() {
  let {movie_name, summary, poster_image, release_date} = getMovie();

  return `
  <div class ="film-block theme-${getState("theme")}">
    ${tripleLinkComponent()}

    <div class="container__movie-item">
      <h1 class="info__block">${movie_name}</h1>
      <p>${summary}</p>
      <img src="${poster_image}">
      <p>release date: ${release_date}</p>
    </div>

  </div>
  `
}

export { itemMovieComponent };
