import Todo from '../../src/model/Todo'

import State from '../../src/State'

import InitialDataFetchAction from '../../src/actions/InitialDataFetchAction'
import AddTodoAction from '../../src/actions/AddTodoAction'
import DeleteTodoAction from '../../src/actions/DeleteTodoAction'
import ToggleTodoAction from '../../src/actions/ToggleTodoAction'

import todosPartialReducer from '../../src/reducers/todosPartialReducer'

jest.mock('../../src/services/Auth0Service')

const todo = new Todo('todo', false, 1)
const anotherTodo = new Todo('anotherTodo', false, 2)
const initialState = new State([todo])

it('From provided state and action, calculates new state for initial todo loading', () =>
    expect(todosPartialReducer(initialState, new InitialDataFetchAction([todo, anotherTodo]))).toEqual([todo, todo, anotherTodo]))

it('From provided state and action, calculates new state for todo addition', () =>
    expect(todosPartialReducer(initialState, new AddTodoAction(anotherTodo))).toEqual([todo, anotherTodo]))

it('From provided state and action, calculates new state for todo deletion', () =>
    expect(todosPartialReducer(initialState, new DeleteTodoAction(1))).toEqual([]))

it('From provided state and action, calculates new state for todo toggling', () =>
    expect(todosPartialReducer(initialState, new ToggleTodoAction(1))[0].completed).toEqual(true))
