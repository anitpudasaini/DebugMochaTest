/// <reference path="../Scripts/typings/node/node.d.ts" />
/// <reference path="../Scripts/typings/mocha/mocha.d.ts" />


import assert = require('assert');

describe("Test Suite 1", () => {
    it("Test A", () => {
        assert.ok(true, "This shouldn't fail");
    });

    it("Test B", () => {
        assert.ok(1 === 1, "This shouldn't fail");
        assert.ok(false, "This should fail ts");
    });
});
