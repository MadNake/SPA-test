export { linkComponent, listeners };

let listeners = [];

function onRender(params) {
	listeners.push(params);

};


function linkComponent(text = "", className = "", type = "", id = "") {
	const callback = () => document.getElementById(id).addEventListener('click', () => {
		alert(text);
		// if (id === `toggle`) {
		// 	document.body.style.color = "#fff";
		// 	let buttons = document.getElementsByClassName("button");
		// 	for (let i = 0; i < buttons.length; i++) {
		// 		buttons[i].style.color = "#fff";
		// 	};
		// 	document.body.style.background = "#1f1c1c";
		// 	document.querySelector("#toggle").innerHTML = "toggle to light";
		// };
	});

	onRender(callback)

	return `<a class="${className}" href="${type}" id="${id}">${text}</a>`;
}

