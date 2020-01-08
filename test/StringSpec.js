QUnit.module("String Tests");

QUnit.test("Basic String", function (assert) {
    assert.ok(1 == "1", "Passed!");
});

QUnit.test("String as Array", function (assert) {
    const s = "abcdefg";
    assert.equal(s[3], 'd')
});

