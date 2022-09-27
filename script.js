"use stict"

// added components
import { homeComponent, settingsComponent, aboutComponent, rDiv, addItemList} from '/components/index.js';
import data from './movies.json' assert { type: 'json' };

// creat blocks in HTML
let mainDiv = document.getElementById('root');


//get info from #
function getRouteInfo() {
	let hash = location.hash ? location.hash.slice(1) : '';
	return hash;
};


// create a function to render element 
function render(content, path) {
	path.innerHTML = content;
}


// change the block depending on the hash
function handleHash() {
	let name = getRouteInfo();

	switch (name) {
		case "home":
			render(rDiv(`${homeComponent()}`, "button-block"), mainDiv);
			for (let i = 0; i < data.imdb_movies.length; i++) {
				addItemList("movieList", `${[i+1]} - ${data.imdb_movies[i].movie_name} - ${data.imdb_movies[i].year}`, "movie-list__item");
			};
			for (let i = 0; i < data.imdb_movies.length; i++) {
				let imgItem = document.createElement("img");
				imgItem.setAttribute("src", `${data.imdb_movies[i].poster_image}`);
				imgItem.setAttribute("height", "50");
				imgItem.setAttribute("width", "50");
				let item = document.querySelectorAll(".movie-list__item");
				item[i].appendChild(imgItem);
			}
			break;
		case "settings":
			render(rDiv(`${settingsComponent()}`, "button-block"), mainDiv);
			break;
		case "about":
			render(rDiv(`${aboutComponent()}`, "button-block"), mainDiv);
			break;
		default:
			render(rDiv(`${homeComponent()}`, "button-block"), mainDiv);
			for (let i = 1; i < data.imdb_movies.length; i++) {
				addItemList("movieList", `${[i+1]} - ${data.imdb_movies[i].movie_name} - ${data.imdb_movies[i].year}`, "movie-list__item")
			};
			for (let i = 0; i < data.imdb_movies.length; i++) {
				let imgItem = document.createElement("img");
				imgItem.setAttribute("src", `${data.imdb_movies[i].poster_image}`);
				imgItem.setAttribute("height", "50");
				imgItem.setAttribute("width", "50");
				let item = document.querySelectorAll(".movie-list__item");
				item[i].appendChild(imgItem);
			};
			break;
	}

};

// create array with buttons
let buttons = document.getElementsByClassName("button");

//create an addIventListener to # changing and init the function
function init() {
	addEventListener("hashchange", handleHash);
	handleHash();
	buttons[0].click();
}

init();

