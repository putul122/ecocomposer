import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import ApplicationDetail from '../../components/applicationDetail/applicationDetailComponent'
import { actions as sagaActions } from '../../redux/sagas/'
// import { actionCreators } from '../../redux/reducers/basicReducer/basicReducerReducer'

// Global State
export function mapStateToProps (state, props) {
  return {
    componentDetail: state.basicReducer.componentDetail,
    componentConstraints: state.basicReducer.componentConstraints,
    componentComponents: state.basicReducer.componentComponents
  }
}
// In Object form, each funciton is automatically wrapped in a dispatch
export const propsMapping: Callbacks = {
  fetchComponentById: sagaActions.applicationDetailActions.fetchComponentById,
  fetchComponentConstraint: sagaActions.applicationDetailActions.fetchComponentConstraint,
  fetchComponentComponent: sagaActions.applicationDetailActions.fetchComponentComponent,
  searchComponentComponent: sagaActions.applicationDetailActions.searchComponentComponent
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
      const componentTypeId = this.props.match.params.id
      let payload = {
        'id': componentTypeId,
        'recommendedComponent': {
          'search': '',
          'page_size': 5,
          'page': 1,
          'recommended': true
        }
      }
      this.props.fetchComponentById && this.props.fetchComponentById(payload)
      this.props.fetchComponentById && this.props.fetchComponentConstraint(payload)
      this.props.fetchComponentComponent && this.props.fetchComponentComponent(payload)
    },
    componentDidMount: function () {
      console.log('applicationDetails component did mount', this.props)
    }
  })
)(ApplicationDetail)
