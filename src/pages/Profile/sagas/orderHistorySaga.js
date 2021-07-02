import { takeEvery } from "redux-saga/effects";

import { GET_ORDER_SUCCESS } from "../actions";

function getOrderHistorySaga(action) {
  const { response } = action.payload;

  if (response.length === 0) alert('You should do at least one order to see order history!');
}

export function* getOrderHistoryWatcher(action) {
  yield takeEvery(GET_ORDER_SUCCESS, getOrderHistorySaga);
}