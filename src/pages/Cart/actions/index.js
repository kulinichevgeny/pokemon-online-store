import { createAction } from "redux-actions";

export const GET_CART_REQUEST = createAction('GET_CART_REQUEST');
export const GET_CART_SUCCESS = createAction('GET_CART_SUCCESS');
export const GET_CART_FAIL = createAction('GET_CART_FAIL');

export const ADD_ITEM_REQUEST = createAction('ADD_ITEM_REQUEST');
export const ADD_ITEM_SUCCESS = createAction('ADD_ITEM_SUCCESS');
export const ADD_ITEM_FAIL = createAction('ADD_ITEM_FAIL');

export const DELETE_ITEM_REQUEST = createAction('DELETE_ITEM_REQUEST');
export const DELETE_ITEM_SUCCESS = createAction('DELETE_ITEM_SUCCESS');
export const DELETE_ITEM_FAIL = createAction('DELETE_ITEM_FAIL');

export const CREATE_ORDER_REQUEST = createAction('CREATE_ORDER_REQUEST');
export const CREATE_ORDER_SUCCESS = createAction('CREATE_ORDER_SUCCESS');
export const CREATE_ORDER_FAIL = createAction('CREATE_ORDER_FAIL');