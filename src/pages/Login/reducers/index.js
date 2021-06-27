import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  isAuthorized: false,
  userInfo: {},
  customerId: null,
  accessToken: null,
  isLoading: false,
  errors: null,
};

const authorizationReducer = handleActions({
  [actions.SIGN_IN_REQUEST]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [actions.SIGN_IN_SUCCESS]: (state, { payload }) => {
    const { accessToken, _id, ...accountInfo } = payload.response;

    return {
      ...state,
      isLoading: false,
      isAuthorized: true,
      customerId: _id,
      userInfo: accountInfo,
      accessToken,
    };
  },
  [actions.SIGN_IN_FAIL]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    errors: payload.response,
  }),
}, defaultState);

export default authorizationReducer;