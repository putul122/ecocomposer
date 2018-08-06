import { handleActions } from 'redux-actions'
import { LOGIN_USER_SUCCESS } from '../../sagas/login/loginSaga'
// Name Spaced Action Types

export const actions = {
    LOGIN_USER_SUCCESS
}

export const actionCreators = {}

export const initialState = {
  token: '',
  isLoggedin: localStorage.getItem('isLoggedin') ? localStorage.getItem('isLoggedin') : false
}

export default handleActions(
  {
    [LOGIN_USER_SUCCESS]: (state, action) => ({
        ...state,
        token: action.payload,
        isLoggedin: true
    })
  },
  initialState
)
