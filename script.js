"use stict"

// создаём блоки в html
let div = document.createElement('div');
div.className = "button-block";
document.body.append(div);


let infoBlock = document.createElement("h1");
infoBlock.className = "infoBlock";

// задаём содержимое блокам
div.innerHTML = `<a class="button" href="#home">Home</a>
<a class="button" href="#settings">Settings</a>
<a class="button" href="#about">About</a>`;


	// infoBlock.innerHTML = `Home`;
div.append(infoBlock);

// создаём массив с кнопками
let buttons = document.getElementsByClassName("button");


//получаем инфу из хеша

function getRouteInfo() {
	let hash = location.hash ? location.hash.slice(1) : '';
	return hash;
};

// меняем инфо блок в зависимости от хеша
function handleHash() {
	let name = getRouteInfo();
	
	if (name) {
		infoBlock.innerHTML = name	;
	}
};

//создаем обработчик событий на изменение хеша и запускаем функцию
function init() {
	buttons[0].click();
	addEventListener("hashchange", handleHash);
	handleHash();
}

init();


// задаем минимальные стили






