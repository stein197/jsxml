import type {ObjectMap} from "@stein197/ts-util";
import * as util from "./util";

export default class Builder {

	private readonly nodes: util.Node[] = [];

	public e(name: string, attributes?: ObjectMap<string>, content?: util.Handler | util.Content | Builder): void;

	public e(name: string, content?: util.Handler | util.Content | Builder): void;

	public e(name: string, a?, b?): void {
		const attributes = typeof a === "object" ? a : typeof b === "object" ? b : null;
		const content = typeof a !== "object" ? a : typeof b !== "object" ? b : null;
		let children: util.Node[] | null;
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

	public c(content: util.Content): void {
		this.nodes.push(content);
	}

	public stringify(options: Partial<util.Options> = util.DEFAULT_OPTIONS): string {
		return util.stringify(this.nodes, options === util.DEFAULT_OPTIONS ? util.DEFAULT_OPTIONS : {...util.DEFAULT_OPTIONS, ...options}, 0);
	}

	public toString(): string {
		return this.stringify();
	}
}
