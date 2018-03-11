var express = require('express');
var bodyParser = require('body-parser');

var {mongoose}= require('./db/mongoose');
var {todo} = require('./models/todo');
var {User} = require('./models/user');
var {ObjectID} = require('mongodb');

var app = express();

var port = process.env.PORT || 3000;

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

// GET TODO BY ID
app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        res.status(404).send();
    }

    todo.findById(id).then((todo)=>{
        if(!todo){
            res.status(404).send();
        }
        res.send({todo});
    }).catch((e)=>{
        res.status(404).send(e);
    });

});

// DELETE ROUTE
app.delete('/todos/:id',(req,res)=>{
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        res.status(404).send();
    }

    todo.findByIdAndRemove(id).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e)=>{
        res.status(400).send();
    })
});

app.listen(port,()=>{
    console.log(`server is running at port ${port} ....`)
})

module.exports = {app};