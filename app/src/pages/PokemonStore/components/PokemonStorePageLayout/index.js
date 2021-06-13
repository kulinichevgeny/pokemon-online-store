import React from 'react';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

import { ROUTES } from '../../../../routes/routeNames';
import styles from './style.module.scss';

const PokemonStorePageLayout = ({ pokemonsList, isLoading, handleGoToDetails }) => {
  return (
      <div>

        {Object.entries(ROUTES).map(([routeName, path]) => (
            <Link to={path} key={routeName}>
              <button className={styles.pageSwitchers}>{routeName}</button>
            </Link>
        ))}

        <h1>Pokemon Store Page</h1>

        {isLoading ? (
            <CircularProgress/>
        ) : (
            pokemonsList.map((pokemon) => (
                <div key={pokemon.id}>
                  <img src={pokemon.image} alt=""/>
                  <p>{pokemon.id}. {pokemon.name}</p>
                  <p>Price: {pokemon.price} coins</p>
                  <button onClick={() => handleGoToDetails(pokemon.id)}>See more</button>
                </div>
            )))}

      </div>
  )
};

export default PokemonStorePageLayout;