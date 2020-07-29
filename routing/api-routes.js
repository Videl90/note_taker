var dbNotes = require('../db/db.json');
var fs = require ("fs");
console.log(dbNotes);

module.exports = function (app) {

    app.get('/api/notes', (req, res) => {
        res.json(dbNotes);
        console.log(dbNotes);
    });

    app.post('/api/notes', (req, res) => {
        let newNote = req.body
        let noteNum = dbNotes.length + 1;
        newNote.id = noteNum;

        fs.readFile(dbNotes, (err, data) => {
            db.push(newNote);
            res.send(dbNotes);
        })
    });

    app.delete('/api/notes/:id', function(req, data){
        
    })
}
