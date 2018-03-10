var mongoose = require('mongoose');

var user = mongoose.model('Users',{
    email:{
        type: 'string',
        required: true,
        trim: true
    }
});

module.exports= {user};