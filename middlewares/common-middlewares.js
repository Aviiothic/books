const express = require('express');
const path = require('path');
const methodOverride = require('method-override');


function applyMiddlewares(app){
    app.set('view engine', 'ejs');  //to enable server side rendering with ejs
    app.set('views', path.join(__dirname, '..', 'views'));  //setting path for view files
    app.use(express.json());    //to parse JSON data received in the request body
    app.use(express.urlencoded({extended : true})); //to fetch data in req.body sent through Post method
    app.use(methodOverride('_method')); // to use patch, put, delete methods using http requests
    app.use(express.static('public'));  // to render static styling and pages
}

module.exports = applyMiddlewares;