import React from 'react'
import { shallow } from 'enzyme'

import Todo from '../../src/model/Todo'
import TodoListComponent from '../../src/components/TodoListComponent'

it('renders properly', () => {

    const firstTodo = new Todo('Task 1', true)
    const secondTodo = new Todo('Task 2', false)
    const todos = [ firstTodo, secondTodo ]

    expect(shallow(<TodoListComponent todos={todos} onToggleClick={ (id) => {} } onDeleteClick={ (id) => {} }/>)).toMatchSnapshot()
})
