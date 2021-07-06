import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";

import apiCallsSaga from "../helpers/requests/watchRequest";
import { loginSuccessSaga, loginSuccessWatcher } from "../pages/Login/sagas/loginSaga";
import { signOutWatcher } from "../pages/Login/sagas/logoutSaga";
import { registerFailWatcher } from "../pages/Register/sagas/registerSaga";
import { createOrderSuccessWatcher } from "../pages/Cart/sagas/createOrderSaga";
import { getOrderHistoryWatcher } from "../pages/Profile/sagas/orderHistorySaga";

function* rootSaga() {
  yield all([
    loginSuccessSaga(),
    loginSuccessWatcher(),
    registerFailWatcher(),
    apiCallsSaga(),
    signOutWatcher(),
    createOrderSuccessWatcher(),
    getOrderHistoryWatcher(),
  ]);
}

export default rootSaga;