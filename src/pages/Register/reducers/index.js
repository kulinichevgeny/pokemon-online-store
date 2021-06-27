import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  success: false,
  message: '',
  isLoading: false,
  errors: null,
};

const registrationReducer = handleActions({
  [actions.SIGN_UP_REQUEST]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [actions.SIGN_UP_SUCCESS]: (state, {payload}) => {
    const { success, message } =  payload.response;

    return {
      ...state,
      isLoading: true,
      success,
      message,
    };
  },
  [actions.SIGN_UP_FAIL]: (state, {payload}) => ({
    ...state,
    isLoading: false,
    errors: payload.response,
  }),
}, defaultState);

export default registrationReducer;