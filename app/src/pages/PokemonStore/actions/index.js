import { createAction } from 'redux-actions'

export const GET_POKEMONS_REQUEST = createAction('GET_POKEMONS_REQUEST');
export const GET_POKEMONS_SUCCESS = createAction('GET_POKEMONS_SUCCESS');
export const GET_POKEMONS_FAIL = createAction('GET_POKEMONS_FAIL');