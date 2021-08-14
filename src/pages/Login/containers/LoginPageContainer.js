import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import { useForm, useModalPopup } from "../../../hooks"
import LoginPageLayout from "../components/LoginPageLayout"
import Popup from "../../../commonComponents/Popup"
import { SIGN_IN_REQUEST } from "../actions"
import { ROUTES } from "../../../routes/routeNames"

import styles from "../components/LoginPageLayout/style.module.scss"

const LoginPageContainer = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { errors } = useSelector(state => state.authorization)

  const [isModalOpen, handleOpen, handleClose] = useModalPopup()

  const [loginValues, setLoginValues] = useForm({
    email: '',
    password: '',
  })

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    handleOpen()

    if (loginValues.password !== '') {
      dispatch(SIGN_IN_REQUEST(loginValues))
    }
  },[dispatch, loginValues, handleOpen])

  const handleAuth = useCallback(() => {
    handleClose()

    history.push(ROUTES.HOME_PAGE)
  },[handleClose, history])

  return <>
    <LoginPageLayout
        loginValues={loginValues}
        setLoginValues={setLoginValues}
        handleSubmit={handleSubmit}
    />
    { errors ?
      <Popup
          isOpen={isModalOpen}
          onClose={handleClose}
          title={errors}
      >
        <button className={styles.popupCancelButton} onClick={handleClose}>Got It</button>
      </Popup>
        :
        <Popup
            isOpen={isModalOpen}
            onClose={handleAuth}
            title={'You have successfully logged in!'}
        >
          <button className={styles.popupConfirmButton} onClick={handleAuth}>Got It</button>
        </Popup>
    }
  </>
}

export default LoginPageContainer
