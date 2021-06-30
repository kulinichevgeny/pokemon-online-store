import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PokemonDetailsPageLayout from "../components/PokemonDetailsPageLayout";
import { GET_POKEMON_DETAILS_REQUEST } from "../actions";
import { ADD_ITEM_REQUEST, GET_CART_REQUEST } from "../../Cart/actions";

const PokemonDetailsPageContainer = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { pokemonInfo, isLoading } = useSelector(state => state.pokemonDetails)
  const { itemsList } = useSelector(state => state.cart)

  useEffect(() => {
    dispatch(GET_POKEMON_DETAILS_REQUEST(params.id));
  }, [dispatch, params.id]);

  const handleAddItemToCart = useCallback((event) => {
    event.preventDefault();

    const pokemonInfoToAdd = {
      id: pokemonInfo.id,
      name: pokemonInfo.name,
      image: pokemonInfo.image,
      quantity: 1,
      price: pokemonInfo.price,
    };

    dispatch(ADD_ITEM_REQUEST(pokemonInfoToAdd));
  },[dispatch, pokemonInfo]);

  useEffect(() => {
    if (itemsList.length === 0) dispatch(GET_CART_REQUEST());
  }, [dispatch])

  return <PokemonDetailsPageLayout
      pokemonInfo={pokemonInfo}
      isLoading={isLoading}
      handleAddItemToCart={handleAddItemToCart}
      abilities={pokemonInfo.abilities}
      stats={pokemonInfo.stats}
  />;
};

export default PokemonDetailsPageContainer;