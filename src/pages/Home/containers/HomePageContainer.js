import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import HomePageLayout from "../components/HomePageLayout"
import { SIGN_OUT } from "../../Login/actions"
import { GET_CART_REQUEST } from "../../Cart/actions"

const HomePageContainer = () => {
  const dispatch = useDispatch()

  const { itemsList } = useSelector(state => state.cart)

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

  useEffect(() => {
    if (itemsList.length === 0) dispatch(GET_CART_REQUEST())
  }, [dispatch, itemsList.length])

  return <HomePageLayout />
}

export default HomePageContainer
