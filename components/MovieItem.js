export { itemMovieComponent };
import { getState, tripleLinkComponent, getMovie } from '../index.js';


const itemMovieComponent = () => `
<div class ="film-block theme-${getState("theme")}">
${tripleLinkComponent()}

<div class="container__movie-item">
  <h1 class="info__block">${getMovie().movie_name}</h1>
  <p>${getMovie().summary}</p>
  <img src="${getMovie().poster_image}">
  <p>release date: ${getMovie().release_date}</p>
</div>

</div>
`;
