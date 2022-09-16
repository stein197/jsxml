# JSXML

```
npm install @stein197/jsxml
```

```ts
import jsxml from "@stein197/jsxml";

jsxml(b => {
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
```