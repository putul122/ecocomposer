import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import ApplicationActivity from '../../components/applicationActivity/applicationActivityComponent'
import { actions as sagaActions } from '../../redux/sagas/'
// Global State
export function mapStateToProps (state, props) {
  return {
    isLoggedin: state.registerReducer.isLoggedin,
    activityMessages: state.applicationActivityReducer.activityMessages,
    selectedComponentType: state.applicationDetailReducer.selectedComponentType
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
    // componentWillMount: function () {
    //   console.log('component will mount lifecycle activity model', this.props)
    //   console.log(this.state)
    // //   let payload = {
    // //       'componentTypeId': this.props.selectedComponentType
    // //   }
    // //   this.props.activityMessage(payload)
    // },
    componentWillReceiveProps: function (nextProps) {
      if (nextProps.selectedComponentType && (nextProps.selectedComponentType !== this.props.selectedComponentType)) {
        let payload = {
         'componentTypeId': nextProps.selectedComponentType
        }
        this.props.activityMessage(payload)
      }
    }
  })
)(ApplicationActivity)
