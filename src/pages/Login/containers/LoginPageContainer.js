import { useCallback, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { useForm } from "../../../hooks";
import LoginPageLayout from "../components/LoginPageLayout";
import { SIGN_IN_REQUEST } from "../actions";
import { ROUTES } from "../../../routes/routeNames";

const LoginPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isAuthorized } = useSelector(state => state.authorization);

  const [loginValues, setLoginValues] = useForm({
    email: '',
    password: ''
  });

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    if (loginValues.password !== '') {
      dispatch(SIGN_IN_REQUEST(loginValues));
    } else {
      alert('The password field is required');
    }
  },[dispatch, loginValues]);

  // SignIn Page blocked until LogOut
  useLayoutEffect(() => {
    if (isAuthorized) history.push(ROUTES.POKEMON_STORE);
  }, [isAuthorized, history]);

  return <LoginPageLayout
      loginValues={loginValues}
      setLoginValues={setLoginValues}
      handleSubmit={handleSubmit}
  />;
};

export default LoginPageContainer;