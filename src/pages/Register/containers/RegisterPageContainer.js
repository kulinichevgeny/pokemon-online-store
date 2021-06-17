import { useCallback, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import useForm from "../../../hooks/useForm";
import RegisterPageLayout from "../components/RegisterPageLayout";
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
  });

  // const [gender, setGenderValue] = useState();

  // const handleGenderChange = (event) => {
  //   setGenderValue(event.target.value)
  // }

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    dispatch(SIGN_UP_REQUEST(registerValues));
  },[dispatch, registerValues]);

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
      // gender={gender}
      // handleGenderChange={handleGenderChange}
  />;
};

export default RegisterPageContainer;