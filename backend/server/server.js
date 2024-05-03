const express = require("express");
const app = express();
app.get("/", function(req, res){
    // console.log(request);
    res.send("<h1>Header<h1>");
})
app.get("/api", function(req, res){
    // console.log(request);
    res.json([{key:1,title:"Title from server",content:"Content from server"},{key:2,title:"2Title from server",content:"2Content from server"}]);
})

app.listen(3000,()=>{
    console.log("server started at port: 3000");
});