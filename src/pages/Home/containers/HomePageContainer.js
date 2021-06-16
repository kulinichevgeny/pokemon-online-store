import { useEffect } from "react";
import { useDispatch } from "react-redux";

import HomePageLayout from "../components/HomePageLayout";
import { SIGN_OUT } from "../../Login/actions";

const HomePageContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const onKeypress = (event) => {
      if (event.key === '\u0011') {
        dispatch(SIGN_OUT())
      }
    }
    document.addEventListener('keypress', onKeypress)

    return () => {
      document.removeEventListener('keypress', onKeypress)
    };
  }, [dispatch]);
  return <HomePageLayout />;
};

export default HomePageContainer;