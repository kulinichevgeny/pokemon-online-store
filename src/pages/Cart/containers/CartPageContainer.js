import { useCallback, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import CartPageLayout from "../components/CartPageLayout"
import { CREATE_ORDER_REQUEST, DELETE_ITEM_REQUEST, GET_CART_REQUEST, UPDATE_QUANTITY_REQUEST } from "../actions"
import { ROUTES } from "../../../routes/routeNames"
import Popup from "../../../commonComponents/Popup"
import { useModalPopup } from "../../../hooks"

import { SIGN_OUT } from "../../Login/actions"
import styles from "../../Cart/components/CartPageLayout/style.module.scss"

const CartPageContainer = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { itemsList, isLoading, editPokemonId, totalPrice } = useSelector(state => state.cart)
  const { customerId } = useSelector(state => state.authorization)

  const [isModalOpen, handleOpen, handleClose] = useModalPopup()

  const [popupTitle, setPopupTitle] = useState('')
  const [popupStatus, setPopupStatus] = useState('')

  let pokemonIdToRemove = useRef(null)

  const handleDeletePopup = useCallback((id) => {
    setPopupTitle('Are you sure you want to delete this pokemon?')
    setPopupStatus('removeItem')

    handleOpen()

    pokemonIdToRemove.current = id

    return pokemonIdToRemove.current
  },[pokemonIdToRemove, handleOpen])

  const handleDeleteCartItem = useCallback(() => {
    dispatch(DELETE_ITEM_REQUEST(pokemonIdToRemove.current))

    handleClose()
  },[dispatch, pokemonIdToRemove, handleClose])

  useEffect(() => {
    dispatch(GET_CART_REQUEST())
  }, [dispatch])

  const handleGoToDetails = useCallback((id) => {
    history.push(`${ROUTES.POKEMON_STORE}/${id}`)
  }, [history])

  const handleCreateOrderPopup = useCallback(() => {
    setPopupTitle('Are you sure you want create order?')
    setPopupStatus('createOrder')

    handleOpen()
  },[handleOpen])

  const handleCreateOrder = useCallback((event) => {
    event.preventDefault()

    const cartInfoToOrder = {
      customerId,
      totalPrice,
      itemsList,
    }

    if (totalPrice !== 0) {
      dispatch(CREATE_ORDER_REQUEST(cartInfoToOrder))
      handleClose()
    } else {
      setPopupTitle('You have no items in your cart!')
      setPopupStatus('emptyCart')
    }
  },[dispatch, itemsList, totalPrice, customerId, handleClose])

  const handleIncrement = useCallback((item) => {
    const itemCopy = Object.assign({}, item)

    const updatedData = {
      id: itemCopy.id,
      quantity: itemCopy.quantity + 1,
    }

    dispatch(UPDATE_QUANTITY_REQUEST(updatedData))
  }, [dispatch])

  const handleDecrement = useCallback((item) => {
    const itemCopy = Object.assign({}, item)

    if (itemCopy.quantity > 1) {
      const updatedData = {
        id: itemCopy.id,
        quantity: itemCopy.quantity - 1,
      }

      dispatch(UPDATE_QUANTITY_REQUEST(updatedData))
    }
  }, [dispatch])

  // Ctrl + Q = LOGOUT
  useEffect(() => {
    const onKeyPress = (event) => {
      if (event.key === '\u0011') {
        dispatch(SIGN_OUT())
      }
    }
    document.addEventListener('keypress', onKeyPress)
    return () => {
      document.removeEventListener('keypress', onKeyPress)
    }
  }, [dispatch])

  return <>
    <CartPageLayout
        itemsList={itemsList}
        isLoading={isLoading}
        editPokemonId={editPokemonId}
        totalPrice={totalPrice}
        handleCreateOrderPopup={handleCreateOrderPopup}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleGoToDetails={handleGoToDetails}
        handleDeletePopup={handleDeletePopup}
    />
    <Popup
        isOpen={isModalOpen}
        onClose={handleClose}
        title={popupTitle}
    >

      { popupStatus === 'createOrder' ?
          <>
            <button className={styles.popupCancelButton} onClick={handleClose}>Cancel</button>
            <button className={styles.popupConfirmButton} onClick={handleCreateOrder}>Create</button>
          </>
          : popupStatus === 'removeItem' ?
              <>
                <button className={styles.popupCancelButton} onClick={handleClose}>Cancel</button>
                <button className={styles.popupDeleteButton} onClick={handleDeleteCartItem}>Delete</button>
              </>
              :
              <button className={styles.popupConfirmButton} onClick={handleClose}>Got It</button>
      }
    </Popup>
  </>
}

export default CartPageContainer
