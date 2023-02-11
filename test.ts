import "mocha";
import * as assert from "assert";
import jsxml from ".";

it("Should return empty string when callback is empty", () => {
	assert.equal(jsxml(() => {}).stringify(), "");
});
it("Should return multiple root elements when calling \"e\" multiple times at top-level callback", () => {
	assert.equal(jsxml(b => {
		b.e("a");
		b.e("b");
	}).stringify(), "<a></a><b></b>");
});
it("Should always place child on the same line when child is the only one and it is string and \"output\" === \"prettified\"", () => {
	assert.equal(jsxml(b => {
		b.e("root", b => {
			b.e("element");
			b.e("element", "string");
		});
	}).stringify({output: "prettified"}), "<root>\n\t<element></element>\n\t<element>string</element>\n</root>\n");
});
it("Should return correct result when processing complex example", () => {
	assert.equal(jsxml(b => {
		b.e("html", {lang: "en"}, b => {
			b.e("head", b => {
				b.e("meta", {charset: "UTF-8"});
				b.e("meta", {"http-equiv": "X-UA-Compatible", content: "IE=edge"});
				b.e("meta", {name: "viewport", content: "width=device-width, initial-scale=1.0"});
				b.e("title", "Document");
			});
			b.e("body");
		});
	}).stringify({mode: "html", output: "prettified"}), "<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"UTF-8\"/>\n\t\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"/>\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\n\t\t<title>Document</title>\n\t</head>\n\t<body></body>\n</html>\n");
});

describe("Tags closing", () => {
	it("Should always selfclose tag when the tag has no children and \"mode\" === \"xml\"", () => {
		assert.equal(jsxml(b => {
			b.e("element");
		}).stringify({mode: "xml"}), "<element/>");
	});
	it("Should always selfclose tag when the tag has no children and \"mode\" === \"html\" and the tag can be selfclosed", () => {
		assert.equal(jsxml(b => {
			b.e("area");
			b.e("base");
			b.e("br");
			b.e("col");
			b.e("command");
			b.e("embed");
			b.e("hr");
			b.e("img");
			b.e("input");
			b.e("keygen");
			b.e("link");
			b.e("menuitem");
			b.e("meta");
			b.e("param");
			b.e("source");
			b.e("track");
			b.e("wbr");
		}).stringify({mode: "html"}), "<area/><base/><br/><col/><command/><embed/><hr/><img/><input/><keygen/><link/><menuitem/><meta/><param/><source/><track/><wbr/>");
	});
	it("Should always close tag with enclosing one when tag has ho children and \"mode\" === \"html\" and the tag cannot be selfclosed", () => {
		assert.equal(jsxml(b => {
			b.e("textarea");
		}).stringify({mode: "html"}), "<textarea></textarea>");
	});
	it("Should property self close tag when an element has attributes", () => {
		assert.equal(jsxml(b => {
			b.e("element", {a: "1"});
		}).stringify({mode: "xml"}), "<element a=\"1\"/>");
	});
});

describe("Attributes", () => {
	it("Should return only single element when attributes are not present", () => {
		assert.equal(jsxml(b => {
			b.e("element");
		}).stringify(), "<element></element>");
	});
	it("Should return only single element when attributes is passed and attributes object is empty", () => {
		assert.equal(jsxml(b => {
			b.e("element", {});
		}).stringify(), "<element></element>");
	});
	it("Should return correct result when argument is passed", () => {
		assert.equal(jsxml(b => {
			b.e("element", {a: "1"});
		}).stringify(), "<element a=\"1\"></element>");
	});
});

describe("API", () => {
	it("e(<name>)", () => {
		assert.equal(jsxml(b => {
			b.e("element")
		}).stringify(), "<element></element>");
	});
	it("e(<name>, <callback>)", () => {
		assert.equal(jsxml(b => {
			b.e("element", b => {
				b.e("element");
			});
		}).stringify(), "<element><element></element></element>");
	});
	it("e(<name>, <content>)", () => {
		assert.equal(jsxml(b => {
			b.e("element", "string");
		}).stringify(), "<element>string</element>");
	});
	it("e(<name>, <builder>)", () => {
		assert.equal(jsxml(b => {
			b.e("element", jsxml(b => {
				b.e("element");
			}));
		}).stringify(), "<element><element></element></element>");
	});
	it("e(<name>, <attributes>)", () => {
		assert.equal(jsxml(b => {
			b.e("element", {a: "1"});
		}).stringify(), "<element a=\"1\"></element>");
	});
	it("e(<name>, <attributes>, <callback>)", () => {
		assert.equal(jsxml(b => {
			b.e("element", {a: "1"}, b => {
				b.e("element");
			});
		}).stringify(), "<element a=\"1\"><element></element></element>");
	});
	it("e(<name>, <attributes>, <content>)", () => {
		assert.equal(jsxml(b => {
			b.e("element", {a: "1"}, "string");
		}).stringify(), "<element a=\"1\">string</element>");
	});
	it("e(<name>, <attributes>, <builder>)", () => {
		assert.equal(jsxml(b => {
			b.e("element", {a: "1"}, jsxml(b => {
				b.e("element");
			}));
		}).stringify(), "<element a=\"1\"><element></element></element>");
	});
	it("c(<content>)", () => {
		assert.equal(jsxml(b => {
			b.c("string");
		}).stringify(), "string");
	});
	it("stringify() should return string in html mode and minified output by default by default", () => {
		assert.equal(jsxml(b => {
			b.e("element", b => {
				b.e("element");
			});
		}).stringify(), "<element><element></element></element>");
	});
	it("stringify() should return minified output when \"output\" === \"minified\"", () => {
		assert.equal(jsxml(b => {
			b.e("element", b => {
				b.e("element");
			});
		}).stringify({output: "minified"}), "<element><element></element></element>");
	});
	it("stringify() should return prettified output when \"output\" === \"prettified\"", () => {
		assert.equal(jsxml(b => {
			b.e("element", b => {
				b.e("element");
			});
		}).stringify({output: "prettified"}), "<element>\n\t<element></element>\n</element>\n");
	});
	it("stringify() should return string in xml mode when \"mode\" is \"xml\"", () => {
		assert.equal(jsxml(b => {
			b.e("element", b => {
				b.e("element");
			});
		}).stringify({mode: "xml"}), "<element><element/></element>");
	});
	it("stringify() should return string in html mode when \"mode\" is \"html\"", () => {
		assert.equal(jsxml(b => {
			b.e("element", b => {
				b.e("element");
			});
		}).stringify({mode: "html"}), "<element><element></element></element>");
	});
	it("toString() should return minified output in html mode", () => {
		assert.equal(jsxml(b => {
			b.e("element", b => {
				b.e("element");
			});
		}).toString(), "<element><element></element></element>");
	});
	it.skip("dom() Should return correct DOM structure");
	it.skip("Should return correct result when calling specific DOM methods");
});
