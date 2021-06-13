import React from 'react';
import { CircularProgress } from '@material-ui/core';

import styles from './style.module.scss';

const PokemonStorePageLayout = ({ pokemonsList, isLoading, handleGoToDetails }) => {
  return (
      <div>
        <h1>Pokemon Store Page</h1>

        {isLoading ? (
            <CircularProgress/>
        ) : (
            pokemonsList.map((pokemon) => (
                <div key={pokemon.id}>
                  <img className={styles.pokemonPhoto} src={pokemon.image} alt="Pokemon" />
                  <p>{pokemon.id}. {pokemon.name}</p>
                  <p>Price: {pokemon.price} coins</p>
                  <button onClick={() => handleGoToDetails(pokemon.id)}>See more</button>
                </div>
            )))}
      </div>
  )
};

export default PokemonStorePageLayout;