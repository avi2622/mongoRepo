var express = require('express');
var bodyParser = require('body-parser');

var {mongoose}= require('./db/mongoose');
var {todo} = require('./models/todo');
var {User} = require('./models/user');
// console.log('todo',todo);
var app = express();

app.use(bodyParser.json());

app.post('/todo',(req,res)=>{
   var newTodo = new todo({
       text: req.body.text
   });

   newTodo.save().then((doc)=> {
       console.log('saved Todo :  ', doc);
   },(err)=>{
    console.log('unable to save todo ... ', err);
   });
});

app.listen('3000',()=>{
    console.log('server is running at port 3000 ....')
})