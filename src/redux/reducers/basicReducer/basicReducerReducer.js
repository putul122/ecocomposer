import { createAction, handleActions } from 'redux-actions'
import { FETCH_BASIC_SUCCESS } from '../../sagas/basic/basicSaga'
import { CREATE_USER_SUCCESS } from '../../sagas/register/registerSaga'
import { FETCH_REGISTER_PROCESS_SUCCESS } from '../../sagas/registerProcess/registerProcessSaga'
import { FETCH_COMPONENT_SUCCESS, SEARCH_COMPONENT_SUCCESS } from '../../sagas/componentType/componentTypeSaga'
import { FETCH_COMPONENT_BY_ID_SUCCESS, FETCH_COMPONENT_CONSTRAINT_SUCCESS, FETCH_COMPONENT_COMPONENT_SUCCESS, SEARCH_COMPONENT_COMPONENT_SUCCESS } from '../../sagas/applicationDetail/applicationDetailSaga'
import { ACTIVITY_MESSAGE_SUCCESS } from '../../sagas/applicationActivity/applicationActivitySaga'
// Name Spaced Action Types
const INCREMENT = 'BasicReducer/INCREMENT'
const DECREMENT = 'BasicReducer/DECREMENT'
const ACCOUNT_CREATION = 'BasicReducer/ACCOUNT_CREATION'
const ABACUS_FILE_PROVISIONED = 'BasicReducer/ABACUS_FILE_PROVISIONED'
const COMPOSER_MODEL_CONNECTED = 'BasicReducer/COMPOSER_MODEL_CONNECTED'
const SET_SEARCH_COMPONENT_TYPE = 'BasicReducer/SET_SEARCH_COMPONENT_TYPE'
const SET_COMPONENT_TYPE_LOADING = 'BasicReducer/SET_COMPONENT_TYPE_LOADING'
const SET_MODAL_OPEN_STATUS = 'BasicReducer/SET_MODAL_OPEN_STATUS'
const SELECTED_COMPONENT_TYPE = 'BasicReducer/SELECTED_COMPONENT_TYPE'

export const actions = {
  INCREMENT,
  DECREMENT,
  FETCH_BASIC_SUCCESS,
  ACCOUNT_CREATION,
  ABACUS_FILE_PROVISIONED,
  COMPOSER_MODEL_CONNECTED,
  CREATE_USER_SUCCESS,
  FETCH_REGISTER_PROCESS_SUCCESS,
  FETCH_COMPONENT_SUCCESS,
  SEARCH_COMPONENT_SUCCESS,
  SET_COMPONENT_TYPE_LOADING,
  FETCH_COMPONENT_BY_ID_SUCCESS,
  FETCH_COMPONENT_CONSTRAINT_SUCCESS,
  FETCH_COMPONENT_COMPONENT_SUCCESS,
  SEARCH_COMPONENT_COMPONENT_SUCCESS,
  SET_MODAL_OPEN_STATUS,
  ACTIVITY_MESSAGE_SUCCESS,
  SELECTED_COMPONENT_TYPE
}

export const actionCreators = {
  increment: createAction(INCREMENT),
  decrement: createAction(DECREMENT),
  accountCreation: createAction(ACCOUNT_CREATION),
  abacusFileProvisioned: createAction(ABACUS_FILE_PROVISIONED),
  composerModelConnected: createAction(COMPOSER_MODEL_CONNECTED),
  setSearchComponentType: createAction(SET_SEARCH_COMPONENT_TYPE),
  setComponentTypeLoading: createAction(SET_COMPONENT_TYPE_LOADING),
  setModalOpenStatus: createAction(SET_MODAL_OPEN_STATUS),
  selectedComponentType: createAction(SELECTED_COMPONENT_TYPE)
}

export const initialState = {
  count: 0,
  string: 'number',
  isAccountCreated: false,
  isAbacusFileProvisioned: false,
  isComposerModelConnected: false,
  registerProcessStatus: '',
  createAccountApi: '', // Currntly not used, will be using if we are getting this api from another api call
  token: '',
  registerProcessApi: '', // Currntly not used, will be using if we are getting this api from another api call
  componentTypes: '',
  searchComponentType: '',  // Currentle not used
  isComponentTypeLoading: false,
  componentDetail: '',
  componentConstraints: '',
  componentComponents: '',
  isLoggedin: localStorage.getItem('isLoggedin') ? localStorage.getItem('isLoggedin') : false,
  modalIsOpen: false,
  activityMessages: '',
  selectedComponentType: ''
}

export default handleActions(
  {
    [INCREMENT]: (state, action) => ({
      ...state,
      count: state.count + action.payload
    }),
    [DECREMENT]: (state, action) => ({
      ...state,
      count: state.count - action.payload
    }),
    [FETCH_BASIC_SUCCESS]: (state, action) => ({
      ...state,
      count: action.payload
    }),
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
    [CREATE_USER_SUCCESS]: (state, action) => ({
      ...state,
      token: action.payload,
      isLoggedin: true
    }),
    [FETCH_REGISTER_PROCESS_SUCCESS]: (state, action) => ({
      ...state,
      registerProcessStatus: action.payload
    }),
    [FETCH_COMPONENT_SUCCESS]: (state, action) => ({
      ...state,
      componentTypes: action.payload
    }),
    [SET_SEARCH_COMPONENT_TYPE]: (state, action) => ({
      ...state,
      searchComponentType: action.payload
    }),
    [SEARCH_COMPONENT_SUCCESS]: (state, action) => ({
      ...state,
      componentTypes: action.payload
    }),
    [SET_COMPONENT_TYPE_LOADING]: (state, action) => ({
      ...state,
      isComponentTypeLoading: action.payload
    }),
    [FETCH_COMPONENT_BY_ID_SUCCESS]: (state, action) => ({
      ...state,
      componentDetail: action.payload
    }),
    [FETCH_COMPONENT_CONSTRAINT_SUCCESS]: (state, action) => ({
      ...state,
      componentConstraints: action.payload
    }),
    [FETCH_COMPONENT_COMPONENT_SUCCESS]: (state, action) => ({
      ...state,
      componentComponents: action.payload
    }),
    [SEARCH_COMPONENT_COMPONENT_SUCCESS]: (state, action) => ({
      ...state,
      componentComponents: action.payload
    }),
    [SET_MODAL_OPEN_STATUS]: (state, action) => ({
      ...state,
      modalIsOpen: action.payload
    }),
    [ACTIVITY_MESSAGE_SUCCESS]: (state, action) => ({
      ...state,
      activityMessages: action.payload
    }),
    [SELECTED_COMPONENT_TYPE]: (state, action) => ({
      ...state,
      selectedComponentType: action.payload
    })
  },
  initialState
)
