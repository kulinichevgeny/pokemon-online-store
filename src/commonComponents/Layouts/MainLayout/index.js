import { Link } from "react-router-dom";
import * as _ from "lodash";
import useSound from "use-sound";

import { ROUTES } from "../../../routes/routeNames";

import styles from "./style.module.scss";
import { Box } from "@material-ui/core";
import computer from "../../../static/img/computer.png";
import folder from "../../../static/img/folder.png";
import spotify from "../../../static/img/spotify.png";
import paint from "../../../static/img/paint.png";
import sound from "../../../static/win_95_error.mp3";

const MainLayout = ({ children }) => {
  const StartButton = () => {
    const [play] = useSound(
        sound,
        {volume: 0.1}
    );

    return <button className={styles.navigationBarStart} onClick={play}>Start</button>;
  };

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
          <div className={styles.navigationBarPages}>
            {Object.entries(ROUTES).map(([routeName, path]) => (
                <Link to={path} key={routeName}>
                  <button className={styles.pageSwitchers}>{_.startCase(routeName)}</button>
                </Link>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.clippy} />
          <div className={styles.paint} />
          <div>{children}</div>
        </div>
      </div>
  )
};

export default MainLayout;