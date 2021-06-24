import styles from "./style.module.scss";

import React from "react";

const CartPageLayout = ({ isLoading, itemsList, totalPrice, handleDeleteCartItem, handleCreateOrder }) => {
  return (
      <div>
        <h1>Shopping Cart Page</h1>
        <h2 className={styles.totalPrice}>Total Price: {totalPrice}</h2>
        <button className={styles.createOrder} onClick={handleCreateOrder}>CREATE ORDER</button>

        { isLoading ? (
            <div className={styles.progressBar} />
        ) : (
            itemsList.map((item) => (
            <div key={item.id} className={styles.pokemonInfoWrapper}>
              <p>{item.name}</p>
              <p>Amount: {item.quantity}</p>
              <p>Price: {item.price}</p>
              <button onClick={() => handleDeleteCartItem(item.id)}>delete</button>
            </div>
            )))}


      </div>
  );
};

export default CartPageLayout;