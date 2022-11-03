QUnit.module("Simple Class Tests");

QUnit.test("Basic Class", function (assert) {
    // given
    let Rectangle = class {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
        get area() {
            return this.height * this.width;
        }
    };

    // when
    let r = new Rectangle(10, 2);

    // then
    assert.equal(r.area, 20);
});

// TODO add linting task