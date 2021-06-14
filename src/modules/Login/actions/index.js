import { createAction } from "redux-actions";

export const SIGN_IN_REQUEST = createAction("SIGN_IN_REQUEST");
export const SIGN_IN_SUCCESS = createAction("SIGN_IN_SUCCESS");
export const SIGN_IN_FAIL = createAction("SIGN_IN_FAIL");