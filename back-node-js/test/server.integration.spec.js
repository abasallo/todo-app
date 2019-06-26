import 'isomorphic-fetch'
import mongoose from 'mongoose'

import app from '../src/server-helper'
import Todo from '../src/model/todo'

import config from '../src/config'

mongoose.Promise = global.Promise
mongoose.connect(config.mongoDB.testUrl)

const getAccessToken = () => {

    const authenticationOptions = { method: 'POST', headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ client_id: config.auth0.clientId,
            client_secret: config.auth0.clientSecret,
            audience: config.auth0.audience,
            grant_type: config.auth0.grantType
        })
    }

    return new Promise(resolve => {

    fetch(config.auth0.url, authenticationOptions)
        .then(response => response.json())
        .then(json => resolve(json.access_token))
    })
}

it('POST - Create a new TODO', async done => {

    const options = { method: 'POST',
        body: JSON.stringify({completed: true, text: 'text', email: 'alvaro@basallo.es'}),
        headers: {'Content-Type': 'application/json', Authorization: `Bearer ${await getAccessToken()}`}}

    const server = app.listen(3002, () => {

    fetch('http://localhost:3002/api/v1/todo/', options)
        .then(response => response.json())
        .then(json => {

            expect(json.completed).toBe(true)
            expect(json.text).toBe('text')
            expect(json.email).toBe('alvaro@basallo.es')

            Todo.remove({_id: json._id}, () => {
                server.close()
                done()
            })
        })
    })
})

it('PATCH - TODO Update', async done => {

    const options = { method: 'PATCH',
        body: JSON.stringify({completed: false, text: 'otherText', email: 'other@basallo.es'}),
        headers: {'Content-Type': 'application/json', Authorization: `Bearer ${await getAccessToken()}`}}

    const todo = new Todo({completed: true, text: 'text', email: 'alvaro@basallo.es'})

    const server = app.listen(3003, () => {
        todo.save(() =>

        fetch('http://localhost:3003/api/v1/todo/' + todo.id, options)
            .then(response => response.json())
            .then(json => {

                expect(json.completed).toBe(false)
                expect(json.text).toBe('otherText')
                expect(json.email).toBe('other@basallo.es')

                todo.remove()
                server.close()
                done()
            })
        )
    })
})

it('GET - TODO list by email', async done => {

    const options = { method: 'GET',
        headers: {'Content-Type': 'application/json', Authorization: `Bearer ${await getAccessToken()}`}}

    const todo = new Todo({email: 'yetanother@basallo.es'})

    const server = app.listen(3004, () => {
        todo.save(() => {

        fetch('http://localhost:3004/api/v1/todo/?query={"email": "yetanother@basallo.es"}', options)
            .then(response => response.json())
            .then(json => {

                expect(json.length).toBe(1)
                expect(json[0].email).toBe('yetanother@basallo.es')

                todo.remove()
                server.close()
                done()
            })
        })
    })
})

it('GET - TODO by id', async done => {

    const options = { method: 'GET',
        headers: {'Content-Type': 'application/json', Authorization: `Bearer ${await getAccessToken()}`}}

    const todo = new Todo({email: 'alvaro@basallo.es'})

    const server = app.listen(3005, () => {
        todo.save(() => {

        fetch(`http://localhost:3005/api/v1/todo/${todo.id}`, options)
            .then(response => response.json())
            .then(json => {

                expect(json._id).toBe(todo.id)

                todo.remove()
                server.close()
                done()
            })
        })
    })
})

it('DELETE - TODO by ID', async done => {

    const options = { method: 'DELETE',
        headers: {'Content-Type': 'application/json', Authorization: `Bearer ${await getAccessToken()}`}}

    const todo = new Todo({email: 'alvaro@basallo.es'})

    const server = app.listen(3006, () => {
        todo.save(() => {

            fetch('http://localhost:3006/api/v1/todo/' + todo.id, options)
                .then(response => {

                expect(response.status).toBe(204)

                server.close()
                done()
            })
        })
    })
})

beforeAll(() => Todo.remove({}, () => {}))
