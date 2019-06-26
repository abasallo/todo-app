import React from 'react'
import { shallow } from 'enzyme'

import App from '../../src/components/AppComponent'

jest.mock('../../src/services/Auth0Service')

it('renders properly', () => { expect(shallow(<App/>)).toMatchSnapshot() })
