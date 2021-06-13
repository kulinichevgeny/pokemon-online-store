import 'regenerator-runtime/runtime';
import { all } from 'redux-saga/effects';

import apiCallsSaga from '../helpers/requests/watchRequest';

function* rootSaga() {
  yield all([apiCallsSaga()]);
}

export default rootSaga;