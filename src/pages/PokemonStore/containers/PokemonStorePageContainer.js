import {useCallback, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import PokemonStorePageLayout from "../components/PokemonStorePageLayout";
import { GET_POKEMONS_REQUEST } from "../actions";
import { ROUTES } from "../../../routes/routeNames";

const PokemonStorePageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {pokemonsList, isLoading} = useSelector(state => state.pokemonsManager);

  useEffect(() => {
    if (pokemonsList.length === 0) dispatch(GET_POKEMONS_REQUEST())
  }, [dispatch, pokemonsList.length]);

  const handleGoToDetails = useCallback((id) => {
    history.push(`${ROUTES.POKEMON_STORE}/${id}`);
  }, [history]);

  return <PokemonStorePageLayout pokemonsList={pokemonsList} isLoading={isLoading} handleGoToDetails={handleGoToDetails} />;
};

export default PokemonStorePageContainer;