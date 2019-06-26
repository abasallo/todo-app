import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import rootReducer from './reducers'
import State from './State'
import InitialDataFetchAction from './actions/InitialDataFetchAction'
import AppContainer from './containers/AppContainer'
import Auth0Service from './services/Auth0Service'

injectTapEventPlugin()

const store = createStore(rootReducer, new State(), applyMiddleware(thunk))

render(
    <Provider store={ store }>
        <MuiThemeProvider>
            <AppContainer/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)

if (!Auth0Service.getAccessToken())
    Auth0Service.login()
else
    store.dispatch(InitialDataFetchAction.thunk())
