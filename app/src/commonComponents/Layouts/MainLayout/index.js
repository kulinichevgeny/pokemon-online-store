import { Link } from "react-router-dom";
import * as _ from "lodash";

import { ROUTES } from "../../../routes/routeNames";
import styles from "./style.module.scss";

const MainLayout = ({ children }) => {
  return (
      <div>
        <div>
          {Object.entries(ROUTES).map(([routeName, path]) => (
              <Link to={path} key={routeName}>
                <button className={styles.pageSwitchers}>{_.startCase(routeName)}</button>
              </Link>
          ))}
        </div>
        <div>
          <div>{children}</div>
        </div>
      </div>
  )
};

export default MainLayout;