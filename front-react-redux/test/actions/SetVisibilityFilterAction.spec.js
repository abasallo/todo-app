import Action from '../../src/actions/Action'
import SetVisibilityFilterAction from '../../src/actions/SetVisibilityFilterAction'

it('Constructor creates object with appropriate type', () => {

    let setVisibilityFilterAction = new SetVisibilityFilterAction()

    expect(setVisibilityFilterAction.type).toBe(Action.actionTypes.setVisibilityFilter)
    expect(setVisibilityFilterAction instanceof Action)
})
