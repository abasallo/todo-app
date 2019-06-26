import State from '../State'
import Action from '../actions/Action'

import todosPartialReducer from './todosPartialReducer'
import filterPartialReducer from './filterPartialReducer'
import authenticationPartialReducer from './authenticationPartialReducer'

export default (state = new State(), action = new Action()) => new State(todosPartialReducer(state, action),
    filterPartialReducer(state, action),
    authenticationPartialReducer(state, action))
