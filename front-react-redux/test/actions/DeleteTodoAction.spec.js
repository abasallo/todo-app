import Action from '../../src/actions/Action'
import DeleteTodoAction from '../../src/actions/DeleteTodoAction'

jest.mock('../../src/services/TodoService')

it('Dispaches new DeleteTodoAction with fetched data', () => {

    let dispatch = jest.fn()

    DeleteTodoAction.dispatch(dispatch, 1)

    expect(dispatch).toBeCalledWith(new DeleteTodoAction(1).toObjectLiteral())
})

it('Relays on API remove for data fetching and on static dispatch', () => {

    DeleteTodoAction.dispatch = jest.fn()

    DeleteTodoAction.remove('dispatch', 1).then(() => {
        expect(DeleteTodoAction.dispatch).toBeCalledWith('dispatch', 1)
    })
})

it('thunk returns appropriate structure, relaying in static remove for data fetching and dispatch', () => {

    DeleteTodoAction.remove = jest.fn()

    DeleteTodoAction.thunk(1)('dispatch')

    expect(DeleteTodoAction.remove).toBeCalledWith('dispatch', 1)
})

it('Constructor creates object with appropriate type', () => {

    let deleteTodoAction = new DeleteTodoAction()

    expect(deleteTodoAction.type).toBe(Action.actionTypes.deleteTodo)
    expect(deleteTodoAction instanceof Action)
})
