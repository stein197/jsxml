import type {ObjectMap} from "@stein197/ts-util";
import * as util from "./util";

/**
 * The main class that is responsible for DSL.
 */
export default class Builder {

	private readonly nodes: util.Node[] = [];

	/**
	 * Creates an element and appends it to the inner tree.
	 * @param name Name of the element.
	 * @param attributes Plain object that represent attributes that will be applied to the element.
	 * @param content The inner content of the element. Could be a number, string, callback or another builder.
	 */
	public e(name: string, attributes?: ObjectMap<string>, content?: util.Handler | util.Content | Builder): void;

	/**
	 * Creates an element and appends it to the inner tree.
	 * @param name Name of the element.
	 * @param content The inner content of the element. Could be a number, string, callback or another builder.
	 */
	public e(name: string, content?: util.Handler | util.Content | Builder): void;

	public e(name: string, a?, b?): void {
		const content = typeof a !== "object" || a instanceof Builder ? a : typeof b !== "object" || b instanceof Builder ? b : null;
		const attributes = typeof a === "object" && !(a instanceof Builder) ? a : typeof b === "object" && !(b instanceof Builder) ? b : null;
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

	/**
	 * Adds a plain simple content node.
	 * @param content Content to add.
	 */
	public c(content: util.Content): void {
		this.nodes.push(content);
	}

	/**
	 * Stringifies the inner tree in a resulting XML or HTML structure.
	 * @param options Options to use.
	 * @returns String representation of the inner tree.
	 */
	public stringify(options: Partial<util.Options> = util.DEFAULT_OPTIONS): string {
		return util.stringify(this.nodes, options === util.DEFAULT_OPTIONS ? util.DEFAULT_OPTIONS : {...util.DEFAULT_OPTIONS, ...options}, 0);
	}

	/**
	 * Converts the builder into a string representation.
	 * @returns String representation of a tree.
	 */
	public toString(): string {
		return this.stringify();
	}
}
