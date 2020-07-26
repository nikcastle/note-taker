const path = require("path");

// TODO: The following HTML routes should be created:
    //GET `/notes` - Should return the `notes.html` file.
   
   
   module.exports = (app) => {
       app.get("/notes", (req, res) => {
            res.sendFile(path.join(__dirname,"../public/notes.html"));
        })
    
        //GET `*` - Should return the `index.html` file
    
        app.get("*", (req, res) => {
            res.sendFile(path.join(__dirname, "../public/index.html"));
        });

   };

       