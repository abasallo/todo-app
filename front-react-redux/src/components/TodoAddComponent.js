import React from 'react'
import { Component, PropTypes } from 'react'
import { FloatingActionButton, FlatButton, Dialog, TextField } from 'material-ui'
import Add from 'react-material-icons/icons/content/add'

import config from '../config'

class TodoAddComponent extends Component {

    state = { open: false, text: '' }

    actions = [
        <FlatButton label='Cancel' primary={ true } onClick={ () => this.setState({open: false}) }/>,
        <FlatButton label='Submit' primary={ true } onClick={ () => {
            this.props.onAddTodo(this.state.text)
            this.setState({ open: false })}}/>]

    render() { return(
        <div>
            <FloatingActionButton style={ config.components.todoAddButtonStyle } zDepth={ 1 } mini={ true } onClick={ () => this.setState({ open: true }) }>
                <Add/>
            </FloatingActionButton>

            <Dialog title={ config.components.todoAddCaption } actions={ this.actions } modal={ true } open={ this.state.open }>
                <TextField hintText={ config.todo.defaults.text } onChange={ (e) => this.setState({ text: e.target.value }) }/>
            </Dialog>
        </div>
    )}
}

TodoAddComponent.propTypes = { onAddTodo: PropTypes.func.isRequired }

export default TodoAddComponent
