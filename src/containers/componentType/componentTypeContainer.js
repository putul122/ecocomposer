import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import ComponentType from '../../components/componentType/componentTypeComponent'
import { actions as sagaActions } from '../../redux/sagas/'
// Global State
export function mapStateToProps (state, props) {
  return {
    componentTypes: state.basicReducer.componentTypes
  }
}

// In Object form, each funciton is automatically wrapped in a dispatch
export const propsMapping: Callbacks = {
  fetchComponent: sagaActions.componentTypeActions.fetchComponent
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
    console.log('com com', this.props)
    this.props.fetchComponent && this.props.fetchComponent()
    },
    componentDidMount: function () {
    // Block
      console.log('com 1', this.props)
    },
    componentDidUpdate: function () {
    // Block
    }
  })
)(ComponentType)
