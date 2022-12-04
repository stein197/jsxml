import Builder from "./src/Builder";
import type {Handler} from "./src/util";

/**
 * Creates 
 * @param handler 
 * @returns 
 */
export = function jsxml(handler: Handler): Builder {
	const b = new Builder();
	handler(b);
	return b;
}
