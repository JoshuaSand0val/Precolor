// Precolor: Copies all Precolor members calling back on changes.

import * as members from "../index.js";

export function precolor(callback) {
	// Create copy of all members:
	const membersCopy = { ...members };
	// Initially run callback:
	callback(membersCopy);
	// Create proxy setter that runs callback:
	return new Proxy(membersCopy, {
		set (target, key, value) {
			target[key] = value;
			callback(membersCopy);
			return true;
		}
	});
}