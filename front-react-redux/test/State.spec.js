import FilterTypes from '../src/model/FilterTypes'
import State from '../src/State'

it('Constructor creates object with provided params', () => {

    const state = new State(['Todo List'], 'FILTER')
    expect(state.todos).toMatchObject(['Todo List'])
    expect(state.filter).toBe('FILTER')
})

it('Constructor creates object with defaults on params absence', () => {

    const state = new State()
    expect(state.todos).toMatchObject([])
    expect(state.filter).toBe(FilterTypes.showAll)
})
