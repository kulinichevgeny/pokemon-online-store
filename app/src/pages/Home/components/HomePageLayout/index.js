import { Link } from 'react-router-dom';

import { ROUTES } from '../../../../routes/routeNames';
import styles from './style.module.scss';

const HomePageLayout = () => {
  return (
      <div>
        {Object.entries(ROUTES).map(([routeName, path]) => (
            <Link to={path} key={routeName}>
              <button className={styles.pageSwitchers}>{routeName}</button>
            </Link>
        ))}
        <h1>Home Page</h1>
      </div>
  )
};

export default HomePageLayout;