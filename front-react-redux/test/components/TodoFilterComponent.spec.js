import React from 'react'
import { shallow } from 'enzyme'

import TodoFilterComponent from '../../src/components/TodoFilterComponent'

it('renders properly, default tab selected', () => { expect(shallow(<TodoFilterComponent onTabSelected={ (item) => {} }/>)).toMatchSnapshot() })

it('State should default initially to zero and propagate up accordingly on update', () => {

    const mockedOnTabSelected = jest.fn()
    const mockedSetState = jest.fn()

    const todoFilterComponent = new TodoFilterComponent({ onTabSelected: mockedOnTabSelected })
    todoFilterComponent.setState = mockedSetState

    expect(todoFilterComponent.state.selectedItem).toBe(0)

    todoFilterComponent.select(1)

    expect(mockedOnTabSelected).toBeCalledWith(1)
    expect(mockedSetState).toBeCalledWith({ selectedItem: 1 })
})
