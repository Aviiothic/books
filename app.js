// app.js: Responsible for defining the Express app,
// middleware, and routes.

const express = require('express');
const bookRoutes = require('./routes/book-routes');
const applyMiddlewares = require('./middlewares/common-middlewares');
const connectMongoDb = require('./configs/database-connection')

const app = express();
applyMiddlewares(app);     //applying middlewares
connectMongoDb('mongodb://127.0.0.1:27017/bookStore'); //connecting with database

app.get('/', (req, res) => {    //handling root page 
  res.render('home');
})
app.use('/books', bookRoutes);  //defining routes with prefix /books

module.exports = app;