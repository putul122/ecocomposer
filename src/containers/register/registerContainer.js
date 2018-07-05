import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import Register from '../../components/register/registerComponent'
// import { actions as sagaActions } from '../../redux/sagas/'
import { actionCreators } from '../../redux/reducers/basicReducer/basicReducerReducer'

// Global State
export function mapStateToProps (state, props) {
  return {
    isAccountCreated: state.basicReducer.isAccountCreated,
    isAbacusFileProvisioned: state.basicReducer.isAbacusFileProvisioned,
    isComposerModelConnected: state.basicReducer.isComposerModelConnected
  }
}
// In Object form, each funciton is automatically wrapped in a dispatch
export const propsMapping: Callbacks = {
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
    componentDidMount: function () {
      console.log('component did mount lifecycle')
      console.log(this.props)
      window.setTimeout(() => { this.props.accountCreation && this.props.accountCreation(true) }, 3000)
      window.setTimeout(() => { this.props.abacusFileProvisioned && this.props.abacusFileProvisioned(true) }, 6000)
      window.setTimeout(() => { this.props.composerModelConnected && this.props.composerModelConnected(true) }, 9000)
      // this.props.fetchBasic && this.props.fetchBasic()
    }
  })
)(RegisterProcess)
