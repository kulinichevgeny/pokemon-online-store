// import styles from "./style.module.scss";

const ProfilePageLayout = ({ handleGetOrder }) => {
  return (
      <div>
        <h1>Profile Page</h1>

        <button onClick={handleGetOrder}>GET ORDERS HISTORY</button>
      </div>
  )
};

export default ProfilePageLayout;