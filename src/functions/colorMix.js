// Color Mix: Mixes two colors together by weight. Based on Sass.

export function colorMix(color1, color2, weight = 0.5) {
	// Map through values fallback array to mix colors:
	return [0, 0, 0, 1].map((fallback, index, array) => {
		// Get current channel for both colors:
		const c1 = color1[index] ?? fallback;
		const c2 = color2[index] ?? fallback;

		// Get alpha channel for both colors:
		const a1 = color1[3] ?? array[3];
		const a2 = color2[3] ?? array[3];

		// Calculate percentage of each color to use:
		let percentage = weight;

		// Adjust percentage of RGB by alpha channel:
		if (index !== 3) {
			percentage += (a1 - a2) / 2;
		}

		// Calculate new RGBA channel value by range:
		const value = c2 + (c1 - c2) * percentage;

		// Round RGB channel to nearest integer:
		if (index !== 3) {
			return Math.round(value);
		}

		// Round alpha channel to three decimals:
		return Math.round(value * 1e3) / 1e3;
	});
}