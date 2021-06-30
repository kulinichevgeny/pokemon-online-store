import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import CartPageLayout from "../components/CartPageLayout";
import { CREATE_ORDER_REQUEST, DELETE_ITEM_REQUEST, GET_CART_REQUEST, UPDATE_QUANTITY_REQUEST } from "../actions";
import { ROUTES } from "../../../routes/routeNames";

const CartPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { itemsList, isLoading, editPokemonId, totalPrice } = useSelector(state => state.cart)
  const { customerId } = useSelector(state => state.authorization)

  useEffect(() => {
    dispatch(GET_CART_REQUEST());
  }, [dispatch])

  const handleGoToDetails = useCallback((id) => {
    history.push(`${ROUTES.POKEMON_STORE}/${id}`);
  }, [history]);

  const handleDeleteCartItem = useCallback((id) => {
    let checked = window.confirm('Are you sure you want to delete?');

    if (checked) dispatch(DELETE_ITEM_REQUEST(id));
  },[dispatch])

  const handleCreateOrder = useCallback((event) => {
    event.preventDefault();

    const cartInfoToOrder = {
      customerId,
      totalPrice,
      itemsList,
    };

    if (totalPrice !== 0) {
      const checked = window.confirm('Are you sure you want create order?');

      if (checked) dispatch(CREATE_ORDER_REQUEST(cartInfoToOrder))
    } else {
     alert('Your cart is empty!');
    }
  },[dispatch, itemsList, totalPrice, customerId]);

  //------
  const handleIncrement = useCallback((item) => {
    const itemCopy = Object.assign({}, item)

    const updatedData = {
      id: itemCopy.id,
      quantity: itemCopy.quantity + 1,
    };

    dispatch(UPDATE_QUANTITY_REQUEST(updatedData))
  }, [dispatch]);


  const handleDecrement = useCallback((item) => {
    const itemCopy = Object.assign({}, item)

    if (itemCopy.quantity > 1) {
      const updatedData = {
        id: itemCopy.id,
        quantity: itemCopy.quantity - 1,
      };

      dispatch(UPDATE_QUANTITY_REQUEST(updatedData))
    }
  }, [dispatch, ]);
  //------

  return <CartPageLayout
      itemsList={itemsList}
      isLoading={isLoading}
      editPokemonId={editPokemonId}
      handleDeleteCartItem={handleDeleteCartItem}
      totalPrice={totalPrice}
      handleCreateOrder={handleCreateOrder}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleGoToDetails={handleGoToDetails}
  />;
};

export default CartPageContainer;