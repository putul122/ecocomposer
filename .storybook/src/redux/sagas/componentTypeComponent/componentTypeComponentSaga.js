import axios from 'axios'
import { takeLatest, call, put } from 'redux-saga/effects'
import { createAction } from 'redux-actions'
// import api from '../../../constants'

// Saga action strings
export const FETCH_COMPONENT_TYPE_COMPONENT = 'saga/componentTypeComponent/FETCH_COMPONENT_TYPE_COMPONENT'
export const FETCH_COMPONENT_TYPE_COMPONENT_SUCCESS = 'saga/componentTypeComponent/FETCH_COMPONENT_TYPE_COMPONENT_SUCCESS'
export const FETCH_COMPONENT_TYPE_COMPONENT_FAILURE = 'saga/componentTypeComponent/FETCH_COMPONENT_TYPE_COMPONENT_FAILURE'
export const FETCH_COMPONENT_TYPE_COMPONENT_PROPERTIES = 'saga/componentTypeComponent/FETCH_COMPONENT_TYPE_COMPONENT_PROPERTIES'
export const FETCH_COMPONENT_TYPE_COMPONENT_PROPERTIES_SUCCESS = 'saga/componentTypeComponent/FETCH_COMPONENT_TYPE_COMPONENT_PROPERTIES_SUCCESS'
export const FETCH_COMPONENT_TYPE_COMPONENT_PROPERTIES_FAILURE = 'saga/componentTypeComponent/FETCH_COMPONENT_TYPE_COMPONENT_PROPERTIES_FAILURE'
export const FETCH_COMPONENT_TYPE_COMPONENT_RELATIONSHIPS = 'saga/componentTypeComponent/FETCH_COMPONENT_TYPE_COMPONENT_RELATIONSHIPS'
export const FETCH_COMPONENT_TYPE_COMPONENT_RELATIONSHIPS_SUCCESS = 'saga/componentTypeComponent/FETCH_COMPONENT_TYPE_COMPONENT_RELATIONSHIPS_SUCCESS'
export const FETCH_COMPONENT_TYPE_COMPONENT_RELATIONSHIPS_FAILURE = 'saga/componentTypeComponent/FETCH_COMPONENT_TYPE_COMPONENT_RELATIONSHIPS_FAILURE'

export const actionCreators = {
  fetchComponentTypeComponent: createAction(FETCH_COMPONENT_TYPE_COMPONENT),
  fetchComponentTypeComponentSuccess: createAction(FETCH_COMPONENT_TYPE_COMPONENT_SUCCESS),
  fetchComponentTypeComponentFailure: createAction(FETCH_COMPONENT_TYPE_COMPONENT_FAILURE),
  fetchcomponentTypeComponentProperties: createAction(FETCH_COMPONENT_TYPE_COMPONENT_PROPERTIES),
  fetchcomponentTypeComponentPropertiesSuccess: createAction(FETCH_COMPONENT_TYPE_COMPONENT_PROPERTIES_SUCCESS),
  fetchcomponentTypeComponentPropertiesFailure: createAction(FETCH_COMPONENT_TYPE_COMPONENT_PROPERTIES_FAILURE),
  fetchcomponentTypeComponentRelationships: createAction(FETCH_COMPONENT_TYPE_COMPONENT_RELATIONSHIPS),
  fetchcomponentTypeComponentRelationshipsSuccess: createAction(FETCH_COMPONENT_TYPE_COMPONENT_RELATIONSHIPS_SUCCESS),
  fetchcomponentTypeComponentRelationshipsFailure: createAction(FETCH_COMPONENT_TYPE_COMPONENT_RELATIONSHIPS_FAILURE)
}

export default function * watchComponentTypeComponent () {
  yield [
    takeLatest(FETCH_COMPONENT_TYPE_COMPONENT, getComponentTypeComponent),
    takeLatest(FETCH_COMPONENT_TYPE_COMPONENT_PROPERTIES, getComponentTypeComponentProperties),
    takeLatest(FETCH_COMPONENT_TYPE_COMPONENT_RELATIONSHIPS, getComponentTypeComponentRelationships)
  ]
}

export function * getComponentTypeComponent (action) {
  try {
    const componentTypes = yield call(
      axios.get,
      // api.getComponentTypes,
      // {params: action.payload}
      'https://ecocomposermockapis.azurewebsites.net/ecocomposer-meta-model/component_types/' + action.payload.id + '/components/' + action.payload.id
    )
    yield put(actionCreators.fetchComponentTypeComponentSuccess(componentTypes.data))
  } catch (error) {
    yield put(actionCreators.fetchComponentTypeComponentFailure(error))
  }
}

export function * getComponentTypeComponentProperties (action) {
  try {
    const componentTypes = yield call(
      axios.get,
      // api.getComponentTypes,
      // {params: action.payload}
      'https://ecocomposermockapis.azurewebsites.net/ecocomposer-meta-model/component_types/' + action.payload.id + '/properties'
    )
    yield put(actionCreators.fetchcomponentTypeComponentPropertiesSuccess(componentTypes.data))
  } catch (error) {
    yield put(actionCreators.fetchcomponentTypeComponentPropertiesFailure(error))
  }
}

export function * getComponentTypeComponentRelationships (action) {
    try {
      const componentTypes = yield call(
        axios.get,
        // api.getComponentTypes,
        // {params: action.payload}
        'https://ecocomposermockapis.azurewebsites.net/ecocomposer-meta-model/components/' + action.payload.id + '/componentrelationships'
      )
      yield put(actionCreators.fetchcomponentTypeComponentRelationshipsSuccess(componentTypes.data))
    } catch (error) {
      yield put(actionCreators.fetchcomponentTypeComponentRelationshipsFailure(error))
    }
  }
