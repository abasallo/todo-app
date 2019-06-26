import Action from '../../src/actions/Action'
import ToggleTodoAction from '../../src/actions/ToggleTodoAction'

jest.mock('../../src/services/TodoService')

it('Dispaches new ToggleTodoAction with fetched data', () => {

    let dispatch = jest.fn()

    ToggleTodoAction.dispatch(dispatch, 1)

    expect(dispatch).toBeCalledWith(new ToggleTodoAction(1).toObjectLiteral())
})

it('Relays on API toggle for data fetching and on static dispatch', () => {

    ToggleTodoAction.dispatch = jest.fn()

    ToggleTodoAction.toggle('dispatch', 1).then(() =>
        expect(ToggleTodoAction.dispatch).toBeCalledWith('dispatch', 1))
})

it('thunk returns appropriate structure, relaying in static toggle for data fetching and dispatch', () => {

    ToggleTodoAction.toggle = jest.fn()

    ToggleTodoAction.thunk(1)('dispatch')

    expect(ToggleTodoAction.toggle).toBeCalledWith('dispatch', 1)
})

it('Constructor creates object with appropriate type', () => {

    let toggleTodoAction = new ToggleTodoAction()

    expect(toggleTodoAction.type).toBe(Action.actionTypes.toggleTodo)
    expect(toggleTodoAction instanceof Action)
})