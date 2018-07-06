import axios from 'axios'
import { takeLatest, call, put } from 'redux-saga/effects'
import { createAction } from 'redux-actions'

axios.defaults.headers.common['Accept'] = 'application/json'

// Saga action strings
export const FETCH_COMPONENT = 'saga/componentType/FETCH_COMPONENT'
export const FETCH_COMPONENT_SUCCESS = 'saga/componentType/FETCH_COMPONENT_SUCCESS'
export const FETCH_COMPONENT_FAILURE = 'saga/componentType/FETCH_COMPONENT_FAILURE'

export const actionCreators = {
  fetchComponent: createAction(FETCH_COMPONENT),
  fetchComponentSuccess: createAction(FETCH_COMPONENT_SUCCESS),
  fetchComponentFailure: createAction(FETCH_COMPONENT_FAILURE)
}

export default function * watchComponentType () {
  console.log('component process watch')
  yield takeLatest(FETCH_COMPONENT, getComponents)
}

export function * getComponents (action) {
  try {
    const componentTypes = yield call(
      axios.get,
      'https://ecocomposermockapis.azurewebsites.net/ecocomposer-meta-model/component_types'
    )
    console.log('Component Types', componentTypes)
    yield put(actionCreators.fetchComponentSuccess(componentTypes.data.data))
  } catch (error) {
    yield put(actionCreators.fetchComponentFailure(error))
  }
}
