import React, { useCallback, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import RegisterPageLayout from "../components/RegisterPageLayout";
import { useForm } from "../../../hooks/";
import { SIGN_UP_REQUEST } from "../actions";
import { ROUTES } from "../../../routes/routeNames";

const RegisterPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { success, message } = useSelector(state => state.registration);

  const [registerValues, setRegisterValues] = useForm({
    email: '',
    password: '',
    confirmedPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    gender: 'male',
  });

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    const {confirmedPassword, ...requestBody} = registerValues;

    if (registerValues.password === registerValues.confirmedPassword) {
      dispatch(SIGN_UP_REQUEST(requestBody));
    } else {
      alert('The password and confirm password fields do not match');
    }
  },[dispatch, registerValues]);

  // Success registration redirect to Login Page
  useLayoutEffect(() => {
    if (success) {
      alert(message);

      history.push(ROUTES.SIGN_IN);
    }
  }, [success, history]);

  return <RegisterPageLayout
      loginValues={registerValues}
      setRegisterValues={setRegisterValues}
      handleSubmit={handleSubmit}
      handleChange={setRegisterValues}
      registerValues={registerValues}
  />;
};

export default RegisterPageContainer;