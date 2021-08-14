import { handleActions } from "redux-actions"

import * as actions from "../actions"

const defaultState = {
  totalPrice: 0,
  quantity: 0,
  itemsList: [],
  isLoading: false,
  editPokemonId: null,
  pokemonStatus: null,
  errors: null,
}

const cart = handleActions({
  // ============ GET CART ============
  [actions.GET_CART_REQUEST]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [actions.GET_CART_SUCCESS]: (state, {payload}) => {
    const { totalPrice, quantity, customerId, itemsList } = payload.response

    return {
      ...state,
      isLoading: false,
      totalPrice,
      quantity,
      customerId,
      itemsList,
    }
  },
  [actions.GET_CART_FAIL]: (state, {payload}) => ({
    ...state,
    isLoading: false,
    errors: payload,
  }),

  // ============ ADD ITEM TO CART ============
  [actions.ADD_ITEM_REQUEST]: (state) => ({
    ...state,
    isLoading: true,
    popupTitle: null,
  }),
  [actions.ADD_ITEM_SUCCESS]: (state, {payload}) => {
    const { totalPrice, quantity} = payload.response

    return {
      ...state,
      isLoading: false,
      totalPrice,
      quantity,
      pokemonStatus: 'You successfully add pokemon to the cart!',
    }
  },
  [actions.ADD_ITEM_FAIL]: (state, {payload}) => ({
    ...state,
    isLoading: false,
    errors: payload,
    pokemonStatus: 'Pokemon already in the cart!',
  }),

  // ============ DELETE ITEM FROM CART ============
  [actions.DELETE_ITEM_REQUEST]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [actions.DELETE_ITEM_SUCCESS]: (state, {payload}) => {
    const { cartState, removedItemId } = payload.response

    const itemsListCopy = [...state.itemsList]

    const itemIndexToRemove = itemsListCopy.findIndex(item => {
      return removedItemId === item.id
    })

    itemsListCopy.splice(itemIndexToRemove, 1)

    return {
      ...state,
      isLoading: false,
      itemsList: itemsListCopy,
      totalPrice: cartState.totalPrice,
      quantity: cartState.quantity,
      removedItemId,
    }
  },
  [actions.DELETE_ITEM_FAIL]: (state, {payload}) => ({
    ...state,
    isLoading: false,
    errors: payload,
  }),

  // ============ CREATE ORDER ============
  [actions.CREATE_ORDER_REQUEST]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [actions.CREATE_ORDER_SUCCESS]: () => ({
    ...defaultState,
  }),
  [actions.CREATE_ORDER_FAIL]: (state, {payload}) => ({
    ...state,
    isLoading: false,
    errors: payload,
  }),

  // ============ UPDATE QUANTITY ============
  [actions.UPDATE_QUANTITY_REQUEST]: (state, {payload}) => ({
    ...state,
    editPokemonId: payload.id,
  }),
  [actions.UPDATE_QUANTITY_SUCCESS]: (state, {payload}) => {
    const { cartState, updatedItem } = payload.response

    const itemsListCopy = [...state.itemsList]

    const itemToUpdate = itemsListCopy.find(item => {
      return updatedItem.id === item.id
    })

    itemToUpdate.quantity =  updatedItem.quantity

    return {
      ...state,
      editPokemonId: null,
      itemsList: itemsListCopy,
      isCardLoading: false,
      totalPrice: cartState.totalPrice,
      quantity: cartState.quantity,
    }
  },
  [actions.UPDATE_QUANTITY_FAIL]: (state, {payload}) => ({
    ...state,
    editPokemonId: null,
    isCardLoading: false,
    errors: payload,
  }),
}, defaultState)

export default cart
