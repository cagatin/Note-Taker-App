// Heroku --> https://evening-eyrie-72911.herokuapp.com/ 
const express = require('express');
const path = requie('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Middlewear
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve the static files
app.use(express.static('public'));