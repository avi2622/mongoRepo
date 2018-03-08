const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        console.log('not able to connect with the db');
    }

    console.log('Connected to the database ..... ');

    db.collection('users').findOneAndUpdate({_id: new ObjectID('5aa14211e5aed8af00d92c34')},{
    $set:{completed:'true'}
    },
    {returnOriginal: false}
).then((result)=>{
    console.log(result);
});

});