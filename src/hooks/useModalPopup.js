import { useState, useCallback } from "react"

export default (method = null, openStatus = false) => {
  const [isOpen, setOpen] = useState(openStatus)

  const handleOpen = useCallback(() => {
    setOpen(true)
  },[])

  const handleClose = useCallback(() => {
    setOpen(false)
  },[])

  const handleSubmit = useCallback(() => {
    if (method) method()

    setOpen(false)
  },[method])

  return [isOpen, handleOpen, handleClose, handleSubmit]
}
