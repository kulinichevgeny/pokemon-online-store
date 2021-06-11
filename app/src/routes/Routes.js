import { Switch, Route } from 'react-router-dom';

import { ROUTES } from "./routeNames";
import HomePageContainer from "../pages/Home/containers/HomePageContainer";

const Routes = () => {
  return (
      <Switch>
        <Route exact
               path={ROUTES.HOME_PAGE}
               component={HomePageContainer}
        />
        <Route exact
               path={ROUTES.AUTH_PAGE}
        />
      </Switch>
  )
}

export default Routes;