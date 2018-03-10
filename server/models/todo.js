var mongoose = require('mongoose');

var todo = mongoose.model('Todo',{
    text:{
        type: 'string'
    },
    completed:{
        type:'boolean'
    },
    completedAt:{
        type:'number'
    }
}); 

module.exports = {todo};