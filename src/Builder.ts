import type {ObjectMap} from "@stein197/ts-util";
import type {Handler} from "./Handler";
import type {Content} from "./Content";
import type {Node} from "./Node";

export default class Builder {

	private readonly nodes: Node[] = [];

	public e(name: string, attributes?: ObjectMap<string>, content?: Handler | Content | Builder): void;

	public e(name: string, content?: Handler | Content | Builder): void;

	public e(name: string, a?, b?): void {}

	public c(content: Content): void {
		this.nodes.push(content);
	}

	public minify(): string {}

	public prettify(): string {}

	public dom(): Element[] {}
}
