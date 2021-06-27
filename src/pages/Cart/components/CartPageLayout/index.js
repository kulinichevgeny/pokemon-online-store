import styles from "./style.module.scss";

const CartPageLayout = ({ isLoading, itemsList, totalPrice, handleDeleteCartItem, handleCreateOrder }) => {
  return (
      <div>
        <h1>Shopping Cart Page</h1>

        { isLoading ? (
            <div className={styles.progressBar} />
        ) : (
            <div className={styles.cartWrapper}>
              <h2 className={styles.totalPrice}>Total Price: {totalPrice}</h2>

              <div className={styles.pokemonInfoWrapper}>
                {itemsList.map((item) => (
                    <div key={item.id} className={styles.pokemonInfoContent}>
                      <p className={styles.pokemonName}>{item.name}</p>
                      <img src={item.image} alt=""/>
                      <p>Amount: {item.quantity}</p>
                      {/*<button onClick={() => handleAddPokemon(item.id)}>+</button>*/}
                      <p className={styles.pokemonPrice}>Price: <strong>{item.price}</strong></p>
                      <button className={styles.pokemonDelete} onClick={() => handleDeleteCartItem(item.id)}>Remove</button>
                    </div>
                ))}
              </div>


              <div className={styles.createOrderWrapper}>
                <button className={styles.createOrderButton} onClick={handleCreateOrder}>Create Order</button>
              </div>

            </div>
            )}

      </div>
  );
};

export default CartPageLayout;