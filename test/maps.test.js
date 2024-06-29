
test("build a map", () => {
    // given
    let m = new Map([
        ["a", 1],
        ["b", 2]
    ]);
    m.set("c", 3);
    console.log("m=%o", m);

    // expect
    expect(m.size).toBe(3);
    expect(m.get("a")).toBe(1);
    expect(m.get("c")).toBe(3);
    expect(m.has("b")).toBe(true);
});

test("map keys", () => {
    // given
    let m = new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3]
    ]);

    // when
    let keys = "";
    for (const k of m.keys()) {
        keys += k;
    }

    // expect
    expect(keys).toBe("abc");
})

test("map values", () => {
    // given
    let m = new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3]
    ]);

    // when
    let sum = 0;
    for (const v of m.values()) {
        sum += v;
    }

    // expect
    expect(sum).toBe(6);
})