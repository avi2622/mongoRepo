const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if(err){
        console.log('Unable to connect to mongodb server...');
    }
    console.log('connected to mongodb server.....');

    db.collection('users').insertOne({
        name: 'Harvey',
        age : 25,
        location : 'New York'
    }, (err,result)=>{
        if(err){
            console.log('not able to create collection');
        }
        
        console.log(JSON.stringify(result.ops,undefined,2));
        console.log(result.ops[0]._id);
        console.log(result.ops[0]._id.getTimestamp());
    });
    db.close();
} );