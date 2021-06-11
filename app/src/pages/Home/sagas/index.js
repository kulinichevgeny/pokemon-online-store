import { call, put, takeEvery } from 'redux-saga/effects'

import {GET_POKEMONS_FAIL, GET_POKEMONS_REQUEST, GET_POKEMONS_SUCCESS} from "../actions";
import { getPokemons } from "../api";

function* getPokemonsWorker(action) {
  try {
    const pokemonsResponse = yield call(getPokemons);

    yield put(GET_POKEMONS_SUCCESS(pokemonsResponse.data))
    
  } catch (error) {
    yield put(GET_POKEMONS_FAIL(error.message))
  }
}

function* getPokemonsWatcher() {
  yield takeEvery(GET_POKEMONS_REQUEST, getPokemonsWorker)
}

export default getPokemonsWatcher;