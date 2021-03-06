import { createAction, handleActions } from 'redux-actions'
import { FETCH_BASIC_SUCCESS } from '../../sagas/basic/basicSaga'
// Name Spaced Action Types
const INCREMENT = 'BasicReducer/INCREMENT'
const DECREMENT = 'BasicReducer/DECREMENT'
const SET_MODAL_OPEN_STATUS = 'BasicReducer/SET_MODAL_OPEN_STATUS'
const SET_CURRENT_PAGE = 'BasicReducer/SET_CURRENT_PAGE'
const SET_QUICKSLIDE_FLAG = 'BasicReducer/SET_QUICKSLIDE_FLAG'
const SET_LOGINSLIDE_FLAG = 'BasicReducer/SET_LOGINSLIDE_FLAG'
const SET_BREADCRUMB = 'BasicReducer/SET_BREADCRUMB'

export const actions = {
  INCREMENT,
  DECREMENT,
  FETCH_BASIC_SUCCESS,
  SET_MODAL_OPEN_STATUS,
  SET_CURRENT_PAGE,
  SET_QUICKSLIDE_FLAG,
  SET_LOGINSLIDE_FLAG,
  SET_BREADCRUMB
}

export const actionCreators = {
  increment: createAction(INCREMENT),
  decrement: createAction(DECREMENT),
  setModalOpenStatus: createAction(SET_MODAL_OPEN_STATUS),
  setCurrentPage: createAction(SET_CURRENT_PAGE),
  setQuickslideFlag: createAction(SET_QUICKSLIDE_FLAG),
  setLoginslideFlag: createAction(SET_LOGINSLIDE_FLAG),
  setBreadcrumb: createAction(SET_BREADCRUMB)
}

export const initialState = {
  // count: 0,
  // string: 'number',
  modalIsOpen: false,
  currentPage: 1,
  isQuickSlideOpen: false,
  isLoginSlideOpen: false,
  breadcrumb: ''
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
    [SET_MODAL_OPEN_STATUS]: (state, action) => ({
      ...state,
      modalIsOpen: action.payload
    }),
    [SET_CURRENT_PAGE]: (state, action) => ({
      ...state,
      currentPage: action.payload
    }),
    [SET_QUICKSLIDE_FLAG]: (state, action) => ({
      ...state,
      isQuickSlideOpen: action.payload
    }),
    [SET_LOGINSLIDE_FLAG]: (state, action) => ({
      ...state,
      isLoginSlideOpen: action.payload
    }),
    [SET_BREADCRUMB]: (state, action) => ({
      ...state,
      breadcrumb: action.payload
    })
  },
  initialState
)
