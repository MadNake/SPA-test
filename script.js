"use stict"

// added components
import { init, rootComponent } from './index.js';

// I observe icencistency here.
// Both `theme` and `lang` are similar keys in the state,
// Why the ways to configure default values are different?
init(rootComponent, document.getElementById('root'), ["theme", "light"], "en");
