//Global Variables
const savedNotes = require("../db/db.json");
const fs = require("fs");
const shortid = require("shortid"); //where does this come in?



// TODO: GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

// TODO: POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

// TODO: DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.


module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
        fs.readFile("db.json", (err, data) => { //does this need to parse the info from db.json?
            if (err) throw err;
            return(data)
        })
        res.json(savedNotes);
    })
    
    app.post("/api/notes", (req,res) => {
        savedNotes.push(req.body);
        fs.appendFile //does this need to stringify the info going in to db.json?
        res.json();
    })

    app.delete("/api/notes/:id", (req, res) => {
        fs.readFile("db.json", (err, data) => {
            if (err) throw err;
            else if (data.id === id) {

            }
        })
    })
}

