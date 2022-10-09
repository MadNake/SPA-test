export { settingsComponent };
import { tripleLinkComponent, getState, ToggleThemeButtonsComponent } from '../index.js';


function settingsComponent() {
	return `
	<div class ="button-block theme-${getState("theme")}">
	<h1 class="info__block">Settings</h1>
	${tripleLinkComponent()}
	${ToggleThemeButtonsComponent()}
	</div>
`};