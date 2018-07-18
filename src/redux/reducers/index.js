import {combineReducers} from 'redux'
import basicReducer from './basicReducer/basicReducerReducer'
import registerReducer from './registerReducer/registerReducerReducer'
import registerProcessReducer from './registerProcessReducer/registerProcessReducerReducer'
import componentTypeReducer from './componentTypeReducer/componentTypeReducerReducer'
import applicationDetailReducer from './applicationDetailReducer/applicationDetailReducerReducer'
import applicationActivityReducer from './applicationActivityReducer/applicationActivityReducerReducer'
export default combineReducers({
    basicReducer,
    registerReducer,
    registerProcessReducer,
    componentTypeReducer,
    applicationDetailReducer,
    applicationActivityReducer
})
