import React from 'react'
import { Component, PropTypes } from 'react'
import { BottomNavigation, BottomNavigationItem } from 'material-ui'

import Sync from 'react-material-icons/icons/notification/sync'
import CheckBox from 'react-material-icons/icons/toggle/check-box'
import CheckBoxOutlineBlank from 'react-material-icons/icons/toggle/check-box-outline-blank'

import config from '../config'

class TodoFilterComponent extends Component {

    constructor(props) {
        super(props)
        this.state = { selectedItem: 0 }
    }

    select(item) {
        this.setState({ selectedItem: item })
        this.props.onTabSelected(item)
    }

    render() {
        return (
            <BottomNavigation selectedIndex={ this.state.selectedItem }>
                <BottomNavigationItem label={ config.components.filterButtonAllCaption } icon={ <Sync/> } onClick={ () => this.select(0) }/>
                <BottomNavigationItem label={ config.components.filterButtonActiveCaption } icon={ <CheckBoxOutlineBlank/> } onClick={() => this.select(1) }/>
                <BottomNavigationItem label={ config.components.filterButtonCompletedCaption } icon={ <CheckBox/> } onClick={() => this.select(2) }/>
            </BottomNavigation>
        )}
}

TodoFilterComponent.propTypes = { onTabSelected: PropTypes.func.isRequired }

export default TodoFilterComponent
