export { settingsComponent };
import { tripleLinkComponent, getState, ToggleThemeButtonsComponent, initLang, ToggleLangButtonComponent } from '../index.js';


let translateSettins = {
	"ru": {
		"info__block": "Настройки"
	},
	"en": {
		"info__block": "Settings"
	}
};


function settingsComponent() {
	return `
	<div class ="button-block theme-${getState("theme")}" style='grid-template-columns: repeat(4, 200px)'>
	<h1 class="info__block">${initLang(translateSettins, "info__block")}</h1>
	${tripleLinkComponent()}
	${ToggleThemeButtonsComponent()}
	${ToggleLangButtonComponent()}
	</div>
`};