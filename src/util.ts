import type {Node} from "./Node";
import type {Options} from "./Options";

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
	xml: false,
	minify: true
};

export function stringify(nodes: Node[], options: Options, depth: number): string {
	let result = "";
	const tabulation = options.minify ? "" : "\t".repeat(depth);
	const lf = options.minify ? "" : "\n";
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
			if (!hasChildren && (options.xml || HTML_SELFCLOSING_TAGS.includes(nodeName))) {
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