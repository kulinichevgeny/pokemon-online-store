import { useCallback } from "react";
import { useDispatch } from "react-redux";

import ProfilePageLayout from "../components/ProfilePageLayout";
import { GET_ORDER_REQUEST } from "../actions";

const ProfilePageContainer = () => {
  const dispatch = useDispatch();

  const handleGetOrder = useCallback(() => {
    dispatch(GET_ORDER_REQUEST())
  }, [])

  return <ProfilePageLayout
      handleGetOrder={handleGetOrder}
  />;
};

export default ProfilePageContainer;