import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { createBlacklistFilter } from 'redux-persist-transform-filter';
import storage from 'redux-persist/lib/storage';

import pokemonsManager from '../pages/PokemonStore/reducers';
import pokemonDetails from '../pages/PokemonDetails/reducers';

const pokemonsManagerBlackListedFields = createBlacklistFilter('pokemonsManager', [
  'errors',
  'isLoading',
]);

const rootReducer = combineReducers({pokemonsManager, pokemonDetails});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['pokemonsManager'],
  transforms: [pokemonsManagerBlackListedFields],
};

export default persistReducer(persistConfig, rootReducer);