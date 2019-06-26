import Action from './Action'
import todoAPI from '../services/TodoService'

export default class ToggleTodoAction extends Action {

    static dispatch = (dispatch, id) => dispatch(new ToggleTodoAction(id).toObjectLiteral())

    static toggle = (dispatch, id) => todoAPI.toggle(id)
        .then(todo => ToggleTodoAction.dispatch(dispatch, todo.id))
        .catch(error => { throw error })

    static thunk = id => dispatch => ToggleTodoAction.toggle(dispatch, id)

    constructor(id) {
        super(Action.actionTypes.toggleTodo)
        this.id = id
    }
}