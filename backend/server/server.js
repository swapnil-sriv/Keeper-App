const express = require("express");
const cors = require('cors');
const app = express();
const pg = require("pg");

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "Notedown",
    password: "swaps",
    port: 5432,
});

db.connect();



app.use(cors());

app.get("/", function(req, res){
    // console.log(request);
    res.send("<h1>Notedown<h1>");
})

app.get("/Notedown/notes", async (req, res)=>{
    // console.log(request);
    try{
        const result = await db.query("SELECT * FROM note"); 
        res.json(result.rows);

    }
    catch(err){
        return console.error(err);
    }
});

app.delete('/Notedown/:id',(req,res)=>{
    const id= req.params.id;
    db.query('DELETE FROM note WHERE id=$1',[id],(err,result)=>{
        if(err) console.log(err);
        res.status(200).send('Note deleted');
    });
});

app.listen(3000,()=>{
    console.log("server started at port: 3000");
});