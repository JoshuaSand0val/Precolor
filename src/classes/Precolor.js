// Precolor: Creates observable instance of Precolor members with configuration.

import * as members from "../index.js";

export class Precolor {
	// Constructor: Redefine member defaults and return Proxy.
	constructor(values) {
		Object.assign(this, { ...members, ...values });
		return new Proxy(this, this);
	}

	// Observers: Array (the queue) of all observers.
	observers = [];
	
	// Setter: Runs all observers on property change.
	set (target, key, value) {
		target[key] = value;
		for (const callback of target.observers) {
			callback(target);
		}
		return true;
	}

	// Observe: Adds callback observer to queue.
	observe(callback) {
		// Initially run callback:
		callback();
		// Add callback to observers array:
		this.observers.push(callback);
		// Return observer callback:
		return callback;
	}

	// Unobserve: Removes given observer from queue.
	unobserve(observer) {
		this.observers = this.observers.filter(element => {
			return element !== observer;
		});
	}

	// Disconnect: Removes all observers from queue.
	disconnect() {
		this.observers = [];
	}
}