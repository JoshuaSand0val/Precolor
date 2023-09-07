// A11y (Accessibility): Returns contrast-ratio associated with accessibility keywords.

export function a11y(keywords) {
	// Return contrast if keywords is number:
	if (typeof keywords == "number") {
		return keywords;
	}

	// Trim and lowercase keywords:
	keywords = keywords.trim().toLowerCase();
	
	// Return keywords contrast value: 
	return {
		"aa": 4.5,
		"aa large": 3,
		"aa ui": 3,
		"aaa": 7,
		"aaa large": 4.5
	}[keywords] || 7;
}