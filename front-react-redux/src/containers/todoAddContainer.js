import { connect } from 'react-redux'

import AddTodoAction from '../actions/AddTodoAction'
import TodoAddComponent from '../components/TodoAddComponent'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({ onAddTodo: (text) => dispatch(AddTodoAction.thunk(text)) })

export default connect(mapStateToProps, mapDispatchToProps)(TodoAddComponent)
