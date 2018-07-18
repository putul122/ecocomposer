import axios from 'axios'
import { takeLatest, call, put } from 'redux-saga/effects'
import { createAction } from 'redux-actions'
import api from '../../../constants'

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
  yield [
    takeLatest(FETCH_COMPONENT, getComponents),
    takeLatest(SEARCH_COMPONENT, searchComponents)
  ]
}

export function * getComponents (action) {
  try {
    console.log('ct ---- action', action)
    const componentTypes = yield call(
      axios.get,
      api.getComponentTypes,
      {params: action.payload}
      // 'https://ecocomposermockapis.azurewebsites.net/ecocomposer-meta-model/component_types?search=' + action.payload.search + '&page=' + action.payload.page + '&page_size=' + action.payload.page_size + '&recommended=true'
    )
    yield put(actionCreators.fetchComponentSuccess(componentTypes.data))
  } catch (error) {
    yield put(actionCreators.fetchComponentFailure(error))
  }
}

export function * searchComponents (action) {
  try {
    const componentTypes = yield call(
      axios.get,
      api.getComponentTypes,
      {params: action.payload}
      // 'https://ecocomposermockapis.azurewebsites.net/ecocomposer-meta-model/component_types?search=' + action.payload.search + '&page=' + action.payload.page + '&page_size=' + action.payload.page_size
    )
    yield put(actionCreators.searchComponentSuccess(componentTypes.data))
  } catch (error) {
    yield put(actionCreators.searchomponentFailure(error))
  }
}
