import Action from './Action'
import todoAPI from '../services/TodoService'

export default class DeleteTodoAction extends Action {

    static dispatch = (dispatch, id) => dispatch(new DeleteTodoAction(id).toObjectLiteral())

    static remove = (dispatch, id) => todoAPI.remove(id)
        .then(() => DeleteTodoAction.dispatch(dispatch, id))
        .catch(error => { throw error })

    static thunk = (id) => dispatch => DeleteTodoAction.remove(dispatch, id)

    constructor(id) {
        super(Action.actionTypes.deleteTodo)
        this.id = id
    }
}