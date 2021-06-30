import {useCallback, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import ProfilePageLayout from "../components/ProfilePageLayout";
import { GET_ORDER_REQUEST } from "../actions";
import { SIGN_OUT } from "../../Login/actions";
import { GET_CART_REQUEST } from "../../Cart/actions";

const ProfilePageContainer = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector(state => state.authorization)
  const { orderHistory } = useSelector(state => state.order)
  const { itemsList } = useSelector(state => state.cart)

  const handleGetOrder = useCallback(() => {
    if (orderHistory.length === 0) dispatch(GET_ORDER_REQUEST())
  }, [dispatch, orderHistory])

  // Ctrl + Q = LOGOUT
  useEffect(() => {
    const onKeyPress = (event) => {
      if (event.key === '\u0011') {
        dispatch(SIGN_OUT())
      }
    };
    document.addEventListener('keypress', onKeyPress);
    return () => {
      document.removeEventListener('keypress', onKeyPress);
    }
  }, [dispatch]);

  useEffect(() => {
    if (itemsList.length === 0) dispatch(GET_CART_REQUEST());
  }, [dispatch])

  return <ProfilePageLayout
      handleGetOrder={handleGetOrder}
      userInfo={userInfo}
      orderHistory={orderHistory}
  />;
};

export default ProfilePageContainer;