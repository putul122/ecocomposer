import axios from 'axios'
import { takeLatest, call, put } from 'redux-saga/effects'
import { createAction } from 'redux-actions'
import api from '../../../constants'

// Saga action strings
export const ACTIVITY_MESSAGE = 'saga/Login/ACTIVITY_MESSAGE'
export const ACTIVITY_MESSAGE_SUCCESS = 'saga/Login/ACTIVITY_MESSAGE_SUCCESS'
export const ACTIVITY_MESSAGE_FAILURE = 'saga/Login/ACTIVITY_MESSAGE_FAILURE'

export const actionCreators = {
  activityMessage: createAction(ACTIVITY_MESSAGE),
  activityMessageSuccess: createAction(ACTIVITY_MESSAGE_SUCCESS),
  activityMessageFailure: createAction(ACTIVITY_MESSAGE_FAILURE)
}

export default function * watchApplicationActivity () {
  yield takeLatest(ACTIVITY_MESSAGE, activityMessage)
}

export function * activityMessage (action) {
  try {
    const activityMessage = yield call(
      axios.get,
      api.getActivityMessage(action.payload.componentTypeId)
      // 'https://ecocomposermockapis.azurewebsites.net/ecocomposer-meta-model/component_types/' + action.payload.componentTypeId + '/messages?page_size=5&page=1&recommended=false'
    )
    yield put(actionCreators.activityMessageSuccess(activityMessage.data.data))
  } catch (error) {
    yield put(actionCreators.activityMessageFailure(error))
  }
}
