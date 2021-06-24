import { useEffect } from "react";
import { useDispatch } from "react-redux";

import HomePageLayout from "../components/HomePageLayout";
import { SIGN_OUT } from "../../Login/actions";

const HomePageContainer = () => {
  const dispatch = useDispatch();

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

  return <HomePageLayout />;
};

export default HomePageContainer;