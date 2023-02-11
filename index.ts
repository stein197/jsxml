import type {ObjectMap, ElementAttributesMap} from "@stein197/ts-util";

/**
 * Creates 
 * @param handler 
 * @returns 
 */
export = function jsxml(handler: Handler): Builder {
	const b = new Builder();
	handler(b);
	return b;
}

/**
 * The main class that is responsible for DSL.
 */
class Builder {

	private static readonly DEFAULT_STRINGIFY_OPTIONS: StringifyOptions = {
		mode: "html",
		output: "minified"
	};

	private static readonly HTML_SELFCLOSING_TAGS: string[] = [
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

	private readonly nodes: Node[] = [];

	/**
	 * Creates an element and appends it to the inner tree.
	 * @param name Name of the element.
	 * @param attributes Plain object that represent attributes that will be applied to the element.
	 * @param content The inner content of the element. Could be a number, string, callback or another builder.
	 */
	public e(name: string, attributes?: ObjectMap<string>, content?: Handler | Content | Builder): void;

	/**
	 * Creates an element and appends it to the inner tree.
	 * @param name Name of the element.
	 * @param content The inner content of the element. Could be a number, string, callback or another builder.
	 */
	public e(name: string, content?: Handler | Content | Builder): void;

	public e(name: string, a?, b?): void {
		const children = typeof a !== "object" || a instanceof Builder ? a : typeof b !== "object" || b instanceof Builder ? b : [];
		const attributes = typeof a === "object" && !(a instanceof Builder) ? a : typeof b === "object" && !(b instanceof Builder) ? b : {};
		this.nodes.push([name.toLowerCase(), Builder.normalizeAttributes(attributes), Builder.normalizeChildren(children)]);
	}

	/**
	 * Adds a plain simple content node.
	 * @param content Content to add.
	 */
	public c(content: Content): void {
		this.nodes.push(content);
	}

	public a(attributes?: Partial<ElementAttributesMap["a"]>, content?: Content | Handler | Builder): void;

	public a(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public a(a?, b?): void {
		this.e("a", a, b);
	}

	public abbr(attributes?: Partial<ElementAttributesMap["abbr"]>, content?: Content | Handler | Builder): void;

	public abbr(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public abbr(a?, b?): void {
		this.e("abbr", a, b);
	}

	public acronym(attributes?: Partial<ElementAttributesMap["acronym"]>, content?: Content | Handler | Builder): void;

	public acronym(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public acronym(a?, b?): void {
		this.e("acronym", a, b);
	}

	public address(attributes?: Partial<ElementAttributesMap["address"]>, content?: Content | Handler | Builder): void;

	public address(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public address(a?, b?): void {
		this.e("address", a, b);
	}

	public applet(attributes?: Partial<ElementAttributesMap["applet"]>, content?: Content | Handler | Builder): void;

	public applet(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public applet(a?, b?): void {
		this.e("applet", a, b);
	}

	public area(attributes?: Partial<ElementAttributesMap["area"]>, content?: Content | Handler | Builder): void;

	public area(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public area(a?, b?): void {
		this.e("area", a, b);
	}

	public article(attributes?: Partial<ElementAttributesMap["article"]>, content?: Content | Handler | Builder): void;

	public article(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public article(a?, b?): void {
		this.e("article", a, b);
	}

	public aside(attributes?: Partial<ElementAttributesMap["aside"]>, content?: Content | Handler | Builder): void;

	public aside(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public aside(a?, b?): void {
		this.e("aside", a, b);
	}

	public audio(attributes?: Partial<ElementAttributesMap["audio"]>, content?: Content | Handler | Builder): void;

	public audio(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public audio(a?, b?): void {
		this.e("audio", a, b);
	}

	public b(attributes?: Partial<ElementAttributesMap["b"]>, content?: Content | Handler | Builder): void;

	public b(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public b(a?, b?): void {
		this.e("b", a, b);
	}

	public base(attributes?: Partial<ElementAttributesMap["base"]>, content?: Content | Handler | Builder): void;

	public base(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public base(a?, b?): void {
		this.e("base", a, b);
	}

	public basefont(attributes?: Partial<ElementAttributesMap["basefont"]>, content?: Content | Handler | Builder): void;

	public basefont(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public basefont(a?, b?): void {
		this.e("basefont", a, b);
	}

	public bdi(attributes?: Partial<ElementAttributesMap["bdi"]>, content?: Content | Handler | Builder): void;

	public bdi(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public bdi(a?, b?): void {
		this.e("bdi", a, b);
	}

	public bdo(attributes?: Partial<ElementAttributesMap["bdo"]>, content?: Content | Handler | Builder): void;

	public bdo(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public bdo(a?, b?): void {
		this.e("bdo", a, b);
	}

	public bgsound(attributes?: Partial<ElementAttributesMap["bgsound"]>, content?: Content | Handler | Builder): void;

	public bgsound(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public bgsound(a?, b?): void {
		this.e("bgsound", a, b);
	}

	public big(attributes?: Partial<ElementAttributesMap["big"]>, content?: Content | Handler | Builder): void;

	public big(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public big(a?, b?): void {
		this.e("big", a, b);
	}

	public blink(attributes?: Partial<ElementAttributesMap["blink"]>, content?: Content | Handler | Builder): void;

	public blink(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public blink(a?, b?): void {
		this.e("blink", a, b);
	}

	public blockquote(attributes?: Partial<ElementAttributesMap["blockquote"]>, content?: Content | Handler | Builder): void;

	public blockquote(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public blockquote(a?, b?): void {
		this.e("blockquote", a, b);
	}

	public body(attributes?: Partial<ElementAttributesMap["body"]>, content?: Content | Handler | Builder): void;

	public body(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public body(a?, b?): void {
		this.e("body", a, b);
	}

	public br(attributes?: Partial<ElementAttributesMap["br"]>, content?: Content | Handler | Builder): void;

	public br(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public br(a?, b?): void {
		this.e("br", a, b);
	}

	public button(attributes?: Partial<ElementAttributesMap["button"]>, content?: Content | Handler | Builder): void;

	public button(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public button(a?, b?): void {
		this.e("button", a, b);
	}

	public canvas(attributes?: Partial<ElementAttributesMap["canvas"]>, content?: Content | Handler | Builder): void;

	public canvas(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public canvas(a?, b?): void {
		this.e("canvas", a, b);
	}

	public caption(attributes?: Partial<ElementAttributesMap["caption"]>, content?: Content | Handler | Builder): void;

	public caption(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public caption(a?, b?): void {
		this.e("caption", a, b);
	}

	public center(attributes?: Partial<ElementAttributesMap["center"]>, content?: Content | Handler | Builder): void;

	public center(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public center(a?, b?): void {
		this.e("center", a, b);
	}

	public cite(attributes?: Partial<ElementAttributesMap["cite"]>, content?: Content | Handler | Builder): void;

	public cite(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public cite(a?, b?): void {
		this.e("cite", a, b);
	}

	public code(attributes?: Partial<ElementAttributesMap["code"]>, content?: Content | Handler | Builder): void;

	public code(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public code(a?, b?): void {
		this.e("code", a, b);
	}

	public col(attributes?: Partial<ElementAttributesMap["col"]>, content?: Content | Handler | Builder): void;

	public col(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public col(a?, b?): void {
		this.e("col", a, b);
	}

	public colgroup(attributes?: Partial<ElementAttributesMap["colgroup"]>, content?: Content | Handler | Builder): void;

	public colgroup(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public colgroup(a?, b?): void {
		this.e("colgroup", a, b);
	}

	public content(attributes?: Partial<ElementAttributesMap["content"]>, content?: Content | Handler | Builder): void;

	public content(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public content(a?, b?): void {
		this.e("content", a, b);
	}

	public data(attributes?: Partial<ElementAttributesMap["data"]>, content?: Content | Handler | Builder): void;

	public data(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public data(a?, b?): void {
		this.e("data", a, b);
	}

	public datalist(attributes?: Partial<ElementAttributesMap["datalist"]>, content?: Content | Handler | Builder): void;

	public datalist(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public datalist(a?, b?): void {
		this.e("datalist", a, b);
	}

	public dd(attributes?: Partial<ElementAttributesMap["dd"]>, content?: Content | Handler | Builder): void;

	public dd(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public dd(a?, b?): void {
		this.e("dd", a, b);
	}

	public del(attributes?: Partial<ElementAttributesMap["del"]>, content?: Content | Handler | Builder): void;

	public del(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public del(a?, b?): void {
		this.e("del", a, b);
	}

	public details(attributes?: Partial<ElementAttributesMap["details"]>, content?: Content | Handler | Builder): void;

	public details(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public details(a?, b?): void {
		this.e("details", a, b);
	}

	public dfn(attributes?: Partial<ElementAttributesMap["dfn"]>, content?: Content | Handler | Builder): void;

	public dfn(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public dfn(a?, b?): void {
		this.e("dfn", a, b);
	}

	public dialog(attributes?: Partial<ElementAttributesMap["dialog"]>, content?: Content | Handler | Builder): void;

	public dialog(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public dialog(a?, b?): void {
		this.e("dialog", a, b);
	}

	public dir(attributes?: Partial<ElementAttributesMap["dir"]>, content?: Content | Handler | Builder): void;

	public dir(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public dir(a?, b?): void {
		this.e("dir", a, b);
	}

	public div(attributes?: Partial<ElementAttributesMap["div"]>, content?: Content | Handler | Builder): void;

	public div(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public div(a?, b?): void {
		this.e("div", a, b);
	}

	public dl(attributes?: Partial<ElementAttributesMap["dl"]>, content?: Content | Handler | Builder): void;

	public dl(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public dl(a?, b?): void {
		this.e("dl", a, b);
	}

	public dt(attributes?: Partial<ElementAttributesMap["dt"]>, content?: Content | Handler | Builder): void;

	public dt(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public dt(a?, b?): void {
		this.e("dt", a, b);
	}

	public em(attributes?: Partial<ElementAttributesMap["em"]>, content?: Content | Handler | Builder): void;

	public em(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public em(a?, b?): void {
		this.e("em", a, b);
	}

	public embed(attributes?: Partial<ElementAttributesMap["embed"]>, content?: Content | Handler | Builder): void;

	public embed(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public embed(a?, b?): void {
		this.e("embed", a, b);
	}

	public fieldset(attributes?: Partial<ElementAttributesMap["fieldset"]>, content?: Content | Handler | Builder): void;

	public fieldset(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public fieldset(a?, b?): void {
		this.e("fieldset", a, b);
	}

	public figcaption(attributes?: Partial<ElementAttributesMap["figcaption"]>, content?: Content | Handler | Builder): void;

	public figcaption(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public figcaption(a?, b?): void {
		this.e("figcaption", a, b);
	}

	public figure(attributes?: Partial<ElementAttributesMap["figure"]>, content?: Content | Handler | Builder): void;

	public figure(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public figure(a?, b?): void {
		this.e("figure", a, b);
	}

	public font(attributes?: Partial<ElementAttributesMap["font"]>, content?: Content | Handler | Builder): void;

	public font(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public font(a?, b?): void {
		this.e("font", a, b);
	}

	public footer(attributes?: Partial<ElementAttributesMap["footer"]>, content?: Content | Handler | Builder): void;

	public footer(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public footer(a?, b?): void {
		this.e("footer", a, b);
	}

	public form(attributes?: Partial<ElementAttributesMap["form"]>, content?: Content | Handler | Builder): void;

	public form(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public form(a?, b?): void {
		this.e("form", a, b);
	}

	public frame(attributes?: Partial<ElementAttributesMap["frame"]>, content?: Content | Handler | Builder): void;

	public frame(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public frame(a?, b?): void {
		this.e("frame", a, b);
	}

	public frameset(attributes?: Partial<ElementAttributesMap["frameset"]>, content?: Content | Handler | Builder): void;

	public frameset(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public frameset(a?, b?): void {
		this.e("frameset", a, b);
	}

	public h1(attributes?: Partial<ElementAttributesMap["h1"]>, content?: Content | Handler | Builder): void;

	public h1(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public h1(a?, b?): void {
		this.e("h1", a, b);
	}

	public h2(attributes?: Partial<ElementAttributesMap["h2"]>, content?: Content | Handler | Builder): void;

	public h2(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public h2(a?, b?): void {
		this.e("h2", a, b);
	}

	public h3(attributes?: Partial<ElementAttributesMap["h3"]>, content?: Content | Handler | Builder): void;

	public h3(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public h3(a?, b?): void {
		this.e("h3", a, b);
	}

	public h4(attributes?: Partial<ElementAttributesMap["h4"]>, content?: Content | Handler | Builder): void;

	public h4(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public h4(a?, b?): void {
		this.e("h4", a, b);
	}

	public h5(attributes?: Partial<ElementAttributesMap["h5"]>, content?: Content | Handler | Builder): void;

	public h5(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public h5(a?, b?): void {
		this.e("h5", a, b);
	}

	public h6(attributes?: Partial<ElementAttributesMap["h6"]>, content?: Content | Handler | Builder): void;

	public h6(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public h6(a?, b?): void {
		this.e("h6", a, b);
	}

	public head(attributes?: Partial<ElementAttributesMap["head"]>, content?: Content | Handler | Builder): void;

	public head(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public head(a?, b?): void {
		this.e("head", a, b);
	}

	public header(attributes?: Partial<ElementAttributesMap["header"]>, content?: Content | Handler | Builder): void;

	public header(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public header(a?, b?): void {
		this.e("header", a, b);
	}

	public hgroup(attributes?: Partial<ElementAttributesMap["hgroup"]>, content?: Content | Handler | Builder): void;

	public hgroup(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public hgroup(a?, b?): void {
		this.e("hgroup", a, b);
	}

	public hr(attributes?: Partial<ElementAttributesMap["hr"]>, content?: Content | Handler | Builder): void;

	public hr(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public hr(a?, b?): void {
		this.e("hr", a, b);
	}

	public html(attributes?: Partial<ElementAttributesMap["html"]>, content?: Content | Handler | Builder): void;

	public html(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public html(a?, b?): void {
		this.e("html", a, b);
	}

	public i(attributes?: Partial<ElementAttributesMap["i"]>, content?: Content | Handler | Builder): void;

	public i(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public i(a?, b?): void {
		this.e("i", a, b);
	}

	public iframe(attributes?: Partial<ElementAttributesMap["iframe"]>, content?: Content | Handler | Builder): void;

	public iframe(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public iframe(a?, b?): void {
		this.e("iframe", a, b);
	}

	public img(attributes?: Partial<ElementAttributesMap["img"]>, content?: Content | Handler | Builder): void;

	public img(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public img(a?, b?): void {
		this.e("img", a, b);
	}

	public input(attributes?: Partial<ElementAttributesMap["input"]>, content?: Content | Handler | Builder): void;

	public input(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public input(a?, b?): void {
		this.e("input", a, b);
	}

	public ins(attributes?: Partial<ElementAttributesMap["ins"]>, content?: Content | Handler | Builder): void;

	public ins(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public ins(a?, b?): void {
		this.e("ins", a, b);
	}

	public kbd(attributes?: Partial<ElementAttributesMap["kbd"]>, content?: Content | Handler | Builder): void;

	public kbd(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public kbd(a?, b?): void {
		this.e("kbd", a, b);
	}

	public keygen(attributes?: Partial<ElementAttributesMap["keygen"]>, content?: Content | Handler | Builder): void;

	public keygen(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public keygen(a?, b?): void {
		this.e("keygen", a, b);
	}

	public label(attributes?: Partial<ElementAttributesMap["label"]>, content?: Content | Handler | Builder): void;

	public label(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public label(a?, b?): void {
		this.e("label", a, b);
	}

	public legend(attributes?: Partial<ElementAttributesMap["legend"]>, content?: Content | Handler | Builder): void;

	public legend(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public legend(a?, b?): void {
		this.e("legend", a, b);
	}

	public li(attributes?: Partial<ElementAttributesMap["li"]>, content?: Content | Handler | Builder): void;

	public li(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public li(a?, b?): void {
		this.e("li", a, b);
	}

	public link(attributes?: Partial<ElementAttributesMap["link"]>, content?: Content | Handler | Builder): void;

	public link(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public link(a?, b?): void {
		this.e("link", a, b);
	}

	public main(attributes?: Partial<ElementAttributesMap["main"]>, content?: Content | Handler | Builder): void;

	public main(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public main(a?, b?): void {
		this.e("main", a, b);
	}

	public map(attributes?: Partial<ElementAttributesMap["map"]>, content?: Content | Handler | Builder): void;

	public map(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public map(a?, b?): void {
		this.e("map", a, b);
	}

	public mark(attributes?: Partial<ElementAttributesMap["mark"]>, content?: Content | Handler | Builder): void;

	public mark(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public mark(a?, b?): void {
		this.e("mark", a, b);
	}

	public marquee(attributes?: Partial<ElementAttributesMap["marquee"]>, content?: Content | Handler | Builder): void;

	public marquee(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public marquee(a?, b?): void {
		this.e("marquee", a, b);
	}

	public menu(attributes?: Partial<ElementAttributesMap["menu"]>, content?: Content | Handler | Builder): void;

	public menu(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public menu(a?, b?): void {
		this.e("menu", a, b);
	}

	public menuitem(attributes?: Partial<ElementAttributesMap["menuitem"]>, content?: Content | Handler | Builder): void;

	public menuitem(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public menuitem(a?, b?): void {
		this.e("menuitem", a, b);
	}

	public meta(attributes?: Partial<ElementAttributesMap["meta"]>, content?: Content | Handler | Builder): void;

	public meta(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public meta(a?, b?): void {
		this.e("meta", a, b);
	}

	public meter(attributes?: Partial<ElementAttributesMap["meter"]>, content?: Content | Handler | Builder): void;

	public meter(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public meter(a?, b?): void {
		this.e("meter", a, b);
	}

	public nav(attributes?: Partial<ElementAttributesMap["nav"]>, content?: Content | Handler | Builder): void;

	public nav(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public nav(a?, b?): void {
		this.e("nav", a, b);
	}

	public nobr(attributes?: Partial<ElementAttributesMap["nobr"]>, content?: Content | Handler | Builder): void;

	public nobr(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public nobr(a?, b?): void {
		this.e("nobr", a, b);
	}

	public noembed(attributes?: Partial<ElementAttributesMap["noembed"]>, content?: Content | Handler | Builder): void;

	public noembed(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public noembed(a?, b?): void {
		this.e("noembed", a, b);
	}

	public noframes(attributes?: Partial<ElementAttributesMap["noframes"]>, content?: Content | Handler | Builder): void;

	public noframes(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public noframes(a?, b?): void {
		this.e("noframes", a, b);
	}

	public noscript(attributes?: Partial<ElementAttributesMap["noscript"]>, content?: Content | Handler | Builder): void;

	public noscript(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public noscript(a?, b?): void {
		this.e("noscript", a, b);
	}

	public object(attributes?: Partial<ElementAttributesMap["object"]>, content?: Content | Handler | Builder): void;

	public object(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public object(a?, b?): void {
		this.e("object", a, b);
	}

	public ol(attributes?: Partial<ElementAttributesMap["ol"]>, content?: Content | Handler | Builder): void;

	public ol(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public ol(a?, b?): void {
		this.e("ol", a, b);
	}

	public optgroup(attributes?: Partial<ElementAttributesMap["optgroup"]>, content?: Content | Handler | Builder): void;

	public optgroup(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public optgroup(a?, b?): void {
		this.e("optgroup", a, b);
	}

	public option(attributes?: Partial<ElementAttributesMap["option"]>, content?: Content | Handler | Builder): void;

	public option(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public option(a?, b?): void {
		this.e("option", a, b);
	}

	public output(attributes?: Partial<ElementAttributesMap["output"]>, content?: Content | Handler | Builder): void;

	public output(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public output(a?, b?): void {
		this.e("output", a, b);
	}

	public p(attributes?: Partial<ElementAttributesMap["p"]>, content?: Content | Handler | Builder): void;

	public p(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public p(a?, b?): void {
		this.e("p", a, b);
	}

	public param(attributes?: Partial<ElementAttributesMap["param"]>, content?: Content | Handler | Builder): void;

	public param(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public param(a?, b?): void {
		this.e("param", a, b);
	}

	public picture(attributes?: Partial<ElementAttributesMap["picture"]>, content?: Content | Handler | Builder): void;

	public picture(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public picture(a?, b?): void {
		this.e("picture", a, b);
	}

	public plaintext(attributes?: Partial<ElementAttributesMap["plaintext"]>, content?: Content | Handler | Builder): void;

	public plaintext(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public plaintext(a?, b?): void {
		this.e("plaintext", a, b);
	}

	public portal(attributes?: Partial<ElementAttributesMap["portal"]>, content?: Content | Handler | Builder): void;

	public portal(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public portal(a?, b?): void {
		this.e("portal", a, b);
	}

	public pre(attributes?: Partial<ElementAttributesMap["pre"]>, content?: Content | Handler | Builder): void;

	public pre(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public pre(a?, b?): void {
		this.e("pre", a, b);
	}

	public progress(attributes?: Partial<ElementAttributesMap["progress"]>, content?: Content | Handler | Builder): void;

	public progress(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public progress(a?, b?): void {
		this.e("progress", a, b);
	}

	public q(attributes?: Partial<ElementAttributesMap["q"]>, content?: Content | Handler | Builder): void;

	public q(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public q(a?, b?): void {
		this.e("q", a, b);
	}

	public rb(attributes?: Partial<ElementAttributesMap["rb"]>, content?: Content | Handler | Builder): void;

	public rb(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public rb(a?, b?): void {
		this.e("rb", a, b);
	}

	public rp(attributes?: Partial<ElementAttributesMap["rp"]>, content?: Content | Handler | Builder): void;

	public rp(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public rp(a?, b?): void {
		this.e("rp", a, b);
	}

	public rt(attributes?: Partial<ElementAttributesMap["rt"]>, content?: Content | Handler | Builder): void;

	public rt(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public rt(a?, b?): void {
		this.e("rt", a, b);
	}

	public rtc(attributes?: Partial<ElementAttributesMap["rtc"]>, content?: Content | Handler | Builder): void;

	public rtc(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public rtc(a?, b?): void {
		this.e("rtc", a, b);
	}

	public ruby(attributes?: Partial<ElementAttributesMap["ruby"]>, content?: Content | Handler | Builder): void;

	public ruby(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public ruby(a?, b?): void {
		this.e("ruby", a, b);
	}

	public s(attributes?: Partial<ElementAttributesMap["s"]>, content?: Content | Handler | Builder): void;

	public s(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public s(a?, b?): void {
		this.e("s", a, b);
	}

	public samp(attributes?: Partial<ElementAttributesMap["samp"]>, content?: Content | Handler | Builder): void;

	public samp(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public samp(a?, b?): void {
		this.e("samp", a, b);
	}

	public script(attributes?: Partial<ElementAttributesMap["script"]>, content?: Content | Handler | Builder): void;

	public script(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public script(a?, b?): void {
		this.e("script", a, b);
	}

	public section(attributes?: Partial<ElementAttributesMap["section"]>, content?: Content | Handler | Builder): void;

	public section(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public section(a?, b?): void {
		this.e("section", a, b);
	}

	public select(attributes?: Partial<ElementAttributesMap["select"]>, content?: Content | Handler | Builder): void;

	public select(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public select(a?, b?): void {
		this.e("select", a, b);
	}

	public shadow(attributes?: Partial<ElementAttributesMap["shadow"]>, content?: Content | Handler | Builder): void;

	public shadow(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public shadow(a?, b?): void {
		this.e("shadow", a, b);
	}

	public slot(attributes?: Partial<ElementAttributesMap["slot"]>, content?: Content | Handler | Builder): void;

	public slot(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public slot(a?, b?): void {
		this.e("slot", a, b);
	}

	public small(attributes?: Partial<ElementAttributesMap["small"]>, content?: Content | Handler | Builder): void;

	public small(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public small(a?, b?): void {
		this.e("small", a, b);
	}

	public source(attributes?: Partial<ElementAttributesMap["source"]>, content?: Content | Handler | Builder): void;

	public source(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public source(a?, b?): void {
		this.e("source", a, b);
	}

	public spacer(attributes?: Partial<ElementAttributesMap["spacer"]>, content?: Content | Handler | Builder): void;

	public spacer(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public spacer(a?, b?): void {
		this.e("spacer", a, b);
	}

	public span(attributes?: Partial<ElementAttributesMap["span"]>, content?: Content | Handler | Builder): void;

	public span(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public span(a?, b?): void {
		this.e("span", a, b);
	}

	public strike(attributes?: Partial<ElementAttributesMap["strike"]>, content?: Content | Handler | Builder): void;

	public strike(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public strike(a?, b?): void {
		this.e("strike", a, b);
	}

	public strong(attributes?: Partial<ElementAttributesMap["strong"]>, content?: Content | Handler | Builder): void;

	public strong(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public strong(a?, b?): void {
		this.e("strong", a, b);
	}

	public style(attributes?: Partial<ElementAttributesMap["style"]>, content?: Content | Handler | Builder): void;

	public style(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public style(a?, b?): void {
		this.e("style", a, b);
	}

	public sub(attributes?: Partial<ElementAttributesMap["sub"]>, content?: Content | Handler | Builder): void;

	public sub(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public sub(a?, b?): void {
		this.e("sub", a, b);
	}

	public summary(attributes?: Partial<ElementAttributesMap["summary"]>, content?: Content | Handler | Builder): void;

	public summary(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public summary(a?, b?): void {
		this.e("summary", a, b);
	}

	public sup(attributes?: Partial<ElementAttributesMap["sup"]>, content?: Content | Handler | Builder): void;

	public sup(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public sup(a?, b?): void {
		this.e("sup", a, b);
	}

	public table(attributes?: Partial<ElementAttributesMap["table"]>, content?: Content | Handler | Builder): void;

	public table(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public table(a?, b?): void {
		this.e("table", a, b);
	}

	public tbody(attributes?: Partial<ElementAttributesMap["tbody"]>, content?: Content | Handler | Builder): void;

	public tbody(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public tbody(a?, b?): void {
		this.e("tbody", a, b);
	}

	public td(attributes?: Partial<ElementAttributesMap["td"]>, content?: Content | Handler | Builder): void;

	public td(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public td(a?, b?): void {
		this.e("td", a, b);
	}

	public template(attributes?: Partial<ElementAttributesMap["template"]>, content?: Content | Handler | Builder): void;

	public template(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public template(a?, b?): void {
		this.e("template", a, b);
	}

	public textarea(attributes?: Partial<ElementAttributesMap["textarea"]>, content?: Content | Handler | Builder): void;

	public textarea(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public textarea(a?, b?): void {
		this.e("textarea", a, b);
	}

	public tfoot(attributes?: Partial<ElementAttributesMap["tfoot"]>, content?: Content | Handler | Builder): void;

	public tfoot(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public tfoot(a?, b?): void {
		this.e("tfoot", a, b);
	}

	public th(attributes?: Partial<ElementAttributesMap["th"]>, content?: Content | Handler | Builder): void;

	public th(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public th(a?, b?): void {
		this.e("th", a, b);
	}

	public thead(attributes?: Partial<ElementAttributesMap["thead"]>, content?: Content | Handler | Builder): void;

	public thead(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public thead(a?, b?): void {
		this.e("thead", a, b);
	}

	public time(attributes?: Partial<ElementAttributesMap["time"]>, content?: Content | Handler | Builder): void;

	public time(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public time(a?, b?): void {
		this.e("time", a, b);
	}

	public title(attributes?: Partial<ElementAttributesMap["title"]>, content?: Content | Handler | Builder): void;

	public title(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public title(a?, b?): void {
		this.e("title", a, b);
	}

	public tr(attributes?: Partial<ElementAttributesMap["tr"]>, content?: Content | Handler | Builder): void;

	public tr(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public tr(a?, b?): void {
		this.e("tr", a, b);
	}

	public track(attributes?: Partial<ElementAttributesMap["track"]>, content?: Content | Handler | Builder): void;

	public track(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public track(a?, b?): void {
		this.e("track", a, b);
	}

	public tt(attributes?: Partial<ElementAttributesMap["tt"]>, content?: Content | Handler | Builder): void;

	public tt(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public tt(a?, b?): void {
		this.e("tt", a, b);
	}

	public u(attributes?: Partial<ElementAttributesMap["u"]>, content?: Content | Handler | Builder): void;

	public u(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public u(a?, b?): void {
		this.e("u", a, b);
	}

	public ul(attributes?: Partial<ElementAttributesMap["ul"]>, content?: Content | Handler | Builder): void;

	public ul(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public ul(a?, b?): void {
		this.e("ul", a, b);
	}

	public var(attributes?: Partial<ElementAttributesMap["var"]>, content?: Content | Handler | Builder): void;

	public var(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public var(a?, b?): void {
		this.e("var", a, b);
	}

	public video(attributes?: Partial<ElementAttributesMap["video"]>, content?: Content | Handler | Builder): void;

	public video(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public video(a?, b?): void {
		this.e("video", a, b);
	}

	public wbr(attributes?: Partial<ElementAttributesMap["wbr"]>, content?: Content | Handler | Builder): void;

	public wbr(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public wbr(a?, b?): void {
		this.e("wbr", a, b);
	}

	public xmp(attributes?: Partial<ElementAttributesMap["xmp"]>, content?: Content | Handler | Builder): void;

	public xmp(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public xmp(a?, b?): void {
		this.e("xmp", a, b);
	}

	public altGlyph(attributes?: Partial<ElementAttributesMap["altGlyph"]>, content?: Content | Handler | Builder): void;

	public altGlyph(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public altGlyph(a?, b?): void {
		this.e("altGlyph", a, b);
	}

	public altGlyphDef(attributes?: Partial<ElementAttributesMap["altGlyphDef"]>, content?: Content | Handler | Builder): void;

	public altGlyphDef(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public altGlyphDef(a?, b?): void {
		this.e("altGlyphDef", a, b);
	}

	public altGlyphItem(attributes?: Partial<ElementAttributesMap["altGlyphItem"]>, content?: Content | Handler | Builder): void;

	public altGlyphItem(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public altGlyphItem(a?, b?): void {
		this.e("altGlyphItem", a, b);
	}

	public animate(attributes?: Partial<ElementAttributesMap["animate"]>, content?: Content | Handler | Builder): void;

	public animate(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public animate(a?, b?): void {
		this.e("animate", a, b);
	}

	public animateMotion(attributes?: Partial<ElementAttributesMap["animateMotion"]>, content?: Content | Handler | Builder): void;

	public animateMotion(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public animateMotion(a?, b?): void {
		this.e("animateMotion", a, b);
	}

	public animateTransform(attributes?: Partial<ElementAttributesMap["animateTransform"]>, content?: Content | Handler | Builder): void;

	public animateTransform(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public animateTransform(a?, b?): void {
		this.e("animateTransform", a, b);
	}

	public circle(attributes?: Partial<ElementAttributesMap["circle"]>, content?: Content | Handler | Builder): void;

	public circle(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public circle(a?, b?): void {
		this.e("circle", a, b);
	}

	public clipPath(attributes?: Partial<ElementAttributesMap["clipPath"]>, content?: Content | Handler | Builder): void;

	public clipPath(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public clipPath(a?, b?): void {
		this.e("clipPath", a, b);
	}

	public colorProfile(attributes?: Partial<ElementAttributesMap["color-profile"]>, content?: Content | Handler | Builder): void;

	public colorProfile(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public colorProfile(a?, b?): void {
		this.e("color-profile", a, b);
	}

	public cursor(attributes?: Partial<ElementAttributesMap["cursor"]>, content?: Content | Handler | Builder): void;

	public cursor(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public cursor(a?, b?): void {
		this.e("cursor", a, b);
	}

	public defs(attributes?: Partial<ElementAttributesMap["defs"]>, content?: Content | Handler | Builder): void;

	public defs(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public defs(a?, b?): void {
		this.e("defs", a, b);
	}

	public desc(attributes?: Partial<ElementAttributesMap["desc"]>, content?: Content | Handler | Builder): void;

	public desc(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public desc(a?, b?): void {
		this.e("desc", a, b);
	}

	public ellipse(attributes?: Partial<ElementAttributesMap["ellipse"]>, content?: Content | Handler | Builder): void;

	public ellipse(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public ellipse(a?, b?): void {
		this.e("ellipse", a, b);
	}

	public feBlend(attributes?: Partial<ElementAttributesMap["feBlend"]>, content?: Content | Handler | Builder): void;

	public feBlend(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public feBlend(a?, b?): void {
		this.e("feBlend", a, b);
	}

	public feColorMatrix(attributes?: Partial<ElementAttributesMap["feColorMatrix"]>, content?: Content | Handler | Builder): void;

	public feColorMatrix(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public feColorMatrix(a?, b?): void {
		this.e("feColorMatrix", a, b);
	}

	public feComponentTransfer(attributes?: Partial<ElementAttributesMap["feComponentTransfer"]>, content?: Content | Handler | Builder): void;

	public feComponentTransfer(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public feComponentTransfer(a?, b?): void {
		this.e("feComponentTransfer", a, b);
	}

	public feComposite(attributes?: Partial<ElementAttributesMap["feComposite"]>, content?: Content | Handler | Builder): void;

	public feComposite(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public feComposite(a?, b?): void {
		this.e("feComposite", a, b);
	}

	public feConvolveMatrix(attributes?: Partial<ElementAttributesMap["feConvolveMatrix"]>, content?: Content | Handler | Builder): void;

	public feConvolveMatrix(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public feConvolveMatrix(a?, b?): void {
		this.e("feConvolveMatrix", a, b);
	}

	public feDiffuseLighting(attributes?: Partial<ElementAttributesMap["feDiffuseLighting"]>, content?: Content | Handler | Builder): void;

	public feDiffuseLighting(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public feDiffuseLighting(a?, b?): void {
		this.e("feDiffuseLighting", a, b);
	}

	public feDisplacementMap(attributes?: Partial<ElementAttributesMap["feDisplacementMap"]>, content?: Content | Handler | Builder): void;

	public feDisplacementMap(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public feDisplacementMap(a?, b?): void {
		this.e("feDisplacementMap", a, b);
	}

	public feDistantLight(attributes?: Partial<ElementAttributesMap["feDistantLight"]>, content?: Content | Handler | Builder): void;

	public feDistantLight(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public feDistantLight(a?, b?): void {
		this.e("feDistantLight", a, b);
	}

	public feFlood(attributes?: Partial<ElementAttributesMap["feFlood"]>, content?: Content | Handler | Builder): void;

	public feFlood(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public feFlood(a?, b?): void {
		this.e("feFlood", a, b);
	}

	public feFuncA(attributes?: Partial<ElementAttributesMap["feFuncA"]>, content?: Content | Handler | Builder): void;

	public feFuncA(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public feFuncA(a?, b?): void {
		this.e("feFuncA", a, b);
	}

	public feFuncB(attributes?: Partial<ElementAttributesMap["feFuncB"]>, content?: Content | Handler | Builder): void;

	public feFuncB(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public feFuncB(a?, b?): void {
		this.e("feFuncB", a, b);
	}

	public feFuncG(attributes?: Partial<ElementAttributesMap["feFuncG"]>, content?: Content | Handler | Builder): void;

	public feFuncG(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public feFuncG(a?, b?): void {
		this.e("feFuncG", a, b);
	}

	public feFuncR(attributes?: Partial<ElementAttributesMap["feFuncR"]>, content?: Content | Handler | Builder): void;

	public feFuncR(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public feFuncR(a?, b?): void {
		this.e("feFuncR", a, b);
	}

	public feGaussianBlur(attributes?: Partial<ElementAttributesMap["feGaussianBlur"]>, content?: Content | Handler | Builder): void;

	public feGaussianBlur(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public feGaussianBlur(a?, b?): void {
		this.e("feGaussianBlur", a, b);
	}

	public feImage(attributes?: Partial<ElementAttributesMap["feImage"]>, content?: Content | Handler | Builder): void;

	public feImage(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public feImage(a?, b?): void {
		this.e("feImage", a, b);
	}

	public feMerge(attributes?: Partial<ElementAttributesMap["feMerge"]>, content?: Content | Handler | Builder): void;

	public feMerge(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public feMerge(a?, b?): void {
		this.e("feMerge", a, b);
	}

	public feMergeNode(attributes?: Partial<ElementAttributesMap["feMergeNode"]>, content?: Content | Handler | Builder): void;

	public feMergeNode(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public feMergeNode(a?, b?): void {
		this.e("feMergeNode", a, b);
	}

	public feMorphology(attributes?: Partial<ElementAttributesMap["feMorphology"]>, content?: Content | Handler | Builder): void;

	public feMorphology(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public feMorphology(a?, b?): void {
		this.e("feMorphology", a, b);
	}

	public feOffset(attributes?: Partial<ElementAttributesMap["feOffset"]>, content?: Content | Handler | Builder): void;

	public feOffset(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public feOffset(a?, b?): void {
		this.e("feOffset", a, b);
	}

	public fePointLight(attributes?: Partial<ElementAttributesMap["fePointLight"]>, content?: Content | Handler | Builder): void;

	public fePointLight(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public fePointLight(a?, b?): void {
		this.e("fePointLight", a, b);
	}

	public feSpecularLighting(attributes?: Partial<ElementAttributesMap["feSpecularLighting"]>, content?: Content | Handler | Builder): void;

	public feSpecularLighting(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public feSpecularLighting(a?, b?): void {
		this.e("feSpecularLighting", a, b);
	}

	public feSpotLight(attributes?: Partial<ElementAttributesMap["feSpotLight"]>, content?: Content | Handler | Builder): void;

	public feSpotLight(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public feSpotLight(a?, b?): void {
		this.e("feSpotLight", a, b);
	}

	public feTile(attributes?: Partial<ElementAttributesMap["feTile"]>, content?: Content | Handler | Builder): void;

	public feTile(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public feTile(a?, b?): void {
		this.e("feTile", a, b);
	}

	public feTurbulence(attributes?: Partial<ElementAttributesMap["feTurbulence"]>, content?: Content | Handler | Builder): void;

	public feTurbulence(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public feTurbulence(a?, b?): void {
		this.e("feTurbulence", a, b);
	}

	public filter(attributes?: Partial<ElementAttributesMap["filter"]>, content?: Content | Handler | Builder): void;

	public filter(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public filter(a?, b?): void {
		this.e("filter", a, b);
	}

	public fontFace(attributes?: Partial<ElementAttributesMap["font-face"]>, content?: Content | Handler | Builder): void;

	public fontFace(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public fontFace(a?, b?): void {
		this.e("font-face", a, b);
	}

	public fontFaceFormat(attributes?: Partial<ElementAttributesMap["font-face-format"]>, content?: Content | Handler | Builder): void;

	public fontFaceFormat(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public fontFaceFormat(a?, b?): void {
		this.e("font-face-format", a, b);
	}

	public fontFaceName(attributes?: Partial<ElementAttributesMap["font-face-name"]>, content?: Content | Handler | Builder): void;

	public fontFaceName(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public fontFaceName(a?, b?): void {
		this.e("font-face-name", a, b);
	}

	public fontFaceSrc(attributes?: Partial<ElementAttributesMap["font-face-src"]>, content?: Content | Handler | Builder): void;

	public fontFaceSrc(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public fontFaceSrc(a?, b?): void {
		this.e("font-face-src", a, b);
	}

	public fontFaceUri(attributes?: Partial<ElementAttributesMap["font-face-uri"]>, content?: Content | Handler | Builder): void;

	public fontFaceUri(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public fontFaceUri(a?, b?): void {
		this.e("font-face-uri", a, b);
	}

	public foreignObject(attributes?: Partial<ElementAttributesMap["foreignObject"]>, content?: Content | Handler | Builder): void;

	public foreignObject(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public foreignObject(a?, b?): void {
		this.e("foreignObject", a, b);
	}

	public g(attributes?: Partial<ElementAttributesMap["g"]>, content?: Content | Handler | Builder): void;

	public g(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public g(a?, b?): void {
		this.e("g", a, b);
	}

	public glyph(attributes?: Partial<ElementAttributesMap["glyph"]>, content?: Content | Handler | Builder): void;

	public glyph(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public glyph(a?, b?): void {
		this.e("glyph", a, b);
	}

	public glyphRef(attributes?: Partial<ElementAttributesMap["glyphRef"]>, content?: Content | Handler | Builder): void;

	public glyphRef(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public glyphRef(a?, b?): void {
		this.e("glyphRef", a, b);
	}

	public hkern(attributes?: Partial<ElementAttributesMap["hkern"]>, content?: Content | Handler | Builder): void;

	public hkern(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public hkern(a?, b?): void {
		this.e("hkern", a, b);
	}

	public image(attributes?: Partial<ElementAttributesMap["image"]>, content?: Content | Handler | Builder): void;

	public image(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public image(a?, b?): void {
		this.e("image", a, b);
	}

	public line(attributes?: Partial<ElementAttributesMap["line"]>, content?: Content | Handler | Builder): void;

	public line(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public line(a?, b?): void {
		this.e("line", a, b);
	}

	public linearGradient(attributes?: Partial<ElementAttributesMap["linearGradient"]>, content?: Content | Handler | Builder): void;

	public linearGradient(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public linearGradient(a?, b?): void {
		this.e("linearGradient", a, b);
	}

	public marker(attributes?: Partial<ElementAttributesMap["marker"]>, content?: Content | Handler | Builder): void;

	public marker(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public marker(a?, b?): void {
		this.e("marker", a, b);
	}

	public mask(attributes?: Partial<ElementAttributesMap["mask"]>, content?: Content | Handler | Builder): void;

	public mask(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public mask(a?, b?): void {
		this.e("mask", a, b);
	}

	public metadata(attributes?: Partial<ElementAttributesMap["metadata"]>, content?: Content | Handler | Builder): void;

	public metadata(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public metadata(a?, b?): void {
		this.e("metadata", a, b);
	}

	public missingGlyph(attributes?: Partial<ElementAttributesMap["missing-glyph"]>, content?: Content | Handler | Builder): void;

	public missingGlyph(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public missingGlyph(a?, b?): void {
		this.e("missing-glyph", a, b);
	}

	public mpath(attributes?: Partial<ElementAttributesMap["mpath"]>, content?: Content | Handler | Builder): void;

	public mpath(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public mpath(a?, b?): void {
		this.e("mpath", a, b);
	}

	public path(attributes?: Partial<ElementAttributesMap["path"]>, content?: Content | Handler | Builder): void;

	public path(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public path(a?, b?): void {
		this.e("path", a, b);
	}

	public pattern(attributes?: Partial<ElementAttributesMap["pattern"]>, content?: Content | Handler | Builder): void;

	public pattern(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public pattern(a?, b?): void {
		this.e("pattern", a, b);
	}

	public polygon(attributes?: Partial<ElementAttributesMap["polygon"]>, content?: Content | Handler | Builder): void;

	public polygon(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public polygon(a?, b?): void {
		this.e("polygon", a, b);
	}

	public polyline(attributes?: Partial<ElementAttributesMap["polyline"]>, content?: Content | Handler | Builder): void;

	public polyline(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public polyline(a?, b?): void {
		this.e("polyline", a, b);
	}

	public radialGradient(attributes?: Partial<ElementAttributesMap["radialGradient"]>, content?: Content | Handler | Builder): void;

	public radialGradient(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public radialGradient(a?, b?): void {
		this.e("radialGradient", a, b);
	}

	public rect(attributes?: Partial<ElementAttributesMap["rect"]>, content?: Content | Handler | Builder): void;

	public rect(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public rect(a?, b?): void {
		this.e("rect", a, b);
	}

	public set(attributes?: Partial<ElementAttributesMap["set"]>, content?: Content | Handler | Builder): void;

	public set(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public set(a?, b?): void {
		this.e("set", a, b);
	}

	public stop(attributes?: Partial<ElementAttributesMap["stop"]>, content?: Content | Handler | Builder): void;

	public stop(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public stop(a?, b?): void {
		this.e("stop", a, b);
	}

	public svg(attributes?: Partial<ElementAttributesMap["svg"]>, content?: Content | Handler | Builder): void;

	public svg(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public svg(a?, b?): void {
		this.e("svg", a, b);
	}

	public switch(attributes?: Partial<ElementAttributesMap["switch"]>, content?: Content | Handler | Builder): void;

	public switch(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public switch(a?, b?): void {
		this.e("switch", a, b);
	}

	public symbol(attributes?: Partial<ElementAttributesMap["symbol"]>, content?: Content | Handler | Builder): void;

	public symbol(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public symbol(a?, b?): void {
		this.e("symbol", a, b);
	}

	public text(attributes?: Partial<ElementAttributesMap["text"]>, content?: Content | Handler | Builder): void;

	public text(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public text(a?, b?): void {
		this.e("text", a, b);
	}

	public textPath(attributes?: Partial<ElementAttributesMap["textPath"]>, content?: Content | Handler | Builder): void;

	public textPath(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public textPath(a?, b?): void {
		this.e("textPath", a, b);
	}

	public tref(attributes?: Partial<ElementAttributesMap["tref"]>, content?: Content | Handler | Builder): void;

	public tref(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public tref(a?, b?): void {
		this.e("tref", a, b);
	}

	public tspan(attributes?: Partial<ElementAttributesMap["tspan"]>, content?: Content | Handler | Builder): void;

	public tspan(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public tspan(a?, b?): void {
		this.e("tspan", a, b);
	}

	public use(attributes?: Partial<ElementAttributesMap["use"]>, content?: Content | Handler | Builder): void;

	public use(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public use(a?, b?): void {
		this.e("use", a, b);
	}

	public view(attributes?: Partial<ElementAttributesMap["view"]>, content?: Content | Handler | Builder): void;

	public view(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public view(a?, b?): void {
		this.e("view", a, b);
	}

	public vkern(attributes?: Partial<ElementAttributesMap["vkern"]>, content?: Content | Handler | Builder): void;

	public vkern(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public vkern(a?, b?): void {
		this.e("vkern", a, b);
	}

	public math(attributes?: Partial<ElementAttributesMap["math"]>, content?: Content | Handler | Builder): void;

	public math(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public math(a?, b?): void {
		this.e("math", a, b);
	}

	public maction(attributes?: Partial<ElementAttributesMap["maction"]>, content?: Content | Handler | Builder): void;

	public maction(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public maction(a?, b?): void {
		this.e("maction", a, b);
	}

	public annotation(attributes?: Partial<ElementAttributesMap["annotation"]>, content?: Content | Handler | Builder): void;

	public annotation(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public annotation(a?, b?): void {
		this.e("annotation", a, b);
	}

	public annotationXml(attributes?: Partial<ElementAttributesMap["annotation-xml"]>, content?: Content | Handler | Builder): void;

	public annotationXml(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public annotationXml(a?, b?): void {
		this.e("annotation-xml", a, b);
	}

	public menclose(attributes?: Partial<ElementAttributesMap["menclose"]>, content?: Content | Handler | Builder): void;

	public menclose(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public menclose(a?, b?): void {
		this.e("menclose", a, b);
	}

	public merror(attributes?: Partial<ElementAttributesMap["merror"]>, content?: Content | Handler | Builder): void;

	public merror(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public merror(a?, b?): void {
		this.e("merror", a, b);
	}

	public mfenced(attributes?: Partial<ElementAttributesMap["mfenced"]>, content?: Content | Handler | Builder): void;

	public mfenced(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public mfenced(a?, b?): void {
		this.e("mfenced", a, b);
	}

	public mfrac(attributes?: Partial<ElementAttributesMap["mfrac"]>, content?: Content | Handler | Builder): void;

	public mfrac(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public mfrac(a?, b?): void {
		this.e("mfrac", a, b);
	}

	public mi(attributes?: Partial<ElementAttributesMap["mi"]>, content?: Content | Handler | Builder): void;

	public mi(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public mi(a?, b?): void {
		this.e("mi", a, b);
	}

	public mmultiscripts(attributes?: Partial<ElementAttributesMap["mmultiscripts"]>, content?: Content | Handler | Builder): void;

	public mmultiscripts(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public mmultiscripts(a?, b?): void {
		this.e("mmultiscripts", a, b);
	}

	public mn(attributes?: Partial<ElementAttributesMap["mn"]>, content?: Content | Handler | Builder): void;

	public mn(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public mn(a?, b?): void {
		this.e("mn", a, b);
	}

	public none(attributes?: Partial<ElementAttributesMap["none"]>, content?: Content | Handler | Builder): void;

	public none(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public none(a?, b?): void {
		this.e("none", a, b);
	}

	public mo(attributes?: Partial<ElementAttributesMap["mo"]>, content?: Content | Handler | Builder): void;

	public mo(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public mo(a?, b?): void {
		this.e("mo", a, b);
	}

	public mover(attributes?: Partial<ElementAttributesMap["mover"]>, content?: Content | Handler | Builder): void;

	public mover(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public mover(a?, b?): void {
		this.e("mover", a, b);
	}

	public mpadded(attributes?: Partial<ElementAttributesMap["mpadded"]>, content?: Content | Handler | Builder): void;

	public mpadded(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public mpadded(a?, b?): void {
		this.e("mpadded", a, b);
	}

	public mphantom(attributes?: Partial<ElementAttributesMap["mphantom"]>, content?: Content | Handler | Builder): void;

	public mphantom(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public mphantom(a?, b?): void {
		this.e("mphantom", a, b);
	}

	public mprescripts(attributes?: Partial<ElementAttributesMap["mprescripts"]>, content?: Content | Handler | Builder): void;

	public mprescripts(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public mprescripts(a?, b?): void {
		this.e("mprescripts", a, b);
	}

	public mroot(attributes?: Partial<ElementAttributesMap["mroot"]>, content?: Content | Handler | Builder): void;

	public mroot(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public mroot(a?, b?): void {
		this.e("mroot", a, b);
	}

	public mrow(attributes?: Partial<ElementAttributesMap["mrow"]>, content?: Content | Handler | Builder): void;

	public mrow(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public mrow(a?, b?): void {
		this.e("mrow", a, b);
	}

	public ms(attributes?: Partial<ElementAttributesMap["ms"]>, content?: Content | Handler | Builder): void;

	public ms(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public ms(a?, b?): void {
		this.e("ms", a, b);
	}

	public semantics(attributes?: Partial<ElementAttributesMap["semantics"]>, content?: Content | Handler | Builder): void;

	public semantics(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public semantics(a?, b?): void {
		this.e("semantics", a, b);
	}

	public mspace(attributes?: Partial<ElementAttributesMap["mspace"]>, content?: Content | Handler | Builder): void;

	public mspace(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public mspace(a?, b?): void {
		this.e("mspace", a, b);
	}

	public msqrt(attributes?: Partial<ElementAttributesMap["msqrt"]>, content?: Content | Handler | Builder): void;

	public msqrt(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public msqrt(a?, b?): void {
		this.e("msqrt", a, b);
	}

	public mstyle(attributes?: Partial<ElementAttributesMap["mstyle"]>, content?: Content | Handler | Builder): void;

	public mstyle(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public mstyle(a?, b?): void {
		this.e("mstyle", a, b);
	}

	public msub(attributes?: Partial<ElementAttributesMap["msub"]>, content?: Content | Handler | Builder): void;

	public msub(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public msub(a?, b?): void {
		this.e("msub", a, b);
	}

	public msup(attributes?: Partial<ElementAttributesMap["msup"]>, content?: Content | Handler | Builder): void;

	public msup(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public msup(a?, b?): void {
		this.e("msup", a, b);
	}

	public msubsup(attributes?: Partial<ElementAttributesMap["msubsup"]>, content?: Content | Handler | Builder): void;

	public msubsup(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public msubsup(a?, b?): void {
		this.e("msubsup", a, b);
	}

	public mtable(attributes?: Partial<ElementAttributesMap["mtable"]>, content?: Content | Handler | Builder): void;

	public mtable(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public mtable(a?, b?): void {
		this.e("mtable", a, b);
	}

	public mtd(attributes?: Partial<ElementAttributesMap["mtd"]>, content?: Content | Handler | Builder): void;

	public mtd(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public mtd(a?, b?): void {
		this.e("mtd", a, b);
	}

	public mtext(attributes?: Partial<ElementAttributesMap["mtext"]>, content?: Content | Handler | Builder): void;

	public mtext(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public mtext(a?, b?): void {
		this.e("mtext", a, b);
	}

	public mtr(attributes?: Partial<ElementAttributesMap["mtr"]>, content?: Content | Handler | Builder): void;

	public mtr(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public mtr(a?, b?): void {
		this.e("mtr", a, b);
	}

	public munder(attributes?: Partial<ElementAttributesMap["munder"]>, content?: Content | Handler | Builder): void;

	public munder(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public munder(a?, b?): void {
		this.e("munder", a, b);
	}

	public munderover(attributes?: Partial<ElementAttributesMap["munderover"]>, content?: Content | Handler | Builder): void;

	public munderover(content?: Content | Handler | Builder): void;

	// TODO: Testing, data types conversion in attributes
	public munderover(a?, b?): void {
		this.e("munderover", a, b);
	}

	/**
	 * Stringifies the inner tree in a resulting XML or HTML structure.
	 * @param options Options to use.
	 * @returns String representation of the inner tree.
	 */
	public stringify(options: Partial<StringifyOptions> = Builder.DEFAULT_STRINGIFY_OPTIONS): string {
		return Builder.stringify(this.nodes, options === Builder.DEFAULT_STRINGIFY_OPTIONS ? Builder.DEFAULT_STRINGIFY_OPTIONS : {...Builder.DEFAULT_STRINGIFY_OPTIONS, ...options}, 0);
	}

	/**
	 * Converts the builder into a string representation.
	 * @returns String representation of a tree.
	 */
	public toString(): string {
		return this.stringify();
	}

	/**
	 * Returns the tree as a DOM structure.
	 * @returns DOM.
	 */
	public dom(): string | Element | DocumentFragment {
		const result = Builder.dom(this.nodes);
		if (result.length === 1)
			return result[0];
		const fragment = globalThis.document.createDocumentFragment();
		for (const element of result)
			fragment.append(element);
		return fragment;
	}

	private static normalizeChildren(content: Content | Handler | Builder): Node[] {
		if (!content)
			return [];
		if (typeof content === "function") {
			const builder = new Builder();
			content(builder);
			return builder.nodes;
		} else if (content instanceof Builder) {
			return content.nodes;
		} else {
			return [content];
		}
	}
	
	private static normalizeAttributes(attributes: ObjectMap<string>): ObjectMap<string> {
		for (const k in attributes)
			if (k === "style" && typeof attributes[k] === "object")
				attributes[k] = Object.entries(attributes[k]).map(entry => `${entry[0]}: ${entry[1]}`).join("; ");
			else if (Array.isArray(attributes[k]))
				attributes[k] = (attributes[k] as unknown as any[]).join(" ");
		return attributes;
	}
	
	private static dom(nodes: Node[]): (Element | string)[] {
		const result: (Element | string)[] = [];
		for (const node of nodes) {
			if (Array.isArray(node)) {
				const [name, attributes, children] = node;
				const element = globalThis.document.createElement(name);
				for (const k in attributes)
					element.setAttribute(k, attributes[k]);
				element.append(...this.dom(children));
				result.push(element);
			} else {
				result.push(String(node));
			}
		}
		return result;
	}
	
	private static stringify(nodes: Node[], options: StringifyOptions, depth: number): string {
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
			const entries = Object.entries(nodeAttrs);
			if (entries.length)
				result += " " + entries.map(([k, v]) => `${k}="${v}"`).join(" ");
			const hasChildren = nodeChildren && nodeChildren.length;
			if (!hasChildren && (isXml || Builder.HTML_SELFCLOSING_TAGS.includes(nodeName))) {
				result += "/>" + lf;
			} else if (hasChildren && nodeChildren.length === 1 && !Array.isArray(nodeChildren[0])) {
				result += `>${nodeChildren[0]}</${nodeName}>` + lf;
			} else if (!hasChildren) {
				result += `></${nodeName}>` + lf;
			} else {
				result += ">" + lf + this.stringify(nodeChildren, options, nextDepth) + tabulation + `</${nodeName}>` + lf;
			}
		}
		return result;
	}
}

type Content = number | string;

type StringifyOptions = {

	/**
	 * Mode to use. XML mode means that elements without children will be self-closed. In HTML mode, those tags that
	 * cannot be selfclosed will have a closing tag after the opening one.
	 */
	mode: "html" | "xml";

	/**
	 * Minified output trims all newlines and tabs while `prettified` returns formatted string with `\t` and `\n`.
	 */
	output: "prettified" | "minified"; // TODO: Add more options to formatting
}

type Handler = (b: Builder) => void;

type Node = Content | [name: string, attributes: ObjectMap<string>, children: Node[]];
