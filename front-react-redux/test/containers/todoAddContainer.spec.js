import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import mockStore from './mockStoreEmptyState'

import TodoAddContainer from '../../src/containers/todoAddContainer'

jest.mock('../../src/services/Auth0Service')

it('renders properly', () => { expect(shallow(<Provider store={ mockStore }><TodoAddContainer/></Provider>)).toMatchSnapshot() })
