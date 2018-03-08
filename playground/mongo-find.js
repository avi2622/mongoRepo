const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        console.log('Unable to connect to mongodb sever......');
    }

    // db.collection('users').find({
    //     _id: new ObjectID('5aa14211e5aed8af00d92c34')
    // }).toArray().then((docs)=>{
    //     console.log('users');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch data .... ' , err);
    // });

    // db.collection('users').find().count().then((count)=>{
    //     console.log('users');
    //     console.log(`Total # of counts ... ${count}`);
    // },(err)=>{
    //     console.log('Unable to fetch data .... ' , err);
    // });

    db.collection('users').find({
        name: 'Harvey'
    }).toArray().then((docs)=> {
        console.log('all the user with name harvey... : ');
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('Unable to fetch the data...... ', err);
    });
});