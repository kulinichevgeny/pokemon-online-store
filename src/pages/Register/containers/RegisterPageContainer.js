import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import RegisterPageLayout from "../components/RegisterPageLayout";
import { useForm, useModalPopup } from "../../../hooks/";
import { SIGN_UP_REQUEST } from "../actions";
import { ROUTES } from "../../../routes/routeNames";
import Popup from "../../../commonComponents/Popup";

import styles from "../../Register/components/RegisterPageLayout/style.module.scss";

const RegisterPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { success, message, errors } = useSelector(state => state.registration);

  const [isModalOpen, handleOpen, handleClose] = useModalPopup();

  const [registerValues, setRegisterValues] = useForm({
    email: '',
    password: '',
    confirmedPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    gender: 'male',
  });

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    const {confirmedPassword, ...requestBody} = registerValues;

    if (registerValues.password === registerValues.confirmedPassword) {
      dispatch(SIGN_UP_REQUEST(requestBody));
    } else {
      handleOpen();
    }

    handleOpen();
  },[dispatch, registerValues, handleOpen]);

  const handleAuth = useCallback(() => {
    handleClose();

    if (success) history.push(ROUTES.SIGN_IN)
  },[handleClose, history, success]);

  return <>
    <RegisterPageLayout
        loginValues={registerValues}
        setRegisterValues={setRegisterValues}
        handleSubmit={handleSubmit}
        handleChange={setRegisterValues}
        registerValues={registerValues}
    />
    { errors || registerValues.password !== registerValues.confirmedPassword ?
      <Popup
          isOpen={isModalOpen}
          onClose={handleClose}
          title={`Something went wrong`}
      >
        <div className={styles.popupContent}>
          <div>• Email must be an email</div>
          <div>• Password must be at least 8 characters long and also contain a number</div>
          <div>• Password and confirmation password must match</div>
        </div>
        <button className={styles.popupCancelButton} onClick={handleClose}>Got It</button>
      </Popup>
        :
      <Popup
      isOpen={isModalOpen}
      onClose={handleAuth}
      title={message}
      >
      <button className={styles.popupConfirmButton} onClick={handleAuth}>Got It</button>
      </Popup>
    }
  </>
};

export default RegisterPageContainer;