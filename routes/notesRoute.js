const router = require('express').Router();
const path = require('path');

// Display the notes.html page when a GET request to /notes is made.
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;