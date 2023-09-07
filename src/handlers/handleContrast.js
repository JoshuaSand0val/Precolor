// Handle Contrast: Runs callback on system color contrast change.

import { a11y } from "../functions/a11y.js";

export function handleContrast(callback, noPreference = "aa", more = "aaa", less = null, custom = null) {
	// Create contrast preferences object from parameters:
	const preferences = {
		"no-preference": noPreference,
		"more": more,
		"less": less,
		"custom": custom
	};

	// Callback value for each mode in preferences:
	for (const [mode, value] of Object.entries(preferences)) {
		// Setup CSS media query to match against:
		const mediaQuery = window.matchMedia(`(prefers-contrast: ${mode})`);

		// Setup function to handle callback:
		const handler = () => {
			if (mediaQuery.matches && value !== null) {
				return callback(a11y(value));
			}
		};

		// Initially run handler:
		handler();
	
		// Add listener to run handler on media query change:
		mediaQuery.addEventListener("change", handler);
	}
}