import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { ROUTES } from './routeNames';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthorized } = useSelector((state) => state.authorization);

  return (
      <Route
          {...rest}
          render={(props) => (!isAuthorized ? <Redirect to={ROUTES.HOME_PAGE} /> : <Component {...props} />)}
      />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
};

export default PrivateRoute;