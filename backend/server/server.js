const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());

app.get("/", function(req, res){
    // console.log(request);
    res.send("<h1>Header<h1>");
})
app.get("/api", function(req, res){
    // console.log(request);
    const notes = [
        { key:1, title: 'Note 1', content: 'This is note 1' },
        { key:2, title: 'Note 2', content: 'This is note 2' },
        { key:3, title: 'Note 3', content: 'This is note 3' }
      ];
      res.json(notes);
})

app.listen(3000,()=>{
    console.log("server started at port: 3000");
});