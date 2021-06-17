import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";

import apiCallsSaga from "../helpers/requests/watchRequest";
import { loginSuccessSaga, loginSuccessWatcher, loginFailWatcher } from "../pages/Login/sagas/loginSaga";
import { signOutWatcher } from "../pages/Login/sagas/logoutSaga";
import { registerFailWatcher } from "../pages/Register/sagas/registerSaga";

function* rootSaga() {
  yield all([
    loginSuccessSaga(),
    loginSuccessWatcher(),
    loginFailWatcher(),
    registerFailWatcher(),
    apiCallsSaga(),
    signOutWatcher(),
  ]);
}

export default rootSaga;