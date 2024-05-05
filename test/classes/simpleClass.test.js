
test("Basic Class", () => {
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
    expect(r.area).toBe(20);
});

// TODO add linting task