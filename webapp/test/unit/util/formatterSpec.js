QUnit.module("Formatter Tests");

QUnit.test("I should test my formatters", function (assert) {
    assert.ok(true);
});

QUnit.test("join it", function(assert) {
    assert.strictEqual(formatter.joinit("a", "b"), "a");
    assert.strictEqual(formatter.joinit("hello ", "world"), "hello world");
});

