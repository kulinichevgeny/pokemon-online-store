import {
  Box,
  DialogContentText,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

import styles from "./style.module.scss";

const Popup = ({ isOpen, onClose, title, children }) => {
  return (
      <Dialog open={isOpen} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Box className={styles.popupWrapper}>{children}</Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
  );
};

export default Popup;