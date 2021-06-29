import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProfilePageLayout from "../components/ProfilePageLayout";
import { GET_ORDER_REQUEST } from "../actions";

const ProfilePageContainer = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector(state => state.authorization)
  const { orderHistory } = useSelector(state => state.order)

  const handleGetOrder = useCallback(() => {
    dispatch(GET_ORDER_REQUEST())
  }, [dispatch])

  return <ProfilePageLayout
      handleGetOrder={handleGetOrder}
      userInfo={userInfo}
      orderHistory={orderHistory}
  />;
};

export default ProfilePageContainer;