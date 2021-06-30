import styles from "./style.module.scss";

const Counter = ({ children, handleIncrement, handleDecrement }) => {
  return (
      <div className={styles.counterWrapper}>
        <button onClick={handleDecrement}>－</button>
        { children }
        <button onClick={handleIncrement}>＋</button>
      </div>
  );
};

export default Counter;