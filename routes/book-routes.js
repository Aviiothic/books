const express = require('express');
const router = express.Router();
const {listBooks, addBook, getBookById, updateBook, deleteBook, insertNewBook, editBook} = require('../controllers/book-controllers') ;


//route to list all books
router.get('/', listBooks);
router.get('/add', addBook);
router.post('/', insertNewBook)
//router.get('/:id', getBookById); //will implement later 
router.get('/:id/edit', editBook)
router.patch('/:id', updateBook);
router.delete('/:id', deleteBook);


module.exports = router;