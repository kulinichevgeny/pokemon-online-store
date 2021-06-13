import React from 'react';
import { Link } from "react-router-dom";

import { ROUTES } from '../../../../routes/routeNames';
import styles from './style.module.scss'

const PokemonDetailsPageLayout = props => {
  return (
      <div>
        {Object.entries(ROUTES).map(([routeName, path]) => (
            <Link to={path} key={routeName}>
              <button className={styles.pageSwitchers}>{routeName}</button>
            </Link>
        ))}
        <h1>Pokemon Details Page</h1>
      </div>
  );
};

export default PokemonDetailsPageLayout;
