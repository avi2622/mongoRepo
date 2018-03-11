var {ObjectId} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {todo} = require('./../server/models/todo');
var {user} = require('./../server/models/user');

var id = '5aa3a38bf09cec9814cf87c9';

// if(!ObjectId.isValid(id)){
//     console.log('Id not valid');
// }

// todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Find todos : ', todos);
// });

// todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Find todo : ', todo);
// });

// todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('id not found');
//     }
//     console.log('Find by Id : ', todo);
// }).catch((e)=>{
//     console.log(e);
// });

user.findById('5aa3a38bf09cec9814cf87c9').then((user)=>{
    if(!user){
        return console.log('id not found');
    }
    console.log(JSON.stringify(user,undefined,2));
},(e)=>{
    console.log(e);
});
