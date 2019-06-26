import React, { Component } from 'react'
import { Paper, AppBar, FlatButton } from 'material-ui'

import Auth0Service from '../services/Auth0Service'

import TodoListContainer from '../containers/todoListContainer'
import TodoFilterContainer from '../containers/todoFilterContainer'
import TodoAddContainer from '../containers/todoAddContainer'

import config from '../config'

export default class AppComponent extends Component {

    render() { return(
        <Paper zDepth={2}>
            <AppBar title={ config.name } showMenuIconButton={ false }
                    iconElementRight={ <FlatButton label={ config.components.logOutButtonCaption } onClick={ () => { Auth0Service.logout() } } /> }/>
            <TodoListContainer/>
            <TodoAddContainer/>
            <TodoFilterContainer/>
        </Paper>
    )}
}
