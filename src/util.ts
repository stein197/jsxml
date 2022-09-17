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
		if (Array.isArray(node)) {
			const [nodeName, nodeAttrs, nodeChildren] = node;
			result += `<${nodeName}`;
			if (nodeAttrs)
				result += " " + Object.entries(nodeAttrs).map(([k, v]) => `${k}="${v}"`).join(" ");
			const hasChildren = nodeChildren && nodeChildren.length;
			if (!hasChildren && (isXml || HTML_SELFCLOSING_TAGS.includes(nodeName))) {
				result += "/>";
			} else if (hasChildren && nodeChildren.length === 1 && !Array.isArray(nodeChildren[0])) {
				result += `>${nodeChildren[0]}</${nodeName}>`;
			} else if (!hasChildren) {
				result += `></${nodeName}>`;
			} else {
				result += ">" + lf;
				result += stringify(nodeChildren, options, nextDepth);
				result += tabulation + `</${nodeName}>` + lf;
			}
		} else {
			result += tabulation + node + lf;
		}
	}
	return result;
}

export type Content = number | string;
export type Options = {
	mode: "html" | "xml";
	output: "prettified" | "minified"
}
export type Handler = (b: Builder) => void;
export type Node = Content | [name: string, attributes: ObjectMap<string> | null, children: Node[] | null];
