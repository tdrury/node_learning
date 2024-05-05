
test("Check Date - US Format", () => {
    // given - simple and not perfect date format as mm/dd/yy
    const reDate = /[01]\d\/[0-3]\d\/\d\d/;

    // expect
    expect(reDate.test('01/01/20')).toBe(true);
    expect(reDate.test('12/31/99')).toBe(true);
    expect(reDate.test('22/31/99')).toBe(false);
});

test("Grouping", () => {
    // given - a trivial (and not fully correct) filename.ext matcher
    const reFilename = /(\w*)\.(\w*)/;

    // when
    let results = 'test.log'.match(reFilename);

    // expect
    expect(results[0]).toBe('test.log');
    expect(results[1]).toBe('test');
    expect(results[2]).toBe('log');
});

