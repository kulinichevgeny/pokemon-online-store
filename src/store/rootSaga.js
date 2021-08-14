import "regenerator-runtime/runtime"
import { all } from "redux-saga/effects"

import apiCallsSaga from "../helpers/requests/watchRequest"
import { loginSuccessSaga, loginSuccessWatcher } from "../pages/Login/sagas/loginSaga"
import { signOutWatcher } from "../pages/Login/sagas/logoutSaga"

function* rootSaga() {
  yield all([
    loginSuccessSaga(),
    loginSuccessWatcher(),
    apiCallsSaga(),
    signOutWatcher(),
  ])
}

export default rootSaga
