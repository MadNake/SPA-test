export {MovieComponent, itemMovieComponent};
import { linkComponent, state} from "./index.js";


const MovieComponent = (movie) => `
  <li class= "movie-list__item">
    ${linkComponent({
      text: `<span>${movie.ranking} - ${movie.movie_name} - ${movie.year}</span>
      <img src="${movie.poster_image}" width="50" height="50">`,
      className: "movie-link",
      href: `/#/movies/:${movie.ranking}`,
      id: `movie-${movie.ranking}`,
    })}
  </li>
`;

const itemMovieComponent = () => `
<div class ="film-block theme-${state.theme}">
${linkComponent({
text: "home",
className: "button",
href: "#home",
id: "homeID",
})}
${linkComponent({
text: "settings",
className: "button",
href: "#settings",
id: "settingsID",
})}
${linkComponent({
text: "about",
className: "button",
href: "#about",
id: "aboutID",
})}


<div class="container__movie-item">
  <h1 class="info__block">${state.film.movie_name}</h1>
  <p>${state.film.summary}</p>
  <img src="${state.film.poster_image}">
  <p>release date: ${state.film.release_date}</p>
</div>

</div>
`;
