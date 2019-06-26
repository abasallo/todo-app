import State from '../State'
import Action from '../actions/Action'

import Todo from '../model/Todo'
import TodoList from '../model/TodoList'

export default (state = new State(), action = new Action()) => {

    let todosResult = TodoList.clone(state.todos)
    switch (action.type) {
        case Action.actionTypes.initialDataFetch:
            action.todos.forEach && action.todos.forEach(todo => { todosResult.push(new Todo(todo.text, todo.completed, todo.id)) })
            break
        case Action.actionTypes.addTodo:
            todosResult.push(new Todo(action.todo.text, action.todo.completed, action.todo.id))
            break
        case Action.actionTypes.deleteTodo:
            todosResult = todosResult.filter(todo => todo.id !== action.id)
            break
        case Action.actionTypes.toggleTodo:
            todosResult.map(todo => (todo.id === action.id) ? todo.toggle() : todo )
            break
        default:
            break
    }
    return todosResult
}
