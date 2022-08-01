const express = require('express');                     // import express module
const path = require('path');                           // import path module

const notesRouter = require('./routes/notesRoute.js');     // import notesRouter
const apiRouter = require('./routes/apiRoute.js');

//create express application
const app = express();

// Heroku --> https://evening-eyrie-72911.herokuapp.com/ 
const PORT = process.env.PORT || 3000;

// Middlewear for body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', notesRouter);  // use the notesRoute routes
app.use('/api', apiRouter);    // use the apiRoute routes

// serve the static files
app.use(express.static('public'));

// Start the server
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})