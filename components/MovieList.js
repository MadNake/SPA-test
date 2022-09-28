export {MovieComponent};

const MovieComponent = (movie) => `
  <li class= "movie-list__item">
    <span>${movie.ranking} - ${movie.movie_name} - ${movie.year}</span>
	 <img src="${movie.poster_image}" width="50" height="50">
  </li>
`;

