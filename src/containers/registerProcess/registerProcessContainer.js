import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import RegisterProcess from '../../components/registerProcess/registerProcessComponent'
import { actions as sagaActions } from '../../redux/sagas/'
import { actionCreators } from '../../redux/reducers/basicReducer/basicReducerReducer'

// Global State
export function mapStateToProps (state, props) {
  return {
    isAccountCreated: state.basicReducer.isAccountCreated,
    isAbacusFileProvisioned: state.basicReducer.isAbacusFileProvisioned,
    isComposerModelConnected: state.basicReducer.isComposerModelConnected,
    registerProcessStatus: state.basicReducer.registerProcessStatus
  }
}

// In Object form, each funciton is automatically wrapped in a dispatch
export const propsMapping: Callbacks = {
  fetchRegisterProcess: sagaActions.registerProcessActions.fetchRegisterProcess,
  accountCreation: actionCreators.accountCreation,
  abacusFileProvisioned: actionCreators.abacusFileProvisioned,
  composerModelConnected: actionCreators.composerModelConnected
}

// If you want to use the function mapping
// export const propsMapping = (dispatch, ownProps) => {
//   return {
//     onClick: () => dispatch(actions.starsActions.FETCH_STARS)
//   }
// }

export default compose(
  connect(mapStateToProps, propsMapping),
  lifecycle({
    componentWillMount: function () {
      this.props.fetchRegisterProcess && this.props.fetchRegisterProcess()
    },
    componentDidMount: function () {
      window.setTimeout(() => {
        this.props.accountCreation && this.props.accountCreation(true)
        if (this.props.registerProcessStatus !== 'Completed') {
          this.props.fetchRegisterProcess && this.props.fetchRegisterProcess()
        }
      }, 3000)
      window.setTimeout(() => {
        this.props.abacusFileProvisioned && this.props.abacusFileProvisioned(true)
        if (this.props.registerProcessStatus !== 'Completed') {
          this.props.fetchRegisterProcess && this.props.fetchRegisterProcess()
        }
      }, 6000)
      window.setTimeout(() => {
        this.props.composerModelConnected && this.props.composerModelConnected(true)
        if (this.props.registerProcessStatus !== 'Completed') {
          this.props.fetchRegisterProcess && this.props.fetchRegisterProcess()
        }
      }, 9000)
    },
    componentDidUpdate: function () {
      if (this.props.registerProcessStatus !== 'Completed') {
        this.props.fetchRegisterProcess && this.props.fetchRegisterProcess()
      }
    }
  })
)(RegisterProcess)
