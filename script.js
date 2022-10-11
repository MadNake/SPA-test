"use stict"

// added components
import { rootComponent } from './index.js';
// export { handleHash };


// change the block depending on the hash
// function handleHash() {
// return rootComponent();
// };


//create an addIventListener to # changing and init the function
function init() {
	addEventListener("hashchange", rootComponent);
	// handleHash();
	rootComponent();
	location.hash = "home";
};


init();


