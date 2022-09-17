import type {ObjectMap} from "@stein197/ts-util";
import type Builder from "./Builder";

const HTML_SELFCLOSING_TAGS: string[] = [
	"area",
	"base",
	"br",
	"col",
	"command",
	"embed",
	"hr",
	"img",
	"input",
	"keygen",
	"link",
	"menuitem",
	"meta",
	"param",
	"source",
	"track",
	"wbr"
];

export const DEFAULT_OPTIONS: Options = {
	mode: "html",
	output: "minified"
};

export function stringify(nodes: Node[], options: Options, depth: number): string {
	let result = "";
	const isMinified = options.output === "minified";
	const isXml = options.mode === "xml";
	const tabulation = isMinified ? "" : "\t".repeat(depth);
	const lf = isMinified ? "" : "\n";
	const nextDepth = depth + 1;
	for (const node of nodes) {
		if (!Array.isArray(node)) {
			result += tabulation + node + lf;
			continue;
		}
		const [nodeName, nodeAttrs, nodeChildren] = node;
		result += tabulation + `<${nodeName}`;
		if (nodeAttrs) {
			const entries = Object.entries(nodeAttrs);
			if (entries.length)
				result += " " + entries.map(([k, v]) => `${k}="${v}"`).join(" ");
		}
		const hasChildren = nodeChildren && nodeChildren.length;
		if (!hasChildren && (isXml || HTML_SELFCLOSING_TAGS.includes(nodeName))) {
			result += "/>" + lf;
		} else if (hasChildren && nodeChildren.length === 1 && !Array.isArray(nodeChildren[0])) {
			result += `>${nodeChildren[0]}</${nodeName}>` + lf;
		} else if (!hasChildren) {
			result += `></${nodeName}>` + lf;
		} else {
			result += ">" + lf + stringify(nodeChildren, options, nextDepth) + tabulation + `</${nodeName}>` + lf;
		}
	}
	return result;
}

/**
 * Plain content.
 */
export type Content = number | string;

/**
 * Options to use in {@link Builder.stringify()} method.
 */
export type Options = {

	/**
	 * Mode to use. XML mode means that elements without children will be self-closed. In HTML mode, those tags that
	 * cannot be selfclosed will have a closing tag after the opening one.
	 */
	mode: "html" | "xml";

	/**
	 * Minified output trims all newlines and tabs while `prettified` returns formatted string with `\t` and `\n`.
	 */
	output: "prettified" | "minified"
}

export type Handler = (b: Builder) => void;

export type Node = Content | [name: string, attributes: ObjectMap<string> | null, children: Node[] | null];
