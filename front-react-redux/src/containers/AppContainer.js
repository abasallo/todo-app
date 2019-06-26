import { connect } from 'react-redux'

import AppComponent from '../components/AppComponent'

const mapStateToProps = state => ({ authenticated: state.authenticated })

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)
