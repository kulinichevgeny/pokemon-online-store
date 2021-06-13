import { Switch, Route } from 'react-router-dom';

import { ROUTES } from './routeNames';
import HomePageContainer from '../pages/Home/containers/HomePageContainer';
import PokemonDetailsPageContainer from '../pages/PokemonDetails/containers/PokemonDetailsPageContainer';
import PokemonStorePageContainer from '../pages/PokemonStore/containers/PokemonStorePageContainer';

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
        <Route exact
               path={ROUTES.POKEMON_STORE}
               component={PokemonStorePageContainer}
        />
        {/*<Route exact*/}
        {/*       path={ROUTES.POKEMON_DETAILS_PAGE}*/}
        {/*       component={PokemonDetailsPageContainer}*/}
        {/*/>*/}
        <Route exact
               path={ROUTES.POKEMON_DETAILS}
               component={PokemonDetailsPageContainer}
        />

      </Switch>
  )
};

export default Routes;