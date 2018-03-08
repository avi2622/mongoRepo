const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        console.log('not able to connect with the db');
    }

    console.log('Connected to the database ..... ');
    // db.collection('users').deleteMany({completed: true}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('users').deleteOne({name:'Harvey'}).then((result)=>{
    //     console.log(result);
    // });

    db.collection('users').findOneAndDelete({text:'eat lunch'}).then((result)=>{
        console.log(result);
    });
});