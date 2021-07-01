// import CircularProgress from '@material-ui/core/CircularProgress';

import styles from "./style.module.scss";
import Counter from "../../../../commonComponents/Counter";

const CartPageLayout = ({
                          isLoading,
                          itemsList,
                          totalPrice,
                          handleDeleteCartItem,
                          handleCreateOrder,
                          handleIncrement,
                          handleDecrement,
                          handleGoToDetails
                        }) => {
  return (
      <div>
        <h1>Shopping Cart Page</h1>

        { isLoading ? (
            <div className={styles.progressBar}/>
        ) : (
            <div>
              <div className={styles.cartFolderTitle}>Shopping Cart</div>
              <div className={styles.cartFolderWrapper}>
                <h2 className={styles.cartFolderTotalPrice}>Total Price: {totalPrice} coins</h2>

                <div className={styles.pokemonCardWrapper}>
                  {itemsList.map((item) => (
                      <div className={styles.pokemonCard} key={item.id}>
                        <h3 className={styles.pokemonName} onClick={() => handleGoToDetails(item.id)}>{item.name}</h3>
                        <div className={styles.pokemonCardContent}>
                          <img src={item.image} onClick={() => handleGoToDetails(item.id)} alt=""/>
                          {/*{ editPokemonId === item.id && (<CircularProgress className={styles.cardLoading}/>)}*/}
                          <Counter
                              handleIncrement={() => handleIncrement(item)}
                              handleDecrement={() => handleDecrement(item)}
                          >
                            <p className={styles.pokemonCardQuantity}>{item.quantity}</p>
                          </Counter>
                          <p className={styles.pokemonCardPrice}>Price: <strong>{item.price * item.quantity}</strong>
                          </p>
                          <button className={styles.pokemonDelete}
                                  onClick={() => handleDeleteCartItem(item.id)}>Remove
                          </button>
                        </div>
                      </div>
                  ))}
                </div>

                <div className={styles.createOrderWrapper}>
                  <button className={styles.createOrderButton} onClick={handleCreateOrder}>Create Order</button>
                </div>
              </div>
            </div>
        )}

      </div>
  );
};

export default CartPageLayout;