import Action from './Action'
import todoAPI from '../services/TodoService'

export default class AddTodoAction extends Action {

    static dispatch = (dispatch, todo) => dispatch(new AddTodoAction(todo).toObjectLiteral())

    static add = (dispatch, text) => todoAPI.add(text)
        .then(todo => AddTodoAction.dispatch(dispatch, todo))
        .catch(error => { throw error })

    static thunk = text => dispatch => AddTodoAction.add(dispatch, text)

    constructor(todo) {
        super(Action.actionTypes.addTodo)
        this.todo = todo
    }
}
