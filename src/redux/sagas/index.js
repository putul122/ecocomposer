import watchBasic, {actionCreators as basicActions} from './basic/basicSaga'
import watchCreateUser, {actionCreators as createUserApiActions} from './register/registerSaga'
import watchRegisterProcess, {actionCreators as registerProcessActions} from './registerProcess/registerProcessSaga'

export const actions = {
  basicActions,
  createUserApiActions,
  registerProcessActions
}
export default function * rootSaga () {
  yield [
    watchBasic(),
    watchCreateUser(),
    watchRegisterProcess()
  ]
}
