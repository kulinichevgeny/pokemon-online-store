import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import PokemonDetailsPageLayout from "../components/PokemonDetailsPageLayout";
import { GET_POKEMON_DETAILS_REQUEST } from "../actions";

const PokemonDetailsPageContainer = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(params)
    dispatch(GET_POKEMON_DETAILS_REQUEST(params.id));
  });

  return <PokemonDetailsPageLayout />;
};

export default PokemonDetailsPageContainer;