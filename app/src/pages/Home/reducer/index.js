import { handleActions } from 'redux-actions'

import * as actions from '../actions'

const defaultState = {
  pokemonsList: [],
  isLoading: false,
  errors: null,
}

const pokemonsManager = handleActions({
  [actions.GET_POKEMONS_REQUEST]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [actions.GET_POKEMONS_SUCCESS]: (state, {payload}) => ({
    ...state,
    isLoading: false,
    pokemonsList: payload,
  }),
  [actions.GET_POKEMONS_FAIL]: (state, {payload}) => ({
    ...state,
    isLoading: false,
    errors: payload,
  }),
}, defaultState)

export default pokemonsManager;