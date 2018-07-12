import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import ApplicationActivity from '../../components/applicationActivity/applicationActivityComponent'
import { actions as sagaActions } from '../../redux/sagas/'
// Global State
export function mapStateToProps (state, props) {
  return {
    isLoggedin: state.basicReducer.isLoggedin,
    activityMessages: state.basicReducer.activityMessages,
    selectedComponentType: state.basicReducer.selectedComponentType
  }
}
// In Object form, each funciton is automatically wrapped in a dispatch
export const propsMapping: Callbacks = {
    activityMessage: sagaActions.applicationActivityActions.activityMessage
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
      console.log('component will mount lifecycle activity model', this.props)
      let payload = {
          'componentTypeId': this.props.selectedComponentType
      }
      this.props.activityMessage(payload)
    }
  })
)(ApplicationActivity)
