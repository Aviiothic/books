const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        unique : true
    },
    author : {
        type : String,
        required : true
    },
    genre : {
        type : String
    },
    price : {
        type : Number,
        required : true
    }
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
