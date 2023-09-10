// Luminance: Gets the relative luminance of color.
// Based on https://www.w3.org/TR/WCAG20/#relativeluminancedef

export function luminance(color) {
	// Loop through each color channel:
	const [red, green, blue] = color.map(channel => {
		// Divide channel by 255:
		channel /= 255;

		// Perform calculations on channel:
		return ((channel < 0.03928) ?
			channel /= 12.92 :
			Math.pow((channel + 0.055) / 1.055, 2.4)
		);
	});

	// Calculate and return color luminance:
	return (0.2126 * red) + (0.7152 * green) + (0.0722 * blue);
}