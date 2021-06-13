import * as pokemonsStoreActions from '../pages/PokemonStore/actions';
import * as pokemonsStoreApi from '../pages/PokemonStore/api';

import * as pokemonDetailsActions from '../pages/PokemonDetails/actions';
import * as pokemonDetailsApi from '../pages/PokemonDetails/api';

const apiCallsMapping = (action) => {
  const mapping = {
    [pokemonsStoreActions.GET_POKEMONS_REQUEST]: pokemonsStoreApi.getPokemons,
    [pokemonDetailsActions.GET_POKEMON_DETAILS_REQUEST]: pokemonDetailsApi.getPokemonDetails,
  };

  if (!mapping.hasOwnProperty(action.type)) {
    throw 'Not mapped action';
  }

  return mapping[action.type];
};

export default apiCallsMapping;