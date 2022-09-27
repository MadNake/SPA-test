export {rLink};
function rLink(text = "", className = "", type = "#") {
	return `<a class="${className}" href="${type}">${text}</a>`;
}