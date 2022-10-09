export { getMovie };
import { getRouteInfo } from '../index.js';
import data from '../data/movies.json' assert { type: 'json' };


function getMovieId() {
	let idMovie = getRouteInfo().split("/");
	return idMovie[2];
};


function getMovie() {
	return data.imdb_movies.find((movie) => movie.ranking == getMovieId());
}