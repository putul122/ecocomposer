import {combineReducers} from 'redux'
import basicReducer from './basicReducer/basicReducerReducer'
import loginReducer from './loginReducer/loginReducerReducer'
import registerProcessReducer from './registerProcessReducer/registerProcessReducerReducer'
import componentTypeReducer from './componentTypeReducer/componentTypeReducerReducer'
import applicationDetailReducer from './applicationDetailReducer/applicationDetailReducerReducer'
import applicationActivityReducer from './applicationActivityReducer/applicationActivityReducerReducer'
import componentTypeComponentReducer from './componentTypeComponentReducer/componentTypeComponentReducerReducer'
import userRegistrationReducer from './userRegistrationReducer/userRegistrationReducerReducer'
export default combineReducers({
    basicReducer,
    loginReducer,
    registerProcessReducer,
    componentTypeReducer,
    applicationDetailReducer,
    applicationActivityReducer,
    componentTypeComponentReducer,
    userRegistrationReducer
})
