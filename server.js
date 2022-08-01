const express = require('express');
const path = require('path');

// import the router
const notesRouter = require('./routes/notesRoute');

const app = express();

// Heroku --> https://evening-eyrie-72911.herokuapp.com/ 
const PORT = process.env.PORT || 3000;

// Middlewear
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