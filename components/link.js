export {linkComponent};
function linkComponent(text = "", className = "", type = "#") {
	return `<a class="${className}" href="${type}">${text}</a>`;
}