import Builder from "./src/Builder";
import type {Handler} from "./src/Handler";

export default function jsxml(handler: Handler): Builder {
	return new Builder();
}
