export { MovieLiComponent };
import { linkComponent } from '../index.js';


const MovieLiComponent = (movie) => `
<li class= "movie-list__item">
	${linkComponent({
		// Consider using destructuring, like so: `const { ranking, movie_name, year, poster_image } = movie`.
		// This will make your code more compact.
	text: `<span>${movie.ranking} - ${movie.movie_name} - ${movie.year}</span>
		<img src="${movie.poster_image}" width="50" height="50">`,
	className: "movie-link",
	href: `/#/movies/${movie.ranking}`,
})}
</li>
`;
