export { aboutComponent };
import { tripleLinkComponent, getState } from '../index.js';


function aboutComponent() {
	return `
	<div class ="button-block theme-${getState("theme")}">
	<h1 class="info__block">About</h1>
	${tripleLinkComponent()}
	</div>`
};
