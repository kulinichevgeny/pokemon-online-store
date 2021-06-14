import React from "react";
import { CircularProgress } from "@material-ui/core";

import styles from "./style.module.scss";

const PokemonStorePageLayout = ({ pokemonsList, isLoading, handleGoToDetails }) => {
  return (
      <div>
        <h1>Pokemon Store Page</h1>

        <div className={styles.pokemonList}>
          { isLoading ? (
              <CircularProgress/>
          ) : (
              pokemonsList.map((pokemon) => (
                  <div key={pokemon.id}>
                    <div className={styles.pokemonCard}>
                      <h3 className={styles.pokemonCardTitle}>{pokemon.id}. {pokemon.name}</h3>
                      <div  className={styles.pokemonCardContent}>
                        <div className={styles.pokemonCardPhoto}>
                          <img src={pokemon.image} alt='Pokemon'/>
                        </div>
                        <p>Price: {pokemon.price} coins</p>
                        <button className={styles.pokemonCardButton} onClick={() => handleGoToDetails(pokemon.id)}>See more</button>
                      </div>
                    </div>
                  </div>
              )))}
        </div>
      </div>
  )
};

export default PokemonStorePageLayout;