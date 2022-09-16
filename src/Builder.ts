import type {ObjectMap} from "@stein197/ts-util";
import type {Handler} from "./Handler";
import type {Content} from "./Content";

export default class Builder {

	private readonly nodes: Node[] = [];

	public e(name: string, attributes?: ObjectMap<string>, handler?: Handler): void;

	public e(name: string, handler?: Handler, attributes?: ObjectMap<string>): void;

	public e(name: string, a, b): void {}

	public c(content: Content): void {
		this.nodes.push(content);
	}

	public minify(): string {}

	public prettify(): string {}

	public dom(): Element[] {}
}
