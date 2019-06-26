import Action from '../../src/actions/Action'

it('Contains static types', () => {

    expect(Action.actionTypes.initialDataFetch).toBe('INITIAL_DATA_FETCH')
    expect(Action.actionTypes.addTodo).toBe('ADD_TODO')
    expect(Action.actionTypes.deleteTodo).toBe('DELETE_TODO')
    expect(Action.actionTypes.toggleTodo).toBe('TOGGLE_TODO')
    expect(Action.actionTypes.setVisibilityFilter).toBe('SET_VISIBILITY_FILTER')
})

it('Constructor assigns provided type, or default, if parameter is absent', () => {

    expect(new Action('TYPE').type).toBe('TYPE')
    expect(new Action().type).toBe('UNKNOWN')
})

it('Convenience method returning object literal equivalence', () => {

    let action = new Action()
    action.property = 'property'
    let objectLiteral = action.toObjectLiteral()

    expect(objectLiteral).toMatchObject({property: 'property', type: 'UNKNOWN'})
})
