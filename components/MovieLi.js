export { MovieLiComponent };
import { linkComponent } from '../index.js';


const MovieLiComponent = (movie) => `
<li class= "movie-list__item">
	${linkComponent({
	text: `<span>${movie.ranking} - ${movie.movie_name} - ${movie.year}</span>
		<img src="${movie.poster_image}" width="50" height="50">`,
	className: "movie-link",
	href: `/#/movies/${movie.ranking}`,
})}
</li>
`;