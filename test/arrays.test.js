
test("build an array", () => {
    // given
    let a1 = [];
    a1.push("a");
    a1.push("b");
    a1.push("c");

    // expect
    expect(a1.length).toBe(3);
    expect(a1[0]).toBe("a");
    expect(a1[2]).toBe("c");
});

test("push and pop array elements", () => {
    // given
    let a1 = [];
    a1.push("a");
    a1.push("b");
    a1.push("c");
    let c = a1.pop();
    let b = a1.pop();

    // expect
    expect(a1.length).toBe(1);
    expect(a1).toStrictEqual(["a"]);
    expect(b).toBe("b");
    expect(c).toBe("c");
});

test("shift array elements", () => {
    // given
    let a1 = ["a", "b", "c"];

    // when
    a1.shift();

    // expect
    expect(a1.length).toBe(2);
    expect(a1).toStrictEqual(["b", "c"]);

    // when
    a1.unshift("z");
    expect(a1.length).toBe(3);
    expect(a1).toStrictEqual(["z", "b", "c"]);
});

test("join array", () => {
    // given
    let a1 = ["a", "b", "c"];

    // when
    let s = a1.join(",");

    // expect
    expect(s).toBe("a,b,c");
});

test("concat arrays", () => {
    // given
    let a1 = [];
    let a2 = [];
    a1.push("a");
    a1.push("b");
    a2.push("c");

    // when
    let a3 = a1.concat(a2);

    // expect
    expect(a3.length).toBe(3);
    expect(a3[0]).toBe("a");
    expect(a3[2]).toBe("c");
});

test("remove elements from arrays", () => {
    // given
    let a1 = ["a", "b", "c"];

    // when
    let a2 = a1.toSpliced(1, 1);
    a1.splice(2, 1);

    // expect
    expect(a1.length).toBe(2);
    expect(a1).toStrictEqual(["a", "b"]);
    expect(a2.length).toBe(2);
    expect(a2).toStrictEqual(["a", "c"]);
});

test("slice array into another array", () => {
    // given
    let a1 = ["a", "b", "c"];

    // when
    let a2 = a1.slice(1)

    // expect
    expect(a1.length).toBe(3);
    expect(a1).toStrictEqual(["a", "b", "c"]);
    expect(a2.length).toBe(2);
    expect(a2).toStrictEqual(["b", "c"]);
});

test("copy within array", () => {
    // given
    let a1 = ["a", "b", "c"];

    // when
    a1.copyWithin(2, 0);
    console.log("a1=%o", a1);

    // expect
    expect(a1.length).toBe(3);
    expect(a1).toStrictEqual(["a", "b", "a"]);
});
