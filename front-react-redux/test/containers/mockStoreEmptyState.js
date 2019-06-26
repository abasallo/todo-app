import configureStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureStore(middlewares)
const initialState = {}

export default mockStore(initialState)
