import Action from './Action'
import todoAPI from '../services/TodoService'

export default class InitialDataFetchAction extends Action {

    static dispatch = (dispatch, todos) => dispatch(new InitialDataFetchAction(todos).toObjectLiteral())

    static getAll = (dispatch) => todoAPI.getAll()
        .then(todos => InitialDataFetchAction.dispatch(dispatch, todos))
        .catch(error => { throw error })

    static thunk = () => dispatch => InitialDataFetchAction.getAll(dispatch)

    constructor(todos) {
        super(Action.actionTypes.initialDataFetch)
        this.todos = todos
    }
}
