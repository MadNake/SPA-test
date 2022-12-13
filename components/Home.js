import { tripleLinkComponent } from './Link.js';
import { movieLiComponent } from './MovieLi.js';
import { translate } from '../tools/indexTools.js';
import { getState } from '../data/indexData.js';

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
