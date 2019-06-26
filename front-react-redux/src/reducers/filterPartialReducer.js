import State from '../State'
import Action from '../actions/Action'

export default (state = new State(), action = new Action()) => (action.type === Action.actionTypes.setVisibilityFilter) ? action.filter : state.filter
