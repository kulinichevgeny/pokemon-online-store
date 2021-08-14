import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import { createBlacklistFilter } from "redux-persist-transform-filter"
import storage from "redux-persist/lib/storage"

import authorization from "../pages/Login/reducers"
import pokemonsManager from "../pages/PokemonStore/reducers"
import pokemonDetails from "../pages/PokemonDetails/reducers"
import registration from "../pages/Register/reducers"
import cart from "../pages/Cart/reducers"
import order from "../pages/Profile/reducers"

const authorizationBlackListedFields = createBlacklistFilter('authorization', [
  'isLoading',
  'errors',
])

const rootReducer = combineReducers({
  registration,
  authorization,
  pokemonsManager,
  pokemonDetails,
  cart,
  order,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authorization'],
  transforms: [authorizationBlackListedFields],
}

export default persistReducer(persistConfig, rootReducer)
