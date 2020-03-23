const express = require("express");
const app = express();

app.get("/",function(req,res)
{
    return res.send("Alo");
});

app.listen(3333);