const mongoose = require('mongoose');
const connectMongoDb = require('./configs/database-connection')
const Book = require('./models/book-model');


const sampleBooks = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', price: 299 },
    { title: '1984', author: 'George Orwell', genre: 'Dystopian', price: 199 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic', price: 249 },
    { title: 'Moby-Dick', author: 'Herman Melville', genre: 'Adventure', price: 399 },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', price: 279 }
];

async function insertBooks() {
    try {
        await connectMongoDb('mongodb://localhost:27017/bookStore'); // Call your existing DB connection
        await Book.insertMany(sampleBooks);
        console.log('Books inserted successfully!');
        // Verify by counting documents
        const count = await Book.countDocuments();
        console.log(`Total Books in DB: ${count}`);
    } catch (error) {
        console.error('Error inserting books:', error);
    } finally {
        mongoose.connection.close();
    }
}

insertBooks();
