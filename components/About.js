export { aboutComponent };
import { tripleLinkComponent, state } from "./index.js";

function aboutComponent() {
	return `
	<div class ="button-block theme-${state.theme}">
	<h1 class="info__block">About</h1>
	${tripleLinkComponent()}
	</div>`
};