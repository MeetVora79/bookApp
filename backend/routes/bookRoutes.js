const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookController'); 

// create a new book
router.post('/books', bookController.createBook);

// get all books
router.get('/books', bookController.getAllBooks);

// get a book by id
router.get('/books/:id',bookController.getBookById);

// update a book by id
router.put('/books/:id', bookController.updateBookById);

// delete a book by id
router.delete('/books/:id', bookController.deleteBookById);

module.exports = router;