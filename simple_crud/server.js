const express = require('express');
const mongoose = require('mongoose');
const Book = require('./book');

const app = express();
const port = 3000;

app.use(express.json());

// run mongo via: docker run --name mongodb -p 27017:27017 -d mongo:latest
mongoose.connect('mongodb://localhost:27017/book', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', e));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// A temporary in-memory "database" until you integrate a real database
// let books = [];
// books[0] = {
//     "id": 1,
//     "title": "Hello World for Dummies",
//     "author": "Me"
// }

// Create a Book
app.post('/books', async (req, res) => {
    let book = new Book({ title: req.body.title, author: req.body.author });
    book = await book.save();
    res.send(book);
});

// app.post('/books', (req, res) => {
//     const { title, author } = req.body;
//     if (!title || !author) {
//         return res.status(400).send('Missing title or author');
//     }
//     console.log('creating title: %s', title);
    
//     const newBook = { id: books.length + 1, title, author };
//     books.push(newBook);
//     res.status(201).send(newBook);    
// });

// Get All Books
app.get('/books', async (req, res) => {
    const books = await Book.find();
    res.send(books);
});
// app.get('/books', (req, res) => {
//     res.json(books);
// });

// Get a Single Book
app.get('/books/:id', async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).send('Book not found');
    res.send(book);
});
// app.get('/books/:id', (req, res) => {
//     const book = books.find(b => b.id === parseInt(req.params.id));
//     if (!book) {
//       return res.status(404).send('Book not found');
//     }
//     res.json(book);
// });

// Update a Book
app.put('/books/:id', async (req, res) => {
    const book = await Book.findByIdAndUpdate(req.params.id, { title: req.body.title, author: req.body.author }, { new: true });
    if (!book) return res.status(404).send('Book not found');
    res.send(book);
});
// app.put('/books/:id', (req, res) => {
//     const book = books.find(b => b.id === parseInt(req.params.id));
//     if (!book) {
//       return res.status(404).send('Book not found');
//     }
//     const { title, author } = req.body;
//     book.title = title || book.title;
//     book.author = author || book.author;
//     res.status(200).send(book);        
// });

// Delete a Book
app.delete('/books/:id', async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).send('Book not found');
    res.status(204).send();
});
// app.delete('/books/:id', (req, res) => {
//     const bookIndex = books.find(b => b.id === parseInt(req.params.id));
//     if (bookIndex === -1) {
//       return res.status(404).send('Book not found');
//     }
//     books.splice(bookIndex, 1);
//     res.status(204).send();
// });
