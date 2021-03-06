import watchBasic, {actionCreators as basicActions} from './basic/basicSaga'
import watchCreateUser, {actionCreators as registerActions} from './register/registerSaga'
import watchRegisterProcess, {actionCreators as registerProcessActions} from './registerProcess/registerProcessSaga'
import watchComponentType, {actionCreators as componentTypeActions} from './componentType/componentTypeSaga'
import watchApplicationDetail, {actionCreators as applicationDetailActions} from './applicationDetail/applicationDetailSaga'
import watchApplicationActivity, {actionCreators as applicationActivityActions} from './applicationActivity/applicationActivitySaga'
import watchComponentTypeComponent, {actionCreators as componentTypeComponentActions} from './componentTypeComponent/componentTypeComponentSaga'

export const actions = {
  basicActions,
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
    watchCreateUser(),
    watchRegisterProcess(),
    watchComponentType(),
    watchApplicationDetail(),
    watchApplicationActivity(),
    watchComponentTypeComponent()
  ]
}
