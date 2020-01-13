QUnit.module("RegExp Tests");

QUnit.test("Check Date - US Format", function (assert) {
    // given - simple and not perfect date format as mm/dd/yy
    const reDate = /[01]\d\/[0-3]\d\/\d\d/;

    // expect
    assert.ok(reDate[Symbol.match]('01/01/20'));
    assert.ok(reDate[Symbol.match]('12/31/99'));
    assert.ok('12/31/99'.match(reDate)); // cleaner way to match
    assert.notOk('22/31/99'.match(reDate)); // invalid
});

QUnit.test("Grouping", function (assert) {
    // given - a trivial (and not fully correct) filename.ext matcher
    const reFilename = /(\w*)\.(\w*)/;

    // when
    let results = 'test.log'.match(reFilename);

    // expect
    assert.equal(results[1], 'test');
    assert.equal(results[2], 'log');
    assert.equal(results[0], 'test.log');
});

