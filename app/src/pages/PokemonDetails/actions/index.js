import { createAction } from 'redux-actions';

export const GET_POKEMON_DETAILS_REQUEST = createAction('GET_POKEMON_DETAILS_REQUEST');
export const GET_POKEMON_DETAILS_SUCCESS = createAction('GET_POKEMON_DETAILS_SUCCESS');
export const GET_POKEMON_DETAILS_FAIL = createAction('GET_POKEMON_DETAILS_FAIL');