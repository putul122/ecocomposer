import axios from 'axios'
import { takeLatest, call, put } from 'redux-saga/effects'
import { createAction } from 'redux-actions'

axios.defaults.headers.common['Accept'] = 'application/json'

// Saga action strings
export const FETCH_REGISTER_PROCESS = 'saga/RegisterProcess/FETCH_REGISTER_PROCESS'
export const FETCH_REGISTER_PROCESS_SUCCESS = 'saga/RegisterProcess/FETCH_REGISTER_PROCESS_SUCCESS'
export const FETCH_REGISTER_PROCESS_FAILURE = 'saga/RegisterProcess/FETCH_REGISTER_PROCESS_FAILURE'

export const actionCreators = {
  fetchRegisterProcess: createAction(FETCH_REGISTER_PROCESS),
  fetchRegisterProcessSuccess: createAction(FETCH_REGISTER_PROCESS_SUCCESS),
  fetchRegisterProcessFailure: createAction(FETCH_REGISTER_PROCESS_FAILURE)
}

export default function * watchRegisterProcess () {
  console.log('registe process watch')
  yield takeLatest(FETCH_REGISTER_PROCESS, getRegisterProcess)
}

export function * getRegisterProcess (action) {
  try {
    const registerProcess = yield call(
      axios.get,
      'https://virtserver.swaggerhub.com/JakoMenkveld/ecocomposer-notification/1/processes/ '
    )
    yield put(actionCreators.fetchRegisterProcessSuccess(registerProcess.data[0].status))
  } catch (error) {
    yield put(actionCreators.fetchRegisterProcessFailure(error))
  }
}
