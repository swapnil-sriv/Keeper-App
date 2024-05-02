const express = require("express");
const app = express();
app.get("/", function(req, res){
    // console.log(request);
    res.send("<h1>Hello<h1>");
})
app.get("/api", function(req, res){
    // console.log(request);
    res.json({message:"Hello from Swaps"});
})
app.listen(3000,()=>{
    console.log("server started at port: 3000");
});