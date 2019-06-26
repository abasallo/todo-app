import fetchMock from 'fetch-mock'

import TodoService from '../../src/services/TodoService'
import config from '../../src/config'

jest.mock('../../src/services/Auth0Service')

const url = `${ config.back.url.protocol }://${ config.back.url.host }:${ config.back.url.port }/${ config.back.url.tail }`

it('url is properly built from its parts', () => expect(TodoService.url).toBe(url))

it('fetches the full list of Todos', () => {

    fetchMock.get(`${ url }?query={ "email": "email" }`, [{ text: 'text', completed: true, _id: -1 }],
        { headers: { 'Content-Type': 'application/json', authorization: 'Bearer token' }})

    TodoService.getAll().then(todos => {

        expect(todos[0].completed).toBe(true)
        expect(todos[0].id).toBe(-1)
        expect(todos[0].text).toBe('text')
    })
})

it('fetches Todo by Id', () => {

    fetchMock.get(`${ url }/-1`, { text: 'text', completed: true, _id: -1 },
        { headers: { 'Content-Type': 'application/json', authorization: 'Bearer token' }})

    TodoService.getById(-1).then(todo => {

        expect(todo.completed).toBe(true)
        expect(todo.id).toBe(-1)
        expect(todo.text).toBe('text')
    })
})

it('inserts a new Todo', () => {

    fetchMock.post(`${ url }`, { text: 'text', completed: false, _id: -1 },
        { method: 'POST', body: { completed: false, text: 'text', email: 'email' },
        headers: { 'Content-Type': 'application/json', authorization: 'Bearer token' }})

    TodoService.add('text').then(todo => {
        expect(todo.completed).toBe(false)
        expect(todo.id).toBe(-1)
        expect(todo.text).toBe('text')
    })
})

it('deletes Todo', () => {

    fetchMock.delete(`${ url }/-1`, 'ok', { method: 'DELETE',
        headers: { 'Content-Type': 'application/json', authorization: 'Bearer token' }})

    TodoService.remove(-1).then(response => expect(response.status).toBe(200))
})

it("toggles Todo's completion state", () => {

    fetchMock.get(`${ url }/-1`, { text: 'text', completed: true, _id: -1 },
        { headers: { 'Content-Type': 'application/json', authorization: 'Bearer token' }})

    console.log(`${ url }/-1`)

    fetchMock.patch(`${ url }/-1`, { text: 'text', completed: false, _id: -1 },
        { method: 'PATCH', body: { completed: false },
        headers: { 'Content-Type': 'application/json', authorization: 'Bearer token' }})

    TodoService.toggle(-1).then(todo => {

        expect(todo.completed).toBe(false)
        expect(todo.id).toBe(-1)
        expect(todo.text).toBe('text')
    })
})

afterAll(() => fetchMock.restore())
