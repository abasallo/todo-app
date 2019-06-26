import React from 'react'
import { shallow } from 'enzyme'

import TodoAddComponent from '../../src/components/TodoAddComponent'

it('renders properly', () => { expect(shallow(<TodoAddComponent onAddTodo={ () => {} }/>)).toMatchSnapshot() })
