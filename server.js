const express = require('express');                     // import express module
const path = require('path');                           // import path module

const notesRouter = require('./routes/notesRoute');     // import notesRouter
const db = require('./db/db.json');                     // import the db JSON file (array)


const app = express();  //create express application

// Heroku --> https://evening-eyrie-72911.herokuapp.com/ 
const PORT = process.env.PORT || 3000;

// Middlewear for body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve the static files
app.use(express.static('public'));

// use the notesRoute routes
app.use('/', notesRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})