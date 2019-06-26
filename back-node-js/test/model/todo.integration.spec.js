import mongoose from 'mongoose'

import Todo from '../../src/model/todo'

const noEmailTodo = new Todo({})
const validTodo = new Todo({ completed: true, text: 'text', email: 'alvaro@basallo.es' })
const minValidTodo = new Todo({ email: 'alvaro@basallo.es' })

beforeAll(() => {
    mongoose.Promise = global.Promise
    mongoose.connect(process.env.MONGODB_TEST_URI || 'mongodb://localhost:27017/to-do-back-test')
})

it('If email is absent, validation fails', done => {

    noEmailTodo.save((err) => {

        expect(err.name).toContain('ValidationError')
        done()
    })
})

it('Valid object saves and can be retrieved', done => {

    validTodo.save((err) => {

        expect(err).toBe(null)

        Todo.findById(validTodo._id, (err, todo) => {

            expect(err).toBe(null)
            expect(todo.completed).toBe(true)
            expect(todo.text).toBe('text')
            expect(todo.email).toBe('alvaro@basallo.es')
            done()
        })
    })
})

it('Defaults are populated properly', done => {

    minValidTodo.save((err) => {

        expect(err).toBe(null)

        Todo.findById(minValidTodo._id, (err, todo) => {

            expect(err).toBe(null)
            expect(todo.completed).toBe(false)
            expect(todo.text).toBe('New Task')
            done()
        })
    })
})

afterAll(done => {

    minValidTodo.remove(err => {

        expect(err).toBe(null)

        validTodo.remove(err => {

            expect(err).toBe(null)
            done()
        })
    })
})
