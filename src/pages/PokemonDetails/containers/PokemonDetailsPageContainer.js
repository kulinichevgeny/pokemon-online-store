import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PokemonDetailsPageLayout from "../components/PokemonDetailsPageLayout";
import { GET_POKEMON_DETAILS_REQUEST } from "../actions";
import { ADD_ITEM_REQUEST, GET_CART_REQUEST } from "../../Cart/actions";
import { useModalPopup } from "../../../hooks";
import Popup from "../../../commonComponents/Popup";

import styles from "../components/PokemonDetailsPageLayout/style.module.scss";

const PokemonDetailsPageContainer = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { pokemonInfo, isLoading } = useSelector(state => state.pokemonDetails)
  const { itemsList, pokemonStatus } = useSelector(state => state.cart)

  const [isModalOpen, handleOpen, handleClose] = useModalPopup();

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

    handleOpen();
  },[dispatch, pokemonInfo, handleOpen]);

  useEffect(() => {
    if (itemsList.length === 0) dispatch(GET_CART_REQUEST());
  }, [dispatch, itemsList.length]);

  return <>
    <PokemonDetailsPageLayout
        pokemonInfo={pokemonInfo}
        isLoading={isLoading}
        handleAddItemToCart={handleAddItemToCart}
        abilities={pokemonInfo.abilities}
        stats={pokemonInfo.stats}
    />
    <Popup
        isOpen={isModalOpen}
        onClose={handleClose}
        title={pokemonStatus}
      >
      <button className={styles.popupConfirmButton} onClick={handleClose}>Got It</button>
    </Popup>
  </>
};

export default PokemonDetailsPageContainer;