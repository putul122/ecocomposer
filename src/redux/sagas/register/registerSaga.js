import axios from 'axios'
import { takeLatest, call, put } from 'redux-saga/effects'
import { createAction } from 'redux-actions'

// Saga action strings
export const CREATE_USER = 'saga/Register/CREATE_USER'
export const CREATE_USER_SUCCESS = 'saga/Register/CREATE_USER_SUCCESS'
export const CREATE_USER_FAILURE = 'saga/Register/CREATE_USER_FAILURE'

export const actionCreators = {
  createUser: createAction(CREATE_USER),
  createUserSuccess: createAction(CREATE_USER_SUCCESS),
  createUserFailure: createAction(CREATE_USER_FAILURE)
}

export default function * watchCreateUser () {
  yield takeLatest(CREATE_USER, createUser)
}

export function * createUser (action) {
  try {
    const createUser = yield call(
      axios.post,
      'https://ecocomposermockapis.azurewebsites.net/ecocomposer-account/users',
      action.payload
    )
    yield put(actionCreators.createUserSuccess(createUser.data.data))
  } catch (error) {
    yield put(actionCreators.createUserFailure(error))
  }
}
