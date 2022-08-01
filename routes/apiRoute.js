const router = require('express').Router();
const fs = require('fs');
const uniqid = require('uniqid');
const db = require('../db/db.json');     //import the db json file

// route for saving notes
router.post('/notes', (req, res) => {
    // retrieve the title and text from req.body
    if (req.body) {
        let { title, text } = req.body;
    }

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
        fs.writeFile('../db/db.json', JSON.stringify(db), (err) => {
            err ? console.log(err) : console.log('Note saved!');
        })
    }
})


// export the router object
module.exports = router;