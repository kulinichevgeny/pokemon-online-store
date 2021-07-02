import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import  useSound from "use-sound";

import { ROUTES } from "../../../routes/routeNames";
import { Box } from "@material-ui/core";

import styles from "./style.module.scss";
import computer from "../../../static/img/computer.png";
import network from "../../../static/img/network.png";
import folder from "../../../static/img/folder.png";
import spotify from "../../../static/img/spotify.png";
import trash from "../../../static/img/trash.png";
import emptyTrash from "../../../static/img/emptyTrash.png";
import sound from "../../../static/directed.mp3";

const MainLayout = ({ children }) => {
  const history = useHistory();

  const { quantity } = useSelector(state => state.cart)
  const { isAuthorized } = useSelector(state => state.authorization)

  const StartButton = () => {
    const [play] = useSound(
        sound,
        {volume: 0.5}
    );

    return <button className={styles.navBarStartButton} onClick={play}>Start</button>;
  };

  const handleGoToCart = useCallback(() => {
    history.push(`${ROUTES.CART}`);
  }, [history]);

  return (
      <div>

        {/* Desktop Background Folders */}
        <Box className={styles.desktopFoldersWrapper}>
          <Box className={styles.desktopFolder}>
            <img src={computer} alt="Folder"/>
            <p>My Computer</p>
          </Box>
          <Box className={styles.desktopFolder}>
            <img src={folder} alt="Folder"/>
            <p>Pokémon:<br/>Twilight Wings</p>
          </Box>
          <Box className={styles.desktopFolder}>
            <img src={network} alt="Folder"/>
            <p>Network</p>
          </Box>
          <Box className={styles.desktopFolder}>
            <img src={spotify} alt="Folder"/>
            <p>Spotify</p>
          </Box>
        </Box>

        {/* Bin */}
        { isAuthorized ?
            quantity !== 0 ?
                <Box className={styles.desktopBinFolder}>
                  <span className={styles.desktopBinFolderClick}>Double Click<br/>at me!</span>
                  <img src={trash} alt="Bin" height='36px' width='36px'
                       title='Double Click at me' onDoubleClick={handleGoToCart} />
                  <p>Items in your Cart: {quantity}</p>
                </Box>
                :
                <Box className={styles.desktopBinFolder}>
                  <span className={styles.desktopBinFolderClick}>Double Click<br/>at me!</span>
                  <img src={emptyTrash} alt="Bin" height='36px' width='36px'
                       title='Double Click at me' onDoubleClick={handleGoToCart}/>
                  <p>Nothing here</p>
                </Box>
            :
            <Box className={styles.desktopBinFolder}>
              <img src={emptyTrash} alt="Empty Trash" height='36px' width='36px' />
              <p>Nothing here</p>
            </Box>
        }

        {/* Navigation Bar */}
        <div className={styles.navBarWrapper}>
          <StartButton />

          { isAuthorized ?
              <div>
                <Link to={ROUTES.HOME_PAGE}>
                  <button className={styles.navBarPageSwitcher}>Home</button>
                </Link>
                <Link to={ROUTES.POKEMON_STORE}>
                  <button className={styles.navBarPageSwitcher}>Pokémon Store</button>
                </Link>
                <Link to={ROUTES.CART}>
                  <button className={styles.navBarPageSwitcher}>Shopping Cart</button>
                </Link>
                <Link to={ROUTES.PROFILE}>
                  <button className={styles.navBarPageSwitcher}>Profile</button>
                </Link>
              </div>
              :
              <div>
                <Link to={ROUTES.SIGN_UP}>
                  <button className={styles.navBarPageSwitcher}>Sign Up</button>
                </Link>
                <Link to={ROUTES.SIGN_IN}>
                  <button className={styles.navBarPageSwitcher}>Sign In</button>
                </Link>
              </div>
          }
        </div>

        {/* Clippy */}
          { isAuthorized && (
              quantity !== 0 ?
                  <Link to={ROUTES.CART}>
                    <div className={styles.clippy} title='Go to cart'>Click to create Order</div>
                  </Link>
                  :
                  <Link to={ROUTES.POKEMON_STORE}>
                    <div className={styles.clippy} title='Go to store'>Click to open Store</div>
                  </Link>
          )}

        {/* Desktop Background Paint */}
        <div className={styles.paint} />

        <div>{children}</div>
      </div>
  )
};

export default MainLayout;