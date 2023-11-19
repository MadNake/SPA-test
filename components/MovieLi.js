/* eslint-disable camelcase */
import { linkComponent } from './Link.js';

// eslint-disable-next-line max-len
// Consider using destructuring, like so: `const { ranking, movie_name, year, poster_image } = movie`.
// This will make your code more compact.
// Done

function movieLiComponent(movie) {
  const {
    ranking, movie_name, year, poster_image,
  } = movie;

  return `
  <li class= "movie-list__item">
  ${linkComponent({
    text: `<span>${ranking} - ${movie_name} - ${year}</span>
    <img src="${poster_image}" width="50" height="50">`,
    className: 'movie-link',
    href: `/SPA-test/#/movies/${ranking}`,
  })}
  </li>
  `;
}

export { movieLiComponent };
