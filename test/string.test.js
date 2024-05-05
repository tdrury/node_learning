
test("Basic String", () => {
    expect(2 == "2").toBe(true);
    expect(2 === "2").toBe(false);
});

test("String as Array", () => {
    const s = "abcdefg";
    expect(s[3]).toBe('d');
});
