import { takeEvery } from "redux-saga/effects";

import { SIGN_UP_FAIL } from "../actions";

function registerFailSaga(action) {
   // const { response } = action.payload;

   // alert(response);
}

export function* registerFailWatcher(action) {
  yield takeEvery(SIGN_UP_FAIL, registerFailSaga);
}