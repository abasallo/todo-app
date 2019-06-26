import React from 'react'
import { shallow } from 'enzyme'
import mockStore from './mockStoreEmptyState'

import AppContainer from '../../src/containers/AppContainer'

jest.mock('../../src/services/Auth0Service')

it('renders properly', () => { expect(shallow(<AppContainer store={ mockStore }><AppContainer/></AppContainer>)).toMatchSnapshot() })
