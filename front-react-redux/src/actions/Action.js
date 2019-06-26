export default class Action {

    static actionTypes = {
        initialDataFetch: 'INITIAL_DATA_FETCH',
        addTodo: 'ADD_TODO',
        toggleTodo: 'TOGGLE_TODO',
        deleteTodo: 'DELETE_TODO',
        setVisibilityFilter: 'SET_VISIBILITY_FILTER'
    }

    constructor(type = 'UNKNOWN') {
        this.type = type
    }

    toObjectLiteral() {

        let objectLiteral = {}
        for(let property in this) {
            if (this.hasOwnProperty(property))
                objectLiteral[property] = this[property]
        }
        return objectLiteral
    }
}
