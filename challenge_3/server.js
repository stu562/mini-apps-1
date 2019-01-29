const port = 3000;
const path = require('path'); //why?
const express = require('express');
const parser = require('body-parser');

//build a server on a page
    // require and module.exports are for server set up 
//controller
    //get , post, delete
//routes
    //tell what 
//index 
    //houses middleware,  port

//middleware
const app = express();
app.use(paser.json());
app.use(parser.urlencoded({extended:true}));
app.use('/api', routes);
app.listen(port, Console.log('hey from server: ', port));

//controller reieves,
const db = require('put path of database here'); // add in location of database 

module.exports = { //promise format 
    get: (req,res) => { 
        const { itemName } = req.query;
        db.shopping.findall({
            where: {
                item_name = itemname
            }
        })
        .then((data) => {
            if(data){
                res.status(200).send(data);
            } else {
                res.status(404).send('Server Error, ')
            }
        })   
        .catch((err)=>{
            res.status(404).send(err);
        })
    },
    post: (req, res) => {
        const {itemName, price} = req.body;
        db.shopping.create({
            itemName = itemName,
            price = price
        })
        .then((data) => {
            res.send(200).send(data);
        })
        .catch((err) => {
            res.status(404).send(err);
        })
    }
}