import { takeEvery } from "redux-saga/effects";

import { SIGN_OUT } from "../actions";

function signOutSaga() {
  localStorage.clear();
  window.location.reload();
}

export function* signOutWatcher(action) {
  yield takeEvery(SIGN_OUT, signOutSaga);
}