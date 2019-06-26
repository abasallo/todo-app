import Action from '../../src/actions/Action'
import AddTodoAction from '../../src/actions/AddTodoAction'

jest.mock('../../src/services/TodoService')

it('Dispaches new AddTodoAction with fetched data', () => {

    let dispatch = jest.fn()

    AddTodoAction.dispatch(dispatch, 'text')

    expect(dispatch).toBeCalledWith(new AddTodoAction('text').toObjectLiteral())
})

it('Relays on API add for data fetching and on static dispatch', () => {

    AddTodoAction.dispatch = jest.fn()

    AddTodoAction.add('dispatch', 'text').then(() => {
        expect(AddTodoAction.dispatch).toBeCalledWith('dispatch', { text: 'text' })
    })
})

it('thunk returns appropriate structure, relaying in static add for data fetching and dispatch', () => {

    AddTodoAction.add = jest.fn()

    AddTodoAction.thunk('text')('dispatch')

    expect(AddTodoAction.add).toBeCalledWith('dispatch', 'text')
})

it('Constructor creates object with appropriate type', () => {

    let addTodoAction = new AddTodoAction()

    expect(addTodoAction.type).toBe(Action.actionTypes.addTodo)
    expect(addTodoAction instanceof Action)
})
