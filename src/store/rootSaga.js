import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";

import apiCallsSaga from "../helpers/requests/watchRequest";
import { loginSuccessSaga, loginSuccessWatcher, loginFailWatcher } from "../pages/Login/sagas/loginSaga";
import { signOutWatcher } from "../pages/Login/sagas/logoutSaga";
import { registerFailWatcher } from "../pages/Register/sagas/registerSaga";
import { addToCartFailWatcher, addToCartSuccessWatcher } from "../pages/Cart/sagas/addToCartSaga";
import { createOrderSuccessWatcher } from "../pages/Cart/sagas/createOrderSaga";

function* rootSaga() {
  yield all([
    loginSuccessSaga(),
    loginSuccessWatcher(),
    loginFailWatcher(),
    registerFailWatcher(),
    apiCallsSaga(),
    signOutWatcher(),
    addToCartFailWatcher(),
    addToCartSuccessWatcher(),
    createOrderSuccessWatcher(),
  ]);
}

export default rootSaga;