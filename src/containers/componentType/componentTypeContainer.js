import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import ComponentType from '../../components/componentType/componentTypeComponent'
import { actions as sagaActions } from '../../redux/sagas/'
import { actionCreators } from '../../redux/reducers/basicReducer/basicReducerReducer'

// Global State
export function mapStateToProps (state, props) {
  return {
    componentTypes: state.basicReducer.componentTypes,
    searchComponentType: state.basicReducer.searchComponentType,
    isComponentTypeLoading: state.basicReducer.isComponentTypeLoading
  }
}

// In Object form, each funciton is automatically wrapped in a dispatch
export const propsMapping: Callbacks = {
  fetchComponent: sagaActions.componentTypeActions.fetchComponent,
  searchComponent: sagaActions.componentTypeActions.searchComponent,
  setSearchComponentType: actionCreators.setSearchComponentType,
  setComponentTypeLoading: actionCreators.setComponentTypeLoading
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
    this.props.setComponentTypeLoading && this.props.setComponentTypeLoading(true)
    this.props.fetchComponent && this.props.fetchComponent()
    },
    componentDidMount: function () {
    // Block
      console.log('com did mount 1', this.props)
      this.props.setComponentTypeLoading && this.props.setComponentTypeLoading(false)
    },
    componentDidUpdate: function () {
    // Block
    console.log('component did update')
    this.props.setComponentTypeLoading && this.props.setComponentTypeLoading(false)
    },
    componentWillReceiveProps: function () {
      console.log('component will  update')
      // this.props.setComponentTypeLoading && this.props.setComponentTypeLoading(true)
    }
  })
)(ComponentType)
