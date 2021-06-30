import { Link } from "react-router-dom";
import * as _ from "lodash";
import useSound from "use-sound";
import {useSelector} from "react-redux";

import { ROUTES } from "../../../routes/routeNames";

import styles from "./style.module.scss";
import { Box } from "@material-ui/core";
import computer from "../../../static/img/computer.png";
import folder from "../../../static/img/folder.png";
import spotify from "../../../static/img/spotify.png";
import sound from "../../../static/win_95_error.mp3";

const MainLayout = ({ children }) => {
  const StartButton = () => {
    const [play] = useSound(
        sound,
        {volume: 0.1}
    );

    return <button className={styles.navigationBarStart} onClick={play}>Start</button>;
  };

  const { quantity } = useSelector(state => state.cart)
  const { isAuthorized } = useSelector(state => state.authorization)

  return (
      <div>

        <Box className={styles.foldersWrapper}>
          <Box className={styles.folder}>
            <img src={computer} alt="Computer"/>
            <p>Computer</p>
          </Box>
          <Box className={styles.folder}>
            <img src={folder} alt="Pokemons"/>
            <p>Pokemons</p>
          </Box>
          <Box className={styles.folder}>
            <img src={folder} alt="18+"/>
            <p>18+</p>
          </Box>
          <Box className={styles.folder}>
            <img src={spotify} alt="Spotify"/>
            <p>Spotify</p>
          </Box>
        </Box>

        <div className={styles.navigationBar}>
          <StartButton />

          { isAuthorized ?
              <div className={styles.navigationBarPages}>
                <Link to={ROUTES.HOME_PAGE}>
                  <button className={styles.pageSwitchers}>Home</button>
                </Link>
                <Link to={ROUTES.POKEMON_STORE}>
                  <button className={styles.pageSwitchers}>Pokemon Store</button>
                </Link>
                <Link to={ROUTES.CART}>
                  <button className={styles.pageSwitchers}>Shopping Cart</button>
                </Link>
                <Link to={ROUTES.PROFILE}>
                  <button className={styles.pageSwitchers}>Profile</button>
                </Link>
              </div>
              :
              <div className={styles.navigationBarPages}>
                <Link to={ROUTES.SIGN_UP}>
                  <button className={styles.pageSwitchers}>Sign Up</button>
                </Link>
                <Link to={ROUTES.SIGN_IN}>
                  <button className={styles.pageSwitchers}>Sign In</button>
                </Link>
              </div>
          }

        </div>
        <div>
          <Link to={ROUTES.CART}>
            <div className={styles.clippy} title='Go to cart'>{quantity} items in cart</div>
          </Link>
          <div className={styles.paint} />
          <div>{children}</div>
        </div>
      </div>
  )
};

export default MainLayout;