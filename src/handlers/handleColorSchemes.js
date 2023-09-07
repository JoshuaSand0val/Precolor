// Handle Color Schemes: Runs callback on system color-scheme change.

import { colorPalette as palette } from "../variables/palette.js";

export function handleColorSchemes(callback, light = palette.light, dark = palette.dark) {
	// Setup CSS media query to match against:
	const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

	// Setup function to handle callback:
	const handler = () => {
		if (mediaQuery.matches) {
			return callback(dark);
		}
		return callback(light);
	};

	// Initially run handler:
	handler();

	// Add listener to run handler on media query change:
	mediaQuery.addEventListener("change", handler);
}