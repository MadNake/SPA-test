export { homeComponent };
import {rLink, MovieComponent, rList, rDiv} from "./index.js";
import data from '../movies.json' assert { type: 'json' };


function homeComponent() { 
	return `${rLink("home","button","#home")}
	${rLink("settings","button","#settings")}
	${rLink("about","button","#about")}
	<h1 class="info__block">Home</h1>

	${rDiv(`${rList(`${data.imdb_movies.map(MovieComponent).join('')}`,`movie-list`)}`,`container__movie-list`)};
	`};
