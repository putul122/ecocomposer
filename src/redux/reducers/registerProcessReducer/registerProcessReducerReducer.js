import { createAction, handleActions } from 'redux-actions'
import { FETCH_CREATE_USER_SUCCESS } from '../../sagas/register/registerSaga'
import { FETCH_REGISTER_PROCESS_SUCCESS } from '../../sagas/registerProcess/registerProcessSaga'
// Name Spaced Action Types
const ACCOUNT_CREATION = 'BasicReducer/ACCOUNT_CREATION'
const ABACUS_FILE_PROVISIONED = 'BasicReducer/ABACUS_FILE_PROVISIONED'
const COMPOSER_MODEL_CONNECTED = 'BasicReducer/COMPOSER_MODEL_CONNECTED'

export const actions = {
  ACCOUNT_CREATION,
  ABACUS_FILE_PROVISIONED,
  COMPOSER_MODEL_CONNECTED,
  FETCH_CREATE_USER_SUCCESS,
  FETCH_REGISTER_PROCESS_SUCCESS
}

export const actionCreators = {
  accountCreation: createAction(ACCOUNT_CREATION),
  abacusFileProvisioned: createAction(ABACUS_FILE_PROVISIONED),
  composerModelConnected: createAction(COMPOSER_MODEL_CONNECTED)
}

export const initialState = {
  isAccountCreated: false,
  isAbacusFileProvisioned: false,
  isComposerModelConnected: false,
  registerProcessStatus: '',
  createAccountApi: '', // Currntly not used, will be using if we are getting this api from another api call
  token: '',
  registerProcessApi: '' // Currntly not used, will be using if we are getting this api from another api call
}

export default handleActions(
  {
    [ACCOUNT_CREATION]: (state, action) => ({
      ...state,
      isAccountCreated: action.payload
    }),
    [ABACUS_FILE_PROVISIONED]: (state, action) => ({
      ...state,
      isAbacusFileProvisioned: action.payload
    }),
    [COMPOSER_MODEL_CONNECTED]: (state, action) => ({
      ...state,
      isComposerModelConnected: action.payload
    }),
    [FETCH_CREATE_USER_SUCCESS]: (state, action) => ({
      ...state,
      createAccountApi: action.payload
    }),
    [FETCH_REGISTER_PROCESS_SUCCESS]: (state, action) => ({
      ...state,
      registerProcessStatus: action.payload
    })
  },
  initialState
)
