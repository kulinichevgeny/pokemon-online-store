import { useState, useCallback } from "react";

export default (method = null, openStatus = false) => {
  const [isOpen, setOpen] = useState(openStatus);

  const handleOpen = useCallback(() => {
    setOpen(true);
  },[]);

  const handleClose = useCallback(() => {
    if (method) method();

    setOpen(false);
  },[]);

  return [isOpen, handleOpen, handleClose];
};