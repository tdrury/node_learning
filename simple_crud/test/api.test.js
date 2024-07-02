const app = require('../server');
const request = require('supertest');
const mongoose = require('mongoose');

describe('GET /books', () => {
    it('should return all books', async () => {
        const res = await request(app).get('/books');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});

afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    app.close();
    mongoose.connection.close();
    done();
})
