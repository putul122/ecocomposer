import axios from 'axios'
import { takeEvery, call } from 'redux-saga/effects'
import { createAction } from 'redux-actions'

// Saga action strings
export const FETCH_CREATE_USER = 'saga/Register/FETCH_CREATE_USER'
export const FETCH_CREATE_USER_SUCCESS = 'saga/Register/FETCH_CREATE_USER_SUCCESS'
export const FETCH_CREATE_USER_FAILURE = 'saga/Register/FETCH_CREATE_USER_FAILURE'

export const actionCreators = {
  fetchCreateUser: createAction(FETCH_CREATE_USER),
  fetchCreateUserSuccess: createAction(FETCH_CREATE_USER_SUCCESS),
  fetchCreateUserFailure: createAction(FETCH_CREATE_USER_FAILURE)
}

export default function * watchCreateUser () {
  yield takeEvery(FETCH_CREATE_USER, getCreateUserApi)
}

export function * getCreateUserApi (action) {
  try {
    const createUserApi = yield call(
      axios.get,
      'https://virtserver.swaggerhub.com/JakoMenkveld/ecocomposer-discovery/1/action'
    )
    console.log('create user api', createUserApi)
    // yield put(actionCreators.fetchCreateUserSuccess(createUserApi._links.0.href))
  } catch (error) {
    console.log('error', error)
    // `yield put(actionCreators.fetchCreateUserFailure(error))
  }
}
