export { settingsComponent };
import { tripleLinkComponent, getState, ToggleThemeButtonsComponent, render } from '../index.js';


function settingsComponent() {
	render(`
	<div class ="button-block theme-${getState("theme")}" style='grid-template-columns: repeat(4, 200px)'>
	<h1 class="info__block">Settings</h1>
	${tripleLinkComponent()}
	${ToggleThemeButtonsComponent()}
	</div>
`)};