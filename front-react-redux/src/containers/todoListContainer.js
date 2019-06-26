import {connect} from 'react-redux'

import ToggleTodoAction from '../actions/ToggleTodoAction'
import DeleteTodoAction from '../actions/DeleteTodoAction'
import TodoListComponent from '../components/TodoListComponent'
import Todo from '../model/Todo'

const mapStateToProps = state => ({ todos: Todo.filterTodoArrayBy(state.todos, state.filter) })

const mapDispatchToProps = dispatch => ({ onToggleClick: id => dispatch(ToggleTodoAction.thunk(id)), onDeleteClick: id => dispatch(DeleteTodoAction.thunk(id)) })

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent)
