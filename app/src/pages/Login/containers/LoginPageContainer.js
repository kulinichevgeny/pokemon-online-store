import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import useForm from "../../../hooks/useForm";
import LoginPageLayout from "../components/LoginPageLayout";
import { SIGN_IN_REQUEST } from "../../../modules/Login/actions";

const LoginPageContainer = () => {
  const dispatch = useDispatch();

  const [loginValues, setLoginValues] = useForm({ email: '', password: '' });

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    dispatch(SIGN_IN_REQUEST(loginValues));
  },[dispatch, loginValues]);

  return <LoginPageLayout
      loginValues={loginValues}
      setLoginValues={setLoginValues}
      handleSubmit={handleSubmit}
  />;
};

export default LoginPageContainer;