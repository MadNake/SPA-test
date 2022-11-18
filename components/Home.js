import { movieLiComponent, getState, tripleLinkComponent, translate } from '../index.js';
import data from '../data/movies.json' assert { type: 'json' };

function homeComponent() {
  return `
  <div class ="button-block theme-${getState("theme")}">
    <h1 class="info__block">${translate("home.info__block")}</h1>
    ${tripleLinkComponent()}

    <div class="container__movie-list">
      <ul class="movie-list">
      ${data.imdb_movies.map(movieLiComponent).join('')}
      </ul>
    </div>

  </div>
  `};

  export { homeComponent };
