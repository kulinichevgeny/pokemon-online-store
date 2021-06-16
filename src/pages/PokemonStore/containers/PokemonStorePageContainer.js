import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import PokemonStorePageLayout from "../components/PokemonStorePageLayout";
import { GET_POKEMONS_REQUEST } from "../actions";
import { SIGN_OUT } from "../../Login/actions";
import { ROUTES } from "../../../routes/routeNames";

const PokemonStorePageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = useCallback((data, page) => {
    setCurrentPage(page);
    console.log(page)
  },[])

  const { pokemonsList, isLoading } = useSelector(state => state.pokemonsManager);

  useEffect(() => {
    dispatch(GET_POKEMONS_REQUEST(currentPage))
  }, [dispatch, currentPage]);

  const handleGoToDetails = useCallback((id) => {
    history.push(`${ROUTES.POKEMON_STORE}/${id}`);
  }, [history]);

  useEffect(() => {
    const onKeypress = (event) => {
      if (event.key === '\u0011') {
        dispatch(SIGN_OUT())
      }
    }
    document.addEventListener('keypress', onKeypress)

    return () => {
      document.removeEventListener('keypress', onKeypress)
    };
  }, [dispatch]);

  return <PokemonStorePageLayout
      pokemonsList={pokemonsList}
      isLoading={isLoading}
      handleGoToDetails={handleGoToDetails}
      currentPage={currentPage}
      handlePageChange={handlePageChange}
  />;
};

export default PokemonStorePageContainer;