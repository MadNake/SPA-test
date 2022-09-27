export {movieList, addItemList};
import {rList, rDiv} from "./index.js";

function movieList() {
	return `${rDiv(rList("", "movie-list", "movieList"), "container__movie-list")}`;
};

function addItemList(idList="", text="", className="") {
	let list = document.getElementById(idList);
	let elem = document.createElement("li");
	elem.textContent = text;
	elem.classList.add(className);
	list.appendChild(elem);
};

