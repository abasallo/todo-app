import React from 'react'
import { Component, PropTypes } from 'react'
import { List, ListItem, Checkbox, IconButton } from 'material-ui'
import ActionGrade from 'material-ui/svg-icons/action/delete'

import config from '../config'

class TodoListComponent extends Component {

    render() { return (
        <List style={ config.todoListStyle }>
            { this.props.todos.map(todo =>
                <ListItem key={ todo.id } primaryText={ todo.text }
                          leftCheckbox={ <Checkbox checked={ todo.completed } onClick={ () => this.props.onToggleClick(todo.id) }/>}
                          rightIcon={ <IconButton touch={ true } onClick={ () => this.props.onDeleteClick(todo.id) } style={ config.todoListDeleteButtonStyle }>
                              <ActionGrade/>
                          </IconButton > }
                />
            )}
        </List> )}
}

TodoListComponent.propTypes = {
    todos: PropTypes.array.isRequired,
    onToggleClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired }

export default TodoListComponent
