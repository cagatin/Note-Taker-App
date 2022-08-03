const router = require('express').Router();
const fs = require('fs');
const { title } = require('process');
const uniqid = require('uniqid');

// GET route path for displaying the notes
router.get('/notes', (req, res) => {
    const db = require('../db/db.json');     //import the db json file

    res.send(db);
})

// POST route path for saving notes
router.post('/notes', (req, res) => {
    const db = require('../db/db.json');     //import the db json file

    // retrieve the title and text from req.body
    const { title, text } = req.body;

    // if a title and text exist, create a new note.
    if (title && text) {
        let newNote = {
            title,
            text,
            id: uniqid()
        }
        // add it to the json array
        db.push(newNote);

        // update the json file
        fs.writeFile('./db/db.json', JSON.stringify(db), (err) => {
            err ? console.log(err) : console.log('Note saved!');
        })
        res.send(db);
    } else {
        res.send("Error!");
    }
})


// DELETE route path for deleting a note
router.delete('/notes/:id', (req, res) => {
    const db = require('../db/db.json');     //import the db json file

    if (db.length == 0) {
        res.end();
    }
    let deleteId = req.params.id;

    for (let i = 0; i < db.length; i++) {
        if (db[i].id == deleteId) {
            db.splice(i, 1);
        }
    }

    fs.writeFile('./db/db.json', JSON.stringify(db), (err) => {
        err ? console.log(err) : console.log('Note deleted!');
    })
    res.end();
})


// export the router object
module.exports = router;