import authenticationPartialReducer from '../../src/reducers/authenticationPartialReducer'

it('From provided state and action, calculates new state for authentication', () =>
    expect(authenticationPartialReducer()).toBe(false))
