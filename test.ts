import * as assert from "assert";
import * as mocha from "mocha";
import jsxml from ".";

mocha.it("Should return empty string when callback is empty", () => {
	assert.equal(jsxml(() => {}).stringify(), "");
});
