import type {ObjectMap} from "@stein197/ts-util";
import type {Handler} from "./Handler";
import type {Content} from "./Content";
import type {Node} from "./Node";
import type {Options} from "./Options";
import * as util from "./util";

export default class Builder {

	private readonly nodes: Node[] = [];

	public e(name: string, attributes?: ObjectMap<string>, content?: Handler | Content | Builder): void;

	public e(name: string, content?: Handler | Content | Builder): void;

	public e(name: string, a?, b?): void {
		const attributes = typeof a === "object" ? a : typeof b === "object" ? b : null;
		const content = typeof a !== "object" ? a : typeof b !== "object" ? b : null;
		let children: Node[] | null;
		if (content) {
			if (typeof content === "function") {
				const builder = new Builder();
				content(builder);
				children = builder.nodes;
			} else if (content instanceof Builder) {
				children = content.nodes;
			} else {
				children = [content];
			}
		} else {
			children = null;
		}
		this.nodes.push([name.toLowerCase(), attributes, children]);
	}

	public c(content: Content): void {
		this.nodes.push(content);
	}

	public stringify(options?: Partial<Options>): string {
		return util.stringify(this.nodes, options, 0);
	}
}
