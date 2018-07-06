import watchBasic, {actionCreators as basicActions} from './basic/basicSaga'
import watchCreateUser, {actionCreators as createUserApiActions} from './register/registerSaga'
import watchRegisterProcess, {actionCreators as registerProcessActions} from './registerProcess/registerProcessSaga'
import watchComponentType, {actionCreators as componentTypeActions} from './componentType/componentTypeSaga'

export const actions = {
  basicActions,
  createUserApiActions,
  registerProcessActions,
  componentTypeActions
}
export default function * rootSaga () {
  yield [
    watchBasic(),
    watchCreateUser(),
    watchRegisterProcess(),
    watchComponentType()
  ]
}
