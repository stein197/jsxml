# JSXML

```
npm install @stein197/jsxml
```

```ts
import jsxml from "@stein197/jsxml";

const xml = jsxml(b => {
	b.e("html", {lang: "en"}, b => {
		b.e("head", b => {
			b.e("meta", {charset: "UTF-8"});
			b.e("meta", {"http-equiv": "X-UA-Compatible", content: "IE=edge"});
			b.e("meta", {name: "viewport", content: "width=device-width, initial-scale=1.0"});
			b.e("title", "Document");
		});
		b.e("body");
	});
});

// Or use methods corresponding to tha tag names. HTML, SVG and MathML tags are supported
const xml = jsxml(_ => {
	_.html({lang: "en"}, _ => {
		_.head();
		_.body();
	});
});

// And then stringify it...
console.log(xml.stringify({mode: "xml", output: "prettified"}));
// ...or return DOM structure
document.body.append(xml.dom());
```

## NPM scripts
- `clean` - deletes compiled files
- `build` - compiles TypeScript source code
- `test` - runs unit tests
