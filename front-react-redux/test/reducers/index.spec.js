import rootReducer from '../../src/reducers/index'

jest.mock('../../src/reducers/todosPartialReducer')
jest.mock('../../src/reducers/filterPartialReducer')
jest.mock('../../src/reducers/authenticationPartialReducer')

it('Joins together reduction coming from partials', () => {

    let finalState = rootReducer()

    expect(finalState.todos).toEqual([])
    expect(finalState.filter).toEqual('state.filter')
    expect(finalState.authenticated).toEqual(false)
})
