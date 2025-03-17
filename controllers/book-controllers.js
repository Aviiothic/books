// const app = require('../app');
const Book = require('../models/book-model');

async function listBooks(req, res) {
    try {
        const books = await Book.find(); // Fetch all books from the database
        res.render('list-all-books', { books }); // Pass books data to the template
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).send('Internal Server Error');
    }
}

function addBook(req,res){
    res.render("add-book");
}

async function insertNewBook(req,res){
    try{
        const {title, author, genre, price} = req.body;
        const newBook = new Book({title, author, genre, price});
        await newBook.save();
        res.redirect('/books');
    }catch(error){
        console.error('Error inserting new book:', error);
        res.status(500).send('Internal Server Error');
    }

}

function getBookById(req,res){
    res.send("Get Book By ID Here");
}

async function editBook(req,res){
    try{
        const bookId= req.params.id;
        const book = await Book.findById(bookId);
        res.render('update-book', {book});
    }catch(error){
        console.error('Error fetching book:', error);
    }
}

async function updateBook(req,res){
    try{
        const {title, author, genre, price} = req.body;
        const bookId = req.params.id;
        await Book.findByIdAndUpdate(bookId, {title, author, genre, price});
        res.redirect('/books');
    }catch(error){
        console.error('Error updating book:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function deleteBook(req,res){
    try{
        const bookId = req.params.id;
        await Book.findByIdAndDelete(bookId);
        res.redirect('/books');
    }catch(error){
        console.error('Error deleting book:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {listBooks, addBook, getBookById, updateBook, deleteBook, insertNewBook, editBook};