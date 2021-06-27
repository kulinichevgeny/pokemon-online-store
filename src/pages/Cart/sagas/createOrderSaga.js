import { takeEvery } from "redux-saga/effects";

import { CREATE_ORDER_SUCCESS } from "../actions";

function createOrderSuccessSaga() {
  alert('You successfully created your order!');
}

export function* createOrderSuccessWatcher() {
  yield takeEvery(CREATE_ORDER_SUCCESS, createOrderSuccessSaga);
}