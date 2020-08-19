var dbNotes = require('../db/db.json');
var fs = require('fs');
var path = require('path');
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

        dbNotes.push(newNote)

        let parsedata = JSON.stringify(dbNotes);         
        fs.writeFile(path.join('./db/db.json'), parsedata, (err) => {
            if (err) throw err;
        })
        res.json(dbNotes);

    });

    app.delete('/api/notes/:id', (req, res) => {

        const deleteNote = dbNotes.find(note => note.id === parseInt(req.params.id))
        console.log("delete note", deleteNote)
        
        if(!deleteNote)
        return res.send("Note deleted");

        const allDbNotes = dbNotes.indexOf();
        dbNotes.splice(allDbNotes, 1);

        res.send(deleteNote);
    })
}
