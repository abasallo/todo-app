import { connect } from 'react-redux'

import SetVisibilityFilterAction from '../actions/SetVisibilityFilterAction'
import TodoFilterComponent from '../components/TodoFilterComponent'
import FilterTypeMapper from './FilterTypeMapper'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({ onTabSelected: (item) => { dispatch(new SetVisibilityFilterAction(FilterTypeMapper.mapTabSelectedWithFilterType(item)).toObjectLiteral()) }})

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilterComponent)
