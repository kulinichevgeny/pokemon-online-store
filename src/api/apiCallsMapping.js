import * as pokemonsStoreActions from "../pages/PokemonStore/actions"
import * as pokemonsStoreApi from "../pages/PokemonStore/api"

import * as pokemonDetailsActions from "../pages/PokemonDetails/actions"
import * as pokemonDetailsApi from "../pages/PokemonDetails/api"

import * as cartActions from "../pages/Cart/actions"
import * as cartApi from "../pages/Cart/api"

import * as loginActions from "../pages/Login/actions"
import * as loginApi from "../pages/Login/api"

import * as registerActions from "../pages/Register/actions"
import * as registerApi from "../pages/Register/api"

import * as profileActions from "../pages/Profile/actions"
import * as profileApi from "../pages/Profile/api"

const apiCallsMapping = (action) => {
  const mapping = {
    [pokemonsStoreActions.GET_POKEMONS_REQUEST]: pokemonsStoreApi.getPokemons,

    [pokemonDetailsActions.GET_POKEMON_DETAILS_REQUEST]: pokemonDetailsApi.getPokemonDetails,

    [cartActions.GET_CART_REQUEST]: cartApi.getCart,
    [cartActions.ADD_ITEM_REQUEST]: cartApi.addCartItem,
    [cartActions.DELETE_ITEM_REQUEST]: cartApi.deleteCartItem,
    [cartActions.CREATE_ORDER_REQUEST]: cartApi.createOrder,
    [cartActions.UPDATE_QUANTITY_REQUEST]: cartApi.updateItemQuantity,

    [loginActions.SIGN_IN_REQUEST]: loginApi.signIn,

    [registerActions.SIGN_UP_REQUEST]: registerApi.signUp,

    [profileActions.GET_ORDER_REQUEST]: profileApi.getOrder,
  }

  if (!mapping.hasOwnProperty(action.type)) {
    throw Error('Not mapped action')
  }

  return mapping[action.type]
}

export default apiCallsMapping
