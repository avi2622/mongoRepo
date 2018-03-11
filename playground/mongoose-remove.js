var {ObjectId} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {todo} = require('./../server/models/todo');
var {user} = require('./../server/models/user');

var id = '5aa3a38bf09cec9814cf87c9';

todo.findByIdAndRemove(id).then((todo)=>{
    console.log(todo);
});