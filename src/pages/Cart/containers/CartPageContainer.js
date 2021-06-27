import {useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CartPageLayout from "../components/CartPageLayout";
import { CREATE_ORDER_REQUEST, DELETE_ITEM_REQUEST, GET_CART_REQUEST } from "../actions";

const CartPageContainer = () => {
  const dispatch = useDispatch();

  const { itemsList, isLoading, totalPrice } = useSelector(state => state.cart)
  const { customerId } = useSelector(state => state.authorization)

  useEffect(() => {
    dispatch(GET_CART_REQUEST());
  }, [dispatch])

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

  return <CartPageLayout
      itemsList={itemsList}
      isLoading={isLoading}
      handleDeleteCartItem={handleDeleteCartItem}
      totalPrice={totalPrice}
      handleCreateOrder={handleCreateOrder}
  />;
};

export default CartPageContainer;