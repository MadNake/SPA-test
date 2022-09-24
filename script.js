"use stict"

// создаём блоки в html
let div = document.getElementById('root');
div.className = "button-block";


// Создаём компоненты

const homeComponent = `
<a class="button" href="#home">home</a>
<a class="button" href="#settings">settings</a>
<a class="button" href="#about">about</a>

<h1 class="info__block">Home</h1>
`,
	settingsComponent = `
<a class="button" href="#home">home</a>
<a class="button" href="#settings">settings</a>
<a class="button" href="#about">about</a>

<h1 class="info__block">Settings</h1>
`,
	aboutComponent = `
<a class="button" href="#home">home</a>
<a class="button" href="#settings">settings</a>
<a class="button" href="#about">about</a>

<h1 class="info__block">About</h1>
`;


//получаем инфу из хеша
function getRouteInfo() {
	let hash = location.hash ? location.hash.slice(1) : '';
	return hash;
};

// Создаём функцию рендера 
function render(content, path) {
	path.innerHTML = content;
}

// меняем блок в зависимости от хеша
function handleHash() {
	let name = getRouteInfo();

	switch (name) {
		case "home":
			render(homeComponent, div);
			break;
		case "settings":
			render(settingsComponent, div);
			break;
		case "about":
			render(aboutComponent, div);
			break;
		default:
			render(homeComponent, div);
			break;
	}

};

// создаём массив с кнопками
let buttons = document.getElementsByClassName("button");

//создаем обработчик событий на изменение хеша и запускаем функцию
function init() {
	addEventListener("hashchange", handleHash);
	handleHash();
	buttons[0].click();
}

init();







