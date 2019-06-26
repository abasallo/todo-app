import Action from '../../src/actions/Action'
import InitialDataFetchAction from '../../src/actions/InitialDataFetchAction'

jest.mock('../../src/services/TodoService')

it('Dispatches new InitialDataFetchAction with fetched data', () => {

    let dispatch = jest.fn()

    InitialDataFetchAction.dispatch(dispatch, 'todos')

    expect(dispatch).toBeCalledWith(new InitialDataFetchAction('todos').toObjectLiteral())
})

it('Relays on API getAll for data fetching and on static dispatch', () => {

    InitialDataFetchAction.dispatch = jest.fn()

    InitialDataFetchAction.getAll('dispatch').then(() => {
        expect(InitialDataFetchAction.dispatch).toBeCalledWith('dispatch', 'todos')
    })
})

it('thunk returns appropriate structure, relaying in static getAll for data fetching and dispatch', () => {

    InitialDataFetchAction.getAll = jest.fn()

    InitialDataFetchAction.thunk()('dispatch')

    expect(InitialDataFetchAction.getAll).toBeCalledWith('dispatch')
})

it('Constructor creates object with appropriate type', () => {

    let initialDataFetchAction = new InitialDataFetchAction()

    expect(initialDataFetchAction.type).toBe(Action.actionTypes.initialDataFetch)
    expect(initialDataFetchAction instanceof Action)
})
