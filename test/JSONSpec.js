QUnit.module("JSON Tests");

QUnit.test("String as Array", function (assert) {
    // given
    const jsonText = '{ "books": [' +
        '{ "title": "Harry Potter 1", "author": "JK Rowling" },' +
        '{ "title": "Harry Potter 2", "author": "JK Rowling" },' +
        '{ "title": "Spring in Action", "author": "Some Body" }' +
    '] }';

    // when
    let json = JSON.parse(jsonText);

    // then
    assert.equal(json.books[1].title, 'Harry Potter 2')
});

