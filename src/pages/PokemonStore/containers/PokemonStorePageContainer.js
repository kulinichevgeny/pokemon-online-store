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

  const { pokemonsList, isLoading, pokemonPage } = useSelector(state => state.pokemonsManager);

  const [currentPage, setCurrentPage] = useState(pokemonPage);

  const handlePageChange = useCallback((data, page) => {
    setCurrentPage(page);
  },[])

  useEffect(() => {
    console.log('cur', currentPage)
    console.log('poke', pokemonPage)
    if (pokemonsList.length === 0 || pokemonPage !== currentPage)  {
      dispatch(GET_POKEMONS_REQUEST(currentPage));
    }
  }, [dispatch, currentPage, pokemonPage]);

  const handleGoToDetails = useCallback((id) => {
    history.push(`${ROUTES.POKEMON_STORE}/${id}`);
  }, [history]);

  // Ctrl + Q = LOG OUT
  useEffect(() => {
    const onKeypress = (event) => {
      if (event.key === '\u0011') {
        dispatch(SIGN_OUT())
      }
    }
    document.addEventListener('keypress', onKeypress);

    return () => {
      document.removeEventListener('keypress', onKeypress);
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