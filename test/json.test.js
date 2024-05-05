
test("String as Array", () => {
    // given
    const jsonText = '{ "books": [' +
        '{ "title": "Harry Potter 1", "author": "JK Rowling" },' +
        '{ "title": "Harry Potter 2", "author": "JK Rowling" },' +
        '{ "title": "Spring in Action", "author": "Some Body" }' +
    '] }';

    // when
    let json = JSON.parse(jsonText);

    // then
    expect(json.books[1].title).toBe( 'Harry Potter 2');
});

