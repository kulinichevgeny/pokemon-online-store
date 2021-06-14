import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { createBlacklistFilter } from "redux-persist-transform-filter";
import storage from "redux-persist/lib/storage";

import authorization from "../modules/Login/reducers"
import pokemonsManager from "../pages/PokemonStore/reducers";
import pokemonDetails from "../pages/PokemonDetails/reducers";

const authorizationBlackListedFields = createBlacklistFilter('authorization', [
  'isLoading',
  'errors',
]);

const rootReducer = combineReducers({
  authorization,
  pokemonsManager,
  pokemonDetails,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authorization'],
  transforms: [authorizationBlackListedFields],
};

export default persistReducer(persistConfig, rootReducer);