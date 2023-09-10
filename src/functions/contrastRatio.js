// Contrast Ratio: Gets the contrast ratio between color1 and color2.
// Based on https://www.w3.org/TR/WCAG20/#contrast-ratiodef

import { luminance } from "./luminance.js";

export function contrastRatio(color1, color2) {
	// Get luminance of each color:
	color1 = luminance(color1);
	color2 = luminance(color2);

	// Calculate initial color ratio:
	const ratio = (color1 + 0.05) / (color2 + 0.05);

	// Return correct ratio based on both color's luminance:
	return (color1 < color2) ? (1 / ratio): ratio;
}