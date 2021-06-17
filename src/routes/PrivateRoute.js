import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { ROUTES } from "./routeNames";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthorized } = useSelector((state) => state.authorization);

  return (
      <Route
          {...rest}
          render={(props) => (!isAuthorized ? <Redirect to={ROUTES.SIGN_IN} /> : <Component {...props} />)}
      />
  );
};

export default PrivateRoute;