'use stict';

// added components
import { init } from './tools/indexTools.js';
import { rootComponent } from './components/indexComponents.js';

// I observe icencistency here.
// Both `theme` and `lang` are similar keys in the state,
// Why the ways to configure default values are different?
// Done
init(rootComponent, document.getElementById('root'), 'light', 'en');
