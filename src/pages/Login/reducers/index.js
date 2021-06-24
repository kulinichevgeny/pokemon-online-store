import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  isAuthorized: false,
  userInfo: {},
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
    const { accessToken, ...accountInfo } = payload.response;

    return {
      ...state,
      isLoading: false,
      isAuthorized: true,
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