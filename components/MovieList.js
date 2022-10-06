export {MovieComponent, itemMovieComponent};
import { linkComponent, state, tripleLinkComponent, getRouteInfo} from "./index.js";
import data from '../movies.json' assert { type: 'json' };

const MovieComponent = (movie) => `
  <li class= "movie-list__item">
    ${linkComponent({
      text: `<span>${movie.ranking} - ${movie.movie_name} - ${movie.year}</span>
      <img src="${movie.poster_image}" width="50" height="50">`,
      className: "movie-link",
      href: `/#/movies/${movie.ranking}`,
    })}
  </li>
`;

function getMovieId() {
	let idMovie = getRouteInfo().split("/");
	return idMovie[2];
};

function getMovie() {
  return data.imdb_movies.find((movie) => movie.ranking == getMovieId());
}

const itemMovieComponent = () => `
<div class ="film-block theme-${state.theme}">
${tripleLinkComponent()}

<div class="container__movie-item">
  <h1 class="info__block">${getMovie().movie_name}</h1>
  <p>${getMovie().summary}</p>
  <img src="${getMovie().poster_image}">
  <p>release date: ${getMovie().release_date}</p>
</div>

</div>
`;
