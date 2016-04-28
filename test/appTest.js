/// <reference path="../Scripts/typings/node/node.d.ts" />
/// <reference path="../Scripts/typings/mocha/mocha.d.ts" />
var assert = require('assert');
describe("Test Suite 1", function () {
    it("Test A", function () {
        assert.ok(true, "This shouldn't fail");
    });
    it("Test B", function () {
        assert.ok(1 === 1, "This shouldn't fail");
        assert.ok(false, "This should fail ts");
    });
});
//# sourceMappingURL=appTest.js.map