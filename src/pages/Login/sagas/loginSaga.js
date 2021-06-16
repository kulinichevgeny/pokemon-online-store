import { takeEvery, take, select } from "redux-saga/effects";
import { REHYDRATE } from "redux-persist/es/constants";

import { SIGN_IN_SUCCESS, SIGN_IN_FAIL } from "../actions";
import { FUCK_YOU } from "../actions"
import api from "../../../api/config";

const authSelector = (state) => state.authorization;

export function* loginSuccessSaga(action) {
  if (action) {
    const { response } = action.payload;

    yield (api.defaults.headers.Authorization = `Bearer ${response.accessToken}`);
  } else {
    try {
      yield take(REHYDRATE);

      const { accessToken } = yield select(authSelector);

      if (accessToken) {
        api.defaults.headers.Authorization = `Bearer ${accessToken}`;
      }
    } catch (errors) {
        console.log(errors);
    }
  }
}

export function* failSaga(action) {
   const { response } = action.payload;

   alert(response);
}

export function* loginSuccessWatcher(action) {
  yield takeEvery(SIGN_IN_SUCCESS, loginSuccessSaga);
}

export function* loginFailWatcher(action) {
  yield takeEvery(SIGN_IN_FAIL, failSaga);
}