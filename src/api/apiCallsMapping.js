import * as pokemonsStoreActions from "../pages/PokemonStore/actions";
import * as pokemonsStoreApi from "../pages/PokemonStore/api";

import * as pokemonDetailsActions from "../pages/PokemonDetails/actions";
import * as pokemonDetailsApi from "../pages/PokemonDetails/api";

import * as loginActions from "../pages/Login/actions";
import * as loginApi from "../pages/Login/api";

import * as registerActions from "../pages/Register/actions"
import * as registerApi from "../pages/Register/api"

const apiCallsMapping = (action) => {
  const mapping = {
    [pokemonsStoreActions.GET_POKEMONS_REQUEST]: pokemonsStoreApi.getPokemons,

    [pokemonDetailsActions.GET_POKEMON_DETAILS_REQUEST]: pokemonDetailsApi.getPokemonDetails,

    [loginActions.SIGN_IN_REQUEST]: loginApi.signIn,

    [registerActions.SIGN_UP_REQUEST]: registerApi.signUp,
  };

  if (!mapping.hasOwnProperty(action.type)) {
    throw Error("Not mapped action");
  }

  return mapping[action.type];
};

export default apiCallsMapping;