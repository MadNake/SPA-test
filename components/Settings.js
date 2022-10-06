export { settingsComponent };
import { tripleLinkComponent, state, ToggleThemeButtonsComponent } from "./index.js";

function settingsComponent() {
	return `
	<div class ="button-block theme-${state.theme}">
	<h1 class="info__block">Settings</h1>
	${tripleLinkComponent()}
	${ToggleThemeButtonsComponent()}
	</div>
`};