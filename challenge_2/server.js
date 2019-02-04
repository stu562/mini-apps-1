const port = 3000;
const path = require('path');
const express = require('express');
const parser = require('body-parser');
//middleware
const app = express();
app.use(parser.json());
app.use(urlencoded({extended:true}));
app.use('./api', routes);
app.listen(port, console.log('listening on port ', port) )
//controller
const db = require('put path of database here'); // add in location of database 
module.exports = { 
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
            res.send(201).send(data);
        })
        .catch((err) => {
            res.status(404).send(err);
        })
    },
    delete: (req, res) => {
        const { index } = req.query;
        db.shopping.destory({where: { id: index}})
            .then((data)=>{
                res.status(202).send(data);
            })
            .catch((err)=> {
                res.status(404).send(err);
            })
    
    }
}