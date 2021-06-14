import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import { ROUTES } from "./routeNames";
import HomePageContainer from "../pages/Home/containers/HomePageContainer";
import PokemonDetailsPageContainer from "../pages/PokemonDetails/containers/PokemonDetailsPageContainer";
import PokemonStorePageContainer from "../pages/PokemonStore/containers/PokemonStorePageContainer";
import LoginPageContainer from "../pages/Login/containers/LoginPageContainer";

const Routes = () => {
  return (
      <Switch>
        <Route exact
               path={ROUTES.HOME_PAGE}
               component={ HomePageContainer }
        />
        <Route exact
               path={ROUTES.LOGIN_PAGE}
               component={ LoginPageContainer }
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