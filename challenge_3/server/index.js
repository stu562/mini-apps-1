const port = 3000;
const path = require('path'); //why?
const express = require('express');
const parser = require('body-parser');
const app = express();

app.use(paser.json());
app.use(parser.urlencoded({extended:true}));
app.use('/shopping', routes);//different endpoints ? 

// base route
app.get("/shopping", function (req, res) {
    response.send("Get Stuff") 
});
app.post("/shopping", function (req, res) {
    response.send("Post Stuff") 
});

app.listen(port, Console.log('hey from server: ', port));
