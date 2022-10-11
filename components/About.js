export { aboutComponent };
import { tripleLinkComponent, getState, render } from '../index.js';


function aboutComponent() {
	render(`
	<div class ="button-block theme-${getState("theme")}">
	<h1 class="info__block">About</h1>
	${tripleLinkComponent()}
	</div>
`)};
