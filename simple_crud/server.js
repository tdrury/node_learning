const express = require('express');
const mongoose = require('mongoose');
const joi = require('joi');
const helmet = require('helmet');
require('dotenv').config();
const rateLimit = require('express-rate-limit');
const cors = require('cors');

const Book = require('./book');

const app = express();
const port = 3000;

app.use(express.json());
app.use(helmet());
app.use(cors());

// run mongo via: docker run --name mongodb -p 27017:27017 -d mongo:latest
mongoose.connect('mongodb://localhost:27017/book', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', e));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// -----------------------------------

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// Create a Book
app.post('/books', async (req, res) => {
    try {
        validateBook(req.body);
        let book = new Book({ title: req.body.title, author: req.body.author });
        book = await book.save();
        res.send(book);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Get All Books
app.get('/books', async (req, res) => {
    const books = await Book.find();
    res.send(books);
});

// Get a Single Book
app.get('/books/:id', async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).send('Book not found');
    res.send(book);
});

// Update a Book
app.put('/books/:id', async (req, res) => {
    try {
        validateBook(req.body);
        const book = await Book.findByIdAndUpdate(req.params.id, { title: req.body.title, author: req.body.author }, { new: true });
        if (!book) return res.status(404).send('Book not found');
        res.send(book);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Delete a Book
app.delete('/books/:id', async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).send('Book not found');
    res.status(204).send();
});

function validateBook(book) {
    const schema = joi.object({
      title: joi.string().min(3).required(),
      author: joi.string().min(3).required()
    });
  
    const { error } = schema.validate(book);
    if (error) {
        throw error;
    }
}