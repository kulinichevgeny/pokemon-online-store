import { handleActions } from "redux-actions"

import * as actions from "../actions"

const defaultState = {
  orderHistory: [],
  isLoading: false,
  errors: null,
}

const order = handleActions({
  [actions.GET_ORDER_REQUEST]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [actions.GET_ORDER_SUCCESS]: (state, {payload}) => ({
    ...state,
    isLoading: true,
    orderHistory: payload.response,
  }),
  [actions.GET_ORDER_FAIL]: (state, {payload}) => ({
    ...state,
    isLoading: false,
    errors: payload,
  }),
}, defaultState)

export default order
