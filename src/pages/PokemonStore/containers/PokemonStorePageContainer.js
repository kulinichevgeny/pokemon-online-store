import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import PokemonStorePageLayout from "../components/PokemonStorePageLayout";
import { GET_POKEMONS_REQUEST } from "../actions";
import { ROUTES } from "../../../routes/routeNames";
import { GET_CART_REQUEST } from "../../Cart/actions";

const PokemonStorePageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { pokemonsList, isLoading, pokemonPage } = useSelector(state => state.pokemonsManager);
  const { isAuthorized } = useSelector(state => state.authorization);
  const { itemsList } = useSelector(state => state.cart)

  const [currentPage, setCurrentPage] = useState(pokemonPage);

  useEffect(() => {
    if (pokemonsList.length === 0 || pokemonPage !== currentPage)  {
      dispatch(GET_POKEMONS_REQUEST(currentPage));
    }

  }, [dispatch, currentPage, pokemonPage, pokemonsList.length]);

  useEffect(() => {
    if (isAuthorized && itemsList.length === 0) dispatch(GET_CART_REQUEST());
  }, [dispatch, itemsList.length, isAuthorized])

  const handlePageChange = useCallback((data, page) => {
    setCurrentPage(page);
  },[])

  const handleGoToDetails = useCallback((id) => {
    history.push(`${ROUTES.POKEMON_STORE}/${id}`);
  }, [history]);

  return <PokemonStorePageLayout
      pokemonsList={pokemonsList}
      isLoading={isLoading}
      handleGoToDetails={handleGoToDetails}
      currentPage={currentPage}
      handlePageChange={handlePageChange}
  />;
};

export default PokemonStorePageContainer;