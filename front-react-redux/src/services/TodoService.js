import Auth0Service from './Auth0Service'

import Todo from '../model/Todo'

import config from '../config'

export default class TodoService {

    static url = `${ config.back.url.protocol }://${ config.back.url.host }:${ config.back.url.port }/${ config.back.url.tail }`
    static common_headers = { 'Content-Type': 'application/json', authorization: `Bearer ${ Auth0Service.getAccessToken() }` }

    static getAll = () => {

        const url = `${ TodoService.url }?query={ "email": "${ Auth0Service.getEmail() }" }`
        const options = { method: 'GET', headers: TodoService.common_headers }
        return fetch(url, options)
            .then(response => response.json())
            .then(json => {
                let todos = []
                json.forEach(todo => todos.push(new Todo(todo.text, todo.completed, todo._id )))
                return todos
            }).catch(error => TodoService.manageErrors(error))
    }

    static getById = id => {

        const options = { method: 'GET', headers: TodoService.common_headers }
        return fetch(`${ TodoService.url }/${ id }`, options)
            .then(response => response.json())
            .then(json => new Todo(json.text, json.completed, json._id))
            .catch(error => TodoService.manageErrors(error))
    }

    static add = text => {

        const options = { method: 'POST', headers: TodoService.common_headers,
            body: JSON.stringify({ completed: false, text: text, email: Auth0Service.getEmail() }) }
        return fetch(TodoService.url, options)
            .then(response => response.json())
            .then(json => new Todo(json.text, json.completed, json._id))
            .catch(error => TodoService.manageErrors(error))
    }

    static remove = id => {

        const options = {method: 'DELETE', headers: TodoService.common_headers}
        return fetch(`${ TodoService.url }/${ id }`, options)
            .then(response => response)
            .catch(error => TodoService.manageErrors(error))
    }

    static toggle = id => {

        const options = {method: 'PATCH', headers: TodoService.common_headers }
        return TodoService.getById(id)
            .then(todo => {
                options.body = JSON.stringify({completed: !todo.completed})
                return fetch(`${ TodoService.url }/${ id }`, options)})
            .then(response => response.json())
            .then(json => new Todo(json.text, json.completed, json._id))
            .catch(error => TodoService.manageErrors(error))
    }

    static manageErrors(error) {
        throw error
    }
}
