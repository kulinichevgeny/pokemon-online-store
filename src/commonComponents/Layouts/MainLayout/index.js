import { Link, useHistory } from "react-router-dom";
import useSound from "use-sound";
import { useSelector } from "react-redux";
import { useCallback } from "react";

import { ROUTES } from "../../../routes/routeNames";

import styles from "./style.module.scss";
import { Box } from "@material-ui/core";
import computer from "../../../static/img/computer.png";
import network from "../../../static/img/network.png";
import folder from "../../../static/img/folder.png";
import spotify from "../../../static/img/spotify.png";
import trash from "../../../static/img/trash.png";
import emptyTrash from "../../../static/img/emptyTrash.png";
import sound from "../../../static/win_95_error.mp3";


const MainLayout = ({ children }) => {
  const history = useHistory();

  const StartButton = () => {
    const [play] = useSound(
        sound,
        {volume: 0.1}
    );

    return <button className={styles.navigationBarStart} onClick={play}>Start</button>;
  };

  const { quantity } = useSelector(state => state.cart)
  const { isAuthorized } = useSelector(state => state.authorization)

  const handleGoToCart = useCallback((id) => {
    history.push(`${ROUTES.CART}`);
  }, [history]);

  return (
      <div>

        <Box className={styles.foldersWrapper} >
          <Box className={styles.folder}>
            <img src={computer} alt="Computer" />
            <p>My Computer</p>
          </Box>
          <Box className={styles.folder}>
            <img src={folder} alt="18+"/>
            <p>Pokémon:<br/>Twilight Wings</p>
          </Box>
          <Box className={styles.folder}>
            <img src={network} alt="Network"/>
            <p>Network</p>
          </Box>
          <Box className={styles.folder}>
            <img src={spotify} alt="Spotify"/>
            <p>Spotify</p>
          </Box>
        </Box>

        { quantity !== 0 ?
            <Box className={styles.trashFolder}>
              <img src={trash} alt="Trash" height='36px' width='36px' title='Double Click at me' onDoubleClick={handleGoToCart}/>
              <p>Items: {quantity}</p>
            </Box>
            :
            <Box className={styles.trashFolder}>
              <img src={emptyTrash} alt="Empty Trash" height='36px' width='36px' title='Double Click at me' onDoubleClick={handleGoToCart}/>
              <p>Empty</p>
            </Box>
        }

        <div className={styles.navigationBar}>
          <StartButton />

          { isAuthorized ?
              <div className={styles.navigationBarPages}>
                <Link to={ROUTES.HOME_PAGE}>
                  <button className={styles.pageSwitchers}>Home</button>
                </Link>
                <Link to={ROUTES.POKEMON_STORE}>
                  <button className={styles.pageSwitchers}>Pokémon Store</button>
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
          { isAuthorized && (
              quantity !== 0 ?
                  <Link to={ROUTES.CART}>
                    <div className={styles.clippy} title='Go to cart'>Let's create order!</div>
                  </Link>
                  :
                  <Link to={ROUTES.POKEMON_STORE} onDoubleClick={() => window.alert('asd')}>
                    <div className={styles.clippy} title='Go to store'>Let's buy something!</div>
                  </Link>
          )}
          <div className={styles.paint}/>
          <div>{children}</div>
        </div>
      </div>
  )
};

export default MainLayout;