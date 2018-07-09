import axios from 'axios'
import { takeLatest, call, put } from 'redux-saga/effects'
import { createAction } from 'redux-actions'

axios.defaults.headers.common['Accept'] = 'application/json'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

// Saga action strings
export const FETCH_COMPONENT = 'saga/componentType/FETCH_COMPONENT'
export const FETCH_COMPONENT_SUCCESS = 'saga/componentType/FETCH_COMPONENT_SUCCESS'
export const FETCH_COMPONENT_FAILURE = 'saga/componentType/FETCH_COMPONENT_FAILURE'
export const SEARCH_COMPONENT = 'saga/componentType/SEARCH_COMPONENT'
export const SEARCH_COMPONENT_SUCCESS = 'saga/componentType/SEARCH_COMPONENT_SUCCESS'
export const SEARCH_COMPONENT_FAILURE = 'saga/componentType/SEARCH_COMPONENT_FAILURE'

export const actionCreators = {
  fetchComponent: createAction(FETCH_COMPONENT),
  fetchComponentSuccess: createAction(FETCH_COMPONENT_SUCCESS),
  fetchComponentFailure: createAction(FETCH_COMPONENT_FAILURE),
  searchComponent: createAction(SEARCH_COMPONENT),
  searchComponentSuccess: createAction(SEARCH_COMPONENT_SUCCESS),
  searchomponentFailure: createAction(SEARCH_COMPONENT_FAILURE)
}

export default function * watchComponentType () {
  console.log('component process watch')
  yield [
    takeLatest(FETCH_COMPONENT, getComponents),
    takeLatest(SEARCH_COMPONENT, searchComponents)
  ]
}

export function * getComponents (action) {
  try {
    const componentTypes = yield call(
      axios.get,
      'https://ecocomposermockapis.azurewebsites.net/ecocomposer-meta-model/component_types'
    )
    console.log('Component Types', componentTypes)
    console.log('Component action', action)
    yield put(actionCreators.fetchComponentSuccess(componentTypes.data.data))
  } catch (error) {
    yield put(actionCreators.fetchComponentFailure(error))
  }
}

export function * searchComponents (action) {
  try {
    const componentTypes = yield call(
      axios.get,
      'https://ecocomposermockapis.azurewebsites.net/ecocomposer-meta-model/component_types?search=' + action.payload.search + '&page=1&page_size=1'
    )
    console.log('Component Types search action', action.payload.search)
    yield put(actionCreators.searchComponentSuccess(componentTypes.data.data))
  } catch (error) {
    yield put(actionCreators.searchomponentFailure(error))
  }
}
