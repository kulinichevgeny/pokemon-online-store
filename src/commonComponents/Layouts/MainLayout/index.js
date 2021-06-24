import { Link } from "react-router-dom";
import * as _ from "lodash";

import { ROUTES } from "../../../routes/routeNames";

import styles from "./style.module.scss";
import { Box } from "@material-ui/core";
import computer from "../../../static/img/computer.png";
import folder from "../../../static/img/folder.png";
import spotify from "../../../static/img/spotify.png";

const MainLayout = ({ children }) => {
  return (
      <div>

        <Box className={styles.foldersWrapper}>
          <Box className={styles.folder}>
            <img src={computer} alt=""/>
            <p>Computer</p>
          </Box>
          <Box className={styles.folder}>
            <img src={folder} alt=""/>
            <p>Pokemons</p>
          </Box>
          <Box className={styles.folder}>
            <img src={folder} alt=""/>
            <p>18+</p>
          </Box>
          <Box className={styles.folder}>
            <img src={spotify} alt=""/>
            <p>Spotify</p>
          </Box>
        </Box>

        <div className={styles.navigationBar}>
          <button className={styles.navigationBarStart}>Start</button>
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
          <div>{children}</div>
        </div>
      </div>
  )
};

export default MainLayout;