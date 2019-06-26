import FilterTypes from './model/FilterTypes'

export default class State {

    constructor(todos = [], filter = FilterTypes.showAll, authenticated = false) {
        this.todos = todos
        this.filter = filter
        this.authenticated = authenticated
    }
}
