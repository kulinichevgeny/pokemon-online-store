import moment from "moment";

import styles from "./style.module.scss";

const ProfilePageLayout = ({ userInfo, handleGetOrder, orderHistory }) => {
  return (
      <div>
        <h1>Profile Page</h1>
        <div className={styles.profileTitle} />
        <div className={styles.profileWrapper}>
          <h2>Account Info</h2>
          <div className={styles.profileContent}>
            <p>First Name: <strong>{userInfo.firstName}</strong></p>
            <p>Last Name: <strong>{userInfo.lastName}</strong></p>
            <p>Email: <strong>{userInfo.email}</strong></p>
            <p>Phone Number: <strong>{userInfo.phone}</strong></p>
            <span>Press <strong>Ctrl + Q</strong> to Sign Out</span>
          </div>
          <div className={styles.checkOrderHistory}>
            <button onClick={handleGetOrder}>Order History</button>
          </div>
          {orderHistory.map((order) => (
              <div className={styles.orderWrapper}>
                <p>Total Items: <strong>{order.itemsList.length}</strong></p>
                <p>Total Price: <strong>{order.totalPrice}</strong></p>
                <div className={styles.orderDate}>
                  <p>Ordered <strong>{moment(order.createdAt).format('DD MMM')}</strong> at <strong>{moment(order.createdAt).format('h:mm a')}</strong></p>
                </div>
              </div>
          ))}
        </div>
      </div>
  )
};

export default ProfilePageLayout;