import Action from './Action'

export default class SetVisibilityFilterAction extends Action {

    constructor(filter) {
        super(Action.actionTypes.setVisibilityFilter)
        this.filter = filter
    }
}