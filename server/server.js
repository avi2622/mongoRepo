var express = require('express');
var bodyParser = require('body-parser');

var {mongoose}= require('./db/mongoose');
var {todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
   var newTodo = new todo({
       text: req.body.text
   });

   newTodo.save().then((doc)=> {
    res.send(doc);
    console.log('saved Todo :  ', doc);
   },(err)=>{
    res.status(400).send(e);
   });
});

app.get('/todos',(req,res)=>{
    todo.find().then((todos)=>{
        res.send({todos});
    },(err)=>{
        res.status(400).send(err);
    });
});

app.listen('3000',()=>{
    console.log('server is running at port 3000 ....')
})

module.exports = {app};