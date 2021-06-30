// import CircularProgress from '@material-ui/core/CircularProgress';

import styles from "./style.module.scss";
import Counter from "../../../../commonComponents/Counter";

const CartPageLayout = ({ isLoading, editPokemonId, itemsList, totalPrice, handleDeleteCartItem, handleCreateOrder, handleIncrement, handleDecrement, handleGoToDetails }) => {
  return (
      <div>
        <h1>Shopping Cart Page</h1>

        { isLoading ? (
            <div className={styles.progressBar} />
        ) : (
            <div>
              <div className={styles.cartTitle}>Shopping Cart</div>
              <div className={styles.cartWrapper}>
                <h2 className={styles.totalPrice}>Total Price: {totalPrice} coins</h2>

                <div className={styles.pokemonInfoWrapper}>
                  {itemsList.map((item) => (
                      <div className={styles.pokemonCard} key={item.id}>
                        <h3 className={styles.pokemonName}>{item.name}</h3>
                        <div className={styles.pokemonCardContent}>
                          <img src={item.image} onClick={() => handleGoToDetails(item.id)} alt=""/>
                          {/*{ editPokemonId === item.id && (<CircularProgress className={styles.cardLoading}/>)}*/}
                          <Counter
                              handleIncrement={() => handleIncrement(item)}
                              handleDecrement={() => handleDecrement(item)}
                          >
                            <p className={styles.pokemonQuantity} >{item.quantity}</p>
                            </Counter>
                          <p className={styles.pokemonPrice}>Price: <strong>{item.price * item.quantity}</strong></p>
                          <button className={styles.pokemonDelete} onClick={() => handleDeleteCartItem(item.id)}>Remove</button>
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