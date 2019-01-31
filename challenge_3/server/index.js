const port = 3000;
const path = require('path'); 
const express = require('express');
const parser = require('body-parser');
const dbHelper = require('../db/dbHelper.js');//used in app.get and app.post

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended:true}));
// app.use('/shopping', routes);//different endpoints ? 
app.use(express.static(path.join(__dirname, '../public')));//location of stactic files
// base route
app.get("/shopping", function (req, res) {
    getUser() // show all info, and render on the last page 
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(404).send(err))
})

app.post("/shopping", function (req, res) {
    //req.body is the object that is sent into the server 
    dbHelper.createUser(req.body.name, req.body.email)
    .then((data) => res.status(201).send('Yeah added'))
    .catch((err) => res.status(404).send(err));
})

app.listen(port, () => console.log('hey from server: ', port));
