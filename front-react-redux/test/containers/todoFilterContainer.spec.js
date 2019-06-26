import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import mockStore from './mockStoreEmptyState'

import TodoFilterContainer from '../../src/containers/todoFilterContainer'

it('renders properly', () => { expect(shallow(<Provider store={ mockStore }><TodoFilterContainer/></Provider>)).toMatchSnapshot() })
