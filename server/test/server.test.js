const expect = require('expect');
const request = require('supertest');

var {app} = require('./../server');

var {todo} = require('./../models/todo');

beforeEach((done)=>{
    todo.remove({}).then(()=> done());
});

describe('POST /todo',()=>{
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

            todo.find().then((todos)=>{
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
                expect(todos.length).toBe(0);
                done();
            }).catch((e)=>done(e))
        });
    });
});