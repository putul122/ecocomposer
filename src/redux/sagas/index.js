import watchBasic, {actionCreators as basicActions} from './basic/basicSaga'
import watchLoginUser, {actionCreators as loginActions} from './login/loginSaga'
import watchRegisterUser, {actionCreators as registerActions} from './userRegistration/userRegistrationSaga'
import watchRegisterProcess, {actionCreators as registerProcessActions} from './registerProcess/registerProcessSaga'
import watchComponentType, {actionCreators as componentTypeActions} from './componentType/componentTypeSaga'
import watchApplicationDetail, {actionCreators as applicationDetailActions} from './applicationDetail/applicationDetailSaga'
import watchApplicationActivity, {actionCreators as applicationActivityActions} from './applicationActivity/applicationActivitySaga'
import watchComponentTypeComponent, {actionCreators as componentTypeComponentActions} from './componentTypeComponent/componentTypeComponentSaga'

export const actions = {
  basicActions,
  loginActions,
  registerActions,
  registerProcessActions,
  componentTypeActions,
  applicationDetailActions,
  applicationActivityActions,
  componentTypeComponentActions
}
export default function * rootSaga () {
  yield [
    watchBasic(),
    watchRegisterUser(),
    watchLoginUser(),
    watchRegisterProcess(),
    watchComponentType(),
    watchApplicationDetail(),
    watchApplicationActivity(),
    watchComponentTypeComponent()
  ]
}
