import State from '../../src/State'
import Action from '../../src/actions/Action'
import SetVisibilityFilterAction from '../../src/actions/SetVisibilityFilterAction'

import filterPartialReducer from '../../src/reducers/filterPartialReducer'

it('From provided state and action, calculates new state for filtering', () => {

    expect(filterPartialReducer(new State(), new SetVisibilityFilterAction(Action.actionTypes.setVisibilityFilter)))
        .toEqual(Action.actionTypes.setVisibilityFilter)
    expect(filterPartialReducer(new State([], Action.actionTypes.deleteTodo), new Action()))
        .toBe(Action.actionTypes.deleteTodo)
})
