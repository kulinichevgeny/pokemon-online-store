import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";

import apiCallsSaga from "../helpers/requests/watchRequest";
import { launchSaga, loginWatcher } from "../modules/Login/sagas/loginSaga";

function* rootSaga() {
  yield all([launchSaga(), loginWatcher(), apiCallsSaga()]);
}

export default rootSaga;