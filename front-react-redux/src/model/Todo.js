import FilterTypes from '../../src/model/FilterTypes'

import config from '../config'

export default class Todo {

    static filterTodoArrayBy = (todos, filter) => {

        let todosCopy = todos.slice()
        switch (filter) {
            case FilterTypes.showAll:
                return todosCopy
            case FilterTypes.showCompleted:
                return todosCopy.filter(todo => todo.completed)
            case FilterTypes.showActive:
                return todosCopy.filter(todo => !todo.completed)
            default:
                throw new Error('Unknown filter: ' + filter)
        }
    }

    constructor(text = config.todo.defaults.text, completed = false, id = -1) {
        this.id = id
        this.text = text
        this.completed = completed
    }

    toggle() {
        this.completed = !this.completed
        return this
    }
}
