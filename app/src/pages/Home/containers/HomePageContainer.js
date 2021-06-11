import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HomePageLayout from "../components/HomePageLayout";
import { GET_POKEMONS_REQUEST } from "../actions";

const HomePageContainer = () => {
  const dispatch = useDispatch();

  const { pokemonsList } = useSelector(state => state.pokemonsManager);

  useEffect(() => {
    dispatch(GET_POKEMONS_REQUEST())
  },[dispatch])

  return <HomePageLayout pokemonsList={pokemonsList}/>
};

export default HomePageContainer;