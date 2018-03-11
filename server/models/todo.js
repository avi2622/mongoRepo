var mongoose = require('mongoose');

var todo = mongoose.model('todo',{
    text:{
        type: 'string'
    },
    completed: {
        type: Boolean,
        default: false
      },
      completedAt: {
        type: Number,
        default: null
      }
}); 

module.exports = {todo};