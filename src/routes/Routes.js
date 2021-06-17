import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import { ROUTES } from "./routeNames";
import HomePageContainer from "../pages/Home/containers/HomePageContainer";
import PokemonDetailsPageContainer from "../pages/PokemonDetails/containers/PokemonDetailsPageContainer";
import PokemonStorePageContainer from "../pages/PokemonStore/containers/PokemonStorePageContainer";
import LoginPageContainer from "../pages/Login/containers/LoginPageContainer";
import RegisterPageContainer from "../pages/Register/containers/RegisterPageContainer";

const Routes = () => {
  return (
      <Switch>
        <PrivateRoute exact
                      path={ROUTES.HOME_PAGE}
                      component={HomePageContainer}
        />
        <Route exact
               path={ROUTES.SIGN_UP}
               component={RegisterPageContainer}
        />
        <Route exact
               path={ROUTES.SIGN_IN}
               component={LoginPageContainer}
        />
        <PrivateRoute exact
                      path={ROUTES.POKEMON_STORE}
                      component={PokemonStorePageContainer}
        />
        <PrivateRoute exact
                      path={ROUTES.POKEMON_DETAILS}
                      component={PokemonDetailsPageContainer}
        />
      </Switch>
  )
};

export default Routes;