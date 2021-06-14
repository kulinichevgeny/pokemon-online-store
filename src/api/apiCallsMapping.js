import * as pokemonsStoreActions from "../pages/PokemonStore/actions";
import * as pokemonsStoreApi from "../pages/PokemonStore/api";

import * as pokemonDetailsActions from "../pages/PokemonDetails/actions";
import * as pokemonDetailsApi from "../pages/PokemonDetails/api";

import * as loginActions from "../modules/Login/actions"
import * as loginApi from "../modules/Login/api"

const apiCallsMapping = (action) => {
  const mapping = {
    [pokemonsStoreActions.GET_POKEMONS_REQUEST]: pokemonsStoreApi.getPokemons,

    [pokemonDetailsActions.GET_POKEMON_DETAILS_REQUEST]: pokemonDetailsApi.getPokemonDetails,

    [loginActions.SIGN_IN_REQUEST]: loginApi.signIn,
  };

  if (!mapping.hasOwnProperty(action.type)) {
    // throw "Not mapped action";
  }

  return mapping[action.type];
};

export default apiCallsMapping;