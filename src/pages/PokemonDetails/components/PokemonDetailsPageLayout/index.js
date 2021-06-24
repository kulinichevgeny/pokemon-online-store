import styles from "./style.module.scss";
import React from "react";

const PokemonDetailsPageLayout = ({ pokemonInfo, isLoading, handleAddItemToCart }) => {
  return (
      <div>
        <h1>Pokemon Details Page</h1>

        { isLoading ? (
            <div className={styles.progressBar}/>
        ) : (
            <div className={styles.hueta}>
              <button onClick={handleAddItemToCart}>add</button>
            </div>
        )}

      </div>
  );
};

export default PokemonDetailsPageLayout;