import Builder from "./src/Builder";
import type {Handler} from "./src/util";

export default function jsxml(handler: Handler): Builder {
	const b = new Builder();
	handler(b);
	return b;
}
