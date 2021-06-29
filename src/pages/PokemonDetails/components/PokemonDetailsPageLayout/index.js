import styles from "./style.module.scss";
import React from "react";

const PokemonDetailsPageLayout = ({ pokemonInfo, isLoading, handleAddItemToCart, abilities, stats }) => {
  return (
      <div className={styles.detailsPage}>
        <h1>Pokemon Details Page</h1>

        { isLoading ? (
            <div className={styles.progressBar}/>
        ) : (
            <div>
              <div className={styles.pokemonDetailsTitle} />
              <div className={styles.pokemonDetailsWrapper}>
                <div className={styles.pokemonDetailsPreview}>
                  <h2>{pokemonInfo.name}</h2>
                  <img src={pokemonInfo.image} alt={pokemonInfo.name}/>
                </div>

                <h3 className={styles.statsTitle}>Stats:</h3>
                <div className={styles.statsWrapper}>
                  {stats?.map((stat) => (
                      <div key={stat.id} className={styles.statsContent}>
                        <p className={styles.statTitle}>{stat.title}</p>
                        <p className={styles.statValue}><strong>{stat.value}</strong></p>
                      </div>
                  ))}
                </div>

                <h3 className={styles.abilitiesTitle}>Abilities:</h3>
                <div className={styles.abilitiesWrapper}>
                  {abilities?.map((ability) => (
                      <div key={ability.id} className={styles.abilitiesContent}>
                        <p className={styles.abilityTitle}><strong>{ability.title}</strong></p>
                        <p className={styles.abilityDescription}>{ability.description}</p>
                      </div>
                  ))}
                </div>

                <div className={styles.addToCartWrapper}>
                  <p className={styles.addToCartTitle}>Price: <strong>{pokemonInfo.price}</strong> coins</p>
                  <button className={styles.addToCartButton} onClick={handleAddItemToCart}>Add to Cart</button>
                </div>
              </div>
            </div>

        )}

      </div>
  );
};

export default PokemonDetailsPageLayout;