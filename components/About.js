export { aboutComponent };
import { tripleLinkComponent, getState, initLang } from '../index.js';

let translateAbout = {
	"ru": {
		"info__block": "О нас"
	},
	"en": {
		"info__block": "About"
	}
};


function aboutComponent() {
	return `
	<div class ="button-block theme-${getState("theme")}">
	<h1 class="info__block">${initLang(translateAbout, "info__block")}</h1>
	${tripleLinkComponent()}
	</div>
`};
