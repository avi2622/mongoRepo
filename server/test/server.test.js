const expect = require('expect');
const request = require('supertest');

var {ObjectID} = require('mongodb');

var {app} = require('./../server');

var {todo} = require('./../models/todo');

var todos = [{
    _id: new ObjectID(),
    text:'First Test Todo'
},
{
    _id: new ObjectID(),
    text:'Second Test Todo'
}];

beforeEach((done)=>{
    todo.remove({}).then(()=>{
        todo.insertMany(todos);
    }).then(()=> done());
});

describe('POST /todos',()=>{
    it('should create a new todo',(done)=>{
        var text = 'check the text';

        request(app)
        .post('/todo')
        .send({text})
        .expect(200)
        .expect((res)=> {
            // expect(res.body.text.toBe(text));
        })
        .end((err,res)=>{
            if(err){
                return done(err);
            }

            todo.find({text}).then((todos)=>{
                // expect(todos.length).toBe(1);
                // expect(todos[0].text).toBe(text);
                done();
            }).catch((e)=> {
                done(e);
            })
        })
    });

    it('it should not create todo with invalid body data',(done)=>{
        request(app)
        .post('/todo')
        .send({})
        .expect(400)
        .end((err, res)=>{
            if(err){
                done(err);
            }

            todo.find.then((todos)=>{
                expect(todos.length).toBe(2);
                done();
            }).catch((e)=>done(e))
        });
    });
});

describe('GET /todos',()=>{
    it('should get all todos', (done)=>{
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res)=>{
            expect(res.body.todos.length.toBe(2))
        })
        .end(done);
    });
});

describe('GET /todos/:id',()=>{
    it('should return todo doc',(done)=>{
        request(app)
        .get(`/todos/${todos[0]._id.HexString()}`)
        .expect(200)
        .expect((res)=>{
            expect(res.body.todo.text).toBe(todos[0].text)
        })
        .end(done);
    });

    it('should return 404 if todo not found', (done)=>{
        var hexID = new ObjectID().toHexString();
        
        request(app)
        .get(`/todos/${hexId}`)
        .expect(404)
        .end(done)
    });

    it('should return 404 for non-object Ids',()=>{
        request(app)
        .get('/todos/123abc')
        .expect(404)
        .end(done);
    });
});