export {rButton};
function rButton(text = "", clas = "", type = "#") {
	return `<a class="${clas}" href="${type}">${text}</a>`;
}