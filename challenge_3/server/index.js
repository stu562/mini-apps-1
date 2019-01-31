const port = 3000;
const path = require('path'); //why?
const express = require('express');
const parser = require('body-parser');
const app = express();

app.use(paser.json());
app.use(parser.urlencoded({extended:true}));
app.use('/shopping', routes);//different endpoints ? 
app.use(express.static(path.join(__dirname, '../public')));//location of stactic files
// base route
app.get("/shopping", function (req, res) {
    getUser() // show all info, and render on the last page 
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(404).send(err))
})

app.post("/shopping", function (req, res) {
    //this needs to update the database info
    createUser()
    //need to add something here 
    .then((data) => res.status(201).send(data))
    .catch((err) => res.status(404).send(err));
})

app.listen(port, Console.log('hey from server: ', port));
