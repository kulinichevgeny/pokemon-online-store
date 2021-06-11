import 'regenerator-runtime/runtime'
import { all } from 'redux-saga/effects'

import getPokemonsWatcher from "../pages/Home/sagas";

function* rootSaga() {
  yield all([getPokemonsWatcher()])
}

export default rootSaga;