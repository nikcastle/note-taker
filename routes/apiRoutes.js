//Global Variables
let savedNotes = require("../db/db.json");
const fs = require("fs");
const shortid = require("shortid");




module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
        
        res.json(savedNotes);
    })
    
    app.post("/api/notes", (req,res) => {
        let note = req.body;
        note.id = shortid.generate();
        savedNotes.push(note);
        fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes)); 
        res.json(savedNotes);
    })

    app.delete("/api/notes/:id", (req, res) => {
        savedNotes = savedNotes.filter((note)=>req.params.id !== note.id);
        fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes)); 
        res.json(savedNotes);
    })
}

